/**
 * Thin wrapper around Workers Static Assets. Two cutover-safety jobs, both
 * keyed off the request hostname so nothing needs a manual toggle at go-live:
 *
 * 1. Canonical host/scheme redirects (production only):
 *      - apex  carolinaprorestoration.com  -> https://www.carolinaprorestoration.com  (301)
 *      - any http://…carolinaprorestoration.com -> https://…  (301)
 *    This enforces the confirmed canonical form (https + www + no trailing
 *    slash — the path is preserved untouched, so /page stays /page). The
 *    *.workers.dev preview host is deliberately left alone.
 *
 * 2. Keep the *.workers.dev preview deployment out of search engines while the
 *    site is pre-launch, via an X-Robots-Tag: noindex HEADER (not robots.txt
 *    Disallow) so crawlers can fetch the page and see "noindex" and drop any
 *    already-known preview URL. On the real custom domain this does nothing —
 *    production is always indexable.
 *
 * NOTE: for the apex->www redirect to fire, BOTH the apex and www hostnames
 * must be routed to this Worker at cutover (see DEPLOY.md). Cloudflare's
 * "Always Use HTTPS" is a fine belt-and-suspenders for #1's scheme redirect.
 */
// Legacy Duda /locations/<slug> -> city-page 301s. These live in the Worker
// (not _redirects) because the static-assets layer proved unreliable here in
// production: its edge cache kept serving stale/wildcard 301 targets for these
// paths, while worker-generated redirects are computed fresh on every request.
// Targets verified against the live Duda site's own 301s (2026-07-06).
const LOCATION_REDIRECTS = {
  fort_mill: "/water-damage-restoration-fort-mill-sc",
  1: "/water-damage-restoration-fort-mill-sc",
  rock_hill: "/water-damage-restoration-rock-hill-sc",
  gastonia: "/water-damage-restoration-gastonia-nc",
  matthews: "/water-damage-restoration-matthews-nc",
  mint_hill: "/water-damage-restoration-mint-hill-nc",
  monroe: "/water-damage-restoration-monroe-nc",
  pineville: "/water-damage-restoration-pineville-nc",
  waxhaw: "/water-damage-restoration-waxhaw-nc",
  ballantyne: "/water-damage-restoration-ballantyne-nc",
  belmont: "/water-damage-restoration-belmont-nc",
  charlotte: "/water-damage-restoration-charlotte-nc",
  clover: "/water-damage-restoration-clover-sc",
  indian_land: "/water-damage-restoration-indian-land-sc",
  indian_trail: "/water-damage-restoration-indian-trail-nc",
  lancaster: "/water-damage-restoration-lancaster-sc",
  lake_wylie: "/water-damage-restoration-lake-wylie-sc",
  mount_holly: "/water-damage-restoration-mount-holly-nc",
  stallings: "/water-damage-restoration-stallings-nc",
  tega_cay: "/water-damage-restoration-tega-cay-sc",
  weddington: "/water-damage-restoration-weddington-nc",
  york: "/water-damage-restoration-york-sc",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    // Legacy /locations family: exact slugs -> city pages, anything else
    // (including bare /locations) -> the service-areas hub.
    const locMatch = url.pathname.match(/^\/locations(?:\/([^/]+)\/?)?$/);
    if (locMatch) {
      const slug = (locMatch[1] || "").toLowerCase();
      url.pathname = LOCATION_REDIRECTS[slug] || "/service-areas";
      url.search = "";
      return Response.redirect(url.toString(), 301);
    }
    const isProdDomain =
      host === "carolinaprorestoration.com" || host.endsWith(".carolinaprorestoration.com");

    // 1a. apex -> www (also upgrades scheme to https in the same 301).
    if (host === "carolinaprorestoration.com") {
      url.hostname = "www.carolinaprorestoration.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    // 1b. http -> https for the production domain (www or any subdomain).
    if (isProdDomain && url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    const res = await env.ASSETS.fetch(request);

    const isHtml = (res.headers.get("content-type") || "").includes("text/html");
    const isPreview = host.endsWith(".workers.dev");

    // Fast path: real (immutable, content-hashed) assets on production pass
    // through untouched so their long-lived caching is preserved.
    if (!isHtml && !isPreview) return res;

    const out = new Response(res.body, res);

    // 2. Never let the edge serve stale HTML. Pages are served at extensionless
    //    URLs so they can't be targeted by _headers globs; the default
    //    "max-age=0, must-revalidate" still let Cloudflare cache + serve a stale
    //    copy after a deploy (the content-hashed /_astro assets are unaffected).
    //    no-store keeps every HTML response fresh — important at every deploy
    //    and at cutover.
    if (isHtml) out.headers.set("Cache-Control", "no-store, must-revalidate");

    // 3. Suppress indexing on the *.workers.dev preview host only.
    if (isPreview) out.headers.set("X-Robots-Tag", "noindex, nofollow");

    return out;
  },
};

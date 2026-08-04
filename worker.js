/**
 * Worker in front of Workers Static Assets. It does everything the Cloudflare
 * *Pages* files (_redirects, _headers) would have done, because Workers Static
 * Assets does NOT honor either of those — they are a Pages-only feature. So the
 * legacy Duda redirect table and the baseline security headers live here, in
 * code, computed fresh on every request.
 *
 * Order of operations (all keyed off the request hostname, no manual toggles):
 *
 * 1. Canonical host/scheme normalization (production only), done FIRST so every
 *    later redirect resolves on the canonical host and we never emit an
 *    apex->apex hop:
 *      - apex  carolinaprorestoration.com  -> https://www.carolinaprorestoration.com (301)
 *      - any http://…carolinaprorestoration.com -> https://…  (301)
 *    The *.workers.dev preview host is deliberately left alone.
 *
 * 2. Legacy Duda URL redirects (ported verbatim from the old public/_redirects):
 *    exact-match slugs, the /services/* and /blog/* splats, and the whole
 *    /locations/* family -> current city pages. First match wins.
 *
 * 3. Serve the static asset, then layer on the baseline security headers (ported
 *    from public/_headers), the never-serve-stale-HTML cache split, and the
 *    preview-only noindex header.
 *
 * NOTE: for the apex->www redirect to fire, BOTH the apex and www hostnames must
 * be routed to this Worker (see wrangler.toml routes + DEPLOY.md). This Worker
 * ALSO only runs correctly under Wrangler >= 4, which is the only version that
 * respects `[assets] run_worker_first = true` — CI pins v4 for that reason.
 */

// Legacy Duda /locations/<slug> -> city-page 301s. Targets verified against the
// live Duda site's own 301s (2026-07-06). Object keys are strings ("1" matches
// the numeric /locations/1 slug).
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

// Exact-match legacy redirects, ported from public/_redirects. First match wins,
// and this table is consulted BEFORE the /services/* and /blog/* splats below,
// so the four /services/* overrides here take precedence over the generic splat.
// (/roof-repair---replacement is intentionally omitted — no live destination yet,
// pending a roofing-page decision.)
const REDIRECTS = {
  // --- Home ---
  "/home": "/",
  "/home-old": "/",
  "/coming-soon-landing": "/",
  "/aboutf7b260e9": "/about-carolina-pro-restoration",

  // --- Old service-page slugs ---
  "/mold-removal-old": "/mold-removal",
  "/mold-removal-draft": "/mold-removal",
  "/wdr": "/water-damage-restoration",
  "/leak-detection": "/water-damage-restoration",
  "/asheville": "/service-areas",

  // --- Old /services/ prefix (Duda-era), specific overrides -> current slugs ---
  "/services/mold-removal": "/mold-removal",
  "/services/crawlspace-issues": "/crawlspace",
  "/services/flooring-repair-and-replacement": "/flooring-repair",
  "/services/decks-porches-and-more": "/decks-and-porches",

  "/water-damage-restoration-old": "/water-damage-restoration",
  "/water-damage-restoration-carolina": "/water-damage-restoration",
  "/flood-damage-restoration-water-removal": "/storm-damage",
  "/burst-frozen-pipes": "/burst-pipe-repair",
  "/crawlspace-issues": "/crawlspace",
  "/water-proofing": "/waterproofing",
  "/keep-your-home-dry-and-safe-with-waterproofing-services-in-charlotte-nc": "/waterproofing",
  "/flooring-repair-and-replacement": "/flooring-repair",

  // --- Blog ---
  "/cpr-blog": "/blog",

  // --- Retired survey funnel -> on-site reviews page ---
  "/survey": "/reviews-testimonials",

  // --- Old landing pages & un-migrated blog posts still indexed in Google ---
  "/expert-contractor-for-water-damage-restoration-in-fort-mill": "/water-damage-restoration-fort-mill-sc",
  "/water-damage-restoration-in-fort-mill-charlotte-rapid-trusted-emergency-service-by-carolina-pro-restoration": "/water-damage-restoration-fort-mill-sc",
  "/fast-trusted-water-damage-restoration-in-fort-mill-sc-24-7-emergency-response": "/water-damage-restoration-fort-mill-sc",
  "/water-damage-restoration-rock-hill-sc-your-trusted-local-experts": "/water-damage-restoration-rock-hill-sc",
  "/decks--porches-and-more": "/decks-and-porches",
  "/indian-land-hoa-communities-group-water-damage-prevention-planning": "/water-damage-restoration-indian-land-sc",
  "/5-signs-your-fort-mill-home-s-air-ducts-are-making-you-sick": "/duct-cleaning",
  "/best-crawl-space-dehumidifiers-installation-services": "/crawlspace",
  "/understanding-water-damage-restoration-for-homeowners-a-practical-guide-to-cleanup-emergency-extraction-and-cost": "/water-damage-restoration",
  "/understanding-common-sources-of-water-damage-in-properties": "/water-damage-restoration",
  "/best-family-events-in-rock-hill-this-fall": "/blog",
  "/rock-hill-s-best-family-events-and-activities-your-local-guide": "/blog",
  "/fort-mill-summer-2025-how-local-events-and-weather-affect-your-home-s-air-quality-and-water-safety": "/blog",
  "/fort-mill-family-neighborhoods-summer-break-water-damage-prevention": "/blog",
};

// Baseline security headers for every response, ported from public/_headers /*.
// (HSTS is applied to the production domain only — see fetch().)
const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};

// Resolve a legacy path to its 301 destination, or null to serve normally.
// Mirrors _redirects precedence: /locations family, then exact matches, then
// the /services/* and /blog/* splats.
function resolveRedirect(pathname) {
  // Normalize a single trailing slash (except root) so /foo and /foo/ match.
  let p = pathname;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);

  // Legacy /locations family: exact slugs -> city pages, anything else
  // (including bare /locations) -> the service-areas hub.
  const locMatch = p.match(/^\/locations(?:\/([^/]+))?$/);
  if (locMatch) {
    const slug = (locMatch[1] || "").toLowerCase();
    return LOCATION_REDIRECTS[slug] || "/service-areas";
  }

  // Exact matches win before the splats (covers the /services/* overrides too).
  if (REDIRECTS[p]) return REDIRECTS[p];

  // /services/* -> /:splat  (strip the /services prefix, keep the rest).
  if (p.startsWith("/services/")) return p.slice("/services".length) || "/";

  // /blog/* -> /:splat. /blog itself is a real page and lacks the trailing
  // slash+segment, so it is not caught here.
  if (p.startsWith("/blog/")) return p.slice("/blog".length) || "/";

  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;
    const isProdDomain =
      host === "carolinaprorestoration.com" || host.endsWith(".carolinaprorestoration.com");

    // 1. Canonical host/scheme normalization FIRST, so every legacy redirect
    //    below resolves on the canonical www host (never apex -> apex).
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

    // 2. Legacy Duda URL redirects (ported from _redirects).
    const dest = resolveRedirect(url.pathname);
    if (dest) {
      url.pathname = dest;
      url.search = "";
      return Response.redirect(url.toString(), 301);
    }

    // 3. Serve the static asset, then layer on headers.
    const res = await env.ASSETS.fetch(request);
    const out = new Response(res.body, res);

    const isHtml = (res.headers.get("content-type") || "").includes("text/html");
    const isPreview = host.endsWith(".workers.dev");

    // Baseline security headers on every response.
    for (const [k, v] of Object.entries(SECURITY_HEADERS)) out.headers.set(k, v);
    // HSTS on the real domain only — never pin the shared *.workers.dev host.
    if (isProdDomain) {
      out.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    }

    // Never let the edge serve stale HTML. Pages are served at extensionless
    // URLs, so the default "max-age=0, must-revalidate" still let Cloudflare
    // cache + serve a stale copy after a deploy (content-hashed /_astro assets
    // are unaffected). Split by cache layer, because one header can't say both:
    //   • CDN-Cache-Control: no-store — Cloudflare's edge never holds HTML.
    //   • Cache-Control: no-cache — the browser may store but must revalidate
    //     before reuse. NOT no-store, which would disqualify pages from the
    //     back/forward cache and make every Back press a full re-download.
    if (isHtml) {
      out.headers.set("Cache-Control", "no-cache");
      out.headers.set("CDN-Cache-Control", "no-store");
    }

    // Suppress indexing on the *.workers.dev preview host only.
    if (isPreview) out.headers.set("X-Robots-Tag", "noindex, nofollow");

    return out;
  },
};

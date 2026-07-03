/**
 * Thin wrapper around Workers Static Assets.
 *
 * Its ONLY job: keep the *.workers.dev preview deployment out of search
 * engines while the site is pre-launch. On the real custom domain
 * (carolinaprorestoration.com / www) it does nothing — those responses pass
 * through untouched and index normally. This means there is no manual flag to
 * flip at go-live: the guard keys off the hostname, so production is always
 * indexable and only the preview host is suppressed.
 *
 * We use an X-Robots-Tag: noindex HEADER (not robots.txt Disallow) on purpose:
 * a header lets crawlers fetch the page and see "noindex", so any already-known
 * preview URL gets dropped from the index. A robots.txt Disallow would instead
 * block the fetch and could leave the URL indexed-without-content.
 */
export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);

    const host = new URL(request.url).hostname;
    if (host.endsWith('.workers.dev')) {
      // Clone so headers are mutable, then tell crawlers to stay away.
      const guarded = new Response(res.body, res);
      guarded.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return guarded;
    }

    return res;
  },
};

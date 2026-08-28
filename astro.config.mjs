// @ts-check
import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { buildSitemapMeta } from './scripts/lastmod.mjs';

const SITE = 'https://www.carolinaprorestoration.com';

// Real per-URL <lastmod>/<changefreq>/<priority>, resolved from publish dates and
// git history at build time — see scripts/lastmod.mjs for where each date comes
// from and why none of them is "today".
const sitemapMeta = buildSitemapMeta();

// Post-build fixes to the generated sitemap. Listed AFTER sitemap() so its own
// astro:build:done hook has already written the files.
//
// 1. The homepage <loc>. @astrojs/sitemap pipes every chunk through a
//    stream-replace that rewrites `<loc>{origin}/</loc>` -> `<loc>{origin}</loc>`
//    whenever trailingSlash is "never" or build.format is "file" — both true
//    here. That runs downstream of serialize(), so the homepage ships as the
//    bare origin while its canonical tag is the origin WITH a slash. Two
//    spellings of one page is a canonical conflict Google has to resolve on its
//    own; put the slash back so the sitemap matches the tag. Only the homepage
//    is affected — every other URL is genuinely slash-less.
//
// 2. /sitemap.xml. @astrojs/sitemap only emits sitemap-index.xml + sitemap-0.xml,
//    so the bare /sitemap.xml — the URL the old Duda site served, and the one
//    crawlers, SEO tools and AI bots probe by convention — 404s. Copy the index
//    there: it's a valid sitemap index at that URL (all <loc>s inside are
//    absolute), returns 200 rather than a redirect, and can't drift out of sync
//    the way a hand-written alias file would.
//
// The <lastmod> on sitemap-index.xml's <sitemap> child is NOT written here —
// the integration derives it from the newest lastmod in the chunk once the URLs
// carry one (writeSitemap -> getLatestLastmod). This hook only asserts it is
// there, because that freshness signal on the index is the whole point of the
// change and a silent regression would be invisible until GSC went stale again.
function sitemapPostBuild() {
  return {
    name: 'sitemap-post-build',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        try {
          const indexUrl = new URL('sitemap-index.xml', dir);
          const index = await readFile(indexUrl, 'utf8');

          for (const loc of index.match(/<loc>[^<]+<\/loc>/g) ?? []) {
            const name = loc.replace(/<\/?loc>/g, '').split('/').pop();
            const childUrl = new URL(name, dir);
            const child = await readFile(childUrl, 'utf8');
            const patched = child.replaceAll(`<loc>${SITE}</loc>`, `<loc>${SITE}/</loc>`);
            if (patched !== child) await writeFile(childUrl, patched, 'utf8');
          }

          const stamped = (index.match(/<sitemap>[\s\S]*?<\/sitemap>/g) ?? []).every((s) =>
            s.includes('<lastmod>'),
          );
          if (!stamped) {
            logger.warn('sitemap-index.xml has a <sitemap> entry with no <lastmod> — crawlers get no freshness signal for it.');
          }

          await copyFile(indexUrl, new URL('sitemap.xml', dir));
          logger.info(`Sitemap post-build: homepage <loc> normalized, index lastmod ${stamped ? 'present' : 'MISSING'}, aliased to sitemap.xml`);
        } catch (err) {
          logger.warn(`Could not post-process the sitemap: ${err}`);
        }
      },
    },
  };
}

// Static (SSG) build for Cloudflare Pages. No adapter needed — all content is
// prebuilt HTML. Images run through astro:assets (sharp) with avif/webp output.
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  // Keep thank-you (form-redirect target) and privacy out of the sitemap —
  // matches the live site's 63-URL sitemap (both pages exist but aren't listed).
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/thank-you") && !page.includes("/privacy"),
      serialize(item) {
        // The homepage is emitted as the bare origin with no trailing slash,
        // while its canonical tag has one. Two spellings of the same page is a
        // canonical conflict Google has to resolve on its own — match the tag.
        const url = item.url === SITE || item.url === `${SITE}/` ? `${SITE}/` : item.url;
        const pathname = new URL(url).pathname.replace(/\/$/, '') || '/';
        const meta = sitemapMeta.get(pathname);
        if (!meta) {
          // Never invent a date. An entry with no resolvable source ships as a
          // bare <loc>, exactly as it did before.
          console.warn(`[sitemap] no lastmod source for ${pathname}`);
          return { ...item, url };
        }
        return { ...item, url, ...meta };
      },
    }),
    sitemapPostBuild(),
  ],
  build: {
    // Emit `page.html` (not `page/index.html`) so Cloudflare Pages serves each
    // page at its no-trailing-slash URL (e.g. /mold-removal) — matching
    // `trailingSlash: 'never'`, our canonicals/sitemap, and the live site's URLs.
    // With 'directory', CF would 308-redirect /mold-removal -> /mold-removal/.
    format: 'file',
    // Inline all CSS into the HTML (total is ~27KB site-wide) so there are no
    // render-blocking stylesheet requests — the homepage LCP is gated by CSS
    // load, not image bytes, and this takes those requests off the critical path.
    inlineStylesheets: 'always',
  },
  image: {
    // Global default output formats for <Image>/<Picture>.
    // avif first, webp fallback; original as final fallback in <Picture>.
    responsiveStyles: true,
  },
});

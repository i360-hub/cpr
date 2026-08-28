/**
 * Per-URL <lastmod> resolution for the sitemap.
 *
 * GSC was stuck reporting submitted_count: 70 against a 75-URL sitemap because
 * sitemap-0.xml carried no freshness signal at all — no <lastmod> anywhere, so
 * Google had no reason to re-fetch and never registered the pages added after
 * its last crawl of the file. This module supplies that signal.
 *
 * Every date is real. Nothing is stamped with "today": a uniform lastmod across
 * 75 URLs is a spam signal (and it is exactly what sitemap-legacy.xml does on
 * purpose, for a different reason — see public/sitemap-legacy.xml).
 *
 * Sources, in the order they are consulted:
 *   1. Blog posts       -> the post's own `date` (its publish date, real data).
 *   2. Everything else  -> the git commit date of the source that produces the
 *                          page. Content lives in a handful of very large data
 *                          files, so a whole-file date would collapse most of
 *                          the site onto one commit; instead each page is dated
 *                          from ITS OWN block of lines via `git log -L`, plus
 *                          the route/page component that renders it.
 *
 * The data files are read as text rather than imported, so this stays a plain
 * .mjs module that astro.config.mjs can import without a TS pipeline.
 *
 * Requires real git history. CI checks out with fetch-depth: 0 for this reason.
 * If git is unavailable the map comes back empty and the sitemap is emitted
 * without <lastmod> — degraded, but never a wrong or fabricated date.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

const PAGES = 'src/pages';
const DATA = 'src/data';

function git(args) {
  try {
    const out = execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
    const first = out.split('\n').find((l) => /^\d{4}-\d{2}-\d{2}$/.test(l.trim()));
    return first ? first.trim() : null;
  } catch {
    return null;
  }
}

const fileDate = (path) => (existsSync(path) ? git(['log', '-1', '--format=%cs', '--', path]) : null);

// `git log -L <start>,<end>:<file>` walks the history of just those lines,
// following them backwards through edits — the last commit that actually
// changed THIS page's content, not the last commit that touched the file.
const blockDate = (path, start, end) =>
  existsSync(path) ? git(['log', '-1', '--format=%cs', '-L', `${start},${end}:${path}`]) : null;

const newest = (...dates) => dates.filter(Boolean).sort().pop() ?? null;

/** Line ranges for each top-level `"slug": {` / `"slug": [` entry in a data file. */
function keyedBlocks(path, open = '{') {
  if (!existsSync(path)) return new Map();
  const lines = readFileSync(path, 'utf8').split('\n');
  const starts = [];
  const re = new RegExp(`^  "([a-z0-9-]+)":\\s*\\${open}`);
  lines.forEach((line, i) => {
    const m = line.match(re);
    if (m) starts.push({ slug: m[1], line: i + 1 });
  });
  const out = new Map();
  starts.forEach((s, i) => {
    out.set(s.slug, [s.line, (starts[i + 1]?.line ?? lines.length + 1) - 1]);
  });
  return out;
}

/** Tier-1 title/H1/meta entries in services.ts, keyed by slug ("" = homepage).
 *  Dated per entry rather than per file: services.ts feeds all ten Tier-1 pages,
 *  so a whole-file date reports every one of them as modified whenever a single
 *  title changes. */
function serviceMetaBlocks() {
  const path = `${DATA}/services.ts`;
  if (!existsSync(path)) return new Map();
  const lines = readFileSync(path, 'utf8').split('\n');
  const starts = [];
  lines.forEach((line, i) => {
    if (/^export const homepage\s*=/.test(line)) starts.push({ slug: '', line: i + 1 });
    const m = line.match(/^\s{4}slug:\s*"([a-z0-9-]*)"/);
    if (m) starts.push({ slug: m[1], line: i + 1 });
  });
  const out = new Map();
  starts.forEach((s, i) => {
    // The homepage entry is bounded by the next marker like any other.
    if (!out.has(s.slug)) out.set(s.slug, [s.line, (starts[i + 1]?.line ?? lines.length + 1) - 1]);
  });
  return out;
}

/** Blog entries: slug, publish date, and the line range of the entry. */
function blogBlocks() {
  const path = `${DATA}/blogPosts.ts`;
  if (!existsSync(path)) return new Map();
  const lines = readFileSync(path, 'utf8').split('\n');
  const starts = [];
  lines.forEach((line, i) => {
    const m = line.match(/^\s{4}slug:\s*'([^']+)'/);
    if (m) starts.push({ slug: m[1], line: i + 1 });
  });
  const out = new Map();
  starts.forEach((s, i) => {
    const end = (starts[i + 1]?.line ?? lines.length + 1) - 1;
    const dateLine = lines.slice(s.line - 1, end).find((l) => /^\s{4}date:\s*'/.test(l));
    const date = dateLine?.match(/'(\d{4}-\d{2}-\d{2})'/)?.[1] ?? null;
    out.set(s.slug, { range: [s.line, end], date });
  });
  return out;
}

/** changefreq/priority by page family. Editorial weight, not a ranking lever —
 *  Google treats both as hints, so they only need to be internally consistent. */
const CLASS = {
  home:      { changefreq: 'weekly',  priority: 1.0 },
  service:   { changefreq: 'monthly', priority: 0.9 },
  city:      { changefreq: 'monthly', priority: 0.8 },
  cluster:   { changefreq: 'monthly', priority: 0.7 },
  hub:       { changefreq: 'monthly', priority: 0.7 },
  info:      { changefreq: 'monthly', priority: 0.6 },
  blogIndex: { changefreq: 'weekly',  priority: 0.6 },
  blogPost:  { changefreq: 'yearly',  priority: 0.5 },
  utility:   { changefreq: 'yearly',  priority: 0.3 },
};

// Reconstruction-cluster spokes: their own page component + an editorial body in
// standalonePages.ts. Everything else keyed there is a hub or a utility page.
const HUBS = new Set(['reconstruction']);
const UTILITY = new Set(['resources', 'sms-terms-and-conditions']);
const INFO = new Set(['about-carolina-pro-restoration', 'contact-us', 'reviews-testimonials']);

/**
 * Sitemap metadata for every URL the site emits.
 *
 * @returns {Map<string, {lastmod: string, changefreq: string, priority: number}>}
 *          keyed by pathname ("/", "/mold-removal", …). Entries with no
 *          resolvable date are omitted rather than guessed.
 */
export function buildSitemapMeta() {
  const map = new Map();
  const put = (pathname, kind, date) => {
    if (date) map.set(pathname, { lastmod: date, ...CLASS[kind] });
  };
  if (!git(['log', '-1', '--format=%cs'])) return map; // no history (shallow clone) — emit nothing

  const locations = keyedBlocks(`${DATA}/locations.ts`);
  const mold = keyedBlocks(`${DATA}/moldLocations.ts`);
  const servicePages = keyedBlocks(`${DATA}/servicePages.ts`);
  const standalone = keyedBlocks(`${DATA}/standalonePages.ts`, '[');
  const blog = blogBlocks();

  // Titles/H1/meta for the Tier-1 pages, dated per entry (see serviceMetaBlocks).
  const meta = serviceMetaBlocks();
  const metaDate = (slug) => {
    const r = meta.get(slug);
    return r ? blockDate(`${DATA}/services.ts`, r[0], r[1]) : fileDate(`${DATA}/services.ts`);
  };

  // 1. Blog posts — publish date from the post itself.
  for (const [slug, { date }] of blog) put(`/${slug}`, 'blogPost', date);
  put('/blog', 'blogIndex', fileDate(`${PAGES}/blog.astro`));

  // 2. Tier-1 service pages — [service].astro + services.ts + the page's own block.
  const serviceRoute = fileDate(`${PAGES}/[service].astro`);
  for (const [slug, [a, b]] of servicePages) {
    put(`/${slug}`, 'service', newest(serviceRoute, metaDate(slug), blockDate(`${DATA}/servicePages.ts`, a, b)));
  }

  // 3. Tier-2 water city pages.
  const cityRoute = fileDate(`${PAGES}/water-damage-restoration-[city].astro`);
  for (const [slug, [a, b]] of locations) {
    put(`/water-damage-restoration-${slug}`, 'city', newest(cityRoute, blockDate(`${DATA}/locations.ts`, a, b)));
  }

  // 4. Mold town pages.
  const moldRoute = fileDate(`${PAGES}/mold-removal-[city].astro`);
  for (const [slug, [a, b]] of mold) {
    put(`/mold-removal-${slug}`, 'city', newest(moldRoute, blockDate(`${DATA}/moldLocations.ts`, a, b)));
  }

  // 5. Pages with their own component: /foo -> src/pages/foo.astro, plus the
  //    editorial body block in standalonePages.ts where the page has one.
  put('/', 'home', newest(fileDate(`${PAGES}/index.astro`), metaDate('')));
  for (const [name, [a, b]] of standalone) {
    const kind = HUBS.has(name) ? 'hub' : UTILITY.has(name) ? 'utility' : 'cluster';
    put(`/${name}`, kind, newest(fileDate(`${PAGES}/${name}.astro`), blockDate(`${DATA}/standalonePages.ts`, a, b)));
  }
  for (const name of INFO) put(`/${name}`, 'info', fileDate(`${PAGES}/${name}.astro`));
  put('/service-areas', 'hub', fileDate(`${PAGES}/service-areas.astro`));

  return map;
}

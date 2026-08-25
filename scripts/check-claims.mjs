#!/usr/bin/env node
/**
 * Claims gate for carolinaprorestoration.com.
 *
 * Every rule here exists because the claim was actually published and was
 * actually wrong. Scans dist/*.html (what ships), not src, so a claim can't
 * sneak in through a data file, a component default, or a page override.
 *
 * Run: node scripts/check-claims.mjs   (after `npm run build`)
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const RULES = [
  {
    name: 'BBB A+ rating',
    re: /A\+\s*(?:BBB|rating|rated)|BBB[^.]{0,20}A\+/gi,
    why: 'The BBB profile shows an A rating (accredited 5/1/2026), not A+. Say "BBB Accredited Business" and skip the grade so the claim survives a regrade.',
  },
  {
    name: 'all-reviews-are-five-star claim',
    re: /five-star\s+(?:Google\s+)?reviews|Rated\s+5\s+stars/gi,
    why: 'The Google average is 4.9, which means not every review is 5 stars. Use "4.9 stars across 40+ Google reviews".',
  },
  {
    name: 'zero out-of-pocket promise',
    re: /(?:zero|nothing|no)\s+out[-\s]of[-\s]pocket|pay\s+nothing\s+out\s+of\s+pocket|out-of-pocket\s+cost\s+is\s+zero/gi,
    why: 'The deductible applies to the claim. Say "you pay your deductible and nothing beyond it" — the wording /insurance-reconstruction already used.',
  },
  {
    name: 'North Carolina licensing claim',
    re: /licen[sc]ed?[^.]{0,40}(?:North Carolina|NC\b)|(?:North Carolina|NC)[^.]{0,40}requires?[^.]{0,30}licen|SC\s*&\s*NC\s*Licensed/gi,
    why: 'CPR holds no North Carolina licence. NC does not license water damage restoration or mold remediation as their own trades — IICRC certification is the operative credential there. Say "licensed in South Carolina (#70177448) and insured for work in both Carolinas". NOTE: NC DOES require a General Contractor licence for construction projects of $40,000 or more (NC Gen. Stat. Ch. 87, Art. 1) — do not advertise NC reconstruction above that threshold without confirming licensure.',
    allow: /does not license|not licensed as its own trade|insured for the work|no state card|no NC restoration/i,
  },
  {
    name: 'fixed 20-mile service radius',
    re: /20[-\s]mile\s+radius/gi,
    why: 'Contradicts the published service area, which reaches Monroe, Gastonia and Pine-Bluff-side towns well beyond 20 miles.',
  },
  {
    name: 'stale review count in prose',
    re: /\b(?:38|43)\s+(?:Google\s+)?reviews\b/gi,
    why: 'Prose should use the "40+" floor so it cannot go stale. The exact count belongs only in site.ts aggregateRating.',
  },
];

const text = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')   // schema holds the exact count on purpose
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ');

let violations = 0;
const pages = readdirSync(DIST).filter((f) => f.endsWith('.html'));

for (const rule of RULES) {
  const hits = [];
  for (const page of pages) {
    const body = text(readFileSync(join(DIST, page), 'utf8'));
    const found = (body.match(rule.re) || []).filter((hit) => {
      if (!rule.allow) return true;
      const at = body.indexOf(hit);
      return !rule.allow.test(body.slice(Math.max(0, at - 130), at + hit.length + 130));
    });
    if (found.length) hits.push(`${page} (${found.length}×: "${found[0]}")`);
  }
  if (hits.length) {
    violations += hits.length;
    console.error(`\n  ✗ ${rule.name} — ${hits.length} page(s)`);
    console.error(`    ${rule.why}`);
    hits.slice(0, 6).forEach((h) => console.error(`      - ${h}`));
    if (hits.length > 6) console.error(`      … and ${hits.length - 6} more`);
  }
}

if (violations) {
  console.error(`\n  Claims gate FAILED — ${violations} page-level violation(s) across ${pages.length} pages.\n`);
  process.exit(1);
}
console.log(`  ✓ Claims gate passed — ${pages.length} pages, no retired claims reintroduced.`);

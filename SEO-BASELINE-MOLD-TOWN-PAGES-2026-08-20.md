# CPR SEO Baseline — 2026-08-20 (PRE mold town-page publish)

Snapshot taken immediately **before** publishing the five mold-removal town pages
(all five shipped 2026-08-20)
(`/mold-removal-rock-hill-sc`, `/mold-removal-pineville-nc`,
`/mold-removal-fort-mill-sc`, `/mold-removal-indian-land-sc`,
`/mold-removal-tega-cay-sc`).

Re-run against the 50-check mold matrix on ~20 Oct 2026 and diff against this file.

---

## Tega Cay cannibalization baseline (required by the handoff, §5 + §10)

Live SERP check, DataForSEO organic advanced, desktop.
Keyword: **`mold removal tega cay sc`** · location `South Carolina, United States` · lang `en`
Taken **2026-08-20**, before any mold town page was published.

| Slot | Type | Result |
|---|---|---|
| Absolute 1 | local_pack | 247 AquaDry (Fort Mill, SC) |
| Absolute 2 | local_pack | STOP Restoration of the Carolinas (Rock Hill, SC) |
| **Absolute 3** | **local_pack** | **Carolina Pro Restoration LLC — pack #3, 4.9★ / 47 reviews** |
| **Absolute 4** | **organic #1** | **`/water-damage-restoration-tega-cay-sc`** ← the page to displace |
| Absolute 5 | organic #2 | servpro.com/locations/sc/tega-cay |
| Absolute 6 | organic #3 | m.yelp.com (Mold Remediation Services near Tega Cay) |
| Absolute 7 | people_also_ask | 4 questions, all AI-Overview-expanded |
| Absolute 8 | organic #4 | carolinarevive.com/tega-cay-sc |
| Absolute 9 | organic #5 | edmondsonrestoration.com |
| Absolute 10 | organic #6 | bbb.org |
| Absolute 11 | organic #7 | crawlspacebrothers.com |
| Absolute 12 | organic #8 | restoreprorestorationcharlotte.com |
| Absolute 13 | organic #9 | m.yelp.com (Mold Inspection near Tega Cay) |

### ⚠️ This differs materially from the handoff audit

The handoff (§1, §5) recorded the Tega Cay water page at **position 6** for this query.
As of 2026-08-20 it is at **organic position 1** (absolute 4), and CPR additionally
holds **local pack #3** — a slot the handoff did not record for the *removal* term.

**Implication for the Tega Cay page.** The handoff's instruction — "the new page must
take over that query" — was written against a #6 ranking. Displacing a #6 costs little
if it goes wrong. Displacing our own **#1** is a real risk: if Google splits relevance
between the two pages, we can end up with two mid-page results instead of one top one.

The handoff's own mitigations still hold and are already implemented:

- the water page keeps its mold references brief and water-damage-framed (unchanged);
- the water page links to the new mold page twice, anchor **"mold removal in Tega Cay"**
  (once in body, once in the Lake Wylie mold FAQ);
- **no redirect** was created — the water page ranks on its own terms.

**What was actually done.** The staged three-wave rollout in §9 was collapsed by owner
decision on 2026-08-20: all five pages went live the same day, Tega Cay included.

Consequence for the ~20 Oct re-audit — **Tega Cay was not isolated.** If
`/water-damage-restoration-tega-cay-sc` moves off organic #1 for this query, that
movement cannot be cleanly attributed to the new mold page as opposed to cluster-wide
effects from publishing five pages at once. The pre-launch numbers above still make
displacement *measurable*; they no longer make it *isolable*.

**Still to do:** re-run this exact query on **~2026-09-03** (14 days post-launch). If
`/water-damage-restoration-tega-cay-sc` has dropped below absolute 4 **and**
`/mold-removal-tega-cay-sc` has not taken a top-3 organic slot, remove the second
internal link — the one in the Lake Wylie mold FAQ in `src/data/locations.ts` — leaving
only the in-body link, and re-check before the 20 Oct audit.

### AI Overview note

All four `people_also_ask` entries returned AI-Overview-expanded answers, including
**"Is a mold remediation license required in South Carolina?"** — consistent with the
handoff's finding that AI Overviews appeared on 19 of 50 audited checks and cited CPR
zero times. Every new page carries an explicit cost section with real figures for
exactly this reason (§4.6).

---

## Baselines to beat (from the handoff, §12)

| Market | Visible now | Organic now |
|---|---|---|
| Fort Mill | 2/10 | 0 |
| Indian Land | 2/10 | 0 |
| **Rock Hill** | **0/10** | 0 |
| Tega Cay | 3/10 | 1 |
| **Pineville** | **0/10** | 0 |
| **Total** | **7/50 (14%)** | **1** |

Clearest success signal: any organic result for `mold removal rock hill sc`, currently
a total shutout against rock-hill.pauldavis.com (organic on 6 of 10 Rock Hill queries).

GBP mold-services change shipped 2026-08-20 and lands in days. Anything moving in the
next 2–3 weeks belongs to the GBP fix; organic gains from late September onward belong
to these pages.

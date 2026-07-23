# CPR SEO Baseline — 2026-07-23 (PRE Reconstruction Hub publish)

Snapshot taken immediately **before** publishing the Reconstruction Hub cluster
(`/reconstruction`, `/insurance-reconstruction`, `/bathroom-remodeling`,
`/kitchen-remodeling`, `/drywall-repair`, `/interior-painting`, `/carpentry-trim`).
Source: DataForSEO Labs + Backlinks API, location = United States, lang = en.

Re-run the same three queries in 60/90 days and diff against this file.

## Domain rank overview (organic)

| Metric | Value |
|---|---|
| Total ranked keywords | **34** |
| Position 1–3 | **0** |
| Position 4–10 | 4 |
| Position 11–20 | 3 |
| Position 21–30 | 6 |
| Position 31–40 | 8 |
| Position 41–50 | 5 |
| Position 61–90 | 8 |
| Est. traffic value (ETV) | **18.7 visits/mo** |
| Est. paid traffic cost | $337.46 |
| New / Up / Down | 23 / 5 / 5 |

## Backlinks

| Metric | Value |
|---|---|
| Domain rank | **162** |
| Backlinks | 397 |
| Referring domains | **108** (104 main) |
| Referring domains nofollow | 45 |
| Referring IPs / subnets | 83 / 44 |
| Spam score | 11 (healthy) |
| First seen | 2024-12-31 |

## Ranked-keyword profile (the diagnosis)

Only **one** #1 ranking, and it is the brand name itself. Everything else sits at
position 8 or worse. A large share of what does rank is **competitor-brand
confusion**, not commercial intent:

- `carolina pro restoration` — **#1** (40/mo) — brand
- `carolina pro reconstruction` — #8 (50/mo) — ⚠️ **NOT our brand.** This is
  **Carolina Pro Reconstruction Inc.**, a real competitor in Gastonia, NC
  (carolinaproreconstruction.com · 1540 Union Rd Ste A · (980) 517-7292 ·
  4.9★/31 Google reviews). They hold #1–3 and the Knowledge Graph panel; we
  appear at #7 purely from name confusion. Do **not** target this term.
- `carolina restoration` — #23 (1,600/mo)
- `puroclean charlotte nc` — #30 · `restopros charlotte` — #39
- `stop restoration fort mill` — #23 · `queens waterproofing and restoration` — #35
- `restorepro reconstruction and restoration` — #42

Actual money terms rank poorly:

| Keyword | Vol | Position |
|---|---|---|
| water damage restoration charlotte | 480 | **#38** |
| charlotte water damage repair | 90 | #30 |
| water restoration charlotte | 110 | #48 |
| water damage restoration rock hill sc | 40 | #18 |

**Read:** the entity is recognized by name but has almost no commercial ranking
strength. Consistent with the known gap — backlink authority + reviews.

## New cluster: demand + difficulty

| Keyword | Vol/mo | KD | Competition | CPC | Avg ref domains of ranking pages |
|---|---|---|---|---|---|
| bathroom remodeling charlotte nc | **720** | **3** | Medium | $46.66 | **6.6** |
| kitchen remodeling charlotte nc | **720** | — | Medium | $25.27 | 16.7 |
| drywall repair charlotte nc | 210 | — | High | $8.47 | 28.4 |
| interior painting charlotte nc | 170 | **1** | Medium | $7.25 | 16.5 |
| fire damage reconstruction | 110 | 9 | Low | — | 11.9 |
| water damage reconstruction | 70 | 28 | Low | **$209.41** | 39.8 |
| bathroom remodeling fort mill sc | 40 | — | Medium | $78.42 | 20 |
| drywall repair fort mill sc | 10 | — | High | $9.09 | 31.9 |
| insurance reconstruction | 10 | — | Low | — | 1.6 |

**Key finding:** the remodel keywords are *lower difficulty* than the core
restoration keywords the site already struggles with, and CPR's 108 referring
domains far exceed the 6.6–20 that pages currently ranking for them carry.
`bathroom remodeling charlotte nc` (720/mo, KD 3, 6.6 avg ref domains) is the
single most winnable target in the whole set.

Volumes for kitchen/bath remodeling are trending down yearly (-46% / -18%) —
still substantial, but do not model growth off the peak months.

## What to watch after publish

1. Do the 7 new URLs get indexed, and do they pick up impressions in GSC?
2. **Cannibalization check:** do `/water-damage-restoration`, `/storm-damage`,
   `/mold-removal` hold their (already weak) positions, or dip?
3. Does total ranked-keyword count move above 34, and does anything enter 1–3?
4. **Entity confusion with Carolina Pro Reconstruction Inc. (Gastonia, NC).**
   A near-identical name in the same metro, offering overlapping
   reconstruction/remodeling services. Launching our Reconstruction Hub
   increases topical overlap with them, so watch that Google keeps the two
   entities distinct — check that our `#business` node, NAP, and `sameAs`
   resolve cleanly and that our pages are not attributed to their brand.
   Do not chase their brand term.

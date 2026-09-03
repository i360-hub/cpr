// Client rule (2026-09-03): no "Free" offer language in any CTA tied to water
// damage / water damage restoration. Every OTHER service — storm, sewage, mold,
// duct cleaning, crawlspace, waterproofing, the remodeling pages — deliberately
// KEEPS its free-inspection offer, so the shared widget defaults in
// Hero/WarningSigns/FinalCta/ContactForm still say "Free" on purpose. Pages in
// the water-damage funnel override them with these values instead.
export const waterCta = {
  /** Hero + WarningSigns secondary button. */
  inspection: "Request an Inspection",
  /** FinalCta secondary button + ContactForm card title. */
  assessment: "Request an Assessment",
  /** ContactForm card subheading (replaces "No cost, no pressure."). */
  cardSub: "No pressure. We'll get right back to you.",
  /** ContactForm trust bullets (replaces the "Free on-site assessment" list). */
  trustItems: [
    "We answer 24/7 and respond fast",
    "On-site assessment with a written scope",
    "We bill your insurance directly",
    "IICRC certified, SC licensed & insured",
    "One crew from cleanup to rebuild",
  ],
} as const;

// The 10 Tier-1 pages (homepage + 9 service pages).
// Drives: header nav, homepage services grid, related-services blocks, sitemap.
// title / h1Lines / metaDescription are ported VERBATIM from the live site
// (clean scrape source). h1Lines[] renders with a <br> between lines to match
// the original two-line hero H1 exactly. Homepage H1/title are ranking-locked.

export type ServiceGroup = "water" | "moisture";

export interface Service {
  slug: string; // URL path (no leading slash beyond root); "" = homepage
  navLabel: string; // label in header dropdown
  gridTitle: string; // short label for homepage services grid / related cards
  group: ServiceGroup; // which nav dropdown it belongs to
  title: string; // <title> — verbatim
  h1Lines: string[]; // hero <h1>, one entry per visual line
  metaDescription: string; // <meta description> — verbatim
}

export const homepage = {
  slug: "",
  title: "Carolina Pro Restoration | 24/7 Water Damage Restoration & Rebuild",
  h1Lines: ["Water Damage Restoration & Full Rebuild — One Team, Start to Finish"],
  metaDescription:
    "24/7 water damage restoration, structural drying, and full rebuild — one team start to finish. Licensed in SC & NC. Call (980) 277-3700.",
} as const;

export const services: Service[] = [
  {
    slug: "water-damage-restoration",
    navLabel: "Water Damage Restoration",
    gridTitle: "Water Damage Restoration",
    group: "water",
    title: "Water Damage Restoration | Carolina Pro Restoration | 24/7",
    h1Lines: ["Water Damage Restoration", "From Cleanup to Full Rebuild"],
    metaDescription:
      "24/7 water damage restoration — emergency extraction, structural drying, and full rebuild. IICRC certified. We bill your insurance directly. Call 980-277-3700.",
  },
  {
    slug: "storm-damage",
    navLabel: "Storm Damage",
    gridTitle: "Storm Damage",
    group: "water",
    title: "Storm Damage Cleanup | Charlotte Area 24/7",
    h1Lines: ["Storm Damage Restoration", "in Fort Mill & Charlotte"],
    metaDescription:
      "Need expert storm damage cleanup and restoration in Charlotte, NC? Carolina Pro Restoration is here to help. Learn more and get started today!",
  },
  {
    slug: "sewage-cleanup",
    navLabel: "Sewage Cleanup",
    gridTitle: "Sewage Cleanup",
    group: "water",
    title: "Sewage Cleanup | Charlotte Area 24/7",
    h1Lines: ["Sewage Cleanup in Fort Mill & Charlotte", "Safe, Fast, and Done Right"],
    metaDescription:
      "Protect your home with 24/7 sewage cleanup and removal services in Charlotte, NC. Carolina Pro Restoration is here to help. Learn more!",
  },
  {
    slug: "burst-pipe-repair",
    navLabel: "Burst Frozen Pipes",
    gridTitle: "Burst & Frozen Pipes",
    group: "water",
    title: "Burst Frozen Pipes Clean Up | Charlotte Area 24/7",
    h1Lines: ["Burst Pipe Repair in", "Fort Mill & Charlotte"],
    metaDescription:
      "Carolina Pro Restoration offers 24/7 emergency burst pipe cleanup and mold testing in Charlotte, NC. Fast, professional service. Learn more now!",
  },
  {
    slug: "basement-flooding",
    navLabel: "Basement Flooding",
    gridTitle: "Basement Flooding",
    group: "water",
    title: "Basement Flooding Cleanup | Charlotte Area 24/7",
    h1Lines: ["Basement Flooding in", "Fort Mill & Charlotte"],
    metaDescription:
      "Get expert 24/7 basement flooding cleanup and restoration in Charlotte, NC with Carolina Pro Restoration. Fast response. Learn more today!",
  },
  {
    slug: "mold-removal",
    navLabel: "Mold Removal",
    gridTitle: "Mold Removal",
    group: "moisture",
    title: "Mold Removal & Remediation | Inspection to Rebuild | Carolina Pro",
    h1Lines: ["Mold Removal in Fort Mill & Charlotte"],
    metaDescription:
      "Full containment, HEPA air scrubbing, post-remediation air testing & complete rebuild. IICRC certified. Fort Mill & Charlotte 24/7. (980) 277-3700.",
  },
  {
    slug: "duct-cleaning",
    navLabel: "Duct Cleaning",
    gridTitle: "Air Duct Cleaning",
    group: "moisture",
    title: "Duct Cleaning | Carolina Pro Restoration | Fort Mill, SC",
    h1Lines: ["Air Duct Cleaning in", "Fort Mill & Charlotte"],
    metaDescription:
      "Enhance your indoor air quality with expert duct cleaning. Contact Carolina Pro Restoration for a free quote today!",
  },
  {
    slug: "crawlspace",
    navLabel: "Crawlspace Issues",
    gridTitle: "Crawl Space Encapsulation",
    group: "moisture",
    title: "Crawlspace Services | Carolina Pro Restoration",
    h1Lines: ["Crawl Space Encapsulation", "in Fort Mill & Charlotte"],
    metaDescription:
      "Keep your property safe from moisture with expert crawlspace encapsulation services from Carolina Pro Restoration. Customized solutions for lasting protection.",
  },
  {
    slug: "waterproofing",
    navLabel: "Waterproofing",
    gridTitle: "Waterproofing",
    group: "moisture",
    title: "Water Proofing Services | Carolina Pro Restoration",
    h1Lines: ["Basement & Crawl Space Waterproofing", "Stop Water Before It Gets In"],
    metaDescription:
      "Carolina Pro Restoration offers expert waterproofing & mold remediation. Get 24/7 emergency help for water damage. Contact us!",
  },
];

export const servicesByGroup = {
  water: services.filter((s) => s.group === "water"),
  moisture: services.filter((s) => s.group === "moisture"),
};

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

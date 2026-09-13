// The 10 Tier-1 pages (homepage + 9 service pages).
// Drives: header nav, homepage services grid, related-services blocks, sitemap.
// title / h1Lines / metaDescription are ported VERBATIM from the live site
// (clean scrape source). h1Lines[] renders with a <br> between lines to match
// the original two-line hero H1 exactly. The homepage title/H1/meta are NOT the
// Duda originals: since 2026-09-13 the homepage is also the Fort Mill water damage
// page (the old Fort Mill URL 301s here), and they target that query.

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
  title: "Water Damage Restoration Fort Mill SC | Carolina Pro",
  h1Lines: ["Water Damage Restoration in Fort Mill, SC — One Team From Extraction to Rebuild"],
  metaDescription:
    "Fort Mill's 24/7 water damage team — extraction, structural drying & full rebuild by one local crew. SC licensed, IICRC certified. Call (980) 277-3700.",
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
    title: "Who to Call When Your Basement Floods | Fort Mill SC 24/7",
    h1Lines: ["Who to Call When Your Basement Floods"],
    metaDescription:
      "Basement flooding in Fort Mill? Call a water damage restoration crew first — here's why, what to do in the first hour, and what it costs. (980) 277-3700.",
  },
  {
    slug: "mold-removal",
    navLabel: "Mold Removal",
    gridTitle: "Mold Removal",
    group: "moisture",
    title: "Mold Removal & Remediation | Fort Mill & Charlotte",
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

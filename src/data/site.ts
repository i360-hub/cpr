// Sitewide constants — NAP, phone, GHL form, nav, socials, trust badges.
// Ported verbatim from the live carolinaprorestoration.com chrome.

export const site = {
  name: "Carolina Pro Restoration",
  legalName: "Carolina Pro Restoration LLC",
  tagline: "24/7 Water Damage Restoration & Full Rebuild",

  phoneDisplay: "(980) 277-3700",
  phoneHref: "tel:9802773700",

  address: {
    street: "3650 Centre Circle, Suite I",
    city: "Fort Mill",
    state: "SC",
    zip: "29715",
    country: "US",
  },

  // Business geo (Fort Mill HQ, 3650 Centre Cir) — matches the GBP map pin.
  geo: { lat: 35.00547, lng: -80.95758 },

  hours: "24/7 Emergency Response",

  // GoHighLevel contact form — short "get help" embed used across service/city pages.
  ghlFormId: "f3Bpt8cAgwb6yC1EQRDh",
  ghlFormSrc: "https://api.leadconnectorhq.com/widget/form/f3Bpt8cAgwb6yC1EQRDh",
  // Full contact form used on the dedicated /contact-us page.
  ghlContactFormId: "08sM0bOErFcfsOlU9PLq",
  ghlContactFormSrc: "https://api.leadconnectorhq.com/widget/form/08sM0bOErFcfsOlU9PLq",

  email: "info@carolinaprorestoration.com",
  license: "SC License #70177448",

  paymentUrl: "https://square.link/u/UA7OYBRl",

  // Direct Google Business Profile links (from GBP place ChIJkR37bWkm7CoRu6bfEb_xhZc).
  googleReviewsUrl: "https://search.google.com/local/reviews?placeid=ChIJkR37bWkm7CoRu6bfEb_xhZc",
  googleWriteReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJkR37bWkm7CoRu6bfEb_xhZc",

  // Google Maps embed for the Fort Mill HQ (default for ServiceArea). Keyless
  // query by business name + exact address so it always pins the real location
  // — no Maps Embed API key that can silently break.
  mapEmbedSrc:
    "https://maps.google.com/maps?q=Carolina+Pro+Restoration,+3650+Centre+Cir+Ste+I,+Fort+Mill,+SC+29715&z=15&output=embed",

  socials: {
    facebook: "https://www.facebook.com/carolinaprorestorationllc/",
    instagram: "https://instagram.com/carolinaproresto/",
    tiktok: "https://tiktok.com/@carolina.pro.rest",
    linkedin: "https://www.linkedin.com/in/carolina-pro-restoration-llc-2a4914326/",
  },

  // Structured-data facts — sourced from the live Google Business Profile
  // (place ChIJkR37bWkm7CoRu6bfEb_xhZc, verified 2026-07-03). Powers the
  // sitewide GeneralContractor JSON-LD in BaseLayout. Keep the rating/count in
  // sync with GBP as reviews grow.
  schema: {
    type: "GeneralContractor",
    // GBP primary category → the human label used in the business description.
    primaryService: "Water Damage Restoration Service",
    description:
      "Carolina Pro Restoration provides 24/7 emergency water damage restoration, mold remediation, fire and storm damage cleanup, sewage cleanup, crawlspace encapsulation, waterproofing, and full reconstruction across Fort Mill, Rock Hill, Tega Cay, Indian Land, and the greater Charlotte area. IICRC certified with a 60-minute response goal — one contractor from water extraction and structural drying through complete rebuild — and we bill your insurance directly. Locally owned, women- and Latino-owned, based in Fort Mill, SC.",
    priceRange: "$$",
    foundingDate: "2020",
    languages: ["English", "Spanish"],
    // Stable public asset URLs (not astro:assets-hashed) so JSON-LD stays valid.
    logo: "/logo.png",
    image: "/og-default.jpg",
    // Google Business Profile identifiers.
    placeId: "ChIJkR37bWkm7CoRu6bfEb_xhZc",
    mapUrl: "https://maps.google.com/maps?cid=10918398674570553019",
    // Aggregate rating — live GBP value (4.87★ over 38 reviews, 2026-07-03).
    ratingValue: "4.9",
    reviewCount: "38",
    // Approximate service radius from the Fort Mill HQ (meters). ~30 mi, matching
    // the GBP service area (reaches Gastonia/Monroe). Emitted as a GeoCircle.
    serviceRadiusMeters: 48000,
    // Cities served (our Tier-2 city pages). Reinforces areaServed relevance; the
    // optional `wiki` links each City node to its Wikipedia entity (omit where the
    // place is a neighborhood without a clean 1:1 article, e.g. Ballantyne).
    areaServed: [
      { name: "Fort Mill, SC", wiki: "https://en.wikipedia.org/wiki/Fort_Mill,_South_Carolina" },
      { name: "Tega Cay, SC", wiki: "https://en.wikipedia.org/wiki/Tega_Cay,_South_Carolina" },
      { name: "Rock Hill, SC", wiki: "https://en.wikipedia.org/wiki/Rock_Hill,_South_Carolina" },
      { name: "Indian Land, SC", wiki: "https://en.wikipedia.org/wiki/Indian_Land,_South_Carolina" },
      { name: "Clover, SC", wiki: "https://en.wikipedia.org/wiki/Clover,_South_Carolina" },
      { name: "Lake Wylie, SC", wiki: "https://en.wikipedia.org/wiki/Lake_Wylie,_South_Carolina" },
      { name: "York, SC", wiki: "https://en.wikipedia.org/wiki/York,_South_Carolina" },
      { name: "Lancaster, SC", wiki: "https://en.wikipedia.org/wiki/Lancaster,_South_Carolina" },
      { name: "Charlotte, NC", wiki: "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina" },
      { name: "Ballantyne, NC" },
      { name: "Pineville, NC", wiki: "https://en.wikipedia.org/wiki/Pineville,_North_Carolina" },
      { name: "Matthews, NC", wiki: "https://en.wikipedia.org/wiki/Matthews,_North_Carolina" },
      { name: "Mint Hill, NC", wiki: "https://en.wikipedia.org/wiki/Mint_Hill,_North_Carolina" },
      { name: "Waxhaw, NC", wiki: "https://en.wikipedia.org/wiki/Waxhaw,_North_Carolina" },
      { name: "Weddington, NC", wiki: "https://en.wikipedia.org/wiki/Weddington,_North_Carolina" },
      { name: "Indian Trail, NC", wiki: "https://en.wikipedia.org/wiki/Indian_Trail,_North_Carolina" },
      { name: "Stallings, NC", wiki: "https://en.wikipedia.org/wiki/Stallings,_North_Carolina" },
      { name: "Monroe, NC", wiki: "https://en.wikipedia.org/wiki/Monroe,_North_Carolina" },
      { name: "Gastonia, NC", wiki: "https://en.wikipedia.org/wiki/Gastonia,_North_Carolina" },
      { name: "Mount Holly, NC", wiki: "https://en.wikipedia.org/wiki/Mount_Holly,_North_Carolina" },
      { name: "Belmont, NC", wiki: "https://en.wikipedia.org/wiki/Belmont,_North_Carolina" },
    ],
    // Core services offered — becomes a makesOffer list on the business node.
    services: [
      "Water Damage Restoration", "Storm Damage Restoration", "Sewage Cleanup",
      "Burst Pipe Repair", "Basement Flooding Cleanup", "Mold Removal",
      "Fire Damage Restoration", "Air Duct Cleaning", "Crawlspace Encapsulation",
      "Basement & Foundation Waterproofing", "Reconstruction & Rebuild",
    ],
  },

  // Secondary footer nav (out-of-scope pages that still need to exist / link).
  footerLinks: [
    { label: "About Us", href: "/about-carolina-pro-restoration" },
    { label: "Reviews", href: "/reviews-testimonials" },
    { label: "Blog", href: "/blog" },
    { label: "Resources", href: "/resources" },
  ],

  // Footer "Our Service Areas" mini-grid (8 featured cities + View All).
  // Hrefs derived from slugs — the Pineville link is correct here (bug was
  // in the in-body cpr-city-list widget, fixed the same way there).
  footerServiceAreas: [
    { label: "Fort Mill, SC", href: "/water-damage-restoration-fort-mill-sc" },
    { label: "Rock Hill, SC", href: "/water-damage-restoration-rock-hill-sc" },
    { label: "Tega Cay, SC", href: "/water-damage-restoration-tega-cay-sc" },
    { label: "Indian Land, SC", href: "/water-damage-restoration-indian-land-sc" },
    { label: "Charlotte, NC", href: "/water-damage-restoration-charlotte-nc" },
    { label: "Pineville, NC", href: "/water-damage-restoration-pineville-nc" },
    { label: "Waxhaw, NC", href: "/water-damage-restoration-waxhaw-nc" },
    { label: "Ballantyne, NC", href: "/water-damage-restoration-ballantyne-nc" },
  ],

  copyrightYear: 2026,
  copyright: "All Rights Reserved | Carolina Pro Restoration LLC.",

  // Trust badges shown in footer / proof strips.
  trustBadges: [
    { key: "bbb", alt: "BBB Accredited Business" },
    { key: "iicrc", alt: "IICRC Certified" },
    { key: "ria", alt: "RIA Member" },
    { key: "google", alt: "Google Reviews" },
  ],
} as const;

// Primary navigation — three service/area groups + top-level links.
// Group parents are non-links (href '#') on the live site; rendered as dropdown labels.
export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href?: string; children?: NavChild[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Water Damage 24/7",
    children: [
      { label: "Water Damage Restoration", href: "/water-damage-restoration" },
      { label: "Storm Damage", href: "/storm-damage" },
      { label: "Sewage Cleanup", href: "/sewage-cleanup" },
      { label: "Burst Frozen Pipes", href: "/burst-pipe-repair" },
      { label: "Basement Flooding", href: "/basement-flooding" },
    ],
  },
  {
    label: "Moisture & Air Quality",
    children: [
      { label: "Mold Removal", href: "/mold-removal" },
      { label: "Duct Cleaning", href: "/duct-cleaning" },
      { label: "Crawlspace Issues", href: "/crawlspace" },
      { label: "Waterproofing", href: "/waterproofing" },
    ],
  },
  {
    label: "Service Areas",
    children: [
      { label: "Fort Mill SC", href: "/water-damage-restoration-fort-mill-sc" },
      { label: "Rock Hill", href: "/water-damage-restoration-rock-hill-sc" },
      { label: "Indian Land", href: "/water-damage-restoration-indian-land-sc" },
      { label: "Charlotte", href: "/water-damage-restoration-charlotte-nc" },
      { label: "Pineville", href: "/water-damage-restoration-pineville-nc" },
      { label: "Waxhaw", href: "/water-damage-restoration-waxhaw-nc" },
      { label: "More Service Areas", href: "/service-areas" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

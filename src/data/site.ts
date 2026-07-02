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

  // Business geo (Fort Mill HQ) — used for LocalBusiness schema.
  geo: { lat: 35.0085, lng: -80.9401 },

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

  // Google Maps embed centered on the Fort Mill HQ (default for ServiceArea).
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.04968846387!2d-80.95758248476296!3d35.00547008035697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a0289be5e85d%3A0x4fbcc746f299c91c!2sCarolina%20Pro%20Restoration!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",

  socials: {
    facebook: "https://www.facebook.com/carolinaprorestorationllc/",
    instagram: "https://instagram.com/carolinaproresto/",
    tiktok: "https://tiktok.com/@carolina.pro.rest",
    linkedin: "https://www.linkedin.com/in/carolina-pro-restoration-llc-2a4914326/",
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

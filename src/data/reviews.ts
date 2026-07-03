// Customer testimonials curated from the Google Business Profile (38 reviews,
// 4.9★). Each review is tagged with `topics` (service slugs) and optional
// `city` so pages can surface the reviews that best fit their context —
// mold reviews on the mold page, crawlspace reviews on the crawlspace page,
// Fort Mill reviews on the Fort Mill page, etc. Text is trimmed to
// testimonial length but kept faithful to the customer's words.

export interface Review {
  tag: string;
  name: string;
  text: string;
  source: string;
  stars: number;
  /** Service slugs this review is relevant to (for per-page targeting). */
  topics?: string[];
  /** City slug if the review names a location. */
  city?: string;
}

export const reviews: Review[] = [
  // --- Mold ---
  {
    tag: "Mold Removal", name: "Ryan Duffy", source: "Google Review", stars: 5,
    topics: ["mold-removal"],
    text: "Working with CPR has been great. Willie is very knowledgeable and honest, and they were out to our home fast. Would recommend them for your mold removal and restoration needs.",
  },
  {
    tag: "Mold Removal", name: "Robert Carico", source: "Google Review", stars: 5,
    topics: ["mold-removal"], city: "fort-mill-sc",
    text: "I'm in Fort Mill and found Carolina Pro Restoration online after noticing a moldy smell in my house. Zach came out, explained everything clearly, and the team got the job done fast. They cleaned up great too. Highly recommend them!",
  },
  {
    tag: "Mold Removal", name: "Daisy Cisneros", source: "Google Review", stars: 5,
    topics: ["mold-removal"],
    text: "Found mold behind our bathroom wall and freaked out. Turns out Carolina Pro Restoration specializes in this. Juan tested the air, contained the area, and cleared it all in two days. They even explained how to prevent it from coming back. Trustworthy and thorough!",
  },
  {
    tag: "Mold Inspection", name: "Rahul Modey", source: "Google Review", stars: 5,
    topics: ["mold-removal"],
    text: "Had a mold inspection done by Carolina Pro Restoration and it was addressed promptly by Zach and his team. They arrived on time, inspected several areas, and explained the treatment plan. One spot behind the dishwasher was tricky and took extra time, but CPR honored the original estimate without charging for it.",
  },
  {
    tag: "Mold Removal", name: "Abhinash Sitaula", source: "Google Review", stars: 5,
    topics: ["mold-removal"],
    text: "Prompt, professional, and reliable — mold removal was fast and thorough. I'd trust them with any home emergency.",
  },
  // --- Duct cleaning / air quality ---
  {
    tag: "Duct Cleaning", name: "Rocket Tropper", source: "Google Review", stars: 5,
    topics: ["duct-cleaning", "mold-removal"],
    text: "I had mold in my vents and HVAC. Another company quoted me $18,000 to gut my attic and replace all the air ducts. Willie Bowman came over right away, surveyed every duct, and told me I didn't need to do all that. The crew cleaned every duct, the HVAC, and the dryer vent. Very professional, very friendly — and I saved thousands of dollars.",
  },
  {
    tag: "Duct Cleaning", name: "Susan Harper", source: "Google Review", stars: 5,
    topics: ["duct-cleaning"],
    text: "We needed our air ducts cleaned and sanitized before our baby was born. We delivered early and they worked with us to get it done before we brought our sweet girl home. We cannot say enough about Willie Bowman — he even brought diapers when he came to work on our ducts! Wonderful small-town-neighbor feel, and a great job cleaning and sanitizing.",
  },
  // --- Water damage / flood ---
  {
    tag: "Water Damage", name: "Ana Ciumac", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration"],
    text: "I recently dealt with water damage in my home, and I can't express how grateful I am for the incredible service. The technicians arrived promptly, explained the entire process, and worked diligently to remove the water and dry the affected areas. They were respectful of my home and left it clean and tidy. My home is back to normal — I highly recommend them.",
  },
  {
    tag: "Water Damage", name: "Igor T", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration", "burst-pipe-repair"],
    text: "Carolina Pro Restoration responded within an hour for leaking water. Fast, professional, and reliable service. Highly recommend!",
  },
  {
    tag: "Flood Cleanup", name: "Tiffany Smith", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration", "basement-flooding"],
    text: "I never leave reviews, but Carolina Pro Restoration is literally the best hands down. We came home from vacation to find our downstairs flooded. My husband found Carolina Pro and they showed up in what seemed like minutes. Zach and his crew are the best — I highly recommend them.",
  },
  {
    tag: "Water Damage", name: "Roger Ayers", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration"],
    text: "I spoke with the guys from CPR about several water issues at my home and knew right away I was dealing with professionals. They put my mind at ease and immediately started brainstorming to solve my issues. I could not recommend them more!",
  },
  {
    tag: "Water Removal", name: "Mardaly Jimenez", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration"],
    text: "This team was very professional and did a thorough job with water removal from our house. Got the job done and done well. They are the very best!",
  },
  {
    tag: "Water Damage Rebuild", name: "Sean Adams", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration"],
    text: "When our house was built 15 years ago, the original contractors did a shoddy job on our bathrooms, which led to a lot of water damage. Carolina Pro helped us with insurance and did an outstanding job repairing and upgrading our bathrooms. Highly recommend this company to anyone in need of major repairs.",
  },
  // --- Insurance / basement ---
  {
    tag: "Insurance Handled", name: "Willie & Nikki Bowman", source: "Google Review", stars: 5,
    topics: ["water-damage-restoration", "burst-pipe-repair"],
    text: "Water line leak. Insurance tried to deny it, but Carolina Pro Restoration refused to stop mitigation and kept communicating with the desk manager and supervisor. End result: mitigation completed and reconstruction flawless!",
  },
  {
    tag: "Basement Flooding", name: "Matthew Griggs", source: "Google Review", stars: 5,
    topics: ["basement-flooding", "water-damage-restoration"], city: "fort-mill-sc",
    text: "Lauren and her team handled our flooded basement like champs. They hauled out ruined furniture, set up industrial fans, and even helped us file the insurance claim. They sanitized everything afterward — no weird smells, no lingering dampness. Highly recommended to Fort Mill folks!",
  },
  // --- Burst pipe / plumbing ---
  {
    tag: "Burst Pipe", name: "Stephen Freeman", source: "Google Review", stars: 5,
    topics: ["burst-pipe-repair", "storm-damage", "water-damage-restoration"],
    text: "Recently bought a house and things started going wrong immediately — broken pipe and roof leak, you name it. Our experience with Zach and CPR has been phenomenal. Constant and clear communication, detailed explanation of the work, and a great breakdown of costs. These are the guys you want. 10/10.",
  },
  {
    tag: "Plumbing & Pipes", name: "Tara Cooke", source: "Google Review", stars: 5,
    topics: ["burst-pipe-repair"],
    text: "He was Johnny on the spot. Talked with him about a plumbing issue and he was there within the hour — kind and courteous service! I would highly recommend.",
  },
  // --- Crawl space / waterproofing ---
  {
    tag: "Crawl Space", name: "Oliver McPherson", source: "Google Review", stars: 5,
    topics: ["crawlspace", "waterproofing"],
    text: "Our crawlspace was a damp nightmare until Zach from Carolina Pro Restoration came out. He installed a vapor barrier that actually stayed put (unlike our last attempt), and even pointed out a few spots where moisture was sneaking in. Super knowledgeable and didn't upsell us on stuff we didn't need. Thank you!",
  },
  {
    tag: "Crawl Space", name: "GyroRon", source: "Google Review", stars: 5,
    topics: ["crawlspace", "waterproofing"],
    text: "I had another crawl space company do structural work under my house and doubted it was done right — my floors had begun to creak. I called Carolina Pro Restoration and they came out for no charge, inspected the work, and found the faults. They told me what needed to be done and put no pressure on me to use them. Very professional and knowledgeable.",
  },
  {
    tag: "Crawl Space", name: "Teckno Visions", source: "Google Review", stars: 5,
    topics: ["crawlspace"],
    text: "10/10 — if anything happens to my house or crawl space, these guys are my first call!",
  },
  // --- Decks / rebuild ---
  {
    tag: "Deck Rebuild", name: "Andrew Shay", source: "Google Review", stars: 5,
    topics: ["decks-and-porches"],
    text: "Needed a new deck built after our old one started rotting. Carolina Pro Restoration gave us a fair quote, stuck to the timeline, and used solid materials that feel like they'll last forever. The team was friendly and cleaned up every day. Highly recommend them for any construction work!",
  },
  {
    tag: "Wood Rot Repair", name: "Megan Laddusaw", source: "Google Review", stars: 5,
    topics: ["decks-and-porches", "water-damage-restoration"],
    text: "Absolutely fantastic service from Zachary and the team. They fixed and resealed several rotting areas of wood around our window dormers, along with other exterior touchups — knocked it all out in one day, very reasonably priced. The windows look good as new. Very neat, clean, professional job.",
  },
  // --- Commercial / HOA ---
  {
    tag: "HOA / Commercial", name: "Riverbend HOA", source: "Google Review", stars: 5,
    topics: ["commercial-restoration"],
    text: "The crew was professional and on top of everything. I was really happy that they worked with my insurance company, and everything was handled with ease.",
  },
  // --- General (fill any page) ---
  {
    tag: "Honest & Professional", name: "Blake", source: "Google Review", stars: 5,
    text: "It's hard nowadays to find a company that's honest and professional, but these guys showed up when they said they would, did great work, and did it with a smile. I can appreciate having someone at my home I can trust. Great experience all around.",
  },
  {
    tag: "Fast Response", name: "Debbie Fijan", source: "Google Review", stars: 5,
    text: "Fast response, competitive pricing, great customer service, and the work was done well and completed quickly. Zack was great to work with. I highly recommend!",
  },
  {
    tag: "5-Star Service", name: "Amanda Carter", source: "Google Review", stars: 5,
    text: "Zach was excellent! Prompt, professional, and courteous. Highly recommend Carolina Pro Restoration! 5/5 stars.",
  },
];

// Hand-picked, diverse set for the homepage / about / any page that doesn't
// target a specific service (mold, water, insurance, crawlspace, pipe, flood).
const FEATURED = [
  "Stephen Freeman", "Rocket Tropper", "Ana Ciumac",
  "Willie & Nikki Bowman", "Oliver McPherson", "Tiffany Smith",
];
export const featuredReviews: Review[] = FEATURED.map(
  (n) => reviews.find((r) => r.name === n)!
).filter(Boolean);

/** Reviews relevant to a service slug, padded with strong general reviews. */
export function reviewsFor(service: string, count = 3): Review[] {
  const matched = reviews.filter((r) => r.topics?.includes(service));
  if (matched.length >= count) return matched.slice(0, count);
  const general = reviews.filter((r) => !r.topics || r.topics.length === 0);
  return [...matched, ...general].slice(0, count);
}

// Cities in/around Fort Mill where a Fort-Mill review reads as a local
// neighbor (same York County / immediate south-Charlotte border). The far
// Union- and Gaston-County towns are intentionally excluded — a "I'm in Fort
// Mill" review would look out of place there.
const FORT_MILL_AREA = new Set([
  "fort-mill-sc", "tega-cay-sc", "rock-hill-sc", "indian-land-sc",
  "clover-sc", "lake-wylie-sc", "pineville-nc", "ballantyne-nc", "charlotte-nc",
]);

/** Reviews for a city slug (local/nearby ones first), padded with a diverse set. */
export function reviewsForCity(city: string, count = 3): Review[] {
  const local = reviews.filter(
    (r) => r.city === city || (r.city === "fort-mill-sc" && FORT_MILL_AREA.has(city))
  );
  // Fill only from reviews that don't name a city, so a "I'm in Fort Mill"
  // review never surfaces on a non-adjacent town. Shorter ones read cleaner.
  const rest = reviews.filter((r) => !r.city && !local.includes(r) && r.text.length < 260);
  return [...local, ...rest].slice(0, count);
}

export const reviewsSummary = {
  count: "38",
  stars: 5,
  readMoreHref: "/reviews-testimonials",
};

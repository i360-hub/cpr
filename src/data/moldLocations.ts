// Mold-removal town pages. Rendered by src/pages/mold-removal-[city].astro at
// /mold-removal-{town}-{state} — the same flat slug convention as the Tier-2
// water pages, deliberately NOT nested under /mold-removal.
//
// These are children of the /mold-removal hub in meaning: same 5-step process,
// same technical claims, same free-inspection offer. The hub stays metro-level
// ("Fort Mill & Charlotte"); these pages own the towns. Neighborhood names are
// harvested from each town's existing water-damage page in locations.ts — never
// invented — so the two page families stay coherent.
//
// Cost figures are typical Carolinas-market ranges presented as ranges, not
// quotes (same treatment as the waterproofing page's cost table). They are the
// AI Overview hook: AI Overviews appeared on 19 of 50 audited mold checks and
// cited this domain zero times, and cost answers are what they quote.

export interface MoldLocation {
  slug: string;
  name: string;
  state: string;
  title: string;
  h1: string;
  metaDescription: string;
  heroTag: string;
  heroSub: string;
  heroTrust: string[];
  stats: { number: string; label: string }[];
  /** Sections 3 + 4: the opening H2 and the "Why {Town} Homes Get Mold" block. */
  body: { tag: string; html: string }[];
  process: { title: string; sub: string; ctaLabel: string; steps: { title: string; text: string }[] };
  cost: { title: string; sub: string; note: string; rows: { name: string; range: string }[] };
  /** H3-level prose under the cost table — what moves the number in this town. */
  costDetail: { tag: string; html: string }[];
  inspection: { title: string; desc: string; points: string[] };
  neighborhoods: { title: string; intro: string; items: string[] };
  faqTitle: string;
  faqSub: string;
  faq: { q: string; a: string }[];
  related: { title: string; sub: string; cards: { title: string; text: string; href: string }[] };
  nearby: { label: string; href: string }[];
  reviewsTitle: string;
  reviewsSub: string;
  finalCta: string;
  contactHeading: string;
  contactDesc: string;
  areaTitle: string;
  areaSub: string;
  areaInfoHeading: string;
  areaInfoBlurb: string;
}

// Shared five steps, matching /mold-removal exactly in order and intent. Each
// town rewords the text locally — the hub must never be contradicted.
const PROCESS_TITLE = "How Professional Mold Remediation Works";

export const moldLocations: Record<string, MoldLocation> = {
  "rock-hill-sc": {
    slug: "rock-hill-sc",
    name: "Rock Hill",
    state: "SC",
    title: "Mold Removal Rock Hill SC | Free Inspection | 24/7",
    h1: "Mold Removal in Rock Hill, SC",
    metaDescription:
      "Mold removal in Rock Hill, SC. IICRC-certified containment, HEPA scrubbing, and moisture repair — plus a free mold inspection. Call (980) 277-3700.",
    heroTag: "🛡️ Free Mold Inspection — Rock Hill, SC",
    heroSub:
      "Musty crawl space, a dark patch on the drywall, or allergies that only flare up at home? We inspect for free, seal off the area, remove the mold safely, and fix the moisture feeding it — then rebuild what we take out. IICRC-certified crews, 8 miles up I-77 from our Fort Mill shop.",
    heroTrust: ["Free Mold Inspection", "IICRC Certified", "BBB Accredited", "SC Licensed & Fully Insured"],
    stats: [
      { number: "47 in", label: "Rain Per Year" },
      { number: "24-48 hrs", label: "For Mold to Take Hold" },
      { number: "$0", label: "Cost of Your Inspection" },
    ],
    body: [
      { tag: "h2", html: "24/7 Mold Removal in Rock Hill, SC" },
      {
        tag: "p",
        html: 'If you need mold removal in Rock Hill, SC, start with the inspection — not the demolition. We are <a href="/about-carolina-pro-restoration">Carolina Pro Restoration</a>, based 8 miles up I-77 in Fort Mill, and we have IICRC-certified mold crews working across Rock Hill and York County. We find every spot of growth, trace the moisture feeding it, and give you a written plan and a firm price before anyone touches a wall. Call <a href="tel:9802773700">980-277-3700</a> — we answer 24 hours a day.',
      },
      {
        tag: "p",
        html: 'Rock Hill gets about 47 inches of rain a year, well above the national average, and it sits on the York County red clay that refuses to drain. That combination is why this city has a mold problem that most homeowners only find by smell. We handle the full job: containment, HEPA air scrubbing, safe removal of contaminated material, antimicrobial treatment, and the moisture repair that keeps it from coming back — then our own crew rebuilds the drywall, trim, and flooring we removed. See our full <a href="/mold-removal">mold removal</a> process, or read what we do about the root cause in <a href="/water-damage-restoration-rock-hill-sc">water damage restoration in Rock Hill</a>.',
      },
      { tag: "h2", html: "Why Rock Hill Homes Get Mold" },
      { tag: "h3", html: "York County Clay Holds Water Against Your Crawl Space" },
      {
        tag: "p",
        html: 'Red clay does not absorb water, it stores it. After a heavy rain in Rock Hill the ground around your foundation stays saturated for days, and that moisture migrates straight into the crawl space. We routinely pull soaked insulation off floor joists in India Hook and along the Cherry Road corridor and find active growth on the subfloor above it. The tell is almost never visible — it is a musty smell in the hallway, or a heating bill that climbed for no reason. <a href="/crawlspace">Crawl space encapsulation</a> is the permanent fix; remediation without it just buys you a year.',
      },
      { tag: "h3", html: "Boom-Era 2000s Builds Are Hitting Plumbing-Failure Age" },
      {
        tag: "p",
        html: "Manchester Village, Massey, Waterford, and the Riverwalk expansion went up during the 2000s housing boom, largely on slab and with the polybutylene and early PEX supply lines of that era. Those fittings are now 15 to 20 years old — squarely in the failure window. A slab leak or a pinhole behind a wall does not flood the house; it wets one cavity, quietly, for months. By the time the baseboard swells or the flooring cups, mold has had a long head start inside the wall. That is the single most common call we take from these neighborhoods.",
      },
      { tag: "h3", html: "Old Town's Older Housing Stock" },
      {
        tag: "p",
        html: "Downtown and Old Town Rock Hill hold the city's oldest homes — 1940s through 1970s stock on crawl space foundations, with original plumbing, minimal vapor barriers, and additions built over the decades that never got proper ventilation. Bathrooms in these homes often have no exhaust fan at all. Steam has nowhere to go, so it condenses inside the wall behind the tile. When we open those walls we find growth on the back of the drywall and on the studs, with a clean-looking bathroom on the other side.",
      },
      { tag: "h3", html: "Catawba River and Lake Wylie Humidity" },
      {
        tag: "p",
        html: "Homes along the Lake Wylie shoreline and through Riverwalk sit in air that stays humid most of the year. Elevated humidity alone will grow mold — no leak required — once indoor relative humidity holds above roughly 60%. Undersized or oversized HVAC makes it worse: a system that short-cycles cools the air without pulling the moisture out of it. In these homes we often find growth in closets on exterior walls, behind furniture pushed against them, and in bonus rooms over garages.",
      },
    ],
    process: {
      title: PROCESS_TITLE,
      sub: "Killing surface mold is not enough. Our IICRC-certified crew follows the same five steps on every Rock Hill job — remove the mold safely, clean the air, and fix the moisture that caused it.",
      ctaLabel: "The inspection is free, and it is the step that decides everything else. Call anytime.",
      steps: [
        {
          title: "Inspect and Test the Mold",
          text: "We start where Rock Hill mold actually lives: the crawl space, the bathroom walls, the closet on the exterior wall, the bonus room over the garage. We map how far it has spread and, when it matters for your health or your claim, we test to identify what we are dealing with. That inspection is free and it produces a written scope, not a sales pitch.",
        },
        {
          title: "Find the Moisture Source",
          text: "Mold needs water. We use moisture meters and FLIR thermal imaging to track it down — a slab leak in a Manchester Village build, standing water under an India Hook crawl space, or simply indoor humidity that never drops below 60%. Thermal imaging finds wet cavities without cutting a single hole. Find the water and you stop the mold from returning.",
        },
        {
          title: "Seal Off the Area",
          text: "Before any removal starts, we build containment with plastic sheeting and run negative air machines so spores cannot drift into the rest of your house. HEPA air scrubbers clean the air the whole time we are on site. This is the step budget operators skip, and it is why a cheap job can leave your air worse than when they started.",
        },
        {
          title: "Remove Mold and Treat Surfaces",
          text: "We take out the drywall, insulation, and subfloor material that is too far gone to save, HEPA vacuum everything that stays, and apply an antimicrobial to the framing. Bleach does not reach mold living inside porous material like drywall and wood — it lightens the stain and leaves the roots. Proper removal is the only thing that works.",
        },
        {
          title: "Repair the Source and Verify",
          text: "We fix what caused it — the slab leak, the missing bathroom fan, the wet crawl space that needs a vapor barrier and a right-sized dehumidifier — then rebuild the drywall, trim, paint, and flooring with our own crew. A final moisture and visual check confirms the area is clean and dry before we close the job.",
        },
      ],
    },
    cost: {
      title: "What Mold Removal Costs in Rock Hill",
      sub: "Typical Carolinas ranges to help you plan — not a quote. Your exact price comes after the free inspection, in writing, before any work starts.",
      note: "These are typical ranges, not a quote. What moves the number most in Rock Hill is crawl space size and whether the moisture source needs its own repair. Insurance often covers mold that follows a sudden covered event — a burst pipe or an appliance failure — and rarely covers mold from long-term humidity or deferred maintenance. Financing is available.",
      rows: [
        { name: "Single small area (under 100 sq ft) — closet, one bathroom wall", range: "$600–$1,500" },
        { name: "Bathroom or laundry room, mold behind tile or drywall", range: "$1,200–$3,500" },
        { name: "Crawl space remediation and treatment", range: "$2,500–$8,000" },
        { name: "Multi-room or whole-basement remediation", range: "$6,000–$15,000" },
        { name: "Large-scale, HVAC-involved, or structural repair needed", range: "$10,000–$30,000" },
        { name: "Mold inspection with moisture mapping", range: "Free" },
        { name: "Lab air-quality or surface sampling (when needed)", range: "$300–$600" },
      ],
    },
    costDetail: [
      { tag: "h3", html: "What actually moves the price" },
      {
        tag: "p",
        html: "Three things, in order. <strong>Square footage of affected material</strong> — remediation is priced by what has to come out and be rebuilt, not by the size of the visible stain. <strong>Containment</strong> — a single sealed room is straightforward; a job that requires negative air across several rooms, or protecting occupied space while you keep living there, costs more and takes longer. <strong>Whether the moisture source needs repair</strong> — this is the one that surprises people. Remediating a Rock Hill crawl space runs one number; remediating it and then encapsulating it so it stays dry runs another. We price both separately so you can see exactly what you are paying for.",
      },
      { tag: "h3", html: "Why a $400 quote is usually a bad sign" },
      {
        tag: "p",
        html: 'If someone quotes mold removal over the phone without seeing the space, they are quoting a spray-down. Real remediation means containment, negative air, HEPA scrubbing, removal of contaminated material, antimicrobial treatment, and a fix for the water. The reason our inspection is free is so you get a real number instead of a cheap one. Compare it against anything else you have been quoted — see the <a href="/mold-removal">full mold removal process</a> for exactly what is included.',
      },
    ],
    inspection: {
      title: "Free Mold Inspection in Rock Hill",
      desc: "You cannot price mold you have not seen, and you cannot fix mold without finding the water. We inspect Rock Hill homes at no cost — the whole point is that you get an honest answer about what is really going on before you spend anything.",
      points: [
        "We check the spots Rock Hill mold actually lives — crawl spaces, bathrooms, closets on exterior walls, bonus rooms over garages",
        "Moisture meters and thermal imaging find damp behind walls and under floors, with no demolition",
        "We trace the source: slab leak, roof leak, drainage against the foundation, or indoor humidity that never drops",
        "You get a written scope and a firm price before any work begins — no pressure, no same-day-only discount",
        "Lab air-quality testing available when health concerns or an insurance claim call for it",
        "Financing available, so a healthy home fits your budget",
      ],
    },
    neighborhoods: {
      title: "Boots on the Ground Across Rock Hill",
      intro: "Our IICRC-certified mold crews work across all of Rock Hill and York County, including:",
      items: [
        "India Hook",
        "Riverwalk",
        "Manchester Village",
        "Massey",
        "Waterford",
        "Downtown / Old Town",
        "Lake Wylie shoreline",
        "Cherry Road corridor",
      ],
    },
    faqTitle: "Rock Hill Mold Removal FAQs",
    faqSub: "Straight answers for Rock Hill and York County homeowners.",
    faq: [
      {
        q: "Why do so many Rock Hill crawl spaces have mold?",
        a: 'York County red clay does not drain. After heavy rain the soil around your foundation stays saturated for days and pushes that moisture into the crawl space, where it soaks the insulation and feeds growth on the floor joists and subfloor. Rock Hill also gets about 47 inches of rain a year. Most homeowners never see it — they smell it, because crawl space air rises into the living space. Remediation clears what is there; <a href="/crawlspace">crawl space encapsulation</a> with a sealed vapor barrier and a right-sized dehumidifier is what keeps it gone.',
      },
      {
        q: "I had a slab leak in my 2000s-built Rock Hill home. Should I expect mold?",
        a: "Often, yes — and that is exactly why we look. Homes in Manchester Village, Massey, Waterford, and the Riverwalk expansion went up during the 2000s boom with supply lines that are now 15 to 20 years old. A slab leak does not announce itself; it wets one wall cavity slowly for weeks or months. Mold can start in 24 to 48 hours in a wet cavity, so by the time the baseboard swells there is usually growth behind the drywall. We use thermal imaging to check without opening the wall first.",
      },
      {
        q: "How fast does mold grow in a Carolina summer?",
        a: "Mold can take hold in 24 to 48 hours on damp drywall, wood, or insulation, and a Rock Hill summer gives it everything it needs — high heat, high humidity, and indoor relative humidity that often sits above 60%. That is why we tell people not to wait out a leak. If something got wet and was not dried properly within about two days, assume you have a mold question rather than a water question.",
      },
      {
        q: "Does homeowners insurance cover mold removal in South Carolina?",
        a: "It depends on what caused it. South Carolina policies generally cover mold that results from a sudden, accidental, covered event — a burst supply line, a water heater letting go, an appliance failure. They generally exclude mold caused by long-term humidity, seepage, or deferred maintenance, and many policies cap mold coverage at a set dollar amount even when it is covered. We document the cause with photos and moisture readings from day one, which is what determines how your adjuster classifies it.",
      },
      {
        q: "What are the signs of mold in an older Old Town home?",
        a: "In Downtown and Old Town Rock Hill's 1940s–1970s housing stock, the signs are usually indirect: a musty smell that is strongest in one room or near the floor, bathroom walls that stay damp because there is no exhaust fan, peeling or bubbling paint, dark spots along baseboards, and allergy or asthma symptoms that ease when you leave the house. Visible growth is the last sign, not the first. If you have any two of those, get the space looked at.",
      },
      {
        q: "What does your free Rock Hill mold inspection include?",
        a: 'A real walkthrough of the areas where mold actually hides — crawl space, bathrooms, closets on exterior walls, anywhere there has been a past leak — plus moisture meter readings and thermal imaging to find damp behind walls without cutting into them. We identify the moisture source, tell you the scope in plain language, and give you a written price before anything starts. If you want lab air sampling, we can arrange it. <a href="/contact-us">Request your free inspection</a> or call <a href="tel:9802773700">980-277-3700</a>.',
      },
    ],
    related: {
      title: "Related Services in Rock Hill",
      sub: "Mold is a moisture problem. These are the services that solve the cause, not just the symptom.",
      cards: [
        {
          title: "Water Damage Restoration in Rock Hill",
          text: "Most Rock Hill mold starts with water. We extract, dry, and rebuild.",
          href: "/water-damage-restoration-rock-hill-sc",
        },
        {
          title: "Crawl Space Encapsulation",
          text: "The permanent fix for York County clay and a damp crawl space.",
          href: "/crawlspace",
        },
        {
          title: "Waterproofing",
          text: "Stop water at the foundation before it ever reaches the framing.",
          href: "/waterproofing",
        },
        {
          title: "Air Duct Cleaning",
          text: "Clear mold spores out of the HVAC system that spreads them.",
          href: "/duct-cleaning",
        },
      ],
    },
    nearby: [
      { label: "Rock Hill, SC", href: "/mold-removal-rock-hill-sc" },
      { label: "Fort Mill, SC", href: "/mold-removal-fort-mill-sc" },
      { label: "Tega Cay, SC", href: "/mold-removal-tega-cay-sc" },
      { label: "Indian Land, SC", href: "/mold-removal-indian-land-sc" },
      { label: "Pineville, NC", href: "/mold-removal-pineville-nc" },
      { label: "All Mold Removal", href: "/mold-removal" },
    ],
    reviewsTitle: "What Rock Hill Homeowners Say",
    reviewsSub: "Real reviews from homeowners and property managers across Rock Hill, Fort Mill, and York County.",
    finalCta: "Musty Smell in Your Rock Hill Home? Start With the Free Inspection.",
    contactHeading: "Request a Free Rock Hill Mold Inspection",
    contactDesc:
      "Tell us what you are seeing or smelling and our Rock Hill crew will call you back fast. No cost, no pressure — just a straight answer about what is going on.",
    areaTitle: "Your Local Mold Removal Team in Rock Hill",
    areaSub:
      "We are not a distant call center. We are locally owned and based in Fort Mill — 3650 Centre Circle, Suite I, about 8 miles from Rock Hill.",
    areaInfoHeading: "Mold Inspections and Remediation Across York County",
    areaInfoBlurb:
      "We cover all of Rock Hill and York County for mold inspection, testing, remediation, and the moisture repair that keeps it from coming back.",
  },

  "pineville-nc": {
    slug: "pineville-nc",
    name: "Pineville",
    state: "NC",
    title: "Mold Removal Pineville NC | Free Inspection | 24/7",
    h1: "Mold Removal in Pineville, NC",
    metaDescription:
      "Mold removal in Pineville, NC. IICRC-certified containment, HEPA scrubbing, and moisture repair — plus a free mold inspection. Call (980) 277-3700.",
    heroTag: "🛡️ Free Mold Inspection — Pineville, NC",
    heroSub:
      "Musty crawl space, a stain that came back after a leak, or symptoms that only show up at home? We inspect for free, contain the area, remove the mold safely, and fix the moisture feeding it — then rebuild what we take out. IICRC-certified crews, 15 to 25 minutes from Pineville.",
    heroTrust: ["Free Mold Inspection", "IICRC Certified", "BBB Accredited", "15-25 Min From Pineville"],
    stats: [
      { number: "43 in", label: "Rain Per Year" },
      { number: "24-48 hrs", label: "For Mold to Take Hold" },
      { number: "$0", label: "Cost of Your Inspection" },
    ],
    body: [
      { tag: "h2", html: "24/7 Mold Removal in Pineville, NC" },
      {
        tag: "p",
        html: 'Looking for mold removal in Pineville, NC? Here is the short version: mold is a moisture problem, not a stain problem, and any real fix starts by finding the water. We are <a href="/about-carolina-pro-restoration">Carolina Pro Restoration</a>, 15 to 25 minutes down I-77 in Fort Mill, and our IICRC-certified crews work Pineville and southern Mecklenburg County daily. The inspection is free, the scope is written, and the price is firm before anyone opens a wall. Call <a href="tel:9802773700">980-277-3700</a> — we answer 24 hours a day.',
      },
      {
        tag: "p",
        html: 'Pineville is about 12,000 people sitting right on the state line, with roughly 43 inches of rain a year and creek corridors running straight through its residential blocks. Mold remediation is not licensed as its own trade in North Carolina, which means certification — not a state card — is what separates a remediation contractor from someone with a spray bottle. Our crews work to IICRC standards: containment, negative air, HEPA scrubbing, safe removal, antimicrobial treatment, and a fix for the moisture source. Then our own crew rebuilds what came out. See the full <a href="/mold-removal">mold removal</a> process, or read about the usual root cause in <a href="/water-damage-restoration-pineville-nc">water damage restoration in Pineville</a>.',
      },
      { tag: "h2", html: "Why Pineville Homes Get Mold" },
      { tag: "h3", html: "Little Sugar Creek and the McAlpine Creek Floodplain" },
      {
        tag: "p",
        html: 'Little Sugar Creek and McAlpine Creek tributaries cut through residential Pineville, and about 9% of properties here carry meaningful flood risk. The town also sits under an enormous retail footprint — Carolina Place, the big-box corridor, acres of parking — and all of that impervious surface concentrates runoff into the same low-lying residential zones during heavy rain. Hurricane Helene in 2024 put water into crawl spaces and ground-level units across southern Mecklenburg. Every one of those flooded crawl spaces is a mold job now if it was never properly dried. A crawl space that was pumped but not dried and treated will grow mold within days.',
      },
      { tag: "h3", html: "1970s and 1980s Crawl Space Homes" },
      {
        tag: "p",
        html: "The older core of Pineville — the blocks along Pineville-Matthews Road, downtown, and around Lowry Street — is 1970s and 1980s ranch and split-level stock on crawl space foundations over Mecklenburg County's clay-heavy Piedmont soil. That clay holds moisture against the foundation year-round, even between rain events. Original copper and galvanized plumbing in these homes is decades past its lifespan, so slow drips behind drywall are routine. The combination — a permanently damp crawl space plus a hidden leak — is the most common mold profile we find in Pineville.",
      },
      { tag: "h3", html: "Highway 51 and Park Road Townhomes" },
      {
        tag: "p",
        html: "The townhome and apartment communities built along Highway 51 and Park Road during the 2010s boom are now 8 to 15 years old — the age where builder-grade PEX fittings, water heater connections, dishwasher lines, and washer hoses start to fail. Because whole buildings went up on compressed timelines, they share plumbing of the same age and brand, so failures cluster. In attached housing that matters twice over: a leak in one unit wets the shared wall assembly, and mold grows on both sides of it. We handle multi-unit remediation and coordinate with HOAs and property managers.",
      },
      { tag: "h3", html: "Charlotte-Metro Humidity and HVAC That Cannot Keep Up" },
      {
        tag: "p",
        html: "Mold does not need a leak. Once indoor relative humidity holds above roughly 60%, it will grow on its own — and Charlotte-metro summers deliver that easily. An oversized air conditioner makes it worse, not better: it cools the room fast, shuts off before it has pulled the moisture out of the air, and leaves you with a cold, clammy house. In Pineville we find this pattern in closets on exterior walls, behind furniture, in bonus rooms over garages, and around supply registers where condensation forms. <a href=\"/duct-cleaning\">Duct cleaning</a> is often part of the answer when the HVAC system has been spreading spores.",
      },
    ],
    process: {
      title: PROCESS_TITLE,
      sub: "Five steps, in this order, on every Pineville job. Skipping any of them is why mold comes back.",
      ctaLabel: "The inspection is free and it decides everything else. Call anytime — we answer 24/7.",
      steps: [
        {
          title: "Inspect and Test the Mold",
          text: "We find where the mold is and how far it has spread — crawl space, bathroom walls, closets on exterior walls, anywhere a past leak or a past flood left material damp. When health concerns or an insurance claim call for it, we arrange lab air or surface sampling. The inspection is free and produces a written scope, not an estimate scrawled on a card.",
        },
        {
          title: "Find the Moisture Source",
          text: "Mold cannot grow without water. We use moisture meters and FLIR thermal imaging to trace it — a failed PEX fitting in a Highway 51 townhome, creek water that got into a crawl space and was never dried, or indoor humidity that simply never drops below 60%. Thermal imaging maps the wet cavity without cutting a hole to find it.",
        },
        {
          title: "Seal Off the Area",
          text: "We build containment with plastic sheeting and run negative air machines so spores cannot travel into clean rooms while we work. HEPA air scrubbers run the whole time we are on site. In attached townhomes this step matters even more, because shared air paths let spores move between units.",
        },
        {
          title: "Remove Mold and Treat Surfaces",
          text: "Drywall, insulation, and subfloor material too contaminated to save comes out and gets bagged inside containment. Everything that stays gets HEPA vacuumed, and framing gets an antimicrobial treatment. Bleach does not reach mold living inside porous material — it removes the color and leaves the colony. Removal is the only method that works on drywall and wood.",
        },
        {
          title: "Repair the Source and Verify",
          text: "We fix the cause — the leak, the drainage, the crawl space that needs a vapor barrier and a dehumidifier — then rebuild the drywall, trim, paint, and flooring with our own crew, so you are not hiring three more contractors. A final moisture and visual check confirms the space is dry and clean before we close the job.",
        },
      ],
    },
    cost: {
      title: "What Mold Removal Costs in Pineville",
      sub: "Typical Carolinas ranges to help you plan — not a quote. Your exact price comes in writing after the free inspection, before any work starts.",
      note: "These are typical ranges, not a quote. In Pineville the two biggest variables are crawl space condition and whether the unit is attached — shared walls mean containment on both sides. North Carolina homeowners policies generally cover mold that follows a sudden covered event, such as a burst supply line, and generally exclude mold from long-term humidity, seepage, or flooding without a separate flood policy. Financing is available.",
      rows: [
        { name: "Single small area (under 100 sq ft) — closet, one bathroom wall", range: "$600–$1,500" },
        { name: "Bathroom or laundry room, mold behind tile or drywall", range: "$1,200–$3,500" },
        { name: "Crawl space remediation and treatment", range: "$2,500–$8,000" },
        { name: "Multi-room or whole-basement remediation", range: "$6,000–$15,000" },
        { name: "Large-scale, HVAC-involved, or structural repair needed", range: "$10,000–$30,000" },
        { name: "Mold inspection with moisture mapping", range: "Free" },
        { name: "Lab air-quality or surface sampling (when needed)", range: "$300–$600" },
      ],
    },
    costDetail: [
      { tag: "h3", html: "The three variables that set the price" },
      {
        tag: "p",
        html: "<strong>One: affected square footage.</strong> Remediation is priced by how much material has to come out and be rebuilt, not by the size of the visible stain — and the stain is almost always smaller than the growth. <strong>Two: containment complexity.</strong> One sealed room is straightforward. Negative air across several rooms, or protecting occupied space in an attached townhome where a shared wall is involved, takes more equipment and more time. <strong>Three: whether the moisture source needs its own repair.</strong> Clearing mold from a Pineville crawl space is one number; clearing it and then sealing the crawl space so it stays dry is another. We price the two separately so you can see exactly what you are buying.",
      },
      { tag: "h3", html: "How long does it take?" },
      {
        tag: "p",
        html: "A single-room job is usually one to three days of remediation plus rebuild time. A crawl space typically runs two to four days. Large multi-room or multi-unit work runs a week or more. Drying and clearance are what set the schedule, not labor — material has to reach a verified dry standard before anything gets closed back up, and rushing that is how a job fails.",
      },
    ],
    inspection: {
      title: "Free Mold Inspection in Pineville",
      desc: "You cannot price mold you have not seen, and you cannot stop it without finding the water. We inspect Pineville homes at no cost so you get an honest answer about the scope before you spend a dollar on it.",
      points: [
        "We check where Pineville mold actually lives — crawl spaces, bathrooms, closets on exterior walls, and anywhere a past flood or leak left material damp",
        "Moisture meters and thermal imaging find damp behind walls and under floors, with no demolition",
        "We trace the source: failed supply line, creek or stormwater intrusion, roof leak, or indoor humidity that never drops",
        "You get a written scope and a firm price before any work begins",
        "Lab air-quality testing available when health concerns or a claim call for it",
        "Financing available, so a healthy home fits your budget",
      ],
    },
    neighborhoods: {
      title: "Boots on the Ground Across Pineville",
      intro: "Our IICRC-certified mold crews work across Pineville and southern Mecklenburg County, including:",
      items: [
        "Downtown Pineville",
        "Lowry Street",
        "Pineville-Matthews Road corridor",
        "McAlpine Creek floodplain",
        "Highway 51 corridor",
        "Park Road townhomes",
      ],
    },
    faqTitle: "Pineville Mold Removal FAQs",
    faqSub: "Straight answers for Pineville and southern Mecklenburg County homeowners.",
    faq: [
      {
        q: "How much does mold removal cost in Pineville, NC?",
        a: "Most Pineville mold removal jobs land between $600 and $8,000. A single small area such as a closet or one bathroom wall typically runs $600 to $1,500. A bathroom or laundry room with mold behind tile or drywall runs $1,200 to $3,500. Crawl space remediation runs $2,500 to $8,000. Multi-room or whole-basement work runs $6,000 to $15,000, and large jobs involving the HVAC system or structural repair can reach $30,000. Our inspection is free; lab air sampling, when needed, runs $300 to $600.",
      },
      {
        q: "Can mold be completely removed from a house?",
        a: "The colony can be removed completely. The spores cannot, and no honest contractor will tell you otherwise — mold spores exist in normal outdoor and indoor air everywhere, and a building can never be made spore-free. What professional remediation does is eliminate the active growth, remove the contaminated material it is living in, clean the air while that happens, and take away the moisture the colony needs. Once the water is gone, the spores that remain have nothing to grow on. That is the actual standard, and it is a permanent result when the moisture source is genuinely fixed.",
      },
      {
        q: "How long does mold remediation take?",
        a: "A single room is typically one to three days of remediation, plus rebuild time for drywall, paint, and flooring. A crawl space is usually two to four days. Multi-room or multi-unit jobs run a week or more. The schedule is set by drying and verification, not labor — affected material has to reach a verified dry standard before anything gets closed back up.",
      },
      {
        q: "Does homeowners insurance cover mold in North Carolina?",
        a: "It depends on the cause. North Carolina policies generally cover mold that results from a sudden, accidental, covered event — a burst supply line, a water heater failure, an appliance leak — and generally exclude mold caused by long-term humidity, seepage, or deferred maintenance. Flooding from a creek requires a separate flood policy. Many policies also cap mold coverage at a fixed dollar amount even when it is covered. We document the cause with photos and moisture readings from day one, because that documentation is what determines how your adjuster classifies the claim.",
      },
      {
        q: "My Pineville crawl space flooded and got pumped out. Do I still need a mold inspection?",
        a: "Yes. Pumping removes standing water; it does not dry the structure. Mold can take hold within 24 to 48 hours on damp wood, insulation, and subfloor, and a crawl space that was pumped but never dried and treated is the most reliable mold generator we see in Pineville. Given that McAlpine Creek and Little Sugar Creek tributaries put roughly 9% of local properties at meaningful flood risk, this is a common situation here. The inspection is free — get it looked at before you pay to fix the wrong thing.",
      },
      {
        q: "Can I stay in my home during mold removal?",
        a: 'Usually, yes. Because we seal off the work area and run HEPA air scrubbers with negative air the entire time, most families stay home through the job. For larger jobs, or for anyone with asthma, a compromised immune system, or a small child in the house, we may recommend staying out of the affected rooms until the air is clear. We will tell you which applies to your home during the free inspection. <a href="/contact-us">Request yours here</a> or call <a href="tel:9802773700">980-277-3700</a>.',
      },
    ],
    related: {
      title: "Related Services in Pineville",
      sub: "Mold is a moisture problem. These are the services that solve the cause, not just the symptom.",
      cards: [
        {
          title: "Water Damage Restoration in Pineville",
          text: "Most Pineville mold starts with water. We extract, dry, and rebuild.",
          href: "/water-damage-restoration-pineville-nc",
        },
        {
          title: "Crawl Space Encapsulation",
          text: "Seal a damp crawl space so Piedmont clay stops feeding mold.",
          href: "/crawlspace",
        },
        {
          title: "Waterproofing",
          text: "Stop stormwater at the foundation before it reaches the framing.",
          href: "/waterproofing",
        },
        {
          title: "Air Duct Cleaning",
          text: "Clear mold spores out of the HVAC system that spreads them.",
          href: "/duct-cleaning",
        },
      ],
    },
    nearby: [
      { label: "Pineville, NC", href: "/mold-removal-pineville-nc" },
      { label: "Fort Mill, SC", href: "/mold-removal-fort-mill-sc" },
      { label: "Rock Hill, SC", href: "/mold-removal-rock-hill-sc" },
      { label: "Tega Cay, SC", href: "/mold-removal-tega-cay-sc" },
      { label: "Indian Land, SC", href: "/mold-removal-indian-land-sc" },
      { label: "All Mold Removal", href: "/mold-removal" },
    ],
    reviewsTitle: "What Pineville Homeowners Say",
    reviewsSub: "Real reviews from homeowners and property managers across Pineville, Charlotte, and Fort Mill.",
    finalCta: "Musty Smell in Your Pineville Home? Start With the Free Inspection.",
    contactHeading: "Request a Free Pineville Mold Inspection",
    contactDesc:
      "Tell us what you are seeing or smelling and our crew will call you back fast. No cost, no pressure — just a straight answer about what is going on.",
    areaTitle: "Your Local Mold Removal Team in Pineville",
    areaSub:
      "We are not a distant call center. We are locally owned and based in Fort Mill, SC — about 8 miles from Pineville, and one of our fastest response zones.",
    areaInfoHeading: "Mold Inspections and Remediation in Southern Mecklenburg",
    areaInfoBlurb:
      "We cover Pineville and southern Mecklenburg County for mold inspection, testing, remediation, and the moisture repair that keeps it from coming back.",
  },

  "fort-mill-sc": {
    slug: "fort-mill-sc",
    name: "Fort Mill",
    state: "SC",
    title: "Mold Removal Fort Mill SC | Free Inspection | 24/7",
    h1: "Mold Removal in Fort Mill, SC",
    metaDescription:
      "Mold removal in Fort Mill, SC — black mold, crawl spaces, and behind-the-wall growth. Free inspection from our local crew. Call (980) 277-3700.",
    heroTag: "🛡️ Free Mold Inspection — Fort Mill, SC",
    heroSub:
      "Black mold in the crawl space, a musty smell you cannot place, or a stain that came back after a leak? Fort Mill is home — our shop is on Centre Circle. We inspect for free, remove the mold safely, fix the moisture feeding it, and rebuild what we take out.",
    heroTrust: ["Free Mold Inspection", "Based in Fort Mill", "IICRC Certified", "BBB Accredited"],
    stats: [
      { number: "44 in", label: "Rain Per Year" },
      { number: "24-48 hrs", label: "For Mold to Take Hold" },
      { number: "$0", label: "Cost of Your Inspection" },
    ],
    body: [
      { tag: "h2", html: "24/7 Mold Removal in Fort Mill, SC" },
      {
        tag: "p",
        html: 'For mold removal in Fort Mill, SC, you are not calling a franchise dispatcher two states away — our shop is at 3650 Centre Circle, Suite I, here in Fort Mill. We are <a href="/about-carolina-pro-restoration">Carolina Pro Restoration</a>, and our IICRC-certified crews work this town every week. The inspection is free, the scope is written down, and the price is firm before anyone opens a wall. Call <a href="tel:9802773700">980-277-3700</a> any hour.',
      },
      {
        tag: "p",
        html: 'Fort Mill takes about 44 inches of rain a year onto York County clay that will not drain, and a large share of its housing stock went up in a single decade with plumbing that is now failing on schedule. That combination produces two kinds of mold call: the sudden one behind a wall after a supply line lets go, and the slow one under the house that nobody notices for years. We handle both — containment, HEPA air scrubbing, safe removal, antimicrobial treatment, and the moisture repair that ends it — then our own crew rebuilds the drywall, trim, and flooring. See the full <a href="/mold-removal">mold removal</a> process, or read about the usual root cause in <a href="/water-damage-restoration-fort-mill-sc">water damage restoration in Fort Mill</a>.',
      },
      { tag: "h2", html: "Why Fort Mill Homes Get Mold" },
      { tag: "h3", html: "Black Mold in Fort Mill Crawl Spaces" },
      {
        tag: "p",
        html: 'Black mold removal is the single most common request we get in Fort Mill, and the crawl space is where we find it. York County clay holds rainwater against the foundation for days, the crawl space stays damp between rain events, and dark growth spreads across the floor joists, the subfloor, and the insulation. "Black mold" is not one species — the term usually means Stachybotrys chartarum, which needs material that has stayed wet for days, and that is exactly what a Fort Mill crawl space provides. Whatever the species, the handling is the same: sealed containment, negative air, full PPE, removal of the contaminated material, and antimicrobial treatment of the framing. Never disturb it yourself — dry-brushing black mold aerosolizes it into the air the whole house breathes. The permanent fix is <a href="/crawlspace">crawl space encapsulation</a>.',
      },
      { tag: "h3", html: "Dura-PEX Pinhole Leaks in 2001–2008 Builds" },
      {
        tag: "p",
        html: "Baxter Village, Regent Park, Springfield, Kingsley, and Sutton Hall went up during the 2001–2008 boom, and a great many of those homes used Dura-PEX supply lines whose fittings are known to develop pinhole leaks after 15 to 20 years. They are all inside that window now. A pinhole does not flood anything — it wets one wall or one cabinet base, slowly, for weeks. Mold takes hold in a damp cavity within 24 to 48 hours, so by the time you see a soft spot or smell something, the growth is established behind the drywall. Low water pressure, a warm patch on a wall, or a water bill that climbed for no reason is the moment to get it looked at.",
      },
      { tag: "h3", html: "Bathrooms and Laundry Rooms With Nowhere for Steam to Go" },
      {
        tag: "p",
        html: "A weak or missing exhaust fan is one of the most reliable mold generators in a Fort Mill home. Steam condenses on the cool exterior wall behind the tile and the vanity, soaks the drywall paper, and grows a colony on a surface nobody ever sees. Laundry rooms do the same thing when the dryer vents into the wall cavity or the run is too long to clear the moisture. When we open these walls the tile side looks spotless and the back of the drywall is black. Fixing the ventilation is part of the job, not an upsell.",
      },
      { tag: "h3", html: "Sugar Creek, Clay Soil, and Storm Water" },
      {
        tag: "p",
        html: 'Fort Mill sits near Sugar Creek and its tributaries, which rise fast during heavy rain, and Hurricane Helene in 2024 put water into crawl spaces across the older neighborhoods near downtown. Newer sections along Tego and Riverwalk sit lower and rely on stormwater retention that overflows during back-to-back storms. Any crawl space or ground-level room that took on water and was pumped rather than properly dried is a mold job today. <a href="/waterproofing">Waterproofing</a> and proper drainage stop the next one.',
      },
    ],
    process: {
      title: PROCESS_TITLE,
      sub: "The same five steps on every Fort Mill job, in this order. Skipping any of them is why mold comes back.",
      ctaLabel: "We are based in Fort Mill, so the free inspection is usually same-day. Call anytime.",
      steps: [
        {
          title: "Inspect and Test the Mold",
          text: "We check where Fort Mill mold actually lives: the crawl space first, then bathroom and laundry walls, closets on exterior walls, and anywhere a supply line has failed. We map how far it has spread, and when health concerns or an insurance claim call for it we arrange lab air or surface sampling. The inspection is free and produces a written scope.",
        },
        {
          title: "Find the Moisture Source",
          text: "Mold needs water. Moisture meters and FLIR thermal imaging trace it back to the cause — a Dura-PEX fitting behind a Baxter Village wall, standing water under the house, a dryer venting into a cavity, or indoor humidity that never drops below 60%. Thermal imaging finds the wet cavity without cutting a hole to look for it.",
        },
        {
          title: "Seal Off the Area",
          text: "We build containment with plastic sheeting and run negative air machines so spores stay in the work area instead of moving through your house. HEPA air scrubbers run the entire time we are on site. This is the step a spray-and-go operator skips, and it is why a cheap job can leave your air measurably worse.",
        },
        {
          title: "Remove Mold and Treat Surfaces",
          text: "Drywall, insulation, and subfloor too contaminated to save comes out and gets bagged inside containment. Everything that stays gets HEPA vacuumed, and the framing gets an antimicrobial treatment. Bleach cannot reach mold living inside porous material like drywall and wood — it takes the color off and leaves the colony. Removal is the only method that works.",
        },
        {
          title: "Repair the Source and Verify",
          text: "We fix the cause — the failed fitting, the missing bathroom fan, the crawl space that needs a vapor barrier and a right-sized dehumidifier — then rebuild the drywall, trim, paint, and flooring with our own crew. A final moisture and visual check confirms it is clean and dry before we close the job out.",
        },
      ],
    },
    cost: {
      title: "What Mold Removal Costs in Fort Mill",
      sub: "Typical Carolinas ranges to help you plan — not a quote. Your exact price comes in writing after the free inspection, before any work starts.",
      note: "These are typical ranges, not a quote. In Fort Mill the number is driven most often by crawl space size and by whether black mold has reached the subfloor and framing, which adds structural repair. Insurance generally covers mold that follows a sudden covered event such as a Dura-PEX failure, and generally excludes mold from long-term humidity or deferred maintenance. Financing is available.",
      rows: [
        { name: "Single small area (under 100 sq ft) — closet, one bathroom wall", range: "$600–$1,500" },
        { name: "Bathroom or laundry room, mold behind tile or drywall", range: "$1,200–$3,500" },
        { name: "Black mold removal in a crawl space", range: "$2,500–$8,000" },
        { name: "Multi-room or whole-basement remediation", range: "$6,000–$15,000" },
        { name: "Large-scale, HVAC-involved, or structural repair needed", range: "$10,000–$30,000" },
        { name: "Mold inspection with moisture mapping", range: "Free" },
        { name: "Lab air-quality or surface sampling (when needed)", range: "$300–$600" },
      ],
    },
    costDetail: [
      { tag: "h3", html: "What actually moves the price in Fort Mill" },
      {
        tag: "p",
        html: "<strong>Affected square footage</strong> comes first — pricing follows how much material has to come out and be rebuilt, not the size of the visible stain, and the stain is always smaller than the growth. <strong>Containment</strong> is second: one sealed room is straightforward, while negative air across several rooms or protecting occupied space while you stay in the house takes more equipment and more days. <strong>Whether the moisture source needs its own repair</strong> is third and it is the one that catches people out. Clearing black mold from a Fort Mill crawl space is one number; clearing it and then encapsulating so the clay stops feeding it is another. We price the two separately so nothing is buried.",
      },
      { tag: "h3", html: "Does the rebuild cost extra?" },
      {
        tag: "p",
        html: "It is a separate line, and we do it ourselves. Most remediation companies stop at the tear-out and hand you a hole in the wall, which means finding a drywall contractor, then a painter, then a flooring installer. We rebuild the drywall, trim, paint, and flooring with the same crew and the same project manager who did the remediation, so there is one point of contact and one warranty. That is included in the written scope you get after the free inspection, not discovered later.",
      },
    ],
    inspection: {
      title: "Free Mold Inspection in Fort Mill",
      desc: "We are based in Fort Mill, so this is usually a same-day visit. You cannot price mold you have not seen, and you cannot stop it without finding the water — the inspection costs nothing and it is the step everything else depends on.",
      points: [
        "We check where Fort Mill mold actually lives — crawl spaces first, then bathrooms, laundry rooms, and closets on exterior walls",
        "Moisture meters and thermal imaging find damp behind walls and under floors, with no demolition",
        "We trace the source: Dura-PEX fitting failure, dryer venting into a cavity, drainage against the foundation, or humidity that never drops",
        "You get a written scope and a firm price before any work begins — including the rebuild",
        "Lab air-quality testing available when health concerns or a claim call for it",
        "Financing available, so a healthy home fits your budget",
      ],
    },
    neighborhoods: {
      title: "Boots on the Ground Across Fort Mill",
      intro: "We are headquartered here. Our mold crews work across all of Fort Mill, including:",
      items: [
        "Baxter Village",
        "Regent Park",
        "Springfield",
        "Kingsley",
        "Massey",
        "Catawba Plantation",
        "Sutton Hall",
        "Downtown Fort Mill",
      ],
    },
    faqTitle: "Fort Mill Mold Removal FAQs",
    faqSub: "Straight answers from the crew based on Centre Circle.",
    faq: [
      {
        q: "Is the black mold in my Fort Mill crawl space dangerous?",
        a: "Treat it as though it is. \"Black mold\" usually refers to Stachybotrys chartarum, which grows on material that has stayed wet for days — exactly what a York County crawl space provides. It can trigger coughing, sinus irritation, headaches, and worsened asthma, and people with respiratory conditions, small children, and older adults react most. The bigger risk is disturbing it: brushing or sweeping dry black mold sends spores into the air your whole house breathes, because crawl space air rises into the living space. Leave it alone and have it contained and removed properly.",
      },
      {
        q: "Is mold removal the same as mold remediation?",
        a: "They describe the same job from two angles. Removal is the physical act of taking the mold and the material it lives in out of the building. Remediation is the whole controlled process around it: containment, negative air, HEPA scrubbing, removal, antimicrobial treatment, and repairing the moisture source so it does not return. If a company offers removal without containment or a moisture fix, you are buying a cleaning, not a remediation — and it will grow back.",
      },
      {
        q: "My Baxter Village home has Dura-PEX plumbing. Should I check for mold?",
        a: "It is worth a look. Dura-PEX fittings installed between 2001 and 2008 are known to develop pinhole leaks, and every Fort Mill home from that era is now inside the failure window. A pinhole wets one cavity slowly rather than flooding a room, and mold can take hold in that cavity within 24 to 48 hours. Watch for a drop in water pressure, a warm spot on a wall, a musty smell in one room, or a water bill that rose for no reason. We can check with thermal imaging without opening anything.",
      },
      {
        q: "How much does mold removal cost in Fort Mill?",
        a: "Most Fort Mill jobs land between $600 and $8,000. A single small area such as a closet or one bathroom wall runs $600 to $1,500. A bathroom or laundry room with mold behind tile or drywall runs $1,200 to $3,500. Black mold removal in a crawl space runs $2,500 to $8,000. Multi-room work runs $6,000 to $15,000, and jobs involving the HVAC system or structural repair can reach $30,000. The inspection is free; lab sampling, when needed, is $300 to $600.",
      },
      {
        q: "How fast can you get to my Fort Mill home?",
        a: 'Fast — our shop is at 3650 Centre Circle, Suite I, so free mold inspections in Fort Mill are usually same-day or next-day. Mold is not a burst-pipe emergency where minutes decide the outcome, but it does spread and the health exposure continues while you wait. We answer the phone 24 hours a day at <a href="tel:9802773700">980-277-3700</a>, or you can <a href="/contact-us">request your free inspection online</a>. If the mold came from active water damage, we will roll a crew immediately.',
      },
      {
        q: "Will you rebuild the drywall and paint after the mold is removed?",
        a: 'Yes, with our own crew. That is the main thing that separates us from most remediation companies in Fort Mill — they tear out the contaminated material and leave, and you hire a drywall contractor, then a painter, then a flooring installer, coordinating all three yourself. We handle remediation and reconstruction with one crew and one project manager, so the wall goes back the way it was. See our <a href="/reconstruction">reconstruction and rebuild</a> work.',
      },
    ],
    related: {
      title: "Related Services in Fort Mill",
      sub: "Mold is a moisture problem. These are the services that solve the cause, not just the symptom.",
      cards: [
        {
          title: "Water Damage Restoration in Fort Mill",
          text: "Most Fort Mill mold starts with water. We extract, dry, and rebuild.",
          href: "/water-damage-restoration-fort-mill-sc",
        },
        {
          title: "Crawl Space Encapsulation",
          text: "The permanent fix for black mold under a Fort Mill home.",
          href: "/crawlspace",
        },
        {
          title: "Waterproofing",
          text: "Stop water at the foundation before it reaches the framing.",
          href: "/waterproofing",
        },
        {
          title: "Air Duct Cleaning",
          text: "Clear mold spores out of the HVAC system that spreads them.",
          href: "/duct-cleaning",
        },
      ],
    },
    nearby: [
      { label: "Fort Mill, SC", href: "/mold-removal-fort-mill-sc" },
      { label: "Rock Hill, SC", href: "/mold-removal-rock-hill-sc" },
      { label: "Tega Cay, SC", href: "/mold-removal-tega-cay-sc" },
      { label: "Indian Land, SC", href: "/mold-removal-indian-land-sc" },
      { label: "Pineville, NC", href: "/mold-removal-pineville-nc" },
      { label: "All Mold Removal", href: "/mold-removal" },
    ],
    reviewsTitle: "What Fort Mill Homeowners Say",
    reviewsSub: "Real reviews from homeowners and property managers right here in Fort Mill and across York County.",
    finalCta: "Black Mold or a Musty Smell in Fort Mill? Start With the Free Inspection.",
    contactHeading: "Request a Free Fort Mill Mold Inspection",
    contactDesc:
      "We are based here on Centre Circle. Tell us what you are seeing or smelling and our crew will call you back fast — no cost, no pressure.",
    areaTitle: "Your Local Mold Removal Team in Fort Mill",
    areaSub:
      "We are not a distant call center. We are locally owned and headquartered right here — 3650 Centre Circle, Suite I, Fort Mill, SC 29715.",
    areaInfoHeading: "Mold Inspections and Removal Across York County",
    areaInfoBlurb:
      "We cover all of Fort Mill and York County for mold inspection, testing, removal, and the moisture repair that keeps it from coming back.",
  },

  "indian-land-sc": {
    slug: "indian-land-sc",
    name: "Indian Land",
    state: "SC",
    title: "Mold Removal Indian Land SC | Free Inspection",
    h1: "Mold Removal in Indian Land, SC",
    metaDescription:
      "Mold removal in Indian Land, SC. Free inspection, IICRC-certified crews, and we rebuild what we remove — no second contractor. Call (980) 277-3700.",
    heroTag: "🛡️ Free Mold Inspection — Indian Land, SC",
    heroSub:
      "New house, new mold? It happens more than people expect. We inspect for free, find the moisture a tight modern build is trapping, remove the mold safely, and rebuild what we take out — one crew, one project manager, start to finish.",
    heroTrust: ["Free Mold Inspection", "IICRC Certified", "We Rebuild What We Remove", "BBB Accredited"],
    stats: [
      { number: "47 in", label: "Rain Per Year" },
      { number: "24-48 hrs", label: "For Mold to Take Hold" },
      { number: "$0", label: "Cost of Your Inspection" },
    ],
    body: [
      { tag: "h2", html: "24/7 Mold Removal in Indian Land, SC" },
      {
        tag: "p",
        html: 'If you are searching for mold removal in Indian Land, SC, there is a good chance your house is younger than the problem in it. We are <a href="/about-carolina-pro-restoration">Carolina Pro Restoration</a>, based minutes away in Fort Mill, and our IICRC-certified crews work the Panhandle every week. The inspection is free, the scope is written, and — the part most companies leave out — we rebuild the drywall, paint, and flooring ourselves once the mold is gone. Call <a href="tel:9802773700">980-277-3700</a> any hour.',
      },
      {
        tag: "p",
        html: 'Indian Land has grown faster than almost anywhere in Lancaster County, and thousands of homes went up on compressed schedules with tight, well-sealed building envelopes. A tight house is efficient. It is also unforgiving: when moisture gets in, it has nowhere to go. Add 47 inches of rain a year onto clay soil and you get mold in six-year-old homes that look immaculate. We handle the full job — containment, HEPA air scrubbing, safe removal, antimicrobial treatment, and the moisture repair that ends it. See the full <a href="/mold-removal">mold removal</a> process, or read about the root cause in <a href="/water-damage-restoration-indian-land-sc">water damage restoration in Indian Land</a>.',
      },
      { tag: "h2", html: "Why Indian Land Homes Get Mold" },
      { tag: "h3", html: "New Construction Does Not Mean No Mold" },
      {
        tag: "p",
        html: "This is the call we take most often in Indian Land, and homeowners are genuinely surprised by it. Homes built fast during the Lancaster County growth boom in Bridgemill, Cheswick, Lancaster Crossings, and along the Panhandle corridor carry construction-phase moisture that never fully dried — framing lumber rained on before the roof went on, drywall hung over a damp slab, a shower pan that was not quite right. None of that shows for a few years. Then a closet on an exterior wall starts to smell, and the growth behind it has been there since the house was built.",
      },
      { tag: "h3", html: "Tight Envelopes With Nowhere for Moisture to Go" },
      {
        tag: "p",
        html: "Modern Indian Land builds are sealed tight for energy efficiency, which is a real benefit right up until moisture gets into the assembly. An older, leakier house dries itself out through constant air exchange. A tight one does not — the moisture stays in the wall cavity, and mold takes hold within 24 to 48 hours. Bathroom fans that vent into the attic instead of outside, undersized ventilation, and closed interior doors that block return airflow all make it worse. We look at ventilation as part of the inspection, because in these homes it is often the whole cause.",
      },
      { tag: "h3", html: "HVAC Condensation in New Builds" },
      {
        tag: "p",
        html: 'A significant share of Indian Land mold starts at the air handler and the ductwork. Oversized systems short-cycle: they hit the thermostat setpoint quickly, shut down before they have pulled humidity out of the air, and leave a cold clammy house at 65% relative humidity. Meanwhile, poorly insulated duct runs in a hot attic sweat, and that condensation drips into the ceiling assembly. We find growth around supply registers, on the return plenum, and in the ceiling below attic ductwork. When the system has been circulating spores, <a href="/duct-cleaning">duct cleaning</a> is part of the fix.',
      },
      { tag: "h3", html: "Sun City Slab Leaks and Water Heater Failures" },
      {
        tag: "p",
        html: "Sun City Carolina Lakes and the surrounding slab-built neighborhoods have a different profile. A slab leak under a post-tension or conventional slab wicks up into the flooring and the bottom plate of the wall, and it will run for months before anyone notices anything more than a slightly warm patch of floor or a water bill that crept up. Water heaters in these homes are also reaching their 10-to-12-year replacement age, and a slow tank weep into a closet or garage wall does the same quiet damage. Both produce mold in the wall cavity before they produce a visible symptom.",
      },
    ],
    process: {
      title: PROCESS_TITLE,
      sub: "The same five steps on every Indian Land job — and unlike most remediation companies, step five includes putting your house back together.",
      ctaLabel: "One crew from the first inspection to the final coat of paint. Call anytime — the inspection is free.",
      steps: [
        {
          title: "Inspect and Test the Mold",
          text: "In newer Indian Land homes the mold is rarely where the smell is. We check closets on exterior walls, around supply registers and the air handler, bathroom walls, ceilings under attic ductwork, and any slab area with a history of a warm spot. When health concerns or a claim call for it, we arrange lab air or surface sampling. The inspection is free and produces a written scope.",
        },
        {
          title: "Find the Moisture Source",
          text: "Mold needs water. Moisture meters and FLIR thermal imaging trace it to the actual cause — a slab leak, a sweating duct run, a bath fan venting into the attic, or an oversized HVAC system leaving the house at 65% humidity. In a tight modern build this step matters more than anywhere, because the assembly cannot dry itself once moisture is in it.",
        },
        {
          title: "Seal Off the Area",
          text: "We build containment with plastic sheeting and run negative air machines so spores stay in the work area. HEPA air scrubbers run the whole time we are on site. In an airtight house with a central return, uncontained removal will distribute spores through every room in the building within hours.",
        },
        {
          title: "Remove Mold and Treat Surfaces",
          text: "Drywall, insulation, and subfloor too contaminated to save comes out and gets bagged inside containment. Everything that stays gets HEPA vacuumed and the framing gets an antimicrobial treatment. Bleach cannot reach mold inside porous material like drywall and wood — it lifts the color and leaves the colony behind.",
        },
        {
          title: "Repair the Source and Verify",
          text: "We fix the cause — the slab leak, the duct insulation, the bath fan that needs to actually reach outside — then rebuild the drywall, trim, paint, and flooring with our own crew. You do not hire a second contractor to close the wall. A final moisture and visual check confirms it is dry and clean before we close the job.",
        },
      ],
    },
    cost: {
      title: "What Mold Removal Costs in Indian Land",
      sub: "Typical Carolinas ranges to help you plan — not a quote. Your exact price comes in writing after the free inspection, before any work starts.",
      note: "These are typical ranges, not a quote, and they include the rebuild scope rather than leaving it to a second contractor. In Indian Land the biggest variable is usually whether the HVAC system is involved, since that turns a one-room job into a whole-house air-quality job. Insurance generally covers mold following a sudden covered event such as a slab leak or a water heater failure, and generally excludes mold from humidity or construction defects. Financing is available.",
      rows: [
        { name: "Single small area (under 100 sq ft) — closet, one bathroom wall", range: "$600–$1,500" },
        { name: "Bathroom or laundry room, mold behind tile or drywall", range: "$1,200–$3,500" },
        { name: "Crawl space remediation and treatment", range: "$2,500–$8,000" },
        { name: "Multi-room or HVAC-involved remediation", range: "$6,000–$15,000" },
        { name: "Large-scale job with structural or slab repair", range: "$10,000–$30,000" },
        { name: "Mold inspection with moisture mapping", range: "Free" },
        { name: "Lab air-quality or surface sampling (when needed)", range: "$300–$600" },
      ],
    },
    costDetail: [
      { tag: "h3", html: "What actually moves the price in Indian Land" },
      {
        tag: "p",
        html: "<strong>Affected square footage</strong> sets the baseline — pricing follows how much material comes out and goes back, not the size of the visible stain. <strong>Containment complexity</strong> is second, and in a tight modern home with a central return it is often higher than the visible damage suggests, because the air path has to be isolated properly. <strong>Whether the moisture source needs its own repair</strong> is third: remediating a wall cavity is one number, and correcting the slab leak, the duct insulation, or the ventilation that caused it is another. We price them separately so you can see exactly what you are buying.",
      },
      { tag: "h3", html: "Why one contractor costs less than three" },
      {
        tag: "p",
        html: 'Most remediation companies in Indian Land stop at the tear-out. You are then left holding an open wall and hiring a drywall contractor, a painter, and a flooring installer, each with their own schedule, markup, and warranty — and each blaming the other when something does not line up. We do the remediation and the <a href="/reconstruction">rebuild</a> with one crew and one project manager. That is usually cheaper in total and always simpler, and it is written into the scope you get after the free inspection.',
      },
    ],
    inspection: {
      title: "Free Mold Inspection in Indian Land",
      desc: "In a newer Indian Land home, the mold is almost never where the smell is. The free inspection finds where it actually is and what is feeding it, before you spend anything on fixing the wrong wall.",
      points: [
        "We check where mold hides in newer builds — closets on exterior walls, around registers and the air handler, ceilings under attic ductwork, and slab areas with a history of warm spots",
        "Moisture meters and thermal imaging find damp behind walls and under floors, with no demolition",
        "We check ventilation and humidity, because in a tight house that is often the entire cause",
        "You get a written scope and a firm price before any work begins — remediation and rebuild together",
        "Lab air-quality testing available when health concerns or a claim call for it",
        "Financing available, so a healthy home fits your budget",
      ],
    },
    neighborhoods: {
      title: "Boots on the Ground Across Indian Land",
      intro: "Our IICRC-certified mold crews work across Indian Land and the Lancaster County panhandle, including:",
      items: [
        "Sun City Carolina Lakes",
        "Bridgemill",
        "Cheswick",
        "Lancaster Crossings",
        "Panhandle corridor",
        "Doby's Bridge",
        "Pleasant Road",
      ],
    },
    faqTitle: "Indian Land Mold Removal FAQs",
    faqSub: "Straight answers for Indian Land and Lancaster County homeowners.",
    faq: [
      {
        q: "My Indian Land home is only six years old. How can it already have mold?",
        a: "Easily, and it is the most common call we get here. Homes built fast during the Lancaster County growth boom often carry construction-phase moisture — framing that got rained on before the roof went on, drywall hung over a damp slab, a shower pan installed slightly wrong. Modern builds are also sealed tight, so once moisture is in an assembly it cannot dry itself out the way an older, leakier house would. Age is not protection. Ventilation and moisture control are.",
      },
      {
        q: "Why is there mold around my vents and ductwork?",
        a: "Two causes, and often both. An oversized HVAC system short-cycles — it reaches the thermostat setpoint fast, shuts off before it has removed humidity from the air, and leaves the house cold and clammy at around 65% relative humidity, which is above the roughly 60% threshold where mold grows on its own. Separately, poorly insulated duct runs in a hot attic sweat, and that condensation drips into the ceiling assembly below. If the system has been circulating spores, duct cleaning is part of the fix rather than the whole of it.",
      },
      {
        q: "Do you rebuild after mold removal, or do I need a second contractor?",
        a: 'We rebuild. That is the main difference between us and most remediation companies working Indian Land — they remove the contaminated material and leave, and you are left hiring a drywall contractor, then a painter, then a flooring installer, and coordinating three schedules yourself. We do remediation and <a href="/reconstruction">reconstruction</a> with one crew and one project manager, so the wall goes back the way it was and one company stands behind all of it.',
      },
      {
        q: "How much does mold removal cost in Indian Land, SC?",
        a: "Most Indian Land jobs land between $600 and $8,000. A single small area such as a closet or one bathroom wall runs $600 to $1,500. A bathroom or laundry room with mold behind tile or drywall runs $1,200 to $3,500. Crawl space remediation runs $2,500 to $8,000. Multi-room or HVAC-involved work runs $6,000 to $15,000, and large jobs with structural or slab repair can reach $30,000. The inspection is free; lab sampling, when needed, is $300 to $600.",
      },
      {
        q: "Is mold covered under my builder's warranty?",
        a: "Sometimes, and it is worth checking before you pay for anything. Most builder warranties cover workmanship for a limited period and structural defects for longer, so if the mold traces back to a defect — a shower pan that leaks, a bath fan vented into the attic instead of outside, flashing that was never installed — you may have a claim. Warranties almost never cover mold attributed to homeowner humidity or maintenance. Our inspection documents the actual moisture source with photos and readings, which is the evidence that decides which category yours falls into.",
      },
      {
        q: "How do I tell the difference between mold and mildew?",
        a: 'Mildew is a surface fungus — flat, usually white or grey, and it wipes off hard surfaces like tile grout and shower doors without leaving damage behind. Mold grows into the material rather than sitting on it, is usually fuzzy or slimy, and comes in black, green, or brown. The practical test: if it wipes away and does not return, it was mildew and a ventilation problem. If it returns, spreads, or the surface underneath is soft or stained, it is mold with a moisture source, and cleaning it does nothing. <a href="/contact-us">Request a free inspection</a> and we will tell you which you have.',
      },
    ],
    related: {
      title: "Related Services in Indian Land",
      sub: "Mold is a moisture problem. These are the services that solve the cause, not just the symptom.",
      cards: [
        {
          title: "Water Damage Restoration in Indian Land",
          text: "Slab leaks and appliance failures. We extract, dry, and rebuild.",
          href: "/water-damage-restoration-indian-land-sc",
        },
        {
          title: "Air Duct Cleaning",
          text: "When the HVAC system has been spreading spores through the house.",
          href: "/duct-cleaning",
        },
        {
          title: "Crawl Space Encapsulation",
          text: "Seal a damp crawl space so clay soil stops feeding mold.",
          href: "/crawlspace",
        },
        {
          title: "Waterproofing",
          text: "Stop water at the foundation before it reaches the framing.",
          href: "/waterproofing",
        },
      ],
    },
    nearby: [
      { label: "Indian Land, SC", href: "/mold-removal-indian-land-sc" },
      { label: "Fort Mill, SC", href: "/mold-removal-fort-mill-sc" },
      { label: "Rock Hill, SC", href: "/mold-removal-rock-hill-sc" },
      { label: "Tega Cay, SC", href: "/mold-removal-tega-cay-sc" },
      { label: "Pineville, NC", href: "/mold-removal-pineville-nc" },
      { label: "All Mold Removal", href: "/mold-removal" },
    ],
    reviewsTitle: "What Indian Land Homeowners Say",
    reviewsSub: "Real reviews from homeowners and property managers across Indian Land, Fort Mill, and York County.",
    finalCta: "Mold in a Newer Indian Land Home? Start With the Free Inspection.",
    contactHeading: "Request a Free Indian Land Mold Inspection",
    contactDesc:
      "Tell us what you are seeing or smelling and our crew will call you back fast. No cost, no pressure — and if there is work to do, we rebuild what we remove.",
    areaTitle: "Your Local Mold Removal Team in Indian Land",
    areaSub:
      "We are not a distant call center. We are locally owned and based in Fort Mill — 3650 Centre Circle, Suite I, just minutes from Indian Land.",
    areaInfoHeading: "Mold Inspections and Removal Across the Panhandle",
    areaInfoBlurb:
      "We cover all of Indian Land and the Lancaster County panhandle for mold inspection, testing, removal, and the rebuild afterward.",
  },

  "tega-cay-sc": {
    slug: "tega-cay-sc",
    name: "Tega Cay",
    state: "SC",
    title: "Mold Removal Tega Cay SC | Free Inspection | 24/7",
    h1: "Mold Removal in Tega Cay, SC",
    metaDescription:
      "Mold removal in Tega Cay, SC — lake humidity, damp crawl spaces, and hidden growth. Free inspection from our local crew. Call (980) 277-3700.",
    heroTag: "🛡️ Free Mold Inspection — Tega Cay, SC",
    heroSub:
      "Lake air is beautiful and it is relentless. Musty crawl space, a closet that smells on the shoreline side, growth that came back after the last repair? We inspect for free, remove the mold safely, and control the moisture that keeps bringing it back.",
    heroTrust: ["Free Mold Inspection", "IICRC Certified", "10 Min From the Peninsula", "BBB Accredited"],
    stats: [
      { number: "47 in", label: "Rain Per Year" },
      { number: "60%", label: "Humidity Where Mold Starts" },
      { number: "$0", label: "Cost of Your Inspection" },
    ],
    body: [
      { tag: "h2", html: "24/7 Mold Removal in Tega Cay, SC" },
      {
        tag: "p",
        html: 'Mold removal in Tega Cay, SC is usually a humidity problem before it is a leak problem — and that changes how it has to be fixed. We are <a href="/about-carolina-pro-restoration">Carolina Pro Restoration</a>, about ten minutes from the peninsula, and our IICRC-certified crews work Tega Cay constantly. The inspection is free, the scope is written, and the price is firm before anyone opens a wall. Call <a href="tel:9802773700">980-277-3700</a> any hour.',
      },
      {
        tag: "p",
        html: 'Tega Cay is wrapped by Lake Wylie on three sides. That means air that stays humid most of the year, a water table close to the surface, and crawl spaces that never really dry out between rains. Mold does not need a burst pipe here — it just needs the humidity to stay where it already is. We handle the full job: containment, HEPA air scrubbing, safe removal, antimicrobial treatment, and the humidity and moisture control that actually ends it, then our own crew rebuilds what came out. See the full <a href="/mold-removal">mold removal</a> process, or read about the leak-driven side in <a href="/water-damage-restoration-tega-cay-sc">water damage restoration in Tega Cay</a>.',
      },
      { tag: "h2", html: "Why Tega Cay Homes Get Mold" },
      { tag: "h3", html: "Lake Wylie Humidity Never Really Drops" },
      {
        tag: "p",
        html: "Once indoor relative humidity holds above roughly 60%, mold will grow with no leak involved at all — and on the Lake Shore, Heron Cove, and peninsula shoreline, outdoor humidity works against you most of the year. It shows up in predictable places: closets on the lake-facing exterior wall, behind furniture pushed flat against that wall, in bonus rooms over garages that the HVAC barely reaches, and in seasonal rooms that get closed up for months. Homeowners here often clean the same spot repeatedly, which is the clearest sign the cause is ambient humidity rather than anything that can be patched.",
      },
      { tag: "h3", html: "Crawl Spaces Over a High Water Table" },
      {
        tag: "p",
        html: 'Being close to the lake means being close to the water table, and a Tega Cay crawl space over damp ground behaves differently from one further inland. Ground moisture evaporates upward continuously, condenses on cool floor joists and subfloor, and feeds growth on the wood above it — no rainfall required. Crawl space air also rises into the living space, so that musty hallway smell is usually coming from under the house rather than from anything in the room. <a href="/crawlspace">Crawl space encapsulation</a> with a sealed vapor barrier and a right-sized dehumidifier is the only permanent answer in these conditions.',
      },
      { tag: "h3", html: "Boat Houses, Docks, and Lake-Side Storage" },
      {
        tag: "p",
        html: "Waterfront property comes with structures nobody inspects. Boat houses, dock storage, lake-side sheds, and the garages where life jackets, covers, and wet gear get stored are humid year-round and ventilated poorly or not at all. Mold takes hold on the framing, on stored fabric and foam, and on anything cellulose. It matters beyond the outbuilding itself: gear moved between a moldy dock box and an attached garage carries spores into the house. We treat these structures as part of the same job rather than as an afterthought.",
      },
      { tag: "h3", html: "The Peninsula's Older Homes and Their Additions" },
      {
        tag: "p",
        html: "The original Tega Cay peninsula holds the town's oldest housing stock, much of it on crawl space foundations with plumbing well past its expected lifespan and additions built across several decades. Those additions are where we find the most mold: a room added onto a crawl space that was never properly vented, a bathroom put in without an exhaust fan, a roofline junction that has been slowly leaking behind the trim for years. Windhaven, Stonecrest, and the newer sections have the opposite profile — tight construction with builder-grade plumbing now old enough to fail.",
      },
    ],
    process: {
      title: PROCESS_TITLE,
      sub: "The same five steps on every Tega Cay job — with one difference: on the lake, step five is usually about humidity control rather than a single repair.",
      ctaLabel: "The free inspection is what tells us whether you have a leak or a humidity problem. Call anytime.",
      steps: [
        {
          title: "Inspect and Test the Mold",
          text: "We check where Tega Cay mold actually lives: the crawl space first, then closets on lake-facing exterior walls, bonus rooms over garages, seasonal rooms, and any boat house or lake-side storage on the property. We map how far it has spread, and arrange lab air or surface sampling when health concerns or an insurance claim call for it. The inspection is free.",
        },
        {
          title: "Find the Moisture Source",
          text: "Mold needs water, but on the lake the water is often just the air. We take humidity readings alongside moisture meter and FLIR thermal imaging work, because the answer here is frequently ambient humidity or ground moisture rather than a leak. Getting that distinction right is what separates a fix that lasts from a job you repeat next year.",
        },
        {
          title: "Seal Off the Area",
          text: "We build containment with plastic sheeting and run negative air machines so spores stay in the work area instead of moving through the house. HEPA air scrubbers run the whole time we are on site, and every one of those steps happens before the first piece of contaminated drywall is cut.",
        },
        {
          title: "Remove Mold and Treat Surfaces",
          text: "Drywall, insulation, and subfloor too contaminated to save comes out and gets bagged inside containment. Everything staying gets HEPA vacuumed, and framing gets an antimicrobial treatment. Bleach cannot reach mold living inside porous material like drywall and wood — it removes the color and leaves the colony to regrow.",
        },
        {
          title: "Repair the Source and Verify",
          text: "On the lake this usually means humidity control rather than a single patch: sealing the crawl space, adding a right-sized dehumidifier, correcting ventilation, and fixing any actual leak we found. Then we rebuild the drywall, trim, paint, and flooring with our own crew, and confirm with a final moisture and visual check before closing the job.",
        },
      ],
    },
    cost: {
      title: "What Mold Removal Costs in Tega Cay",
      sub: "Typical Carolinas ranges to help you plan — not a quote. Your exact price comes in writing after the free inspection, before any work starts.",
      note: "These are typical ranges, not a quote. In Tega Cay the number is driven most by crawl space size and by whether humidity control — encapsulation and a dehumidifier — is needed to stop it recurring. Insurance generally covers mold following a sudden covered event such as a burst supply line, and generally excludes mold caused by ambient humidity, which is the most common cause on the lake. Financing is available.",
      rows: [
        { name: "Single small area (under 100 sq ft) — closet, one bathroom wall", range: "$600–$1,500" },
        { name: "Bathroom or laundry room, mold behind tile or drywall", range: "$1,200–$3,500" },
        { name: "Crawl space remediation and treatment", range: "$2,500–$8,000" },
        { name: "Multi-room or whole-basement remediation", range: "$6,000–$15,000" },
        { name: "Large-scale, HVAC-involved, or structural repair needed", range: "$10,000–$30,000" },
        { name: "Mold inspection with moisture and humidity mapping", range: "Free" },
        { name: "Lab air-quality or surface sampling (when needed)", range: "$300–$600" },
      ],
    },
    costDetail: [
      { tag: "h3", html: "What actually moves the price in Tega Cay" },
      {
        tag: "p",
        html: "<strong>Affected square footage</strong> sets the baseline, since pricing follows how much material comes out and goes back rather than the size of the visible stain. <strong>Containment</strong> is second — one sealed room is straightforward, several rooms or occupied space takes more equipment and more days. <strong>Whether the moisture source needs its own repair</strong> is third, and on the lake this is nearly always yes. Remediating a Tega Cay crawl space is one number; remediating it and then encapsulating with a dehumidifier so lake humidity stops feeding it is another. We price them separately, because the second one is what decides whether you are doing this again in eighteen months.",
      },
      { tag: "h3", html: "Why the same spot keeps coming back" },
      {
        tag: "p",
        html: "If you have cleaned the same closet or the same corner more than twice, the cause is not the mold — it is the humidity. Nothing you apply to the surface changes the conditions that grew it, so it returns on the same schedule. On the lake the durable fix is almost always environmental: sealing the crawl space, getting a right-sized dehumidifier in, correcting ventilation, and getting indoor relative humidity to hold below 60%. That is the number to aim at, and it is what the free inspection measures.",
      },
    ],
    inspection: {
      title: "Free Mold Inspection in Tega Cay",
      desc: "On the lake, the first question is not how much mold you have — it is whether you have a leak or a humidity problem, because the two have completely different fixes. The inspection costs nothing and it answers that.",
      points: [
        "We check where Tega Cay mold lives — crawl spaces, closets on lake-facing walls, bonus rooms over garages, seasonal rooms, and lake-side storage",
        "Humidity readings alongside moisture meters and thermal imaging, so we can tell ambient moisture from an actual leak",
        "We check the crawl space ground conditions and the water table's effect on your framing",
        "You get a written scope and a firm price before any work begins",
        "Lab air-quality testing available when health concerns or a claim call for it",
        "Financing available, so a healthy home fits your budget",
      ],
    },
    neighborhoods: {
      title: "Boots on the Ground Across Tega Cay",
      intro: "Our IICRC-certified mold crews work across all of Tega Cay and the Lake Wylie shoreline, including:",
      items: [
        "The Peninsula (Original Tega Cay)",
        "Lake Shore",
        "Heron Cove",
        "Windhaven",
        "Stonecrest",
        "Gold Hill Road corridor",
      ],
    },
    faqTitle: "Tega Cay Mold Removal FAQs",
    faqSub: "Straight answers for Tega Cay and Lake Wylie homeowners.",
    faq: [
      {
        q: "Does living on Lake Wylie make mold more likely?",
        a: "Yes, measurably. Tega Cay is wrapped by the lake on three sides, so outdoor humidity stays elevated most of the year and the water table sits close to the surface. Mold grows without any leak once indoor relative humidity holds above roughly 60%, and lake-adjacent homes cross that line routinely in summer. It is not a reason to worry about your house — it is a reason to treat humidity control as ongoing maintenance here rather than as a one-time repair.",
      },
      {
        q: "Why does my Tega Cay crawl space stay damp when there is no leak?",
        a: 'Ground moisture. A crawl space over a high water table has damp soil beneath it evaporating upward all the time, and that vapor condenses on the cool floor joists and subfloor above. No rain and no plumbing failure required. Because crawl space air rises into the living space, this is also the usual source of a musty smell in a hallway with nothing visibly wrong in it. <a href="/crawlspace">Encapsulation</a> — a sealed vapor barrier plus a right-sized dehumidifier — is what stops it.',
      },
      {
        q: "What humidity level stops mold from growing?",
        a: "Keep indoor relative humidity below 60%, and ideally between 30% and 50%. Above roughly 60% sustained, mold can colonize normal household surfaces with no liquid water present at all. A cheap hygrometer in the room that smells will tell you within a day whether you have a humidity problem or a leak — and on the lake it is usually humidity. That single reading changes what the correct fix is, which is why we take it during every inspection.",
      },
      {
        q: "How much does mold removal cost in Tega Cay, SC?",
        a: "Most Tega Cay jobs land between $600 and $8,000. A single small area such as a closet or one bathroom wall runs $600 to $1,500. A bathroom or laundry room with mold behind tile or drywall runs $1,200 to $3,500. Crawl space remediation runs $2,500 to $8,000. Multi-room work runs $6,000 to $15,000, and large jobs involving the HVAC system or structural repair can reach $30,000. The inspection is free; lab sampling, when needed, is $300 to $600. Budget separately for humidity control if the crawl space is the source.",
      },
      {
        q: "I already had water damage repaired. Why is there mold now?",
        a: 'Usually because the structure was dried to "looks dry" rather than to a verified moisture standard, or because the humidity that follows the repair was never addressed. On the lake, a wall cavity that was closed up at slightly elevated moisture will grow mold within days, and nobody sees it until the smell arrives weeks later. This is common enough here that we check it specifically. If your repair was recent, get the free inspection before you assume it is a new problem.',
      },
      {
        q: "Do you handle mold in boat houses and lake-side storage?",
        a: 'Yes. Boat houses, dock storage, lake-side sheds, and the garages where wet gear lives are humid year-round with little or no ventilation, and they grow mold on framing, stored fabric, and foam. It matters beyond the outbuilding, because gear carried between a moldy dock box and an attached garage brings spores into the house with it. We treat these as part of the same job. <a href="/contact-us">Request a free inspection</a> and we will look at the whole property.',
      },
    ],
    related: {
      title: "Related Services in Tega Cay",
      sub: "Mold is a moisture problem. These are the services that solve the cause, not just the symptom.",
      cards: [
        {
          title: "Water Damage Restoration in Tega Cay",
          text: "When the cause is a leak rather than lake humidity. We extract, dry, and rebuild.",
          href: "/water-damage-restoration-tega-cay-sc",
        },
        {
          title: "Crawl Space Encapsulation",
          text: "The permanent fix for a crawl space over a high water table.",
          href: "/crawlspace",
        },
        {
          title: "Waterproofing",
          text: "Stop shoreline groundwater at the foundation before it reaches framing.",
          href: "/waterproofing",
        },
        {
          title: "Air Duct Cleaning",
          text: "Clear mold spores out of the HVAC system that spreads them.",
          href: "/duct-cleaning",
        },
      ],
    },
    nearby: [
      { label: "Tega Cay, SC", href: "/mold-removal-tega-cay-sc" },
      { label: "Fort Mill, SC", href: "/mold-removal-fort-mill-sc" },
      { label: "Rock Hill, SC", href: "/mold-removal-rock-hill-sc" },
      { label: "Indian Land, SC", href: "/mold-removal-indian-land-sc" },
      { label: "Pineville, NC", href: "/mold-removal-pineville-nc" },
      { label: "All Mold Removal", href: "/mold-removal" },
    ],
    reviewsTitle: "What Tega Cay Homeowners Say",
    reviewsSub: "Real reviews from homeowners and property managers across Tega Cay, Fort Mill, and the Lake Wylie shoreline.",
    finalCta: "Musty Smell on the Lake? Start With the Free Inspection.",
    contactHeading: "Request a Free Tega Cay Mold Inspection",
    contactDesc:
      "Tell us what you are seeing or smelling and our crew will call you back fast. No cost, no pressure — and we will tell you whether it is a leak or the lake.",
    areaTitle: "Your Local Mold Removal Team in Tega Cay",
    areaSub:
      "We are not a distant call center. We are locally owned and based in Fort Mill — 3650 Centre Circle, Suite I, about 10 minutes from the Tega Cay peninsula.",
    areaInfoHeading: "Mold Inspections and Removal Across the Lake Wylie Shoreline",
    areaInfoBlurb:
      "We cover all of Tega Cay and the Lake Wylie shoreline for mold inspection, testing, removal, and the humidity control that keeps it from coming back.",
  },
};

export const moldLocationList = Object.values(moldLocations);

// ---------------------------------------------------------------------------
// Publish waves (handoff §9: never bulk-drop a cluster — 27 blog posts dropped
// on 2026-02-04 is the cautionary tale). Content for all five towns lives in
// this file from day one; only the slugs listed here are BUILT, so the rest
// are absent from the site and the sitemap until their wave lands.
//
// To publish a town: add its slug here and push. That is the whole change —
// routes, sitemap, the hub's "Mold Removal by Town" block, the /service-areas
// grid, and the sibling links on each town page all follow automatically, and
// prose links to a not-yet-live town fall back to the /mold-removal hub rather
// than 404ing. The mechanism stays in place for any future town.
//
//   Wave 1 — 2026-08-20: Rock Hill, Pineville   (the two shutout markets)
//   Wave 2 — 2026-08-20: Fort Mill, Indian Land, Tega Cay
//
// All five went live the same day by owner decision, collapsing the planned
// three-wave rollout. Consequence to remember when reading the ~20 Oct re-audit:
// Tega Cay was NOT isolated, so if /water-damage-restoration-tega-cay-sc moves
// off organic #1 for `mold removal tega cay sc`, that movement cannot be
// cleanly attributed to the new mold page versus cluster-wide effects. The
// pre-launch baseline is still logged, so displacement remains measurable —
// just not isolable. See SEO-BASELINE-MOLD-TOWN-PAGES-2026-08-20.md.
// ---------------------------------------------------------------------------
export const publishedMoldTowns: string[] = [
  "rock-hill-sc",
  "pineville-nc",
  "fort-mill-sc",
  "indian-land-sc",
  "tega-cay-sc",
];

export const isMoldTownPublished = (slug: string) => publishedMoldTowns.includes(slug);

export const publishedMoldLocationList = moldLocationList.filter((l) => isMoldTownPublished(l.slug));

/** Repoint prose links aimed at a not-yet-published mold town page to the
 *  /mold-removal hub, so staged waves can never emit a link to a 404. Applied
 *  centrally in LocalContent and Faq — the only two components that render raw
 *  body/answer HTML — so city pages, mold pages, and blog posts are all covered. */
export function gateMoldTownLinks(html: string): string {
  return html.replace(
    /href="\/mold-removal-([a-z0-9-]+)"/g,
    (match, slug: string) => (isMoldTownPublished(slug) ? match : 'href="/mold-removal"'),
  );
}

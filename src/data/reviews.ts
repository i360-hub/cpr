// Shared customer testimonials — the same set renders sitewide (Tier 1 + Tier 2).
// Ported from the live review grid. `tag` is the CPR service label shown on each
// card; all are 5-star Google reviews.

export interface Review {
  tag: string;
  name: string;
  text: string;
  source: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    tag: "Emergency Extraction",
    name: "Mardaly Jimenez",
    text: "This team was very professional and did a thorough job with water removal from our house. Got the job done and done well. They are the very best!",
    source: "Google Review",
    stars: 5,
  },
  {
    tag: "Full Reconstruction",
    name: "Sam Bender",
    text: "Zach came over to my house to repair all damage better than new. He was prompt, clean, and professional. I highly recommend them!",
    source: "Google Review",
    stars: 5,
  },
  {
    tag: "Claims Handled",
    name: "Riverbend HOA",
    text: "The crew was professional and on top of everything. I was really happy that they worked with my insurance company, and everything was handled with ease.",
    source: "Google Review",
    stars: 5,
  },
];

export const reviewsSummary = {
  count: "40+",
  stars: 5,
  readMoreHref: "/reviews-testimonials",
};

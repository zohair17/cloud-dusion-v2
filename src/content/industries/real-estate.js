/**
 * Industry: Real Estate
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "real-estate",
  title: "Real Estate",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/real-estate.webp",
  summary: "Purpose-built lease, deal, and portfolio solutions: CFG's deepest industry practice, where AI meets property operations.",
  order: 7,
  inFooter: true,
  status: "outline",
  intro: [],
  challenges: [],
  aiImpact: [],
  microsoftEnablement: [],
  solutions: [],
  relatedServices: [],
  relatedCaseStudies: [],
  ctas: [
    "talk-to-expert"
  ],
  seo: {
    title: "Real Estate Industry Solutions",
    description: "Purpose-built lease, deal, and portfolio solutions: CFG's deepest industry practice, where AI meets property operations."
  }
};

export default industry;

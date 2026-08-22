/**
 * Industry — Education
 *
 * Long-form section content is authored here. `status` stays "outline" until every
 * required section is filled, which is what `npm run content:check` reports on.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndustryRecord} */
export const industry = {
  slug: "education",
  title: "Education",
  tagline: null,
  /** Panel photograph for the homepage industries row (StockSnap, CC0). */
  image: "/asset/industries/education.webp",
  summary: "Collaboration, automation, and responsible AI for schools, colleges, and universities — on the Microsoft platforms education already runs on.",
  order: 6,
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
    title: "Education Industry Solutions",
    description: "Collaboration, automation, and responsible AI for schools, colleges, and universities — on the Microsoft platforms education already runs on."
  }
};

export default industry;

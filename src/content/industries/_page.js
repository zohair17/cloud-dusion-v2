/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/industries/domain/industry.schema").IndexPageRecord} */
export const industriesPage = {
  title: "Industries",
  tagline: "Who we serve",
  intro: "Every industry carries its own challenges, regulations, and systems. We meet each with the same method: understand the pressure, apply AI where it counts, build on Microsoft, and measure the outcome.",
  ctas: [
    "discuss-requirements"
  ],
  seo: {
    title: "Industries",
    description: "Every industry carries its own challenges, regulations, and systems. We meet each with the same method."
  }
};

export default industriesPage;

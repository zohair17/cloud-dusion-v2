/**
 * Homepage composition contract.
 *
 * The homepage is a *composition*, not a content island: sections reference
 * records held by other contexts by slug or id, and the read model resolves
 * them. Nothing in the catalogue is retyped here.
 *
 * @typedef {object} HomePageRecord
 * @property {"outline"|"published"} status
 * @property {{ headline: string, subheadline: string?, ctas: string[] }} hero
 * @property {object} transformationFramework
 * @property {object} servicePillars
 * @property {{ eyebrow: string?, heading: string?, solutionSlugs: string[] }} featuredSolutions
 * @property {{ eyebrow: string?, heading: string?, layerIds: string[] }} technologyStack
 * @property {{ eyebrow: string?, heading: string?, industrySlugs: string[] }} industryFocus
 * @property {{ partners: object, roster: object }} clients
 * @property {{ eyebrow: string?, heading: string, items: object[] }} testimonials
 * @property {object} differentiators
 * @property {{ heading: string, body: string, ctas: string[] }} closingCta
 * @property {{ title: string?, description: string? }} seo
 */

export const HOME_SECTION_ORDER = Object.freeze([
  "hero",
  "transformationFramework",
  "servicePillars",
  "featuredSolutions",
  "technologyStack",
  "industryFocus",
  "differentiators",
  "clients",
  "testimonials",
  "closingCta",
]);

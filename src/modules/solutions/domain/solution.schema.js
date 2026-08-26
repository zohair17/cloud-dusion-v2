/**
 * Solution content contract.
 *
 * @typedef {import("@/shared/domain/page").IndexPageRecord} IndexPageRecord
 *
 * @typedef {object} SolutionRecord
 * @property {string}   slug
 * @property {string}   title
 * @property {string?}  tagline
 * @property {string}   summary
 * @property {string?}  image      Panel photograph for the index rail and detail hero.
 * @property {string?}  icon       Glyph id used by the homepage solutions carousel.
 * @property {string}   categoryId   Solution category this belongs to.
 * @property {number}   order        Sort order inside the category.
 * @property {"outline"|"published"} status
 * @property {{ eyebrow: string?, heading: string, body: string }?} problem
 * @property {{ eyebrow: string?, heading: string, items: string[] }?} businessChallenges
 * @property {string[]} overview
 * @property {{ eyebrow: string?, heading: string, steps: Step[] }?} howItWorks
 * @property {string[]} capabilities
 * @property {{ eyebrow: string?, heading: string, body: string?, items: string[] }?} aiCapabilities
 * @property {{ eyebrow: string?, heading: string, body: string?, layers: Layer[] }?} architecture
 * @property {string[]} benefits
 * @property {string[]} useCases
 * @property {string[]} technologies        Technology ids.
 * @property {string[]} industries          Industry slugs.
 * @property {string[]} relatedServices     Service slugs.
 * @property {string[]} relatedSolutions    Solution slugs.
 * @property {string[]} relatedCaseStudies  Case study slugs.
 * @property {string[]} ctas
 * @property {{ title: string, description: string }} seo
 *
 * @typedef {{ step: string, title: string, description: string }} Step
 * @typedef {{ title: string, nodes: string[] }} Layer
 */

export const REQUIRED_FIELDS = Object.freeze(["slug", "title", "summary", "categoryId", "order", "seo"]);

export const PUBLISHABLE_FIELDS = Object.freeze([
  "tagline",
  "problem",
  "overview",
  "howItWorks",
  "capabilities",
  "benefits",
]);

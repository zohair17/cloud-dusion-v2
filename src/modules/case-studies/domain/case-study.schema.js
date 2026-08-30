/**
 * Case study content contract.
 *
 * @typedef {import("@/shared/domain/page").IndexPageRecord} IndexPageRecord
 *
 * @typedef {object} CaseStudyRecord
 * @property {string}   slug
 * @property {string}   title
 * @property {string}   sectorLabel    Badge text on the card, e.g. "Real Estate".
 * @property {string?}  industrySlug   Link into the industries context, when one applies.
 * @property {number}   order
 * @property {string}   client         Anonymised client descriptor.
 * @property {{ src: string, alt: string, width: number, height: number }?} logo Client mark taken from the source document.
 * @property {string}   summary
 * @property {"outline"|"published"} status
 * @property {string?}  challenge      Where it started. Section furniture lives in _detail.js.
 * @property {Array<{ step: string, description: string }>} approach
 * @property {string?}  solution       What was built.
 * @property {string[]} outcomes
 * @property {string?}  metricsNote    Placeholder used while metrics await client approval.
 * @property {string[]} technologies
 * @property {string[]} relatedServices
 * @property {string[]} relatedSolutions
 * @property {string[]} ctas
 * @property {{ title: string, description: string }} seo
 */

/* `sectorLabel` is not required: several of the source write-ups carry no
   Industry line, and a badge invented to fill the gap would be a claim the
   document never made. */
export const REQUIRED_FIELDS = Object.freeze(["slug", "title", "summary", "client", "order", "seo"]);

export const PUBLISHABLE_FIELDS = Object.freeze(["challenge", "approach", "solution", "outcomes"]);

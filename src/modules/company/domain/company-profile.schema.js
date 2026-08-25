/**
 * Company profile content contract (the /about aggregate).
 *
 * @typedef {object} CompanyProfileRecord
 * @property {string}   title
 * @property {string}   navLabel
 * @property {string}   tagline
 * @property {string}   taglineAccent
 * @property {string}   summary
 * @property {"outline"|"published"} status
 * @property {string[]} intro
 * @property {{ eyebrow: string?, heading: string, items: Array<{ title: string, description: string }> }} beliefs
 * @property {{ eyebrow: string?, heading: string, intro: string, phases: Phase[] }} engagementModel
 * @property {{ eyebrow: string?, heading: string, items: Array<{ title: string, description: string }> }} differentiators
 * @property {Array<string|{ intent: string, label?: string }>} ctas
 * @property {{ title: string, description: string }} seo
 *
 * @typedef {{ step: string, image: string, title: string, description: string }} Phase
 */

export const REQUIRED_FIELDS = Object.freeze(["title", "tagline", "summary", "seo"]);

/**
 * Shared shape for a catalogue index page (services, solutions, industries,
 * case studies, insights). Every listing route has the same head: a title, a
 * standfirst, an intro paragraph and a page-level call to action.
 *
 * @typedef {object} IndexPageRecord
 * @property {string} title
 * @property {string} tagline
 * @property {string?} taglineAccent
 *   The closing half of the standfirst, set in the brand colour where the page
 *   renders the tagline as its headline. Omit it to keep the line one colour.
 * @property {string} intro
 * @property {Array<string|{ intent: string, label?: string, variant?: string }>} ctas
 *   A CTA intent, or an intent with the label or emphasis overridden for this page.
 * @property {{ title: string, description: string }} seo
 */

export const INDEX_PAGE_REQUIRED_FIELDS = Object.freeze(["title", "tagline", "intro", "seo"]);

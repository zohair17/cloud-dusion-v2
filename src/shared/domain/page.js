/**
 * Shared shape for a catalogue index page (services, solutions, industries,
 * case studies, insights). Every listing route has the same head: a title, a
 * standfirst, an intro paragraph and a page-level call to action.
 *
 * @typedef {object} IndexPageRecord
 * @property {string} title
 * @property {string} tagline
 * @property {string} intro
 * @property {string[]} ctas
 * @property {{ title: string, description: string }} seo
 */

export const INDEX_PAGE_REQUIRED_FIELDS = Object.freeze(["title", "tagline", "intro", "seo"]);

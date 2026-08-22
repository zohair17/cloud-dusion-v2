/**
 * Contact page copy contract. The form itself belongs to the inquiries context.
 *
 * @typedef {object} ContactPageRecord
 * @property {string} title
 * @property {string} tagline
 * @property {"outline"|"published"} status
 * @property {string} intro
 * @property {Array<{ label: string, value: string, kind: string }>} facts
 * @property {string} privacyNote
 * @property {string} formSubmitLabel
 * @property {{ title: string, description: string }} seo
 */

export const REQUIRED_FIELDS = Object.freeze(["title", "tagline", "intro", "seo"]);

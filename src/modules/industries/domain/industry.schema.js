/**
 * Industry content contract.
 *
 * @typedef {import("@/shared/domain/page").IndexPageRecord} IndexPageRecord
 *
 * @typedef {object} IndustryRecord
 * @property {string}   slug
 * @property {string}   title
 * @property {string?}  tagline
 * @property {string}   summary
 * @property {string?}  image      Panel photograph used by the homepage industries row.
 * @property {number}   order
 * @property {boolean}  inFooter   Only a subset of industries appear in the footer column.
 * @property {"outline"|"published"} status
 * @property {string[]} intro
 * @property {string[]} challenges           What this industry is up against.
 * @property {string[]} aiImpact             How AI changes the picture.
 * @property {string[]} microsoftEnablement  How Microsoft technologies deliver it.
 * @property {string[]} outcomes             What changes for the business.
 * @property {string[]} solutions            Solution slugs offered to this industry.
 * @property {string[]} relatedServices      Service slugs.
 * @property {string[]} relatedCaseStudies   Case study slugs.
 * @property {string[]} ctas
 * @property {{ title: string, description: string }} seo
 */

export const REQUIRED_FIELDS = Object.freeze(["slug", "title", "summary", "order", "seo"]);

export const PUBLISHABLE_FIELDS = Object.freeze([
  "tagline",
  "intro",
  "challenges",
  "aiImpact",
  "microsoftEnablement",
  "outcomes",
]);

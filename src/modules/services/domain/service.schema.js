/**
 * Service content contract.
 *
 * This file is the boundary between authored content and the domain: it names
 * every field a service record may carry and which of them are mandatory before
 * the record may be published.
 *
 * @typedef {import("@/shared/domain/page").IndexPageRecord} IndexPageRecord
 *
 * @typedef {object} ServiceRecord
 * @property {string}   slug          Public identity. Appears in the URL.
 * @property {string}   title         Full title used on the detail page.
 * @property {string}   navLabel      Short label used in navigation and footer.
 * @property {string?}  tagline       One-line promise shown under the title.
 * @property {string}   summary       Card description used on index pages.
 * @property {string}   groupId       Service group this belongs to.
 * @property {number}   order         Sort order inside the group.
 * @property {"outline"|"published"} status
 * @property {HeroSlide[]} heroSlides  Pictures behind the hero, in order.
 * @property {string[]} intro         Lead paragraphs.
 * @property {SectionOfStrings} challenges
 * @property {SectionOfItems}   approach
 * @property {SectionOfItems}   capabilities
 * @property {{ eyebrow: string?, heading: string, body: string }} stack  Where the service meets the Microsoft platform.
 * @property {SectionOfStrings} outcomes
 * @property {string[]} technologies       Technology ids.
 * @property {string[]} relatedSolutions   Solution slugs.
 * @property {string[]} relatedIndustries  Industry slugs.
 * @property {string[]} relatedCaseStudies Case study slugs.
 * @property {string[]} ctas
 * @property {{ heading: string, body: string, ctas: string[] }} closing
 * @property {{ title: string, description: string }} seo
 *
 * @typedef {{ image: string, label: string }} HeroSlide
 * @typedef {{ eyebrow: string?, heading: string, items: string[] }} SectionOfStrings
 * @typedef {{ eyebrow: string?, heading: string, items: Array<{ title: string, description: string }> }} SectionOfItems
 */

/** Fields every record must supply for the catalogue to function at all. */
export const REQUIRED_FIELDS = Object.freeze([
  "slug",
  "title",
  "navLabel",
  "summary",
  "groupId",
  "order",
  "seo",
]);

/** Additional fields required before a record may be marked published. */
export const PUBLISHABLE_FIELDS = Object.freeze([
  "tagline",
  "intro",
  "challenges",
  "approach",
  "capabilities",
]);

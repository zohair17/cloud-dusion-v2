/**
 * Insight article content contract.
 *
 * @typedef {import("@/shared/domain/page").IndexPageRecord} IndexPageRecord
 *
 * @typedef {object} ArticleRecord
 * @property {string}  slug
 * @property {string}  title
 * @property {string}  excerpt
 * @property {string}  topicId          Must exist in the insight topics taxonomy.
 * @property {string}  image            Its own picture; no two articles share one.
 * @property {string}  publishedAt      ISO date (YYYY-MM-DD).
 * @property {number}  readingMinutes
 * @property {"announced"|"published"} status
 * @property {string?} body             Long-form content; null while announced.
 */

export const REQUIRED_FIELDS = Object.freeze([
  "slug",
  "title",
  "excerpt",
  "topicId",
  "image",
  "publishedAt",
  "readingMinutes",
]);

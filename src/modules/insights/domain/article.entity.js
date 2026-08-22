import { createSlug } from "@/shared/domain/slug";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";
import { resolveInsightTopic } from "./insight-topic";
import { REQUIRED_FIELDS } from "./article.schema";

/**
 * Article aggregate.
 *
 * Publication state is a domain rule, not a rendering detail: an announced
 * article has no body and therefore has no detail route. `isPublished` is the
 * single predicate the rest of the system asks.
 */
export function createArticle(record) {
  for (const field of REQUIRED_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      throw new InvariantViolationError(`Article "${record.slug}" is missing required field "${field}"`, {
        slug: record.slug,
        field,
      });
    }
  }

  const slug = createSlug(record.slug);
  const topic = resolveInsightTopic(record.topicId);
  const isPublished = record.status === "published" && Boolean(record.body);

  return Object.freeze({
    slug,
    title: record.title,
    excerpt: record.excerpt,
    topic,
    publishedAt: record.publishedAt,
    readingMinutes: record.readingMinutes,
    status: record.status ?? "announced",
    isPublished,
    body: record.body ?? null,
    href: isPublished ? routes.insights.detail(slug) : null,
  });
}

export function toArticleSummary(article) {
  return Object.freeze({
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    topicLabel: article.topic.label,
    topicId: article.topic.id,
    publishedAt: article.publishedAt,
    readingMinutes: article.readingMinutes,
    isPublished: article.isPublished,
    href: article.href,
  });
}

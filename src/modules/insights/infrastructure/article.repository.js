import { articleRecords } from "@/content/insights/articles";
import { insightsPage } from "@/content/insights/_page";
import { memoize, indexBySlug } from "@/shared/lib/collection";
import { ContentNotFoundError } from "@/shared/domain/errors";
import { createArticle } from "../domain/article.entity";

/**
 * Content-backed Article repository.
 * Articles sort by publication date descending, not by an `order` field.
 */
const load = memoize(() => {
  const articles = articleRecords
    .map(createArticle)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return { articles, index: indexBySlug(articles) };
});

export const articleRepository = {
  findAll() {
    return load().articles;
  },

  findPublished() {
    return load().articles.filter((article) => article.isPublished);
  },

  findByTopic(topicId) {
    return load().articles.filter((article) => article.topic.id === topicId);
  },

  getBySlug(slug) {
    const article = load().index.get(slug);
    if (!article) throw new ContentNotFoundError("Article", slug);
    return article;
  },

  /** Only published articles get a route. Announced ones render as cards only. */
  listPublishedSlugs() {
    return this.findPublished().map((article) => article.slug);
  },

  getIndexPage() {
    return insightsPage;
  },
};

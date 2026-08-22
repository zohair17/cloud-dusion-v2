import { articleRepository } from "../infrastructure/article.repository";

/** Read model for /insights/[slug]. Only reachable for published articles. */
export function getArticleDetail(slug) {
  return articleRepository.getBySlug(slug);
}

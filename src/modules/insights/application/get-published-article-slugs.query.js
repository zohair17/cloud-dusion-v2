import { articleRepository } from "../infrastructure/article.repository";

/**
 * Feeds generateStaticParams and the sitemap.
 *
 * Returns an empty array while every article is merely announced, which is why
 * the deployed sitemap currently lists /insights/ but no article routes.
 */
export function getPublishedArticleSlugs() {
  return articleRepository.listPublishedSlugs();
}

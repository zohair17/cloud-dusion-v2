import { articleRepository } from "../infrastructure/article.repository";

export function getInsightsPage() {
  return articleRepository.getIndexPage();
}

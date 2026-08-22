import { articleRepository } from "../infrastructure/article.repository";
import { toArticleSummary } from "../domain/article.entity";
import { listInsightTopics } from "../domain/insight-topic";

/**
 * Read model for the /insights index: the topic chips plus every article,
 * newest first, each flagged with whether it links anywhere yet.
 */
export function getInsightsFeed({ topicId, limit } = {}) {
  const articles = topicId ? articleRepository.findByTopic(topicId) : articleRepository.findAll();
  const scoped = limit ? articles.slice(0, limit) : articles;

  return {
    topics: listInsightTopics(),
    articles: scoped.map(toArticleSummary),
  };
}

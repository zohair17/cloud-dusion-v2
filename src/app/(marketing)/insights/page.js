import { getInsightsFeed, getInsightsPage } from "@/modules/insights";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getInsightsPage().seo, canonicalPath: routes.insights.index() }));
}

/**
 * Insights index. Cards link only when an article is actually published;
 * announced ones render the coming-soon label from the page record.
 */
export default function InsightsIndexPage() {
  const page = getInsightsPage();
  const { topics, articles } = getInsightsFeed();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.tagline}</p>
      <ul aria-label="Topics">
        {topics.map((topic) => (
          <li key={topic.id}>{topic.label}</li>
        ))}
      </ul>
      <ul aria-label="Articles">
        {articles.map((article) => (
          <li key={article.slug}>
            {article.title} — {article.isPublished ? "published" : page.comingSoonLabel}
          </li>
        ))}
      </ul>
    </>
  );
}

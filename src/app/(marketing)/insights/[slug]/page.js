import { getArticleDetail, getPublishedArticleSlugs } from "@/modules/insights";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

/**
 * Article detail.
 *
 * Currently generates nothing: every article record is `announced`, so no
 * article route exists and unknown slugs 404 rather than rendering an empty
 * page. Flip a record to `published` with a body and its route appears here,
 * in the sitemap, and as a link on the index — with no code change.
 */
export function generateStaticParams() {
  return getPublishedArticleSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleDetail(slug);
  return buildMetadata(
    createSeoMeta({
      title: article.title,
      description: article.excerpt,
      canonicalPath: routes.insights.detail(slug),
    })
  );
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleDetail(slug);

  return (
    <>
      <h1>{article.title}</h1>
      <p>
        {article.topic.label} · {article.publishedAt} · {article.readingMinutes} min read
      </p>
    </>
  );
}

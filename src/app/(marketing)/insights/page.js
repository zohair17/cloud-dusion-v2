import { getInsightsFeed, getInsightsPage } from "@/modules/insights";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { PageHero } from "@/shared/ui/sections/page-hero";
import { Film } from "@/shared/ui/sections/film";
import { InsightCards } from "@/shared/ui/sections/insight-cards";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(
    createSeoMeta({ ...getInsightsPage().seo, canonicalPath: routes.insights.index() }),
  );
}

/**
 * Insights index.
 *
 * The same three beats as the case studies page: the slab that states what the
 * page is, the feed it is a page for, and the invitation to start a
 * conversation instead. Cards link only where an article is actually written;
 * the announced ones carry the coming-soon label from the page record.
 */
export default function InsightsIndexPage() {
  const page = getInsightsPage();
  const { topics, articles } = getInsightsFeed();

  return (
    <>
      <PageHero
        trail={[
          { label: "Home", href: routes.home() },
          { label: page.title },
        ]}
        eyebrow={page.title}
        heading={page.tagline}
        headingAccent={page.taglineAccent}
        intro={page.intro}
      >
        <Film
          src="/asset/insights-film.mp4"
          poster="/asset/insights-film-poster.webp"
          fit="cover"
          label="The CFG platform at the centre of AI, the Microsoft ecosystem, transformation and delivery"
        />
      </PageHero>

      <InsightCards topics={topics} articles={articles} comingSoonLabel={page.comingSoonLabel} />

      <ClosingCta section={page.closingCta} />
    </>
  );
}

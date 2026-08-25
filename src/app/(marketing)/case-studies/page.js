import { getCaseStudies, getCaseStudiesPage } from "@/modules/case-studies";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { PageHero } from "@/shared/ui/sections/page-hero";
import { Film } from "@/shared/ui/sections/film";
import { CaseStudyCards } from "@/shared/ui/sections/case-study-cards";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(
    createSeoMeta({ ...getCaseStudiesPage().seo, canonicalPath: routes.caseStudies.index() }),
  );
}

/**
 * Case studies index.
 *
 * The same three beats as the homepage: the slab that states what the page is,
 * the catalogue it is a page for, and the invitation to start one. This segment
 * resolves the read models and hands each section its slice; no copy lives here.
 */
export default function CaseStudiesIndexPage() {
  const page = getCaseStudiesPage();
  const caseStudies = getCaseStudies();

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
        ctas={page.ctas}
      >
        <Film
          src="/asset/case-study-film.mp4"
          poster="/asset/case-study-film-poster.webp"
          fit="cover"
          label="Documents, dashboards and models converging on a governed cloud store"
        />
      </PageHero>

      <CaseStudyCards items={caseStudies} />

      <ClosingCta section={getClosingCta()} />
    </>
  );
}

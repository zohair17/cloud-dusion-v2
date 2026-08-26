import { getCaseStudyDetail, getCaseStudySlugs } from "@/modules/case-studies";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import {
  CaseStudyHero,
  CaseStudyChallenge,
  CaseStudyApproach,
  CaseStudySolution,
  CaseStudyOutcomes,
  CaseStudyRelated,
} from "@/shared/ui/sections/case-study-detail";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getCaseStudyDetail(slug).seo);
}

/**
 * Case study detail.
 *
 * Where it started, how it was delivered, what was built, and what changed.
 * This segment resolves the aggregate and hands each section its slice; no copy
 * lives here.
 */
export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyDetail(slug);
  const { sections } = caseStudy;

  return (
    <>
      <CaseStudyHero
        caseStudy={caseStudy}
        trail={[
          { label: "Home", href: routes.home() },
          { label: "Case Studies", href: routes.caseStudies.index() },
          { label: caseStudy.title },
        ]}
      />

      <CaseStudyChallenge section={sections.challenge} body={caseStudy.challenge} />

      <CaseStudyApproach section={sections.approach} steps={caseStudy.approach} />

      <CaseStudySolution
        section={sections.solution}
        body={caseStudy.solution}
        technologies={caseStudy.technologies}
      />

      <CaseStudyOutcomes
        section={sections.outcomes}
        items={caseStudy.outcomes}
        metricsNote={caseStudy.metricsNote}
      />

      <CaseStudyRelated
        section={sections.related}
        services={caseStudy.relatedServices}
        solutions={caseStudy.relatedSolutions}
      />

      <ClosingCta section={caseStudy.closing} />
    </>
  );
}

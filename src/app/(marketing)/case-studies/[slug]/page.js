import { getCaseStudyDetail, getCaseStudySlugs } from "@/modules/case-studies";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import {
  CaseStudyHero,
  CaseStudyCustomer,
  CaseStudyChallenge,
  CaseStudySolution,
  CaseStudyFeatures,
  CaseStudyOutcomes,
  CaseStudyConclusion,
  CaseStudyTestimonial,
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
 * Who it was for, what was wrong, what was built, what changed, and the
 * client saying so.
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

      <CaseStudyCustomer
        body={caseStudy.aboutCustomer}
        client={caseStudy.client}
        partner={caseStudy.partner}
      />

      <CaseStudyChallenge
        section={sections.challenge}
        body={caseStudy.challenge}
        points={caseStudy.challengePoints}
      />

      <CaseStudySolution
        section={sections.solution}
        heading={caseStudy.solutionHeading}
        body={caseStudy.solution}
        steps={caseStudy.approach}
        points={caseStudy.solutionPoints}
        technologies={caseStudy.technologies}
      />

      <CaseStudyFeatures groups={caseStudy.pageFeatures} />

      <CaseStudyOutcomes
        section={sections.outcomes}
        heading={caseStudy.outcomesHeading}
        items={caseStudy.outcomes}
        metricsNote={caseStudy.metricsNote}
      />

      <CaseStudyConclusion body={caseStudy.conclusion} />

      <CaseStudyTestimonial testimonial={caseStudy.testimonial} note={caseStudy.testimonialNote} />

      <CaseStudyRelated
        section={sections.related}
        services={caseStudy.relatedServices}
        solutions={caseStudy.relatedSolutions}
      />

      <ClosingCta section={caseStudy.closing} />
    </>
  );
}

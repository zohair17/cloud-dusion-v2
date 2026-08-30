import { getCaseStudyDetail, getCaseStudySlugs } from "@/modules/case-studies";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import {
  CaseStudyHero,
  CaseStudyCustomer,
  CaseStudyChallenge,
  CaseStudySolution,
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

  /*
   * What was built, as one bundle. A write-up that names no problems has
   * nothing to fill the row beside its challenge, so the solution moves up into
   * that column instead of leaving it empty and then repeating itself below.
   */
  const solution = {
    heading: caseStudy.solutionHeading,
    body: caseStudy.solution,
    steps: caseStudy.approach,
    points: caseStudy.solutionPoints,
    features: caseStudy.pageFeatures,
    technologies: caseStudy.technologies,
  };
  const hoisted = caseStudy.challengePoints.length === 0;

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
        note={caseStudy.challengeNote}
        points={caseStudy.challengePoints}
        solution={solution}
      />

      {hoisted ? null : <CaseStudySolution section={sections.solution} {...solution} />}

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

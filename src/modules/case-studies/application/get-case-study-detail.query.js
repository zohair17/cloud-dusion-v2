import { caseStudyRepository } from "../infrastructure/case-study.repository";
import { caseStudyDetailSections } from "@/content/case-studies/_detail";
import { resolveTechnologies } from "@/shared/domain/technology";
import { resolveCtas } from "@/shared/domain/cta";
import { getServiceSummaries } from "@/modules/services";
import { getSolutionSummaries } from "@/modules/solutions";
import { getIndustrySummaries } from "@/modules/industries";

/**
 * Read model for /case-studies/[slug].
 *
 * Every case study is told in the same beats, so the eyebrows and headings that
 * introduce them join the read model here rather than being repeated in six
 * records. Only what happened lives in the record.
 */
export function getCaseStudyDetail(slug) {
  const caseStudy = caseStudyRepository.getBySlug(slug);
  const [industry] = caseStudy.industrySlug ? getIndustrySummaries([caseStudy.industrySlug]) : [];

  return {
    ...caseStudy,
    sections: caseStudyDetailSections,
    industry: industry ?? null,
    ctas: resolveCtas(caseStudy.ctaIntents),
    closing: {
      ...caseStudyDetailSections.closing,
      ctas: resolveCtas(caseStudyDetailSections.closing.ctas),
    },
    technologies: resolveTechnologies(caseStudy.technologyIds),
    relatedServices: getServiceSummaries(caseStudy.relatedServiceSlugs),
    relatedSolutions: getSolutionSummaries(caseStudy.relatedSolutionSlugs),
  };
}

import { caseStudyRepository } from "../infrastructure/case-study.repository";
import { resolveTechnologies } from "@/shared/domain/technology";
import { getServiceSummaries } from "@/modules/services";
import { getSolutionSummaries } from "@/modules/solutions";

/** Read model for /case-studies/[slug]. */
export function getCaseStudyDetail(slug) {
  const caseStudy = caseStudyRepository.getBySlug(slug);

  return {
    ...caseStudy,
    technologies: resolveTechnologies(caseStudy.technologyIds),
    relatedServices: getServiceSummaries(caseStudy.relatedServiceSlugs),
    relatedSolutions: getSolutionSummaries(caseStudy.relatedSolutionSlugs),
  };
}

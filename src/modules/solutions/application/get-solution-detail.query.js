import { solutionRepository } from "../infrastructure/solution.repository";
import { toSolutionSummary } from "../domain/solution.entity";
import { resolveTechnologies } from "@/shared/domain/technology";
import { getServiceSummaries } from "@/modules/services";
import { getIndustrySummaries } from "@/modules/industries";
import { getCaseStudySummaries } from "@/modules/case-studies";

/** Read model for /solutions/[slug]. */
export function getSolutionDetail(slug) {
  const solution = solutionRepository.getBySlug(slug);

  return {
    ...solution,
    technologies: resolveTechnologies(solution.technologyIds),
    industries: getIndustrySummaries(solution.industrySlugs),
    relatedServices: getServiceSummaries(solution.relatedServiceSlugs),
    relatedSolutions: solutionRepository.findManyBySlugs(solution.relatedSolutionSlugs).map(toSolutionSummary),
    relatedCaseStudies: getCaseStudySummaries(solution.relatedCaseStudySlugs),
  };
}

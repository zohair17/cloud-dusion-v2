import { solutionRepository } from "../infrastructure/solution.repository";
import { toSolutionSummary } from "../domain/solution.entity";

/** Cross-context lookup by slug list. */
export function getSolutionSummaries(slugs = []) {
  return solutionRepository.findManyBySlugs(slugs).map(toSolutionSummary);
}

/** Solutions offered to a given industry. Used by the industries context. */
export function getSolutionSummariesByIndustry(industrySlug) {
  return solutionRepository.findByIndustry(industrySlug).map(toSolutionSummary);
}

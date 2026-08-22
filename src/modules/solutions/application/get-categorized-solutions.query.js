import { solutionRepository } from "../infrastructure/solution.repository";
import { toSolutionSummary } from "../domain/solution.entity";

/**
 * Read model for the /solutions index. Each entry carries the anchor id the
 * section renders as its DOM id, so footer deep links keep working.
 */
export function getCategorizedSolutions() {
  return solutionRepository.findCategorized().map(({ category, solutions }) => ({
    id: category.id,
    anchor: category.anchor,
    href: category.href,
    title: category.title,
    description: category.description,
    count: solutions.length,
    solutions: solutions.map(toSolutionSummary),
  }));
}

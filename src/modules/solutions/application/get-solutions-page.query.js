import { solutionRepository } from "../infrastructure/solution.repository";

export function getSolutionsPage() {
  return solutionRepository.getIndexPage();
}

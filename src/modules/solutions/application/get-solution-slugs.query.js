import { solutionRepository } from "../infrastructure/solution.repository";

export function getSolutionSlugs() {
  return solutionRepository.listSlugs();
}

import { solutionRepository } from "../infrastructure/solution.repository";
import { toSolutionSummary } from "../domain/solution.entity";

export function getSolutions({ limit } = {}) {
  const solutions = solutionRepository.findAll();
  const scoped = limit ? solutions.slice(0, limit) : solutions;
  return scoped.map(toSolutionSummary);
}

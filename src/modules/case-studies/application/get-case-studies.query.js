import { caseStudyRepository } from "../infrastructure/case-study.repository";
import { toCaseStudySummary } from "../domain/case-study.entity";

export function getCaseStudies({ limit } = {}) {
  const caseStudies = caseStudyRepository.findAll();
  const scoped = limit ? caseStudies.slice(0, limit) : caseStudies;
  return scoped.map(toCaseStudySummary);
}

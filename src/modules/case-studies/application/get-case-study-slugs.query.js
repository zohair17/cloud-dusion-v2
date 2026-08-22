import { caseStudyRepository } from "../infrastructure/case-study.repository";

export function getCaseStudySlugs() {
  return caseStudyRepository.listSlugs();
}

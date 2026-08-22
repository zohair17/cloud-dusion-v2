import { caseStudyRepository } from "../infrastructure/case-study.repository";

export function getCaseStudiesPage() {
  return caseStudyRepository.getIndexPage();
}

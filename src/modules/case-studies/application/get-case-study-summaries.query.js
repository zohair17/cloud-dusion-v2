import { caseStudyRepository } from "../infrastructure/case-study.repository";
import { toCaseStudySummary } from "../domain/case-study.entity";

/** Cross-context lookup by slug list. */
export function getCaseStudySummaries(slugs = []) {
  return caseStudyRepository.findManyBySlugs(slugs).map(toCaseStudySummary);
}

/** Proof points for a given industry page. */
export function getCaseStudySummariesByIndustry(industrySlug) {
  return caseStudyRepository.findByIndustry(industrySlug).map(toCaseStudySummary);
}

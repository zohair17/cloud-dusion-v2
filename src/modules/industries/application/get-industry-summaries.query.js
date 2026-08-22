import { industryRepository } from "../infrastructure/industry.repository";
import { toIndustrySummary } from "../domain/industry.entity";

/** Cross-context lookup by slug list. */
export function getIndustrySummaries(slugs = []) {
  return industryRepository.findManyBySlugs(slugs).map(toIndustrySummary);
}

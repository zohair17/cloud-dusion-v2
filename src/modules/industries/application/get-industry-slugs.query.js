import { industryRepository } from "../infrastructure/industry.repository";

export function getIndustrySlugs() {
  return industryRepository.listSlugs();
}

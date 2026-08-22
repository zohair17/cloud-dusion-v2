import { industryRepository } from "../infrastructure/industry.repository";

export function getIndustriesPage() {
  return industryRepository.getIndexPage();
}

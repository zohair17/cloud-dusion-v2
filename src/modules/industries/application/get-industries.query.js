import { industryRepository } from "../infrastructure/industry.repository";
import { toIndustrySummary } from "../domain/industry.entity";

export function getIndustries({ limit, footerOnly = false } = {}) {
  const industries = footerOnly ? industryRepository.findFooterIndustries() : industryRepository.findAll();
  const scoped = limit ? industries.slice(0, limit) : industries;
  return scoped.map(toIndustrySummary);
}

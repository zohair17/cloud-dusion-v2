import { industryRepository } from "../infrastructure/industry.repository";
import { getSolutionSummaries, getSolutionSummariesByIndustry } from "@/modules/solutions";
import { getServiceSummaries } from "@/modules/services";
import { getCaseStudySummaries } from "@/modules/case-studies";

/**
 * Read model for /industries/[slug].
 *
 * Solutions may be listed explicitly on the industry record, or inferred from
 * solutions that name this industry. The explicit list wins when present, so
 * editors can curate order without losing the automatic default.
 */
export function getIndustryDetail(slug) {
  const industry = industryRepository.getBySlug(slug);

  const solutions = industry.solutionSlugs.length
    ? getSolutionSummaries(industry.solutionSlugs)
    : getSolutionSummariesByIndustry(industry.slug);

  return {
    ...industry,
    solutions,
    relatedServices: getServiceSummaries(industry.relatedServiceSlugs),
    relatedCaseStudies: getCaseStudySummaries(industry.relatedCaseStudySlugs),
  };
}

import { industryRepository } from "../infrastructure/industry.repository";
import { industryDetailSections } from "@/content/industries/_detail";
import { resolveCtas } from "@/shared/domain/cta";
import { getSolutionSummaries, getSolutionSummariesByIndustry } from "@/modules/solutions";
import { getServiceSummaries } from "@/modules/services";
import { getCaseStudySummaries } from "@/modules/case-studies";

/**
 * Read model for /industries/[slug].
 *
 * Solutions may be listed explicitly on the industry record, or inferred from
 * solutions that name this industry. The explicit list wins when present, so
 * editors can curate order without losing the automatic default.
 *
 * The section headings are shared across all nine industries and carry the
 * industry's own name, so they are filled in here rather than in the records.
 */
export function getIndustryDetail(slug) {
  const industry = industryRepository.getBySlug(slug);

  const solutions = industry.solutionSlugs.length
    ? getSolutionSummaries(industry.solutionSlugs)
    : getSolutionSummariesByIndustry(industry.slug);

  const name = industry.title.toLowerCase();
  const named = (section) => ({ ...section, heading: section.heading.replace("{name}", name) });

  return {
    ...industry,
    sections: {
      challenges: named(industryDetailSections.challenges),
      aiImpact: industryDetailSections.aiImpact,
      microsoftEnablement: industryDetailSections.microsoftEnablement,
      solutions: named(industryDetailSections.solutions),
      services: industryDetailSections.services,
      outcomes: industryDetailSections.outcomes,
    },
    ctas: resolveCtas(industry.ctaIntents),
    closing: {
      ...named(industryDetailSections.closing),
      ctas: resolveCtas(industryDetailSections.closing.ctas),
    },
    solutions,
    relatedServices: getServiceSummaries(industry.relatedServiceSlugs),
    relatedCaseStudies: getCaseStudySummaries(industry.relatedCaseStudySlugs),
  };
}

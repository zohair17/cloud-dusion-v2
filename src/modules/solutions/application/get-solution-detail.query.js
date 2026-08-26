import { solutionRepository } from "../infrastructure/solution.repository";
import { toSolutionSummary } from "../domain/solution.entity";
import { solutionDetailSections } from "@/content/solutions/_detail";
import { resolveTechnologies } from "@/shared/domain/technology";
import { resolveCtas } from "@/shared/domain/cta";
import { getServiceSummaries } from "@/modules/services";
import { getIndustrySummaries } from "@/modules/industries";
import { getCaseStudySummaries } from "@/modules/case-studies";

/**
 * Read model for /solutions/[slug].
 *
 * The page's shared furniture, the headings that introduce the cross-links and
 * the invitation it closes on, is the same on all twenty-seven solutions, so it
 * joins the read model here rather than being repeated in twenty-seven records.
 */
export function getSolutionDetail(slug) {
  const solution = solutionRepository.getBySlug(slug);

  return {
    ...solution,
    sections: solutionDetailSections,
    ctas: resolveCtas(solution.ctaIntents),
    closing: {
      ...solutionDetailSections.closing,
      heading: solutionDetailSections.closing.heading.replace("{title}", solution.title),
      ctas: resolveCtas(solutionDetailSections.closing.ctas),
    },
    technologies: resolveTechnologies(solution.technologyIds),
    industries: getIndustrySummaries(solution.industrySlugs),
    relatedServices: getServiceSummaries(solution.relatedServiceSlugs),
    relatedSolutions: solutionRepository.findManyBySlugs(solution.relatedSolutionSlugs).map(toSolutionSummary),
    relatedCaseStudies: getCaseStudySummaries(solution.relatedCaseStudySlugs),
  };
}

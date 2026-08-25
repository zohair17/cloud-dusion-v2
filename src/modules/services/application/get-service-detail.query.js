import { serviceRepository } from "../infrastructure/service.repository";
import { serviceDetailSections } from "@/content/services/_detail";
import { resolveTechnologies } from "@/shared/domain/technology";
import { getSolutionSummaries } from "@/modules/solutions";
import { getIndustrySummaries } from "@/modules/industries";
import { getCaseStudySummaries } from "@/modules/case-studies";

/**
 * Read model for /services/[slug].
 *
 * Cross-context references are stored as slugs and resolved here, at the
 * application layer, through the other contexts public APIs. The Service
 * aggregate never holds a Solution object, which keeps the two contexts
 * independently changeable.
 *
 * The page's shared furniture — how we deliver, why CFG, and the two headings
 * that introduce the cross-links — is the same on all twelve service pages, so
 * it joins the read model here rather than being repeated in twelve records.
 */
export function getServiceDetail(slug) {
  const service = serviceRepository.getBySlug(slug);

  return {
    ...service,
    sections: serviceDetailSections,
    technologies: resolveTechnologies(service.technologyIds),
    relatedSolutions: getSolutionSummaries(service.relatedSolutionSlugs),
    relatedIndustries: getIndustrySummaries(service.relatedIndustrySlugs),
    relatedCaseStudies: getCaseStudySummaries(service.relatedCaseStudySlugs),
  };
}

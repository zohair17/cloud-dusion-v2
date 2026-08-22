import { serviceRepository } from "../infrastructure/service.repository";
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
 */
export function getServiceDetail(slug) {
  const service = serviceRepository.getBySlug(slug);

  return {
    ...service,
    technologies: resolveTechnologies(service.technologyIds),
    relatedSolutions: getSolutionSummaries(service.relatedSolutionSlugs),
    relatedIndustries: getIndustrySummaries(service.relatedIndustrySlugs),
    relatedCaseStudies: getCaseStudySummaries(service.relatedCaseStudySlugs),
  };
}

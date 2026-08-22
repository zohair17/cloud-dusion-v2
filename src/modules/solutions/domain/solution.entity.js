import { createSlug } from "@/shared/domain/slug";
import { createSeoMeta } from "@/shared/domain/seo";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";
import { resolveSolutionCategory } from "./solution-category";
import { REQUIRED_FIELDS } from "./solution.schema";

/** Solution aggregate. Invariants are enforced at construction. */
export function createSolution(record) {
  for (const field of REQUIRED_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      throw new InvariantViolationError(`Solution "${record.slug}" is missing required field "${field}"`, {
        slug: record.slug,
        field,
      });
    }
  }

  const slug = createSlug(record.slug);
  const category = resolveSolutionCategory(record.categoryId);
  const href = routes.solutions.detail(slug);

  return Object.freeze({
    slug,
    title: record.title,
    tagline: record.tagline ?? null,
    summary: record.summary,
    icon: record.icon ?? null,
    category,
    order: record.order,
    status: record.status ?? "outline",
    href,

    problem: record.problem ?? null,
    businessChallenges: record.businessChallenges ?? null,
    overview: record.overview ?? [],
    howItWorks: record.howItWorks ?? null,
    capabilities: record.capabilities ?? [],
    aiCapabilities: record.aiCapabilities ?? [],
    benefits: record.benefits ?? [],
    useCases: record.useCases ?? [],

    technologyIds: record.technologies ?? [],
    industrySlugs: record.industries ?? [],
    relatedServiceSlugs: record.relatedServices ?? [],
    relatedSolutionSlugs: record.relatedSolutions ?? [],
    relatedCaseStudySlugs: record.relatedCaseStudies ?? [],
    ctaIntents: record.ctas ?? [],

    seo: createSeoMeta({
      title: record.seo.title,
      description: record.seo.description,
      canonicalPath: href,
    }),
  });
}

export function toSolutionSummary(solution) {
  return Object.freeze({
    slug: solution.slug,
    title: solution.title,
    summary: solution.summary,
    icon: solution.icon,
    href: solution.href,
    categoryId: solution.category.id,
    categoryTitle: solution.category.title,
  });
}

import { createSlug } from "@/shared/domain/slug";
import { createSeoMeta } from "@/shared/domain/seo";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";
import { resolveServiceGroup } from "./service-group";
import { REQUIRED_FIELDS } from "./service.schema";

/**
 * Service aggregate.
 *
 * Construction is where invariants are enforced: a Service that exists is a
 * Service that is valid. Everything downstream can therefore stop null-checking.
 */
export function createService(record) {
  for (const field of REQUIRED_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      throw new InvariantViolationError(`Service "${record.slug}" is missing required field "${field}"`, {
        slug: record.slug,
        field,
      });
    }
  }

  const slug = createSlug(record.slug);
  const group = resolveServiceGroup(record.groupId);
  const href = routes.services.detail(slug);

  return Object.freeze({
    slug,
    title: record.title,
    navLabel: record.navLabel,
    tagline: record.tagline ?? null,
    summary: record.summary,
    group,
    order: record.order,
    status: record.status ?? "outline",
    href,

    heroSlides: record.heroSlides ?? [],
    intro: record.intro ?? [],
    challenges: record.challenges ?? null,
    approach: record.approach ?? null,
    capabilities: record.capabilities ?? null,
    stack: record.stack ?? null,
    outcomes: record.outcomes ?? null,
    closing: record.closing ?? null,

    technologyIds: record.technologies ?? [],
    relatedSolutionSlugs: record.relatedSolutions ?? [],
    relatedIndustrySlugs: record.relatedIndustries ?? [],
    relatedCaseStudySlugs: record.relatedCaseStudies ?? [],
    ctaIntents: record.ctas ?? [],

    seo: createSeoMeta({
      title: record.seo.title,
      description: record.seo.description,
      canonicalPath: href,
    }),
  });
}

/** Compact projection used by cards, navigation and cross-links. */
export function toServiceSummary(service) {
  return Object.freeze({
    slug: service.slug,
    title: service.title,
    navLabel: service.navLabel,
    summary: service.summary,
    href: service.href,
    groupId: service.group.id,
  });
}

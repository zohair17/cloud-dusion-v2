import { createSlug } from "@/shared/domain/slug";
import { createSeoMeta } from "@/shared/domain/seo";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";
import { REQUIRED_FIELDS } from "./industry.schema";

/** Industry aggregate. */
export function createIndustry(record) {
  for (const field of REQUIRED_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      throw new InvariantViolationError(`Industry "${record.slug}" is missing required field "${field}"`, {
        slug: record.slug,
        field,
      });
    }
  }

  const slug = createSlug(record.slug);
  const href = routes.industries.detail(slug);

  return Object.freeze({
    slug,
    title: record.title,
    tagline: record.tagline ?? null,
    summary: record.summary,
    image: record.image ?? null,
    order: record.order,
    inFooter: record.inFooter ?? false,
    status: record.status ?? "outline",
    href,

    intro: record.intro ?? [],
    challenges: record.challenges ?? [],
    aiImpact: record.aiImpact ?? [],
    microsoftEnablement: record.microsoftEnablement ?? [],

    solutionSlugs: record.solutions ?? [],
    relatedServiceSlugs: record.relatedServices ?? [],
    relatedCaseStudySlugs: record.relatedCaseStudies ?? [],
    ctaIntents: record.ctas ?? [],

    seo: createSeoMeta({
      title: record.seo.title,
      description: record.seo.description,
      canonicalPath: href,
    }),
  });
}

export function toIndustrySummary(industry) {
  return Object.freeze({
    slug: industry.slug,
    title: industry.title,
    summary: industry.summary,
    image: industry.image,
    href: industry.href,
    inFooter: industry.inFooter,
  });
}

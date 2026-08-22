import { createSlug } from "@/shared/domain/slug";
import { createSeoMeta } from "@/shared/domain/seo";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";
import { REQUIRED_FIELDS } from "./case-study.schema";

/** CaseStudy aggregate. */
export function createCaseStudy(record) {
  for (const field of REQUIRED_FIELDS) {
    if (record[field] === undefined || record[field] === null) {
      throw new InvariantViolationError(`Case study "${record.slug}" is missing required field "${field}"`, {
        slug: record.slug,
        field,
      });
    }
  }

  const slug = createSlug(record.slug);
  const href = routes.caseStudies.detail(slug);

  return Object.freeze({
    slug,
    title: record.title,
    sectorLabel: record.sectorLabel,
    industrySlug: record.industrySlug ?? null,
    order: record.order,
    client: record.client,
    summary: record.summary,
    status: record.status ?? "outline",
    href,

    challenge: record.challenge ?? null,
    approach: record.approach ?? [],
    solution: record.solution ?? null,
    outcomes: record.outcomes ?? [],
    metricsNote: record.metricsNote ?? null,

    technologyIds: record.technologies ?? [],
    relatedServiceSlugs: record.relatedServices ?? [],
    relatedSolutionSlugs: record.relatedSolutions ?? [],
    ctaIntents: record.ctas ?? [],

    seo: createSeoMeta({
      title: record.seo.title,
      description: record.seo.description,
      canonicalPath: href,
    }),
  });
}

export function toCaseStudySummary(caseStudy) {
  return Object.freeze({
    slug: caseStudy.slug,
    title: caseStudy.title,
    summary: caseStudy.summary,
    sectorLabel: caseStudy.sectorLabel,
    client: caseStudy.client,
    href: caseStudy.href,
  });
}

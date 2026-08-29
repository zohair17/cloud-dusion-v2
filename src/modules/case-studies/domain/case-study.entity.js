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
    image: record.image ?? null,
    sectorLabel: record.sectorLabel ?? null,
    industrySlug: record.industrySlug ?? null,
    order: record.order,
    client: record.client,
    /* The write-ups name the parties in three different ways, so all three are
       carried and the page shows whichever the document actually used. */
    partner: record.partner ?? record.engagementPartner ?? null,
    deliveryPartner: record.deliveryPartner ?? null,
    engagement: record.engagement ?? null,
    location: record.location ?? null,
    subtitle: record.subtitle ?? null,
    projectStatus: record.projectStatus ?? null,
    summary: record.summary,

    /* Titles read "X for Y", and the reference sets the client's half of it in
       the brand colour, so the split belongs to the aggregate rather than to
       whichever component happens to render the heading. */
    titleAccent: /\s(?:for|at|with)\s/i.test(record.title)
      ? record.title.replace(/^.*?(\s(?:for|at|with)\s.*)$/i, "$1").trim()
      : null,
    titleLead: /\s(?:for|at|with)\s/i.test(record.title)
      ? record.title.replace(/\s(?:for|at|with)\s.*$/i, "").trim()
      : record.title,
    status: record.status ?? "outline",
    href,

    businessGains: record.businessGains ?? [],
    businessGainsNote: record.businessGainsNote ?? null,
    aboutCustomer: record.aboutCustomer ?? null,

    challenge: record.challenge ?? null,
    challengePoints: record.challengePoints ?? [],
    approach: record.approach ?? [],
    solutionPoints: record.solutionPoints ?? [],
    pageFeatures: record.pageFeatures ?? [],
    /* Two of the write-ups word their own headings differently — "Solution
       Provided (In Progress)", "Expected Key Outcomes" — and the page should
       say what the document says rather than a house label over the top. */
    solutionHeading: record.solutionHeading ?? null,
    outcomesHeading: record.outcomesHeading ?? null,
    solution: record.solution ?? null,
    outcomes: record.outcomes ?? [],
    metricsNote: record.metricsNote ?? null,
    conclusion: record.conclusion ?? null,
    testimonial: record.testimonial ?? null,
    testimonialNote: record.testimonialNote ?? null,

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
    industrySlug: caseStudy.industrySlug,
    image: caseStudy.image,
    client: caseStudy.client,
    href: caseStudy.href,
  });
}

import { caseStudyRecords } from "@/content/case-studies/_index";
import { caseStudiesPage } from "@/content/case-studies/_page";
import { memoize, indexBySlug, sortByOrder } from "@/shared/lib/collection";
import { ContentNotFoundError } from "@/shared/domain/errors";
import { createCaseStudy } from "../domain/case-study.entity";

/** Content-backed CaseStudy repository. */
const load = memoize(() => {
  const caseStudies = sortByOrder(caseStudyRecords.map(createCaseStudy));
  return { caseStudies, index: indexBySlug(caseStudies) };
});

export const caseStudyRepository = {
  findAll() {
    return load().caseStudies;
  },

  findBySlug(slug) {
    return load().index.get(slug) ?? null;
  },

  getBySlug(slug) {
    const caseStudy = this.findBySlug(slug);
    if (!caseStudy) throw new ContentNotFoundError("CaseStudy", slug);
    return caseStudy;
  },

  findManyBySlugs(slugs = []) {
    const { index } = load();
    return slugs.map((slug) => index.get(slug)).filter(Boolean);
  },

  findByIndustry(industrySlug) {
    return load().caseStudies.filter((caseStudy) => caseStudy.industrySlug === industrySlug);
  },

  listSlugs() {
    return load().caseStudies.map((caseStudy) => caseStudy.slug);
  },

  getIndexPage() {
    return caseStudiesPage;
  },
};

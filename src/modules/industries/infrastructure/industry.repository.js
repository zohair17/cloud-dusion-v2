import { industryRecords } from "@/content/industries/_index";
import { industriesPage } from "@/content/industries/_page";
import { memoize, indexBySlug, sortByOrder } from "@/shared/lib/collection";
import { ContentNotFoundError } from "@/shared/domain/errors";
import { createIndustry } from "../domain/industry.entity";

/** Content-backed Industry repository. */
const load = memoize(() => {
  const industries = sortByOrder(industryRecords.map(createIndustry));
  return { industries, index: indexBySlug(industries) };
});

export const industryRepository = {
  findAll() {
    return load().industries;
  },

  /** The subset the footer column surfaces, in catalogue order. */
  findFooterIndustries() {
    return load().industries.filter((industry) => industry.inFooter);
  },

  findBySlug(slug) {
    return load().index.get(slug) ?? null;
  },

  getBySlug(slug) {
    const industry = this.findBySlug(slug);
    if (!industry) throw new ContentNotFoundError("Industry", slug);
    return industry;
  },

  findManyBySlugs(slugs = []) {
    const { index } = load();
    return slugs.map((slug) => index.get(slug)).filter(Boolean);
  },

  listSlugs() {
    return load().industries.map((industry) => industry.slug);
  },

  getIndexPage() {
    return industriesPage;
  },
};

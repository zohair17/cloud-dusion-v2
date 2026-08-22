import { solutionRecords } from "@/content/solutions/_index";
import { solutionsPage } from "@/content/solutions/_page";
import { memoize, indexBySlug, sortByOrder, groupBy } from "@/shared/lib/collection";
import { ContentNotFoundError } from "@/shared/domain/errors";
import { createSolution } from "../domain/solution.entity";
import { listSolutionCategories } from "../domain/solution-category";

/** Content-backed Solution repository. */
const load = memoize(() => {
  const solutions = sortByOrder(solutionRecords.map(createSolution));
  return { solutions, index: indexBySlug(solutions) };
});

export const solutionRepository = {
  findAll() {
    return load().solutions;
  },

  findBySlug(slug) {
    return load().index.get(slug) ?? null;
  },

  getBySlug(slug) {
    const solution = this.findBySlug(slug);
    if (!solution) throw new ContentNotFoundError("Solution", slug);
    return solution;
  },

  findManyBySlugs(slugs = []) {
    const { index } = load();
    return slugs.map((slug) => index.get(slug)).filter(Boolean);
  },

  listSlugs() {
    return load().solutions.map((solution) => solution.slug);
  },

  /** Solutions bucketed into their anchored categories, in declared order. */
  findCategorized() {
    const byCategory = groupBy(load().solutions, (solution) => solution.category.id);
    return listSolutionCategories().map((category) => ({
      category,
      solutions: byCategory.get(category.id) ?? [],
    }));
  },

  /** Solutions that name a given industry. Drives the industry detail pages. */
  findByIndustry(industrySlug) {
    return load().solutions.filter((solution) => solution.industrySlugs.includes(industrySlug));
  },

  getIndexPage() {
    return solutionsPage;
  },
};

import { solutionCategories } from "@/content/taxonomies/solution-categories";
import { InvariantViolationError } from "@/shared/domain/errors";
import { routes } from "@/shared/config/routes";

/**
 * SolutionCategory value object.
 *
 * Categories are more than labels here: the solutions index is a single page
 * with one anchored section per category, and the footer links to those
 * anchors. The category therefore owns its own href.
 */
const registry = new Map(solutionCategories.map((category) => [category.id, Object.freeze(category)]));

export function resolveSolutionCategory(id) {
  const category = registry.get(id);
  if (!category) {
    throw new InvariantViolationError(`Unknown solution category: "${id}"`, { id });
  }
  return category;
}

export function listSolutionCategories() {
  return [...registry.values()]
    .sort((a, b) => a.order - b.order)
    .map((category) => Object.freeze({ ...category, href: routes.solutions.category(category.anchor) }));
}

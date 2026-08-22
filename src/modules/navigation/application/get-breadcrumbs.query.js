import { routes } from "@/shared/config/routes";

/**
 * Breadcrumb trail for a page.
 *
 * Every page on the site renders Home > Section > Page and emits the matching
 * BreadcrumbList structured data. Both read this one trail, so the visible
 * breadcrumb and the machine-readable one cannot disagree.
 */
export function getBreadcrumbs({ section, page } = {}) {
  const trail = [{ name: "Home", path: routes.home() }];
  if (section) trail.push({ name: section.name, path: section.path });
  if (page) trail.push({ name: page.name });
  return trail;
}

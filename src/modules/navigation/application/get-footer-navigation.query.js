import { footerNavigation } from "@/shared/config/navigation.config";
import { createNavColumn, createNavItem } from "../domain/nav-item";
import { getServices } from "@/modules/services";
import { getIndustries } from "@/modules/industries";
import { listSolutionCategories } from "@/modules/solutions";

/**
 * Footer navigation, assembled from the catalogue.
 *
 * Each column declares its source in config; this query resolves it through the
 * owning context public API. Add a service and it appears in the footer, in the
 * right order, with the short navigation label, without editing any template.
 */
export function getFooterNavigation() {
  return footerNavigation.map((column) =>
    createNavColumn({
      id: column.id,
      title: column.title,
      items: resolveColumnItems(column.source),
      viewAll: column.viewAll ?? null,
    })
  );
}

function resolveColumnItems(source) {
  switch (source.module) {
    case "services":
      return getServices({ limit: source.limit }).map((service) =>
        createNavItem({ id: service.slug, label: service.navLabel, href: service.href })
      );

    case "solution-categories":
      return listSolutionCategories().map((category) =>
        createNavItem({ id: category.id, label: category.title, href: category.href })
      );

    case "industries":
      return getIndustries({ footerOnly: true, limit: source.limit }).map((industry) =>
        createNavItem({ id: industry.slug, label: industry.title, href: industry.href })
      );

    case "manual":
      return source.items.map((item) =>
        createNavItem({ id: item.href, label: item.label, href: item.href })
      );

    default:
      return [];
  }
}

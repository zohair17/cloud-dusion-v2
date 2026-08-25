import { primaryNavigation } from "@/shared/config/navigation.config";
import { createNavItem } from "../domain/nav-item";
import { getGroupedServices } from "@/modules/services";
import { getCategorizedSolutions } from "@/modules/solutions";

/**
 * Header navigation with mega-menu panels.
 *
 * Services, Solutions and Industries open a panel built from the catalogue, so
 * the menu can never drift from the pages that exist. The final link is pulled
 * out as its own solid button, matching the reference header.
 */
const CTA_ID = "contact";

const PANELS = {
  services: () =>
    getGroupedServices().map((group) => ({
      id: group.id,
      title: group.title,
      links: group.services.map((s) => ({ id: s.slug, label: s.navLabel, href: s.href })),
    })),
  solutions: () =>
    getCategorizedSolutions().map((category) => ({
      id: category.id,
      title: category.title,
      links: category.solutions.map((s) => ({ id: s.slug, label: s.title, href: s.href })),
    })),
};

export function getHeaderNavigation() {
  const items = primaryNavigation
    .filter((item) => item.id !== CTA_ID)
    .map((item) => ({ ...createNavItem(item), panel: PANELS[item.id] ? PANELS[item.id]() : null }));

  const ctaSource = primaryNavigation.find((item) => item.id === CTA_ID);
  return { items, cta: ctaSource ? createNavItem(ctaSource) : null };
}

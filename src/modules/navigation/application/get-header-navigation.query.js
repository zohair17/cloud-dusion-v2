import { primaryNavigation } from "@/shared/config/navigation.config";
import { createNavItem } from "../domain/nav-item";
import { getGroupedServices, getServiceDetail } from "@/modules/services";
import { getCategorizedSolutions } from "@/modules/solutions";

/**
 * Header navigation with mega-menu panels.
 *
 * Services, Solutions and Industries open a panel built from the catalogue, so
 * the menu can never drift from the pages that exist. The final link is pulled
 * out as its own solid button, matching the reference header.
 *
 * A service link carries its own capabilities as `children`, which the panel
 * opens as a second level on hover. They are the service's own sections, not a
 * hand-kept list, so a capability added to a record appears in the menu.
 */
const SUBMENU_LIMIT = 14;

/** What one service offers, as menu entries pointing back at its page. */
function serviceChildren(slug, href) {
  const items = getServiceDetail(slug)?.capabilities?.items ?? [];
  return items.slice(0, SUBMENU_LIMIT).map((item, index) => ({
    id: `${slug}-${index}`,
    label: item.title,
    description: item.description ?? null,
    href,
  }));
}
const CTA_ID = "contact";

const PANELS = {
  services: () =>
    getGroupedServices().map((group) => ({
      id: group.id,
      title: group.title,
      links: group.services.map((s) => ({
        id: s.slug,
        label: s.navLabel,
        description: s.summary,
        href: s.href,
        children: serviceChildren(s.slug, s.href),
      })),
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

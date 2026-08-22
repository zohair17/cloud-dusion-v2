import { primaryNavigation } from "@/shared/config/navigation.config";
import { createNavItem, withActiveState } from "../domain/nav-item";

/**
 * Header navigation.
 *
 * Shape comes from config; active state comes from the current path. Pass the
 * pathname from a client component to get the highlighted branch.
 */
export function getPrimaryNavigation(pathname = "/") {
  const items = primaryNavigation.map(createNavItem);
  return withActiveState(items, pathname);
}

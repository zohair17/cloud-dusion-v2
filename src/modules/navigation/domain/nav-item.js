/**
 * NavItem / NavColumn value objects.
 *
 * Navigation is derived, never authored twice. A menu entry is a label plus a
 * destination plus enough state for the renderer to mark the active branch.
 */
export function createNavItem({ id, label, href, children = [] }) {
  return Object.freeze({ id, label, href, children: Object.freeze(children) });
}

export function createNavColumn({ id, title, items, viewAll = null }) {
  return Object.freeze({ id, title, items: Object.freeze(items), viewAll });
}

/**
 * Marks the branch of the primary navigation that matches the current path.
 * A section is active when the path sits at or below it, so a detail page keeps
 * its parent highlighted.
 */
export function withActiveState(items, pathname) {
  return items.map((item) =>
    Object.freeze({
      ...item,
      isActive: item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace(/\/$/, "")),
    })
  );
}

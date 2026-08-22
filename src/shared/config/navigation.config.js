import { routes } from "./routes";

/**
 * Structural navigation contract.
 *
 * This file declares *shape and order* only. Dynamic children (the individual
 * services, solutions and industries listed in the footer) are resolved at
 * render time by the navigation module from the domain repositories, so the
 * menu can never drift from the catalogue.
 */
export const primaryNavigation = Object.freeze([
  { id: "services", label: "Services", href: routes.services.index() },
  { id: "solutions", label: "Solutions", href: routes.solutions.index() },
  { id: "industries", label: "Industries", href: routes.industries.index() },
  { id: "case-studies", label: "Case Studies", href: routes.caseStudies.index() },
  { id: "insights", label: "Insights", href: routes.insights.index() },
  { id: "about", label: "About", href: routes.about() },
  { id: "contact", label: "Contact", href: routes.contact() },
]);

/**
 * Footer column definitions.
 * `source` tells the navigation module which repository feeds the column and
 * how many entries to surface; `manual` columns list their links inline.
 */
export const footerNavigation = Object.freeze([
  {
    id: "services",
    title: "Services",
    source: { module: "services", limit: 7 },
    viewAll: { label: "View all", href: routes.services.index() },
  },
  {
    id: "solutions",
    title: "Solutions",
    source: { module: "solution-categories" },
    viewAll: { label: "View all", href: routes.solutions.index() },
  },
  {
    id: "industries",
    title: "Industries",
    source: { module: "industries", limit: 7 },
    viewAll: { label: "View all", href: routes.industries.index() },
  },
  {
    id: "company",
    title: "Company",
    source: {
      module: "manual",
      items: [
        { label: "About Us", href: routes.about() },
        { label: "Case Studies", href: routes.caseStudies.index() },
        { label: "Insights", href: routes.insights.index() },
        { label: "Contact", href: routes.contact() },
      ],
    },
  },
]);

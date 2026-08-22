import { siteConfig } from "../config/site.config";

/** Structured-data builders. Every page emits Organization + BreadcrumbList. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
  };
}

/** @param trail [{ name, path? }] — the last entry is the current page. */
export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      ...(crumb.path ? { item: new URL(crumb.path, siteConfig.url).toString() } : {}),
    })),
  };
}

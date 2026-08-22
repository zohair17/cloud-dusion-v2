import { siteConfig } from "@/shared/config/site.config";
import { routes } from "@/shared/config/routes";
import { getServiceSlugs } from "@/modules/services";
import { getSolutionSlugs } from "@/modules/solutions";
import { getIndustrySlugs } from "@/modules/industries";
import { getCaseStudySlugs } from "@/modules/case-studies";
import { getPublishedArticleSlugs } from "@/modules/insights";

/**
 * Sitemap, generated from the catalogue.
 *
 * There is no hand-maintained URL list: publishing a record adds its URL here,
 * to the navigation, and to the static build in one step. Announced-only
 * insight articles are excluded because they have no route yet.
 */
export default function sitemap() {
  const url = (routePath) => new URL(routePath, siteConfig.url).toString();

  const landing = [
    { path: routes.home(), priority: 1 },
    { path: routes.services.index(), priority: 0.9 },
    { path: routes.solutions.index(), priority: 0.9 },
    { path: routes.industries.index(), priority: 0.9 },
    { path: routes.caseStudies.index(), priority: 0.9 },
    { path: routes.insights.index(), priority: 0.9 },
    { path: routes.about(), priority: 0.9 },
    { path: routes.contact(), priority: 0.9 },
  ];

  const detail = [
    ...getServiceSlugs().map((slug) => routes.services.detail(slug)),
    ...getSolutionSlugs().map((slug) => routes.solutions.detail(slug)),
    ...getIndustrySlugs().map((slug) => routes.industries.detail(slug)),
    ...getCaseStudySlugs().map((slug) => routes.caseStudies.detail(slug)),
    ...getPublishedArticleSlugs().map((slug) => routes.insights.detail(slug)),
  ];

  return [
    ...landing.map((entry) => ({ url: url(entry.path), changeFrequency: "monthly", priority: entry.priority })),
    ...detail.map((routePath) => ({ url: url(routePath), changeFrequency: "monthly", priority: 0.7 })),
  ];
}

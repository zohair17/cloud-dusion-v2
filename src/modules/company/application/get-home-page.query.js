import { companyRepository } from "../infrastructure/company.repository";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { siteConfig } from "@/shared/config/site.config";
import { getSolutionSummaries, getSolutions } from "@/modules/solutions";
import { getIndustries } from "@/modules/industries";
import { getServices } from "@/modules/services";
import { resolveCtas } from "@/shared/domain/cta";
import { listTechnologiesByLayer } from "@/shared/domain/technology";
import { technologyLayers } from "@/content/taxonomies/technologies";

/**
 * Read model for the homepage.
 *
 * Every catalogue-backed section is resolved here, so adding a solution or an
 * industry to the catalogue updates the homepage with no edit to this file and
 * no copy duplicated between pages.
 */
export function getHomePage() {
  const home = companyRepository.getHomePage();

  /** Proof-point counts are read from the catalogue, never typed as copy. */
  const catalogueSizes = {
    services: getServices().length,
    solutions: getSolutions().length,
    industries: getIndustries().length,
  };

  return {
    ...home,

    hero: {
      ...home.hero,
      ctas: resolveCtas(home.hero.ctas),
      proofPoints: (home.hero.proofPoints ?? []).map((point) => ({
        ...point,
        value: catalogueSizes[point.source] ?? null,
      })),
    },

    closingCta: { ...home.closingCta, ctas: resolveCtas(home.closingCta.ctas) },

    featuredSolutions: {
      ...home.featuredSolutions,
      items: getSolutionSummaries(home.featuredSolutions.solutionSlugs),
    },

    industryFocus: {
      ...home.industryFocus,
      /** Authored order wins here: the homepage row is a curated sequence. */
      items: home.industryFocus.industrySlugs.length
        ? home.industryFocus.industrySlugs
            .map((slug) => getIndustries().find((industry) => industry.slug === slug))
            .filter(Boolean)
        : getIndustries(),
    },

    technologyStack: {
      ...home.technologyStack,
      layers: technologyLayers
        .filter((layer) => home.technologyStack.layerIds.includes(layer.id))
        .sort((a, b) => a.order - b.order)
        .map((layer) => ({ ...layer, technologies: listTechnologiesByLayer(layer.id) })),
    },

    seo: createSeoMeta({
      title: home.seo.title ?? siteConfig.tagline,
      description: home.seo.description ?? siteConfig.description,
      canonicalPath: routes.home(),
    }),
  };
}

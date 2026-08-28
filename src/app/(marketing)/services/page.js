import { getGroupedServices, getServicesPage } from "@/modules/services";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { PageHero } from "@/shared/ui/sections/page-hero";
import { Film } from "@/shared/ui/sections/film";
import { ServiceGroups } from "@/shared/ui/sections/service-groups";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getServicesPage().seo, canonicalPath: routes.services.index() }));
}

/**
 * Services index.
 *
 * The promise, the catalogue read practice by practice, and the invitation to
 * start one. The hero is the slab a service detail page uses, so arriving at
 * the index and arriving at one service look like the same site; the film in it
 * is the one drawn for the catalogue as a whole.
 *
 * This segment resolves the read models and hands each section its slice; no
 * copy lives here.
 */
export default function ServicesIndexPage() {
  const page = getServicesPage();
  const groups = getGroupedServices();

  return (
    <>
      <PageHero
        trail={[
          { label: "Home", href: routes.home() },
          { label: page.title },
        ]}
        eyebrow={page.title}
        heading={page.tagline}
        headingAccent={page.taglineAccent}
        intro={page.intro}
        ctas={page.ctas}
      >
        <Film
          src="/asset/services-film-swing.mp4"
          poster="/asset/services-film-poster.webp"
          fit="contain"
          className="cfg-hero-film"
          label="The services Cloud Fusion Global delivers, drawn as one system"
        />
      </PageHero>

      <ServiceGroups groups={groups} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

import { getGroupedServices, getServicesPage } from "@/modules/services";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { ServiceHero } from "@/shared/ui/sections/service-hero";
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
 * the index and arriving at one service look like the same site; its slides are
 * one frame per practice rather than one service's three.
 *
 * This segment resolves the read models and hands each section its slice; no
 * copy lives here.
 */

/**
 * One frame per practice, named here rather than borrowed from the first
 * service in each group: taking the group's lead service put the same picture
 * on the index that the detail page already opens with, so the two read as one
 * repeated image instead of a catalogue.
 */
const HERO_SLIDES = {
  "ai-intelligent-automation": {
    image: "/asset/services/generative-ai-2.webp",
    label: "AI built into the work, not bolted onto it",
  },
  "microsoft-platform": {
    image: "/asset/services/sharepoint-2.webp",
    label: "The Microsoft platform, implemented as one system",
  },
  "product-engineering": {
    image: "/asset/services/custom-software-2.webp",
    label: "Products engineered to enterprise discipline",
  },
  "modernization-operations": {
    image: "/asset/services/security-2.webp",
    label: "Migrated, secured, and kept running",
  },
};

/** @see the block above the slide table for what this page is. */
export default function ServicesIndexPage() {
  const page = getServicesPage();
  const groups = getGroupedServices();

  const slides = groups.map((group) => HERO_SLIDES[group.id]).filter(Boolean);

  return (
    <>
      <ServiceHero
        trail={[
          { label: "Home", href: routes.home() },
          { label: page.title },
        ]}
        eyebrow={page.title}
        heading={page.tagline}
        tagline={page.intro}
        ctas={page.ctas}
        slides={slides}
      />

      <ServiceGroups groups={groups} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

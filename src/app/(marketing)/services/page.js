import { getGroupedServices, getServicesPage } from "@/modules/services";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { ServicesHero, ServiceGroups } from "@/shared/ui/sections/service-groups";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getServicesPage().seo, canonicalPath: routes.services.index() }));
}

/**
 * Services index.
 *
 * The promise, the catalogue read practice by practice, and the invitation to
 * start one. This segment resolves the read models and hands each section its
 * slice; no copy lives here.
 */
export default function ServicesIndexPage() {
  const page = getServicesPage();
  const groups = getGroupedServices();

  return (
    <>
      <ServicesHero page={page} groups={groups} />
      <ServiceGroups groups={groups} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

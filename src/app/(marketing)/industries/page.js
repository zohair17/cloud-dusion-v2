import { getIndustries, getIndustriesPage } from "@/modules/industries";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { IndustriesHero } from "@/shared/ui/sections/industries-hero";
import { IndustryBento } from "@/shared/ui/sections/industry-bento";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getIndustriesPage().seo, canonicalPath: routes.industries.index() }));
}

/**
 * Industries index.
 *
 * The banner shows the set moving, the bento shows it laid out, and the page
 * ends on the same invitation the rest of the site ends on. This segment
 * resolves the read models and hands each section its slice; no copy lives here.
 */
export default function IndustriesIndexPage() {
  const page = getIndustriesPage();
  const industries = getIndustries();

  return (
    <>
      <IndustriesHero page={page} industries={industries} />

      <IndustryBento industries={industries} />

      <ClosingCta section={getClosingCta()} />
    </>
  );
}

import { getIndustryDetail, getIndustrySlugs } from "@/modules/industries";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import {
  IndustryHero,
  IndustryPressure,
  IndustryResponse,
  IndustrySolutions,
  IndustryServices,
  IndustryOutcomes,
} from "@/shared/ui/sections/industry-detail";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getIndustryDetail(slug).seo);
}

/**
 * Industry detail.
 *
 * The pressure the sector is under, what AI and Microsoft each change about it,
 * what we would build, and what it buys the business. This segment resolves the
 * aggregate and hands each section its slice; no copy lives here.
 */
export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);
  const { sections } = industry;

  return (
    <>
      <IndustryHero
        industry={industry}
        trail={[
          { label: "Home", href: routes.home() },
          { label: "Industries", href: routes.industries.index() },
          { label: industry.title },
        ]}
      />

      <IndustryPressure section={sections.challenges} items={industry.challenges} />

      <IndustryResponse
        aiSection={sections.aiImpact}
        microsoftSection={sections.microsoftEnablement}
        aiItems={industry.aiImpact}
        microsoftItems={industry.microsoftEnablement}
      />

      <IndustrySolutions section={sections.solutions} solutions={industry.solutions} />

      <IndustryServices section={sections.services} services={industry.relatedServices} />

      <IndustryOutcomes section={sections.outcomes} items={industry.outcomes} />

      <ClosingCta section={industry.closing} />
    </>
  );
}

import { getServiceDetail, getServiceSlugs } from "@/modules/services";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { resolveCtas } from "@/shared/domain/cta";
import { routes } from "@/shared/config/routes";
import { ServiceHero } from "@/shared/ui/sections/service-hero";
import { ServiceIntro } from "@/shared/ui/sections/service-intro";
import { ServiceChallenges } from "@/shared/ui/sections/service-challenges";
import { ServiceApproach } from "@/shared/ui/sections/service-approach";
import { ServiceCapabilities } from "@/shared/ui/sections/service-capabilities";
import { ServiceStack } from "@/shared/ui/sections/service-stack";
import { ServiceSolutions } from "@/shared/ui/sections/service-solutions";
import { ServiceIndustries } from "@/shared/ui/sections/service-industries";
import { ServiceDelivery } from "@/shared/ui/sections/service-delivery";
import { ServiceOutcomes } from "@/shared/ui/sections/service-outcomes";
import { ServiceWhyCfg } from "@/shared/ui/sections/service-why-cfg";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

/** All twelve service pages are prerendered from the catalogue. */
export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getServiceDetail(slug).seo);
}

/**
 * Service detail.
 *
 * One argument told in order: what the service is, what is currently wrong, how
 * we go about it, what is included, what it is built on, what it becomes, who it
 * is for, how it is delivered, what you get, and why us.
 *
 * Every section renders only if its record carries content, so the eleven
 * outline services degrade to the parts they have authored rather than showing
 * empty headings. No copy lives in this file.
 */
export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);
  const closing = service.closing
    ? {
        heading: service.closing.heading,
        body: service.closing.body,
        ctas: resolveCtas(service.closing.ctas),
      }
    : getClosingCta();

  return (
    <>
      <ServiceHero
        trail={[
          { label: "Home", href: routes.home() },
          { label: "Services", href: routes.services.index() },
          { label: service.title },
        ]}
        eyebrow="Service"
        heading={service.title}
        tagline={service.tagline}
        ctas={resolveCtas(service.ctaIntents)}
        slides={service.heroSlides}
      />

      <ServiceIntro paragraphs={service.intro} />
      <ServiceChallenges section={service.challenges} />
      <ServiceApproach section={service.approach} />
      <ServiceCapabilities section={service.capabilities} />
      <ServiceStack section={service.stack} technologies={service.technologies} />
      <ServiceSolutions section={service.sections.solutions} items={service.relatedSolutions} />
      <ServiceIndustries section={service.sections.industries} items={service.relatedIndustries} />
      <ServiceDelivery section={service.sections.delivery} />
      <ServiceOutcomes section={service.outcomes} />
      <ServiceWhyCfg section={service.sections.whyCfg} />

      <ClosingCta section={closing} />
    </>
  );
}

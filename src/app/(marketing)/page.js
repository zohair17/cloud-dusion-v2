import { getHomePage } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { Hero } from "@/shared/ui/sections/hero";
import { Clients } from "@/shared/ui/sections/clients";
import { Testimonials } from "@/shared/ui/sections/testimonials";
import { Transformation } from "@/shared/ui/sections/transformation";
import { ServicePillars } from "@/shared/ui/sections/service-pillars";
import { FeaturedSolutions } from "@/shared/ui/sections/featured-solutions";
import { TechnologyStack } from "@/shared/ui/sections/technology-stack";
import { IndustryFocus } from "@/shared/ui/sections/industry-focus";
import { Differentiators } from "@/shared/ui/sections/differentiators";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

/**
 * Home.
 *
 * The whole page is a composition: this segment resolves one read model and
 * hands each section the slice it renders. No section fetches anything, and
 * nothing here holds copy — that lives in the content layer.
 */
export function generateMetadata() {
  return buildMetadata(getHomePage().seo);
}

export default function HomePage() {
  const home = getHomePage();

  return (
    <>
      <Hero hero={home.hero} />
      <Transformation section={home.transformationFramework} />
      <ServicePillars section={home.servicePillars} />
      <FeaturedSolutions section={home.featuredSolutions} />
      <TechnologyStack section={home.technologyStack} />
      <IndustryFocus section={home.industryFocus} />
      <Differentiators section={home.differentiators} />
      <Clients section={home.clients} />
      <Testimonials section={home.testimonials} />
      <ClosingCta section={home.closingCta} />
    </>
  );
}

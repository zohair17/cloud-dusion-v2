import { getSolutionDetail, getSolutionSlugs } from "@/modules/solutions";
import { buildMetadata } from "@/shared/lib/metadata";
import { routes } from "@/shared/config/routes";
import {
  SolutionHero,
  SolutionProblem,
  SolutionOverview,
  SolutionHowItWorks,
  SolutionCapabilities,
  SolutionAi,
  SolutionArchitecture,
  SolutionStack,
  SolutionOutcomes,
  SolutionCrossLinks,
} from "@/shared/ui/sections/solution-detail";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getSolutionDetail(slug).seo);
}

/**
 * Solution detail.
 *
 * The case for building it, the mechanism, the spec, and where it sits in the
 * rest of the catalogue. Sections that a solution does not document simply do
 * not render: only two of the twenty-seven carry an architecture, and the page
 * closes up around the gap rather than leaving an empty heading.
 *
 * This segment resolves the aggregate and hands each section its slice; no copy
 * lives here.
 */
export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);
  const { sections } = solution;

  return (
    <>
      <SolutionHero
        solution={solution}
        trail={[
          { label: "Home", href: routes.home() },
          { label: "Solutions", href: routes.solutions.index() },
          { label: solution.title },
        ]}
      />

      <SolutionProblem problem={solution.problem} challenges={solution.businessChallenges} />

      <SolutionOverview paragraphs={solution.overview} />

      <SolutionHowItWorks section={solution.howItWorks} />

      <SolutionCapabilities section={sections.capabilities} items={solution.capabilities} />

      <SolutionAi section={solution.aiCapabilities} />

      <SolutionArchitecture section={solution.architecture} />

      <SolutionStack section={sections.technologies} technologies={solution.technologies} />

      <SolutionOutcomes
        benefits={sections.benefits}
        useCases={sections.useCases}
        benefitItems={solution.benefits}
        useCaseItems={solution.useCases}
      />

      <SolutionCrossLinks
        sections={sections}
        industries={solution.industries}
        services={solution.relatedServices}
        solutions={solution.relatedSolutions}
      />

      <ClosingCta section={solution.closing} />
    </>
  );
}

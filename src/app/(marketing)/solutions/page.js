import { getCategorizedSolutions, getSolutionsPage } from "@/modules/solutions";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { SolutionsHero, SolutionRails } from "@/shared/ui/sections/solutions-index";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getSolutionsPage().seo, canonicalPath: routes.solutions.index() }));
}

/**
 * Solutions index.
 *
 * The promise as a schematic, the catalogue as one rail per practice, and the
 * invitation to start one. Category sections carry the anchor ids the footer
 * deep-links to. This segment resolves the read models and hands each section
 * its slice; no copy lives here.
 */
export default function SolutionsIndexPage() {
  const page = getSolutionsPage();
  const categories = getCategorizedSolutions();

  return (
    <>
      <SolutionsHero page={page} categories={categories} />
      <SolutionRails categories={categories} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

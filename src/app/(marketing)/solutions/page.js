import { getCategorizedSolutions, getSolutionsPage } from "@/modules/solutions";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { SolutionHero } from "@/shared/ui/sections/solution-detail";
import { SolutionRails } from "@/shared/ui/sections/solutions-index";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getSolutionsPage().seo, canonicalPath: routes.solutions.index() }));
}

/**
 * Solutions index.
 *
 * The promise, the catalogue as one rail per practice, and the invitation to
 * start one. The hero is the slab a solution detail page uses, so the index and
 * the thing it indexes read as one site: the index is composed into the shape
 * that hero reads. Category sections keep the anchor ids the footer deep-links
 * to.
 *
 * This segment resolves the read models and hands each section its slice; no
 * copy lives here.
 */
export default function SolutionsIndexPage() {
  const page = getSolutionsPage();
  const categories = getCategorizedSolutions();

  /** The index, shaped as the one solution the hero was written for. */
  const hero = {
    title: page.tagline,
    tagline: null,
    summary: page.intro,
    image: categories.flatMap((c) => c.solutions).find((s) => s.image)?.image ?? null,
    category: { title: page.title },
    ctas: page.ctas,
  };

  return (
    <>
      <SolutionHero
        solution={hero}
        trail={[
          { label: "Home", href: routes.home() },
          { label: page.title },
        ]}
      />

      <SolutionRails categories={categories} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

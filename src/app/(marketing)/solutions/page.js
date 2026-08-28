import { getCategorizedSolutions, getSolutionsPage } from "@/modules/solutions";
import { getClosingCta } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";
import { PageHero } from "@/shared/ui/sections/page-hero";
import { Film } from "@/shared/ui/sections/film";
import { SolutionRails } from "@/shared/ui/sections/solutions-index";
import { ClosingCta } from "@/shared/ui/sections/closing-cta";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getSolutionsPage().seo, canonicalPath: routes.solutions.index() }));
}

/**
 * Solutions index.
 *
 * The promise, the catalogue as one rail per practice, and the invitation to
 * start one. The hero is the slab every index page uses, so the catalogue pages
 * read as one set. Category sections keep the anchor ids the footer deep-links
 * to.
 *
 * This segment resolves the read models and hands each section its slice; no
 * copy lives here.
 */
export default function SolutionsIndexPage() {
  const page = getSolutionsPage();
  const categories = getCategorizedSolutions();

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
          src="/asset/solutions-film-swing.mp4"
          poster="/asset/solutions-film-poster.webp"
          fit="contain"
          className="cfg-hero-film"
          label="The solutions Cloud Fusion Global builds, drawn as one system"
        />
      </PageHero>

      <SolutionRails categories={categories} />
      <ClosingCta section={getClosingCta()} />
    </>
  );
}

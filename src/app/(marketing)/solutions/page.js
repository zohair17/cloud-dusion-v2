import { getCategorizedSolutions, getSolutionsPage } from "@/modules/solutions";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getSolutionsPage().seo, canonicalPath: routes.solutions.index() }));
}

/** Category sections carry the anchor ids the footer deep-links to. */
export default function SolutionsIndexPage() {
  const page = getSolutionsPage();
  const categories = getCategorizedSolutions();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.tagline}</p>
      {categories.map((category) => (
        <section key={category.id} id={category.anchor}>
          <h2>{category.title}</h2>
          <p>{category.count} solutions</p>
          <ul>
            {category.solutions.map((solution) => (
              <li key={solution.slug}>{solution.title}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

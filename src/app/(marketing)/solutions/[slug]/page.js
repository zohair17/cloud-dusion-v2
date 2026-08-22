import { getSolutionDetail, getSolutionSlugs } from "@/modules/solutions";
import { buildMetadata } from "@/shared/lib/metadata";

export function generateStaticParams() {
  return getSolutionSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getSolutionDetail(slug).seo);
}

export default async function SolutionDetailPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionDetail(slug);

  return (
    <>
      <h1>{solution.title}</h1>
      {solution.tagline ? <p>{solution.tagline}</p> : null}
      <p>{solution.category.title}</p>
      <section aria-label="Capabilities">
        <ul>
          {solution.capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </section>
      <section aria-label="Industries served">
        <ul>
          {solution.industries.map((industry) => (
            <li key={industry.slug}>{industry.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

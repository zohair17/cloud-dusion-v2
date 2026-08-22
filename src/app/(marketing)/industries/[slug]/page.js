import { getIndustryDetail, getIndustrySlugs } from "@/modules/industries";
import { buildMetadata } from "@/shared/lib/metadata";

export function generateStaticParams() {
  return getIndustrySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getIndustryDetail(slug).seo);
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryDetail(slug);

  return (
    <>
      <h1>{industry.title}</h1>
      {industry.tagline ? <p>{industry.tagline}</p> : null}
      <section aria-label="Solutions for this industry">
        <ul>
          {industry.solutions.map((solution) => (
            <li key={solution.slug}>{solution.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

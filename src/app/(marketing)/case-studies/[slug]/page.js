import { getCaseStudyDetail, getCaseStudySlugs } from "@/modules/case-studies";
import { buildMetadata } from "@/shared/lib/metadata";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getCaseStudyDetail(slug).seo);
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyDetail(slug);

  return (
    <>
      <h1>{caseStudy.title}</h1>
      <p>{caseStudy.client}</p>
      <section aria-label="Outcomes">
        <ul>
          {caseStudy.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section aria-label="Related services">
        <ul>
          {caseStudy.relatedServices.map((service) => (
            <li key={service.slug}>{service.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

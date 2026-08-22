import { getCaseStudies, getCaseStudiesPage } from "@/modules/case-studies";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getCaseStudiesPage().seo, canonicalPath: routes.caseStudies.index() }));
}

export default function CaseStudiesIndexPage() {
  const page = getCaseStudiesPage();
  const caseStudies = getCaseStudies();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.tagline}</p>
      <ul>
        {caseStudies.map((caseStudy) => (
          <li key={caseStudy.slug}>
            {caseStudy.sectorLabel} — {caseStudy.title}
          </li>
        ))}
      </ul>
    </>
  );
}

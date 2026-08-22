import { getIndustries, getIndustriesPage } from "@/modules/industries";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getIndustriesPage().seo, canonicalPath: routes.industries.index() }));
}

export default function IndustriesIndexPage() {
  const page = getIndustriesPage();
  const industries = getIndustries();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.tagline}</p>
      <ul>
        {industries.map((industry) => (
          <li key={industry.slug}>{industry.title}</li>
        ))}
      </ul>
    </>
  );
}

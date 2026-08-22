import { getGroupedServices, getServicesPage } from "@/modules/services";
import { buildMetadata } from "@/shared/lib/metadata";
import { createSeoMeta } from "@/shared/domain/seo";
import { routes } from "@/shared/config/routes";

export function generateMetadata() {
  return buildMetadata(createSeoMeta({ ...getServicesPage().seo, canonicalPath: routes.services.index() }));
}

export default function ServicesIndexPage() {
  const page = getServicesPage();
  const groups = getGroupedServices();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.tagline}</p>
      {groups.map((group) => (
        <section key={group.id}>
          <h2>{group.title}</h2>
          <ul>
            {group.services.map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}

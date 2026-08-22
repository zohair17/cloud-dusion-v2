import { getServiceDetail, getServiceSlugs } from "@/modules/services";
import { buildMetadata } from "@/shared/lib/metadata";

/** All twelve service pages are prerendered from the catalogue. */
export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return buildMetadata(getServiceDetail(slug).seo);
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceDetail(slug);

  return (
    <>
      <h1>{service.title}</h1>
      {service.tagline ? <p>{service.tagline}</p> : null}
      <p>{service.group.title}</p>
      <section aria-label="Capabilities">
        <ul>
          {(service.capabilities?.items ?? []).map((capability) => (
            <li key={capability.title}>{capability.title}</li>
          ))}
        </ul>
      </section>
      <section aria-label="Technologies">
        <ul>
          {service.technologies.map((technology) => (
            <li key={technology.id}>{technology.label}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

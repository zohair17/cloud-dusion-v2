import { getContactPage } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";

export function generateMetadata() {
  return buildMetadata(getContactPage().seo);
}

/**
 * Contact. The form is a client component the UI phase will add under
 * shared/ui; it receives `page.form` as props and posts to
 * `submitInquiryAction` from @/modules/inquiries/actions.
 */
export default function ContactPage() {
  const page = getContactPage();

  return (
    <>
      <h1>{page.title}</h1>
      <p>{page.intro}</p>
      <dl>
        {page.facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
      <section aria-label="Inquiry form">
        <p>{page.form.serviceOptions.length} services selectable</p>
        <p>{page.form.projectTypeOptions.length} project types</p>
        <p>{page.form.budgetRangeOptions.length} budget ranges</p>
      </section>
      <p>{page.privacyNote}</p>
    </>
  );
}

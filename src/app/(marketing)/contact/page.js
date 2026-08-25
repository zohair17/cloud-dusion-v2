import { getContactPage } from "@/modules/company";
import { buildMetadata } from "@/shared/lib/metadata";
import { ContactHero } from "@/shared/ui/sections/contact-hero";
import { ContactForm } from "@/shared/ui/sections/contact-form";

export function generateMetadata() {
  return buildMetadata(getContactPage().seo);
}

/**
 * Contact.
 *
 * Two beats: the invitation, then the brief. The read model already joins the
 * company's copy to the inquiries context's form definition, so this segment
 * resolves once and hands both sections the same aggregate. No copy lives here.
 */
export default function ContactPage() {
  const page = getContactPage();

  return (
    <>
      <ContactHero page={page} image="/asset/company/contact-hero.webp" />
      <ContactForm page={page} />
    </>
  );
}

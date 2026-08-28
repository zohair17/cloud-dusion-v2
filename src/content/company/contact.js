/**
 * Contact page copy.
 *
 * Page *copy* lives here. The form's field list and option vocabularies are not
 * copy: they are the inquiry domain's language and live in
 * `src/modules/inquiries/domain/`.
 */

/** @type {import("@/modules/company/domain/contact-page.schema").ContactPageRecord} */
export const contactPage = {
  title: "Contact",
  tagline: "Start a conversation",
  status: "published",

  intro:
    "Tell us about your initiative: an AI ambition, a migration, a product build, or a team you need to scale. We'll come back with a point of view, not a sales script.",

  facts: [
    { label: "Email", value: "Business@cloudfusionglobal.com", kind: "email" },
    { label: "Delivery", value: "Global delivery capability", kind: "text" },
    { label: "Response", value: "We reply to every serious inquiry", kind: "text" },
  ],

  privacyNote: "Your information is used only to respond to your inquiry. No newsletters, no lists, no sharing.",

  formSubmitLabel: "Start a Conversation",

  seo: {
    title: "Contact",
    description:
      "Tell us about your initiative: an AI ambition, a migration, a product build, or a team you need to scale.",
  },
};

export default contactPage;

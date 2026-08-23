/**
 * Index page copy for this bounded context.
 *
 * The heading, standfirst and page-level CTA of a listing page are content, not
 * template. Route segments read this record; they never inline copy.
 */

/** @type {import("@/modules/insights/domain/article.schema").IndexPageRecord} */
export const insightsPage = {
  title: "Insights",
  /* Split where the line breaks: the second half is the half set in brand. */
  tagline: "Thinking on the",
  taglineAccent: "intelligent enterprise",
  intro: "Practical perspectives from the CFG team on AI, the Microsoft ecosystem, and enterprise transformation — grounded in delivery, not hype.",
  comingSoonLabel: "Full article coming soon",
  closingCta: {
    heading: "Want these conversations directly?",
    body: "The best insights happen in working sessions. Bring your questions about AI, Microsoft, or transformation — we'll bring the delivery experience.",
    /* The intent is the standard one; only the wording is specific to this page. */
    ctas: [
      { intent: "talk-to-expert", label: "Start a Conversation" }
    ]
  },
  seo: {
    title: "Insights",
    description: "Practical perspectives from the CFG team on AI, the Microsoft ecosystem, and enterprise transformation."
  }
};

export default insightsPage;

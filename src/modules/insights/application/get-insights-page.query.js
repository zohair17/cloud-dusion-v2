import { articleRepository } from "../infrastructure/article.repository";
import { resolveCtas } from "@/shared/domain/cta";

/** Read model for /insights. Intents become renderable calls to action here. */
export function getInsightsPage() {
  const page = articleRepository.getIndexPage();
  return {
    ...page,
    closingCta: { ...page.closingCta, ctas: resolveCtas(page.closingCta.ctas) },
  };
}

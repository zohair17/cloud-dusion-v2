import { caseStudyRepository } from "../infrastructure/case-study.repository";
import { resolveCtas } from "@/shared/domain/cta";

/** Read model for /case-studies. Intents become renderable calls to action here. */
export function getCaseStudiesPage() {
  const page = caseStudyRepository.getIndexPage();
  return { ...page, ctas: resolveCtas(page.ctas) };
}

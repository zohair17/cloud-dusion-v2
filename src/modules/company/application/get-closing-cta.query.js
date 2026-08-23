import { companyRepository } from "../infrastructure/company.repository";
import { resolveCtas } from "@/shared/domain/cta";

/**
 * The company's closing invitation.
 *
 * It is the same statement wherever it appears, so it is authored once and read
 * from here rather than re-typed per page — a page that ends on it composes
 * this query, not the homepage read model.
 */
export function getClosingCta() {
  const { closingCta } = companyRepository.getHomePage();
  return { ...closingCta, ctas: resolveCtas(closingCta.ctas) };
}

import { assertValid } from "@/shared/lib/validation";
import { buildInquirySchema } from "./inquiry.schema";

/**
 * Inquiry aggregate.
 *
 * Creating an Inquiry validates it; an invalid Inquiry cannot exist. The entity
 * also stamps the fields the business needs but the submitter does not provide.
 */
export function createInquiry(input, { serviceSlugs = [], submittedAt = new Date() } = {}) {
  const cleaned = {
    name: trim(input.name),
    company: trim(input.company),
    email: trim(input.email).toLowerCase(),
    phone: trim(input.phone) || null,
    country: trim(input.country),
    serviceOfInterest: trim(input.serviceOfInterest) || null,
    projectType: trim(input.projectType) || null,
    budgetRange: trim(input.budgetRange) || null,
    message: trim(input.message),
  };

  assertValid(cleaned, buildInquirySchema({ serviceSlugs }));

  return Object.freeze({
    ...cleaned,
    submittedAt: submittedAt.toISOString(),
  });
}

function trim(value) {
  return typeof value === "string" ? value.trim() : "";
}

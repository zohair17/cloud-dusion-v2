/** Inquiries bounded context — public API. The only write-side context. */
export { getInquiryFormSchema } from "./application/get-inquiry-form-schema.query";
export { submitInquiry } from "./application/submit-inquiry.use-case";
export { PROJECT_TYPES, BUDGET_RANGES } from "./domain/inquiry-vocabulary";
export { buildInquirySchema, REQUIRED_FIELDS } from "./domain/inquiry.schema";

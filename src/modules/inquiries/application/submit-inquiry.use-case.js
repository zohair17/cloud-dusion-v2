import { createInquiry } from "../domain/inquiry.entity";
import { ValidationError } from "@/shared/domain/errors";
import { ok, err } from "@/shared/domain/result";
import { getServiceSlugs } from "@/modules/services";

/**
 * Submit an inquiry.
 *
 * The use case owns the workflow and nothing else: validate, deliver, report.
 * The notifier arrives as a dependency so this is testable without a transport.
 */
export async function submitInquiry(input, { notifier }) {
  let inquiry;

  try {
    inquiry = createInquiry(input, { serviceSlugs: getServiceSlugs() });
  } catch (error) {
    if (error instanceof ValidationError) return err({ code: error.code, issues: error.issues });
    throw error;
  }

  const delivery = await notifier.notify(inquiry);
  if (!delivery.delivered) {
    return err({ code: "DELIVERY_FAILED", reason: delivery.reason ?? null });
  }

  return ok({ reference: delivery.reference, submittedAt: inquiry.submittedAt });
}

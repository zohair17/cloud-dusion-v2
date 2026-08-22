"use server";

import { submitInquiry } from "./application/submit-inquiry.use-case";
import { consoleInquiryNotifier } from "./infrastructure/console-inquiry-notifier";

/**
 * Server Action boundary for the contact form.
 *
 * Composition happens here: the adapter is chosen at the edge and injected into
 * the use case. Validation runs server-side regardless of what the client did,
 * because a server action is reachable by direct POST.
 */
export async function submitInquiryAction(_previousState, formData) {
  const input = Object.fromEntries(formData.entries());
  const result = await submitInquiry(input, { notifier: consoleInquiryNotifier });

  return result.ok
    ? { status: "success", reference: result.value.reference, issues: [] }
    : { status: "error", issues: result.error.issues ?? [], code: result.error.code };
}

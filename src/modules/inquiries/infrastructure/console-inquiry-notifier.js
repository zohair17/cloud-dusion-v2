import { NOTIFIER_NOT_CONFIGURED } from "./inquiry-notifier.port";

/**
 * Development adapter. Logs the inquiry instead of delivering it.
 *
 * Replace at composition time with a real adapter (Microsoft Graph sendMail,
 * Dataverse, a CRM webhook) without touching the use case. Deliberately fails
 * loudly in production so an unconfigured form cannot silently drop leads.
 */
export const consoleInquiryNotifier = {
  async notify(inquiry) {
    if (process.env.NODE_ENV === "production") {
      return { delivered: false, reference: null, reason: NOTIFIER_NOT_CONFIGURED };
    }
    console.info("[inquiry] received", inquiry);
    return { delivered: true, reference: `dev-${Date.now()}` };
  },
};

/**
 * Outbound port for inquiry delivery.
 *
 * The application layer depends on this shape, never on a mail vendor. Swapping
 * transport is an adapter change; the use case does not move.
 *
 * @typedef {object} InquiryNotifier
 * @property {(inquiry: object) => Promise<{ delivered: boolean, reference: string? }>} notify
 */

export const NOTIFIER_NOT_CONFIGURED = "NOTIFIER_NOT_CONFIGURED";

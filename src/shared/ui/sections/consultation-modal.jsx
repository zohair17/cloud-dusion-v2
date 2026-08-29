"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { submitInquiryAction } from "@/modules/inquiries/actions";
import { siteConfig } from "@/shared/config/site.config";
import { cn } from "../primitives/cn";

const EASE = [0.22, 1, 0.36, 1];

/**
 * The two things this dialog is asked to be.
 *
 * A consultation and an inquiry want the same three answers, so they are one
 * dialog with two sets of words rather than two forms with one set of bugs.
 */
const COPY = {
  consultation: {
    title: "Book a free consultation",
    intro:
      "Thirty minutes with an architect, not a salesperson. Tell us what you are trying to do and we will come back with how we would approach it.",
    prompt: "What would you like to talk about?",
    submit: "Request the call",
    source: "consultation-modal",
  },
  inquiry: {
    title: "Send an inquiry",
    intro:
      "Tell us what you are trying to move. The more you can say about the outcome, the more useful our first reply will be.",
    prompt: "What can we help with?",
    submit: "Send the inquiry",
    source: "inquiry-modal",
  },
};

/**
 * Book a consultation, without leaving the page.
 *
 * The hero's first call to action used to send the reader to /contact, which
 * is a page away from the sentence that persuaded them. This asks for the few
 * things a first reply actually needs and posts to the same inquiry endpoint
 * the contact page uses, so there is one intake and one record.
 *
 * The dialog is deliberately small: name, email, and what they want to talk
 * about. Everything else is a question for the call itself.
 */
export function ConsultationModal({ open, onClose, variant = "consultation" }) {
  const copy = COPY[variant] ?? COPY.consultation;
  const [state, setState] = useState("idle");
  const [issues, setIssues] = useState({});

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  async function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const next = {};
    if (!data.name?.trim()) next.name = "Tell us who you are.";
    if (!/^\S+@\S+\.\S+$/.test(data.email ?? "")) next.email = "We need an address that works.";
    setIssues(next);
    if (Object.keys(next).length) return;

    setState("sending");
    const payload = new FormData();
    for (const [key, value] of Object.entries(data)) payload.set(key, value);
    payload.set("source", copy.source);

    try {
      await submitInquiryAction({}, payload);
    } catch {
      /* The reply matters more than the transport: the address is on the page. */
    }
    setState("sent");
  }

  const modal = (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-[rgb(11_11_42/0.45)] p-4 backdrop-blur-md sm:items-center"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={copy.title}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={(event) => event.stopPropagation()}
            className="relative my-auto w-full max-w-lg overflow-hidden rounded-[1.5rem] bg-white shadow-[0_50px_120px_-40px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.06]"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-brand-600/[0.10] blur-3xl"
            />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative px-6 pb-7 pt-8 sm:px-9 sm:pb-9 sm:pt-10">
              {state === "sent" ? (
                <div className="py-6 text-center">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Check className="h-6 w-6" strokeWidth={2.6} />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Thanks, that is with us
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                    We read every one of these ourselves. Expect a reply with a point of view, not a
                    sales script.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-7 rounded-pill bg-brand-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <span aria-hidden="true" className="block h-[3px] w-12 rounded-full bg-brand-600" />
                  <h2 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-balance text-foreground sm:text-2xl">
                    {copy.title}
                  </h2>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                    {copy.intro}
                  </p>

                  <form onSubmit={onSubmit} noValidate className="mt-7 space-y-4">
                    <ModalField name="name" label="Name" issue={issues.name} autoComplete="name" />
                    <ModalField
                      name="email"
                      label="Work email"
                      type="email"
                      issue={issues.email}
                      autoComplete="email"
                    />
                    <ModalField name="company" label="Company" optional autoComplete="organization" />
                    <ModalField
                      name="message"
                      label={copy.prompt}
                      optional
                      textarea
                    />

                    <button
                      type="submit"
                      disabled={state === "sending"}
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-pill bg-brand-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700 disabled:opacity-60"
                    >
                      {state === "sending" ? "Sending" : copy.submit}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>

                    <p className="text-center text-xs leading-relaxed text-faint">
                      Or write to{" "}
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-brand-600 underline-offset-4 hover:underline"
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );

  return typeof document === "undefined" ? null : createPortal(modal, document.body);
}

function ModalField({ name, label, type = "text", issue, optional, textarea, autoComplete }) {
  const Tag = textarea ? "textarea" : "input";

  return (
    <label className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-[0.8125rem] font-medium text-foreground">
        {label}
        {optional ? <span className="text-xs font-normal text-faint">Optional</span> : null}
      </span>
      <Tag
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 3 : undefined}
        autoComplete={autoComplete}
        aria-invalid={issue ? "true" : undefined}
        className={cn(
          "w-full rounded-[0.9rem] border bg-white px-4 py-2.5 text-[0.9375rem] text-foreground outline-none transition-colors placeholder:text-faint focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20",
          issue ? "border-red-400" : "border-border"
        )}
      />
      {issue ? <span className="mt-1.5 block text-xs text-red-600">{issue}</span> : null}
    </label>
  );
}

export default ConsultationModal;

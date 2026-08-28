"use client";

import { useActionState, useId, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, Loader2, ShieldCheck } from "lucide-react";
import { submitInquiryAction } from "@/modules/inquiries/actions";
import { Container } from "../primitives/container";
import { cn } from "../primitives/cn";

/**
 * The inquiry form.
 *
 * Every field is a labelled well rather than a boxed input: the label lives
 * inside the field and shrinks out of the way, so a nine-field form reads as
 * one surface instead of nine rectangles. Focus is drawn by the brand, not by
 * a browser outline, and the whole panel lifts a little while it is being
 * filled in.
 *
 * The server action is the only validator that matters, so its issues are what
 * the fields display; nothing here re-implements the rules. On success the form
 * is replaced by its own receipt rather than cleared, because a form that
 * empties itself looks like a form that failed.
 */
const EASE = [0.22, 1, 0.36, 1];

const INITIAL = { status: "idle", issues: [] };

export function ContactForm({ page }) {
  const reduced = useReducedMotion();
  const [state, action, pending] = useActionState(submitInquiryAction, INITIAL);
  const { form } = page;

  const issues = useMemo(
    () => Object.fromEntries((state.issues ?? []).map((issue) => [issue.field, issue.message])),
    [state.issues],
  );

  const required = new Set(form.requiredFields);
  const succeeded = state.status === "success";

  return (
    <section id="inquiry" className="section-y scroll-mt-28">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          {/* What the reader gets for filling it in. */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
              The brief
            </p>

            <h2 className="mt-5 font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight sm:leading-[1.14] text-balance sm:text-4xl">
              Tell us what you are trying to move
            </h2>

            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              The more you can say about the outcome, the more useful our first reply will be. Every field
              beyond the essentials is optional.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-white/70 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-[0.8125rem] leading-relaxed text-muted">{page.privacyNote}</p>
            </div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_34px_90px_-58px_rgb(21_21_28/0.5)] ring-1 ring-black/[0.06] sm:p-9"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,rgb(53_51_205/0.5),transparent)]"
            />

            <AnimatePresence mode="wait" initial={false}>
              {succeeded ? (
                <motion.div
                  key="receipt"
                  initial={reduced ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                >
                  <motion.span
                    initial={reduced ? false : { scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100"
                  >
                    <Check className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
                  </motion.span>

                  <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight text-foreground">
                    That reached us
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
                    A senior member of the team reads every inquiry. You will hear back with a point of
                    view, not an auto-responder.
                  </p>
                  {state.reference ? (
                    <p className="mt-6 rounded-pill bg-surface px-4 py-1.5 font-display text-xs font-semibold tracking-[0.08em] text-muted">
                      REF {state.reference}
                    </p>
                  ) : null}
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  action={action}
                  initial={false}
                  exit={{ opacity: 0 }}
                  className="grid gap-4 sm:grid-cols-2"
                  noValidate
                >
                  <Field name="name" label="Name" required={required.has("name")} issue={issues.name} />
                  <Field name="company" label="Company" required={required.has("company")} issue={issues.company} />
                  <Field name="email" label="Email" type="email" required={required.has("email")} issue={issues.email} />
                  <Field name="phone" label="Phone" type="tel" issue={issues.phone} />
                  <Field
                    name="country"
                    label="Country"
                    required={required.has("country")}
                    issue={issues.country}
                    className="sm:col-span-2"
                  />

                  <Select
                    name="serviceOfInterest"
                    label="Service of interest"
                    placeholder={form.placeholders.serviceOfInterest}
                    options={form.serviceOptions}
                    issue={issues.serviceOfInterest}
                    className="sm:col-span-2"
                  />
                  <Field
                    name="message"
                    label="Message"
                    required={required.has("message")}
                    issue={issues.message}
                    textarea
                    className="sm:col-span-2"
                  />

                  {state.status === "error" && !state.issues?.length ? (
                    <p className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-[0.8125rem] text-red-700">
                      Something went wrong on our side. Please try again, or email us directly.
                    </p>
                  ) : null}

                  <div className="mt-2 flex flex-wrap items-center gap-4 sm:col-span-2">
                    <button
                      type="submit"
                      disabled={pending}
                      className={cn(
                        "group inline-flex items-center gap-3 rounded-pill bg-brand-600 py-3.5 pl-7 pr-2.5 text-base font-medium text-white",
                        "shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700",
                        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600",
                        "disabled:cursor-not-allowed disabled:opacity-70",
                      )}
                    >
                      {pending ? "Sending" : page.formSubmitLabel}
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600 sm:h-8 sm:w-8">
                        {pending ? (
                          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        )}
                      </span>
                    </button>

                    <p className="text-xs text-faint">Fields marked with an asterisk are required.</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/**
 * A labelled well.
 *
 * The label is the placeholder until the field has something in it, then it
 * shrinks to a caption — so the form reads as prose while it is empty and stays
 * self-describing once it is not.
 */
function Field({ name, label, type = "text", required = false, issue, textarea = false, className }) {
  const id = useId();
  const [filled, setFilled] = useState(false);
  const [focused, setFocused] = useState(false);
  const lifted = filled || focused;

  const Tag = textarea ? "textarea" : "input";

  return (
    <div className={className}>
      <div
        className={cn(
          "relative rounded-2xl bg-surface transition-all duration-300",
          "ring-1 ring-inset",
          issue ? "ring-red-300" : focused ? "bg-white ring-2 ring-brand-600" : "ring-black/[0.07] hover:ring-black/[0.14]",
        )}
      >
        <label
          htmlFor={id}
          className={cn(
            "pointer-events-none absolute left-4 origin-left text-muted transition-all duration-250",
            lifted
              ? "top-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-600"
              : "top-4 text-[0.9375rem]",
          )}
        >
          {label}
          {required ? <span aria-hidden="true">*</span> : null}
        </label>

        <Tag
          id={id}
          name={name}
          type={textarea ? undefined : type}
          rows={textarea ? 5 : undefined}
          required={required}
          aria-invalid={issue ? "true" : undefined}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            setFocused(false);
            setFilled(event.target.value.trim() !== "");
          }}
          onChange={(event) => setFilled(event.target.value.trim() !== "")}
          className={cn(
            "w-full resize-none bg-transparent px-4 pb-3 text-[0.9375rem] text-foreground outline-none",
            textarea ? "pt-8" : "pt-7",
          )}
        />
      </div>

      <FieldIssue issue={issue} />
    </div>
  );
}

/** A select in the same well, with the native arrow replaced. */
function Select({ name, label, placeholder, options, issue, className }) {
  const id = useId();
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={className}>
      <div
        className={cn(
          "relative rounded-2xl bg-surface transition-all duration-300 ring-1 ring-inset",
          issue ? "ring-red-300" : focused ? "bg-white ring-2 ring-brand-600" : "ring-black/[0.07] hover:ring-black/[0.14]",
        )}
      >
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-4 top-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-brand-600"
        >
          {label}
        </label>

        <select
          id={id}
          name={name}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={issue ? "true" : undefined}
          className={cn(
            "w-full appearance-none bg-transparent px-4 pb-3 pt-7 text-[0.9375rem] outline-none",
            value ? "text-foreground" : "text-faint",
          )}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id} className="text-foreground">
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          aria-hidden="true"
        />
      </div>

      <FieldIssue issue={issue} />
    </div>
  );
}

/** The one place a rejected field says why. */
function FieldIssue({ issue }) {
  return (
    <AnimatePresence initial={false}>
      {issue ? (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.28, ease: EASE }}
          className="overflow-hidden px-4 text-[0.75rem] text-red-600"
        >
          <span className="block pt-1.5">{issue}</span>
        </motion.p>
      ) : null}
    </AnimatePresence>
  );
}

export default ContactForm;

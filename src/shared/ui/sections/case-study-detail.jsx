"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Quote, Sparkles, TriangleAlert } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";

/**
 * The case study detail page, section by section.
 *
 * A case study is a piece of evidence, so the page is laid out as one: who it
 * was for, what was wrong, what was built, what changed, and the client saying
 * so in their own words. The opening plate and the customer card follow the
 * approved design exactly; the beats after them are of a piece with it, one
 * white card per beat with the brand doing the lighting and nothing painting a
 * background of its own.
 *
 * Every section returns null when its slice of the record is empty, so a study
 * that was never given a testimonial renders no testimonial rather than an
 * empty frame with a label on it.
 */
const EASE = [0.22, 1, 0.36, 1];

function Rise({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** The centred head the reference uses: a word, then the brand's half of it. */
function Head({ lead, accent, align = "center", override }) {
  /* A document that names its own section wins: the two halves are only a
     typographic device, so an override is set whole and left unsplit. */
  if (override) {
    return (
      <h2
        className={`font-display text-[1.35rem] font-semibold tracking-tight text-balance text-foreground sm:text-[2.1rem] ${
          align === "left" ? "text-left" : "text-center"
        }`}
      >
        {override}
      </h2>
    );
  }

  return (
    <h2
      className={`font-display text-[1.35rem] font-semibold tracking-tight text-balance text-foreground sm:text-[2.1rem] ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      {lead} {accent ? <span className="text-brand-600">{accent}</span> : null}
    </h2>
  );
}

/* -------------------------------------------------------------------- hero */

/**
 * The opening plate: the picture, the title, the summary, and the three facts
 * a reader scans for before they decide to read the rest.
 */
export function CaseStudyHero({ caseStudy, trail = [] }) {
  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-faint">
            {trail.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-brand-600">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-muted">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        ) : null}

        <div className="overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-[0_36px_92px_-58px_rgb(53_51_205/0.5)] ring-1 ring-black/[0.06] sm:rounded-[2.5rem] sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
            {caseStudy.image ? (
              <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-surface">
                <Image
                  src={caseStudy.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="object-cover"
                />
              </span>
            ) : null}

            <div className="px-1 pb-2 sm:px-2 lg:py-4 lg:pr-6">
              <h1 className="font-display text-[1.375rem] font-semibold leading-[1.18] tracking-tight text-balance text-foreground sm:text-[2rem]">
                <RevealText>{caseStudy.titleLead ?? caseStudy.title}</RevealText>{" "}
                {caseStudy.titleAccent ? (
                  <RevealText
                    className="text-brand-600"
                    delay={(caseStudy.titleLead ?? caseStudy.title).split(" ").length * 0.055}
                  >
                    {caseStudy.titleAccent}
                  </RevealText>
                ) : null}
              </h1>

              {caseStudy.subtitle ? (
                <p className="mt-3 font-display text-[1rem] font-medium leading-snug text-brand-700 sm:text-[1.125rem]">
                  {caseStudy.subtitle}
                </p>
              ) : null}

              {caseStudy.summary ? (
                <>
                  <h2 className="mt-6 font-display text-lg font-semibold tracking-tight text-foreground">
                    Summary
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-[1.7] text-muted">{caseStudy.summary}</p>
                </>
              ) : null}

              {/*
                Columns rather than a grid: the facts are of very different
                heights, and a grid row is as tall as its tallest cell, which
                left a hole under Industry wide enough to read as a mistake.
              */}
              <dl className="mt-7 gap-x-6 [column-gap:1.5rem] sm:columns-2 lg:columns-3">
                {caseStudy.sectorLabel ? (
                  <Fact label="Industry">{caseStudy.sectorLabel}</Fact>
                ) : null}

                {caseStudy.technologies?.length ? (
                  <Fact label="Technologies">
                    {caseStudy.technologies.map((technology) => technology.label).join(", ")}
                  </Fact>
                ) : null}

                {caseStudy.businessGains?.length ? (
                  <Fact label="Business Gains">
                    {caseStudy.businessGains.map((gain) => (
                      <span key={gain} className="block">
                        {gain}
                      </span>
                    ))}

                    {/* Some of these are projections rather than measurements,
                        and the document says so, so the page says so too. */}
                    {caseStudy.businessGainsNote ? (
                      <span className="mt-2 block text-[0.75rem] italic text-faint">
                        {caseStudy.businessGainsNote}
                      </span>
                    ) : null}
                  </Fact>
                ) : null}

                {caseStudy.partner ? (
                  <Fact label="Engagement Partner">{caseStudy.partner}</Fact>
                ) : null}

                {caseStudy.deliveryPartner ? (
                  <Fact label="Delivery & Technology Partner">{caseStudy.deliveryPartner}</Fact>
                ) : null}

                {caseStudy.engagement ? <Fact label="Engagement">{caseStudy.engagement}</Fact> : null}

                {caseStudy.location ? <Fact label="Location">{caseStudy.location}</Fact> : null}

                {caseStudy.projectStatus ? (
                  <Fact label="Project Status">
                    {caseStudy.projectStatus.label}
                    {caseStudy.projectStatus.note ? (
                      <span className="mt-1 block text-[0.75rem] text-faint">
                        {caseStudy.projectStatus.note}
                      </span>
                    ) : null}
                  </Fact>
                ) : null}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Fact({ label, children }) {
  return (
    <div className="mb-5 break-inside-avoid">
      <dt className="font-display text-[0.9375rem] font-semibold text-foreground">{label}</dt>
      <dd className="mt-2 space-y-1 text-[0.8125rem] leading-relaxed text-brand-600">{children}</dd>
    </div>
  );
}

/* -------------------------------------------------------- about the customer */

/** Who the work was for, held in one card the way the reference has it. */
export function CaseStudyCustomer({ body, client, partner }) {
  if (!body) return null;

  /* The names in the story are set in bold, because they are what a reader is
     scanning the paragraph for. */
  const names = [client, partner].filter(Boolean);
  const pattern = names.length ? new RegExp(`(${names.map(escapeRegExp).join("|")})`, "g") : null;
  const parts = pattern ? body.split(pattern) : [body];

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <Head lead="About" accent="Our Customer" />

          <div className="mx-auto mt-6 max-w-5xl rounded-[1.25rem] bg-white p-5 shadow-[0_30px_80px_-52px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.06] sm:mt-8 sm:rounded-[1.75rem] sm:p-10">
            <p className="text-[0.9375rem] leading-[1.85] text-muted">
              {parts.map((part, index) =>
                pattern && names.includes(part) ? (
                  <strong key={index} className="font-semibold text-foreground">
                    {part}
                  </strong>
                ) : (
                  <span key={index}>{part}</span>
                ),
              )}
            </p>
          </div>
        </Rise>
      </Container>
    </section>
  );
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* --------------------------------------------------------------- challenge */

/**
 * What was wrong, then the named problems as cards.
 *
 * One card per problem, each with the mark beside the words rather than above
 * them, so a set of one-line problems reads as a list and not as a wall.
 */
export function CaseStudyChallenge({ section, body, points = [] }) {
  if (!body && !points.length) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
          <Rise className="lg:sticky lg:top-28 lg:self-start">
            <Head lead="Business" accent="Challenge" align="left" />

            {body ? (
              <p className="mt-5 text-[0.9375rem] leading-[1.85] text-muted">{body}</p>
            ) : null}
          </Rise>

          {points.length ? (
            <div className="grid gap-4">
              {points.map((point, index) => (
                <Rise key={point.title ?? point} delay={Math.min(index, 4) * 0.05}>
                  {/*
                    The mark sits beside the words rather than above them, so a
                    one-line problem is a one-line card: a column layout gave
                    every card the height of the longest one in the set.
                  */}
                  <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-[1.25rem] border-l-[3px] border-brand-600 bg-white p-5 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.5)] sm:p-6">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -top-4 font-display text-[3.5rem] font-bold leading-none tabular-nums text-brand-600/[0.08]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.8rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                    >
                      <TriangleAlert className="h-5 w-5" strokeWidth={1.8} />
                    </span>

                    <span className="relative min-w-0 flex-1">
                      {point.title ? (
                        <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-balance text-foreground">
                          {point.title}
                        </h3>
                      ) : null}

                      {/* Some write-ups name each problem; others just list
                          them. A bare line is the card's own sentence rather
                          than a description with nothing above it. */}
                      <span
                        className={
                          point.title
                            ? "mt-2 block text-[0.875rem] leading-[1.7] text-muted"
                            : "block text-[0.9375rem] leading-[1.6] text-foreground"
                        }
                      >
                        {point.description ?? point}
                      </span>
                    </span>
                  </div>
                </Rise>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- solution */

/**
 * What was built, laid out two to a row.
 *
 * The intro sits directly under the heading rather than in a card of its own:
 * it is the section's own opening line, and boxing it made it read as the first
 * of the items below it. The steps keep their numbers, because they happened in
 * an order, but they are dealt across the page rather than stacked down one
 * rail: a dozen of them in a single column is a scroll, not a sequence.
 */
export function CaseStudySolution({ section, heading, body, steps = [], points = [], technologies = [] }) {
  if (!body && !steps.length && !points.length) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <Head lead="Solution" accent="Provided" override={heading} />

          {body ? (
            <p className="mx-auto mt-5 max-w-4xl text-center text-[0.9375rem] leading-[1.85] text-muted">
              {body}
            </p>
          ) : null}
        </Rise>

        {/* Two of the write-ups list what was done as one flat run rather than
            as named steps, so they get a list and not a set of empty cards. */}
        {!steps.length && points.length ? (
          <Rise delay={0.08}>
            <ul className="mx-auto mt-7 grid max-w-5xl gap-3 sm:mt-9 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-[1rem] bg-white p-4 shadow-[0_18px_40px_-34px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.05]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600"
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <span className="text-[0.875rem] leading-[1.7] text-muted">{point}</span>
                </li>
              ))}
            </ul>
          </Rise>
        ) : null}

        {steps.length ? (
          <ol className="mt-8 grid gap-3.5 sm:gap-4 lg:mt-10 lg:grid-cols-2">
            {steps.map((step, index) => (
              <Rise key={step.title ?? index} delay={(index % 2) * 0.07}>
                <li className="group flex h-full flex-col rounded-[1.25rem] bg-white p-6 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.5)] sm:p-7">
                  <div className="flex items-center gap-3.5">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-[0.8125rem] font-semibold tabular-nums text-white shadow-[0_12px_26px_-14px_rgb(53_51_205/0.9)]"
                    >
                      {step.step ?? String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-balance text-foreground sm:text-lg">
                      {step.title}
                    </h3>
                  </div>

                  {step.description ? (
                    <p className="mt-4 text-[0.875rem] leading-[1.7] text-muted">{step.description}</p>
                  ) : null}

                  {step.bullets?.length ? (
                    <ul className="mt-3.5 space-y-2.5">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                          />
                          <span className="text-[0.875rem] leading-[1.7] text-muted">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              </Rise>
            ))}
          </ol>
        ) : null}

        {technologies.length ? (
          <Rise delay={0.1}>
            <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5">
              {technologies.map((technology) => (
                <li
                  key={technology.id}
                  className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground"
                >
                  <Sparkles className="h-3.5 w-3.5 text-brand-600" aria-hidden="true" />
                  {technology.label}
                </li>
              ))}
            </ul>
          </Rise>
        ) : null}
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- features */

/**
 * What was built, feature by feature, grouped by where it lives.
 *
 * One of the write-ups is organised by page rather than by step: a People Page
 * and a Tech Page, each with a dozen named features. Flattening that into the
 * step rail lost the only structure the document had, so the groups are kept
 * and each becomes its own run of cards.
 */
export function CaseStudyFeatures({ groups = [] }) {
  if (!groups.length) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <Head lead="Platform" accent="Features" />
        </Rise>

        {groups.map((group, groupIndex) => (
          <div key={group.page} className={groupIndex === 0 ? "mt-8 sm:mt-10" : "mt-11 sm:mt-14"}>
            <Rise>
              <h3 className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                <span aria-hidden="true" className="h-px w-6 bg-brand-300" />
                {group.page}
              </h3>
            </Rise>

            <div className="mt-5 grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {group.features.map((feature, index) => (
                <Rise key={feature.title} delay={(index % 3) * 0.06}>
                  <div className="group flex h-full flex-col rounded-[1.25rem] bg-white p-5 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.5)] sm:p-6">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                    >
                      <Sparkles className="h-4 w-4" strokeWidth={1.8} />
                    </span>

                    <h4 className="mt-4 font-display text-base font-semibold leading-snug tracking-tight text-balance text-foreground">
                      {feature.title}
                    </h4>

                    {feature.bullets?.length ? (
                      <ul className="mt-3 space-y-2">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                            />
                            <span className="text-[0.8125rem] leading-[1.65] text-muted">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </Rise>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- outcomes */

/** What changed, as a set of plates. The figure leads; the sentence explains it. */
export function CaseStudyOutcomes({ section, heading, items = [], metricsNote }) {
  if (!items.length) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <Head lead="Key" accent="Outcomes" override={heading} />
        </Rise>

        <div className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((item, index) => {
            const [figure, rest] = splitOutcome(item);

            return (
              <Rise key={figure} delay={(index % 3) * 0.07}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white p-6 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.55)] sm:p-7">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />

                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                  >
                    <Check className="h-4 w-4" strokeWidth={2.4} />
                  </span>

                  <p className="mt-5 font-display text-lg font-semibold leading-snug tracking-tight text-balance text-foreground">
                    {figure}
                  </p>
                  {rest ? <p className="mt-2 text-[0.875rem] leading-[1.7] text-muted">{rest}</p> : null}
                </div>
              </Rise>
            );
          })}
        </div>

        {metricsNote ? (
          <p className="mt-8 text-center text-xs italic text-faint">{metricsNote}</p>
        ) : null}
      </Container>
    </section>
  );
}

/** Outcomes are authored as "the figure - what it means", so the two are split. */
function splitOutcome(item) {
  /* The write-ups are inconsistent by nature: some list outcomes as a titled
     record, others as one sentence with the figure in front of a dash. Both are
     read here so neither document has to be rewritten to fit the page. */
  if (item && typeof item === "object") return [item.title, item.description ?? null];

  const match = /^(.*?)\s+[-–—:]\s+(.*)$/.exec(item);
  return match ? [match[1], match[2]] : [item, null];
}

/* -------------------------------------------------------------- conclusion */

/** The closing paragraph, set on the brand rather than on the page. */
export function CaseStudyConclusion({ body }) {
  if (!body) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.25rem] bg-brand-600 p-6 text-white shadow-[0_36px_90px_-52px_rgb(53_51_205/0.9)] sm:rounded-[1.75rem] sm:p-12">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/[0.07] blur-3xl"
            />
            <h2 className="relative font-display text-[1.4rem] font-semibold tracking-tight text-white sm:text-[1.75rem]">
              Conclusion
            </h2>
            <p className="relative mt-4 text-[0.9375rem] leading-[1.85] text-white/85 sm:text-base">{body}</p>
          </div>
        </Rise>
      </Container>
    </section>
  );
}

/** The two letters that stand in for a portrait we were never given. */
function initials(name = "") {
  return name
    .split(/s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

/* ------------------------------------------------------------- testimonial */

/** The client, in their own words. */
export function CaseStudyTestimonial({ testimonial, note }) {
  if (!testimonial?.quote) {
    /* A study whose client has not signed off yet says so, rather than ending
       on the conclusion as though there were nothing more to come. */
    return note ? (
      <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
        <Container size="wide">
          <Rise>
            <p className="mx-auto max-w-3xl text-center text-[0.875rem] italic leading-relaxed text-faint">
              {note}
            </p>
          </Rise>
        </Container>
      </section>
    ) : null;
  }

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <div className="mx-auto max-w-5xl rounded-[1.25rem] bg-white p-6 shadow-[0_30px_80px_-52px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.06] sm:rounded-[1.75rem] sm:p-12">
            <Quote className="h-8 w-8 text-brand-600/30" aria-hidden="true" />

            <blockquote className="mt-4 text-[0.9375rem] leading-[1.8] text-foreground sm:mt-5 sm:text-[1.0625rem]">
              {testimonial.quote}
            </blockquote>

            <figcaption className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-5 sm:mt-7 sm:pt-6">
              {/*
                None of these clients gave us a photograph, and putting a stock
                face against a named person's words would be a lie about who
                said them. Their initials on a brand plate say the same thing
                the portrait was there to say: a person, not a logo.
              */}
              {testimonial.avatar ? (
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-surface ring-1 ring-black/[0.06]">
                  <Image src={testimonial.avatar} alt="" fill sizes="3rem" className="object-cover" />
                </span>
              ) : (
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(150deg,var(--color-brand-500)_0%,var(--color-brand-700)_100%)] font-display text-sm font-semibold tracking-tight text-white shadow-[0_12px_24px_-14px_rgb(53_51_205/0.9)]"
                >
                  {initials(testimonial.author)}
                </span>
              )}

              <span>
                <span className="block font-display text-[0.9375rem] font-semibold tracking-tight text-foreground">
                  {testimonial.author}
                </span>
                {testimonial.role ? (
                  <span className="block text-[0.8125rem] text-muted">{testimonial.role}</span>
                ) : null}
              </span>
            </figcaption>
          </div>
        </Rise>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- related */

/** The services and solutions this work was made of. */
export function CaseStudyRelated({ section, services = [], solutions = [] }) {
  const items = [...services, ...solutions];
  if (!items.length) return null;

  return (
    <section className="py-10 sm:py-14 lg:py-[clamp(3rem,5vw,4.5rem)]">
      <Container size="wide">
        <Rise>
          <Head lead="Related" accent="Services and Solutions" />
        </Rise>

        <div className="mt-8 grid gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {items.map((item, index) => (
            <Rise key={item.slug} delay={(index % 2) * 0.07}>
              <Link
                href={item.href}
                className="group flex h-full items-start gap-4 rounded-[1rem] border-l-[3px] border-brand-600 bg-white p-5 shadow-[0_18px_40px_-34px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.55)] sm:p-6"
              >
                <span className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-muted">{item.summary}</span>
                </span>

                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </Rise>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Kept for the pages that still ask for the approach as its own beat. */
export function CaseStudyApproach({ section, steps = [] }) {
  if (!steps.length) return null;
  return <CaseStudySolution section={section} steps={steps} />;
}

export { Button };
export default CaseStudyHero;

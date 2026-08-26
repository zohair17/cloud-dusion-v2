"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, Clock } from "lucide-react";
import { Container } from "../primitives/container";
import { RevealText } from "../motion/reveal-text";
import { Reveal } from "../motion/reveal";
import { cn } from "../primitives/cn";

/**
 * The case study detail page, section by section.
 *
 * A case study is a story with a shape: it started somewhere, it was delivered
 * in steps, something exists now that did not before, and something measurable
 * changed. Each beat is given the form that suits it, and none of these forms
 * is used anywhere else on the site.
 */
const EASE = [0.22, 1, 0.36, 1];

/** Section head, shared by the sections below and by nothing else. */
function Head({ eyebrow, heading, align = "left", className }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      <Reveal>
        <p
          className={cn(
            "flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-600",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-6 bg-brand-300" aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>

      <RevealText
        as="h2"
        delay={0.08}
        className="mt-4 font-display text-2xl font-semibold leading-[1.14] tracking-tight text-balance sm:text-3xl lg:text-[2.15rem]"
      >
        {heading}
      </RevealText>
    </div>
  );
}

/* --------------------------------------------------------------------- hero */

/**
 * The hero, set like a printed sample.
 *
 * The photograph arrives tilted and settles square, which is the one liberty
 * the page takes; everything else is a record of work and is set plainly. The
 * word CASE STUDY runs up the outer margin, so the page announces what it is
 * without spending a line of the headline on it.
 */
export function CaseStudyHero({ caseStudy, trail = [] }) {
  const reduced = useReducedMotion();

  return (
    <section className="pt-6 sm:pt-8">
      <Container size="wide">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted sm:text-sm">
              {trail.map((crumb, index) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {index > 0 ? <span aria-hidden="true" className="text-muted/50">/</span> : null}
                  {crumb.href ? (
                    <Link href={crumb.href} className="underline-offset-4 transition-colors hover:text-brand-700 hover:underline">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-medium text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,32rem)] lg:gap-16">
          {/* The margin mark. Decorative: the heading below says the same thing. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-11 top-2 hidden origin-top-left rotate-90 select-none font-display text-[0.6875rem] font-semibold uppercase tracking-[0.4em] text-faint/70 xl:block"
          >
            Case Study
          </span>

          <div>
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-pill border border-brand-200 bg-brand-50/70 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
              {caseStudy.sectorLabel}
            </motion.p>

            <h1 className="mt-7 font-display text-[2.1rem] font-semibold leading-[1.07] tracking-tight text-balance text-foreground sm:text-[2.75rem] lg:text-[3.15rem]">
              <RevealText delay={0.1}>{caseStudy.title}</RevealText>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-6 max-w-2xl text-[0.9375rem] leading-[1.8] text-muted sm:text-base"
            >
              {caseStudy.summary}
            </motion.p>

            <motion.dl
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6"
            >
              <div>
                <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-faint">Client</dt>
                <dd className="mt-1.5 text-[0.875rem] font-medium text-foreground">{caseStudy.client}</dd>
              </div>

              {caseStudy.industry ? (
                <div>
                  <dt className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-faint">Industry</dt>
                  <dd className="mt-1.5">
                    <Link
                      href={caseStudy.industry.href}
                      className="inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-brand-700 underline-offset-4 hover:underline"
                    >
                      {caseStudy.industry.title}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </dd>
                </div>
              ) : null}
            </motion.dl>
          </div>

          {caseStudy.image ? (
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 30, rotate: -2.5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.12, ease: EASE }}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_44px_90px_-56px_rgb(21_21_28/0.65)] ring-1 ring-black/[0.06]"
            >
              <Image
                src={caseStudy.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 32rem, 100vw"
                priority
                className="object-cover"
              />
            </motion.div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- challenge */

/** Where it started, set as the page's one long statement. */
export function CaseStudyChallenge({ section, body }) {
  if (!body) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface px-6 py-11 sm:px-12 sm:py-14 lg:px-16">
          {/* The opening mark, oversized and nearly out of ink. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-6 select-none font-display text-[11rem] font-bold leading-none text-brand-600/[0.07] sm:right-14 sm:text-[15rem]"
          >
            &ldquo;
          </span>

          <Head eyebrow={section.eyebrow} heading={section.heading} />

          <Reveal delay={0.16}>
            <p className="relative mt-7 max-w-4xl font-display text-lg font-medium leading-[1.6] tracking-tight text-balance text-foreground sm:text-xl lg:text-[1.4rem]">
              {body}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- approach */

/**
 * How it was delivered, as a run of progress cards.
 *
 * Each card carries a bar showing how far through the engagement that step
 * sits, so the sequence is legible at a glance rather than only by reading the
 * numbers. The bars fill on arrival, left to right.
 */
export function CaseStudyApproach({ section, steps = [] }) {
  if (!steps.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.li
              key={step.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.09, ease: EASE },
                },
              }}
              className="flex flex-col rounded-[1.2rem] bg-white p-5 ring-1 ring-black/[0.06]"
            >
              <span aria-hidden="true" className="block h-1 w-full overflow-hidden rounded-full bg-black/[0.06]">
                {/* The bar is driven by the card's own variant rather than its own
                    viewport watch: five observers on five four-pixel strips is a
                    lot of machinery for one line. */}
                <motion.span
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: { duration: 0.9, delay: 0.2 + index * 0.09, ease: EASE },
                    },
                  }}
                  style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                  className="block h-full origin-left rounded-full bg-brand-600"
                />
              </span>

              <h3 className="mt-5 flex items-baseline gap-2.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
                {step.step}
                <span className="text-[0.8125rem] font-semibold normal-case tracking-tight text-foreground">
                  Step {index + 1}
                </span>
              </h3>

              <p className="mt-2.5 text-[0.875rem] leading-relaxed text-foreground">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- solution */

/** What was built, and what it was built with. */
export function CaseStudySolution({ section, body, technologies = [] }) {
  if (!body) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} align="center" />

        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-4xl text-center font-display text-lg font-medium leading-[1.65] tracking-tight text-balance text-foreground sm:text-xl">
            {body}
          </p>
        </Reveal>

        {technologies.length ? (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
            className="mx-auto mt-11 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 border-t border-border pt-8"
          >
            {technologies.map((technology) => (
              <motion.li
                key={technology.id}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
                }}
              >
                <span className="inline-flex items-center rounded-pill border border-brand-200/70 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
                  {technology.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        ) : null}
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- outcomes */

/** What changed, and what is still awaiting the client's sign-off. */
export function CaseStudyOutcomes({ section, items = [], metricsNote }) {
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-10 grid gap-x-14 gap-y-1 lg:mt-12 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: (index % 2) * 0.08, ease: EASE },
                },
              }}
              className="flex items-start gap-4 border-t border-border py-6"
            >
              <motion.span
                variants={{
                  hidden: { scale: 0.4, opacity: 0 },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.45, delay: 0.12 + (index % 2) * 0.08, ease: EASE },
                  },
                }}
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={2.6} aria-hidden="true" />
              </motion.span>
              <span className="font-display text-[0.9375rem] font-medium leading-[1.6] tracking-tight text-foreground sm:text-base">
                {item}
              </span>
            </motion.li>
          ))}
        </ul>

        {metricsNote ? (
          <Reveal delay={0.1}>
            <p className="mt-8 inline-flex items-start gap-3 rounded-[1rem] border border-dashed border-brand-300 px-5 py-4 text-[0.8125rem] leading-relaxed text-muted">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={1.8} aria-hidden="true" />
              {metricsNote}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ related */

/** The services behind this work. */
export function CaseStudyRelated({ section, services = [], solutions = [] }) {
  const items = [
    ...services.map((service) => ({ ...service, kind: "Service" })),
    ...solutions.map((solution) => ({ ...solution, kind: "Solution" })),
  ];
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.li
              key={`${item.kind}-${item.slug}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-[1.2rem] bg-white p-6 ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_28px_60px_-48px_rgb(53_51_205/0.8)]"
              >
                <span className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-faint">
                  {item.kind}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
                  {item.title}
                </h3>
                <span className="mt-2.5 flex-1 text-[0.8125rem] leading-relaxed text-muted">{item.summary}</span>
                <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

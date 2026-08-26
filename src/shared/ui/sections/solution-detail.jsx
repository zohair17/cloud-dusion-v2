"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/**
 * The solution detail page, section by section.
 *
 * A solution is a built thing, so the page is laid out like a specification
 * rather than a brochure: a plate at the top, the case for building it, the
 * work it replaces struck out, the mechanism, then the spec sheet. Every
 * section here is composed for this page and appears nowhere else on the site.
 */
const EASE = [0.22, 1, 0.36, 1];

/** Section head, shared by the sections below and by nothing else. */
function Head({ eyebrow, heading, body, align = "left", className }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
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
      ) : null}

      <RevealText
        as="h2"
        delay={0.08}
        className="mt-4 font-display text-2xl font-semibold leading-[1.14] tracking-tight text-balance sm:text-3xl lg:text-[2.15rem]"
      >
        {heading}
      </RevealText>

      {body ? (
        <Reveal delay={0.14}>
          <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted sm:text-base">{body}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------- plate */

/**
 * The hero, built as a plate.
 *
 * The photograph is a full band and the title sits on a white plate lifted onto
 * it, overlapping the join. Nothing is laid over the picture except the plate
 * itself, so the image is never dimmed to make room for words.
 */
export function SolutionHero({ solution, trail = [] }) {
  const reduced = useReducedMotion();
  const [primaryCta, ...rest] = solution.ctas;

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-4">
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

        <div className="relative">
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative h-[13rem] w-full overflow-hidden rounded-[2rem] bg-surface sm:h-[19rem] lg:h-[24rem]"
          >
            {solution.image ? (
              <Image src={solution.image} alt="" fill sizes="100vw" priority className="object-cover" />
            ) : null}
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(53_51_205/0.28),transparent_45%)]"
            />

            <span className="absolute left-5 top-5 inline-flex items-center rounded-pill bg-white/90 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-700 backdrop-blur-sm sm:left-8 sm:top-8">
              {solution.category.title}
            </span>
          </motion.div>

          {/* The plate, lifted onto the band it overlaps. */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="relative z-10 -mt-12 rounded-[1.75rem] bg-white px-6 py-8 shadow-[0_36px_90px_-58px_rgb(21_21_28/0.6)] ring-1 ring-black/[0.06] sm:-mt-16 sm:px-10 sm:py-11 lg:-mt-20 lg:px-14 lg:py-14"
          >
            <h1 className="max-w-4xl font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-4xl lg:text-[3rem]">
              <RevealText delay={0.28}>{solution.title}</RevealText>
            </h1>

            {solution.tagline ? (
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-5 max-w-2xl font-display text-lg font-medium tracking-tight text-brand-600 sm:text-xl"
              >
                {solution.tagline}
              </motion.p>
            ) : null}

            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="mt-5 max-w-2xl text-[0.9375rem] leading-[1.75] text-muted"
            >
              {solution.summary}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.68 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary" size="lg" className="gap-3 pr-2.5">
                  {primaryCta.label}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              ) : null}
              {rest.map((cta) => (
                <Button key={cta.intent} href={cta.href} variant="secondary" size="lg">
                  {cta.label}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ the case for it */

/**
 * Why it exists, and what it replaces.
 *
 * The two halves of the argument are set as one section because they are one
 * argument. The replaced work is struck through as it is read: the list is not
 * describing problems, it is describing things this system deletes, and a line
 * through them says that faster than a paragraph could.
 */
export function SolutionProblem({ problem, challenges }) {
  const scope = useGsap(({ reduced, root }) => {
    const strikes = gsap.utils.toArray("[data-strike]");
    if (!strikes.length) return;

    if (reduced) {
      gsap.set(strikes, { scaleX: 1 });
      return;
    }

    gsap.fromTo(
      strikes,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.7,
        stagger: 0.13,
        ease: "power2.out",
        scrollTrigger: { trigger: root, start: "top 68%", once: true },
      },
    );
  }, [challenges]);

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          {problem ? (
            <div>
              <Head eyebrow={problem.eyebrow} heading={problem.heading} />
              <Reveal delay={0.16}>
                <p className="mt-7 border-l-2 border-brand-600 pl-6 font-display text-lg font-medium leading-[1.6] tracking-tight text-balance text-foreground sm:text-xl">
                  {problem.body}
                </p>
              </Reveal>
            </div>
          ) : null}

          {challenges ? (
            <div>
              <Head eyebrow={challenges.eyebrow} heading={challenges.heading} />
              <ul className="mt-8 space-y-5">
                {challenges.items.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300"
                    />
                    <span className="relative inline-block text-[0.9375rem] leading-relaxed text-muted">
                      {item}
                      <span
                        data-strike
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 block h-px w-full origin-left bg-brand-600/60"
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- overview */

export function SolutionOverview({ paragraphs = [] }) {
  if (!paragraphs.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Head eyebrow="Overview" heading="The solution" />
          </div>

          <RevealGroup className="space-y-6">
            {paragraphs.map((paragraph, index) => (
              <RevealItem key={index} y={18}>
                <p
                  className={cn(
                    "leading-[1.8] text-muted",
                    index === 0 ? "text-[1.0625rem] text-foreground sm:text-lg" : "text-[0.9375rem] sm:text-base",
                  )}
                >
                  {paragraph}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- how it works */

/**
 * The mechanism, as a chain.
 *
 * The nodes sit on one rail and the rail fills as the section is read, so the
 * sequence is legible as a sequence rather than as four cards that happen to be
 * numbered. Below the desktop breakpoint the rail turns vertical, because a
 * horizontal chain on a phone is either unreadable or a scrollbar.
 */
export function SolutionHowItWorks({ section }) {
  const scope = useGsap(({ reduced, root }) => {
    const fill = root?.querySelector("[data-fill]");
    if (!fill) return;

    if (reduced) {
      gsap.set(fill, { scaleX: 1, scaleY: 1 });
      return;
    }

    gsap.fromTo(
      fill,
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: 1,
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top 72%", end: "bottom 62%", scrub: 0.6 },
      },
    );
  }, [section]);

  if (!section) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <div className="relative mt-12 lg:mt-16">
          {/* The rail, and the part of it that has been read. */}
          <span
            aria-hidden="true"
            className="absolute left-[1.375rem] top-3 h-[calc(100%-1.5rem)] w-px bg-black/[0.09] lg:left-0 lg:top-[1.375rem] lg:h-px lg:w-full"
          />
          <span
            data-fill
            aria-hidden="true"
            className="absolute left-[1.375rem] top-3 h-[calc(100%-1.5rem)] w-px origin-top bg-brand-600 lg:left-0 lg:top-[1.375rem] lg:h-px lg:w-full lg:origin-left"
          />

          <ol className="grid gap-9 lg:grid-cols-4 lg:gap-8">
            {section.steps.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -12% 0px" }}
                transition={{ duration: 0.6, delay: index * 0.09, ease: EASE }}
                className="relative flex gap-5 pl-0 lg:block"
              >
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                  {step.step}
                </span>

                <div className="lg:mt-6 lg:pr-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- spec sheet */

/** Capabilities, set as a spec sheet rather than as cards. */
export function SolutionCapabilities({ section, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <RevealGroup
          as="ul"
          stagger={0.06}
          className="mt-10 overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.07] sm:grid sm:grid-cols-2"
        >
          {items.map((item, index) => (
            <RevealItem
              key={item}
              as="li"
              y={14}
              className={cn(
                "flex items-start gap-4 border-b border-border bg-white px-6 py-5 last:border-b-0",
                index % 2 === 0 && "sm:border-r",
                // The last row in each column keeps its own edge clean.
                index >= items.length - (items.length % 2 === 0 ? 2 : 1) && "sm:border-b-0",
              )}
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                <Check className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
              </span>
              <span className="text-[0.9375rem] leading-relaxed text-foreground">{item}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- ai + stack */

/** The one dark panel on the page, for the one part of it that is intelligent. */
export function SolutionAi({ section }) {
  if (!section) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#141433] px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/40 blur-[90px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-500/25 blur-[100px]"
            />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <p className="flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-300">
                  <span className="h-px w-6 bg-brand-400/70" aria-hidden="true" />
                  {section.eyebrow}
                </p>
                <h2 className="mt-4 font-display text-2xl font-semibold leading-[1.14] tracking-tight text-balance text-white sm:text-3xl">
                  {section.heading}
                </h2>
                {section.body ? (
                  <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-white/65">{section.body}</p>
                ) : null}
              </div>

              <RevealGroup as="ul" stagger={0.08} className="space-y-px">
                {section.items.map((item, index) => (
                  <RevealItem
                    key={item}
                    as="li"
                    y={14}
                    className="flex items-baseline gap-5 border-t border-white/10 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="font-display text-xs font-semibold tabular-nums text-brand-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-white/85">{item}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** The layered composition, where a solution documents one. */
export function SolutionArchitecture({ section }) {
  if (!section) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} body={section.body} />

        <RevealGroup stagger={0.08} className="mt-10 space-y-3">
          {section.layers.map((layer) => (
            <RevealItem key={layer.title} y={16}>
              <div className="grid gap-4 rounded-[1.25rem] bg-white p-5 ring-1 ring-black/[0.07] sm:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] sm:items-center sm:gap-8 sm:px-7">
                <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {layer.title}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {layer.nodes.map((node) => (
                    <li
                      key={node}
                      className="rounded-pill border border-border bg-surface px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground"
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- outcomes and stack */

/** What changes, and where it fits, read as two ledgers side by side. */
export function SolutionOutcomes({ benefits, useCases, benefitItems = [], useCaseItems = [] }) {
  if (!benefitItems.length && !useCaseItems.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {benefitItems.length ? (
            <div>
              <Head eyebrow={benefits.eyebrow} heading={benefits.heading} />
              <RevealGroup as="ol" stagger={0.07} className="mt-8">
                {benefitItems.map((item, index) => (
                  <RevealItem
                    key={item}
                    as="li"
                    y={14}
                    className="flex items-baseline gap-5 border-t border-border py-5"
                  >
                    <span className="font-display text-lg font-semibold tabular-nums text-brand-600/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.9375rem] font-medium leading-relaxed tracking-tight text-foreground sm:text-base">
                      {item}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ) : null}

          {useCaseItems.length ? (
            <div>
              <Head eyebrow={useCases.eyebrow} heading={useCases.heading} />
              <RevealGroup as="ul" stagger={0.07} className="mt-8 space-y-3">
                {useCaseItems.map((item) => (
                  <RevealItem key={item} as="li" y={14}>
                    <p className="rounded-[1.1rem] bg-surface px-5 py-4 text-[0.9375rem] leading-relaxed text-foreground ring-1 ring-black/[0.05]">
                      {item}
                    </p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** The Microsoft stack this is built on. */
export function SolutionStack({ section, technologies = [] }) {
  if (!technologies.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <Head eyebrow={section.eyebrow} heading={section.heading} />

          <RevealGroup as="ul" stagger={0.05} className="flex flex-wrap gap-2.5">
            {technologies.map((technology) => (
              <RevealItem key={technology.id} as="li" y={12}>
                <span className="inline-flex items-center rounded-pill border border-brand-200/70 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
                  {technology.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- crosslinks */

/** Industries served, and the services and solutions this sits beside. */
export function SolutionCrossLinks({ sections, industries = [], services = [], solutions = [] }) {
  return (
    <>
      {industries.length ? (
        <section className="section-y">
          <Container size="wide">
            <Head eyebrow={sections.industries.eyebrow} heading={sections.industries.heading} />

            <RevealGroup as="ul" stagger={0.07} className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <RevealItem key={industry.slug} as="li" y={16}>
                  <Link
                    href={industry.href}
                    className="group flex h-full items-start gap-4 rounded-[1.25rem] bg-white p-5 ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_26px_60px_-44px_rgb(53_51_205/0.6)]"
                  >
                    {industry.image ? (
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-surface">
                        <Image src={industry.image} alt="" fill sizes="3.5rem" className="object-cover" />
                      </span>
                    ) : null}
                    <span className="min-w-0">
                      <span className="block font-display text-base font-semibold tracking-tight text-foreground">
                        {industry.title}
                      </span>
                      <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-muted">
                        {industry.summary}
                      </span>
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ) : null}

      {services.length || solutions.length ? (
        <section className="section-y">
          <Container size="wide">
            <Head eyebrow={sections.related.eyebrow} heading={sections.related.heading} />

            <div className="mt-9 grid gap-10 lg:grid-cols-2 lg:gap-16">
              {services.length ? (
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                    {sections.related.servicesLabel}
                  </p>
                  <RevealGroup as="ul" stagger={0.06} className="mt-4">
                    {services.map((service) => (
                      <RevealItem key={service.slug} as="li" y={12} className="border-t border-border">
                        <CrossRow href={service.href} title={service.title} summary={service.summary} />
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              ) : null}

              {solutions.length ? (
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                    {sections.related.solutionsLabel}
                  </p>
                  <RevealGroup as="ul" stagger={0.06} className="mt-4">
                    {solutions.map((solution) => (
                      <RevealItem key={solution.slug} as="li" y={12} className="border-t border-border">
                        <CrossRow href={solution.href} title={solution.title} summary={solution.summary} />
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

function CrossRow({ href, title, summary }) {
  return (
    <Link href={href} className="group flex items-start gap-4 py-5">
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
          {title}
        </span>
        <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-muted">{summary}</span>
      </span>
      <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-brand-600 transition-colors group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

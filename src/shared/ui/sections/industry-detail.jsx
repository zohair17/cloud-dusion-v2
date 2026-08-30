"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { Reveal } from "../motion/reveal";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/**
 * The industry detail page, section by section.
 *
 * An industry page is an argument in four moves: here is the pressure you are
 * under, here is what AI and Microsoft each change about it, here is what we
 * would build, and here is what it buys you. Each move gets its own shape so
 * the page reads as a sequence rather than as six lists in a row, and none of
 * these shapes appears anywhere else on the site.
 */
const EASE = [0.22, 1, 0.36, 1];

/** Section head, shared by the sections below and by nothing else. */
function Head({ eyebrow, heading, tone = "default", className }) {
  const light = tone === "light";

  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <p
          className={cn(
            "flex items-center gap-3 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
            light ? "text-brand-700" : "text-brand-600",
          )}
        >
          <span className={cn("h-px w-6", light ? "bg-brand-400" : "bg-brand-300")} aria-hidden="true" />
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

/* ------------------------------------------------------------------- portal */

/**
 * The hero, built around a portal.
 *
 * The photograph is cut into an arch and set beside the argument rather than
 * behind it, so no copy is ever laid over a picture and the picture is never
 * dimmed to make room. It drifts as the page scrolls, which is the only motion
 * the hero has; everything else here holds still and is read.
 */
export function IndustryHero({ industry, trail = [] }) {
  const reduced = useReducedMotion();
  const frame = useRef(null);
  const [primaryCta] = industry.ctas;

  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

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

        {/* The banner plate the case study pages open on: same white card, same
            ring and lift, so an industry and a case study read as two pages of
            one site rather than two sites. */}
        <div className="overflow-hidden rounded-[1.5rem] bg-white p-5 shadow-[0_36px_92px_-58px_rgb(53_51_205/0.5)] ring-1 ring-black/[0.06] sm:rounded-[2.5rem] sm:p-9 lg:p-12">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,23rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div className="order-2 lg:order-1">
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-2.5 rounded-pill border border-brand-200 bg-brand-50/70 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                {industry.title} Industry
              </motion.p>

              <h1 className="mt-7 font-display text-[1.75rem] font-semibold leading-[1.14] tracking-tight sm:leading-[1.06] text-balance text-foreground sm:text-5xl lg:text-[3.4rem]">
                <RevealText delay={0.1}>{industry.tagline ?? industry.title}</RevealText>
              </h1>

              {industry.intro.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 + index * 0.08 }}
                  className="mt-7 max-w-2xl text-[0.9375rem] leading-[1.8] text-muted sm:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}

              {primaryCta ? (
                <motion.div
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.58 }}
                  className="mt-10"
                >
                  <Button href={primaryCta.href} variant="primary" size="lg" className="gap-2.5 pr-2 sm:gap-3 sm:pr-2.5">
                    {primaryCta.label}
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600 sm:h-8 sm:w-8">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Button>
                </motion.div>
              ) : null}
            </div>

            {industry.image ? (
              <motion.div
                ref={frame}
                initial={reduced ? false : { opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
                /* On a phone the picture leads and the argument follows it, and it
                   is held to a size that leaves the copy the fold. */
                className="order-1 relative mx-auto w-full max-w-[13.5rem] sm:max-w-[17rem] lg:order-2 lg:max-w-none"
              >
                {/* The arch the photograph is cut into, and its offset outline. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 -top-4 h-full w-full rounded-t-[999px] rounded-b-[2rem] border border-brand-600/25 sm:-left-5 sm:-top-5"
                />

                <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-surface">
                  <motion.div style={reduced ? undefined : { y: drift }} className="absolute -inset-y-[8%] inset-x-0">
                    <Image
                      src={industry.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 26rem, 17rem"
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- pressure */

/**
 * What the industry is up against, as a ruled ledger.
 *
 * The counts are set in outline rather than solid: they are there to hold the
 * eye's place down the column, not to be read as a ranking.
 */
export function IndustryPressure({ section, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ol className="mt-10 lg:mt-12">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
              className="grid gap-3 border-t border-border py-6 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8 sm:py-7"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl font-bold leading-none tabular-nums text-transparent [-webkit-text-stroke:1px_var(--color-brand-300)] sm:text-5xl"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-base font-medium leading-[1.6] tracking-tight text-foreground sm:text-lg">
                {item}
              </p>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- response */

/**
 * The answer, in two tracks either side of one spine.
 *
 * What AI changes and what Microsoft delivers are not two topics, they are two
 * halves of one answer, so they are set as two columns sharing a single line
 * that fills as the section is read. Below the desktop breakpoint the spine
 * goes away and the tracks stack, because two columns on a phone are one.
 */
export function IndustryResponse({ aiSection, microsoftSection, aiItems = [], microsoftItems = [] }) {
  const scope = useGsap(({ reduced, root }) => {
    const fill = root?.querySelector("[data-spine-fill]");
    if (!fill) return;

    if (reduced) {
      gsap.set(fill, { scaleY: 1 });
      return;
    }

    gsap.fromTo(
      fill,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top 72%", end: "bottom 65%", scrub: 0.6 },
      },
    );
  }, [aiItems, microsoftItems]);

  if (!aiItems.length && !microsoftItems.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <div className="relative grid gap-14 lg:grid-cols-2 lg:gap-24">
          {/* The spine, and the part of it that has been read. */}
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px bg-black/[0.08] lg:block"
          />
          <span
            data-spine-fill
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px origin-top bg-brand-600 lg:block"
          />

          <Track section={aiSection} items={aiItems} icon={Sparkles} />
          <Track section={microsoftSection} items={microsoftItems} icon={Check} />
        </div>
      </Container>
    </section>
  );
}

function Track({ section, items, icon: Icon }) {
  if (!items.length) return null;

  return (
    <div>
      <Head eyebrow={section.eyebrow} heading={section.heading} />

      <ul className="mt-8 space-y-6">
        {items.map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
            className="flex gap-4"
          >
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
              <Icon className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span className="text-[0.9375rem] leading-[1.75] text-muted">{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------------------------------------------- what we build */

/** The solutions offered to this industry, as picture cards. */
export function IndustrySolutions({ section, solutions = [] }) {
  if (!solutions.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <motion.li
              key={solution.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.09, ease: EASE }}
            >
              <Link
                href={solution.href}
                className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_32px_70px_-50px_rgb(53_51_205/0.75)]"
              >
                <span className="relative block aspect-[16/10] overflow-hidden bg-surface">
                  {solution.image ? (
                    <Image
                      src={solution.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  ) : null}
                  <span className="absolute left-3.5 top-3.5 inline-flex items-center rounded-pill bg-white/90 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-brand-700 backdrop-blur-sm">
                    {solution.categoryTitle}
                  </span>
                </span>

                <span className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
                    {solution.title}
                  </h3>
                  <span className="mt-2 flex-1 text-[0.8125rem] leading-relaxed text-muted">{solution.summary}</span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-brand-600">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/** The services behind the solutions, as rows that fill on approach. */
export function IndustryServices({ section, services = [] }) {
  if (!services.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-9 border-b border-border lg:mt-11">
          {services.map((service, index) => (
            <motion.li
              key={service.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: EASE }}
              className="group relative overflow-hidden border-t border-border"
            >
              <Link href={service.href} className="relative flex items-center gap-5 px-4 py-6 sm:gap-10 sm:px-6 sm:py-7">
                {/* The row lights up from its leading edge rather than all at once. */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-brand-50 transition-transform duration-500 ease-out group-hover:translate-x-0"
                />

                <span className="relative min-w-0 flex-1 sm:flex sm:items-baseline sm:gap-8">
                  <h3 className="font-display text-base font-semibold tracking-tight text-foreground sm:w-[16rem] sm:shrink-0 sm:text-lg">
                    {service.title}
                  </h3>
                  <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-muted sm:mt-0 sm:text-[0.875rem]">
                    {service.summary}
                  </span>
                </span>

                <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------------- outcomes */

/**
 * What the business gets, on the page's one tinted field.
 *
 * Each line is underscored by a rule that draws itself as the line arrives, so
 * the list reads as a tally being written rather than a set of bullets.
 */
export function IndustryOutcomes({ section, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="rounded-[2rem] bg-brand-50 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <Head eyebrow={section.eyebrow} heading={section.heading} tone="light" />

          <ul className="mt-10 grid gap-x-16 sm:grid-cols-2">
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
                className="relative py-5"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-xs font-semibold tabular-nums text-brand-600/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[0.9375rem] font-medium leading-[1.6] tracking-tight text-foreground sm:text-base">
                    {item}
                  </span>
                </span>

                {/* The rule is driven by the row's own variant, so one observer
                    covers both the line and the text it underscores. */}
                <motion.span
                  aria-hidden="true"
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: {
                      scaleX: 1,
                      transition: { duration: 0.8, delay: 0.15 + (index % 2) * 0.08, ease: EASE },
                    },
                  }}
                  className="absolute inset-x-0 bottom-0 block h-px origin-left bg-brand-600/25"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

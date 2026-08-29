"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Check,
  Clock,
  Cloud,
  FileText,
  Globe,
  GraduationCap,
  Lightbulb,
  ListChecks,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Users,
  Workflow,
} from "lucide-react";
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

/**
 * The mark for a line of copy, read off the words it already uses.
 *
 * Benefits, use cases and related links are authored as prose, not as records
 * with an icon field. Matching on the sentence keeps the mark a presentation
 * decision, and anything with nothing to match on falls back to a neutral one
 * rather than to a wrong one.
 */
const MARK_RULES = [
  [/chatbot|copilot|conversation|answer|q&a|voice|ask/i, MessagesSquare],
  [/agent|bot|autonomous/i, Bot],
  [/document|content|record|contract|file|citation/i, FileText],
  [/search|discover|retriev|find/i, Search],
  [/workflow|process|automat|approval|task/i, Workflow],
  [/secur|complian|govern|policy|risk|protect|permission/i, ShieldCheck],
  [/data|analytic|insight|report|dashboard|metric/i, BarChart3],
  [/cloud|azure|infrastructure|hosting|platform/i, Cloud],
  [/team|employee|people|staff|customer|user/i, Users],
  [/train|learn|enable|knowledge|onboard/i, GraduationCap],
  [/web|mobile|portal|intranet|channel|site/i, Globe],
  [/clock|24|around the clock|instant|fast|speed|time/i, Clock],
  [/idea|innovat|understand|know what/i, Lightbulb],
  [/ai|intelligen|model|generative/i, Sparkles],
];

function markFor(text) {
  for (const [pattern, Icon] of MARK_RULES) if (pattern.test(text)) return Icon;
  return Boxes;
}

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
            <h1 className="max-w-4xl font-display text-[1.625rem] font-semibold leading-[1.16] tracking-tight sm:text-3xl sm:leading-[1.08] text-balance text-foreground sm:text-4xl lg:text-[3rem]">
              <RevealText delay={0.28}>{solution.title}</RevealText>
            </h1>

            {solution.tagline ? (
              <motion.p
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-5 max-w-3xl font-display text-lg font-medium tracking-tight text-brand-600 sm:text-xl"
              >
                {solution.tagline}
              </motion.p>
            ) : null}

            <motion.p
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.58 }}
              className="mt-5 max-w-3xl text-[0.9375rem] leading-[1.75] text-muted"
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
                <Button href={primaryCta.href} variant="primary" size="lg" className="gap-2.5 pr-2 sm:gap-3 sm:pr-2.5">
                  {primaryCta.label}
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600 sm:h-8 sm:w-8">
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
/**
 * The brief.
 *
 * The three things a reader needs before anything else: what is wrong, what it
 * is costing, and what we build instead. They used to be two sections of prose
 * a screen apart, which read as notes; here they are one row of three cards, so
 * the argument can be taken in at a glance and the answer card can carry the
 * brand colour that makes it obviously the answer.
 *
 * The cards stretch to a common height, so the row reads as a set rather than
 * three panels of different weight.
 */
export function SolutionBrief({ problem, challenges, overview = [] }) {
  const reduced = useReducedMotion();

  const cards = [
    problem
      ? {
          key: "problem",
          icon: TriangleAlert,
          eyebrow: problem.eyebrow ?? "The problem",
          heading: problem.heading,
          body: [problem.body],
          tone: "text-red-600",
        }
      : null,
    challenges
      ? {
          key: "challenges",
          icon: ListChecks,
          eyebrow: challenges.eyebrow ?? "Business challenges",
          heading: challenges.heading,
          list: challenges.items,
          tone: "text-orange-600",
        }
      : null,
    overview.length
      ? {
          key: "overview",
          icon: Sparkles,
          eyebrow: "Overview",
          heading: "The solution",
          body: overview,
          accent: true,
        }
      : null,
  ].filter(Boolean);

  if (!cards.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <motion.ul
          initial={reduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          className="grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5"
        >
          {cards.map((card, index) => (
            <motion.li
              key={card.key}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.65, delay: index * 0.1, ease: EASE },
                },
              }}
              className={cn(
                "flex flex-col rounded-[1.25rem] p-5 ring-1 sm:rounded-[1.5rem] sm:p-8",
                card.accent
                  ? "bg-brand-600 ring-brand-600 shadow-[0_30px_60px_-34px_rgb(53_51_205/0.75)]"
                  : "bg-white ring-border",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.85rem]",
                  card.accent ? "bg-white/15 text-white" : "bg-brand-50 text-brand-600",
                )}
              >
                <card.icon className="h-5 w-5" strokeWidth={1.7} />
              </span>

              <p
                className={cn(
                  "mt-6 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]",
                  card.accent ? "text-white/70" : (card.tone ?? "text-brand-600"),
                )}
              >
                {card.eyebrow}
              </p>
              <h2
                className={cn(
                  "mt-2.5 font-display text-xl font-semibold leading-snug tracking-tight text-balance sm:text-2xl",
                  card.accent ? "text-white" : "text-foreground",
                )}
              >
                {card.heading}
              </h2>

              {card.body ? (
                <div className={cn("mt-4 space-y-3.5", card.accent ? "text-white/80" : "text-muted")}>
                  {card.body.map((paragraph, i) => (
                    <p key={i} className="text-[0.9375rem] leading-[1.7]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {card.list ? (
                <ul className="mt-5 space-y-3">
                  {card.list.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                      />
                      <span className="text-[0.9375rem] leading-[1.6] text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- how it works */

/**
 * The mechanism, as a stair.
 *
 * Each step is set one tread further in than the one before it, so the sequence
 * reads as a descent rather than as a row of cards that happen to be numbered.
 * The indent stops after the fifth tread: a solution with nine steps would
 * otherwise walk its last one off the margin.
 */
export function SolutionHowItWorks({ section }) {
  if (!section) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ol className="mt-11 space-y-3.5 overflow-x-clip lg:mt-14">
          {section.steps.map((step, index) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
              style={{ "--tread": `${Math.min(index, 4) * 2}rem` }}
              className="lg:ml-[var(--tread)]"
            >
              <div className="group relative flex items-start gap-5 overflow-hidden rounded-[1.35rem] bg-white p-5 ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_28px_60px_-46px_rgb(53_51_205/0.75)] sm:gap-7 sm:p-7">
                {/* The step's own number, large and nearly out of ink. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 font-display font-bold leading-none tabular-nums text-brand-600/[0.06] sm:block sm:text-[6rem]"
                >
                  {step.step}
                </span>

                {/*
                  The number is the step's own plate rather than a chip beside
                  it: set large on a tinted panel with the guilloche behind it,
                  so the sequence reads as a set of numbered plates.
                */}
                <span className="relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-[1rem] bg-[linear-gradient(150deg,#f4f5fd_0%,#eceefb_100%)] ring-1 ring-brand-100 sm:h-[5.5rem] sm:w-[5.5rem]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-70 [background-image:repeating-linear-gradient(115deg,transparent_0_7px,var(--color-brand-200)_7px_8px)]"
                  />
                  <span className="relative font-display text-[1.6rem] font-bold tabular-nums tracking-tight text-brand-300 transition-colors duration-500 group-hover:text-brand-500 sm:text-[2.1rem]">
                    <span className="sr-only">Step </span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>

                <div className="relative min-w-0">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.875rem] leading-relaxed text-muted sm:text-[0.9375rem]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- spec sheet */

/**
 * Capabilities, set as a board.
 *
 * Each tile draws its own rule as it arrives, so the board fills in rather than
 * simply appearing. A capability list has no order to it, so the tiles are all
 * one size and carry their count quietly.
 */
export function SolutionCapabilities({ section, items = [] }) {
  if (!items.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <Head eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.li
              key={item}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: (index % 3) * 0.08, ease: EASE },
                },
              }}
              className="relative overflow-hidden rounded-[1.2rem] bg-white p-6 ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_26px_56px_-46px_rgb(53_51_205/0.8)]"
            >
              {/* The rule is driven by the tile's own variant: one observer for
                  the tile is enough for both. */}
              <motion.span
                aria-hidden="true"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: {
                    scaleX: 1,
                    transition: { duration: 0.7, delay: 0.12 + (index % 3) * 0.08, ease: EASE },
                  },
                }}
                className="absolute inset-x-6 top-0 block h-[2px] origin-left bg-brand-600"
              />

              <span className="flex items-center gap-2.5">
                <Check className="h-3.5 w-3.5 text-brand-600" strokeWidth={2.6} aria-hidden="true" />
                <span className="font-display text-[0.6875rem] font-semibold tabular-nums tracking-[0.16em] text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>

              <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-foreground">{item}</p>
            </motion.li>
          ))}
        </ul>
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

/**
 * What changes, and where it fits.
 *
 * Two sections rather than two columns, because they are two different kinds of
 * statement. A benefit is a claim, so it gets a tile with its own count set
 * behind it; a use case is a place, so it gets a ruled line and an arrow.
 */
export function SolutionOutcomes({ benefits, useCases, benefitItems = [], useCaseItems = [] }) {
  if (!benefitItems.length && !useCaseItems.length) return null;

  return (
    <>
      {benefitItems.length ? (
        <section className="section-y">
          <Container size="wide">
            <Head eyebrow={benefits.eyebrow} heading={benefits.heading} />

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
              {benefitItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
                  className="group relative flex items-center gap-4 overflow-hidden rounded-[1rem] border-l-[3px] border-brand-600 bg-white p-5 shadow-[0_18px_40px_-34px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_26px_54px_-36px_rgb(53_51_205/0.55)]"
                >
                  <BenefitMark Icon={markFor(item)} />

                  <p className="relative min-w-0 flex-1 font-display text-[0.9375rem] font-medium leading-[1.5] tracking-tight text-foreground">
                    {item}
                  </p>

                  <span
                    aria-hidden="true"
                    className="relative shrink-0 font-display text-[2rem] font-bold leading-none tabular-nums text-brand-600/[0.22] transition-colors duration-500 group-hover:text-brand-600/40"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {useCaseItems.length ? (
        <section className="section-y">
          <Container size="wide">
            <Head eyebrow={useCases.eyebrow} heading={useCases.heading} />

            <ul className="mt-9 grid gap-4 lg:mt-11 lg:grid-cols-2">
              {useCaseItems.map((item, index) => {
                const Icon = markFor(item);

                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                    transition={{ duration: 0.45, delay: (index % 2) * 0.07, ease: EASE }}
                    className="group flex items-center gap-4 rounded-[1rem] bg-white p-5 shadow-[0_18px_40px_-34px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_26px_54px_-36px_rgb(53_51_205/0.55)] sm:gap-5 sm:p-6"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-[linear-gradient(150deg,var(--color-brand-500)_0%,var(--color-brand-700)_100%)] text-white shadow-[0_12px_24px_-14px_rgb(53_51_205/0.9)] sm:h-14 sm:w-14"
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                    </span>

                    <span className="min-w-0 flex-1 text-[0.9375rem] font-medium leading-relaxed text-foreground">
                      {item}
                    </span>

                    <span
                      aria-hidden="true"
                      className="shrink-0 text-brand-600 transition-transform duration-500 group-hover:translate-x-1"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
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
                      <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                        {industry.title}
                      </h3>
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
                  <RevealGroup as="ul" stagger={0.06} className="mt-4 space-y-4">
                    {services.map((service) => (
                      <RevealItem key={service.slug} as="li" y={12}>
                        <CrossRow
                          href={service.href}
                          title={service.title}
                          summary={service.summary}
                          Icon={markFor(`${service.title} ${service.summary ?? ""}`)}
                        />
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
                  <RevealGroup as="ul" stagger={0.06} className="mt-4 space-y-4">
                    {solutions.map((solution) => (
                      <RevealItem key={solution.slug} as="li" y={12}>
                        <CrossRow
                          href={solution.href}
                          title={solution.title}
                          summary={solution.summary}
                          category={solution.categoryTitle}
                          Icon={markFor(`${solution.title} ${solution.summary ?? ""}`)}
                        />
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

/** The tinted plate a benefit's mark sits on. */
function BenefitMark({ Icon }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.8rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </span>
  );
}

/**
 * One related service or solution, as a card.
 *
 * A ruled list made these read as footnotes to the page they sit under. As
 * cards they read as the next thing to open: the brand edge marks them as ours,
 * the mark gives the eye somewhere to land, and the arrow says the row is a
 * door. The dot field in the corner is there to stop the right half of a short
 * card from being empty.
 */
function CrossRow({ href, title, summary, category, Icon }) {

  return (
    <Link
      href={href}
      className="group relative flex h-full items-start gap-4 overflow-hidden rounded-[1rem] border-l-[3px] border-brand-600 bg-white p-5 shadow-[0_18px_40px_-34px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.55)] sm:gap-5 sm:p-6"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-3 h-12 w-16 opacity-70 [background-image:radial-gradient(var(--color-brand-200)_1px,transparent_1px)] [background-size:7px_7px]"
      />

      <span
        aria-hidden="true"
        className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white sm:h-14 sm:w-14"
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.7} />
      </span>

      <span className="relative min-w-0 flex-1">
        <h3 className="font-display text-base font-semibold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
          {title}
        </h3>
        <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-muted">{summary}</span>

        {/* A solution belongs to a family; a service does not, so this is optional. */}
        {category ? (
          <span className="mt-2.5 inline-flex items-center rounded-pill border border-border bg-surface px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-muted">
            {category}
          </span>
        ) : null}
      </span>

      <span className="relative mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white">
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}

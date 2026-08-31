"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3, Boxes, FileSignature, FileStack, LayoutDashboard, MessagesSquare, Search, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * The solutions index: a blueprint, then a rail per practice.
 *
 * Services are what we do; solutions are what we build, so the page is drawn
 * like something under construction. The banner is a schematic that assembles
 * itself, and the catalogue is not a grid of cards but a set of ruled rails you
 * run your eye down, with the picture of whatever you are pointing at carried
 * beside the cursor rather than pinned to a tile.
 *
 * That preview is the reason this reads as a catalogue rather than a gallery:
 * twenty-seven pictures laid out at once would be noise, and one picture that
 * follows the reading is the same information delivered at the moment it is
 * asked for.
 */
const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ banner */

/** The modules the schematic draws, in the order the traces reach them. */
const MODULES = [
  { id: "m1", x: 8, y: 14, w: 30, h: 15, label: "Content" },
  { id: "m2", x: 62, y: 10, w: 30, h: 15, label: "Intelligence" },
  { id: "m3", x: 8, y: 62, w: 30, h: 15, label: "Process" },
  { id: "m4", x: 62, y: 66, w: 30, h: 15, label: "Experience" },
];

/** Orthogonal traces from the core out to each module, in viewBox units. */
const TRACES = [
  "M 50 45 L 34 45 L 34 29 L 23 29",
  "M 50 45 L 68 45 L 68 25 L 77 25",
  "M 50 45 L 34 45 L 34 62 L 23 62",
  "M 50 45 L 68 45 L 68 66 L 77 66",
];

function Schematic() {
  const scope = useGsap(({ reduced }) => {
    if (reduced) {
      gsap.set(["[data-trace]", "[data-module]", "[data-core]"], { opacity: 1, strokeDashoffset: 0 });
      gsap.set("[data-flow]", { opacity: 0 });
      return;
    }

    const traces = gsap.utils.toArray("[data-trace]");
    traces.forEach((trace) => {
      const length = trace.getTotalLength();
      gsap.set(trace, { strokeDasharray: length, strokeDashoffset: length });
    });

    /*
      The schematic assembles once and then stays assembled. Only the signal
      keeps moving: a hero that erases itself every few seconds reads as a
      loading state, not as a diagram.
    */
    gsap
      .timeline({ defaults: { ease: "power2.inOut" } })
      .fromTo("[data-core]", { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, transformOrigin: "50% 50%" })
      .to(traces, { strokeDashoffset: 0, duration: 0.9, stagger: 0.14 }, "-=0.2")
      .fromTo("[data-module]", { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 }, "-=0.9")
      .to("[data-pulse]", { opacity: 1, duration: 0.3 }, "-=0.3");

    /* The charge running each wire, once the wire exists. */
    gsap.utils.toArray("[data-flow]").forEach((flow, index) => {
      const length = flow.getTotalLength();
      gsap.set(flow, { strokeDasharray: `6 ${length}`, strokeDashoffset: 0, opacity: 0 });
      gsap.to(flow, {
        strokeDashoffset: -length - 6,
        opacity: 0.9,
        duration: 1.8,
        delay: 2 + index * 0.45,
        repeat: -1,
        repeatDelay: 2.2,
        ease: "power1.inOut",
        yoyo: false,
      });
    });

    gsap.to("[data-pulse]", {
      attr: { r: 17 },
      opacity: 0,
      duration: 2.6,
      delay: 2.2,
      repeat: -1,
      repeatDelay: 1.4,
      ease: "power1.out",
    });
  }, []);

  return (
    <div ref={scope} className="relative h-full w-full">
      {/* The drawing board the schematic is set out on. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[1.5rem] bg-[#f7f8fd] [background-image:linear-gradient(rgb(53_51_205/0.07)_1px,transparent_1px),linear-gradient(90deg,rgb(53_51_205/0.07)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <svg viewBox="0 0 100 90" className="absolute inset-0 h-full w-full" aria-hidden="true" fill="none">
        {TRACES.map((d) => (
          <path
            key={d}
            data-trace
            d={d}
            stroke="currentColor"
            className="text-brand-600/45"
            strokeWidth="0.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        ))}

        {TRACES.map((d) => (
          <path
            key={`flow-${d}`}
            data-flow
            d={d}
            stroke="currentColor"
            className="text-brand-600"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0"
          />
        ))}

        {/* The junctions the traces turn on. */}
        {[
          [34, 45],
          [68, 45],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.8" className="fill-brand-600/40" />
        ))}

        {MODULES.map((m) => (
          <g key={m.id} data-module>
            <rect
              x={m.x}
              y={m.y}
              width={m.w}
              height={m.h}
              rx="2.4"
              className="fill-white stroke-brand-600/30"
              strokeWidth="0.4"
            />
            <text
              x={m.x + m.w / 2}
              y={m.y + m.h / 2 + 1.4}
              textAnchor="middle"
              className="fill-foreground font-display"
              style={{ fontSize: "4px", fontWeight: 600 }}
            >
              {m.label}
            </text>
          </g>
        ))}

        {/* The core, and the ring that says it is live. */}
        <g data-core>
          <rect x="41" y="38" width="18" height="14" rx="3" className="fill-brand-600" />
          <text
            x="50"
            y="46.4"
            textAnchor="middle"
            className="fill-white font-display"
            style={{ fontSize: "4.4px", fontWeight: 600 }}
          >
            CFG
          </text>
        </g>

        <circle data-pulse cx="50" cy="45" r="13" className="stroke-brand-600/25" strokeWidth="0.4" opacity="0" />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------- hero */

export function SolutionsHero({ page, categories }) {
  const reduced = useReducedMotion();
  const [primaryCta] = page.ctas ?? [];

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_36px_92px_-58px_rgb(53_51_205/0.5)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem] sm:p-4">
          <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)]">
            <div className="px-4 py-10 sm:px-8 sm:py-14 lg:py-16 lg:pl-10">
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center rounded-pill border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700"
              >
                {page.title}
              </motion.p>

              <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.14] tracking-tight sm:leading-[1.06] text-balance text-foreground sm:text-5xl xl:text-[3.4rem]">
                <RevealText delay={0.12}>{page.tagline}</RevealText>
              </h1>

              <motion.p
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
                className="mt-7 max-w-xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
              >
                {page.intro}
              </motion.p>

              {/* The practices, and how many things each one builds. */}
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.42 } } }}
                className="mt-9 flex flex-wrap gap-2"
              >
                {categories.map((category) => (
                  <motion.li
                    key={category.id}
                    variants={{
                      hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                    }}
                  >
                    <a
                      href={`#${category.anchor}`}
                      className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground transition-colors hover:border-brand-300 hover:text-brand-700"
                    >
                      {category.title}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              {primaryCta ? (
                <motion.div
                  initial={reduced ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-10 flex flex-wrap items-center gap-5"
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

            <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] sm:min-h-[22rem] lg:min-h-full">
              <Schematic />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------- rails */

export function SolutionRails({ categories }) {
  return (
    <>
      {categories.map((category, index) => (
        <CategoryRail key={category.id} category={category} index={index} />
      ))}
    </>
  );
}

/**
 * The icon a solution is given, by what its name says it does.
 *
 * The records carry no icon of their own, and inventing a field for one would
 * put a design decision in the content layer. Matching on the title keeps the
 * mark a property of the presentation, where it belongs.
 */
const SOLUTION_ICONS = [
  [/chatbot|copilot|assistant|conversation/i, MessagesSquare],
  [/document generat|proposal|contract|letter/i, FileSignature],
  [/document|content|record|archive|dms/i, FileStack],
  [/search|discovery|knowledge/i, Search],
  [/workflow|process|automation|approval|rpa/i, Workflow],
  [/portal|intranet|experience|employee/i, LayoutDashboard],
  [/security|compliance|governance|risk|private|self-hosted/i, ShieldCheck],
  [/data|analytics|report|insight|dashboard|warehouse/i, BarChart3],
  [/integration|migration|platform|cloud|infrastructure/i, Boxes],
  [/ai|intelligen|model|agent/i, Sparkles],
];

function solutionIcon(title) {
  for (const [pattern, Icon] of SOLUTION_ICONS) if (pattern.test(title)) return Icon;
  return Boxes;
}


/**
 * The picture beside a practice.
 *
 * Named here rather than borrowed from the first solution in the list: taking
 * the lead solution's photograph put the same image on the index that the
 * detail page already opens with. Each practice gets a frame of the work it
 * actually covers, so the column shows the subject rather than a stock desk.
 *
 * Five of the six now have artwork commissioned for the practice itself
 * (`practice-*.webp`). SharePoint & Microsoft has none yet, so it still
 * borrows from the migration solution — the one case the paragraph above
 * describes. Drop a practice-sharepoint-microsoft.webp beside the others and
 * point this at it to finish the set.
 */
const PRACTICE_ART = {
  ai: {
    src: "/asset/solutions/practice-ai.webp",
    label: "Conversational AI answering from enterprise content",
  },
  "sharepoint-microsoft": {
    src: "/asset/solutions/sharepoint-migration-1.webp",
    label: "Content and collaboration on the Microsoft platform",
  },
  "real-estate": {
    src: "/asset/solutions/practice-real-estate.webp",
    label: "Property portfolios, deals and tenants under one system",
  },
  erp: {
    src: "/asset/solutions/practice-erp.webp",
    label: "Manufacturing and distribution operations on one backbone",
  },
  "mobile-iot": {
    src: "/asset/solutions/practice-mobile-iot.webp",
    label: "Mobile experiences for connected devices",
  },
  automation: {
    src: "/asset/solutions/practice-automation.webp",
    label: "Workflow and approvals running without manual handoffs",
  },
};

/** The practice name, with its opening word carried in the brand colour. */
function CategoryTitle({ title }) {
  const words = title.split(" ");
  if (words.length < 2) return title;

  return (
    <>
      <span className="text-brand-600">{words[0]}</span> {words.slice(1).join(" ")}
    </>
  );
}

/**
 * One practice: what it is on the left, what it builds on the right.
 *
 * The number is set on a plate of its own beside the word Practice, so the
 * reader is told where they are before they are told what it is, and the
 * picture underneath keeps the column from being three lines of type beside a
 * long list. Each solution is then a card rather than a ruled row: the mark,
 * the number, and the arrow give the list something to answer the pointer with.
 */
function CategoryRail({ category, index }) {
  return (
    <section id={category.anchor} className="section-y scroll-mt-28">
      <Container size="wide">
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-[3.75rem] w-[3.75rem] shrink-0 items-center justify-center rounded-[1rem] bg-white ring-1 ring-brand-200 sm:h-[4.25rem] sm:w-[4.25rem]"
              >
                <span className="font-display text-[1.4rem] font-semibold tabular-nums tracking-tight text-brand-600 sm:text-[1.7rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>

              <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Practice
              </p>
            </div>

            <h2 className="mt-6 font-display text-[1.75rem] font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              <CategoryTitle title={category.title} />
            </h2>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted">{category.description}</p>

            {PRACTICE_ART[category.anchor] ? (
              <span className="relative mt-8 block aspect-[16/11] w-full max-w-md overflow-hidden rounded-[1.25rem] bg-surface ring-1 ring-black/[0.06]">
                <Image
                  src={PRACTICE_ART[category.anchor].src}
                  alt={PRACTICE_ART[category.anchor].label}
                  fill
                  sizes="(min-width: 1024px) 28vw, 92vw"
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgb(53_51_205/0.24),transparent_58%)]"
                />
              </span>
            ) : null}
          </div>

          <ul className="space-y-3.5">
            {category.solutions.map((solution, row) => (
              <SolutionCard key={solution.slug} solution={solution} row={row} Icon={solutionIcon(solution.title)} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function SolutionCard({ solution, row, Icon }) {
  const reduced = useReducedMotion();

  return (
    <motion.li
      initial={reduced ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay: Math.min(row, 5) * 0.05, ease: EASE }}
    >
      <Link
        href={solution.href}
        className="group flex items-start gap-4 overflow-hidden rounded-[1rem] border-l-[3px] border-brand-600 bg-white p-5 shadow-[0_20px_44px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_60px_-38px_rgb(53_51_205/0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:gap-5 sm:p-6"
      >
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.9rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white sm:h-14 sm:w-14"
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.7} />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-display text-xs font-semibold tabular-nums tracking-tight text-brand-600">
            {String(row + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-1 font-display text-base font-semibold tracking-tight text-balance text-foreground transition-colors duration-300 group-hover:text-brand-700 sm:text-lg">
            {solution.title}
          </h3>
          <span className="mt-2 block text-[0.8125rem] leading-relaxed text-muted sm:text-[0.875rem]">
            {solution.summary}
          </span>
        </span>

        <span
          aria-hidden="true"
          className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-[0.7rem] border border-border bg-white text-brand-600 transition-colors duration-300 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:text-white sm:inline-flex"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.li>
  );
}

export default SolutionRails;

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { cn } from "../primitives/cn";

/**
 * The engagement arc, as alternating lanes.
 *
 * Each phase is one long capsule that runs off the side of the page, and
 * consecutive phases run off opposite sides — so the eye is handed left, right,
 * left down the arc instead of reading five identical cards. The full-width
 * rule between them is what makes the capsules read as lanes on a single track
 * rather than as loose pills.
 *
 * The bleed only exists where there is width for it. Below the desktop
 * breakpoint every lane squares up inside the gutter with its picture on top,
 * because a capsule that hangs off a phone screen is a horizontal scrollbar,
 * not a flourish.
 */
const EASE = [0.22, 1, 0.36, 1];

export function AboutEngagement({ section }) {
  const phases = section.phases ?? [];

  return (
    <section className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />
      </Container>

      {/*
        Clipped, not hidden: the lanes are meant to run past the edge of the
        page, and this is what stops that intent — and the sideways travel each
        lane arrives on — from becoming a horizontal scrollbar.
      */}
      <ol className="mt-11 overflow-x-clip border-b border-border lg:mt-14">
        {phases.map((phase, index) => (
          <PhaseLane key={phase.step} phase={phase} index={index} />
        ))}
      </ol>
    </section>
  );
}

/** One phase, running off whichever side its turn falls on. */
function PhaseLane({ phase, index }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);

  /** Even-numbered phases lean left, odd ones lean right. */
  const leansLeft = index % 2 === 0;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pan = useTransform(scrollYProgress, [0, 1], leansLeft ? ["-4%", "4%"] : ["4%", "-4%"]);

  return (
    <li ref={ref} className="border-t border-border">
      <motion.div
        initial={reduced ? false : { opacity: 0, x: leansLeft ? -56 : 56 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -14% 0px" }}
        transition={{ duration: 0.75, ease: EASE }}
        className={cn(
          "group relative mx-gutter my-4 flex flex-col gap-4 rounded-[1.75rem] border border-brand-600/30 p-4 sm:my-6 sm:gap-5",
          "transition-colors duration-500 hover:border-brand-600/60",
          "lg:my-5 lg:h-[clamp(9.5rem,12.5vw,12rem)] lg:flex-row lg:items-center lg:gap-8 lg:rounded-full lg:p-0",
          leansLeft
            ? "lg:-ml-[7vw] lg:mr-[6vw] lg:pl-[8.5vw] lg:pr-4"
            : "lg:ml-[6vw] lg:-mr-[7vw] lg:pl-4 lg:pr-[8.5vw]",
        )}
      >
        {/* The picture, capping the lane on the side the lane leans away from. */}
        <div
          className={cn(
            "relative order-1 h-24 w-full shrink-0 overflow-hidden rounded-[1.35rem] bg-surface sm:h-40",
            "lg:h-[78%] lg:w-[clamp(16rem,29vw,26rem)] lg:rounded-full",
            leansLeft ? "lg:order-3" : "lg:order-1",
          )}
        >
          <motion.div className="absolute inset-[-6%]" style={reduced ? undefined : { x: pan }}>
            <Image
              src={phase.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 29vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
          </motion.div>
        </div>

        {/* The numeral alone, set large and pale: an index, not a caption. */}
        <p
          className={cn(
            "order-2 shrink-0 font-display text-5xl font-bold leading-none tracking-tight text-brand-200 sm:text-6xl lg:text-[4.25rem]",
            leansLeft ? "lg:order-1" : "lg:order-3",
          )}
        >
          <span className="sr-only">Step </span>
          {phase.step}
        </p>

        <div className="order-3 flex-1 lg:order-2 lg:text-center">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
            {phase.title}
          </h3>
          <p className="mt-2.5 text-[0.875rem] leading-relaxed text-muted lg:mx-auto lg:max-w-lg">
            {phase.description}
          </p>
        </div>
      </motion.div>
    </li>
  );
}

export default AboutEngagement;

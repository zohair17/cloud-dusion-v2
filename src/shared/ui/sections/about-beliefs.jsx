"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";

/**
 * The convictions, dealt as a deck.
 *
 * Each card pins at the top of the reading line and the next one slides over
 * it, pressing the one behind a little further back — so the six convictions
 * are read one at a time, in order, and the ones already read stay visible as
 * a stack rather than scrolling away into nothing. It is the only section on
 * the site that holds the reader on a single card at a time, which is the
 * right emphasis for the page's argument about itself.
 *
 * The offsets are per-index, and the scale is scrubbed from the deck's own
 * progress, so adding a seventh conviction needs no new numbers.
 */
const EASE = [0.22, 1, 0.36, 1];

export function AboutBeliefs({ section }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.3", "end end"] });
  const items = section.items ?? [];

  return (
    <section className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <div ref={ref} className="relative mt-12 lg:mt-16">
          {items.map((item, index) => (
            <BeliefCard
              key={item.title}
              item={item}
              index={index}
              total={items.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function BeliefCard({ item, index, total, progress }) {
  const reduced = useReducedMotion();

  /*
   * A card stops shrinking the moment the last one has landed, so the deck
   * settles instead of continuing to compress off the bottom of the run.
   */
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(progress, [start, 1], [1, 1 - (total - index) * 0.022]);
  const dim = useTransform(progress, [start, end], [0, 0.55]);

  return (
    <div
      className="sticky pb-5 sm:pb-6"
      style={{ top: `calc(6.5rem + ${index * 0.85}rem)` }}
    >
      <motion.article
        initial={reduced ? false : { opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -18% 0px" }}
        transition={{ duration: 0.65, ease: EASE }}
        style={reduced ? undefined : { scale, transformOrigin: "50% 0%" }}
        className="relative overflow-hidden rounded-[1.75rem] bg-white px-6 py-7 shadow-[0_28px_70px_-46px_rgb(21_21_28/0.5)] ring-1 ring-black/[0.06] sm:px-9 sm:py-9 lg:px-12 lg:py-11"
      >
        {/* The brand edge, growing with the card's place in the deck. */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[5px] rounded-r-full bg-brand-600"
          style={{ opacity: 0.35 + (index / Math.max(total - 1, 1)) * 0.65 }}
        />

        {/*
          On a wide card the claim and its reasoning sit side by side, so the
          card's width is read rather than left as margin.
        */}
        <div className="grid items-center gap-x-10 gap-y-4 sm:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,0.85fr)_minmax(0,1.15fr)] xl:gap-x-14">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-semibold leading-none tracking-tight text-brand-600/25 sm:text-5xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <Quote className="h-5 w-5 shrink-0 text-brand-300 lg:hidden" strokeWidth={1.6} aria-hidden="true" />
          </div>

          <h3 className="font-display text-xl font-semibold tracking-tight text-balance text-foreground sm:text-2xl">
            {item.title}
          </h3>

          <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-2 sm:col-start-2 sm:text-base lg:col-span-1 lg:col-start-3">
            {item.description}
          </p>
        </div>

        {/* What is behind you dims; what you are reading does not. */}
        {reduced ? null : (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-white"
            style={{ opacity: dim }}
          />
        )}
      </motion.article>
    </div>
  );
}

export default AboutBeliefs;

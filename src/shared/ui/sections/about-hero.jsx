"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";

/**
 * The about banner, as three drifting rows.
 *
 * The industries banner shows nine rooms in three sliding columns because the
 * page is about nine different places. This page is about one company, so it
 * shows the company: the same device turned on its side, three rows of the
 * firm's own photographs running past each other at different speeds and in
 * alternating directions, feathered at both ends so the band reads as a window
 * onto a larger set rather than a gallery with a first and last picture.
 *
 * The drift is a plain linear loop over a doubled list, which is why it never
 * seams: at the halfway point the second copy sits exactly where the first
 * started, and the transform resets to zero with nothing on screen changing.
 */
const EASE = [0.22, 1, 0.36, 1];

export function AboutHero({ eyebrow, heading, headingAccent, intro, ctas = [], images = [], label }) {
  const reduced = useReducedMotion();
  const [primaryCta] = ctas;

  /*
   * Dealt round-robin into three rows rather than sliced into three blocks, so
   * neighbouring frames are never consecutive shots from the same session.
   */
  const rows = [[], [], []];
  images.forEach((image, index) => rows[index % 3].push(image));

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_34px_90px_-58px_rgb(53_51_205/0.5)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem] sm:p-4">
          <div className="grid items-center gap-6 overflow-hidden rounded-[1.5rem] bg-surface sm:gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0 lg:rounded-[2rem]">
            <div className="order-2 px-5 pb-2 sm:px-10 sm:pt-12 lg:order-1 lg:py-16 lg:pl-14 lg:pr-10">
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600"
              >
                <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
                {eyebrow}
              </motion.p>

              <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.14] tracking-tight sm:leading-[1.06] text-balance text-foreground sm:text-5xl xl:text-[3.25rem]">
                <RevealText delay={0.12}>{heading}</RevealText>{" "}
                {headingAccent ? (
                  <RevealText
                    className="text-brand-600"
                    delay={0.12 + heading.split(" ").length * 0.055}
                  >
                    {headingAccent}
                  </RevealText>
                ) : null}
              </h1>

              {intro ? (
                <motion.p
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
                  className="mt-7 max-w-xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
                >
                  {intro}
                </motion.p>
              ) : null}

              {primaryCta ? (
                <motion.div
                  initial={reduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
                  className="mt-9 flex flex-wrap items-center gap-5"
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

            {/* The three rows, feathered at both ends. */}
            <div
              className="relative order-1 h-[13rem] overflow-hidden sm:h-[22rem] lg:order-2 lg:h-[32rem]"
              role="img"
              aria-label={label}
              style={{
                maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center gap-3 py-4 sm:gap-4">
                {rows.map((row, index) => (
                  <MarqueeRow
                    key={index}
                    items={row}
                    forward={index % 2 === 0}
                    duration={[38, 46, 42][index]}
                    reduced={reduced}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** One row of frames, looping over a doubled list so the seam never shows. */
function MarqueeRow({ items, forward, duration, reduced }) {
  const doubled = [...items, ...items];

  return (
    <div className="min-h-0 flex-1 overflow-hidden">
      <motion.div
        className="flex h-full w-max gap-3 sm:gap-4"
        animate={reduced ? undefined : { x: forward ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((src, index) => (
          <figure
            key={`${src}-${index}`}
            className="relative h-full w-[9rem] shrink-0 overflow-hidden rounded-[1.1rem] bg-white shadow-[0_18px_44px_-30px_rgb(21_21_28/0.6)] ring-1 ring-black/[0.06] sm:w-[13rem] lg:w-[15rem]"
          >
            <Image
              src={src}
              alt=""
              fill
              quality={90}
              sizes="(min-width: 1024px) 15rem, 13rem"
              className="object-cover"
            />
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutHero;

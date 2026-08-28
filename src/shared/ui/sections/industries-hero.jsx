"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { cn } from "../primitives/cn";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";

/**
 * The industries banner, as two drifting columns.
 *
 * The page is about nine very different rooms, so the banner shows nine rooms
 * rather than one: two columns of frames sliding past each other at different
 * speeds, feathered out at the top and bottom so they read as a window onto a
 * larger set instead of a gallery with a first and last item.
 *
 * The drift is a plain linear loop over a doubled list, which is why it never
 * seams: at the halfway point the second copy sits exactly where the first
 * started, and the transform resets to zero with nothing on screen changing.
 */
const EASE = [0.22, 1, 0.36, 1];

export function IndustriesHero({ page, industries }) {
  const reduced = useReducedMotion();
  const [primaryCta] = page.ctas ?? [];

  /*
   * Dealt round-robin into three columns rather than sliced into three blocks,
   * so neighbouring frames are never from the same corner of the catalogue.
   */
  const columns = [[], [], []];
  industries.forEach((industry, index) => columns[index % 3].push(industry));

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_34px_90px_-58px_rgb(53_51_205/0.5)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem] sm:p-4">
          <div className="grid items-center gap-8 overflow-hidden rounded-[1.5rem] bg-surface lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0 lg:rounded-[2rem]">
            <div className="px-6 pt-12 sm:px-10 lg:py-16 lg:pl-14 lg:pr-10">
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600"
              >
                <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
                {page.title}
              </motion.p>

              <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.14] tracking-tight sm:leading-[1.06] text-balance text-foreground sm:text-5xl xl:text-[3.25rem]">
                <RevealText delay={0.12}>{page.tagline}</RevealText>
              </h1>

              <motion.p
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
                className="mt-7 max-w-xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
              >
                {page.intro}
              </motion.p>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.42, ease: EASE }}
                className="mt-9 flex flex-wrap items-center gap-5"
              >
                {primaryCta ? (
                  <Button href={primaryCta.href} variant="primary" size="lg" className="gap-3 pr-2.5">
                    {primaryCta.label}
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Button>
                ) : null}

              </motion.div>
            </div>

            {/* The two columns, feathered at both ends. */}
            <div
              className="relative h-[20rem] overflow-hidden sm:h-[24rem] lg:h-[32rem]"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)",
              }}
            >
              <div className="absolute inset-0 flex justify-center gap-4 px-6 lg:justify-between lg:px-0">
                {columns.map((column, index) => (
                  <MarqueeColumn
                    key={index}
                    items={column}
                    up={index % 2 === 0}
                    duration={[34, 42, 38][index]}
                    reduced={reduced}
                    className={index === 2 ? "hidden lg:block" : undefined}
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

/** One column of frames, looping over a doubled list so the seam never shows. */
function MarqueeColumn({ items, up, duration, reduced, className }) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("w-[9.5rem] shrink-0 sm:w-[11rem] lg:w-auto lg:min-w-0 lg:shrink lg:grow lg:basis-0", className)}>
      <motion.div
        className="flex flex-col gap-4"
        animate={reduced ? undefined : { y: up ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((industry, index) => (
          <figure
            key={`${industry.slug}-${index}`}
            className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[1.25rem] bg-white shadow-[0_18px_44px_-30px_rgb(21_21_28/0.6)] ring-1 ring-black/[0.06]"
          >
            <Image
              src={industry.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 13rem, 11rem"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgb(7_7_30/0.78),rgb(7_7_30/0.12)_58%,transparent)]"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-3.5 text-[0.75rem] font-semibold leading-tight text-white">
              {industry.title}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </div>
  );
}

export default IndustriesHero;

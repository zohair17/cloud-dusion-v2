"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { Reveal } from "../motion/reveal";
import { cn } from "../primitives/cn";

/** Seconds each slide holds before the next one crosses over it. */
const HOLD = 5;

/** The progress ring is drawn on a 38px box with r=16. */
const RING_R = 16;
const RING_C = 2 * Math.PI * RING_R;

/**
 * The slideshow half of the hero.
 *
 * One picture crosses into the next — no sliding, no wipe: a crossfade is the
 * only transition that does not imply the pictures are a sequence you could
 * scrub. The caption names what is on screen and the ring says how long it has
 * left, which together are the whole reason a reader trusts that it advanced by
 * itself rather than glitched.
 *
 * With reduced motion the panel stops advancing and shows the first frame. The
 * captions of the others would then be unreachable, so the counter goes too.
 */
function HeroSlideshow({ slides }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (reduced || total < 2) return undefined;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % total), HOLD * 1000);
    return () => window.clearInterval(id);
  }, [reduced, total]);

  if (!total) return null;
  const active = slides[index % total];

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[1.375rem] bg-[#0b0b2a]">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.image}
          aria-hidden={i !== index}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      ))}

      {/* Enough darkness at the foot to set the caption on, and no more. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_0_0/0.62)_0%,rgb(0_0_0/0.18)_38%,transparent_62%)]"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={active.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: reduced ? 0 : 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="max-w-[58%] text-[0.625rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/75 sm:max-w-[22rem]"
          >
            {active.label}
          </motion.p>
        </AnimatePresence>

        {total > 1 && !reduced ? (
          <div className="flex shrink-0 items-center gap-2.5">
            <svg width="38" height="38" viewBox="0 0 38 38" className="-rotate-90" aria-hidden="true">
              <circle cx="19" cy="19" r={RING_R} fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth="1.5" />
              <motion.circle
                key={index}
                cx="19"
                cy="19"
                r={RING_R}
                fill="none"
                stroke="rgb(255 255 255 / 0.85)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={RING_C}
                initial={{ strokeDashoffset: RING_C }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: HOLD, ease: "linear" }}
              />
            </svg>
            <p className="text-xs font-semibold tracking-tight text-white/50">
              <span className="text-white">{index + 1}</span> / {total}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Service hero.
 *
 * Not a slab this time — the hero *is* the section. Two halves of one frame:
 * the words on the left with the room a heading of this size wants, the panel
 * of stills filling the right to the rail's edge. Nothing is drawn around them,
 * so the page opens on the claim rather than on a card containing the claim.
 *
 * A service has no single picture — it has a workflow, a way of thinking, and
 * the engineering underneath — so it gets three, one at a time.
 */
export function ServiceHero({ trail = [], eyebrow, heading, tagline, ctas = [], slides = [] }) {
  const [primaryCta, ...secondaryCtas] = ctas;

  return (
    <section className="relative isolate">
      <Container size="wide" className="pt-4 pb-10 sm:pt-5 lg:pb-14">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint sm:text-sm">
              {trail.map((crumb, index) => {
                const last = index === trail.length - 1;

                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="h-3.5 w-3.5 text-border" aria-hidden="true" />
                    ) : null}
                    {last || !crumb.href ? (
                      <span aria-current={last ? "page" : undefined} className="text-muted">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-brand-700">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div
          className={cn(
            "relative isolate grid min-h-[clamp(26rem,72vh,44rem)] items-center gap-8 overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_40px_100px_-40px_rgb(11_11_42/0.28)] ring-1 ring-black/[0.04] sm:p-7 lg:gap-10 lg:p-8",
            /* A service with no pictures yet gets the whole card for its words. */
            slides.length && "lg:grid-cols-2",
          )}
        >
          <div className="relative z-10 w-full max-w-2xl lg:pl-4 lg:pr-10">
            {eyebrow ? (
              <Reveal>
                <p className="inline-flex items-center rounded-pill border border-brand-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-700 shadow-sm backdrop-blur-sm sm:text-sm">
                  {eyebrow}
                </p>
              </Reveal>
            ) : null}

            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem]">
              <RevealText delay={0.1}>{heading}</RevealText>
            </h1>

            {/*
              The promise, in the brand: on a service page the tagline is the
              claim and the title is only its name, so this is the line that
              takes the colour.
            */}
            {tagline ? (
              <p className="mt-5 max-w-xl font-display text-lg font-medium leading-snug text-balance text-brand-600 sm:text-xl lg:text-2xl">
                <RevealText delay={0.1 + heading.split(" ").length * 0.055}>{tagline}</RevealText>
              </p>
            ) : null}

            {ctas.length ? (
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                    className="w-full whitespace-nowrap sm:w-auto"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : null}
                {secondaryCtas.map((cta) => (
                  <Button
                    key={cta.intent}
                    href={cta.href}
                    variant="secondary"
                    size="lg"
                    className="w-full whitespace-nowrap sm:w-auto"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          {/*
            The panel is the right half of the frame, top to bottom. Its corner
            is the only shape in the hero — these are photographs on a dark
            ground, and the radius is what stops them reading as a hole cut in
            the page.
          */}
          {slides.length ? (
            <div className="relative h-[clamp(15rem,52vw,22rem)] w-full lg:h-full lg:min-h-[clamp(24rem,64vh,40rem)]">
              <HeroSlideshow slides={slides} />
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default ServiceHero;

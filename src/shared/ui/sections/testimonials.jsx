"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "../primitives/container";
import { Reveal } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";
import { cn } from "../primitives/cn";

/**
 * How long a quote holds before the rail moves on.
 *
 * The source site turns its carousel every three seconds, which is fine for a
 * one-line blurb and far too quick for these — a reader who has not finished
 * the paragraph has been shown the door. Six seconds is roughly the time the
 * longest of them takes to read.
 */
const DWELL = 6000;

/**
 * Where a card sits, by how far it is from the open one.
 *
 * Cards are pinned to a rail and hang from it, so they only travel sideways —
 * the depth comes from scale and a degree or two of tilt, not from turning.
 * Anything more than two places away is off the rail and not drawn.
 */
const SPAN = 1.06;

function place(offset) {
  const distance = Math.abs(offset);
  const open = offset === 0;

  return {
    // Only the slide is on the <li>: the stem and its node hang from the rail
    // at full size, and it is the card below them that shrinks and swings.
    shift: `translateX(${(offset * SPAN * 100).toFixed(2)}%)`,
    scale: open ? 1 : 0.9,
    tilt: open ? 0 : Math.sign(offset) * Math.min(distance, 2) * 1.4,
    opacity: distance > 2.2 ? 0 : open ? 1 : 0.5,
    zIndex: 30 - Math.round(distance),
    reachable: distance <= 2.2,
  };
}

/**
 * Testimonials.
 *
 * Quotes hang from a single rail like cards on a wire: one is pulled forward
 * and readable, the rest stay pinned and dimmed at either side.
 *
 * Each card carries its own attribution: the company's mark above the quote and
 * the speaker below it. That belongs on the card rather than under the rail —
 * a quote whose author is named somewhere else is a quote you have to look up.
 */
export function Testimonials({ section }) {
  const items = section?.items ?? [];
  const count = items.length;
  const [active, setActive] = useState(0);
  const [held, setHeld] = useState(false);

  /*
   * The rail turns on its own, and stops the moment anyone is actually using
   * it — a pointer over the cards, or the keyboard inside them. It also waits
   * out a full dwell after a manual move rather than snatching the quote away,
   * which is what listing `active` here buys.
   */
  useEffect(() => {
    if (count < 2 || held) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => setActive((current) => (current + 1) % count), DWELL);
    return () => clearInterval(timer);
  }, [count, held, active]);

  if (count === 0) return null;

  // The run is a loop: the arrows wrap, because the timer does.
  const step = (delta) => setActive((current) => (current + delta + count) % count);

  return (
    <section className="section-y overflow-x-clip">
      <Container size="wide">
        <h2 className="mx-auto max-w-[46rem] text-center font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight sm:leading-[1.15] text-balance sm:text-4xl lg:text-5xl">
          <RevealText>{section.heading}</RevealText>{" "}
          {section.headingAccent ? (
            <RevealText
              className="text-brand-600"
              delay={section.heading.split(" ").length * 0.055}
            >
              {section.headingAccent}
            </RevealText>
          ) : null}
        </h2>

        {/* The rail's own header: whose words these are, and where you are in them. */}
        <div className="mt-12 flex items-end justify-between gap-6 sm:mt-14">
          {section.eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              {section.eyebrow}
            </p>
          ) : null}

          <p className="text-xs font-medium tabular-nums text-faint">
            {String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>

        <Reveal delay={0.1}>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label={section.eyebrow ?? "Testimonials"}
            className="relative mt-5 [--card-w:clamp(17.5rem,30vw,26rem)]"
            onPointerEnter={() => setHeld(true)}
            onPointerLeave={() => setHeld(false)}
            onFocusCapture={() => setHeld(true)}
            onBlurCapture={() => setHeld(false)}
          >
            {/* The wire itself, and the cards hanging off it. */}
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-border" />

            {/*
              Every card is stacked into one grid cell, so the row is as tall as
              the longest quote and no quote is ever cut off — a height guessed
              in `rem` would fit at one width and clip at the next.
            */}
            <ul className="relative grid">
              {items.map((item, index) => {
                const spot = place(index - active);
                const isOpen = index === active;

                return (
                  <li
                    key={item.id}
                    className="relative w-[var(--card-w)] justify-self-center pt-14 transition-[transform,opacity] duration-500 ease-out [grid-area:1/1]"
                    style={{
                      transform: spot.shift,
                      opacity: spot.opacity,
                      zIndex: spot.zIndex,
                      pointerEvents: spot.reachable ? "auto" : "none",
                    }}
                  >
                    {/* Stem and node: the card's own attachment to the rail. */}
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-0 h-14 w-px -translate-x-1/2 bg-border"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute left-1/2 top-[-0.25rem] h-2 w-2 -translate-x-1/2 rounded-full transition-colors duration-500",
                        isOpen ? "bg-brand-600" : "border border-border bg-white",
                      )}
                    />

                    <div
                      className={cn(
                        "relative flex h-full w-full origin-top flex-col rounded-2xl bg-white p-6 ring-1 transition-[box-shadow,rotate,scale] duration-500 ease-out sm:p-7",
                        isOpen
                          ? "shadow-[0_36px_70px_-30px_rgb(25_24_89/0.35),0_4px_10px_-6px_rgb(11_11_42/0.18)] ring-brand-100"
                          : "shadow-[0_14px_30px_-22px_rgb(11_11_42/0.35)] ring-black/[0.05]",
                      )}
                      style={{ rotate: `${spot.tilt.toFixed(2)}deg`, scale: String(spot.scale) }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        {/*
                          Whose words these are, stated at the top in their own
                          mark. A company without one in the library falls back
                          to its name set as a wordmark, which holds the same
                          slot so the row of cards keeps its line.
                        */}
                        {item.logo ? (
                          <Image
                            src={`/asset/clients/${item.logo}`}
                            alt={item.company}
                            width={320}
                            height={160}
                            sizes="120px"
                            className="h-7 w-auto max-w-[8.5rem] object-contain object-left"
                          />
                        ) : (
                          <span className="flex h-7 items-center font-display text-sm font-semibold uppercase tracking-[0.12em] text-foreground">
                            {item.company}
                          </span>
                        )}

                        {item.rating ? (
                          <span
                            className="flex items-center gap-0.5"
                            aria-label={`${item.rating} out of 5`}
                          >
                            {Array.from({ length: item.rating }, (_, star) => (
                              <Star
                                key={star}
                                aria-hidden="true"
                                className="h-3 w-3 fill-brand-600 text-brand-600"
                              />
                            ))}
                          </span>
                        ) : null}
                      </div>

                      {/*
                        A dimmed card is a preview, not a read: its quote fades
                        out at the fold rather than stopping at a hard edge.
                      */}
                      <blockquote
                        className={cn(
                          "mt-5 flex-1 overflow-hidden text-sm leading-[1.65] text-foreground",
                          !isOpen &&
                            "[mask-image:linear-gradient(to_bottom,#000_62%,transparent_100%)]",
                        )}
                      >
                        {item.quote}
                      </blockquote>

                      {/* The speaker, on their own card rather than under the
                          rail — a quote and its author belong together. */}
                      <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                        {item.avatar ? (
                          <Image
                            src={`/asset/testimonials/${item.avatar}`}
                            alt={item.name}
                            width={320}
                            height={320}
                            sizes="48px"
                            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-black/[0.06]"
                          />
                        ) : null}

                        <div className="min-w-0">
                          <p className="truncate font-display text-sm font-semibold tracking-tight">
                            {item.name}
                          </p>
                          <p className="truncate text-xs text-muted">
                            {[item.role, item.company].filter(Boolean).join(", ")}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-current={isOpen || undefined}
                        aria-label={`${item.name}, ${item.company}`}
                        onClick={() => setActive(index)}
                        className={cn(
                          "absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500",
                          isOpen ? "cursor-default" : "cursor-pointer",
                        )}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="mt-10 flex items-center justify-center gap-5">
            <Control label="Previous testimonial" onClick={() => step(-1)}>
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </Control>

            <span aria-hidden="true" className="block h-px w-24 bg-border sm:w-32">
              <span
                className="block h-px bg-brand-600 transition-[width] duration-500 ease-out"
                style={{ width: `${((active + 1) / count) * 100}%` }}
              />
            </span>

            <Control label="Next testimonial" onClick={() => step(1)}>
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Control>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Control({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-300 hover:text-brand-700"
    >
      {children}
    </button>
  );
}

export default Testimonials;

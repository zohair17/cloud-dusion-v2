"use client";

import { useReducedMotion } from "framer-motion";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/** Seconds for one full pass of a rail. The lower rail runs slower on purpose. */
const PASS = [30, 42];

function Chip({ label, muted }) {
  return (
    <li
      className={cn(
        "inline-flex shrink-0 items-center gap-2.5 rounded-pill border bg-white px-5 py-2.5 text-sm font-medium tracking-tight whitespace-nowrap sm:px-6 sm:py-3 sm:text-base",
        muted ? "border-border text-muted" : "border-brand-200 text-foreground",
      )}
    >
      <span
        aria-hidden="true"
        className={cn("h-1.5 w-1.5 rounded-full", muted ? "bg-brand-300" : "bg-brand-600")}
      />
      {label}
    </li>
  );
}

/**
 * AI + Microsoft.
 *
 * The claim is that these agents are built on a platform the enterprise already
 * runs, so the products themselves are the illustration — set moving on two
 * rails at different speeds, the way a stack that is always on looks.
 *
 * Each rail carries the list twice and travels exactly half its own width, which
 * is what makes the loop seamless: the moment it would show the join, it is back
 * where it started. Under reduced motion the rails stop and the products simply
 * wrap, because a marquee is unreadable to anyone it makes ill.
 */
export function ServiceStack({ section, technologies = [] }) {
  const reduced = useReducedMotion();

  const scope = useGsap(({ reduced: less }) => {
    if (less) return;

    gsap.utils.toArray("[data-rail]").forEach((rail, index) => {
      const reverse = index % 2 === 1;

      gsap.fromTo(
        rail,
        { xPercent: reverse ? -50 : 0 },
        {
          xPercent: reverse ? 0 : -50,
          duration: PASS[index % PASS.length],
          ease: "none",
          repeat: -1,
        },
      );
    });
  }, [technologies.length]);

  if (!section || !technologies.length) return null;

  /*
   * Both rails carry the whole list, the lower one in reverse — half a list
   * each would leave the shorter rail with a gap to travel through. The track
   * is four passes of it and travels exactly two, so the join is always off
   * screen: seamless needs one pass to be wider than the viewport, and two
   * passes of eight chips clears any monitor.
   */
  const rails = [technologies, [...technologies].reverse()];

  return (
    <section ref={scope} className="overflow-x-clip section-y">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          <p className="text-base leading-[1.7] text-muted sm:text-lg lg:mt-2">{section.body}</p>
        </div>
      </Container>

      {reduced ? (
        <Container size="wide">
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <Chip key={technology.id} label={technology.label} />
            ))}
          </ul>
        </Container>
      ) : (
        /*
          The rails run the full width of the viewport, not the rail the rest of
          the page keeps to — a marquee that stops at a margin reads as a
          scrolling box. The mask returns the margin optically instead.
        */
        <div
          aria-hidden="true"
          className="mt-12 space-y-3.5 [mask-image:linear-gradient(to_right,transparent,#000_9%,#000_91%,transparent)]"
        >
          {rails.map((rail, index) => (
            <div key={index} className="overflow-hidden">
              <ul data-rail className="flex w-max gap-3.5">
                {[...rail, ...rail, ...rail, ...rail].map((technology, i) => (
                  <Chip
                    key={`${technology.id}-${i}`}
                    label={technology.label}
                    muted={index % 2 === 1}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* The rails are decorative; this is the list that is actually read out. */}
      {reduced ? null : (
        <ul className="sr-only">
          {technologies.map((technology) => (
            <li key={technology.id}>{technology.label}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ServiceStack;

"use client";

import { Reveal } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";
import { cn } from "../primitives/cn";

/**
 * Section head — eyebrow, heading, optional standfirst.
 *
 * Every section on the page opens the same way, so the rhythm is defined once.
 * The eyebrow is the only brand-coloured text in a section head; the heading
 * stays near-black so the page does not turn blue.
 */
export function SectionHeading({ eyebrow, heading, intro, align = "left", className }) {
  const centered = align === "center";

  return (
    <div className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? (
        <Reveal>
          <p
            className={cn(
              "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600",
              centered && "justify-center"
            )}
          >
            <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <RevealText
        as="h2"
        delay={0.08}
        className="mt-5 font-display text-[1.5rem] font-semibold leading-[1.18] tracking-tight text-balance sm:text-4xl sm:leading-[1.12] lg:text-5xl"
      >
        {heading}
      </RevealText>

      {intro ? (
        <Reveal delay={0.14}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
        </Reveal>
      ) : null}
    </div>
  );
}

export default SectionHeading;

"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * The Challenge.
 *
 * A ledger of what is currently wrong, not a grid of cards — these are five
 * statements of the same kind, and a list is what says so. Each entry is ruled
 * off, and the rule is what animates: it draws in from the left as the row
 * arrives, so the section assembles as a page being written rather than eight
 * boxes appearing.
 *
 * The heading holds still beside it on a wide screen. A reader scanning five
 * problems should not lose the sentence that framed them.
 */
export function ServiceChallenges({ section }) {
  const scope = useGsap(({ reduced }) => {
    gsap.utils.toArray("[data-row]").forEach((row) => {
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: row, start: "top 88%", once: true },
      });

      timeline
        .from(row.querySelector("[data-rule]"), {
          scaleX: 0,
          duration: 0.7,
          ease: "power3.out",
        })
        .from(
          row.querySelectorAll("[data-fade]"),
          {
            opacity: 0,
            x: reduced ? 0 : -14,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.07,
          },
          0.06,
        );
    });
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          </div>

          <ul>
            {items.map((item, index) => (
              <li key={item} data-row className="relative pt-6 pb-7 sm:pt-7 sm:pb-8">
                <span
                  data-rule
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-brand-600 via-brand-300 to-border"
                />

                <div className="flex gap-5 sm:gap-7">
                  <p
                    data-fade
                    aria-hidden="true"
                    className="shrink-0 pt-0.5 font-display text-sm font-semibold tabular-nums tracking-tight text-brand-600"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p data-fade className="text-base leading-[1.6] text-balance text-muted sm:text-lg">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default ServiceChallenges;

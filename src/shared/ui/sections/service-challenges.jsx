"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * The Challenge.
 *
 * What is currently wrong, one statement per row. The rows are plates rather
 * than ruled lines: the ruled version left the numeral floating in a column of
 * its own with the spacing between rows doing all the work, and on a narrow
 * screen that read as gaps. A plate carries its own spacing, so the rhythm no
 * longer depends on the air around it.
 *
 * The brand rule down the left edge is what animates: it draws in as the row
 * arrives, so the section assembles as a page being written.
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
          scaleY: 0,
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
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />
          </div>

          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={item}
                data-row
                className="group relative overflow-hidden rounded-[1.15rem] bg-white px-5 py-5 ring-1 ring-border transition-[box-shadow,background-color] duration-500 hover:bg-brand-50/50 hover:shadow-[0_22px_40px_-30px_rgb(53_51_205/0.5)] sm:px-7 sm:py-6"
              >
                <span
                  data-rule
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-top bg-[linear-gradient(to_bottom,var(--color-brand-600),var(--color-brand-300))]"
                />

                <div className="flex items-start gap-4 sm:gap-5">
                  <p
                    data-fade
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[0.6rem] bg-brand-600/10 font-display text-[0.6875rem] font-semibold tabular-nums tracking-[0.08em] text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white sm:h-9 sm:w-9 sm:text-xs"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p data-fade className="text-[0.9375rem] leading-[1.6] text-balance text-muted sm:text-base">
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

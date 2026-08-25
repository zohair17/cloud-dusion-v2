"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * Capabilities.
 *
 * Ten of them — too many to be cards without the page turning into a wall of
 * boxes, and exactly the right number for an index. So this is set as a spec
 * sheet: two columns of ruled entries, each numbered, which is what a reader
 * scanning for one particular capability actually wants.
 *
 * The reveal is a wipe rather than a fade: each entry is uncovered left to
 * right, so the sheet reads as being printed.
 */
export function ServiceCapabilities({ section }) {
  const scope = useGsap(({ reduced }) => {
    gsap.utils.toArray("[data-entry]").forEach((entry) => {
      gsap.from(entry, {
        clipPath: reduced ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        opacity: reduced ? 0 : 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: entry, start: "top 90%", once: true },
      });
    });
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <ol className="mt-14 grid gap-x-12 lg:grid-cols-2 lg:gap-x-16">
          {items.map((item, index) => (
            <li
              key={item.title}
              data-entry
              className="group border-t border-border py-6 transition-colors duration-500 hover:border-brand-600 sm:py-7"
            >
              <div className="flex gap-5 sm:gap-7">
                <p
                  aria-hidden="true"
                  className="shrink-0 pt-1 font-display text-xs font-semibold tabular-nums tracking-[0.12em] text-faint transition-colors duration-500 group-hover:text-brand-600"
                >
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div>
                  <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-balance sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-[1.65] text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default ServiceCapabilities;

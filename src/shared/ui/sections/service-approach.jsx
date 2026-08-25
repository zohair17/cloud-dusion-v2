"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * Our Approach.
 *
 * Four principles that are meant to be read in order and held together, so they
 * are dealt as a deck: each card sticks under the one before it, and the one
 * behind settles back as the next covers it. The reader ends the section with
 * all four in view as a stack rather than having scrolled past three of them.
 *
 * The sticking is CSS — no ancestor of this section may clip its overflow or the
 * whole figure silently degrades to a plain list. GSAP only does the settling.
 */
export function ServiceApproach({ section }) {
  const scope = useGsap(({ reduced }) => {
    const cards = gsap.utils.toArray("[data-card]");

    cards.forEach((card, index) => {
      const next = cards[index + 1];
      if (!next) return;

      gsap.to(card, {
        scale: reduced ? 1 : 0.94,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: next,
          start: "top 86%",
          end: "top 34%",
          scrub: true,
        },
      });
    });
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-14">
          {items.map((item, index) => (
            <li
              key={item.title}
              className="sticky pb-6 last:pb-0"
              style={{ top: `calc(6.5rem + ${index * 1.1}rem)` }}
            >
              <article
                data-card
                className="cfg-card grid origin-top gap-5 rounded-card p-7 sm:p-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:p-11"
              >
                <div className="flex items-start gap-5">
                  <p
                    aria-hidden="true"
                    className="font-display text-4xl font-semibold leading-none tabular-nums tracking-tight text-brand-600/25 sm:text-5xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-balance sm:text-2xl">
                    {item.title}
                  </h3>
                </div>

                <p className="text-base leading-[1.65] text-muted lg:border-l lg:border-border lg:pl-12">
                  {item.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceApproach;

"use client";

import { Check } from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * What you gain.
 *
 * The page's only ticked list, and deliberately so: after the challenges, the
 * approach and the capabilities, this is the section that settles up. Each mark
 * is struck before its line arrives, so the reader sees the tick land and then
 * reads what it was for.
 */
export function ServiceOutcomes({ section }) {
  const scope = useGsap(({ reduced, root }) => {
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: root, start: "top 76%", once: true },
    });

    timeline
      .from("[data-mark]", {
        scale: reduced ? 1 : 0.4,
        opacity: 0,
        duration: 0.45,
        ease: "back.out(2)",
        stagger: 0.075,
      })
      .from(
        "[data-line]",
        {
          opacity: 0,
          x: reduced ? 0 : -10,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.075,
        },
        0.1,
      );
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-14 grid gap-x-12 gap-y-1 lg:grid-cols-2 lg:gap-x-16">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-4 border-t border-border py-5 sm:py-6">
              <span
                data-mark
                aria-hidden="true"
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
              >
                <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
              </span>
              <p data-line className="text-base leading-[1.6] text-balance text-foreground">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceOutcomes;

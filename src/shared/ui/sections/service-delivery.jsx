"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap, ScrollTrigger } from "../motion/use-gsap";

/**
 * How we deliver.
 *
 * Five stages of one process, so the figure is a line rather than five cards:
 * a rail runs down the section and fills as the reader descends, and each stage
 * takes the brand as the fill reaches it. The claim of the section is that the
 * process is continuous and disciplined, and a line that draws itself is the
 * only illustration that says that.
 *
 * The fill is scrubbed — tied to scroll position, not to a duration — so it is
 * always exactly where the reader is. The stage markers latch instead: once
 * reached they stay lit, because scrolling back up does not un-happen a stage.
 */
export function ServiceDelivery({ section }) {
  const scope = useGsap(({ reduced, root }) => {
    const list = root.querySelector("[data-track]");
    const fill = root.querySelector("[data-fill]");

    if (list && fill) {
      gsap.fromTo(
        fill,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: list,
            start: "top 62%",
            end: "bottom 80%",
            scrub: reduced ? false : 0.5,
          },
        },
      );
    }

    gsap.utils.toArray("[data-step]").forEach((step) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 66%",
        once: true,
        onEnter: () => step.setAttribute("data-reached", "true"),
      });

      gsap.from(step.querySelector("[data-body]"), {
        opacity: 0,
        y: reduced ? 0 : 18,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: step, start: "top 80%", once: true },
      });
    });
  });

  const steps = section?.steps ?? [];
  if (!steps.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />

        <div data-track className="relative mt-14 pl-12 sm:pl-16">
          {/* The rail the stages hang from, and the fill that chases the reader. */}
          <span
            aria-hidden="true"
            className="absolute left-[1.1875rem] top-2 bottom-2 w-px bg-border sm:left-[1.6875rem]"
          />
          <span
            data-fill
            aria-hidden="true"
            className="absolute left-[1.1875rem] top-2 bottom-2 w-px origin-top bg-brand-600 sm:left-[1.6875rem]"
          />

          <ol>
            {steps.map((step, index) => (
              <li
                key={step.id}
                data-step
                className="group relative pb-12 last:pb-0 sm:pb-14"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-12 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white font-display text-xs font-semibold tabular-nums tracking-tight text-faint transition-colors duration-500 group-data-[reached=true]:border-brand-600 group-data-[reached=true]:bg-brand-600 group-data-[reached=true]:text-white sm:-left-16 sm:h-14 sm:w-14 sm:text-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  data-body
                  className="grid gap-2.5 pt-1.5 lg:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] lg:gap-10 lg:pt-3"
                >
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-balance sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base leading-[1.65] text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export default ServiceDelivery;

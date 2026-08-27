"use client";

import { Fragment } from "react";
import { Container } from "../primitives/container";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * The lead.
 *
 * The paragraphs that have to be read, given a plate of their own so they stop
 * reading as loose text dropped under the hero. The plate is the one place the
 * brand colour is allowed to wash the whole surface: a tinted panel, a rule
 * marking the lede, and two soft brand fields in the corners, so the page has
 * an accent before the first card arrives.
 *
 * The words are lit one at a time as the reader arrives, which is the one place
 * on the page where the animation is doing the reading's work rather than
 * decorating it. They are always in the DOM at full opacity for anything that
 * is not a browser running scripts; GSAP dims them and brings them back.
 */
export function ServiceIntro({ paragraphs = [] }) {
  const scope = useGsap(({ reduced }) => {
    gsap.utils.toArray("[data-lede]").forEach((paragraph) => {
      gsap.from(paragraph.querySelectorAll("[data-word]"), {
        opacity: 0.14,
        y: reduced ? 0 : 8,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.012,
        scrollTrigger: {
          trigger: paragraph,
          start: "top 82%",
          end: "bottom 62%",
          scrub: reduced ? false : 0.6,
        },
      });
    });
  });

  if (!paragraphs.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#f5f6fd_0%,#ffffff_46%,#f2f3fc_100%)] px-6 py-10 ring-1 ring-brand-100 sm:rounded-[1.75rem] sm:px-10 sm:py-14 lg:px-16">
          {/* Two soft brand fields, holding the plate off the page's white. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-600/[0.08] blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-brand-600/[0.06] blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.26fr)_minmax(0,1fr)] lg:gap-14">
            <div className="lg:pt-1.5">
              <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
                Overview
              </p>
              <span aria-hidden="true" className="mt-4 block h-[3px] w-12 rounded-full bg-brand-600" />
            </div>

            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => {
                const words = paragraph.split(" ");

                return (
                  <p
                    key={paragraph.slice(0, 40)}
                    data-lede
                    className={
                      index === 0
                        ? "border-l-2 border-brand-600 pl-5 font-display text-[1.0625rem] font-medium leading-[1.55] tracking-tight text-balance text-foreground sm:text-xl sm:leading-[1.5] lg:text-[1.5rem]"
                        : "pl-5 text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
                    }
                  >
                    {/*
                      The space sits between the spans rather than inside them: a
                      trailing space inside an inline-block is dropped at the end
                      of a line, which welds the last word of one line to the
                      first of the next.
                    */}
                    {words.map((word, i) => (
                      <Fragment key={`${word}-${i}`}>
                        <span data-word className="inline-block">
                          {word}
                        </span>
                        {i < words.length - 1 ? " " : null}
                      </Fragment>
                    ))}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServiceIntro;

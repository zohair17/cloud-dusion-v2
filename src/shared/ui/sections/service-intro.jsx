"use client";

import { Fragment } from "react";
import { Container } from "../primitives/container";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * The lead.
 *
 * Two paragraphs that have to be read, so they are set large and given room —
 * and lit a word at a time as the reader arrives, which is the one place on the
 * page where the animation is doing the reading's work rather than decorating
 * it. The words are always in the DOM at full opacity for anything that is not
 * a browser running scripts; GSAP dims them and brings them back.
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
      <Container size="default">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14">
          {paragraphs.map((paragraph, index) => {
            const words = paragraph.split(" ");

            return (
              <p
                key={paragraph.slice(0, 40)}
                data-lede
                className={
                  index === 0
                    ? "font-display text-xl font-medium leading-[1.45] tracking-tight text-balance text-foreground sm:text-2xl"
                    : "text-base leading-[1.7] text-muted sm:text-lg lg:mt-1.5"
                }
              >
                {/*
                  The space sits between the spans rather than inside them: a
                  trailing space inside an inline-block is dropped at the end of
                  a line, which welds the last word of one line to the first of
                  the next.
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
      </Container>
    </section>
  );
}

export default ServiceIntro;

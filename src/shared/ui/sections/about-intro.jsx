"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "../primitives/container";

/**
 * The company statement, lit a word at a time.
 *
 * Everywhere else on this site type arrives on entry and then holds. Here it is
 * tied to the scroll itself: each word carries its own slice of the section's
 * progress, so the statement brightens under the reader at exactly the pace
 * they are reading it. Stop scrolling and the sentence stops resolving, which
 * is what makes it feel like a machine reading along rather than an animation
 * playing at you.
 *
 * The three authored paragraphs are set as one centred block with no breaks
 * between them, because the light has to run without stopping for the effect to
 * read as one sentence being spoken — and because a single centred column uses
 * the width instead of leaving half the page empty beside it.
 *
 * A reader who asked for less motion gets the finished statement, at once.
 */
export function AboutIntro({ paragraphs = [] }) {
  const reduced = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });

  const words = paragraphs.join(" ").split(" ");
  const total = words.length;
  const branded = brandedWords(words);

  return (
    <section ref={ref} className="section-y">
      <Container size="wide">
        {/*
          The passage was floating on the page's white with nothing holding it,
          so the air around it read as a gap rather than as margin. A plate
          gives it an edge: brand rule above, a tinted field behind, and the
          measure kept short enough that the lit words stay one thought wide.
        */}
        <div className="relative mx-auto max-w-[62rem] overflow-hidden rounded-[1.5rem] bg-[linear-gradient(150deg,#f6f7fd_0%,#ffffff_50%,#f3f4fc_100%)] px-6 py-10 ring-1 ring-brand-100 sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-600/[0.07] blur-3xl"
          />
          <span aria-hidden="true" className="mx-auto block h-[3px] w-12 rounded-full bg-brand-600" />

        <p className="relative mx-auto mt-8 max-w-[46rem] text-center font-display text-[1.0625rem] leading-[1.6] tracking-tight text-pretty sm:text-[1.1875rem] sm:leading-[1.58] lg:text-[1.375rem] lg:leading-[1.55]">
          {words.map((word, index) => (
            <Word
              key={`${index}-${word}`}
              progress={scrollYProgress}
              range={[index / total, (index + 2.4) / total]}
              reduced={reduced}
              accent={branded.has(index)}
            >
              {word}
            </Word>
          ))}
        </p>
        </div>
      </Container>
    </section>
  );
}

/** The company's own name, wherever it falls in the passage. */
const BRAND_NAME = ["Cloud", "Fusion", "Global"];

/**
 * Which word positions spell the company's name.
 *
 * Found rather than counted, so the accent follows the sentence if the copy is
 * ever rewritten and lands wherever the name is written again.
 */
function brandedWords(words) {
  const marked = new Set();

  words.forEach((_, index) => {
    const matches = BRAND_NAME.every(
      (part, offset) => (words[index + offset] ?? "").replace(/[^A-Za-z]/g, "") === part,
    );

    if (matches) BRAND_NAME.forEach((_part, offset) => marked.add(index + offset));
  });

  return marked;
}

/** One word, holding its own slice of the section's scroll. */
function Word({ children, progress, range, reduced, accent }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const tone = accent ? "font-bold text-brand-600" : "text-foreground";

  if (reduced) return <span className={tone}>{children} </span>;

  return (
    <motion.span style={{ opacity }} className={tone}>
      {children}{" "}
    </motion.span>
  );
}

export default AboutIntro;

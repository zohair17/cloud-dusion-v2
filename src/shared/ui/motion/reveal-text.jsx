"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Headline that assembles itself in space.
 *
 * Each word is its own plane: it starts tipped away from the reader and below
 * the line, then rotates flat and rises into place behind a mask. Because the
 * words share one perspective origin, they read as a single surface turning
 * towards you rather than a row of separate fades — that is the difference
 * between a text animation and a cinematic one.
 *
 * Words keep their spaces as real characters so selection and copy-paste stay
 * intact, and the whole thing collapses to plain text under reduced motion.
 */
const EASE = [0.22, 1, 0.36, 1];

export function RevealText({ children, as: Tag = "span", className, delay = 0, stagger = 0.055 }) {
  const reduced = useReducedMotion();
  const words = String(children ?? "").split(" ");

  if (reduced) return <Tag className={className}>{children}</Tag>;

  return (
    <Tag className={className} style={{ perspective: 900 }}>
      {words.map((word, index) => (
        // The separating space sits outside the mask: a trailing space inside
        // an inline-block is collapsed away, which runs the words together.
        <Fragment key={`${word}-${index}`}>
          {/*
            The trigger lives on the mask, not on the word. The word starts
            parked outside the mask, so an observer watching the word itself
            would never see it enter and the reveal would never fire.
          */}
          <motion.span
            className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.85, delay: delay + index * stagger, ease: EASE }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: "0.9em", rotateX: -72 },
                visible: { opacity: 1, y: 0, rotateX: 0 },
              }}
              style={{ transformOrigin: "50% 100%" }}
            >
              {word}
            </motion.span>
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

export default RevealText;

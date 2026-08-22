"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal primitives.
 *
 * One place owns the motion language of the whole page: how far things travel,
 * how long they take, and the easing curve. Sections compose these rather than
 * hand-rolling variants, so the site moves like one product instead of seven.
 *
 * `whileInView` with `once` means each element animates a single time; nothing
 * re-triggers on scroll-back, which is what separates cinematic from restless.
 */
const EASE = [0.22, 1, 0.36, 1];

const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" };

/** A single element rising into place. */
export function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Parent that releases its children one after another. */
export function RevealGroup({ children, delay = 0, stagger = 0.08, className, as = "div" }) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      className={className}
    >
      {children}
    </Tag>
  );
}

/** Child of a RevealGroup. Timing comes from the parent. */
export function RevealItem({ children, y = 22, className, as = "div", ...props }) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      variants={{
        hidden: reduced ? { opacity: 1 } : { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}

/** Card that lifts toward the pointer. Used across every card grid. */
export function LiftCard({ children, className, ...props }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { EASE, VIEWPORT };

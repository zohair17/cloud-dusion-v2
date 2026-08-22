"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * The one background the whole application sits on.
 *
 * Fixed behind every section, and drifting a little slower than the page: the
 * parallax is small on purpose — enough to separate the artwork from the
 * content plane and give the page depth, not enough to notice as movement.
 */
export function PageBackdrop() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const eased = useSpring(scrollYProgress, { stiffness: 60, damping: 24, mass: 0.4 });
  const y = useTransform(eased, [0, 1], ["0%", "9%"]);
  const scale = useTransform(eased, [0, 1], [1.04, 1.12]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 bg-[url('/asset/background.webp')] bg-cover bg-center bg-no-repeat"
      style={reduced ? undefined : { y, scale }}
    />
  );
}

export default PageBackdrop;

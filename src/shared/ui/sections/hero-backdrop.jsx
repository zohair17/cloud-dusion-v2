"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A photograph filling a hero card, breathing.
 *
 * The push is deliberately small and very slow — a seven-percent creep over
 * twenty seconds. At that rate nobody watches it move; the card simply never
 * looks static, which is the whole point of using a still photograph as a
 * background instead of a flat fill.
 *
 * It holds still for a reader who asked for less motion.
 */
export function HeroBackdrop({ src, alt = "" }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      aria-hidden={alt ? undefined : "true"}
      className="absolute inset-0"
      animate={reduced ? undefined : { scale: [1, 1.07, 1] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} fill sizes="100vw" priority className="object-cover" />
    </motion.div>
  );
}

export default HeroBackdrop;

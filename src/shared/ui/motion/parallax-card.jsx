"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * A card that rides the scroll.
 *
 * Two things at once: it rises out of the page as it enters, and it keeps
 * drifting at its own rate afterwards. Give neighbouring cards different
 * `depth` values and the row stops being a row — it becomes layers at different
 * distances, which is the whole reason a flat grid reads as cheap and a
 * parallaxed one reads as built.
 *
 * The drift is sprung, so it lags the scroll slightly instead of tracking it
 * rigidly; reduced motion gets the card, still, with nothing lost.
 */
export function ParallaxCard({ children, depth = 1, className }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const drift = useSpring(useTransform(scrollYProgress, [0, 1], [depth * 70, depth * -70]), {
    stiffness: 110,
    damping: 26,
    mass: 0.6,
  });
  const rise = useTransform(scrollYProgress, [0, 0.26], [56, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.26], [11, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={{ y: drift, opacity, transformStyle: "preserve-3d", transformOrigin: "50% 100%" }}
        className="h-full"
      >
        <motion.div style={{ y: rise, rotateX }} className="h-full">
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ParallaxCard;

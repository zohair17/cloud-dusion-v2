"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

/**
 * A card that turns to face the pointer.
 *
 * The whole surface rotates a few degrees on two axes while its contents sit on
 * their own Z planes, so the icon and the illustration stand off the card as it
 * moves. Small angles on purpose — past about eight degrees a card stops
 * reading as a lit object and starts reading as a gimmick.
 *
 * It also feeds the spotlight its coordinates, so one wrapper does both jobs
 * and the card is only measured once per move.
 */
const MAX_TILT = 7;

export function Tilt({ children, className }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const px = useMotionValue(0);
  const py = useMotionValue(0);

  const spring = { stiffness: 220, damping: 22, mass: 0.5 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), spring);

  const track = (event) => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // The spotlight wants pixels; the tilt wants a signed fraction of the card.
    node.style.setProperty("--cfg-mx", `${x}px`);
    node.style.setProperty("--cfg-my", `${y}px`);
    px.set(x / rect.width - 0.5);
    py.set(y / rect.height - 0.5);
  };

  const release = () => {
    px.set(0);
    py.set(0);
  };

  if (reduced) {
    return (
      <div ref={ref} onPointerMove={track} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onPointerMove={track}
      onPointerLeave={release}
      className={className}
      style={{ perspective: 1100 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Tilt;

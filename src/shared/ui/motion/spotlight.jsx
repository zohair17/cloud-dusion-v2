"use client";

import { useRef } from "react";

/**
 * Feeds the pointer's position to a card's spotlight.
 *
 * The glow itself is CSS (`.cfg-card::after`); this only writes the two custom
 * properties it reads. Straight to the DOM node, never through state — a value
 * that changes on every pointer move has no business causing a render.
 */
export function Spotlight({ children, className }) {
  const ref = useRef(null);

  const track = (event) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--cfg-mx", `${event.clientX - rect.left}px`);
    node.style.setProperty("--cfg-my", `${event.clientY - rect.top}px`);
  };

  return (
    <div ref={ref} onPointerMove={track} className={className}>
      {children}
    </div>
  );
}

export default Spotlight;

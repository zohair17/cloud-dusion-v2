"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView, useReducedMotion } from "framer-motion";
import { EcosystemScene } from "./ecosystem-scene";

/**
 * The WebGL surface the ecosystem diagram lives on.
 *
 * Kept on a short leash, because a hero is the worst place to spend a phone's
 * battery: the loop only runs while the diagram is actually on screen, the
 * pixel ratio is capped at 2, and reduced-motion settles for a single rendered
 * frame — a still diagram, which is all the source ever was.
 */
export function EcosystemDiagram({ constellation }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "240px" });
  const reduced = useReducedMotion();
  const still = reduced === true;

  return (
    <div ref={ref} aria-hidden="true" className="h-full w-full">
      <Canvas
        flat
        frameloop={inView && !still ? "always" : "demand"}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ fov: 28, near: 0.1, far: 80 }}
      >
        <EcosystemScene constellation={constellation} still={still} />
      </Canvas>
    </div>
  );
}

export default EcosystemDiagram;

"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP, once.
 *
 * The plugin is registered here rather than in each section, and every section
 * runs its timeline inside a `gsap.context` scoped to its own root — which is
 * what makes cleanup a single `revert()` and stops one section's selectors from
 * reaching into another's DOM.
 *
 * `useLayoutEffect` is what GSAP wants (set the start state before the browser
 * paints, so nothing flashes at its final position first), but React warns
 * about it on the server, so it falls back to `useEffect` where there is no
 * layout to read.
 */
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Runs `setup` inside a context scoped to the returned ref.
 *
 * `setup` is handed `{ reduced }`. A section that animates position or scale
 * must check it: when a reader has asked for less motion, arrive at the final
 * state rather than travelling to it. Fades are left alone — they are not what
 * the setting is about.
 */
export function useGsap(setup, deps = []) {
  const scope = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (!scope.current) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => setup({ reduced, root: scope.current }), scope);

    return () => context.revert();
  }, deps);

  return scope;
}

export { gsap, ScrollTrigger };

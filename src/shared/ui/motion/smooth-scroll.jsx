"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

/**
 * Site-wide smooth scrolling.
 *
 * Lenis drives the real scroll position rather than transforming the page, so
 * every scroll-linked animation on the site keeps working untouched — it just
 * arrives on an eased curve instead of a stepped one, which is most of what
 * separates a cinematic page from a functional one.
 *
 * Honours `prefers-reduced-motion` by simply not running, and resets to the top
 * on navigation because Lenis owns the scroll position once it is attached.
 */
export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      // Long, decaying tail: fast to respond, slow to settle.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.6,
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}

export default SmoothScroll;

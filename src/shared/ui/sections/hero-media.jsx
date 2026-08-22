"use client";

import { useEffect, useRef } from "react";

/**
 * The hero's ecosystem film.
 *
 * The clip was drawn on the same white as the slab it plays on, so it is given
 * no frame, no rounding and no seam: `max-*-full` sizes the element to exactly
 * the picture it draws, which lets the feather in `cfg-hero-film` dissolve the
 * real edge rather than a letterboxed box around it. The result reads as part
 * of the card instead of a picture dropped onto it.
 *
 * The clip itself runs forward and then back again: the reverse is cut into
 * the file, so plain `loop` gives a seam-free swing with no scripted seeking
 * and no second decode. The turn frames are dropped at both ends, so neither
 * end of the swing holds on a repeated frame.
 *
 * It plays only while it is on screen, and not at all for a reader who asked
 * for less motion — the poster frame already carries the whole diagram, so
 * holding still costs nothing.
 */
export function HeroMedia({ label }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid h-full w-full place-items-center">
      <video
        ref={ref}
        className="cfg-hero-film h-auto w-auto min-h-0 min-w-0 max-h-full max-w-full"
        src="/asset/hero-ecosystem.mp4"
        poster="/asset/hero-ecosystem-poster.webp"
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

export default HeroMedia;

"use client";

import { useEffect, useRef } from "react";
import { cn } from "../primitives/cn";

/**
 * A silent clip that plays itself.
 *
 * Two fits, because the two clips are lit differently. `contain` sizes the
 * element to exactly the picture it draws, which is what lets a clip rendered
 * on flat white dissolve its own edge under a feather mask and read as part of
 * the slab. `cover` fills the space it is given, for a clip rendered on a
 * studio backdrop no correction can turn white — there the slab's own edge
 * does the framing, so the picture has no rectangle of its own to betray.
 *
 * Each clip has its reverse cut into the file, so plain `loop` gives a
 * seam-free swing with no scripted seeking and no second decode — the turn
 * frames are dropped at both ends, so neither end of the swing holds on a
 * repeated frame.
 *
 * It plays only while it is on screen, and not at all for a reader who asked
 * for less motion — the poster frame already carries the whole picture, so
 * holding still costs nothing.
 */
export function Film({ src, poster, label, fit = "contain", className }) {
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
    <div className="relative grid h-full w-full place-items-center">
      <video
        ref={ref}
        className={cn(
          // A covering clip is taken out of flow: centred in a grid, a video
          // sizes itself from its own aspect and overshoots the box it is
          // meant to fill, which is the one thing `cover` must never do.
          fit === "cover"
            ? "absolute inset-0 h-full w-full object-cover"
            : "h-auto max-h-full w-auto max-w-full min-h-0 min-w-0",
          className,
        )}
        src={src}
        poster={poster}
        aria-label={label}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}

export default Film;

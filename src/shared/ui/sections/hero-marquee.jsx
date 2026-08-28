"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

/**
 * A horizontal band of photographs, running slowly across the hero panel.
 *
 * The insights hero holds a film in the same slot; this holds the company's own
 * pictures instead, and it moves sideways rather than down because the panel is
 * wider than it is tall. The strip is rendered twice and translated by exactly
 * half its width, which is what makes the loop seamless: frame one of the
 * second copy arrives where frame one of the first copy left.
 *
 * The motion is CSS, so it costs nothing per frame and stops outright for a
 * reader who has asked for less of it.
 */
export function HeroMarquee({ images = [], label }) {
  const reduced = useReducedMotion();
  if (!images.length) return null;

  const strip = [...images, ...images];

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#f8f8fb]"
      role="img"
      aria-label={label}
    >
      <div
        className="flex h-full w-max gap-3 px-3 py-3"
        style={reduced ? undefined : { animation: "cfg-marquee 46s linear infinite" }}
      >
        {strip.map((src, index) => (
          <span
            key={`${src}-${index}`}
            className="relative block h-full w-[clamp(9rem,22vw,15rem)] shrink-0 overflow-hidden rounded-[1.15rem] ring-1 ring-black/[0.06]"
          >
            <Image
              src={src}
              alt=""
              fill
              quality={90}
              /* The tile is narrow but full-panel tall, so `cover` scales the
                 4:3 source off its height: the file has to be far wider than
                 the tile or it arrives upscaled. */
              sizes="(min-width: 1024px) 40rem, 90vw"
              className="object-cover"
            />
          </span>
        ))}
      </div>

      {/* The band fades into the panel at both ends rather than being cut off. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-[linear-gradient(to_right,#f8f8fb,transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-[linear-gradient(to_left,#f8f8fb,transparent)]"
      />
    </div>
  );
}

export default HeroMarquee;

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "../motion/reveal";
import { cn } from "../primitives/cn";

/** Three tracks wide, and the rhythm the tiles fall into across them. */
const TRACKS = 3;
const PATTERN = [2, 1, 1, 2];

/**
 * How wide each tile is, in tracks.
 *
 * The pattern is wide-narrow / narrow-wide, which is what gives a bento its
 * alternating look. It is then clipped to whatever the current row has left, so
 * no tile can spill and leave a hole behind it, and the last tile takes the rest
 * of its row outright — a bento that ends ragged reads as a bug.
 */
function planSpans(count) {
  const spans = [];
  let filled = 0;

  for (let i = 0; i < count; i += 1) {
    const left = TRACKS - filled;
    const last = i === count - 1;
    const span = last ? left : Math.min(PATTERN[i % PATTERN.length], left);

    spans.push(span);
    filled = (filled + span) % TRACKS;
  }

  return spans;
}

/**
 * Spotlight bento.
 *
 * Tiles of unequal width, each one a picture of the thing it names, and each
 * picture used once on the whole site. The name is always on the tile: a card
 * whose identity only appears on hover cannot be read on a phone, or by a search
 * engine, or by anyone tabbing through. What the spotlight brings up is the
 * detail underneath, not the subject.
 *
 * The pictures are lit on white, so the scrim never fully lifts at the top of a
 * tile: the eyebrow has to stay legible over the brightest thing an image can
 * put behind it.
 */
export function SpotlightBento({ items = [], className }) {
  if (!items.length) return null;
  const spans = planSpans(items.length);

  return (
    <RevealGroup
      as="ul"
      delay={0.05}
      stagger={0.07}
      className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}
    >
      {items.map((item, index) => {
        const Tile = item.href ? Link : "div";

        return (
          <RevealItem
            key={item.key}
            as="li"
            className={cn(
              spans[index] === 2 && "lg:col-span-2",
              spans[index] === 3 && "sm:col-span-2 lg:col-span-3",
            )}
          >
            <Tile
              {...(item.href ? { href: item.href } : {})}
              className="group relative flex h-[clamp(15rem,26vw,20rem)] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#07071e] p-7 ring-1 ring-black/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 46vw, (min-width: 640px) 50vw, 92vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              ) : null}

              {/* Deep enough at the foot to hold a paragraph, not just a name. */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgb(7_7_30/0.94)_0%,rgb(7_7_30/0.82)_34%,rgb(7_7_30/0.34)_70%,rgb(7_7_30/0.16)_100%)]"
              />

              {item.eyebrow ? (
                <span className="absolute left-7 top-7 inline-flex items-center rounded-pill border border-white/20 bg-[rgb(7_7_30/0.55)] px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {item.eyebrow}
                </span>
              ) : null}

              {item.href ? (
                <span className="absolute right-7 top-7 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[0_10px_20px_-8px_rgb(53_51_205/0.55)] transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}

              <div className="relative">
                <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-balance text-white sm:text-2xl">
                  {item.title}
                </h3>

                {/*
                  The detail is what the spotlight is for: it lies flat and
                  invisible until the tile is under the pointer, then rises. On
                  a touch screen there is no hover, so `group-focus-within`
                  brings it up for anyone reaching the tile by keyboard too.
                */}
                {item.summary ? (
                  <p className="mt-2 max-w-xl translate-y-1 text-sm leading-relaxed text-white/0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:text-white/75 group-focus-within:translate-y-0 group-focus-within:text-white/75">
                    {item.summary}
                  </p>
                ) : null}

                {item.meta ? (
                  <p className="mt-3 text-xs font-medium tracking-tight text-white/55">{item.meta}</p>
                ) : null}
              </div>
            </Tile>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}

export default SpotlightBento;

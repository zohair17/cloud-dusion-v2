"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Where a card sits, by its signed distance from the front in card slots.
 *
 * Spread and turn are two separate curves rather than one circle: a card only
 * has to travel about a card and a quarter before it is edge-on, but it should
 * still be barely turned while it is next in line. `tanh` gives the spread its
 * ceiling, and the power curve keeps the turn slow at first and then quick.
 */
const SPREAD = 1.32;   // card widths the run reaches before it stops widening
const SOFT = 1.02;     // how quickly it gets there
const EDGE = 2.6;    // slots at which a card is fully edge-on
const REACH = 3;    // slots at which it has faded out entirely

function place(offset) {
  const distance = Math.abs(offset);
  const sign = Math.sign(offset);
  const turned = Math.min(1, distance / EDGE);

  const x = SPREAD * Math.tanh(offset / SOFT);
  const angle = 90 * Math.pow(turned, 1.75) * sign;
  const scale = 1 - 0.27 * Math.pow(turned, 2.4);

  return {
    x: x * 100 - 50,
    angle,
    scale,
    opacity: Math.min(1, Math.max(0, REACH - distance)),
    depth: 40 - Math.round(distance * 4.5),
    sheen: Math.min(1, distance / 2),
  };
}

/** Seconds a card takes to travel one slot. */
const PACE = 3.2;

/**
 * The partners run.
 *
 * One partner at a time holds the front of a slow carousel; the rest fall away
 * along a curve, turning until they are edge-on and gone. It reads as a single
 * run of cards passing rather than a row of logos, which is the difference
 * between a marquee and a shelf.
 *
 * Positions are written straight to the nodes each frame — sixty React renders
 * a second to move six cards would be the wrong trade — and the loop runs only
 * while the section is on screen.
 */
export function PartnerCoverflow({ items = [], label = "Our partners" }) {
  const listRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const list = listRef.current;
    const count = items.length;
    if (!list || count === 0) return;

    const nodes = cardRefs.current.slice(0, count).filter(Boolean);
    if (nodes.length !== count) return;

    const paint = (front) => {
      nodes.forEach((node, index) => {
        // Wrap the distance into a half-turn either way, so the run is endless.
        let offset = index - front;
        offset -= Math.round(offset / count) * count;

        const spot = place(offset);
        node.style.transform = `translateX(${spot.x.toFixed(3)}%) scale(${spot.scale.toFixed(4)})`;
        node.style.opacity = spot.opacity.toFixed(3);
        node.style.zIndex = String(spot.depth);
        node.firstChild.style.transform = `rotateY(${spot.angle.toFixed(2)}deg)`;
        node.firstChild.querySelector("[data-sheen]").style.opacity = spot.sheen.toFixed(3);
      });
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      paint(0);
      return;
    }

    let frame = 0;
    let start = 0;
    let running = false;

    const tick = (now) => {
      if (!start) start = now;
      paint(((now - start) / 1000 / PACE) % count);
      frame = requestAnimationFrame(tick);
    };

    // A carousel nobody is looking at is a battery bill and nothing else.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          start = 0;
          frame = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(frame);
        }
      },
      { threshold: 0.05 },
    );

    paint(0);
    observer.observe(list);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [items.length]);

  return (
    <ul
      ref={listRef}
      aria-label={label}
      className="relative mx-auto w-full max-w-[96rem] [--card-h:clamp(6rem,16vw,13rem)] [height:var(--card-h)]"
    >
      {items.map((item, index) => (
        <li
          key={item.id}
          ref={(node) => {
            cardRefs.current[index] = node;
          }}
          className="absolute left-1/2 top-0 aspect-[21/10] h-full [perspective:calc(5.5*var(--card-h))] [transform-origin:50%_100%]"
          style={{ transform: "translateX(-50%)" }}
        >
          <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-[clamp(0.9rem,1.6vw,1.6rem)] bg-[linear-gradient(150deg,#ffffff_0%,#ffffff_42%,#f2f3fa_100%)] shadow-[0_44px_80px_-32px_rgb(11_11_42/0.55),0_12px_26px_-12px_rgb(11_11_42/0.3),inset_0_1px_0_rgb(255_255_255/0.95)] ring-1 ring-black/[0.05] [backface-visibility:hidden]">
            {item.file ? (
              <Image
                src={`/asset/clients/${item.file}`}
                alt={item.name}
                width={item.width}
                height={item.height}
                sizes="(min-width: 640px) 34vw, 62vw"
                /*
                  Multiply so a mark that ships with its white background baked
                  in — the JPEGs — sits on the card instead of on a white patch
                  of its own. The card's face runs white to #f2f3fa, so it costs
                  the transparent PNGs nothing. A future logo drawn in white ink
                  would disappear; none of these are.
                */
                className="h-auto w-full max-h-[calc(var(--card-h)*0.58)] object-contain mix-blend-multiply"
                /*
                  Most of these marks are far larger than the card and the box
                  above holds them. Eclipse's is 186px wide — the only one LinkedIn
                  publishes — and left at its own size it sits marooned in the
                  middle of a card five times wider. So the width is allowed to
                  grow to the box, but never past twice the pixels the file
                  actually has: enough to read as a logo, not so far that it
                  turns to mush.
                */
                style={{ maxWidth: `min(calc(var(--card-h) * 2.1 * 0.82), ${item.width * 2}px)` }}
              />
            ) : (
              /*
                A partner whose mark has not been supplied. Setting the name in
                the display face holds the card at the same weight as a logo
                would, which is the honest answer — inventing a mark for
                somebody else's company is not.
              */
              <span className="max-w-[calc(var(--card-h)*2.1*0.82)] px-[5%] text-center font-display text-[calc(var(--card-h)*0.155)] font-semibold leading-tight tracking-tight text-foreground text-balance">
                {item.name}
              </span>
            )}

            {/* Where the partner is based, if the record says. */}
            {item.country ? (
              <span className="absolute bottom-[7%] right-[6%] inline-flex rounded-[0.25rem] bg-white/85 p-[clamp(0.14rem,0.3vw,0.28rem)] ring-1 ring-black/[0.06] backdrop-blur-sm">
                <Image
                  src={`/asset/flags/${item.country.code}.png`}
                  alt={item.country.name}
                  width={80}
                  height={53}
                  sizes="1.75rem"
                  className="h-[clamp(0.62rem,1.25vw,1rem)] w-[clamp(0.95rem,1.9vw,1.5rem)] rounded-[0.12rem] object-cover ring-1 ring-black/10"
                />
              </span>
            ) : null}

            {/* Raking light: the further a card has turned, the darker its face. */}
            <span
              aria-hidden="true"
              data-sheen
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/0.55)_0%,rgb(11_11_42/0)_28%,rgb(11_11_42/0.14)_62%,rgb(11_11_42/0.6)_100%)] opacity-0"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PartnerCoverflow;

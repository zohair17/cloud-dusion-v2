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
            <Image
              src={`/asset/clients/${item.file}`}
              alt={item.name}
              width={item.width}
              height={item.height}
              sizes="(min-width: 640px) 34vw, 62vw"
              className="h-auto w-auto max-h-[calc(var(--card-h)*0.58)] max-w-[calc(var(--card-h)*2.1*0.82)] object-contain"
            />

            {/* Where the partner is based, if the record says. */}
            {item.country ? (
              <span className="absolute bottom-[7%] right-[6%] inline-flex items-center gap-[clamp(0.2rem,0.5vw,0.5rem)] rounded-pill bg-white/85 px-[clamp(0.35rem,0.8vw,0.7rem)] py-[clamp(0.15rem,0.35vw,0.35rem)] ring-1 ring-black/[0.06] backdrop-blur-sm">
                <Image
                  src={`/asset/flags/${item.country.code}.png`}
                  alt=""
                  width={80}
                  height={53}
                  sizes="1.25rem"
                  className="h-[clamp(0.5rem,1vw,0.8rem)] w-[clamp(0.75rem,1.5vw,1.2rem)] rounded-[0.15rem] object-cover ring-1 ring-black/10"
                />
                <span className="text-[clamp(0.45rem,0.95vw,0.7rem)] font-semibold uppercase leading-none tracking-[0.1em] text-muted">
                  {item.country.name}
                </span>
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

"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import {
  Blocks,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Globe,
  Handshake,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { cn } from "../primitives/cn";

const ICONS = {
  sparkles: Sparkles,
  cloud: Cloud,
  blocks: Blocks,
  route: Route,
  building: Building2,
  handshake: Handshake,
  shield: ShieldCheck,
  globe: Globe,
};

const RAD = Math.PI / 180;

/** The top of the circle: whatever sits here is the card being read. */
const FOCAL = -90;

/** Degrees of rotation per pixel dragged. Low enough that a flick lands, not spins. */
const DRAG_RATE = 0.108;

/** How hard a sideways wheel turns the arc, and how long it waits before settling. */
const WHEEL_RATE = 0.06;
const WHEEL_SETTLE_MS = 140;

/** A drag shorter than this was a click on a card, not a turn of the arc. */
const CLICK_SLOP = 6;

const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

/** 1 at the focal point, easing to 0 by `falloff` degrees away. */
function emphasis(distance, falloff) {
  return (1 - clamp(distance / falloff, 0, 1)) ** 3;
}

function angleDistance(a, b) {
  let d = (a - b) % 360;
  if (d < -180) d += 360;
  if (d > 180) d -= 360;
  return Math.abs(d);
}

/** The gap between neighbours, as a fraction of a card. */
const NEIGHBOUR_GAP = 0.14;

/** A phone shows fewer cards at once, so they can afford to sit further apart. */
const MOBILE_NEIGHBOUR_GAP = 0.3;

/**
 * The arc, sized off its own width.
 *
 * `step` is the angle between neighbours, and it is the one number that decides
 * whether this is readable: a card lies flat against the curve, so a card two
 * places out is tilted twice the step. The reference fans five cards over 245°
 * — sixty degrees apart — which is fine when a card is a photograph and hostile
 * when it is a paragraph. Twelve degrees keeps the flanking cards legible while
 * the curve is still obviously a curve.
 *
 * The radius is then not a taste but a consequence: cards sit a chord apart, so
 * the circle has to be exactly large enough that the chord clears a card and a
 * gap. Deriving it means neighbours can never overlap, at any width.
 */
function useArcGeometry(width) {
  return useMemo(() => {
    const mobile = width <= 480;
    const tablet = !mobile && width <= 768;

    const step = mobile ? 15 : tablet ? 13 : 12;
    const cardW = mobile
      ? clamp(width * 0.66, 195, 250)
      : tablet
        ? clamp(width * 0.34, 210, 270)
        : clamp(width * 0.2, 220, 300);

    const cardH = cardW * (mobile ? 1.24 : 1.3);
    const s = step * RAD;
    const radius = (cardW * (1 + (mobile ? MOBILE_NEIGHBOUR_GAP : NEIGHBOUR_GAP))) / Math.sin(s);

    /* Room above the focal card for the size it grows to when it gets there. */
    const top = cardH * 0.56 + 20;

    /*
     * The box is only as tall as the cards a reader can actually see. Cards
     * further round the circle hang lower, but on a narrow screen they are also
     * off the side long before then — sizing for them leaves a band of nothing
     * under the arc on a phone. So walk outwards and stop at the last card that
     * still shows a quarter of itself.
     */
    let bottom = top + cardH / 2;
    for (let k = 1; k <= 4; k += 1) {
      const out = k * s;
      const scale = 0.9 + emphasis(out, s * 3) * 0.22;
      const halfW = 0.5 * (cardW * Math.cos(out) + cardH * Math.sin(out)) * scale;
      const halfH = 0.5 * (cardW * Math.sin(out) + cardH * Math.cos(out)) * scale;
      const inner = radius * Math.sin(out) - halfW;
      if (inner > width / 2 - cardW * 0.25) break;
      bottom = Math.max(bottom, top + radius * (1 - Math.cos(out)) + halfH);
    }

    return {
      cardW,
      cardH,
      radius,
      step,
      centerY: top + radius,
      height: Math.round(mobile ? bottom + cardH * 0.1 : bottom - cardH * 0.1),
      cx: width / 2,
    };
  }, [width]);
}

/**
 * One card on the curve.
 *
 * Everything it does is a function of the arc's rotation, read straight off the
 * motion value — so a drag moves eight cards without a single React render.
 */
function ArcCard({ item, angle, geo, rotation, onSelect }) {
  const Icon = ICONS[item.icon] ?? Sparkles;
  const { cardW, cardH, radius, centerY, cx, step } = geo;

  /*
   * The emphasis is measured in steps, not degrees. A fixed falloff would make
   * the card beside the focal one nearly as large as it on a gentle arc and
   * invisible on a steep one; counting neighbours instead keeps the fall the
   * same shape whatever the sweep.
   */
  const near = (r, steps) => emphasis(angleDistance(angle + r, FOCAL), step * steps);

  const x = useTransform(rotation, (r) => cx + radius * Math.cos((angle + r) * RAD) - cardW / 2);
  const y = useTransform(rotation, (r) => {
    const lift = -14 * near(r, 2.5);
    return centerY + radius * Math.sin((angle + r) * RAD) - cardH / 2 + lift;
  });
  const rotate = useTransform(rotation, (r) => angle + r + 90);
  const scale = useTransform(rotation, (r) => 0.9 + near(r, 3) * 0.22);
  const opacity = useTransform(rotation, (r) => 0.7 + near(r, 4) * 0.3);
  const zIndex = useTransform(rotation, (r) => Math.round(10 + near(r, 4) * 1000));

  return (
    <motion.li
      className="group absolute left-0 top-0"
      style={{ x, y, rotate, scale, opacity, zIndex, width: cardW, height: cardH }}
    >
      {/*
        A white card with a picture inside it, and the picture falls from light
        at the top to a deep slate at the foot: one continuous wash rather than a
        panel dropped on top, so the words have solid ground under them without
        a second edge appearing halfway down the card.
      */}
      <article
        onClick={onSelect}
        className="relative h-full w-full rounded-[1.75rem] bg-white p-2 shadow-[0_1px_4px_rgb(21_21_28/0.06),0_24px_50px_-32px_rgb(25_24_89/0.35)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_1px_4px_rgb(21_21_28/0.06),0_40px_70px_-34px_rgb(25_24_89/0.45)]"
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[1.35rem] bg-[linear-gradient(to_bottom,#f8f9fd_0%,#eef0fa_22%,#d5d8ec_42%,#9aa0c2_62%,#5d6183_84%,#4a4e6c_100%)]">
          {/*
            The mark is the card's ground rather than an object sitting on it:
            drawn large across the light half and held faint, so the sentence
            below keeps the contrast and the picture only tints the card.
          */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 flex h-[34%] items-center justify-center sm:h-[52%]">
            <Icon
              strokeWidth={1}
              className="h-[4.25rem] w-[4.25rem] text-brand-600/[0.16] transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[9.5rem] sm:w-[9.5rem]"
            />
          </div>

          <div className="relative mt-auto px-4 pb-5 text-center sm:px-5 sm:pb-6">
            <span
              aria-hidden="true"
              className="mx-auto mb-2.5 block h-[3px] w-9 rounded-full bg-brand-400 sm:mb-3.5"
            />
            <h3 className="font-display text-[0.9375rem] font-semibold leading-snug tracking-tight text-balance text-white sm:text-base">
              {item.title}
            </h3>
            <p className="mt-1.5 text-[0.7rem] leading-[1.45] text-balance text-white/85 sm:text-[0.8125rem] sm:leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

function PagerButton({ label, disabled, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 enabled:hover:border-brand-600 enabled:hover:bg-brand-600 enabled:hover:text-white disabled:opacity-35"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}

/**
 * Why CFG.
 *
 * Eight reasons on one arc that turns. The card at the top of the circle is the
 * one being read — it grows, lifts and comes fully opaque; the rest fall away to
 * either side. Drag it, throw it, click a card, or press the arrows: on release
 * it settles onto the nearest card rather than stopping wherever the hand left
 * it.
 *
 * Because it turns, a card no longer has to be an eighth of the rail. It is a
 * quarter of it, which is the width a sentence actually needs — that is the
 * trade the carousel buys, and it is why each card can carry its own reason
 * instead of borrowing one line of copy underneath.
 *
 * The wheel is left alone unless it is sideways. A section that swallows the
 * page's vertical scroll traps the reader on the way past, and this one sits in
 * the middle of a long page.
 */
export function Differentiators({ section }) {
  /* Held steady across renders: the angles memo is keyed on it. */
  const items = useMemo(() => section.items ?? [], [section.items]);
  const count = items.length;

  const rootRef = useRef(null);
  const [width, setWidth] = useState(1200);
  const geo = useArcGeometry(width);
  const reduced = useReducedMotion();

  const angles = useMemo(
    () => items.map((_, i) => FOCAL + (i - (count - 1) / 2) * geo.step),
    [items, count, geo.step],
  );

  /* Open on the middle card, so the arc arrives with both wings filled. */
  const initialIndex = Math.floor((count - 1) / 2);
  const rotation = useMotionValue(FOCAL - (angles[initialIndex] ?? FOCAL));
  const [active, setActive] = useState(initialIndex);
  const activeRef = useRef(initialIndex);
  const animRef = useRef(null);
  const wheelTimer = useRef(null);
  const drag = useRef({ id: null, x: 0, from: 0, moved: 0 });

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    const measure = () => setWidth(Math.max(1, el.getBoundingClientRect().width));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nearestIndex = useCallback(
    (r) => {
      let best = 0;
      let bestDistance = Infinity;
      angles.forEach((a, i) => {
        const d = angleDistance(a + r, FOCAL);
        if (d < bestDistance) {
          bestDistance = d;
          best = i;
        }
      });
      return best;
    },
    [angles],
  );

  useMotionValueEvent(rotation, "change", (r) => {
    const next = nearestIndex(r);
    if (next !== activeRef.current) {
      activeRef.current = next;
      setActive(next);
    }
  });

  const turnTo = useCallback(
    (index) => {
      const target = FOCAL - (angles[index] ?? FOCAL);
      animRef.current?.stop();
      if (reduced) {
        rotation.set(target);
        return;
      }
      animRef.current = animate(rotation, target, {
        type: "spring",
        stiffness: 520,
        damping: 52,
      });
    },
    [angles, reduced, rotation],
  );

  const settle = useCallback(
    () => turnTo(nearestIndex(rotation.get())),
    [nearestIndex, rotation, turnTo],
  );

  /* The step angle changes with the breakpoint; hold the reader's card in place. */
  useEffect(() => {
    rotation.set(FOCAL - (angles[activeRef.current] ?? FOCAL));
  }, [angles, rotation]);

  useEffect(() => () => window.clearTimeout(wheelTimer.current), []);

  const onPointerDown = useCallback(
    (event) => {
      if (count <= 1 || event.button > 0) return;
      animRef.current?.stop();
      drag.current = { id: event.pointerId, x: event.clientX, from: rotation.get(), moved: 0 };
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [count, rotation],
  );

  const onPointerMove = useCallback(
    (event) => {
      const state = drag.current;
      if (state.id !== event.pointerId) return;
      const dx = event.clientX - state.x;
      state.moved = Math.max(state.moved, Math.abs(dx));
      rotation.set(state.from + dx * DRAG_RATE);
    },
    [rotation],
  );

  const endPointer = useCallback(
    (event) => {
      if (drag.current.id !== event.pointerId) return;
      drag.current.id = null;
      try {
        event.currentTarget.releasePointerCapture(event.pointerId);
      } catch {
        /* the pointer was already gone */
      }
      settle();
    },
    [settle],
  );

  /*
   * Sideways only — a trackpad swipe or shift+wheel turns the arc, a plain wheel
   * keeps scrolling the page the arc is sitting in the middle of.
   */
  const onWheel = useCallback(
    (event) => {
      if (count <= 1) return;
      const sideways = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!sideways && !event.shiftKey) return;
      event.preventDefault();
      animRef.current?.stop();
      rotation.set(rotation.get() + (sideways ? event.deltaX : event.deltaY) * WHEEL_RATE);
      window.clearTimeout(wheelTimer.current);
      wheelTimer.current = window.setTimeout(settle, WHEEL_SETTLE_MS);
    },
    [count, rotation, settle],
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const step = event.key === "ArrowLeft" ? -1 : 1;
      turnTo(clamp(activeRef.current + step, 0, count - 1));
    },
    [count, turnTo],
  );

  return (
    <section className="overflow-x-clip section-y">
      <Container size="wide">
        <SectionHeading align="center" eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />

        <div
          ref={rootRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={section.heading}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
          onLostPointerCapture={endPointer}
          onWheel={onWheel}
          onKeyDown={onKeyDown}
          style={{ height: geo.height, touchAction: "pan-y" }}
          /*
            `isolate`, because the focal card is lifted a thousand deep so it
            paints over its neighbours. Without a stacking context of its own
            that number is measured against the page, and the card climbs over
            the sticky header on the way past.
          */
          className="relative isolate left-1/2 mt-10 w-screen -translate-x-1/2 cursor-grab select-none overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500 active:cursor-grabbing"
        >
          <ul className="absolute inset-0">
            {items.map((item, index) => (
              <ArcCard
                key={item.title}
                item={item}
                angle={angles[index]}
                geo={geo}
                rotation={rotation}
                onSelect={() => {
                  if (drag.current.moved > CLICK_SLOP) return;
                  turnTo(index);
                }}
              />
            ))}
          </ul>
        </div>

        <div className="relative z-20 mt-4 sm:-mt-[clamp(3rem,9vw,7rem)] flex items-center justify-center gap-4">
          <PagerButton
            label="Previous"
            disabled={active === 0}
            onClick={() => turnTo(active - 1)}
            icon={ChevronLeft}
          />

          <ul className="flex items-center gap-2">
            {items.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  aria-label={item.title}
                  aria-current={index === active}
                  onClick={() => turnTo(index)}
                  className={cn(
                    "block h-1.5 rounded-full transition-all duration-500",
                    index === active ? "w-7 bg-brand-600" : "w-1.5 bg-border hover:bg-brand-300",
                  )}
                />
              </li>
            ))}
          </ul>

          <PagerButton
            label="Next"
            disabled={active === count - 1}
            onClick={() => turnTo(active + 1)}
            icon={ChevronRight}
          />
        </div>
      </Container>
    </section>
  );
}

export default Differentiators;

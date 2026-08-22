"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * The transformation, walked as a path.
 *
 * The cards are a plain responsive grid; the rail behind them is measured from
 * where those cards actually land, so it snakes correctly at one, two, or four
 * columns without any of the layout being described twice. It draws itself as
 * the section is read.
 *
 * Cards reveal on their own viewport entry rather than on rail progress — tying
 * them to progress leaves the last card unrevealed whenever the section sits
 * near the bottom of the page and progress tops out early.
 */
const EASE = [0.22, 1, 0.36, 1];
const CORNER = 26;
const ARROW = 9;

/** The second row is seated back to front, so the path turns rather than jumps. */
const SEATS = ["", "", "sm:col-start-2 sm:row-start-2", "sm:col-start-1 sm:row-start-2"];

/** A polyline drawn with rounded corners, the radius clamped per joint. */
function roundedPath(points, radius) {
  if (points.length < 2) return "";

  let d = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length - 1; i += 1) {
    const prev = points[i - 1];
    const here = points[i];
    const next = points[i + 1];

    const inLen = Math.hypot(here.x - prev.x, here.y - prev.y);
    const outLen = Math.hypot(next.x - here.x, next.y - here.y);
    const r = Math.min(radius, inLen / 2, outLen / 2);

    const ix = here.x - ((here.x - prev.x) / (inLen || 1)) * r;
    const iy = here.y - ((here.y - prev.y) / (inLen || 1)) * r;
    const ox = here.x + ((next.x - here.x) / (outLen || 1)) * r;
    const oy = here.y + ((next.y - here.y) / (outLen || 1)) * r;

    d += ` L ${ix} ${iy} Q ${here.x} ${here.y} ${ox} ${oy}`;
  }

  const last = points[points.length - 1];
  return `${d} L ${last.x} ${last.y}`;
}

export function TransformationSteps({ stages }) {
  const listRef = useRef(null);
  const cardRefs = useRef([]);
  const [rail, setRail] = useState({ w: 0, h: 0, d: "", arrows: [] });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.85", "end 0.6"],
  });
  const draw = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 26,
  });

  const measure = useCallback(() => {
    const list = listRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!list || cards.length < 2) return;

    const base = list.getBoundingClientRect();
    const centres = cards.map((card) => {
      const box = card.getBoundingClientRect();
      return { x: box.left - base.left + box.width / 2, y: box.top - base.top + box.height / 2 };
    });

    // Group by row: cards that share a centre line are on the same row.
    const rows = [];
    for (const centre of centres) {
      const row = rows.find((candidate) => Math.abs(candidate[0].y - centre.y) < 8);
      if (row) row.push(centre);
      else rows.push([centre]);
    }

    // Serpentine: the first row is read left to right, the next back again,
    // so the turn between them is a straight drop rather than a sweep.
    const points = [];
    const arrows = [];
    rows.forEach((row, index) => {
      const ordered = [...row].sort((p, q) => (index % 2 === 0 ? p.x - q.x : q.x - p.x));
      points.push({ x: ordered[0].x, y: ordered[0].y });
      const last = ordered[ordered.length - 1];
      if (last !== ordered[0]) points.push({ x: last.x, y: last.y });

      for (let i = 0; i < ordered.length - 1; i += 1) {
        arrows.push({
          x: (ordered[i].x + ordered[i + 1].x) / 2,
          y: ordered[i].y,
          flip: index % 2 !== 0,
        });
      }
    });

    setRail({
      w: base.width,
      h: base.height,
      d: roundedPath(points, CORNER),
      arrows,
    });
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    if (listRef.current) observer.observe(listRef.current);
    cardRefs.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [measure, stages.length]);

  return (
    <div className="relative">
      {/* The rail sits behind the cards, in the list's own pixel space. */}
      {rail.d ? (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox={`0 0 ${rail.w} ${rail.h}`}
          fill="none"
        >
          <path
            d={rail.d}
            stroke="var(--color-brand-100)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1 9"
          />
          <motion.path
            d={rail.d}
            stroke="var(--color-brand-600)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength: reduced ? 1 : draw }}
          />
          {rail.arrows.map((arrow) => (
            <path
              key={`${arrow.x}-${arrow.y}-${arrow.flip}`}
              d={`M ${-ARROW} ${-ARROW} L 0 0 L ${-ARROW} ${ARROW}`}
              transform={`translate(${arrow.x} ${arrow.y})${arrow.flip ? " scale(-1 1)" : ""}`}
              stroke="var(--color-brand-400)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>
      ) : null}

      <ol
        ref={listRef}
        className="relative grid list-none gap-x-10 gap-y-14 sm:grid-cols-2"
      >
        {stages.map((stage, index) => (
          <motion.li
            key={stage.id}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
            className={`relative z-[1] ${SEATS[index] ?? ""} rounded-[1.25rem] border border-brand-100 bg-white p-7 pt-9 shadow-[0_1px_2px_rgb(15_23_42/0.06),0_14px_34px_-18px_rgb(25_24_89/0.28)] transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_1px_2px_rgb(15_23_42/0.06),0_28px_54px_-24px_rgb(25_24_89/0.4)]`}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.55, delay: Math.min(index * 0.08, 1.2), ease: EASE }}
          >
            {/* The badge floats on the card's edge, punched out of its fill. */}
            <span
              aria-hidden="true"
              className="absolute -top-[18px] left-7 inline-flex h-9 min-w-9 items-center justify-center rounded-pill bg-brand-600 px-2.5 text-sm font-semibold text-white shadow-[0_0_0_6px_#ffffff]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-balance">
              {stage.title}
            </h3>

            <ul className="mt-4 space-y-2">
              {stage.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export default TransformationSteps;

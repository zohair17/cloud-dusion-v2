"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Boxes,
  Cloud,
  Cpu,
  Database,
  Layers,
  LineChart,
  ScanEye,
  Search,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { cn } from "../primitives/cn";

/**
 * The Microsoft stack, layer by layer.
 *
 * Four strata read as a route rather than a list: a rail runs down the page,
 * turns at every layer boundary, and carries the eye from intelligence at the
 * top to working applications at the bottom. It draws itself as the reader
 * scrolls, so the connection between layers is something you watch happen.
 *
 * No photographs anywhere — the weight comes from the rail, the set numerals,
 * and a lit slab holding each layer's technologies. Chips are resolved from the
 * registry, so a product rename lands here automatically.
 */
const STROKE = 2;

/** Corner radius where the rail turns. */
const CORNER = 26;

/** Below this the rail straightens and the rows stack. */
const WIDE = 640;

/**
 * The rail, as one continuous path in real pixels.
 *
 * Each row hands the line over at its own bottom edge, alternating between the
 * left margin and the centre line, so the path stays glued to whichever column
 * currently holds the copy.
 */
function buildRail({ width, height, bounds, wide }, count) {
  const left = STROKE / 2 + 0.5;
  if (!wide) return `M ${left} 0 L ${left} ${height}`;

  const mid = width / 2;
  const r = Math.min(CORNER, (mid - left) / 2);
  let d = `M ${left} 0`;

  for (let row = 0; row < count; row += 1) {
    const onLeft = row % 2 === 0;
    const x = onLeft ? left : mid;
    const nextX = onLeft ? mid : left;

    if (row === count - 1) {
      d += ` L ${x} ${height}`;
      break;
    }

    const y = bounds[row] ?? height;
    d += ` L ${x} ${y - r}`;
    d += ` A ${r} ${r} 0 0 ${onLeft ? 0 : 1} ${onLeft ? x + r : x - r} ${y}`;
    d += ` L ${onLeft ? nextX - r : nextX + r} ${y}`;
    d += ` A ${r} ${r} 0 0 ${onLeft ? 1 : 0} ${nextX} ${y + r}`;
  }

  return d;
}

export function TechnologyStack({ section }) {
  const layers = section.layers ?? [];
  const trackRef = useRef(null);
  const rowRefs = useRef([]);
  const [rail, setRail] = useState(null);
  const reduced = useReducedMotion();

  // The rail is drawn from measured geometry rather than a stretched viewBox,
  // so the corners stay circular at every width.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // `wide` mirrors the `sm:` breakpoint exactly, so the rail switches lanes
    // on the same tick the rows switch to two columns.
    const query = window.matchMedia(`(min-width: ${WIDE}px)`);

    const measure = () => {
      const rows = rowRefs.current.slice(0, layers.length);
      setRail({
        width: track.clientWidth,
        height: track.clientHeight,
        wide: query.matches,
        bounds: rows.map((el) => (el ? el.offsetTop + el.offsetHeight : 0)),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    rowRefs.current.slice(0, layers.length).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [layers.length]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.82", "end 0.62"],
  });
  const drawn = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const path = rail ? buildRail(rail, layers.length) : null;

  return (
    <section className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />

        <div ref={trackRef} className="relative mt-16 overflow-x-clip">
          {path ? (
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox={`0 0 ${rail.width} ${rail.height}`}
              fill="none"
            >
              <defs>
                <linearGradient id="cfg-rail" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand-400)" />
                  <stop offset="55%" stopColor="var(--color-brand-600)" />
                  <stop offset="100%" stopColor="var(--color-brand-700)" />
                </linearGradient>
              </defs>

              <path d={path} stroke="var(--color-border)" strokeWidth={STROKE} strokeLinecap="round" />
              {/* Bloom under the live stroke — the only glow in the section. */}
              <motion.path
                d={path}
                stroke="var(--color-brand-400)"
                strokeWidth={STROKE * 4}
                strokeLinecap="round"
                opacity={0.22}
                className="blur-[3px]"
                style={{ pathLength: reduced ? 1 : drawn }}
              />
              <motion.path
                d={path}
                stroke="url(#cfg-rail)"
                strokeWidth={STROKE}
                strokeLinecap="round"
                style={{ pathLength: reduced ? 1 : drawn }}
              />
            </svg>
          ) : null}

          {layers.map((layer, index) => (
            <LayerRow
              key={layer.id}
              ref={(el) => {
                rowRefs.current[index] = el;
              }}
              layer={layer}
              index={index}
            />
          ))}

          {section.destination ? (
            <Destination destination={section.destination} index={layers.length} />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/**
 * Where the rail arrives.
 *
 * The four layers alternate sides; the destination takes no side at all — it
 * sits on the rail's centre line, which is what makes it read as the thing the
 * other four were building towards rather than a fifth of them.
 */
function Destination({ destination, index }) {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, amount: 0.4 });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { opacity: 0, y: 30 }}
      animate={seen ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[1] mx-auto mt-16 max-w-md text-center sm:mt-24"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(58%_58%_at_50%_45%,var(--color-brand-200),transparent_72%)] opacity-70 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-card border border-brand-600 bg-brand-600 p-8 text-white shadow-[0_34px_80px_-30px_rgb(53_51_205/0.6)]">
        <p className="font-display text-sm font-semibold tabular-nums text-brand-100">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-balance">
          {destination.title}
        </h3>
        <p className="mt-2 text-sm text-brand-100">{destination.tagline}</p>
      </div>
    </motion.div>
  );
}

/**
 * One layer.
 *
 * Copy always sits against the rail and the slab always sits opposite it, so
 * the sides swap every row and the rail has a reason to change lanes.
 */
function LayerRow({ ref, layer, index }) {
  const copy = useRef(null);
  const seen = useInView(copy, { once: true, amount: 0.4 });
  const onLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative sm:grid sm:grid-cols-2 sm:items-center">
      <div
        ref={copy}
        className={cn(
          "relative z-10 py-8 pl-6 sm:py-16 sm:pl-16 sm:pr-8",
          onLeft ? "sm:order-1" : "sm:order-2"
        )}
      >
        <RollingNumber value={index + 1} active={seen} />

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
          {layer.tagline}
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {layer.title}
        </h3>
        <p className="mt-3 max-w-sm text-base leading-relaxed text-muted">{layer.description}</p>
      </div>

      <div
        className={cn(
          "relative z-10 pb-10 pl-6 sm:py-16 sm:pl-12",
          onLeft ? "sm:order-2 sm:pl-8 sm:pr-0" : "sm:order-1 sm:pl-0 sm:pr-8"
        )}
      >
        <LayerSlab layer={layer} active={seen} />
      </div>
    </div>
  );
}

/**
 * The layer's technologies, on a lit slab.
 *
 * A single soft brand bloom behind translucent glass and a hairline grid
 * inside — enough depth to read as a rendered object without a single image
 * being loaded. The numeral is left to the copy column, which already sets it.
 */
function LayerSlab({ layer, active }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-[radial-gradient(58%_58%_at_50%_38%,var(--color-brand-200),transparent_72%)] opacity-60 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-white/95 via-white/80 to-brand-50/80 p-4 shadow-[0_30px_80px_rgba(21,21,28,0.10)] ring-1 ring-inset ring-white/70 backdrop-blur-sm sm:p-8">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(78%_78%_at_50%_35%,black,transparent)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent"
        />
        <ul className="relative flex flex-wrap gap-2 sm:gap-3">
          {layer.technologies.map((technology, order) => (
            <motion.li
              key={technology.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.45, delay: 0.16 + order * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-pill border border-brand-100 bg-white px-2.5 py-1.5 text-[0.7rem] font-medium sm:px-4 sm:py-2.5 sm:text-[0.8rem] text-foreground shadow-[0_1px_2px_rgb(21_21_28/0.05)] transition-colors duration-300 hover:border-brand-400 hover:text-brand-700">
                <span aria-hidden="true" className={techTone(technology.label)}>
                  {(() => {
                    const Mark = techIcon(technology.label);
                    return <Mark className="h-3.5 w-3.5" strokeWidth={1.9} />;
                  })()}
                </span>
                {technology.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/**
 * Set numeral that rolls to its digit once the row is on screen.
 *
 * The strip of digits is exactly ten glyphs tall, so translating it by
 * `value × 10%` lands the right one in the window.
 */
/**
 * The mark for a technology, read off its own name.
 *
 * Vendor logotypes are not in the repository and cannot be invented, so each
 * chip carries the mark for the kind of thing it is instead: the shape says
 * database, model, or pipeline where a logo would have said whose.
 */
const TECH_ICONS = [
  [/openai|foundry|copilot|gpt|llm|semantic kernel|agent/i, Sparkles],
  [/vision|speech|translat|ocr|document intelligence|syntex/i, ScanEye],
  [/search|index|vector/i, Search],
  [/sql|database|dataverse|cosmos|warehouse|lakehouse|fabric|synapse/i, Database],
  [/power bi|analytic|report|insight/i, LineChart],
  [/azure|cloud|kubernetes|iis|server|stack/i, Cloud],
  [/sharepoint|teams|365|onedrive|purview|viva/i, Boxes],
  [/logic apps|automate|flow|workflow|service bus|integration|api/i, Workflow],
  [/security|defender|entra|identity|gateway|waf|firewall/i, ShieldCheck],
  [/power apps|power platform|builder|studio|framework|spfx|powershell/i, Wrench],
  [/iot|device|stream|hub|edge/i, Cpu],
];

/** The vendor's own colour, where the name says whose product it is. */
const TECH_TONES = [
  [/azure|microsoft|365|entra|defender|purview|fabric|synapse|copilot/i, "text-[#0078d4]"],
  [/sharepoint|teams|viva/i, "text-[#038387]"],
  [/power (bi|apps|automate|platform)|dataverse|builder/i, "text-[#c4a000]"],
  [/openai|foundry|gpt|llm|semantic kernel|agent|ai/i, "text-[#10a37f]"],
  [/sql|database|cosmos|warehouse|lakehouse/i, "text-[#a4373a]"],
  [/security|identity|gateway|waf|firewall/i, "text-[#d13438]"],
  [/kubernetes|iis|server|powershell|stack/i, "text-[#326ce5]"],
];

function techTone(label) {
  for (const [pattern, tone] of TECH_TONES) if (pattern.test(label)) return tone;
  return "text-brand-600";
}

function techIcon(label) {
  for (const [pattern, Icon] of TECH_ICONS) if (pattern.test(label)) return Icon;
  return Layers;
}

function RollingNumber({ value, active }) {
  const reduced = useReducedMotion();
  const units = value % 10;

  return (
    <span
      aria-hidden="true"
      className="flex select-none font-display text-[clamp(2.75rem,6vw,4.75rem)] font-semibold leading-none tracking-tight text-brand-200"
    >
      <span className="block h-[1em] overflow-hidden leading-[1em]">0</span>
      <span className="relative block h-[1em] w-[0.62em] overflow-hidden">
        <motion.span
          className="absolute inset-x-0 top-0 flex flex-col items-center"
          initial={reduced ? false : { y: 0 }}
          animate={{ y: active || reduced ? `-${units * 10}%` : 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 100 + units * 20 }}
        >
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <span key={digit} className="block h-[1em] leading-[1em]">
              {digit}
            </span>
          ))}
        </motion.span>
      </span>
    </span>
  );
}

export default TechnologyStack;

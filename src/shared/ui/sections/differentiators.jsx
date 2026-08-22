"use client";

import { useRef, useState } from "react";
import {
  Blocks,
  Building2,
  Cloud,
  Globe,
  Handshake,
  Route,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "../motion/reveal";
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

/**
 * Where a card sits, by how far it is from the open one.
 *
 * Four rungs; anything further away is parked on the last rung and faded out,
 * so a ring of any length costs the same to render.
 */
const RUNGS = [
  { x: 0, scale: 1, rotate: 0, z: 40, opacity: 1, sheen: 0 },
  { x: 58, scale: 0.9, rotate: 21, z: 38, opacity: 1, sheen: 0.47 },
  { x: 116, scale: 0.81, rotate: 29, z: 36, opacity: 0.88, sheen: 0.64 },
  { x: 174, scale: 0.73, rotate: 34, z: 34, opacity: 0.42, sheen: 0.76 },
];

/**
 * The arc is a run, not a ring: the first card has nothing before it and the
 * last nothing after, so the offset is the plain signed distance and travel
 * stops at either end rather than wrapping round.
 */
function runOffset(index, active) {
  return index - active;
}

/**
 * Where a card sits on the arc.
 *
 * Cards ride a circle whose centre is a radius below the top of the stage, so
 * the open one always arrives at top dead centre and its neighbours fall away
 * along the curve — each turned tangentially, which is what makes the row read
 * as one wheel rather than a fan of separate cards.
 *
 * Distances are expressed in card widths, so the arc scales with `--card` and
 * needs no measurement.
 */
const STEP = 21;
const RADIUS = 2.15;

function place(offset) {
  const rung = RUNGS[Math.min(Math.abs(offset), 3)];
  const far = Math.abs(offset) > 3;
  const theta = ((-90 + offset * STEP) * Math.PI) / 180;

  const x = RADIUS * Math.cos(theta);
  // Half a card of clearance, so the open one clears the stage top cleanly.
  const y = RADIUS * Math.sin(theta) + RADIUS + 0.5;

  return {
    transform: `translate(-50%, -50%) translate(calc(var(--card) * ${x.toFixed(4)}), calc(var(--card) * ${y.toFixed(4)})) scale(${rung.scale})`,
    rotate: `rotateZ(${(offset * STEP).toFixed(2)}deg)`,
    zIndex: rung.z,
    opacity: far ? 0 : rung.opacity,
    sheen: rung.sheen,
    reachable: !far,
  };
}

/**
 * Why CFG.
 *
 * Eight reasons ride an arc: the open card rotates up to top dead centre and
 * the rest fall away along the curve, so the section reads as one thing being
 * considered at a time rather than eight competing. Picking a card — click,
 * tab, or drag — turns the wheel; its scrim and copy rise as it lands.
 */
export function Differentiators({ section }) {
  const items = section.items ?? [];
  const [active, setActive] = useState(0);
  const drag = useRef(null);

  const step = (delta) =>
    setActive((current) =>
      Math.min(Math.max(current + delta, 0), items.length - 1),
    );

  // Drag resolves on release: a live rotation fights the page's own scrolling.
  const onPointerDown = (event) => {
    drag.current = { x: event.clientX, id: event.pointerId };
  };
  const onPointerUp = (event) => {
    if (!drag.current || drag.current.id !== event.pointerId) return;
    const dx = event.clientX - drag.current.x;
    drag.current = null;
    if (Math.abs(dx) > 44) step(dx > 0 ? -1 : 1);
  };

  return (
    <section className="overflow-x-clip section-y">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow={section.eyebrow}
          heading={section.heading}
        />

        <Reveal delay={0.12}>
          <div
            role="group"
            aria-roledescription="carousel"
            aria-label={section.eyebrow}
            className="relative mt-14"
          >
            <ul
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onPointerCancel={() => (drag.current = null)}
              className="relative mx-auto w-full touch-pan-y select-none [--card:clamp(13rem,19vw,17rem)] [height:calc(var(--card)*1.85)]"
            >
              {items.map((item, index) => {
                const spot = place(runOffset(index, active));
                const Icon = ICONS[item.icon] ?? Sparkles;
                const open = index === active;

                return (
                  <li
                    key={item.title}
                    className="absolute left-1/2 top-0 h-[var(--card)] w-[var(--card)] transition-[transform,opacity] duration-500 ease-out [perspective:calc(var(--card)*2.6)]"
                    style={{
                      transform: spot.transform,
                      opacity: spot.opacity,
                      zIndex: spot.zIndex,
                      pointerEvents: spot.reachable ? "auto" : "none",
                    }}
                  >
                    <div
                      data-open={open || undefined}
                      className="group/card relative h-full w-full rounded-[clamp(1.25rem,2.6vw,2.25rem)] bg-[linear-gradient(150deg,#ffffff_0%,#ffffff_46%,#f0f1fa_100%)] shadow-[0_40px_72px_-34px_rgb(11_11_42/0.45),0_14px_26px_-16px_rgb(11_11_42/0.3),inset_0_1px_0_rgb(255_255_255/0.9)] ring-1 ring-black/[0.06] transition-[transform,box-shadow] duration-500 ease-out data-[open]:shadow-[0_60px_100px_-38px_rgb(11_11_42/0.55),0_18px_34px_-18px_rgb(11_11_42/0.38),inset_0_1px_0_rgb(255_255_255/0.95)] [transform-style:preserve-3d]"
                      style={{ transform: spot.rotate }}
                    >
                      {/* Inner plate: the lit face of the card. */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-[4.5%] overflow-hidden rounded-[clamp(0.85rem,1.9vw,1.6rem)] bg-[linear-gradient(158deg,#f9fafd_0%,#eef0f8_56%,#e5e7f4_100%)] ring-1 ring-inset ring-black/[0.04]"
                      >
                        <span className="absolute inset-0 bg-[radial-gradient(58%_52%_at_50%_36%,var(--color-brand-200)_0%,transparent_72%)] opacity-60" />
                        {/* Raking light — stronger the further the card has turned. */}
                        <span
                          className="absolute inset-0 bg-[linear-gradient(90deg,rgb(255_255_255/0.5)_0%,rgb(11_11_42/0)_32%,rgb(11_11_42/0.06)_62%,rgb(11_11_42/0.28)_100%)] transition-opacity duration-500"
                          style={{ opacity: spot.sheen }}
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 grid place-items-center [transform:translateZ(calc(var(--card)*0.045))]"
                      >
                        <Icon
                          strokeWidth={1.25}
                          className="h-[30%] w-[30%] text-brand-600 drop-shadow-[0_18px_26px_rgb(16_16_46/0.18)] transition-transform duration-500 ease-out group-hover/card:-translate-y-[24%] group-hover/card:scale-[0.9] group-focus-within/card:-translate-y-[24%] group-focus-within/card:scale-[0.9] group-data-[open]/card:-translate-y-[24%] group-data-[open]/card:scale-[0.9]"
                        />
                      </span>

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-[4.5%] bottom-[4.5%] h-[64%] rounded-b-[clamp(0.85rem,1.9vw,1.6rem)] bg-[linear-gradient(to_top,rgb(9_9_36/0.95)_6%,rgb(9_9_36/0.78)_44%,rgb(9_9_36/0)_100%)] opacity-0 transition-opacity duration-500 ease-out group-hover/card:opacity-100 group-focus-within/card:opacity-100 group-data-[open]/card:opacity-100 [transform:translateZ(calc(var(--card)*0.075))]"
                      />

                      <div className="pointer-events-none absolute inset-x-[9%] bottom-[8%] [transform:translateZ(calc(var(--card)*0.095))]">
                        <div className="translate-y-3 text-center opacity-0 transition-[opacity,translate] duration-500 ease-out group-hover/card:translate-y-0 group-hover/card:opacity-100 group-focus-within/card:translate-y-0 group-focus-within/card:opacity-100 group-data-[open]/card:translate-y-0 group-data-[open]/card:opacity-100">
                          <span
                            aria-hidden="true"
                            className="mx-auto mb-3 block h-[3px] w-9 rounded-full bg-brand-400"
                          />
                          <h3 className="font-display text-[clamp(0.95rem,1.45vw,1.3rem)] font-semibold leading-[1.15] tracking-tight text-balance text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <button
                        type="button"
                        aria-current={open || undefined}
                        aria-label={`${item.title} — ${item.description}`}
                        onClick={() => setActive(index)}
                        className={cn(
                          "absolute inset-0 z-10 rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500",
                          open ? "cursor-default" : "cursor-pointer",
                        )}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            {/*
              The open card's own words, set in the well the arc leaves under
              it — on the card there is only room for a name.
            */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto max-w-md px-6 text-center">
              <p
                key={items[active]?.title}
                className="cfg-fade-up text-sm leading-relaxed text-muted sm:text-base"
              >
                {items[active]?.description}
              </p>
            </div>
          </div>

          <ul className="mt-10 flex items-center justify-center gap-2">
            {items.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={item.title}
                  aria-current={index === active || undefined}
                  className={cn(
                    "block h-1.5 rounded-pill transition-all duration-300",
                    index === active
                      ? "w-7 bg-brand-600"
                      : "w-1.5 bg-border hover:bg-brand-300",
                  )}
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

export default Differentiators;

import {
  AppWindow,
  Blocks,
  Bot,
  Cloud,
  Database,
  Files,
  LayoutGrid,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { ProductLogo } from "./product-logo";

/**
 * Hero constellation.
 *
 * The AI-agent hub with the Microsoft stack orbiting it and the outcomes it
 * drives stacked beneath, drawn as a tilted plane with real depth:
 * counter-rotating orbit rings, nodes lifted off the plane on their own Z, a
 * pulsing core, and energy travelling down each connector.
 *
 * Deliberately CSS and SVG only — no WebGL, no 3D library, nothing to fail on a
 * low-end device or block hydration. Every animation is a transform or an
 * opacity, so it stays on the compositor. Node layout is percentage-based
 * inside a square box, so it scales rather than reflows, and the whole thing is
 * decorative and hidden from assistive tech.
 */
const HUB = { x: 50, y: 50 };

/** Content records carry an icon *id*; components own the actual glyph. */
const ICONS = {
  database: Database,
  workflow: Workflow,
  cloud: Cloud,
  grid: LayoutGrid,
  files: Files,
  blocks: Blocks,
  "app-window": AppWindow,
  "trending-up": TrendingUp,
};

export function HeroConstellation({ hub, nodes = [], outcomes = [] }) {
  if (!nodes.length) return null;

  // The rotated plane projects wider than its box, so the wrapper clips
  // horizontally — otherwise the decoration scrolls the whole page sideways.
  return (
    <div aria-hidden="true" className="mx-auto w-full max-w-[17rem] overflow-x-clip sm:max-w-[26rem] lg:max-w-[min(32rem,56vh)]">
      <div className="relative aspect-square w-full [perspective:1400px]">
        {/* Ambient light behind the plane. */}
        <span className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--color-brand-200),transparent_62%)] opacity-60 blur-2xl" />

        <div className="cfg-orbit absolute inset-0 [transform-style:preserve-3d] [transform:rotateX(14deg)_rotateY(-12deg)]">
          {/* Orbit rings — counter-rotating, laid flat on the plane. */}
          <div className="absolute inset-0 [transform:translateZ(-40px)]">
            <span className="cfg-spin absolute left-1/2 top-1/2 block h-[86%] w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-300/45" />
            <span className="cfg-spin-r absolute left-1/2 top-1/2 block h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-300/35" />
            <span className="cfg-spin absolute left-1/2 top-1/2 block h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-400/40" />
          </div>

          {/* Connectors */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full overflow-visible [transform:translateZ(-10px)]"
          >
            <defs>
              <linearGradient id="cfg-link" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-brand-300)" />
                <stop offset="100%" stopColor="var(--color-brand-500)" />
              </linearGradient>
            </defs>
            {nodes.map((node) => (
              <g key={node.id}>
                <line
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="url(#cfg-link)"
                  strokeWidth="0.3"
                  opacity="0.35"
                />
                <line
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={node.x}
                  y2={node.y}
                  stroke="var(--color-brand-500)"
                  strokeWidth="0.45"
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                  className="cfg-flow"
                  opacity="0.85"
                />
              </g>
            ))}
          </svg>

          {/* Core */}
          <div
            className="absolute left-1/2 top-1/2 [transform-style:preserve-3d]"
            style={{ transform: "translate(-50%,-50%) translateZ(70px)" }}
          >
            <span className="cfg-halo absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-400/50 blur-2xl sm:h-44 sm:w-44" />
            <span className="cfg-ripple absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/60 sm:h-32 sm:w-32" />
            {/*
              Stacked discs, widest at the bottom: a shallow cylinder read as a
              dais the core sits on, so the hub has mass instead of floating.
            */}
            <span className="relative block h-32 w-32 sm:h-44 sm:w-44">
              <span className="absolute left-1/2 top-[82%] h-[46%] w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-100/70 ring-1 ring-brand-200" />
              <span className="absolute left-1/2 top-[74%] h-[52%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200/70 ring-1 ring-brand-300/70" />
              <span className="absolute inset-0 grid place-items-center rounded-full bg-[radial-gradient(120%_120%_at_38%_22%,var(--color-brand-400),var(--color-brand-700)_72%)] text-white shadow-[0_26px_50px_-16px_rgb(53_51_205/0.65),inset_0_2px_0_rgb(255_255_255/0.35)] ring-1 ring-white/25">
                <span className="flex items-center gap-1.5 text-sm font-semibold sm:text-base">
                  <Bot className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                  {hub}
                </span>
              </span>
            </span>
          </div>

          {/* Orbiting nodes */}
          {nodes.map((node, index) => {
            return (
              <div
                key={node.id}
                className="absolute [transform-style:preserve-3d]"
                style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%,-50%)" }}
              >
                <div
                  className="cfg-float"
                  style={{ "--cfg-z": `${node.depth ?? 0}px`, animationDelay: `${index * 0.6}s` }}
                >
                  {/*
                    Hexagonal plate with the glyph sitting proud of it: the
                    clipped face reads as a bevelled tile rather than a chip,
                    which is what gives the diagram its moulded look.
                  */}
                  <span className="flex w-[4.5rem] flex-col items-center gap-1 sm:w-24">
                    <span className="relative grid h-[3.4rem] w-[3.9rem] place-items-center bg-gradient-to-b from-brand-300 to-brand-100 shadow-[0_16px_28px_-10px_rgb(11_11_42/0.4)] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] sm:h-[4.2rem] sm:w-[4.8rem]">
                      <span className="absolute inset-[2.5px] bg-gradient-to-b from-white to-brand-50 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                      {/* The real product mark — recognising it at a glance is the point. */}
                      <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-white shadow-md shadow-brand-900/15 ring-1 ring-black/[0.06] sm:h-9 sm:w-9">
                        <ProductLogo id={node.id} className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                      </span>
                    </span>
                    <span className="whitespace-nowrap text-[10px] font-semibold text-brand-900 sm:text-[11px]">
                      {node.label}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Outcome chain — what the agents ultimately drive. */}
      {outcomes.length ? (
        <div className="-mt-4 flex flex-col items-center sm:-mt-8">
          {outcomes.map((outcome, index) => {
            const Icon = ICONS[outcome.icon];
            const last = index === outcomes.length - 1;
            return (
              <div key={outcome.id} className="flex flex-col items-center">
                <span className="h-5 w-px bg-gradient-to-b from-transparent to-brand-300 sm:h-7" />
                <span
                  className={
                    last
                      ? "cfg-halo-ring inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-brand-400 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-lg shadow-brand-500/25 sm:px-5 sm:py-2.5 sm:text-sm"
                      : "inline-flex items-center gap-2 whitespace-nowrap rounded-pill border border-brand-200 bg-white/95 px-4 py-2 text-xs font-medium text-brand-800 shadow-md shadow-brand-900/10 sm:px-5 sm:py-2.5 sm:text-sm"
                  }
                >
                  {Icon ? <Icon className="h-3.5 w-3.5 text-brand-500 sm:h-4 sm:w-4" /> : null}
                  {outcome.label}
                </span>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default HeroConstellation;

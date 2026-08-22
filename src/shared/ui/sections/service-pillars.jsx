import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bot, Cloud, Code2, RefreshCw } from "lucide-react";
import { Container } from "../primitives/container";
import { Reveal } from "../motion/reveal";
import { ParallaxCard } from "../motion/parallax-card";
import { Tilt } from "../motion/tilt";
import { RevealText } from "../motion/reveal-text";
import { routes } from "@/shared/config/routes";

/** Content stores an icon id; the component owns the glyph. */
const ICONS = { bot: Bot, cloud: Cloud, code: Code2, refresh: RefreshCw };

/**
 * Explicit placement, because auto-flow would fill the third column with the
 * third card and leave the fourth stranded in the middle.
 */
const CELLS = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-3 lg:row-start-1 lg:row-span-2",
];

/**
 * The four service pillars, dealt as a bento.
 *
 * The outer two run full height with their photograph beneath the copy; the
 * middle two are half-height and set it beside. Four equal columns would read
 * as a list — this reads as a composition, which is the point of the section.
 */
export function ServicePillars({ section }) {
  return (
    <section className="py-24 sm:py-32">
      <Container size="wide" className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-px w-7 bg-brand-500" />
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              </span>
              {section.eyebrow}
            </p>
          </Reveal>

          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            <RevealText delay={0.08}>{section.heading}</RevealText>{" "}
            <RevealText className="text-brand-600" delay={0.14}>
              {section.headingAccent}
            </RevealText>
            <br className="hidden sm:block" />{" "}
            <RevealText delay={0.2}>{section.headingRest}</RevealText>
          </h2>

          {section.intro ? (
            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                {section.intro}
              </p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3">
          {section.items.map((pillar, index) => {
            const Icon = ICONS[pillar.icon] ?? Bot;
            // First and last run the full height of the row pair.
            const tall = index === 0 || index === section.items.length - 1;

            return (
              <ParallaxCard
                key={pillar.id}
                depth={tall ? 0.7 : 0.3}
                className={`h-full ${CELLS[index] ?? ""}`}
              >
                <Tilt className="group h-full">
                  <Link
                    href={routes.services.detail(pillar.serviceSlug)}
                    className={`cfg-card-solid relative flex h-full overflow-hidden rounded-card p-6 [transform-style:preserve-3d] sm:p-7 ${
                      tall ? "flex-col" : "flex-col gap-4 sm:flex-row sm:items-center"
                    }`}
                  >
                    <span aria-hidden="true" className="cfg-sheen" />

                    {/* The index is scenery: outlined, oversized, behind everything. */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-3 right-1 font-display text-[5.5rem] font-semibold leading-none text-transparent [-webkit-text-stroke:1px_var(--color-brand-100)] transition-all duration-500 group-hover:[-webkit-text-stroke-color:var(--color-brand-300)]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={tall ? "" : "relative flex-1"}>
                      <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(140deg,var(--color-brand-500),var(--color-brand-700))] text-white shadow-[0_12px_26px_-10px_rgb(53_51_205/0.65)] ring-1 ring-white/25 [transform:translateZ(38px)]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>

                      <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-balance">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {pillar.description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                        <span className="relative">
                          Explore
                          <span
                            aria-hidden="true"
                            className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-500 transition-all duration-500 group-hover:w-full"
                          />
                        </span>
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-200 transition-all duration-500 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </span>
                    </div>

                    {/* The photograph, cropped to its well and lifted off the card. */}
                    <div
                      className={`relative overflow-hidden rounded-2xl bg-surface ring-1 ring-brand-100 [transform:translateZ(46px)] ${
                        tall
                          ? "mt-6 min-h-[12rem] flex-1"
                          : "min-h-[9rem] sm:w-[44%] sm:shrink-0 sm:self-stretch"
                      }`}
                    >
                      <Image
                        src={`/asset/services/${pillar.id}-1.png`}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Foot rule, drawn in brand, that runs the width on hover. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-[linear-gradient(90deg,var(--color-brand-400),var(--color-brand-700))] transition-all duration-700 group-hover:w-full"
                    />
                  </Link>
                </Tilt>
              </ParallaxCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ServicePillars;

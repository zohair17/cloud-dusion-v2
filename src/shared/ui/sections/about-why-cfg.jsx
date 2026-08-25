"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";
import { cn } from "../primitives/cn";

/**
 * The eight differences, set beside the people who deliver them.
 *
 * Three photographs stagger down the left, each drifting at its own rate as the
 * section is passed, so the column has depth rather than being a collage. The
 * claims sit on the right on a plain hairline grid: no cards, no fills, nothing
 * competing with the pictures. The rule is the only structure the list needs.
 */
const EASE = [0.22, 1, 0.36, 1];

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

/** The stagger of the three frames, and how fast each one drifts. */
const FRAMES = [
  { src: "/asset/about/why-1.webp", align: "self-end", drift: 42, lead: "" },
  { src: "/asset/about/why-2.webp", align: "self-start", drift: -30, lead: "-mt-[11%]" },
  { src: "/asset/about/why-3.webp", align: "self-end", drift: 26, lead: "-mt-[11%]" },
];

export function AboutWhyCfg({ section }) {
  const items = section.items ?? [];
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="section-y">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-20">
          <div className="relative mx-auto flex w-full max-w-[30rem] flex-col lg:mx-0">
            {FRAMES.map((frame, index) => (
              <Frame key={frame.src} frame={frame} index={index} progress={scrollYProgress} />
            ))}
          </div>

          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                <span className="h-px w-8 bg-brand-300" aria-hidden="true" />
                {section.eyebrow}
              </p>
            </Reveal>

            <RevealText
              as="h2"
              delay={0.08}
              className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl"
            >
              {section.heading}
            </RevealText>

            <RevealGroup stagger={0.07} className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 xl:gap-x-14">
              {items.map((item, index) => {
                const Icon = ICONS[item.icon] ?? Sparkles;

                return (
                  <RevealItem
                    key={item.title}
                    y={18}
                    as="article"
                    className={cn(
                      "group border-t border-border pt-6",
                      // The rule between the columns, drawn only where there is one.
                      index % 2 === 0 && "sm:border-r sm:pr-10 xl:pr-14",
                    )}
                  >
                    <Icon
                      className="h-6 w-6 text-brand-600 transition-transform duration-500 ease-out group-hover:-translate-y-0.5"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />

                    <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {item.title}
                      <span
                        aria-hidden="true"
                        className="mt-1.5 block h-px w-8 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                      />
                    </h3>

                    <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">{item.description}</p>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** One photograph in the stagger, drifting at its own rate. */
function Frame({ frame, index, progress }) {
  const reduced = useReducedMotion();
  const y = useTransform(progress, [0, 1], [frame.drift, -frame.drift]);

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 44, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -14% 0px" }}
      transition={{ duration: 0.8, delay: index * 0.14, ease: EASE }}
      className={cn("relative w-[66%]", frame.align, frame.lead)}
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={reduced ? undefined : { y }}
        className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.5rem] bg-surface shadow-[0_34px_80px_-46px_rgb(21_21_28/0.55)] ring-1 ring-white/70"
      >
        <Image
          src={frame.src}
          alt=""
          fill
          sizes="(min-width: 1024px) 20vw, 40vw"
          className="object-cover"
        />
        {/* A breath of brand at the foot, so the column belongs to the page. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(53_51_205/0.16),transparent_36%)]"
        />
      </motion.div>
    </motion.div>
  );
}

export default AboutWhyCfg;

"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { cn } from "../primitives/cn";

/**
 * The nine industries, laid out as a bento.
 *
 * A nine-up grid of identical tiles says the nine are interchangeable, which is
 * the opposite of the argument this page makes. The spans below break the rows
 * into pairs and triples of different widths, so the eye moves through the set
 * instead of scanning a table — and every tile still carries the same three
 * things, so nothing is ranked by being bigger.
 *
 * Each photograph drifts a little against its own frame as the section passes,
 * which is what stops nine static rectangles from reading as a contact sheet.
 * The summary is held back until the tile is under the pointer: closed, the
 * grid is a list of industries; open, it is an argument about one.
 */
const EASE = [0.22, 1, 0.36, 1];

/**
 * Column spans on a twelve-column grid, in order.
 *
 * Rows of 7+5, 4+4+4, 5+7 and 6+6 — the rhythm changes every row, and the last
 * row absorbs whatever the catalogue's length leaves over.
 */
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-6",
  "lg:col-span-6",
];

export function IndustryBento({ industries }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="section-y">
      <Container size="wide">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {industries.map((industry, index) => (
            <IndustryTile
              key={industry.slug}
              industry={industry}
              index={index}
              progress={scrollYProgress}
              span={SPANS[index % SPANS.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustryTile({ industry, index, progress, span }) {
  const reduced = useReducedMotion();

  /* Alternating drift, so neighbouring tiles never move in lockstep. */
  const lift = index % 2 === 0 ? 26 : -22;
  const y = useTransform(progress, [0, 1], [lift, -lift]);

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: EASE }}
      className={cn("group relative", span)}
    >
      <Link
        href={industry.href}
        className="block overflow-hidden rounded-[1.5rem] outline-none ring-1 ring-black/[0.06] transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-brand-600 lg:rounded-[1.75rem]"
      >
        <div className="relative h-[17rem] w-full overflow-hidden bg-surface sm:h-[19rem] lg:h-[22rem]">
          <motion.div
            className="absolute inset-[-8%]"
            style={reduced ? undefined : { y }}
          >
            <Image
              src={industry.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
          </motion.div>

          {/* The ground the words stand on, deepening as the tile opens. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgb(7_7_30/0.9)_0%,rgb(7_7_30/0.55)_38%,rgb(7_7_30/0.1)_74%,transparent_100%)] transition-opacity duration-500"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-brand-800/45 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          <span
            aria-hidden="true"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-brand-600"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <h2 className="font-display text-xl font-semibold tracking-tight text-balance text-white sm:text-2xl">
              {industry.title}
            </h2>

            {/*
              The summary is laid out at all times and only revealed, so the
              tile never reflows on hover and the type never jumps.
            */}
            <p className="mt-2.5 max-w-md text-[0.8125rem] leading-relaxed text-white/80 opacity-0 transition-all duration-500 ease-out lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 max-lg:opacity-100">
              {industry.summary}
            </p>

            <span
              aria-hidden="true"
              className="mt-4 block h-[2px] w-10 origin-left scale-x-0 rounded-full bg-white transition-transform duration-500 ease-out group-hover:scale-x-100"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

export default IndustryBento;

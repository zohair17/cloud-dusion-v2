"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Clock, Globe2, Mail } from "lucide-react";
import { Container } from "../primitives/container";
import { RevealText } from "../motion/reveal-text";

/**
 * The contact banner, split down a curve.
 *
 * Not another photograph with words laid over it: the card is cut in two, a
 * solid brand field carrying the invitation and a photograph carrying the
 * room, and the seam between them is a curve rather than a straight edge — so
 * the two halves read as one object that was shaped, not two boxes that were
 * stacked.
 *
 * Rings leave the seam on a slow loop, which is the only literal thing on the
 * page: a signal going out. They are decorative, they are on the compositor,
 * and they stop for a reader who asked for less motion.
 */
const EASE = [0.22, 1, 0.36, 1];

const FACT_ICONS = {
  email: Mail,
  delivery: Globe2,
  response: Clock,
};

export function ContactHero({ page, image }) {
  const reduced = useReducedMotion();

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_100px_-56px_rgb(53_51_205/0.45)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem]">
          {/* The photograph, holding the right of the card. */}
          <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
            <motion.div
              className="absolute inset-0"
              animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="52vw"
                priority
                className="object-cover"
              />
            </motion.div>
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.92),rgb(255_255_255/0.2)_45%,transparent)]"
            />
          </div>

          {/*
            The curve itself. An SVG rather than a border-radius, because the
            seam has to bow across the card and no rectangle does that.
          */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-y-0 right-[42%] hidden h-full w-[20%] lg:block"
          >
            <path d="M100,0 C 46,16 46,84 100,100 L0,100 L0,0 Z" className="fill-white" />
          </svg>

          {/* The brand field, and the signal leaving it. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(120%_140%_at_0%_0%,rgb(53_51_205/0.07),transparent_60%)] lg:w-[62%]"
          />

          {reduced ? null : (
            <div aria-hidden="true" className="pointer-events-none absolute left-[36%] top-1/2 hidden -translate-y-1/2 lg:block">
              {[0, 1, 2].map((ring) => (
                <motion.span
                  key={ring}
                  className="absolute left-0 top-0 block h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-600/35"
                  initial={{ scale: 0.35, opacity: 0 }}
                  animate={{ scale: [0.35, 1.9], opacity: [0, 0.5, 0] }}
                  transition={{ duration: 7, repeat: Infinity, delay: ring * 2.35, ease: "easeOut" }}
                />
              ))}
            </div>
          )}

          <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:w-[52%] lg:py-20 lg:pl-16 lg:pr-8">
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-pill border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-600/80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-600" />
              </span>
              {page.title}
            </motion.p>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-foreground sm:text-5xl xl:text-[3.5rem]">
              <RevealText delay={0.12}>{page.tagline}</RevealText>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="mt-7 max-w-xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
            >
              {page.intro}
            </motion.p>

            {/* The three facts, arriving one after another. */}
            <motion.dl
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.45 } } }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {page.facts.map((fact) => {
                const Icon = FACT_ICONS[fact.label.toLowerCase()] ?? Mail;

                return (
                  <motion.div
                    key={fact.label}
                    variants={{
                      hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 16 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
                    }}
                    className="min-w-0 rounded-2xl border border-brand-600/15 bg-brand-50/50 p-4 transition-colors duration-500 hover:border-brand-600/40 hover:bg-brand-50"
                  >
                    <dt className="flex items-center gap-2 text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
                      {fact.label}
                    </dt>
                    <dd className="mt-2 break-words text-[0.75rem] font-medium leading-snug text-foreground sm:text-[0.8125rem]">
                      {fact.kind === "email" ? (
                        <a href={`mailto:${fact.value}`} className="underline-offset-4 hover:underline">
                          {fact.value}
                        </a>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </motion.div>
                );
              })}
            </motion.dl>

            <motion.a
              href="#inquiry"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 inline-flex items-center gap-2.5 text-sm font-medium text-muted transition-colors hover:text-brand-700"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-600/30 text-brand-600">
                <motion.span
                  animate={reduced ? undefined : { y: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </motion.span>
              </span>
              Send us the brief
            </motion.a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactHero;

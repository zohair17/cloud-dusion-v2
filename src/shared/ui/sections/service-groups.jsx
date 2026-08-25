"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { RevealGroup, RevealItem } from "../motion/reveal";

/**
 * The services index: the promise, then the catalogue by practice.
 *
 * Twelve lines is too many for one flat grid, so the page is read group by
 * group — each practice announces itself on a rule, then lists what it does.
 * The number beside each group heading is what tells the reader how far through
 * the catalogue they are without a scrollbar having to do it.
 */
const EASE = [0.22, 1, 0.36, 1];

export function ServicesHero({ page, groups }) {
  const reduced = useReducedMotion();
  const [primaryCta] = page.ctas ?? [];
  const count = groups.reduce((total, group) => total + group.services.length, 0);

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-7 py-14 text-center shadow-[0_34px_90px_-58px_rgb(53_51_205/0.5)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem] sm:px-12 sm:py-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_90%_at_50%_0%,rgb(53_51_205/0.08),transparent_70%)]"
          />

          <div className="relative mx-auto max-w-3xl">
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center rounded-pill border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-brand-700"
            >
              {page.title}
            </motion.p>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl">
              <RevealText delay={0.12}>{page.tagline}</RevealText>
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
              className="mx-auto mt-7 max-w-2xl text-[0.9375rem] leading-[1.75] text-muted sm:text-base"
            >
              {page.intro}
            </motion.p>

            {/* The practices, as a map of what follows. */}
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.4 } } }}
              className="mt-9 flex flex-wrap justify-center gap-2.5"
            >
              {groups.map((group) => (
                <motion.li
                  key={group.id}
                  variants={{
                    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
                  }}
                >
                  <a
                    href={`#${group.id}`}
                    className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-brand-300 hover:text-brand-700"
                  >
                    {group.title}
                    <span className="font-display text-xs font-semibold text-brand-600">
                      {group.services.length}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            {primaryCta ? (
              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-4"
              >
                <Button href={primaryCta.href} variant="primary" size="lg" className="gap-3 pr-2.5">
                  {primaryCta.label}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
                <p className="font-display text-sm font-medium text-muted">
                  <span className="font-semibold text-brand-600">{count}</span> service lines
                </p>
              </motion.div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** One practice, then the services inside it. */
export function ServiceGroups({ groups }) {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <section key={group.id} id={group.id} className="section-y scroll-mt-28">
          <Container size="wide">
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border pt-7">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-3xl">
                  {group.title}
                </h2>
                {group.description ? (
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{group.description}</p>
                ) : null}
              </div>

              <p className="font-display text-sm font-medium text-faint">
                {group.services.length} {group.services.length === 1 ? "service" : "services"}
              </p>
            </div>

            <RevealGroup
              as="ul"
              stagger={0.07}
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {group.services.map((service) => (
                <RevealItem key={service.slug} as="li" y={20}>
                  <ServiceCard service={service} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      ))}
    </>
  );
}

function ServiceCard({ service }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/[0.06] transition-shadow duration-500 hover:shadow-[0_30px_70px_-46px_rgb(53_51_205/0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
    >
      {service.image ? (
        <div className="relative h-40 w-full overflow-hidden bg-surface">
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgb(7_7_30/0.35),transparent_60%)]"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-balance text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 text-[0.875rem] leading-relaxed text-muted">{service.summary}</p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
          Explore
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

export default ServiceGroups;

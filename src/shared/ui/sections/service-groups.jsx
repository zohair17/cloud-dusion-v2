"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { RevealText } from "../motion/reveal-text";
import { cn } from "../primitives/cn";

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

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-10 text-center shadow-[0_34px_90px_-58px_rgb(53_51_205/0.5)] ring-1 ring-brand-600/25 sm:rounded-[2.5rem] sm:px-12 sm:py-20">
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

            <h1 className="mt-6 font-display text-[1.75rem] font-semibold leading-[1.14] tracking-tight sm:leading-[1.08] text-balance text-foreground sm:text-5xl">
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
                <Button href={primaryCta.href} variant="primary" size="lg" className="gap-2.5 pr-2 sm:gap-3 sm:pr-2.5">
                  {primaryCta.label}
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600 sm:h-8 sm:w-8">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              </motion.div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * One practice, then the services inside it.
 *
 * The catalogue used to be a three-up grid of identical tiles, which reads as
 * inventory. Here each service takes a full row and the halves swap sides as
 * you go down, so the eye is walked left, right, left rather than scanned. Only
 * the practice carries a number: numbering the services as well would count the
 * same catalogue twice.
 */
export function ServiceGroups({ groups }) {
  return (
    <>
      {groups.map((group, groupIndex) => (
        <section key={group.id} id={group.id} className="section-y scroll-mt-28">
          <Container size="wide">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <p className="font-display text-sm font-semibold tabular-nums tracking-tight text-brand-600">
                  {String(groupIndex + 1).padStart(2, "0")}
                </p>
                <span aria-hidden="true" className="h-px w-16 bg-brand-200" />
              </div>

              <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
                <GroupTitle title={group.title} />
              </h2>

              {group.description ? (
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{group.description}</p>
              ) : null}
            </div>

            <div className="mt-8 space-y-4 sm:mt-10">
              {group.services.map((service, index) => (
                <ServiceRow key={service.slug} service={service} flip={index % 2 === 1} />
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

/** The practice name, with its opening words carried in the brand colour. */
function GroupTitle({ title }) {
  const words = title.split(" ");
  if (words.length < 3) return title;
  const lead = words.slice(0, words.length > 4 ? 2 : 1).join(" ");

  return (
    <>
      <span className="text-brand-600">{lead}</span> {words.slice(lead.split(" ").length).join(" ")}
    </>
  );
}

/** One service: a picture on one side, the case for it on the other. */
function ServiceRow({ service, flip }) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="grid gap-3 sm:gap-4 lg:grid-cols-2"
    >
      {service.image ? (
        <Link
          href={service.href}
          tabIndex={-1}
          aria-hidden="true"
          className={cn(
            "group relative block h-40 overflow-hidden rounded-[1.25rem] bg-surface sm:h-52 lg:h-full lg:min-h-[13.5rem]",
            flip ? "lg:order-2" : "lg:order-1",
          )}
        >
          <Image
            src={service.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>
      ) : null}

      <Link
        href={service.href}
        className={cn(
          "group flex flex-col justify-center rounded-[1.25rem] bg-[#f7f7fa] p-6 ring-1 ring-black/[0.04] transition-colors duration-500 hover:bg-brand-50/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 sm:p-8 lg:p-9",
          service.image ? (flip ? "lg:order-1" : "lg:order-2") : "lg:col-span-2",
        )}
      >
        <h3 className="font-display text-lg font-semibold tracking-tight text-balance text-foreground sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-xl text-[0.875rem] leading-relaxed text-muted">{service.summary}</p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
          Explore
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </Link>
    </motion.div>
  );
}

export default ServiceGroups;

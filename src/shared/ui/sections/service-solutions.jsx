"use client";

import Link from "next/link";
import {
  ArrowRightLeft,
  ArrowUpRight,
  Bluetooth,
  Factory,
  FileOutput,
  FileSearch,
  Handshake,
  MessageSquareText,
  PackageSearch,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/** Content records carry a glyph *id*; this component owns the icon. */
const ICONS = {
  "file-search": FileSearch,
  "file-output": FileOutput,
  "message-square-text": MessageSquareText,
  "server-cog": ServerCog,
  "arrow-right-left": ArrowRightLeft,
  factory: Factory,
  handshake: Handshake,
  "package-search": PackageSearch,
  bluetooth: Bluetooth,
};

/** Three to a row on a wide screen, over a six-column grid so a short last row can share it. */
const COLUMNS = 3;
const TRACKS = 6;

/**
 * Solutions built with this service.
 *
 * Five cards over six tracks: three across, then the two left over widen to
 * half each rather than leaving a hole at the end of the row. The rule reads the
 * list length, so a service that links four or seven still tiles.
 */
export function ServiceSolutions({ section, items = [] }) {
  const scope = useGsap(({ reduced, root }) => {
    gsap.from("[data-solution]", {
      opacity: 0,
      y: reduced ? 0 : 26,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: { trigger: root, start: "top 78%", once: true },
    });
  }, [items.length]);

  if (!section || !items.length) return null;

  const remainder = items.length % COLUMNS;
  const tailStart = remainder ? items.length - remainder : items.length;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} intro={section.intro} />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item, index) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            const inTail = index >= tailStart;
            const span = inTail ? TRACKS / remainder : TRACKS / COLUMNS;

            return (
              <li
                key={item.slug}
                data-solution
                className={cn(
                  span === 2 && "lg:col-span-2",
                  span === 3 && "lg:col-span-3",
                  span === 6 && "lg:col-span-2 lg:col-start-3",
                )}
              >
                <Link
                  href={item.href}
                  className="cfg-card cfg-card-plain group relative flex h-full flex-col rounded-card p-7"
                >
                  <span aria-hidden="true" className="cfg-sheen" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[0_10px_20px_-8px_rgb(53_51_205/0.55)] transition-transform duration-500 group-hover:-translate-y-0.5">
                      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                    </span>

                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-faint transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="relative mt-6 font-display text-lg font-semibold leading-snug tracking-tight text-balance">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                    {item.categoryTitle}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceSolutions;

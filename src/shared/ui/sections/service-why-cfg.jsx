"use client";

import {
  Blocks,
  Building2,
  Cloud,
  Handshake,
  Route,
  Sparkles,
} from "lucide-react";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

const ICONS = {
  sparkles: Sparkles,
  cloud: Cloud,
  blocks: Blocks,
  route: Route,
  building: Building2,
  handshake: Handshake,
};

/**
 * Why CFG, on a service page.
 *
 * The homepage argues this at length. Here it is a reminder, so it is six names
 * and nothing else — tiles that flip up into place as the section arrives, and
 * then stay out of the way of the invitation that follows.
 */
export function ServiceWhyCfg({ section }) {
  const scope = useGsap(({ reduced, root }) => {
    gsap.from("[data-tile]", {
      opacity: 0,
      y: reduced ? 0 : 22,
      rotateX: reduced ? 0 : -18,
      transformOrigin: "50% 100%",
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.06,
      scrollTrigger: { trigger: root, start: "top 80%", once: true },
    });
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading align="center" eyebrow={section.eyebrow} heading={section.heading} />

        <ul
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "900px" }}
        >
          {items.map((item) => {
            const Icon = ICONS[item.icon] ?? Sparkles;

            return (
              <li
                key={item.title}
                data-tile
                className="flex items-center gap-4 rounded-card border border-border bg-white px-6 py-5 transition-colors duration-500 hover:border-brand-300"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.6} />
                </span>
                <p className="font-display text-base font-semibold leading-snug tracking-tight text-balance">
                  {item.title}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceWhyCfg;

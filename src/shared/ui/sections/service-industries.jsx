"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";

/**
 * Industries served.
 *
 * The same photographic card the homepage uses for verticals, so a reader who
 * has seen one recognises the other — but dealt as a row here rather than a
 * grid, because on a service page these are a footnote to the service, not the
 * subject.
 *
 * Each card rises a little further than the last as the row arrives, which
 * gives the row a direction to be read in.
 */
export function ServiceIndustries({ section, items = [] }) {
  const scope = useGsap(({ reduced, root }) => {
    gsap.from("[data-industry]", {
      opacity: 0,
      y: reduced ? 0 : 34,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: { trigger: root, start: "top 78%", once: true },
    });
  }, [items.length]);

  if (!section || !items.length) return null;

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((industry) => (
            <li key={industry.slug} data-industry>
              <Link
                href={industry.href}
                className="group relative block h-[clamp(16rem,26vw,19rem)] overflow-hidden rounded-card shadow-[0_1px_4px_rgb(21_21_28/0.06),0_24px_50px_-32px_rgb(25_24_89/0.35)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_1px_4px_rgb(21_21_28/0.06),0_40px_70px_-34px_rgb(25_24_89/0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
              >
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 19vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : null}

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgb(9_9_36/0.92)_0%,rgb(9_9_36/0.72)_28%,rgb(9_9_36/0.22)_62%,rgb(9_9_36/0.05)_100%)]"
                />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-balance text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-[0.8125rem] leading-relaxed text-white/75">
                    {industry.summary}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default ServiceIndustries;

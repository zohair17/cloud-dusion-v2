import Image from "next/image";
import Link from "next/link";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { RevealGroup, RevealItem } from "../motion/reveal";
import { cn } from "../primitives/cn";

/** Four to a row on a wide screen, which is what leaves an odd one over. */
const COLUMNS = 4;

/**
 * Industries served.
 *
 * A grid of photographic cards: the picture is the card, darkened from the foot
 * upward so the name and the line under it read in white over it. No badge, no
 * button — the whole card is the link, and what a reader needs is the vertical
 * and what we do in it.
 *
 * Nine verticals over four columns leaves one on its own, so the last card is
 * widened and centred rather than left hanging in the first column. It is the
 * remainder that gets handled, not the count: the rule reads the list length.
 */
export function IndustryFocus({ section }) {
  const items = section.items ?? [];
  // Only a single leftover is worth widening; two or three fill the row well enough.
  const orphan = items.length % COLUMNS === 1 ? items.length - 1 : -1;

  return (
    <section className="section-y">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
        />

        <RevealGroup
          delay={0.1}
          stagger={0.06}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((industry, index) => (
            <RevealItem
              key={industry.slug}
              className={cn(index === orphan && "lg:col-span-2 lg:col-start-2")}
            >
              <Link
                href={industry.href}
                className="group relative block h-[clamp(17rem,24vw,21rem)] overflow-hidden rounded-card shadow-[0_1px_4px_rgb(21_21_28/0.06),0_24px_50px_-32px_rgb(25_24_89/0.35)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_1px_4px_rgb(21_21_28/0.06),0_40px_70px_-34px_rgb(25_24_89/0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
              >
                {industry.image ? (
                  <Image
                    src={industry.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                ) : null}

                {/*
                  Weighted to the foot: the photograph stays a photograph at the
                  top and is dark enough to set type on by the time it reaches
                  the words. A flat scrim would flatten the picture instead.
                */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgb(9_9_36/0.92)_0%,rgb(9_9_36/0.72)_28%,rgb(9_9_36/0.22)_62%,rgb(9_9_36/0.05)_100%)]"
                />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl font-semibold leading-tight tracking-tight text-balance text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{industry.summary}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

export default IndustryFocus;

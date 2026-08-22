import Image from "next/image";
import Link from "next/link";
import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { Reveal } from "../motion/reveal";

/**
 * Industries served.
 *
 * A full-bleed accordion of photographic panels rather than a card grid: all
 * nine verticals share the row equally, and the panel under the pointer takes
 * space from the rest (see `.industry-row` in globals.css). Titles sit vertical
 * while a panel is narrow and turn horizontal once it opens — a container query
 * on the panel itself, so the flip follows the panel's real width rather than
 * the viewport's.
 *
 * The row is deliberately outside the container: photographs read as a band
 * across the page, which is the one place the site breaks its own gutter.
 */
export function IndustryFocus({ section }) {
  return (
    <section className="py-24 sm:py-32">
      <Container size="wide">
        <SectionHeading
          align="center"
          eyebrow={section.eyebrow}
          heading={section.heading}
          intro={section.intro}
        />
      </Container>

      <Reveal delay={0.1} className="mt-14">
        <ul className="industry-row flex h-[clamp(19rem,52svh,34rem)] gap-[clamp(0.25rem,0.93vw,0.85rem)]">
          {section.items.map((industry, index) => (
            <li
              key={industry.slug}
              className="group/panel relative isolate min-h-0 overflow-hidden [container-type:size]"
            >
              {industry.image ? (
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 40vw, 50vw"
                  className="object-cover"
                />
              ) : null}

              {/* Scrim. Lifts on hover so the photograph comes forward as the panel opens. */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-foreground/45 transition-colors duration-500 group-hover/panel:bg-foreground/15"
              />

              <Link
                href={industry.href}
                aria-label={industry.title}
                className="absolute inset-0 grid grid-rows-[minmax(var(--badge),min(52%,100%_-_13em))_1fr] place-items-center p-1 text-center text-[max(0.5rem,min(clamp(0.7rem,1.6vw,1.05rem),4.2cqh))] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white @min-[4rem]:p-2 @min-[9rem]:grid-rows-[52%_1fr] @min-[9rem]:text-[min(clamp(0.95rem,1.45vw,1.4rem),12cqw)]"
                style={{ "--badge": "min(clamp(2rem, 2.96vw, 2.9rem), 66cqw)" }}
              >
                <span className="grid h-[var(--badge)] w-[var(--badge)] shrink-0 select-none place-items-center self-end rounded-full bg-white/85 text-[min(clamp(0.75rem,1.35vw,1.3rem),36cqw)] font-semibold leading-none text-foreground transition-colors duration-500 group-hover/panel:bg-brand-600 group-hover/panel:text-white">
                  {index + 1}
                </span>

                <span
                  aria-hidden="true"
                  className="mt-1 rotate-180 self-start text-nowrap font-semibold leading-tight text-white [writing-mode:vertical-rl] @min-[9rem]:mt-2 @min-[9rem]:rotate-0 @min-[9rem]:text-balance @min-[9rem]:[writing-mode:horizontal-tb]"
                >
                  {industry.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export default IndustryFocus;

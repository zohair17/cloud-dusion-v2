import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Reveal } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";
import { SolutionCards } from "./solution-cards";
import { routes } from "@/shared/config/routes";

/**
 * Featured solutions.
 *
 * The section's type sits on top and the catalogue tiles beneath it as cards,
 * each carrying its own photography. This file owns the type; the cards own
 * their own figure.
 */
export function FeaturedSolutions({ section }) {
  return (
    <section className="py-24 sm:py-32">
      <Container size="wide">
        <div className="mx-auto max-w-[34rem] text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
              {section.eyebrow}
            </p>
          </Reveal>

          <RevealText
            as="h2"
            delay={0.08}
            className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {section.heading}
          </RevealText>

          {section.intro ? (
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{section.intro}</p>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-14 sm:mt-16">
          <SolutionCards items={section.items} />
        </div>

        <div className="mt-14 text-center">
          <Reveal delay={0.1}>
            <Link
              href={routes.solutions.index()}
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-brand-300 hover:text-brand-700"
            >
              View all solutions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedSolutions;

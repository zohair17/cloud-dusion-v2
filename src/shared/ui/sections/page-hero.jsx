import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { HeroContactBar } from "./hero-contact-bar";

/**
 * The hero slab, for a page other than home.
 *
 * Same construction as the homepage hero: one white slab, the promise on the
 * left and the film that illustrates it on the right, drawn on the slab's own
 * white so the two halves share an edge rather than a gap. There is no frame,
 * no card-within-a-card and no seam to notice.
 *
 * Where the slab is wide enough to afford it, the brand bracket opens between
 * the two, pointing back at the headline. Below that width the bracket would
 * have to eat into the film, so it simply is not drawn.
 *
 * The film itself is passed in rather than named here — this component owns the
 * slab, and each page owns its own picture.
 */
export function PageHero({ trail = [], eyebrow, heading, headingAccent, intro, ctas = [], children }) {
  const [primaryCta, ...secondaryCtas] = ctas;

  return (
    <section className="relative isolate">
      {/*
        `wide` on the page's own gutter — the same rail the header runs on, so
        the breadcrumb and the slab start where the logo starts and finish where
        the contact button finishes. The homepage widens its hero past that rail
        on purpose; an inner page holds the line instead.
      */}
      <Container size="wide" className="pt-4 pb-6 sm:pt-5 sm:pb-7 lg:pb-8">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint sm:text-sm">
              {trail.map((crumb, index) => {
                const last = index === trail.length - 1;

                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="h-3.5 w-3.5 text-border" aria-hidden="true" />
                    ) : null}
                    {last || !crumb.href ? (
                      <span aria-current={last ? "page" : undefined} className="text-muted">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-brand-700">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        {/*
          The slab stands as tall as the homepage's, which earns its height from
          a longer headline and a fuller paragraph than this page has. A minimum
          tracks that height directly rather than leaving the slab to be sized by
          its own shorter copy, so the two heroes match at a glance.
        */}
        <div className="relative isolate grid min-h-[clamp(20rem,60vh,41rem)] items-center gap-0 overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_40px_100px_-40px_rgb(11_11_42/0.28)] ring-1 ring-black/[0.04] sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-6 lg:pl-10 lg:pr-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:pl-12">
          <div className="relative z-10 order-2 w-full max-w-2xl lg:order-1">
            {eyebrow ? (
              <p className="inline-flex items-center rounded-pill border border-brand-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-700 shadow-sm backdrop-blur-sm sm:text-sm">
                {eyebrow}
              </p>
            ) : null}

            {/*
              The headline turns brand halfway through, as it does on the
              homepage: the first half names the subject in ink, the second
              carries the claim in colour. The accent waits for the first half
              to finish assembling, so the two read as one sentence arriving.
            */}
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.65rem]">
              <RevealText delay={0.1}>{heading}</RevealText>{" "}
              {headingAccent ? (
                <RevealText
                  className="text-brand-600"
                  delay={0.1 + heading.split(" ").length * 0.055}
                >
                  {headingAccent}
                </RevealText>
              ) : null}
            </h1>

            {intro ? (
              <p className="mt-3.5 max-w-xl text-sm leading-[1.55] text-muted sm:text-base">
                {intro}
              </p>
            ) : null}

            {ctas.length ? (
              <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row">
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    size="lg"
                    className="w-full whitespace-nowrap sm:w-auto"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                ) : null}
                {secondaryCtas.map((cta) => (
                  <Button
                    key={cta.intent}
                    href={cta.href}
                    variant="secondary"
                    size="lg"
                    className="w-full whitespace-nowrap sm:w-auto"
                  >
                    {cta.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          {/*
            The film half. It runs out through the slab's own padding to the
            slab's edge, so the picture has no rectangle of its own — the card's
            rounded corner is the only boundary, and the film dissolves into the
            white on the one side that faces the words.
          */}
          <div className="relative order-1 -mx-5 -mt-5 mb-1 h-[clamp(9rem,19vh,12.5rem)] sm:-mx-7 sm:-mt-7 sm:h-[clamp(13rem,30vw,20rem)] lg:order-2 lg:mx-0 lg:-mt-6 lg:-mr-6 lg:-mb-6 lg:h-auto lg:self-stretch">
            {children}

            {/*
              The brand bracket, drawn last so its arms run over the film's own
              white margin and stop short of the picture — the same reading as
              the homepage, where the bracket disappears behind it.

              It is a clipped shape rather than a stroked path: a stroke joined
              under a non-uniform scale bevels its own corner, which reads as
              two arms overlapping instead of one bracket coming to a point.
            */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[4%] top-[-14%] hidden h-[128%] w-[22%] [filter:drop-shadow(4px_0_8px_rgb(53_51_205/0.18))] xl:block"
            >
              {/* Clipped inside the filter, so the shadow is cast by the
                  bracket rather than trimmed away with the rectangle. */}
              <div className="h-full w-full bg-brand-600 [clip-path:polygon(100%_0,100%_8%,16%_50%,100%_92%,100%_100%,0_50%)]" />
            </div>
          </div>
        </div>

        {/* The same bar that closes the homepage hero: how to reach us, before
            the page has asked for anything. */}
        <HeroContactBar />
      </Container>
    </section>
  );
}

export default PageHero;

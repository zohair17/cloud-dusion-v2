"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { Film } from "./film";
import { HeroContactBar } from "./hero-contact-bar";
import { ConsultationModal } from "./consultation-modal";

/**
 * Homepage hero.
 *
 * One slab: the promise on the left, the ecosystem that delivers it on the
 * right. The film is drawn on the same white as the slab, so the two halves
 * share an edge rather than a gap — there is no frame, no card-within-a-card
 * and no seam to notice.
 *
 * Where the slab is wide enough to afford it, the brand bracket opens between
 * the two, pointing back at the headline. Below that width the bracket would
 * have to eat into the film, so it simply is not drawn.
 */
export function Hero({ hero }) {
  const [primaryCta, ...secondaryCtas] = hero.ctas;
  /* The first ask happens here rather than a page away. */
  const [consulting, setConsulting] = useState(false);

  return (
    <section className="relative isolate">
      {/* `wide` matches the header rail, so the hero lines up with the logo. */}
      <Container
        size="wide"
        className="[--spacing-gutter:1.25rem] pt-2 pb-6 sm:[--spacing-gutter:2rem] sm:pt-3 sm:pb-7 lg:pb-8"
      >
        <div className="cfg-hero-slab relative isolate grid min-h-0 sm:min-h-[clamp(18rem,50vh,29rem)] lg:min-h-[min(calc(100dvh-12.5rem),58rem)] items-center gap-0 overflow-hidden rounded-[2rem] bg-white p-5 shadow-[0_40px_100px_-40px_rgb(11_11_42/0.28)] ring-1 ring-black/[0.04] sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-6 lg:pl-10 lg:pr-6 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] xl:pl-12">
          <div className="relative z-10 order-2 w-full max-w-2xl lg:order-1">
            {hero.eyebrow ? (
              <p className="inline-flex items-center rounded-pill border border-brand-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-700 shadow-sm backdrop-blur-sm sm:text-sm">
                {hero.eyebrow}
              </p>
            ) : null}

            <h1 className="mt-4 font-display text-[1.625rem] font-semibold leading-[1.14] tracking-tight text-balance sm:text-4xl sm:leading-[1.08] lg:text-[2.65rem]">
              <RevealText delay={0.1}>{hero.headline}</RevealText>{" "}
              {hero.headlineAccent ? (
                <RevealText
                  className="text-brand-600"
                  delay={0.1 + hero.headline.split(" ").length * 0.055}
                >
                  {hero.headlineAccent}
                </RevealText>
              ) : null}
            </h1>

            {hero.subheadline ? (
              <p className="mt-3.5 max-w-xl text-[0.8125rem] leading-[1.6] text-muted sm:text-base sm:leading-[1.55]">
                {hero.subheadline}
              </p>
            ) : null}

            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row">
              {primaryCta ? (
                <Button
                  type="button"
                  onClick={() => setConsulting(true)}
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
          </div>

          <div className="relative order-1 overflow-hidden -mx-5 -mt-5 mb-1 h-[clamp(3rem,60vw,226rem)] sm:-mx-7 sm:-mt-7 sm:h-[clamp(19rem,47vw,313rem)] cfg-hero-film-well lg:order-2 lg:-mr-6 lg:ml-0 lg:-my-9 lg:mb-0 lg:h-auto lg:self-stretch lg:pl-0 xl:translate-x-8">
            <Film
              src="/asset/hero-swing.mp4"
              poster="/asset/hero-swing-poster.webp"
              label={`${hero.constellation?.hub ?? "AI agents"} at the centre of the Microsoft ecosystem`}
              className="cfg-hero-film"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[4%] top-[-12%] hidden h-[128%] w-[22%] xl:block"
            >
              <svg
                className="h-full w-full overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon
                  points="100,0 100,8 16,50 100,92 100,100 0,50"
                  fill="white"
                  stroke="rgb(53 51 205)"
                  strokeWidth="2.9"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

          </div>
        </div>

        <HeroContactBar />
      </Container>

      <ConsultationModal open={consulting} onClose={() => setConsulting(false)} />
    </section>
  );
}

export default Hero;

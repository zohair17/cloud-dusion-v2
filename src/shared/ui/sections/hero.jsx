import { ArrowRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { HeroMedia } from "./hero-media";

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

  return (
    <section className="relative isolate">
      {/* `wide` matches the header rail, so the hero lines up with the logo. */}
      <Container
        size="wide"
        className="[--spacing-gutter:1.25rem] pt-3 pb-8 sm:[--spacing-gutter:2rem] sm:pt-4 sm:pb-10 lg:pb-12"
      >
        <div className="relative isolate grid min-h-[clamp(26rem,66vh,38rem)] items-center gap-0 overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_40px_100px_-40px_rgb(11_11_42/0.28)] ring-1 ring-black/[0.04] sm:p-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:py-10 lg:pl-12 lg:pr-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:pl-14">
          <div className="relative z-10 order-2 w-full max-w-2xl lg:order-1">
            {hero.eyebrow ? (
              <p className="inline-flex items-center rounded-pill border border-brand-200/70 bg-white/80 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-700 shadow-sm backdrop-blur-sm sm:text-sm">
                {hero.eyebrow}
              </p>
            ) : null}

            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-5xl">
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
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {hero.subheadline}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
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
          </div>

          {/*
            The film half. It bleeds through the slab's own padding and is
            sized by the room it is given, so the picture grows with the slab
            rather than sitting in a fixed well.
          */}
          <div className="relative order-1 -mx-6 -mt-6 mb-2 h-[clamp(14rem,38vh,20rem)] sm:-mx-8 sm:-mt-8 sm:h-[clamp(18rem,46vw,28rem)] lg:order-2 lg:mx-0 lg:-my-10 lg:mb-0 lg:h-auto lg:self-stretch lg:pl-[4%] xl:pl-[20%]">
            <HeroMedia
              label={`${hero.constellation?.hub ?? "AI agents"} at the centre of the Microsoft ecosystem`}
            />

            {/*
              The brand bracket, drawn last so its arms run over the film's own
              white margin and stop short of the diagram — the same reading as
              the reference, where the bracket disappears behind the picture.

              It is a clipped shape rather than a stroked path: a stroke joined
              under a non-uniform scale bevels its own corner, which reads as
              two arms overlapping instead of one bracket coming to a point.
              Cutting the outline puts both the nose and the notch on an exact
              vertex, and keeps the arms parallel — the inner tip sits at twice
              the inset of the inner shoulder, which is what makes them so.

              The shadow falls to the right only, the side the arms open onto,
              and only just enough to lift the bracket off the slab.
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
      </Container>
    </section>
  );
}

export default Hero;

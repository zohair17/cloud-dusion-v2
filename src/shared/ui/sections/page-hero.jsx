import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";

/**
 * The hero slab, for a page other than home.
 *
 * The film is the hero here, not a picture beside the promise but the ground
 * the promise is set on. Both clips are 16:9, so the section is 16:9 too: the
 * picture then fills it edge to edge at its own proportions, with nothing
 * cropped off and no letterbox at the sides. A minimum height keeps the slab
 * usable on a phone, where 16:9 of 390px would be a strip.
 *
 * Both clips are rendered on white, so the veil over them is black: a white one
 * washed out and left the type floating in space. The words are set on it in
 * white, with the accent lifted to the light end of the brand ramp, which is
 * where #3533cd stops sinking into the dark.
 *
 * There is no card and no rail on the media: a rectangle drawn around a picture
 * that already fills the frame is a rectangle drawn around the page.
 */
export function PageHero({ trail = [], eyebrow, heading, headingAccent, intro, ctas = [], children }) {
  const [primaryCta, ...secondaryCtas] = ctas;

  /*
   * `w-full` below is load-bearing: with a bare `width: auto` the capped height
   * is transferred back through the aspect ratio and the slab narrows to match,
   * leaving a gutter down the side of the page.
   */
  return (
    <section className="relative isolate flex aspect-[16/9] max-h-[min(88vh,48rem)] min-h-[clamp(27rem,74vh,40rem)] w-full items-center overflow-hidden">
      {/* The film, and the veil it is read through. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#07071e]">
        {children}
      </div>
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(7_7_30/0.88)_0%,rgb(7_7_30/0.66)_46%,rgb(7_7_30/0.58)_100%)]"
      />

      <Container size="wide" className="relative py-16 text-center sm:py-20">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/55 sm:text-sm">
              {trail.map((crumb, index) => {
                const last = index === trail.length - 1;

                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="h-3.5 w-3.5 text-white/35" aria-hidden="true" />
                    ) : null}
                    {last || !crumb.href ? (
                      <span aria-current={last ? "page" : undefined} className="text-white/80">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="mx-auto max-w-4xl">
          {eyebrow ? (
            <p className="inline-flex items-center rounded-pill border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white shadow-sm backdrop-blur-sm sm:text-sm">
              {eyebrow}
            </p>
          ) : null}

          {/* The headline turns brand halfway through, as it does on the homepage. */}
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem]">
            <RevealText delay={0.1}>{heading}</RevealText>{" "}
            {headingAccent ? (
              <RevealText
                className="text-brand-400"
                delay={0.1 + heading.split(" ").length * 0.055}
              >
                {headingAccent}
              </RevealText>
            ) : null}
          </h1>

          {intro ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.6] text-white/75 sm:text-lg">
              {intro}
            </p>
          ) : null}

          {ctas.length ? (
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
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
                  variant="onDark"
                  size="lg"
                  className="w-full whitespace-nowrap sm:w-auto"
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;

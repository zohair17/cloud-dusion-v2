import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { HeroBackdrop } from "./hero-backdrop";
import { cn } from "../primitives/cn";

/**
 * The hero slab, for a page other than home.
 *
 * One light card holding two columns: the film on the left, the promise on the
 * right. The film's panel is cut to the clip's own proportion, so the picture
 * fills it corner to corner — nothing is cropped and no band of empty panel is
 * left around it. A brand spine runs down the seam between the two columns,
 * which is what keeps the join reading as one object rather than two boxes side
 * by side.
 *
 * Given a `backdrop` instead, the card becomes one photograph with the promise
 * centred on it. The panel then carries a fixed height tuned to the same
 * proportion the two-column form produces, so a page can change which form it
 * uses without the slab changing size.
 *
 * The crumb stands above the card, because it belongs to the page and not to
 * the panel.
 */
export function PageHero({ trail = [], eyebrow, heading, headingAccent, intro, ctas = [], backdrop, children }) {
  const [primaryCta] = ctas;
  const centred = Boolean(backdrop);

  const copy = (
    <div
      className={cn(
        centred
          ? "relative flex w-full flex-col items-center px-5 py-12 text-center sm:px-10 sm:py-14"
          : "self-center px-4 pb-5 sm:px-6 lg:py-8 lg:pl-11 lg:pr-7",
      )}
    >
      {/*
        Over a photograph the card is dark, so the whole block inverts: the
        chip loses its tint for a glass edge, the type goes white, and the brand
        half of the heading steps up the ramp to a tone that still reads as the
        brand at that contrast.
      */}
      {eyebrow ? (
        <p
          className={cn(
            "inline-flex items-center rounded-pill border px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
            centred
              ? "border-white/35 bg-white/10 text-white backdrop-blur-sm"
              : "border-brand-200 bg-brand-50/80 text-brand-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h1
        className={cn(
          "mt-5 font-display text-[1.625rem] font-semibold leading-[1.16] tracking-tight sm:leading-[1.1] text-balance sm:text-4xl xl:text-[2.75rem]",
          centred
            ? "max-w-3xl text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.6),0_6px_30px_rgb(0_0_0/0.7)]"
            : "text-foreground",
        )}
      >
        <RevealText delay={0.1}>{heading}</RevealText>{" "}
        {headingAccent ? (
          <span className="relative inline-block">
            <RevealText
              className={centred ? "text-white" : "text-brand-600"}
              delay={0.1 + heading.split(" ").length * 0.055}
            >
              {headingAccent}
            </RevealText>
            {/* The stroke under the brand half, as the reference draws it. */}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -bottom-1 left-0 block h-[3px] w-full rounded-full",
                centred ? "bg-white" : "bg-brand-600/80",
              )}
            />
          </span>
        ) : null}
      </h1>

      {intro ? (
        <p
          className={cn(
            "mt-6 text-[0.9375rem] leading-[1.7]",
            centred
              ? "max-w-2xl text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.6),0_4px_22px_rgb(0_0_0/0.7)]"
              : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}

      {primaryCta ? (
        <Button href={primaryCta.href} variant="primary" size="lg" className="mt-8 gap-2.5 pr-2 sm:gap-3 sm:pr-2.5">
          {primaryCta.label}
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600 sm:h-8 sm:w-8">
            <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
          </span>
        </Button>
      ) : null}
    </div>
  );

  return (
    <section className="pb-2 pt-6 sm:pt-8">
      <Container size="wide">
        {trail.length ? (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted sm:text-sm">
              {trail.map((crumb, index) => {
                const last = index === trail.length - 1;

                return (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight className="h-3.5 w-3.5 text-muted/50" aria-hidden="true" />
                    ) : null}
                    {last || !crumb.href ? (
                      <span aria-current={last ? "page" : undefined} className="font-medium text-foreground">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link href={crumb.href} className="underline-offset-4 transition-colors hover:text-brand-700 hover:underline">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 ring-1 ring-brand-600/25 shadow-[0_30px_80px_-52px_rgb(53_51_205/0.45)] sm:p-4">
          {centred ? (
            /*
              32vw is the height the two-column form resolves to at the same
              width, which is what keeps the card the same size either way.
            */
            <div className="relative flex min-h-[clamp(38rem,32vw,29rem)] items-center justify-center overflow-hidden rounded-[1.5rem] ring-1 ring-black/[0.06]">
              <HeroBackdrop src={backdrop} />

              {/* The scrim the words are read on, lightest where the picture is busiest. */}
              <span
                aria-hidden="true"
                 className="absolute inset-0 bg-[linear-gradient(to_right,rgb(0_0_0/0.55),rgb(0_0_0/0.35)_50%,rgb(0_0_0/0.55))]"
              />

              {/*
                The scrim is deliberately thinnest in the middle, which is also
                where the words are and where the wall behind them is brightest.
                This is the pad that pays for that: one soft, heavily blurred
                ellipse under the copy alone, so the picture keeps its light
                everywhere the reader is not reading.
              */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[52%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-black/50 blur-[70px]"
              />

              {copy}
            </div>
          ) : (
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-0">
              {/*
                The panel carries the clip's own proportion, so `contain` lands on
                every edge at once: no crop, no leftover panel, no seam.
              */}
              <div className="relative">
                <div className="relative aspect-[14/9] w-full overflow-hidden rounded-[1.5rem] bg-[#f8f8fb] ring-1 ring-black/[0.06]">
                  {children}
                </div>

                {/* The brand spine on the seam, as the reference draws it. */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[3px] bottom-1 top-1 hidden w-[6px] rounded-full bg-brand-600 lg:block"
                />
              </div>

              {copy}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default PageHero;

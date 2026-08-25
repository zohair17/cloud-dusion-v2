import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { RevealText } from "../motion/reveal-text";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";

/**
 * The hero slab, for a page other than home.
 *
 * One light card holding two columns: the film on the left, the promise on the
 * right. The film's panel is cut to the clip's own 16:9, so the picture fills
 * it corner to corner — nothing is cropped and no band of empty panel is left
 * around it. A brand spine runs down the seam between the two columns, which is
 * what keeps the join reading as one object rather than two boxes side by side.
 *
 * The crumb stands above the card, because it belongs to the page and not to
 * the panel.
 */
export function PageHero({ trail = [], eyebrow, heading, headingAccent, intro, ctas = [], children }) {
  const [primaryCta] = ctas;

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
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-0">
            {/*
              The panel carries the clip's own proportion, so `contain` lands on
              every edge at once: no crop, no leftover panel, no seam.
            */}
            <div className="relative">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.5rem] bg-[#f8f8fb] ring-1 ring-black/[0.06]">
                {children}
              </div>

              {/* The brand spine on the seam, as the reference draws it. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-[3px] bottom-5 top-5 hidden w-[6px] rounded-full bg-brand-600 lg:block"
              />
            </div>

            <div className="self-center px-4 pb-5 sm:px-6 lg:py-8 lg:pl-11 lg:pr-7">
              {eyebrow ? (
                <p className="inline-flex items-center rounded-pill border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-700">
                  {eyebrow}
                </p>
              ) : null}

              <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-foreground sm:text-4xl xl:text-[2.75rem]">
                <RevealText delay={0.1}>{heading}</RevealText>{" "}
                {headingAccent ? (
                  <span className="relative inline-block">
                    <RevealText
                      className="text-brand-600"
                      delay={0.1 + heading.split(" ").length * 0.055}
                    >
                      {headingAccent}
                    </RevealText>
                    {/* The stroke under the brand half, as the reference draws it. */}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 block h-[3px] w-full rounded-full bg-brand-600/80"
                    />
                  </span>
                ) : null}
              </h1>

              {intro ? (
                <p className="mt-6 text-[0.9375rem] leading-[1.7] text-muted">
                  {intro}
                </p>
              ) : null}

              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  size="lg"
                  className="mt-8 gap-3 pr-2.5"
                >
                  {primaryCta.label}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PageHero;

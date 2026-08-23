import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../primitives/container";
import { RevealGroup, RevealItem } from "../motion/reveal";

/**
 * The case study catalogue as a grid of cards.
 *
 * Each card is a claim in three parts: the sector it was delivered in, what was
 * built, and who it was built for. The client sits last and faintest — these
 * engagements are anonymised, so the line is provenance rather than a name to
 * lead with.
 *
 * The surface is the site's solid card: white behind a brand hairline, with a
 * glow that lifts on hover and one pass of light across it. The brand is the
 * frame here rather than an accent inside it, which is what makes a grid of
 * them read as a set rather than six separate panels.
 *
 * The card is one link, not a card containing one: the whole surface is the
 * target, which is what makes the grid feel like a set of doors.
 */
export function CaseStudyCards({ items }) {
  return (
    <section className="section-y">
      <Container size="wide">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <RevealItem key={item.slug} className="h-full">
              <Link
                href={item.href}
                className="cfg-card-solid group relative flex h-full flex-col overflow-hidden rounded-card p-7"
              >
                <span aria-hidden="true" className="cfg-sheen" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="inline-flex items-center rounded-pill border border-brand-200/70 bg-brand-50/60 px-3.5 py-1 text-xs font-medium tracking-wide text-brand-700">
                    {item.sectorLabel}
                  </span>

                  {/* The door handle: the one solid brand field on the card. */}
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[0_10px_20px_-8px_rgb(53_51_205/0.55)] transition-transform duration-500 group-hover:-translate-y-0.5">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <h2 className="relative mt-6 font-display text-xl font-semibold leading-tight tracking-tight text-balance">
                  {item.title}
                </h2>

                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>

                <p className="relative mt-6 border-t border-brand-600 pt-4 text-xs leading-relaxed text-faint">
                  {item.client}
                </p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}

export default CaseStudyCards;

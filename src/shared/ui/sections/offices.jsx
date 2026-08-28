import { MapPin } from "lucide-react";
import { siteConfig } from "@/shared/config/site.config";
import { Container } from "../primitives/container";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";

/**
 * Where the company is.
 *
 * Two offices, given a plate of their own rather than a line in the footer: an
 * address is the one piece of copy on the site that says the company exists in
 * a place, so it is set as a pair of cards with the brand carrying the pin.
 */
export function Offices() {
  const offices = siteConfig.offices ?? [];
  if (!offices.length) return null;

  return (
    <section className="section-y">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#f5f6fd_0%,#ffffff_46%,#f2f3fc_100%)] px-6 py-10 ring-1 ring-brand-100 sm:rounded-[1.75rem] sm:px-10 sm:py-14 lg:px-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-brand-600/[0.08] blur-3xl"
          />

          <Reveal>
            <p className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
              Where we are
            </p>
            <h2 className="mt-3 font-display text-[1.5rem] font-semibold leading-[1.2] tracking-tight text-balance sm:text-4xl sm:leading-[1.15]">
              Two offices, one delivery team
            </h2>
          </Reveal>

          <RevealGroup className="relative mt-9 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {offices.map((office) => (
              <RevealItem key={office.id} y={18}>
                <div className="h-full rounded-[1.25rem] bg-white p-6 ring-1 ring-border transition-shadow duration-500 hover:shadow-[0_26px_48px_-30px_rgb(53_51_205/0.55)] sm:p-7">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[0.8rem] bg-[linear-gradient(140deg,var(--color-brand-500),var(--color-brand-700))] text-white shadow-[0_12px_24px_-12px_rgb(53_51_205/0.7)] ring-1 ring-white/25"
                  >
                    <MapPin className="h-5 w-5" strokeWidth={1.7} />
                  </span>

                  <p className="mt-5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-600">
                    {office.label}
                  </p>
                  <address className="mt-2 not-italic font-display text-base font-semibold leading-snug tracking-tight text-balance text-foreground sm:text-lg">
                    {office.lines.join(" ")}
                  </address>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

export default Offices;

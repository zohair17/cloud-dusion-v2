import { ArrowRight } from "lucide-react";
import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";
import { RevealText } from "../motion/reveal-text";

/**
 * Closing call to action.
 *
 * The page's last statement, and the only place a solid brand field covers the
 * full width — after a page of restraint it lands as an arrival rather than
 * decoration.
 */
export function ClosingCta({ section }) {
  const [primaryCta, ...secondaryCtas] = section.ctas;

  return (
    <section className="relative overflow-hidden section-y">
      <Container size="wide" className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">{section.eyebrow}</p>
          </Reveal>

          <RevealText
            as="h2"
            delay={0.08}
            className="mt-5 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl"
          >
            {section.heading}
          </RevealText>

          <Reveal delay={0.14}>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{section.body}</p>
          </Reveal>

          <RevealGroup
            delay={0.2}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap"
          >
            {primaryCta ? (
              <RevealItem className="w-full sm:w-auto">
                <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </RevealItem>
            ) : null}

            {secondaryCtas.map((cta) => (
              <RevealItem key={cta.intent} className="w-full sm:w-auto">
                <Button href={cta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                  {cta.label}
                </Button>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}

export default ClosingCta;

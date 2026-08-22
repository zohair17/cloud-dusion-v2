import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { TransformationSteps } from "./transformation-steps";

/**
 * The transformation framework.
 *
 * Four stages of one journey, laid out as steps on a rail that draws itself as
 * the reader scrolls — so the section reads as movement from manual operations
 * to measurable outcomes, not as a static comparison. The steps own the
 * geometry and the motion; this file owns the words around them.
 */
export function Transformation({ section }) {
  const stages = section.stages ?? [];

  return (
    <section className="py-24 sm:py-32">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-16">
          <SectionHeading
            eyebrow={section.eyebrow}
            heading={section.heading}
            intro={section.intro}
            align="left"
          />

          <TransformationSteps stages={stages} />
        </div>
      </Container>
    </section>
  );
}

export default Transformation;

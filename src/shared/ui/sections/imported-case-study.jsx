"use client";

import { motion } from "framer-motion";
import { Check, Quote, Sparkles, TriangleAlert, Wrench } from "lucide-react";
import { Container } from "../primitives/container";

/**
 * A case study read off an uploaded document.
 *
 * Every section here is conditional on the document having carried its heading:
 * a write-up with no Review renders no Review, rather than an empty card with a
 * label on it. Bold survives from the source, because in these documents bold
 * is doing work — it is where the client's name and the numbers are.
 *
 * The first two sections follow the approved design exactly; the rest are of a
 * piece with them: one white card per beat, the brand doing the lighting.
 */
const EASE = [0.22, 1, 0.36, 1];

/** One paragraph, with the runs the document set in bold still bold. */
function Rich({ entry, className }) {
  return (
    <p className={className}>
      {entry.runs.length
        ? entry.runs.map((run, index) =>
            run.bold ? (
              <strong key={index} className="font-semibold text-foreground">
                {run.text}
              </strong>
            ) : (
              <span key={index}>{run.text}</span>
            ),
          )
        : entry.text}
    </p>
  );
}

function Rise({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** The centred head the reference uses: a word, then the brand's half of it. */
function Head({ lead, accent }) {
  return (
    <h2 className="text-center font-display text-[1.6rem] font-semibold tracking-tight text-balance text-foreground sm:text-[2.1rem]">
      {lead} {accent ? <span className="text-brand-600">{accent}</span> : null}
    </h2>
  );
}

/** A picture for the study, off its own title. */
function heroImage(title) {
  const query = encodeURIComponent(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !/^(for|the|and|with|our|its)$/.test(word))
      .slice(0, 3)
      .join(",") || "technology,office",
  );

  return `https://source.unsplash.com/1200x900/?${query}`;
}

export function ImportedCaseStudy({ study }) {
  if (!study) return null;

  return (
    <div className="pb-16">
      {/* ------------------------------------------------------------ hero */}
      <section className="pb-2 pt-6 sm:pt-8">
        <Container size="wide">
          <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_36px_92px_-58px_rgb(53_51_205/0.5)] ring-1 ring-black/[0.06] sm:rounded-[2.5rem] sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
              <span className="relative block aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-surface">
                {/* Not next/image: the source is chosen at read time from the
                    document's own title, so there is no build-time URL to
                    optimise and nothing to add to the image config. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={heroImage(`${study.title} ${study.industry ?? ""}`)}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </span>

              <div className="lg:py-4 lg:pr-6">
                <h1 className="font-display text-[1.5rem] font-semibold leading-[1.16] tracking-tight text-balance text-foreground sm:text-[2rem]">
                  {study.title}{" "}
                  {study.titleAccent ? <span className="text-brand-600">{study.titleAccent}</span> : null}
                </h1>

                {study.summary.length ? (
                  <>
                    <h2 className="mt-6 font-display text-lg font-semibold tracking-tight text-foreground">
                      Summary
                    </h2>
                    <div className="mt-3 space-y-3">
                      {study.summary.map((entry, index) => (
                        <Rich key={index} entry={entry} className="text-[0.9375rem] leading-[1.7] text-muted" />
                      ))}
                    </div>
                  </>
                ) : null}

                {study.industry || study.technologies || study.outcomes.length ? (
                  <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                    {study.industry ? (
                      <div>
                        <dt className="font-display text-[0.9375rem] font-semibold text-foreground">Industry</dt>
                        <dd className="mt-2 text-[0.8125rem] leading-relaxed text-brand-600">{study.industry}</dd>
                      </div>
                    ) : null}

                    {study.technologies ? (
                      <div>
                        <dt className="font-display text-[0.9375rem] font-semibold text-foreground">Technologies</dt>
                        <dd className="mt-2 text-[0.8125rem] leading-relaxed text-brand-600">{study.technologies}</dd>
                      </div>
                    ) : null}

                    {study.outcomes.length ? (
                      <div>
                        <dt className="font-display text-[0.9375rem] font-semibold text-foreground">
                          Business Outcomes
                        </dt>
                        <dd className="mt-2 space-y-1 text-[0.8125rem] leading-relaxed text-brand-600">
                          {study.outcomes.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                ) : null}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------------------- about our customer */}
      {study.customer ? (
        <section className="section-y">
          <Container size="wide">
            <Rise>
              <Head lead="About" accent="Our Customer" />
              <div className="mx-auto mt-8 max-w-5xl rounded-[1.75rem] bg-white p-6 shadow-[0_30px_80px_-52px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.06] sm:p-10">
                <div className="space-y-4">
                  {study.customer.paragraphs.map((entry, index) => (
                    <Rich key={index} entry={entry} className="text-[0.9375rem] leading-[1.8] text-muted" />
                  ))}
                </div>
              </div>
            </Rise>
          </Container>
        </section>
      ) : null}

      {/* ------------------------------------------------ business challenge */}
      {study.challenge ? (
        <Prose
          section={study.challenge}
          lead="Business"
          accent="Challenge"
          Icon={TriangleAlert}
          tone="text-red-600"
          ring="ring-red-100"
          wash="bg-red-50"
        />
      ) : null}

      {/* -------------------------------------------------- solution provided */}
      {study.solution ? (
        <Prose
          section={study.solution}
          lead="Solution"
          accent="Provided"
          Icon={Sparkles}
          tone="text-brand-600"
          ring="ring-brand-100"
          wash="bg-brand-50"
        />
      ) : null}

      {/* ------------------------------------------------------ tech features */}
      {study.techFeatures ? (
        <Grid section={study.techFeatures} lead="Tech Page" accent="Features" Icon={Wrench} />
      ) : null}

      {study.keyFeatures ? (
        <Grid section={study.keyFeatures} lead="Key Outcomes" accent="Features" Icon={Check} />
      ) : null}

      {/* --------------------------------------------------------- key outcomes */}
      {study.keyOutcomes ? (
        <section className="section-y">
          <Container size="wide">
            <Rise>
              <Head lead="Key" accent="Outcomes" />
            </Rise>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(study.keyOutcomes.bullets.length
                ? study.keyOutcomes.bullets
                : study.keyOutcomes.paragraphs
              ).map((entry, index) => (
                <Rise key={index} delay={(index % 3) * 0.07}>
                  <div className="relative h-full overflow-hidden rounded-[1.15rem] border-l-[3px] border-brand-600 bg-white p-6 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05]">
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-1 -top-3 font-display text-[3.75rem] font-bold leading-none tabular-nums text-brand-600/[0.09]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Rich
                      entry={entry}
                      className="relative text-[0.9375rem] leading-[1.7] text-muted"
                    />
                  </div>
                </Rise>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {/* -------------------------------------------------------------- review */}
      {study.review ? (
        <section className="section-y">
          <Container size="wide">
            <Rise>
              <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] bg-brand-600 p-8 text-white shadow-[0_36px_90px_-52px_rgb(53_51_205/0.9)] sm:p-12">
                <Quote className="h-8 w-8 opacity-40" aria-hidden="true" />
                <div className="mt-5 space-y-4">
                  {study.review.paragraphs.map((entry, index) => (
                    <p key={index} className="text-[1.0625rem] leading-[1.75] text-white/90 sm:text-lg">
                      {entry.runs.length
                        ? entry.runs.map((run, runIndex) =>
                            run.bold ? (
                              <strong key={runIndex} className="font-semibold text-white">
                                {run.text}
                              </strong>
                            ) : (
                              <span key={runIndex}>{run.text}</span>
                            ),
                          )
                        : entry.text}
                    </p>
                  ))}
                </div>
                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  {study.review.label}
                </p>
              </div>
            </Rise>
          </Container>
        </section>
      ) : null}
    </div>
  );
}

/** A prose section: the paragraphs in a card, any bullets ruled beneath them. */
function Prose({ section, lead, accent, Icon, tone, ring, wash }) {
  return (
    <section className="section-y">
      <Container size="wide">
        <Rise>
          <Head lead={lead} accent={accent} />

          <div className="mx-auto mt-8 max-w-5xl rounded-[1.75rem] bg-white p-6 shadow-[0_30px_80px_-52px_rgb(11_11_42/0.55)] ring-1 ring-black/[0.06] sm:p-10">
            <span
              aria-hidden="true"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-[0.85rem] ${wash} ${tone} ring-1 ${ring}`}
            >
              <Icon className="h-5 w-5" strokeWidth={1.8} />
            </span>

            <div className="mt-5 space-y-4">
              {section.paragraphs.map((entry, index) => (
                <Rich key={index} entry={entry} className="text-[0.9375rem] leading-[1.8] text-muted" />
              ))}
            </div>

            {section.bullets.length ? (
              <ul className="mt-7 space-y-3 border-t border-border pt-6">
                {section.bullets.map((entry, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.replace("text-", "bg-")}`} />
                    <Rich entry={entry} className="text-[0.9375rem] leading-[1.7] text-muted" />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Rise>
      </Container>
    </section>
  );
}

/** A feature section: one card per line. */
function Grid({ section, lead, accent, Icon }) {
  const items = section.bullets.length ? section.bullets : section.paragraphs;

  return (
    <section className="section-y">
      <Container size="wide">
        <Rise>
          <Head lead={lead} accent={accent} />
        </Rise>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((entry, index) => (
            <Rise key={index} delay={(index % 3) * 0.07}>
              <div className="group flex h-full items-start gap-4 rounded-[1.15rem] bg-white p-5 shadow-[0_20px_46px_-36px_rgb(11_11_42/0.6)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_28px_58px_-38px_rgb(53_51_205/0.55)] sm:p-6">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.85rem] bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <Rich entry={entry} className="text-[0.875rem] leading-[1.65] text-muted" />
              </div>
            </Rise>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ImportedCaseStudy;

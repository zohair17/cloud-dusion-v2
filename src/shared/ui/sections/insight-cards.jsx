import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "../primitives/container";
import { Reveal, RevealGroup, RevealItem } from "../motion/reveal";

/**
 * Publication dates are content, not machine time.
 *
 * Formatted in UTC deliberately: the record carries a plain calendar date, and
 * a build machine west of Greenwich would otherwise print the day before.
 */
const DATE = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

/**
 * The insights feed: what we write about, then what we have written.
 *
 * The topics run first as a plain list — they say what the desk covers, and in
 * the reference they are a statement rather than a control, so they are set as
 * text and not as buttons that would promise filtering they do not do.
 *
 * The article cards are the case study card in a different key: white behind a
 * brand hairline, a brand box in the corner, and a brand rule above the line
 * that closes the card. What changes is what the corner means — an arrow where
 * the piece can be read, a clock where it is still only announced, which is
 * also why only the announced ones carry the closing label.
 */
export function InsightCards({ topics = [], articles, comingSoonLabel }) {
  return (
    <section className="section-y">
      <Container size="wide">
        {topics.length ? (
          <Reveal>
            <ul aria-label="Topics" className="flex flex-wrap gap-2.5">
              {topics.map((topic) => (
                <li
                  key={topic.id}
                  /* Opaque, not tinted: these sit on the page itself, where the
                     backdrop's own shapes would otherwise read through them. */
                  className="inline-flex items-center rounded-pill border border-brand-200/70 bg-brand-50 px-4 py-1.5 text-sm font-medium tracking-wide text-brand-700"
                >
                  {topic.label}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <RevealGroup delay={0.08} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => {
            // A card that leads somewhere is a link; one that does not is not.
            const Card = article.isPublished ? Link : "article";
            const Corner = article.isPublished ? ArrowUpRight : Clock;

            return (
              <RevealItem key={article.slug} className="h-full">
                <Card
                  {...(article.isPublished ? { href: article.href } : {})}
                  className="cfg-card-solid group relative flex h-full flex-col overflow-hidden rounded-card p-7"
                >
                  <span aria-hidden="true" className="cfg-sheen" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="inline-flex items-center rounded-pill border border-brand-200/70 bg-brand-50/60 px-3.5 py-1 text-xs font-medium tracking-wide text-brand-700">
                      {article.topicLabel}
                    </span>

                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-[0_10px_20px_-8px_rgb(53_51_205/0.55)] transition-transform duration-500 group-hover:-translate-y-0.5">
                      <Corner
                        className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <p className="relative mt-5 text-xs font-medium text-faint">
                    <time dateTime={article.publishedAt}>
                      {DATE.format(new Date(article.publishedAt))}
                    </time>
                    {" · "}
                    {article.readingMinutes} min read
                  </p>

                  <h2 className="relative mt-3 font-display text-xl font-semibold leading-tight tracking-tight text-balance">
                    {article.title}
                  </h2>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>

                  {!article.isPublished && comingSoonLabel ? (
                    <p className="relative mt-6 border-t border-brand-600 pt-4 text-xs leading-relaxed text-faint">
                      {comingSoonLabel}
                    </p>
                  ) : null}
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}

export default InsightCards;

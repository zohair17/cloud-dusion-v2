import { Container } from "../primitives/container";
import { Reveal } from "../motion/reveal";
import { SpotlightBento } from "./spotlight-bento";

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
 * The articles are the same spotlight bento the case studies use, so the two
 * index pages read as one family. A piece that is only announced has no link
 * and no arrow; its footer says so instead.
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

        <SpotlightBento
          className="mt-10"
          items={articles.map((article) => ({
            key: article.slug,
            href: article.isPublished ? article.href : null,
            image: article.image,
            eyebrow: article.topicLabel,
            title: article.title,
            summary: article.excerpt,
            meta: article.isPublished
              ? `${DATE.format(new Date(article.publishedAt))} · ${article.readingMinutes} min read`
              : comingSoonLabel,
          }))}
        />
      </Container>
    </section>
  );
}

export default InsightCards;

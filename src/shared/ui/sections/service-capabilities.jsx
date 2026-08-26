"use client";

import { Container } from "../primitives/container";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/**
 * Splits the items into the runs they were authored in.
 *
 * Most services carry one flat list. Microsoft & Cloud carries close to thirty
 * capabilities across three product families, which is unreadable as one run,
 * so those items name a `group` and the sheet breaks where the group changes.
 */
function groupItems(items) {
  const groups = [];

  for (const item of items) {
    const title = item.group ?? null;
    const last = groups[groups.length - 1];
    if (last && last.title === title) last.items.push(item);
    else groups.push({ title, items: [item] });
  }

  return groups;
}

/**
 * Capabilities.
 *
 * Ten of them — too many to be cards without the page turning into a wall of
 * boxes, and exactly the right number for an index. So this is set as a spec
 * sheet: two columns of ruled entries, each numbered, which is what a reader
 * scanning for one particular capability actually wants.
 *
 * The reveal is a wipe rather than a fade: each entry is uncovered left to
 * right, so the sheet reads as being printed.
 */
export function ServiceCapabilities({ section }) {
  const scope = useGsap(({ reduced }) => {
    gsap.utils.toArray("[data-entry]").forEach((entry) => {
      gsap.from(entry, {
        clipPath: reduced ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        opacity: reduced ? 0 : 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: entry, start: "top 90%", once: true },
      });
    });
  });

  const items = section?.items ?? [];
  if (!items.length) return null;

  const groups = groupItems(items);
  // A grouped sheet puts the family name above the entries, so the entry titles
  // sit one level below it.
  const EntryTitle = groups.some((group) => group.title) ? "h4" : "h3";

  return (
    <section ref={scope} className="section-y">
      <Container size="wide">
        <SectionHeading eyebrow={section.eyebrow} heading={section.heading} />

        {groups.map((group, groupIndex) => (
          <div key={group.title ?? "all"} className={groupIndex === 0 ? "mt-14" : "mt-14 lg:mt-16"}>
            {group.title ? (
              <h3 className="flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                <span className="h-px w-6 bg-brand-300" aria-hidden="true" />
                {group.title}
              </h3>
            ) : null}

            <ol className={cn("grid gap-x-12 lg:grid-cols-2 lg:gap-x-16", group.title && "mt-6")}>
              {group.items.map((item, index) => (
                <li
                  key={item.title}
                  data-entry
                  className="group border-t border-border py-6 transition-colors duration-500 hover:border-brand-600 sm:py-7"
                >
                  <div className="flex gap-5 sm:gap-7">
                    <p
                      aria-hidden="true"
                      className="shrink-0 pt-1 font-display text-xs font-semibold tabular-nums tracking-[0.12em] text-faint transition-colors duration-500 group-hover:text-brand-600"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <div>
                      <EntryTitle className="font-display text-lg font-semibold leading-snug tracking-tight text-balance sm:text-xl">
                        {item.title}
                      </EntryTitle>
                      <p className="mt-2.5 text-sm leading-[1.65] text-muted sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default ServiceCapabilities;

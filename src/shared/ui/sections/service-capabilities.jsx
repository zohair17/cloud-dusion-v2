"use client";

import {
  Bot,
  Boxes,
  Cloud,
  Database,
  FileText,
  GitBranch,
  Layers,
  LifeBuoy,
  LineChart,
  Lock,
  Plug,
  Repeat,
  Rocket,
  Search,
  Settings,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { Container } from "../primitives/container";
import { ProductLogo } from "./product-logo";
import { SectionHeading } from "./section-heading";
import { useGsap, gsap } from "../motion/use-gsap";
import { cn } from "../primitives/cn";

/**
 * The mark for a capability, read off its own title.
 *
 * Capability records carry no icon, and inventing a field for a hundred and
 * twenty of them would mean authoring a hundred and twenty decisions that no
 * reader would notice. Matching on the words the title already uses gets the
 * same result for free, and a capability with nothing to match on falls back to
 * the generic layers mark rather than to a wrong one.
 */
const ICON_RULES = [
  [/agent|copilot|chatbot|assistant|bot/i, Bot],
  [/ai|intelligen|model|generative|ml/i, Sparkles],
  [/secur|complian|govern|protect|risk/i, ShieldCheck],
  [/identity|access|permission|encrypt|privacy/i, Lock],
  [/migrat|upgrade|modernis|moderniz|transition/i, Repeat],
  [/cloud|azure|landing zone|infrastructure|hosting/i, Cloud],
  [/data|analytic|report|dashboard|insight|bi/i, LineChart],
  [/database|warehouse|lakehouse|storage/i, Database],
  [/search|discover|index|retrieval/i, Search],
  [/document|content|record|file|contract/i, FileText],
  [/workflow|automat|process|approval|orchestrat/i, Workflow],
  [/integrat|api|connector|interface/i, Plug],
  [/mobile|app|ios|android/i, Smartphone],
  [/architect|platform|multi-tenant|tenancy|product/i, Boxes],
  [/develop|engineer|build|code|devops|ci\/cd|pipeline/i, GitBranch],
  [/support|maintenance|managed|operations|monitor/i, LifeBuoy],
  [/team|staff|resourc|talent|augment|people/i, Users],
  [/launch|rollout|adoption|deploy|go-live/i, Rocket],
  [/config|admin|setup|management|tuning/i, Settings],
];


/**
 * The vendor mark for a capability, where one exists.
 *
 * A capability named after a product should carry that product's own logo in
 * its own colours: a reader scanning for Teams or Power BI finds it by the mark
 * long before they finish the title. Anything with no product behind it keeps
 * the drawn icon below, so the sheet never shows a wrong logo to avoid a blank.
 */
const LOGO_RULES = [
  [/microsoft teams|\bteams\b/i, "teams"],
  [/onedrive/i, "onedrive"],
  [/sharepoint|syntex/i, "sharepoint"],
  [/exchange|outlook|\bmail\b|messaging/i, "exchange"],
  [/viva/i, "viva"],
  [/power bi/i, "power-bi"],
  [/power apps|powerapps|canvas app|model-driven/i, "power-apps"],
  [/power platform|dataverse/i, "power-platform"],
  [/power automate|power virtual/i, "power-automate"],
  [/copilot/i, "copilot"],
  [/openai|azure ai|ai foundry|\bgpt\b/i, "openai"],
  [/dynamics/i, "dynamics"],
  [/sql server|\bsql\b|synapse|fabric/i, "sql"],
  [/azure|entra|active directory/i, "azure"],
  [/microsoft 365|\bm365\b|office 365/i, "microsoft-365"],
];

function logoFor(title) {
  for (const [pattern, id] of LOGO_RULES) if (pattern.test(title)) return id;

  return null;
}
function iconFor(title) {
  for (const [pattern, Icon] of ICON_RULES) if (pattern.test(title)) return Icon;
  return Layers;
}

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
 * The section a buyer actually scans, so it is given cards rather than ruled
 * lines: three to a row, each numbered in the brand colour, each carrying a
 * brand rule that draws itself across the head of the card as the pointer
 * arrives. The count stays legible at that size because the cards are small
 * and the titles are short.
 *
 * The reveal is a wipe rather than a fade: each card is uncovered left to
 * right, so the set reads as being printed.
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

            <ol className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5", group.title && "mt-6")}>
              {group.items.map((item, index) => (
                <li
                  key={item.title}
                  data-entry
                  className="group relative flex flex-col overflow-hidden rounded-[1.25rem] bg-[linear-gradient(160deg,#ffffff_0%,#ffffff_58%,#f4f5fd_100%)] p-6 ring-1 ring-brand-100 transition-[box-shadow,background-color] duration-500 hover:bg-brand-50/70 hover:ring-brand-200 hover:shadow-[0_26px_48px_-30px_rgb(53_51_205/0.55)] sm:p-7"
                >
                  {/* The brand rule is drawn across the head of the card on approach. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />

                  {/* The mark carries the brand; the number keeps the count. */}
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-10 w-10 items-center justify-center text-brand-600 transition-transform duration-500 group-hover:scale-105"
                    >
                      {(() => {
                        const logo = logoFor(item.title);
                        if (logo) return <ProductLogo id={logo} className="h-7 w-7" />;
                        const Icon = iconFor(item.title);
                        return <Icon className="h-7 w-7" strokeWidth={1.6} />;
                      })()}
                    </span>
                    <p
                      aria-hidden="true"
                      className="font-display text-xs font-semibold tabular-nums tracking-[0.12em] text-brand-600/45 transition-colors duration-500 group-hover:text-brand-600"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <EntryTitle className="mt-5 font-display text-base font-semibold leading-snug tracking-tight text-balance text-foreground sm:text-lg">
                    {item.title}
                  </EntryTitle>
                  <p className="mt-2.5 text-[0.875rem] leading-[1.65] text-muted">
                    {item.description}
                  </p>
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

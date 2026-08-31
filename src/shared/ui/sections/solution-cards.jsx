import Link from "next/link";
import {
  ArrowRightLeft,
  ArrowUpRight,
  Bluetooth,
  Factory,
  FileOutput,
  FileSearch,
  Handshake,
  MessageSquareText,
  PackageSearch,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { ParallaxCard } from "../motion/parallax-card";
import { ServiceSlider } from "./service-slider";

/** Content records carry a glyph *id*; this component owns the icon. */
const ICONS = {
  "file-search": FileSearch,
  "file-output": FileOutput,
  "message-square-text": MessageSquareText,
  "server-cog": ServerCog,
  "arrow-right-left": ArrowRightLeft,
  factory: Factory,
  handshake: Handshake,
  "package-search": PackageSearch,
  bluetooth: Bluetooth,
};

/**
 * How many photographs each solution's strip carries.
 *
 * One. The supplied set has a single picture per solution, and a strip of two
 * that shows the same frame twice reads as a broken carousel — the dots are
 * there and they do nothing. ServiceSlider already hides its dots when there is
 * only one image, so this is the whole change.
 */
const SHOTS = 1;

/**
 * The solutions catalogue as a row of service cards.
 *
 * Copy over a photo strip, the same figure the pillars use: the words are read
 * first and the photograph gives the solution a place. Eight of them tile into
 * two rows of four without any card needing to be a different size.
 */
export function SolutionCards({ items }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const Icon = ICONS[item.icon] ?? Sparkles;
        const images = Array.from(
          { length: SHOTS },
          (_, shot) => `/asset/solutions/${item.slug}-${shot + 1}.webp`,
        );

        return (
          <ParallaxCard key={item.slug} depth={index % 2 === 0 ? 0.55 : 0.25} className="h-full">
            <Link
              href={item.href}
              className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white shadow-[0_1px_4px_rgb(21_21_28/0.06),0_24px_50px_-32px_rgb(25_24_89/0.35)] ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_1px_4px_rgb(21_21_28/0.06),0_40px_70px_-34px_rgb(25_24_89/0.45)]"
            >
              <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl sm:h-13 sm:w-13 bg-[linear-gradient(140deg,var(--color-brand-500),var(--color-brand-700))] p-3.5 text-white shadow-[0_12px_26px_-10px_rgb(53_51_205/0.65)] ring-1 ring-white/25 transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <h3 className="mt-4 font-display text-lg font-semibold leading-tight tracking-tight text-balance sm:mt-5 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[0.8125rem] leading-relaxed text-muted sm:text-sm">{item.summary}</p>

                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 sm:mt-5">
                  <span className="relative">
                    Explore
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-500 transition-all duration-500 group-hover:w-full"
                    />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>

              <ServiceSlider images={images} alt={item.title} />
            </Link>
          </ParallaxCard>
        );
      })}
    </div>
  );
}

export default SolutionCards;

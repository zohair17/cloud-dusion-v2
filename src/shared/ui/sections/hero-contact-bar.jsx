import { Mail, Phone } from "lucide-react";
import { FacebookMark, InstagramMark, LinkedinMark } from "../icons/social-marks";
import { siteConfig } from "@/shared/config/site.config";

/** The three channels the bar carries, in the order the design sets them. */
const SOCIAL_ICONS = {
  facebook: FacebookMark,
  instagram: InstagramMark,
  linkedin: LinkedinMark,
};

/**
 * The hero's contact bar.
 *
 * The one place on the page where the brand fills rather than accents: a solid
 * slab directly under the hero, closing it off. Phone on the left in a raised
 * pill, the address in the middle, the channels on the right — every value read
 * from the site config, so none of it is typed twice.
 *
 * It stacks rather than shrinks: below `sm` the three groups sit on their own
 * lines, because a phone number and an email set side by side at that width
 * become unreadable long before they become small.
 */
export function HeroContactBar() {
  return (
    <div className="mt-3 flex flex-col items-center gap-3 rounded-[1.5rem] bg-brand-600 px-4 py-3.5 text-white sm:flex-row sm:justify-between sm:gap-6 sm:rounded-pill sm:px-5 sm:py-2.5">
      <a
        href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
        className="inline-flex items-center gap-2.5 rounded-pill bg-white/12 px-4 py-2 text-sm font-semibold tracking-tight transition-colors duration-300 hover:bg-white/20"
      >
        <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
        {siteConfig.phone}
      </a>

      <a
        href={`mailto:${siteConfig.contactEmail}`}
        className="group inline-flex items-center gap-2.5 text-sm font-semibold tracking-tight"
      >
        <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="border-b border-transparent transition-colors duration-300 group-hover:border-white/70">
          {siteConfig.contactEmail}
        </span>
      </a>

      <ul className="flex items-center gap-3">
        {siteConfig.social.map((channel) => {
          const Icon = SOCIAL_ICONS[channel.id];
          if (!Icon) return null;

          return (
            <li key={channel.id}>
              <a
                href={channel.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={channel.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-brand-600 transition-transform duration-300 hover:scale-110"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HeroContactBar;

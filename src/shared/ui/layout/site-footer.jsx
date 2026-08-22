import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container } from "../primitives/container";
import { siteConfig } from "@/shared/config/site.config";

/**
 * Site footer.
 *
 * The page's one background carries straight through it — the footer paints no
 * field of its own, only a hairline to separate it from the last section. The
 * brand appears exactly where it is useful: the wordmark, the contact lines,
 * and the rule under a hovered link.
 *
 * Columns are resolved from the navigation module, so the catalogue is listed
 * here without any of it being written down twice.
 */
export function SiteFooter({ columns = [] }) {
  const year = new Date().getFullYear();
  const from = siteConfig.copyrightStartYear;

  return (
    <footer className="relative mt-24 border-t border-border/80 pb-10 pt-16 sm:mt-32 sm:pt-20">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={siteConfig.name}>
              <Image
                src="/asset/logo.svg"
                alt={siteConfig.name}
                width={168}
                height={44}
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.shortDescription}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="group inline-flex items-center gap-2.5 text-foreground transition-colors hover:text-brand-700"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {siteConfig.contactEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="group inline-flex items-center gap-2.5 text-foreground transition-colors hover:text-brand-700"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {columns.map((column) => (
              <div key={column.id}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  {column.title}
                </h2>

                <ul className="mt-4 space-y-2.5">
                  {column.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group inline-block text-sm leading-relaxed text-muted transition-colors hover:text-foreground"
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className="block h-px w-0 bg-brand-500 transition-all duration-300 group-hover:w-full"
                        />
                      </Link>
                    </li>
                  ))}

                  {column.viewAll ? (
                    <li>
                      <Link
                        href={column.viewAll.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
                      >
                        {column.viewAll.label}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {from === year ? year : `${from}–${year}`} {siteConfig.name}. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {siteConfig.social.map((channel) => (
              <li key={channel.id}>
                <a
                  href={channel.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-xs font-medium text-muted transition-colors hover:text-brand-700"
                >
                  {channel.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default SiteFooter;

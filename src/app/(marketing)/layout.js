import { getFooterNavigation, getHeaderNavigation } from "@/modules/navigation";
import { SiteHeader } from "@/shared/ui/layout/site-header";
import { SiteFooter } from "@/shared/ui/layout/site-footer";
import { ContactLauncher } from "@/shared/ui/layout/contact-launcher";

/**
 * Marketing shell.
 *
 * Navigation is resolved here, on the server, and handed to the header as
 * plain data. The header stays a client component for interaction only, so the
 * menu never ships the catalogue to the browser twice.

 */
export default function MarketingLayout({ children }) {
  const navigation = getHeaderNavigation();
  const footer = getFooterNavigation();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader navigation={navigation} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter columns={footer} />
      <ContactLauncher />
    </>
  );
}

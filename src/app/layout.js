import { Poppins } from "next/font/google";
import "./globals.css";
import { buildRootMetadata } from "@/shared/lib/metadata";
import { PageBackdrop } from "@/shared/ui/motion/page-backdrop";
import { SmoothScroll } from "@/shared/ui/motion/smooth-scroll";
import { organizationSchema } from "@/shared/lib/json-ld";

/** Poppins throughout — one family for reading and for display. */
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = buildRootMetadata();

/**
 * The same refusal the stylesheet makes, declared in the head so it lands
 * before the first paint: browsers that auto-darken a page for a reader in
 * dark mode must leave this one alone. See `color-scheme` in globals.css.
 */
export const viewport = {
  colorScheme: "only light",
};

/**
 * Root layout. Owns the document shell and the site-wide Organization schema.
 * Page chrome (header, footer) belongs to the (marketing) group layout so a
 * future authenticated area can render a different shell at the same URLs.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col">
        {/*
          One background for the whole application.
          Fixed and behind every section, so the page reads as a single surface
          instead of a stack of differently-tinted bands. Sections must not paint
          their own backgrounds — cards may, the sections themselves may not.
        */}
        <PageBackdrop />
        <SmoothScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}

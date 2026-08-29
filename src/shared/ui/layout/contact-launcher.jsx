"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/shared/config/site.config";
import { ConsultationModal } from "../sections/consultation-modal";

const EASE = [0.22, 1, 0.36, 1];

/**
 * The marks, drawn rather than borrowed.
 *
 * WhatsApp, a phone, an envelope and a calendar in their own colours: a reader
 * finds the channel they already use by its logo, long before they read the
 * label beside it.
 */
const MARKS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2.1 22l5.36-1.4a9.8 9.8 0 0 0 4.58 1.16h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.47 2 12.04 2Zm0 17.9h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.18.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.35c0-4.5 3.67-8.17 8.19-8.17a8.13 8.13 0 0 1 8.16 8.18c0 4.5-3.67 8.16-8.1 8.16Z"
        fill="#25D366"
      />
      <path
        d="M16.53 14.16c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.52.06-.25-.12-1.03-.38-1.97-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.17 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z"
        fill="#25D366"
      />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        d="M6.6 3.5h2.2a1 1 0 0 1 1 .78l.7 3.1a1 1 0 0 1-.5 1.1l-1.6.85a12.4 12.4 0 0 0 5.6 5.6l.85-1.6a1 1 0 0 1 1.1-.5l3.1.7a1 1 0 0 1 .78 1v2.2a2 2 0 0 1-2.2 2A16.6 16.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        fill="#0F9BD7"
      />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="2.6" y="5.2" width="18.8" height="13.6" rx="2" fill="#3533cd" />
      <path
        d="M3.6 7.4 12 13.2l8.4-5.8"
        stroke="#fff"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.4" fill="#E8656A" />
      <rect x="3" y="5" width="18" height="4.6" rx="2.4" fill="#CC2927" />
      <rect x="7" y="2.6" width="2" height="4" rx="1" fill="#A4262C" />
      <rect x="15" y="2.6" width="2" height="4" rx="1" fill="#A4262C" />
      <path d="m8.6 14.6 2.3 2.3 4.5-4.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/**
 * The one way to reach us, on every page.
 *
 * A reader who decides to get in touch decides it somewhere in the middle of a
 * service page, not at the bottom of the site, so the four ways of starting a
 * conversation follow them: the fastest one first, and the one that books time
 * last. It is the company's own mark rather than a chat glyph because the
 * button is the company answering, not a widget.
 *
 * WhatsApp opens in its own tab; the consultation opens the same dialog the
 * hero does, so there is one intake and one record rather than two.
 */
export function ContactLauncher() {
  const [open, setOpen] = useState(false);
  const [dialog, setDialog] = useState(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsapp = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

  const options = [
    { id: "whatsapp", label: "Chat on WhatsApp", mark: "whatsapp", href: whatsapp, external: true },
    { id: "agent", label: "Talk to an agent", mark: "phone", href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { id: "inquiry", label: "Send an inquiry", mark: "mail", action: () => setDialog("inquiry") },
    { id: "consultation", label: "Book a free consultation", mark: "calendar", action: () => setDialog("consultation") },
  ];

  return (
    <>
      <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
        {/*
          No panel: each way of reaching us is its own mark, stacked above the
          button that opened them, with its name set to the left of it. A card
          would put a white rectangle over the page; this reads as the button
          unfolding into its options.
        */}
        <AnimatePresence>
          {open ? (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                hidden: { transition: { staggerChildren: 0.03 } },
              }}
              className="flex flex-col items-end gap-3"
            >
              {options.map(({ id, label, mark, href, external, action }) => {
                const body = (
                  <>
                    {/* Opaque, and dark: the label sits over whatever the page
                        happens to have scrolled under it, so it cannot borrow
                        the page's own white. */}
                    <span className="whitespace-nowrap rounded-pill bg-brand-700 px-3 py-1.5 text-[0.8125rem] font-medium text-white shadow-[0_10px_26px_-12px_rgb(11_11_42/0.6)] sm:px-3.5 sm:text-sm">
                      {label}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_-12px_rgb(11_11_42/0.5)] ring-1 ring-black/[0.06] transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">
                      {MARKS[mark]}
                    </span>
                  </>
                );
                const className = "group flex items-center justify-end gap-3 text-right";

                return (
                  <motion.li
                    key={id}
                    variants={{
                      hidden: { opacity: 0, x: 12, scale: 0.9 },
                      visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.28, ease: EASE } },
                    }}
                  >
                    {action ? (
                      <button
                        type="button"
                        className={className}
                        onClick={() => {
                          action();
                          setOpen(false);
                        }}
                      >
                        {body}
                      </button>
                    ) : (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noreferrer" : undefined}
                        className={className}
                        onClick={() => setOpen(false)}
                      >
                        {body}
                      </a>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close contact options" : "Contact Cloud Fusion Global"}
          animate={open ? { y: 0, scale: 1 } : { y: [0, -6, 0], scale: [1, 1.04, 1] }}
          transition={open ? { duration: 0.2 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full [filter:drop-shadow(0_10px_18px_rgb(53_51_205/0.28))] sm:h-20 sm:w-20"
        >
          {open ? (
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_12px_28px_-12px_rgb(11_11_42/0.5)] ring-1 ring-black/[0.06] sm:h-14 sm:w-14">
              <X className="h-5 w-5 text-brand-700 sm:h-6 sm:w-6" aria-hidden="true" />
            </span>
          ) : (
            <Image src="/asset/chatIcon.png" alt="" width={192} height={192} className="h-full w-full object-contain" />
          )}
        </motion.button>
      </div>

      <ConsultationModal open={dialog !== null} variant={dialog ?? "consultation"} onClose={() => setDialog(null)} />
    </>
  );
}

export default ContactLauncher;

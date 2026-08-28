"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Container } from "../primitives/container";
import { Logo } from "../primitives/logo";
import { cn } from "../primitives/cn";

/**
 * Site header.
 *
 * Matches the reference header: sticky and transparent over the hero, turning to
 * a translucent blurred bar past 24px of scroll; logo left, a solid brand pill
 * capsule of section links, the final call to action pulled out as its own
 * button, and a pill icon button opening an animated panel below lg.
 *
 * Services, Solutions and Industries additionally open a mega-menu panel built
 * from the catalogue. Navigation arrives as props — this component holds
 * interaction state only, never data.
 */
const SCROLL_THRESHOLD = 24;
const CLOSE_DELAY = 120;

/** Width of one flyout column, in px, matching `w-[17rem]`. */
const FLYOUT_WIDTH = 272;

export function SiteHeader({ navigation }) {
  const { items, cta } = navigation;
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const [mobileService, setMobileService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || openPanel ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, openPanel]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  /** A short grace period lets the pointer cross the gap into the panel. */
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenPanel(null), CLOSE_DELAY);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, "")));

  return (
    <header
      onKeyDown={(event) => event.key === "Escape" && setOpenPanel(null)}
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || menuOpen || openPanel
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container size="wide" className="flex items-center justify-between gap-4 py-4 sm:py-5">
        <Logo priority />

        <nav
          aria-label="Main"
          onMouseLeave={scheduleClose}
          className="hidden items-center rounded-pill bg-brand-600 px-2 py-2 shadow-lg shadow-brand-600/25 lg:flex"
        >
          {items.map((item) => {
            const expanded = openPanel === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => (item.panel ? (cancelClose(), setOpenPanel(item.id)) : scheduleClose())}
                /* The label and the chevron read as one pill but do two jobs,
                   so the highlight is painted here rather than on either. */
                className={cn(
                  "group flex items-center rounded-pill transition-colors",
                  isActive(item.href) || expanded ? "bg-white/15" : "hover:bg-white/15"
                )}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onFocus={() => setOpenPanel(item.panel ? item.id : null)}
                  onClick={() => setOpenPanel(null)}
                  className={cn(
                    "flex items-center rounded-pill py-2.5 text-[15px] font-medium transition-colors xl:text-base",
                    item.panel ? "pl-4 pr-1.5 xl:pl-5" : "px-4 xl:px-5",
                    isActive(item.href) || expanded ? "text-white" : "text-white/90 group-hover:text-white"
                  )}
                >
                  {item.label}
                </Link>

                {/* The chevron alone owns the panel: the label stays a destination. */}
                {item.panel ? (
                  <button
                    type="button"
                    aria-label={`${item.label} menu`}
                    aria-expanded={expanded}
                    onFocus={() => setOpenPanel(item.id)}
                    onClick={() => {
                      cancelClose();
                      setOpenPanel(expanded ? null : item.id);
                    }}
                    className={cn(
                      "flex items-center rounded-pill py-2.5 pl-1 pr-3.5 transition-colors xl:pr-4",
                      isActive(item.href) || expanded ? "text-white" : "text-white/90 hover:text-white"
                    )}
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={cn("h-3.5 w-3.5 transition-transform", expanded && "rotate-180")}
                    />
                  </button>
                ) : null}
              </div>
            );
          })}
        </nav>

        {cta ? (
          <Link
            href={cta.href}
            className="hidden shrink-0 rounded-pill bg-brand-600 px-5 py-2 text-sm font-medium text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700 lg:inline-block"
          >
            {cta.label}
          </Link>
        ) : null}

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-brand-600 text-white transition-colors hover:bg-brand-700 lg:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Desktop mega-menu */}
      <AnimatePresence>
        {openPanel ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden px-gutter lg:block"
          >
            <MegaPanel groups={items.find((item) => item.id === openPanel)?.panel ?? []} onNavigate={() => setOpenPanel(null)} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile panel */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto px-4 pb-4 lg:hidden"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-[1720px] flex-col gap-1 rounded-card border border-border bg-background p-3 shadow-xl shadow-brand-900/10"
            >
              {items.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex-1 rounded-pill px-4 py-3 text-base font-medium transition-colors",
                        isActive(item.href) ? "bg-surface text-brand-700" : "text-foreground hover:bg-surface"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.panel ? (
                      <button
                        type="button"
                        onClick={() => setMobileSection((id) => (id === item.id ? null : item.id))}
                        aria-expanded={mobileSection === item.id}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-muted transition-colors hover:bg-surface"
                      >
                        <span className="sr-only">{`Toggle ${item.label} menu`}</span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn("h-4 w-4 transition-transform", mobileSection === item.id && "rotate-180")}
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.panel && mobileSection === item.id ? (
                    <div className="mb-1 ml-3 border-l border-border pl-3">
                      {item.panel.map((group) => (
                        <div key={group.id} className="py-1">
                          {group.title ? (
                            <p className="px-2 pt-2 text-xs font-semibold uppercase tracking-wide text-faint">
                              {group.title}
                            </p>
                          ) : null}
                          {group.links.map((link) => (
                            <div key={link.id}>
                              <div className="flex items-center gap-1">
                                <Link
                                  href={link.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="flex-1 rounded-pill px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface hover:text-brand-700"
                                >
                                  {link.label}
                                </Link>
                                {link.children?.length ? (
                                  <button
                                    type="button"
                                    aria-label={`${link.label} capabilities`}
                                    aria-expanded={mobileService === link.id}
                                    onClick={() =>
                                      setMobileService((id) => (id === link.id ? null : link.id))
                                    }
                                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-pill text-muted transition-colors hover:bg-surface"
                                  >
                                    <ChevronDown
                                      aria-hidden="true"
                                      className={cn(
                                        "h-3.5 w-3.5 transition-transform",
                                        mobileService === link.id && "rotate-180"
                                      )}
                                    />
                                  </button>
                                ) : null}
                              </div>
                              {link.children?.length && mobileService === link.id ? (
                                <ul className="mb-1 ml-2 border-l border-border pl-3">
                                  {link.children.map((child) => (
                                    <li key={child.id}>
                                      <Link
                                        href={child.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-start gap-2 rounded-pill px-2 py-1.5 text-[0.8125rem] leading-snug text-muted transition-colors hover:bg-surface hover:text-brand-700"
                                      >
                                        <Check
                                          aria-hidden="true"
                                          strokeWidth={2.6}
                                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600"
                                        />
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              {cta ? (
                <Link
                  href={cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 rounded-pill bg-brand-600 px-4 py-3 text-center text-base font-medium text-white"
                >
                  {cta.label}
                </Link>
              ) : null}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/**
 * Mega-menu body. Column count follows the group count so a two-group menu does
 * not stretch to fill four columns.
 */
/**
 * One entry in a mega-menu column, with whatever hangs off it.
 *
 * A service carries its capabilities, and a service whose capabilities are
 * grouped by product family carries the family first and the capabilities
 * under that. The list is the same component at every depth, so the third
 * level costs nothing the second did not already pay for.
 *
 * The panel opens beside the entry rather than under it: a column is already a
 * list, and nesting a second one inside pushes every following entry down the
 * page. It flips inward when there is no room to the right.
 */
function FlyoutLink({ link, onNavigate, depth = 0 }) {
  const [open, setOpen] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const rowRef = useRef(null);
  const children = link.children ?? [];

  const reveal = () => {
    const box = rowRef.current?.getBoundingClientRect();
    if (box) setFlipped(box.right + FLYOUT_WIDTH > window.innerWidth - 16);
    setOpen(true);
  };

  if (!children.length) {
    return (
      <li>
        <Link
          href={link.href}
          onClick={onNavigate}
          className="block rounded-pill px-2 py-1.5 text-sm text-muted transition-colors hover:bg-surface hover:text-brand-700"
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li
      ref={rowRef}
      className="relative"
      onMouseEnter={reveal}
      onMouseLeave={() => setOpen(false)}
      onFocus={reveal}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        href={link.href}
        onClick={onNavigate}
        aria-expanded={open}
        className={cn(
          "flex items-center justify-between gap-2 rounded-pill px-2 py-1.5 text-sm transition-colors",
          open ? "bg-surface text-brand-700" : "text-muted hover:bg-surface hover:text-brand-700"
        )}
      >
        {link.label}
        <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 opacity-60" />
      </Link>

      <AnimatePresence>
        {open ? (
          <motion.ul
            initial={{ opacity: 0, x: flipped ? 6 : -6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: flipped ? 6 : -6 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={cn(
              "absolute top-0 z-10 w-[17rem] space-y-0.5 rounded-card border border-border bg-background p-2 shadow-xl shadow-brand-900/10",
              flipped ? "right-full mr-2" : "left-full ml-2"
            )}
          >
            {children.map((child) => (
              <FlyoutLink key={child.id} link={child} onNavigate={onNavigate} depth={depth + 1} />
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </li>
  );
}

function MegaPanel({ groups, onNavigate }) {
  /**
   * Static map — Tailwind cannot see a class name built by string interpolation.
   * Five or more groups drop to three columns so they land in even rows instead
   * of leaving one tall column beside a row of stubs.
   */
  const COLUMNS = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3", 4: "lg:grid-cols-4" };
  const columns = COLUMNS[groups.length > 4 ? 3 : Math.max(groups.length, 1)];
  const single = groups.length === 1;

  return (
    <div className="mx-auto max-w-[1720px] rounded-card border border-border bg-background p-6 shadow-xl shadow-brand-900/10">
      <div
        className={cn(
          "grid gap-x-8 gap-y-6",
          single ? "sm:grid-cols-2 lg:grid-cols-3" : columns
        )}
      >
        {groups.map((group) => (
          <div key={group.id} className={cn(single && "contents")}>
            {group.title ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-600">{group.title}</p>
            ) : null}
            {single ? (
              group.links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={onNavigate}
                  className="group rounded-card p-3 transition-colors hover:bg-surface"
                >
                  <span className="block text-sm font-medium text-foreground group-hover:text-brand-700">
                    {link.label}
                  </span>
                  {link.description ? (
                    <span className="mt-1 block text-xs leading-relaxed text-faint">{link.description}</span>
                  ) : null}
                </Link>
              ))
            ) : (
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <FlyoutLink key={link.id} link={link} onNavigate={onNavigate} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SiteHeader;

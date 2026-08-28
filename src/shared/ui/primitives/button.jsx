import Link from "next/link";
import { cn } from "./cn";

/**
 * Pill button.
 *
 * `primary` is the only element allowed to carry a solid brand fill in body
 * content, which is what keeps #3533cd an accent rather than a background.
 */
const VARIANTS = {
  primary:
    "bg-brand-600 text-white shadow-md shadow-brand-600/25 hover:bg-brand-700 focus-visible:outline-brand-600",
  secondary:
    "border border-border bg-white text-foreground hover:border-brand-300 hover:text-brand-700 focus-visible:outline-brand-600",
  ghost: "text-foreground hover:bg-surface focus-visible:outline-brand-600",
  /* For a button standing on a photograph rather than on the page. */
  onDark:
    "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/20 focus-visible:outline-white",
};

const SIZES = {
  sm: "px-4 py-1.5 text-[0.8125rem] sm:px-5 sm:py-2 sm:text-sm",
  md: "px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-[15px]",
  lg: "px-5 py-2.5 text-sm sm:px-7 sm:py-3.5 sm:text-base",
};

export function Button({ href, variant = "primary", size = "md", className, children, ...props }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;

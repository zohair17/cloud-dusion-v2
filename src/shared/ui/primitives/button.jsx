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
};

const SIZES = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-7 py-3.5 text-base",
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

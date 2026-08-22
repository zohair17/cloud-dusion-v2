import Image from "next/image";
import Link from "next/link";
import { routes } from "@/shared/config/routes";
import { siteConfig } from "@/shared/config/site.config";
import { cn } from "./cn";

/** Wordmark, always linking home. Intrinsic size is the asset's own 356x154. */
export function Logo({ className, priority = false }) {
  return (
    <Link
      href={routes.home()}
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/asset/logo.svg"
        alt={siteConfig.name}
        width={356}
        height={154}
        priority={priority}
        className="h-10 w-auto"
      />
    </Link>
  );
}

export default Logo;

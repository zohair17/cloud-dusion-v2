import { cn } from "./cn";

/**
 * Page gutter and max width.
 *
 * `wide` matches the reference header rail; `default` is the reading width used
 * by content sections. The horizontal gutter is a single fluid token, so page
 * edges stay aligned everywhere.
 */
const SIZES = {
  wide: "max-w-[1720px]",
  default: "max-w-[1200px]",
  narrow: "max-w-[880px]",
};

export function Container({ size = "default", as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cn("mx-auto w-full px-gutter", SIZES[size] ?? SIZES.default, className)} {...props}>
      {children}
    </Tag>
  );
}

export default Container;

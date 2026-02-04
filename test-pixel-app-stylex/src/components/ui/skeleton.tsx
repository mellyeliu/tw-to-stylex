import * as _stylex from "@stylexjs/stylex";
import { cn } from "./utils";
function Skeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="skeleton" {..._stylex.props(_styles.$1, className)} {...props} />;
}
export { Skeleton };
const _styles = _stylex.create({
  $1: {
    animation: "2s cubic-bezier(.4, 0, .6, 1) infinite pulse",
    borderRadius: ".375rem"
  }
});
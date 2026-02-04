"use client";

import * as _stylex from "@stylexjs/stylex";
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp@1.4.2";
import { MinusIcon } from "lucide-react@0.487.0";
import { cn } from "./utils";
function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) {
  return <OTPInput data-slot="input-otp" containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)} className={[_styles.$1, className]} {...props} />;
}
function InputOTPGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="input-otp-group" {..._stylex.props(_styles.$2, className)} {...props} />;
}
function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const {
    char,
    hasFakeCaret,
    isActive
  } = inputOTPContext?.slots[index] ?? {};
  return <div data-slot="input-otp-slot" data-active={isActive} {..._stylex.props(_styles.$3, className)} {...props}>
      {char}
      {hasFakeCaret && <div {..._stylex.props(_styles.$4)}>
          <div {..._stylex.props(_styles.$5)} />
        </div>}
    </div>;
}
function InputOTPSeparator({
  ...props
}: React.ComponentProps<"div">) {
  return <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>;
}
export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
const _styles = _stylex.create({
  $1: {
    cursor: {
      default: null,
      ":disabled": "not-allowed"
    }
  },
  $2: {
    display: "flex",
    alignItems: "center",
    gap: ".25rem"
  },
  $3: {
    position: "relative",
    display: "flex",
    height: "2.25rem",
    width: "2.25rem",
    alignItems: "center",
    justifyContent: "center",
    borderBlockStyle: "solid",
    borderBlockWidth: "1px",
    borderRightStyle: "solid",
    borderRightWidth: "1px",
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    borderTopLeftRadius: {
      default: null,
      ":first-child": ".375rem"
    },
    borderBottomLeftRadius: {
      default: null,
      ":first-child": ".375rem"
    },
    borderLeftStyle: {
      default: null,
      ":first-child": "solid"
    },
    borderLeftWidth: {
      default: null,
      ":first-child": "1px"
    },
    borderTopRightRadius: {
      default: null,
      ":last-child": ".375rem"
    },
    borderBottomRightRadius: {
      default: null,
      ":last-child": ".375rem"
    }
  },
  $4: {
    pointerEvents: "none",
    position: "absolute",
    inset: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  $5: {
    height: "1rem",
    width: "1px",
    transitionDuration: "1s"
  }
});
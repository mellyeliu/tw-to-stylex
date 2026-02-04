import * as stylex from "@stylexjs/stylex";
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      {...stylex.props(
        styles.base,
        styles[variant],
        styles[size],
        disabled && styles.disabled
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

const styles = stylex.create({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "500",
    borderRadius: ".5rem",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".2s",
    outlineStyle: {
      default: null,
      ":focus": "none"
    },
    boxShadow: {
      default: null,
      ":focus": "0 0 0 2px #fff, 0 0 0 4px #4f46e5"
    }
  },
  primary: {
    backgroundColor: {
      default: "#4f46e5",
      ":hover": "#4338ca",
      ":active": "#3730a3"
    },
    color: "#fff"
  },
  secondary: {
    backgroundColor: {
      default: "#4b5563",
      ":hover": "#374151",
      ":active": "#1f2937"
    },
    color: "#fff"
  },
  outline: {
    backgroundColor: {
      default: "transparent",
      ":hover": "#eef2ff",
      ":active": "#e0e7ff"
    },
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#4f46e5",
    color: "#4f46e5"
  },
  sm: {
    paddingInline: ".75rem",
    paddingBlock: ".375rem",
    fontSize: ".875rem",
    lineHeight: "1.25rem"
  },
  md: {
    paddingInline: "1rem",
    paddingBlock: ".5rem",
    fontSize: "1rem",
    lineHeight: "1.5rem"
  },
  lg: {
    paddingInline: "1.5rem",
    paddingBlock: ".75rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem"
  },
  disabled: {
    opacity: ".5",
    cursor: "not-allowed"
  }
});

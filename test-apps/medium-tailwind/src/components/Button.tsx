import * as stylex from '@stylexjs/stylex';
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
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '0.5rem',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    outlineStyle: {
      default: null,
      ':focus': 'none',
    },
    boxShadow: {
      default: null,
      ':focus': '0 0 0 2px #fff, 0 0 0 4px #3b82f6',
    },
  },
  primary: {
    backgroundColor: {
      default: '#2563eb',
      ':hover': '#1d4ed8',
      ':active': '#1e40af',
    },
    color: '#fff',
  },
  secondary: {
    backgroundColor: {
      default: '#4b5563',
      ':hover': '#374151',
      ':active': '#1f2937',
    },
    color: '#fff',
  },
  outline: {
    backgroundColor: {
      default: 'transparent',
      ':hover': '#eff6ff',
      ':active': '#dbeafe',
    },
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#2563eb',
    color: '#2563eb',
  },
  sm: {
    paddingInline: '0.75rem',
    paddingBlock: '0.375rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  md: {
    paddingInline: '1rem',
    paddingBlock: '0.5rem',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  lg: {
    paddingInline: '1.5rem',
    paddingBlock: '0.75rem',
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  disabled: {
    opacity: '0.5',
    cursor: 'not-allowed',
  },
});

import * as stylex from '@stylexjs/stylex';
import type { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, HTMLAttributes } from 'react';

// ============================================
// BUTTON COMPONENT
// ============================================

const buttonStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    fontWeight: '500',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 150ms ease-in-out',
    outline: 'none',
    fontFamily: 'inherit',
    ':focus-visible': {
      boxShadow: '0 0 0 2px #fff, 0 0 0 4px #1c7ed6',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  primary: {
    backgroundColor: {
      default: '#1c7ed6',
      ':hover': '#1971c2',
    },
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: {
      default: '#e9ecef',
      ':hover': '#dee2e6',
    },
    color: '#212529',
  },
  danger: {
    backgroundColor: {
      default: '#fa5252',
      ':hover': '#f03e3e',
    },
    color: '#ffffff',
  },
  ghost: {
    backgroundColor: {
      default: 'transparent',
      ':hover': 'rgba(0, 0, 0, 0.05)',
    },
    color: '#212529',
  },
  sm: {
    height: '2rem',
    paddingInline: '0.75rem',
    fontSize: '0.875rem',
  },
  md: {
    height: '2.5rem',
    paddingInline: '1rem',
    fontSize: '1rem',
  },
  lg: {
    height: '3rem',
    paddingInline: '1.5rem',
    fontSize: '1.125rem',
  },
});

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...stylex.props(buttonStyles.base, buttonStyles[variant], buttonStyles[size])}
      {...props}
    >
      {children}
    </button>
  );
}

// ============================================
// CARD COMPONENT
// ============================================

const cardStyles = stylex.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    border: '1px solid #e9ecef',
  },
  interactive: {
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
    ':hover': {
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)',
    },
  },
  header: {
    padding: '1.25rem',
    borderBottom: '1px solid #e9ecef',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#212529',
    margin: 0,
  },
  body: {
    padding: '1.25rem',
  },
  footer: {
    padding: '1rem 1.25rem',
    borderTop: '1px solid #e9ecef',
    backgroundColor: '#f8f9fa',
  },
});

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  children: ReactNode;
}

export function Card({ interactive = false, children, ...props }: CardProps) {
  return (
    <div
      {...stylex.props(cardStyles.card, interactive && cardStyles.interactive)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, title, ...props }: HTMLAttributes<HTMLDivElement> & { title?: string }) {
  return (
    <div {...stylex.props(cardStyles.header)} {...props}>
      {title && <h3 {...stylex.props(cardStyles.title)}>{title}</h3>}
      {children}
    </div>
  );
}

export function CardBody({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...stylex.props(cardStyles.body)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...stylex.props(cardStyles.footer)} {...props}>
      {children}
    </div>
  );
}

// ============================================
// BADGE COMPONENT
// ============================================

const badgeStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '9999px',
    paddingInline: '0.625rem',
    paddingBlock: '0.125rem',
    fontSize: '0.75rem',
    lineHeight: '1.5',
  },
  blue: {
    backgroundColor: '#d0ebff',
    color: '#1971c2',
  },
  green: {
    backgroundColor: '#d3f9d8',
    color: '#2f9e44',
  },
  red: {
    backgroundColor: '#ffe3e3',
    color: '#e03131',
  },
  yellow: {
    backgroundColor: '#fff3bf',
    color: '#e67700',
  },
  gray: {
    backgroundColor: '#e9ecef',
    color: '#495057',
  },
});

export type BadgeColor = 'blue' | 'green' | 'red' | 'yellow' | 'gray';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  children: ReactNode;
}

export function Badge({ color = 'blue', children, ...props }: BadgeProps) {
  return (
    <span {...stylex.props(badgeStyles.base, badgeStyles[color])} {...props}>
      {children}
    </span>
  );
}

// ============================================
// INPUT COMPONENT
// ============================================

const inputStyles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.375rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#212529',
  },
  input: {
    width: '100%',
    height: '2.5rem',
    paddingInline: '0.75rem',
    fontSize: '1rem',
    borderRadius: '0.375rem',
    border: '1px solid #ced4da',
    backgroundColor: '#ffffff',
    color: '#212529',
    outline: 'none',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    ':focus': {
      borderColor: '#1c7ed6',
      boxShadow: '0 0 0 3px rgba(28, 126, 214, 0.15)',
    },
    ':disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      backgroundColor: '#f1f3f5',
    },
    '::placeholder': {
      color: '#adb5bd',
    },
  },
  inputError: {
    borderColor: '#fa5252',
    ':focus': {
      borderColor: '#fa5252',
      boxShadow: '0 0 0 3px rgba(250, 82, 82, 0.15)',
    },
  },
  helperText: {
    fontSize: '0.75rem',
    color: '#868e96',
  },
  errorText: {
    fontSize: '0.75rem',
    color: '#fa5252',
  },
});

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
}

let inputCounter = 0;

export function Input({ label, helperText, error, id, ...props }: InputProps) {
  const inputId = id || `input-${++inputCounter}`;

  return (
    <div {...stylex.props(inputStyles.wrapper)}>
      {label && (
        <label htmlFor={inputId} {...stylex.props(inputStyles.label)}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...stylex.props(inputStyles.input, error ? inputStyles.inputError : null)}
        {...props}
      />
      {helperText && !error && (
        <span {...stylex.props(inputStyles.helperText)}>{helperText}</span>
      )}
      {error && <span {...stylex.props(inputStyles.errorText)}>{error}</span>}
    </div>
  );
}

// ============================================
// ALERT COMPONENT
// ============================================

const alertStyles = stylex.create({
  base: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid',
  },
  info: {
    backgroundColor: '#e7f5ff',
    borderColor: '#a5d8ff',
    color: '#1864ab',
  },
  success: {
    backgroundColor: '#ebfbee',
    borderColor: '#b2f2bb',
    color: '#2b8a3e',
  },
  warning: {
    backgroundColor: '#fff9db',
    borderColor: '#ffe066',
    color: '#e67700',
  },
  error: {
    backgroundColor: '#fff5f5',
    borderColor: '#ffc9c9',
    color: '#c92a2a',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
});

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: ReactNode;
}

export function Alert({ variant = 'info', title, children, ...props }: AlertProps) {
  return (
    <div {...stylex.props(alertStyles.base, alertStyles[variant])} role="alert" {...props}>
      <div {...stylex.props(alertStyles.content)}>
        {title && <div {...stylex.props(alertStyles.title)}>{title}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
}

// ============================================
// SPINNER COMPONENT
// ============================================

const spinKeyframes = stylex.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const spinnerStyles = stylex.create({
  base: {
    display: 'inline-block',
    borderRadius: '9999px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#e9ecef',
    borderTopColor: '#1c7ed6',
    animationName: spinKeyframes,
    animationDuration: '0.6s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  },
  sm: {
    width: '1rem',
    height: '1rem',
  },
  md: {
    width: '1.5rem',
    height: '1.5rem',
  },
  lg: {
    width: '2rem',
    height: '2rem',
  },
});

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

export function Spinner({ size = 'md', ...props }: SpinnerProps) {
  return <div {...stylex.props(spinnerStyles.base, spinnerStyles[size])} {...props} />;
}

// Re-export stylex for consumers
export { stylex };

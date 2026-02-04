import * as stylex from '@stylexjs/stylex';
import React from 'react';

// ============================================
// TOKENS / DESIGN SYSTEM
// ============================================

export const tokens = stylex.defineVars({
  // Colors
  primaryColor: '#8b5cf6',
  primaryHover: '#7c3aed',
  secondaryColor: '#6b7280',
  secondaryHover: '#4b5563',
  dangerColor: '#ef4444',
  dangerHover: '#dc2626',
  successColor: '#10b981',
  successHover: '#059669',

  // Text
  textPrimary: '#1f2937',
  textSecondary: '#6b7280',
  textMuted: '#9ca3af',
  textOnPrimary: '#ffffff',

  // Backgrounds
  bgPrimary: '#ffffff',
  bgSecondary: '#f3f4f6',
  bgMuted: '#e5e7eb',

  // Borders
  borderColor: '#e5e7eb',
  borderRadius: '0.5rem',
  borderRadiusLg: '0.75rem',
  borderRadiusFull: '9999px',

  // Shadows
  shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',

  // Spacing
  spacingXs: '0.25rem',
  spacingSm: '0.5rem',
  spacingMd: '1rem',
  spacingLg: '1.5rem',
  spacingXl: '2rem',

  // Typography
  fontSizeXs: '0.75rem',
  fontSizeSm: '0.875rem',
  fontSizeMd: '1rem',
  fontSizeLg: '1.125rem',
  fontSizeXl: '1.25rem',
  fontSize2xl: '1.5rem',
  fontSize3xl: '1.875rem',
});

// ============================================
// BUTTON COMPONENT
// ============================================

const buttonStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: tokens.spacingSm,
    fontWeight: '500',
    borderRadius: tokens.borderRadius,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 150ms ease-in-out',
    outline: 'none',
    ':focus-visible': {
      boxShadow: `0 0 0 2px ${tokens.bgPrimary}, 0 0 0 4px ${tokens.primaryColor}`,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  // Variants
  primary: {
    backgroundColor: {
      default: tokens.primaryColor,
      ':hover': tokens.primaryHover,
    },
    color: tokens.textOnPrimary,
  },
  secondary: {
    backgroundColor: {
      default: tokens.bgSecondary,
      ':hover': tokens.bgMuted,
    },
    color: tokens.textPrimary,
  },
  danger: {
    backgroundColor: {
      default: tokens.dangerColor,
      ':hover': tokens.dangerHover,
    },
    color: tokens.textOnPrimary,
  },
  ghost: {
    backgroundColor: {
      default: 'transparent',
      ':hover': tokens.bgSecondary,
    },
    color: tokens.textPrimary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: {
      default: tokens.borderColor,
      ':hover': tokens.primaryColor,
    },
    color: {
      default: tokens.textPrimary,
      ':hover': tokens.primaryColor,
    },
  },
  // Sizes
  sm: {
    height: '2rem',
    paddingLeft: tokens.spacingSm,
    paddingRight: tokens.spacingSm,
    fontSize: tokens.fontSizeSm,
  },
  md: {
    height: '2.5rem',
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
    fontSize: tokens.fontSizeMd,
  },
  lg: {
    height: '3rem',
    paddingLeft: tokens.spacingLg,
    paddingRight: tokens.spacingLg,
    fontSize: tokens.fontSizeLg,
  },
  // Full width
  fullWidth: {
    width: '100%',
  },
});

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...stylex.props(
        buttonStyles.base,
        buttonStyles[variant],
        buttonStyles[size],
        fullWidth && buttonStyles.fullWidth
      )}
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
  base: {
    backgroundColor: tokens.bgPrimary,
    borderRadius: tokens.borderRadiusLg,
    border: `1px solid ${tokens.borderColor}`,
    overflow: 'hidden',
  },
  elevated: {
    boxShadow: tokens.shadowMd,
    border: 'none',
  },
  interactive: {
    cursor: 'pointer',
    transition: 'all 200ms ease-in-out',
    ':hover': {
      boxShadow: tokens.shadowLg,
      transform: 'translateY(-2px)',
    },
  },
  header: {
    padding: tokens.spacingLg,
    borderBottom: `1px solid ${tokens.borderColor}`,
  },
  body: {
    padding: tokens.spacingLg,
  },
  footer: {
    padding: tokens.spacingLg,
    borderTop: `1px solid ${tokens.borderColor}`,
    backgroundColor: tokens.bgSecondary,
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevated?: boolean;
  interactive?: boolean;
  children: React.ReactNode;
}

export function Card({ elevated = false, interactive = false, children, ...props }: CardProps) {
  return (
    <div
      {...stylex.props(
        cardStyles.base,
        elevated && cardStyles.elevated,
        interactive && cardStyles.interactive
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...stylex.props(cardStyles.header)} {...props}>
      {children}
    </div>
  );
}

export function CardBody({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...stylex.props(cardStyles.body)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
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
    borderRadius: tokens.borderRadiusFull,
    whiteSpace: 'nowrap',
  },
  // Variants
  default: {
    backgroundColor: tokens.bgSecondary,
    color: tokens.textPrimary,
  },
  primary: {
    backgroundColor: tokens.primaryColor,
    color: tokens.textOnPrimary,
  },
  success: {
    backgroundColor: tokens.successColor,
    color: tokens.textOnPrimary,
  },
  danger: {
    backgroundColor: tokens.dangerColor,
    color: tokens.textOnPrimary,
  },
  warning: {
    backgroundColor: '#f59e0b',
    color: tokens.textOnPrimary,
  },
  outline: {
    backgroundColor: 'transparent',
    border: `1px solid ${tokens.borderColor}`,
    color: tokens.textPrimary,
  },
  // Sizes
  sm: {
    paddingLeft: tokens.spacingSm,
    paddingRight: tokens.spacingSm,
    paddingTop: '0.125rem',
    paddingBottom: '0.125rem',
    fontSize: tokens.fontSizeXs,
  },
  md: {
    paddingLeft: tokens.spacingSm,
    paddingRight: tokens.spacingSm,
    paddingTop: tokens.spacingXs,
    paddingBottom: tokens.spacingXs,
    fontSize: tokens.fontSizeSm,
  },
  lg: {
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
    paddingTop: tokens.spacingSm,
    paddingBottom: tokens.spacingSm,
    fontSize: tokens.fontSizeMd,
  },
});

export type BadgeVariant = 'default' | 'primary' | 'success' | 'danger' | 'warning' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
}

export function Badge({ variant = 'default', size = 'md', children, ...props }: BadgeProps) {
  return (
    <span
      {...stylex.props(badgeStyles.base, badgeStyles[variant], badgeStyles[size])}
      {...props}
    >
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
    gap: tokens.spacingSm,
  },
  label: {
    fontSize: tokens.fontSizeSm,
    fontWeight: '500',
    color: tokens.textPrimary,
  },
  input: {
    width: '100%',
    height: '2.5rem',
    paddingLeft: tokens.spacingMd,
    paddingRight: tokens.spacingMd,
    fontSize: tokens.fontSizeMd,
    borderRadius: tokens.borderRadius,
    border: `1px solid ${tokens.borderColor}`,
    backgroundColor: tokens.bgPrimary,
    color: tokens.textPrimary,
    outline: 'none',
    transition: 'border-color 150ms ease-in-out, box-shadow 150ms ease-in-out',
    ':focus': {
      borderColor: tokens.primaryColor,
      boxShadow: `0 0 0 3px rgba(139, 92, 246, 0.1)`,
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
      backgroundColor: tokens.bgSecondary,
    },
    '::placeholder': {
      color: tokens.textMuted,
    },
  },
  inputError: {
    borderColor: tokens.dangerColor,
    ':focus': {
      borderColor: tokens.dangerColor,
      boxShadow: `0 0 0 3px rgba(239, 68, 68, 0.1)`,
    },
  },
  helperText: {
    fontSize: tokens.fontSizeXs,
    color: tokens.textSecondary,
  },
  errorText: {
    fontSize: tokens.fontSizeXs,
    color: tokens.dangerColor,
  },
});

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Input({ label, helperText, error, id, ...props }: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div {...stylex.props(inputStyles.wrapper)}>
      {label && (
        <label htmlFor={inputId} {...stylex.props(inputStyles.label)}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        {...stylex.props(inputStyles.input, error && inputStyles.inputError)}
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
    gap: tokens.spacingMd,
    padding: tokens.spacingMd,
    borderRadius: tokens.borderRadius,
    border: '1px solid',
  },
  info: {
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
    color: '#1e40af',
  },
  success: {
    backgroundColor: '#f0fdf4',
    borderColor: '#bbf7d0',
    color: '#166534',
  },
  warning: {
    backgroundColor: '#fffbeb',
    borderColor: '#fde68a',
    color: '#92400e',
  },
  error: {
    backgroundColor: '#fef2f2',
    borderColor: '#fecaca',
    color: '#991b1b',
  },
  content: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    marginBottom: tokens.spacingXs,
  },
  description: {
    fontSize: tokens.fontSizeSm,
  },
});

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
}

export function Alert({ variant = 'info', title, children, ...props }: AlertProps) {
  return (
    <div {...stylex.props(alertStyles.base, alertStyles[variant])} role="alert" {...props}>
      <div {...stylex.props(alertStyles.content)}>
        {title && <div {...stylex.props(alertStyles.title)}>{title}</div>}
        <div {...stylex.props(alertStyles.description)}>{children}</div>
      </div>
    </div>
  );
}

// ============================================
// AVATAR COMPONENT
// ============================================

const avatarStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadiusFull,
    overflow: 'hidden',
    backgroundColor: tokens.bgSecondary,
    color: tokens.textSecondary,
    fontWeight: '500',
    flexShrink: 0,
  },
  sm: {
    width: '2rem',
    height: '2rem',
    fontSize: tokens.fontSizeXs,
  },
  md: {
    width: '2.5rem',
    height: '2.5rem',
    fontSize: tokens.fontSizeSm,
  },
  lg: {
    width: '3rem',
    height: '3rem',
    fontSize: tokens.fontSizeMd,
  },
  xl: {
    width: '4rem',
    height: '4rem',
    fontSize: tokens.fontSizeLg,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: AvatarSize;
}

export function Avatar({ src, alt, fallback, size = 'md', ...props }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false);

  const getFallbackText = () => {
    if (fallback) return fallback;
    if (alt) return alt.charAt(0).toUpperCase();
    return '?';
  };

  return (
    <div {...stylex.props(avatarStyles.base, avatarStyles[size])} {...props}>
      {src && !imgError ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          onError={() => setImgError(true)}
          {...stylex.props(avatarStyles.image)}
        />
      ) : (
        getFallbackText()
      )}
    </div>
  );
}

// ============================================
// DIVIDER COMPONENT
// ============================================

const dividerStyles = stylex.create({
  horizontal: {
    width: '100%',
    height: '1px',
    backgroundColor: tokens.borderColor,
    border: 'none',
    margin: `${tokens.spacingMd} 0`,
  },
  vertical: {
    width: '1px',
    height: '100%',
    minHeight: '1rem',
    backgroundColor: tokens.borderColor,
    border: 'none',
    margin: `0 ${tokens.spacingMd}`,
  },
});

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({ orientation = 'horizontal', ...props }: DividerProps) {
  return <hr {...stylex.props(dividerStyles[orientation])} {...props} />;
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
    borderRadius: tokens.borderRadiusFull,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: tokens.borderColor,
    borderTopColor: tokens.primaryColor,
    animationName: spinKeyframes,
    animationDuration: '0.75s',
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

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

export function Spinner({ size = 'md', ...props }: SpinnerProps) {
  return <div {...stylex.props(spinnerStyles.base, spinnerStyles[size])} {...props} />;
}

// ============================================
// EXPORTS
// ============================================

export { stylex };

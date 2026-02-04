import * as stylex from '@stylexjs/stylex';

// StyleX Button Component
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
    ':focus-visible': {
      boxShadow: '0 0 0 2px #fff, 0 0 0 4px #8b5cf6',
    },
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  primary: {
    backgroundColor: {
      default: '#8b5cf6',
      ':hover': '#7c3aed',
    },
    color: '#ffffff',
  },
  secondary: {
    backgroundColor: {
      default: '#f3f4f6',
      ':hover': '#e5e7eb',
    },
    color: '#1f2937',
  },
  danger: {
    backgroundColor: {
      default: '#ef4444',
      ':hover': '#dc2626',
    },
    color: '#ffffff',
  },
  sm: {
    height: '2rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    fontSize: '0.875rem',
  },
  md: {
    height: '2.5rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '1rem',
  },
  lg: {
    height: '3rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    fontSize: '1.125rem',
  },
});

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

export function StyleXButton({
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

// StyleX Card Component
const cardStyles = stylex.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    overflow: 'hidden',
    border: '1px solid #e5e7eb',
    transition: 'all 200ms ease-in-out',
    ':hover': {
      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
      transform: 'translateY(-2px)',
    },
  },
  header: {
    padding: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0,
  },
  body: {
    padding: '1.5rem',
  },
  footer: {
    padding: '1rem 1.5rem',
    borderTop: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
  },
});

export function StyleXCard({ children }: { children: React.ReactNode }) {
  return <div {...stylex.props(cardStyles.card)}>{children}</div>;
}

export function StyleXCardHeader({
  children,
  title,
}: {
  children?: React.ReactNode;
  title?: string;
}) {
  return (
    <div {...stylex.props(cardStyles.header)}>
      {title && <h3 {...stylex.props(cardStyles.title)}>{title}</h3>}
      {children}
    </div>
  );
}

export function StyleXCardBody({ children }: { children: React.ReactNode }) {
  return <div {...stylex.props(cardStyles.body)}>{children}</div>;
}

export function StyleXCardFooter({ children }: { children: React.ReactNode }) {
  return <div {...stylex.props(cardStyles.footer)}>{children}</div>;
}

// StyleX Badge Component
const badgeStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: '9999px',
    padding: '0.25rem 0.75rem',
    fontSize: '0.75rem',
  },
  purple: {
    backgroundColor: '#f3e8ff',
    color: '#7c3aed',
  },
  green: {
    backgroundColor: '#dcfce7',
    color: '#16a34a',
  },
  red: {
    backgroundColor: '#fee2e2',
    color: '#dc2626',
  },
  blue: {
    backgroundColor: '#dbeafe',
    color: '#2563eb',
  },
});

export type BadgeColor = 'purple' | 'green' | 'red' | 'blue';

export function StyleXBadge({
  color = 'purple',
  children,
}: {
  color?: BadgeColor;
  children: React.ReactNode;
}) {
  return (
    <span {...stylex.props(badgeStyles.base, badgeStyles[color])}>{children}</span>
  );
}

// StyleX Alert Component
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
});

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export function StyleXAlert({
  variant = 'info',
  children,
}: {
  variant?: AlertVariant;
  children: React.ReactNode;
}) {
  return (
    <div {...stylex.props(alertStyles.base, alertStyles[variant])} role="alert">
      {children}
    </div>
  );
}

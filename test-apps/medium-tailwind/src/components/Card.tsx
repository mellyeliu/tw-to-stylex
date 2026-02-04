import * as stylex from '@stylexjs/stylex';
import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  value?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  value,
  trend,
  trendValue,
  children,
}) => {
  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.titleRow)}>
          {icon && (
            <div {...stylex.props(styles.iconWrapper)}>
              {icon}
            </div>
          )}
          <div>
            <h3 {...stylex.props(styles.title)}>{title}</h3>
            {description && (
              <p {...stylex.props(styles.description)}>{description}</p>
            )}
          </div>
        </div>

        {trend && trendValue && (
          <span
            {...stylex.props(
              styles.trendBadge,
              trend === 'up' && styles.trendUp,
              trend === 'down' && styles.trendDown,
              trend === 'neutral' && styles.trendNeutral
            )}
          >
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
          </span>
        )}
      </div>

      {value && <p {...stylex.props(styles.value)}>{value}</p>}

      {children && <div {...stylex.props(styles.content)}>{children}</div>}
    </div>
  );
};

export default Card;

const styles = stylex.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: {
      default: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      ':hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    },
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: {
      default: '#e5e7eb',
      ':hover': '#d1d5db',
    },
    padding: {
      default: '1rem',
      '@media (min-width: 640px)': '1.25rem',
      '@media (min-width: 768px)': '1.5rem',
    },
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
    transitionDuration: '300ms',
    transform: {
      default: null,
      ':hover': 'translateY(-0.125rem)',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  iconWrapper: {
    padding: {
      default: '0.5rem',
      '@media (min-width: 640px)': '0.625rem',
      '@media (min-width: 768px)': '0.75rem',
    },
    backgroundColor: '#eff6ff',
    borderRadius: '0.5rem',
    color: '#2563eb',
    transitionProperty: 'color, background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  title: {
    fontSize: {
      default: '0.875rem',
      '@media (min-width: 640px)': '1rem',
    },
    lineHeight: {
      default: '1.25rem',
      '@media (min-width: 640px)': '1.5rem',
    },
    fontWeight: '600',
    color: '#111827',
    transitionProperty: 'color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  description: {
    fontSize: {
      default: '0.75rem',
      '@media (min-width: 640px)': '0.875rem',
    },
    lineHeight: {
      default: '1rem',
      '@media (min-width: 640px)': '1.25rem',
    },
    color: '#6b7280',
    marginTop: '0.125rem',
  },
  trendBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    paddingInline: '0.5rem',
    paddingBlock: '0.25rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: '500',
  },
  trendUp: {
    color: '#16a34a',
    backgroundColor: '#dcfce7',
  },
  trendDown: {
    color: '#dc2626',
    backgroundColor: '#fee2e2',
  },
  trendNeutral: {
    color: '#4b5563',
    backgroundColor: '#f3f4f6',
  },
  value: {
    fontSize: {
      default: '1.5rem',
      '@media (min-width: 640px)': '1.875rem',
      '@media (min-width: 768px)': '2.25rem',
    },
    lineHeight: {
      default: '2rem',
      '@media (min-width: 640px)': '2.25rem',
      '@media (min-width: 768px)': '2.5rem',
    },
    fontWeight: '700',
    color: '#111827',
    marginTop: '0.5rem',
    marginBottom: '0.25rem',
  },
  content: {
    marginTop: '1rem',
  },
});

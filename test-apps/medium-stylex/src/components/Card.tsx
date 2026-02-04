import * as stylex from "@stylexjs/stylex";
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
  children
}) => {
  return (
    <div {...stylex.props(styles.card)}>
      <div {...stylex.props(styles.header)}>
        <div {...stylex.props(styles.titleRow)}>
          {icon && <div {...stylex.props(styles.iconWrapper)}>{icon}</div>}
          <div>
            <h3 {...stylex.props(styles.title)}>{title}</h3>
            {description && <p {...stylex.props(styles.description)}>{description}</p>}
          </div>
        </div>

        {trend && trendValue && (
          <span {...stylex.props(styles.trendBadge, styles[`trend${trend}`])}>
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
    borderRadius: ".75rem",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: {
      default: "#e5e7eb",
      ":hover": "#d1d5db"
    },
    backgroundColor: "#fff",
    padding: {
      default: "1rem",
      "@media (min-width: 640px)": "1.25rem",
      "@media (min-width: 768px)": "1.5rem"
    },
    boxShadow: {
      default: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      ":hover": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    translate: {
      default: null,
      ":hover": "0 -0.125rem"
    }
  },
  header: {
    marginBottom: ".75rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: ".75rem"
  },
  iconWrapper: {
    padding: {
      default: ".5rem",
      "@media (min-width: 640px)": ".625rem"
    },
    transitionProperty: "color, background-color",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s"
  },
  title: {
    fontSize: {
      default: ".875rem",
      "@media (min-width: 640px)": "1rem"
    },
    lineHeight: {
      default: "1.25rem",
      "@media (min-width: 640px)": "1.5rem"
    },
    fontWeight: "600"
  },
  description: {
    marginTop: ".125rem",
    fontSize: {
      default: ".75rem",
      "@media (min-width: 640px)": ".875rem"
    },
    lineHeight: {
      default: "1rem",
      "@media (min-width: 640px)": "1.25rem"
    },
    color: "#6b7280"
  },
  trendBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: ".25rem",
    borderRadius: "9999px",
    paddingInline: ".5rem",
    paddingBlock: ".25rem",
    fontSize: ".75rem",
    lineHeight: "1rem",
    fontWeight: "500"
  },
  trendup: {
    backgroundColor: "#ecfdf5",
    color: "#059669"
  },
  trenddown: {
    backgroundColor: "#fef2f2",
    color: "#dc2626"
  },
  trendneutral: {
    backgroundColor: "#f3f4f6",
    color: "#4b5563"
  },
  value: {
    marginTop: ".5rem",
    fontSize: {
      default: "1.5rem",
      "@media (min-width: 640px)": "1.875rem"
    },
    lineHeight: {
      default: "2rem",
      "@media (min-width: 640px)": "2.25rem"
    },
    fontWeight: "700"
  },
  content: {
    marginTop: "1rem"
  }
});

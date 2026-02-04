import * as _stylex from "@stylexjs/stylex";
interface Card {
  id: number;
  title: string;
  description: string;
  gradient: string;
  size: 'small' | 'medium' | 'large';
  icon: string;
}
const cards: Card[] = [{
  id: 1,
  title: 'Analytics',
  description: 'Track your performance metrics',
  gradient: 'from-blue-500 to-cyan-500',
  size: 'large',
  icon: '📊'
}, {
  id: 2,
  title: 'Payments',
  description: 'Secure transactions',
  gradient: 'from-green-500 to-emerald-500',
  size: 'medium',
  icon: '💳'
}, {
  id: 3,
  title: 'Users',
  description: 'Manage accounts',
  gradient: 'from-purple-500 to-pink-500',
  size: 'small',
  icon: '👥'
}, {
  id: 4,
  title: 'Settings',
  description: 'Configure system',
  gradient: 'from-orange-500 to-red-500',
  size: 'small',
  icon: '⚙️'
}, {
  id: 5,
  title: 'Reports',
  description: 'Generate insights',
  gradient: 'from-indigo-500 to-purple-500',
  size: 'medium',
  icon: '📈'
}, {
  id: 6,
  title: 'Notifications',
  description: 'Stay updated',
  gradient: 'from-pink-500 to-rose-500',
  size: 'large',
  icon: '🔔'
}, {
  id: 7,
  title: 'Security',
  description: 'Protect data',
  gradient: 'from-slate-500 to-gray-600',
  size: 'small',
  icon: '🔒'
}, {
  id: 8,
  title: 'Storage',
  description: 'Cloud backup',
  gradient: 'from-teal-500 to-cyan-500',
  size: 'medium',
  icon: '☁️'
}];
export default function CardGrid() {
  const getSizeClasses = (size: Card['size']) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-2';
      default:
        return '';
    }
  };
  return <div {..._stylex.props(_styles.$1)}>
      {cards.map(card => <div key={card.id} className={["group relative rounded-2xl overflow-hidden cursor-pointer", getSizeClasses(card.size)].join(' ')}>
          {/* Gradient background */}
          <div className={["absolute inset-0 bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity duration-300", card.gradient].join(' ')} />
          
          {/* Shimmer effect on hover */}
          <div {..._stylex.props(_styles.$2)} />
          
          {/* Glass overlay */}
          <div {..._stylex.props(_styles.$3)} />
          
          {/* Content */}
          <div {..._stylex.props(_styles.$4)}>
            <div>
              <span {..._stylex.props(_styles.$5)}>
                {card.icon}
              </span>
              <h3 {..._stylex.props(_styles.$6)}>
                {card.title}
              </h3>
              <p {..._stylex.props(_styles.$7)}>
                {card.description}
              </p>
            </div>
            
            <div {..._stylex.props(_styles.$8)}>
              <span {..._stylex.props(_styles.$9)}>Learn more</span>
              <svg {..._stylex.props(_styles.$10)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

          {/* Border glow effect */}
          <div {..._stylex.props(_styles.$11)} />
          
          {/* Corner accent */}
          <div {..._stylex.props(_styles.$12)} />
        </div>)}
    </div>;
}
const _styles = _stylex.create({
  $1: {
    display: "grid",
    gridAutoRows: "180px",
    gridTemplateColumns: {
      default: "repeat(1, minmax(0, 1fr))",
      "@media (width >= 48rem)": "repeat(4, minmax(0, 1fr))"
    },
    gap: "1rem"
  },
  $2: {
    position: "absolute",
    inset: "0",
    opacity: {
      default: "0",
      [_stylex.when.ancestor(":hover")]: "1"
    },
    transitionProperty: "opacity",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s"
  },
  $3: {
    position: "absolute",
    inset: "0",
    backgroundImage: "linear-gradient(to top, oklab(0% none none / .4), transparent, oklab(100% 0 5.96046e-8 / .1))"
  },
  $4: {
    position: "relative",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.5rem",
    color: "#fff"
  },
  $5: {
    marginBottom: ".75rem",
    display: "block",
    transform: "",
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    "--tw-scale-x": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    "--tw-scale-y": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    "--tw-scale-z": {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110%"
    },
    scale: {
      default: null,
      [_stylex.when.ancestor(":hover")]: "110% 110%"
    }
  },
  $6: {
    marginBottom: ".25rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    fontWeight: "700",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    "--tw-translate-x": {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem"
    },
    translate: {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem 0"
    }
  },
  $7: {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    color: "oklab(100% 0 5.96046e-8 / .8)",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s",
    transitionDelay: "75ms",
    "--tw-translate-x": {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem"
    },
    translate: {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem 0"
    }
  },
  $8: {
    display: "flex",
    "--tw-translate-y": {
      default: ".5rem",
      [_stylex.when.ancestor(":hover")]: "0px"
    },
    translate: {
      default: "0 .5rem",
      [_stylex.when.ancestor(":hover")]: "0 0px"
    },
    alignItems: "center",
    gap: ".5rem",
    opacity: {
      default: "0",
      [_stylex.when.ancestor(":hover")]: "1"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s"
  },
  $9: {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: "500"
  },
  $10: {
    height: "1rem",
    width: "1rem",
    transitionProperty: "transform, translate, scale, rotate",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".15s",
    "--tw-translate-x": {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem"
    },
    translate: {
      default: null,
      [_stylex.when.ancestor(":hover")]: ".25rem 0"
    }
  },
  $11: {
    position: "absolute",
    inset: "0",
    borderRadius: "1rem",
    "--tw-ring-shadow": {
      default: " 0 0 0 calc(1px + 0) currentcolor",
      [_stylex.when.ancestor(":hover")]: " 0 0 0 calc(2px + 0) currentcolor"
    },
    boxShadow: {
      default: "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000",
      [_stylex.when.ancestor(":hover")]: "0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-ring-inset, ) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor), 0 0 #0000"
    },
    "--tw-ring-color": {
      default: "oklab(100% 0 5.96046e-8 / .2)",
      [_stylex.when.ancestor(":hover")]: "oklab(100% 0 5.96046e-8 / .4)"
    },
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s"
  },
  $12: {
    position: "absolute",
    top: "0",
    right: "0",
    height: {
      default: "5rem",
      [_stylex.when.ancestor(":hover")]: "6rem"
    },
    width: {
      default: "5rem",
      [_stylex.when.ancestor(":hover")]: "6rem"
    },
    borderBottomLeftRadius: "100px",
    backgroundColor: "oklab(100% 0 5.96046e-8 / .1)",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.4, 0, .2, 1)",
    transitionDuration: ".3s"
  }
});
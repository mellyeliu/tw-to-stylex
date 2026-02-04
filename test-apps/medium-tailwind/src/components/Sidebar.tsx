import * as stylex from '@stylexjs/stylex';
import React, { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  badge?: number;
}

interface SidebarProps {
  onNavigate?: (id: string) => void;
}

function DashboardIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const navItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { id: 'analytics', label: 'Analytics', icon: <ChartIcon />, badge: 3 },
  { id: 'projects', label: 'Projects', icon: <FolderIcon /> },
  { id: 'team', label: 'Team', icon: <UsersIcon />, badge: 12 },
  { id: 'messages', label: 'Messages', icon: <MailIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (id: string) => {
    setActiveItem(id);
    onNavigate?.(id);
  };

  return (
    <aside
      {...stylex.props(
        styles.sidebar,
        isCollapsed ? styles.sidebarCollapsed : styles.sidebarExpanded
      )}
    >
      <div {...stylex.props(styles.header)}>
        {!isCollapsed && (
          <span {...stylex.props(styles.logo)}>Dashboard</span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          {...stylex.props(styles.toggleButton)}
        >
          <svg {...stylex.props(styles.icon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav {...stylex.props(styles.nav)}>
        <ul {...stylex.props(styles.navList)}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                {...stylex.props(
                  styles.navItem,
                  activeItem === item.id ? styles.navItemActive : styles.navItemInactive
                )}
              >
                <span {...stylex.props(styles.iconWrapper)}>{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span {...stylex.props(styles.navLabel)}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span
                        {...stylex.props(
                          styles.badge,
                          activeItem === item.id ? styles.badgeActive : styles.badgeInactive
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div {...stylex.props(styles.userSection)}>
        <div {...stylex.props(styles.avatar)}>
          JD
        </div>
        {!isCollapsed && (
          <div {...stylex.props(styles.userInfo)}>
            <p {...stylex.props(styles.userName)}>John Doe</p>
            <p {...stylex.props(styles.userEmail)}>john@example.com</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;

const styles = stylex.create({
  icon: {
    width: '1.25rem',
    height: '1.25rem',
  },
  sidebar: {
    backgroundColor: '#111827',
    color: '#fff',
    height: '100vh',
    position: 'sticky',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '300ms',
  },
  sidebarCollapsed: {
    width: '4rem',
  },
  sidebarExpanded: {
    width: '16rem',
  },
  header: {
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: '1rem',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderColor: '#1f2937',
  },
  logo: {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    fontWeight: '700',
    color: '#60a5fa',
  },
  toggleButton: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transitionProperty: 'color, background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#1f2937',
    },
  },
  nav: {
    flex: '1',
    paddingBlock: '1rem',
    overflowY: 'auto',
  },
  navList: {
    paddingInline: '0.5rem',
  },
  navItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    paddingInline: '0.75rem',
    paddingBlock: '0.625rem',
    borderRadius: '0.5rem',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
  },
  navItemActive: {
    backgroundColor: '#2563eb',
    color: '#fff',
    boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
  },
  navItemInactive: {
    color: '#9ca3af',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#1f2937',
    },
  },
  iconWrapper: {
    flexShrink: '0',
  },
  navLabel: {
    flex: '1',
    textAlign: 'left',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: '500',
  },
  badge: {
    paddingInline: '0.5rem',
    paddingBlock: '0.125rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: '500',
  },
  badgeActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#fff',
  },
  badgeInactive: {
    backgroundColor: '#2563eb',
    color: '#fff',
  },
  userSection: {
    padding: '1rem',
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderColor: '#1f2937',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  avatar: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '9999px',
    backgroundImage: 'linear-gradient(to bottom right, #60a5fa, #2563eb)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  userInfo: {
    flex: '1',
    minWidth: '0',
  },
  userName: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: '500',
    color: '#fff',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  userEmail: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#9ca3af',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

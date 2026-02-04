import * as stylex from '@stylexjs/stylex';
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Card } from './components/Card';
import { Button } from './components/Button';

// Icons for cards
const RevenueIcon = () => (
  <svg {...stylex.props(styles.cardIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg {...stylex.props(styles.cardIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const OrdersIcon = () => (
  <svg {...stylex.props(styles.cardIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const GrowthIcon = () => (
  <svg {...stylex.props(styles.cardIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const activities = [
    { user: 'Alice Johnson', action: 'created a new project', time: '2 min ago', color: '#22c55e' },
    { user: 'Bob Smith', action: 'updated the dashboard', time: '15 min ago', color: '#3b82f6' },
    { user: 'Carol White', action: 'commented on a task', time: '1 hour ago', color: '#a855f7' },
    { user: 'David Brown', action: 'completed a milestone', time: '3 hours ago', color: '#f97316' },
  ];

  const stats = [
    { label: 'Completion Rate', value: 78, color: '#2563eb' },
    { label: 'Active Projects', value: 65, color: '#22c55e' },
    { label: 'Team Performance', value: 92, color: '#a855f7' },
  ];

  return (
    <div {...stylex.props(styles.container)}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div {...stylex.props(styles.mainWrapper)}>
        {/* Header */}
        <header {...stylex.props(styles.header)}>
          <div {...stylex.props(styles.headerLeft)}>
            <h1 {...stylex.props(styles.pageTitle)}>
              Dashboard Overview
            </h1>
          </div>

          <div {...stylex.props(styles.headerRight)}>
            {/* Search */}
            <div {...stylex.props(styles.searchWrapper)}>
              <input
                type="text"
                placeholder="Search..."
                {...stylex.props(styles.searchInput)}
              />
              <svg
                {...stylex.props(styles.searchIcon)}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Notification */}
            <button {...stylex.props(styles.notificationButton)}>
              <svg {...stylex.props(styles.notificationIcon)} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span {...stylex.props(styles.notificationDot)}></span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main {...stylex.props(styles.main)}>
          {/* Stats Grid */}
          <section {...stylex.props(styles.statsSection)}>
            <h2 {...stylex.props(styles.sectionTitle)}>Key Metrics</h2>
            <div {...stylex.props(styles.statsGrid)}>
              <Card
                title="Total Revenue"
                description="This month"
                icon={<RevenueIcon />}
                value="$48,352"
                trend="up"
                trendValue="+12.5%"
              />
              <Card
                title="Active Users"
                description="Last 30 days"
                icon={<UsersIcon />}
                value="2,847"
                trend="up"
                trendValue="+8.2%"
              />
              <Card
                title="Total Orders"
                description="This week"
                icon={<OrdersIcon />}
                value="1,423"
                trend="down"
                trendValue="-3.1%"
              />
              <Card
                title="Growth Rate"
                description="vs last month"
                icon={<GrowthIcon />}
                value="24.8%"
                trend="neutral"
                trendValue="0%"
              />
            </div>
          </section>

          {/* Two Column Layout */}
          <div {...stylex.props(styles.twoColumnLayout)}>
            {/* Main Panel */}
            <div {...stylex.props(styles.mainPanel)}>
              {/* Button Showcase */}
              <div {...stylex.props(styles.panel)}>
                <h3 {...stylex.props(styles.sectionTitle)}>Button Variants</h3>
                <div {...stylex.props(styles.buttonRow)}>
                  <Button variant="primary" size="sm">Primary Small</Button>
                  <Button variant="primary" size="md">Primary Medium</Button>
                  <Button variant="primary" size="lg">Primary Large</Button>
                </div>
                <div {...stylex.props(styles.buttonRowSpaced)}>
                  <Button variant="secondary" size="sm">Secondary Small</Button>
                  <Button variant="secondary" size="md">Secondary Medium</Button>
                  <Button variant="secondary" size="lg">Secondary Large</Button>
                </div>
                <div {...stylex.props(styles.buttonRowSpaced)}>
                  <Button variant="outline" size="sm">Outline Small</Button>
                  <Button variant="outline" size="md">Outline Medium</Button>
                  <Button variant="outline" size="lg">Outline Large</Button>
                </div>
                <div {...stylex.props(styles.buttonRowSpaced)}>
                  <Button variant="primary" disabled>Disabled Primary</Button>
                  <Button variant="secondary" disabled>Disabled Secondary</Button>
                  <Button variant="outline" disabled>Disabled Outline</Button>
                </div>
              </div>

              {/* Activity Feed */}
              <div {...stylex.props(styles.panel)}>
                <h3 {...stylex.props(styles.sectionTitle)}>Recent Activity</h3>
                <div {...stylex.props(styles.activityList)}>
                  {activities.map((activity, index) => (
                    <div
                      key={index}
                      {...stylex.props(styles.activityItem)}
                    >
                      <div
                        {...stylex.props(styles.activityDot)}
                        style={{ backgroundColor: activity.color }}
                      ></div>
                      <div {...stylex.props(styles.activityContent)}>
                        <p {...stylex.props(styles.activityText)}>
                          <span {...stylex.props(styles.activityUser)}>{activity.user}</span>{' '}
                          {activity.action}
                        </p>
                        <p {...stylex.props(styles.activityTime)}>{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Panel - Form */}
            <div {...stylex.props(styles.sidePanel)}>
              <div {...stylex.props(styles.panel)}>
                <h3 {...stylex.props(styles.sectionTitle)}>Contact Form</h3>
                <form {...stylex.props(styles.form)}>
                  <div {...stylex.props(styles.formGroup)}>
                    <label
                      htmlFor="name"
                      {...stylex.props(styles.label)}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      {...stylex.props(styles.input)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div {...stylex.props(styles.formGroup)}>
                    <label
                      htmlFor="email"
                      {...stylex.props(styles.label)}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      {...stylex.props(styles.input)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div {...stylex.props(styles.formGroup)}>
                    <label
                      htmlFor="message"
                      {...stylex.props(styles.label)}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      {...stylex.props(styles.textarea)}
                      placeholder="Enter your message"
                    />
                  </div>

                  <Button variant="primary" {...stylex.props(styles.submitButton)}>
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Quick Stats */}
              <div {...stylex.props(styles.panel)}>
                <h3 {...stylex.props(styles.sectionTitle)}>Quick Stats</h3>
                <div {...stylex.props(styles.quickStats)}>
                  {stats.map((stat, index) => (
                    <div key={index} {...stylex.props(styles.statItem)}>
                      <div {...stylex.props(styles.statHeader)}>
                        <span {...stylex.props(styles.statLabel)}>{stat.label}</span>
                        <span {...stylex.props(styles.statValue)}>{stat.value}%</span>
                      </div>
                      <div {...stylex.props(styles.progressBar)}>
                        <div
                          {...stylex.props(styles.progressFill)}
                          style={{ width: `${stat.value}%`, backgroundColor: stat.color }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

const styles = stylex.create({
  cardIcon: {
    width: '1.5rem',
    height: '1.5rem',
  },
  container: {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
  },
  mainWrapper: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    height: '4rem',
    backgroundColor: '#fff',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingInline: {
      default: '1rem',
      '@media (min-width: 640px)': '1.5rem',
      '@media (min-width: 1024px)': '2rem',
    },
    position: 'sticky',
    top: '0',
    zIndex: 10,
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  pageTitle: {
    fontSize: {
      default: '1.125rem',
      '@media (min-width: 640px)': '1.25rem',
      '@media (min-width: 1024px)': '1.5rem',
    },
    lineHeight: {
      default: '1.75rem',
      '@media (min-width: 640px)': '1.75rem',
      '@media (min-width: 1024px)': '2rem',
    },
    fontWeight: '600',
    color: '#111827',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: {
      default: '0.5rem',
      '@media (min-width: 640px)': '1rem',
    },
  },
  searchWrapper: {
    position: 'relative',
    display: {
      default: 'none',
      '@media (min-width: 768px)': 'block',
    },
  },
  searchInput: {
    width: '16rem',
    paddingInline: '1rem',
    paddingLeft: '2.5rem',
    paddingBlock: '0.5rem',
    backgroundColor: '#f3f4f6',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#111827',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    outlineStyle: {
      default: null,
      ':focus': 'none',
    },
    boxShadow: {
      default: null,
      ':focus': '0 0 0 2px #3b82f6',
    },
    backgroundColor2: {
      default: '#f3f4f6',
      ':focus': '#fff',
    },
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1rem',
    height: '1rem',
    color: '#9ca3af',
  },
  notificationButton: {
    padding: '0.5rem',
    borderRadius: '0.5rem',
    transitionProperty: 'color, background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    position: 'relative',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#f3f4f6',
    },
  },
  notificationIcon: {
    width: '1.25rem',
    height: '1.25rem',
    color: '#4b5563',
  },
  notificationDot: {
    position: 'absolute',
    top: '0.25rem',
    right: '0.25rem',
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: '#ef4444',
    borderRadius: '9999px',
  },
  main: {
    flex: '1',
    padding: {
      default: '1rem',
      '@media (min-width: 640px)': '1.5rem',
      '@media (min-width: 1024px)': '2rem',
    },
  },
  statsSection: {
    marginBottom: {
      default: '1.5rem',
      '@media (min-width: 640px)': '2rem',
    },
  },
  sectionTitle: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '1rem',
  },
  statsGrid: {
    display: 'grid',
    gap: {
      default: '1rem',
      '@media (min-width: 640px)': '1.5rem',
    },
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 640px)': 'repeat(2, 1fr)',
      '@media (min-width: 1024px)': 'repeat(4, 1fr)',
    },
  },
  twoColumnLayout: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: {
      default: '1fr',
      '@media (min-width: 1024px)': '2fr 1fr',
    },
  },
  mainPanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  sidePanel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#e5e7eb',
    padding: '1.5rem',
  },
  buttonRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  buttonRowSpaced: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginTop: '1rem',
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    transitionProperty: 'color, background-color',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    backgroundColor: {
      default: 'transparent',
      ':hover': '#f9fafb',
    },
  },
  activityDot: {
    width: '0.5rem',
    height: '0.5rem',
    borderRadius: '9999px',
  },
  activityContent: {
    flex: '1',
    minWidth: '0',
  },
  activityText: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#111827',
  },
  activityUser: {
    fontWeight: '500',
  },
  activityTime: {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    color: '#6b7280',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'block',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    paddingInline: '1rem',
    paddingBlock: '0.625rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: {
      default: '#d1d5db',
      ':hover': '#9ca3af',
    },
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#111827',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    outlineStyle: {
      default: null,
      ':focus': 'none',
    },
    boxShadow: {
      default: null,
      ':focus': '0 0 0 2px #3b82f6',
    },
  },
  textarea: {
    width: '100%',
    paddingInline: '1rem',
    paddingBlock: '0.625rem',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: {
      default: '#d1d5db',
      ':hover': '#9ca3af',
    },
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#111827',
    resize: 'none',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '200ms',
    outlineStyle: {
      default: null,
      ':focus': 'none',
    },
    boxShadow: {
      default: null,
      ':focus': '0 0 0 2px #3b82f6',
    },
  },
  submitButton: {
    width: '100%',
  },
  quickStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  statHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    marginBottom: '0.25rem',
  },
  statLabel: {
    color: '#4b5563',
  },
  statValue: {
    fontWeight: '500',
    color: '#111827',
  },
  progressBar: {
    height: '0.5rem',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: '9999px',
    transitionProperty: 'all',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDuration: '500ms',
  },
});

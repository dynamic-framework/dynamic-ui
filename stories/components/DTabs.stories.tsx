/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { CSSProperties } from 'react';
import DTabs from '../../src/components/DTabs';
import DBox from '../../src/components/DBox';
import { TAB_VARIANTS } from '../config/constants';
import { DChip, DIcon } from '../../src';

const config: Meta<typeof DTabs> = {
  title: 'Design System/Components/Tabs',
  component: DTabs,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap Navs & Tabs.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/tabs.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                             | Type        | Description              |
|--------------------------------------|-------------|--------------------------|
| \`--df-tabs-gap\`                    | css length  | Gap                      |
| \`--df-tabs-tab-padding-block\`      | css length  | Tab padding block        |
| \`--df-tabs-tab-padding-inline\`     | css length  | Tab padding inline       |
| \`--df-tabs-tab-font-size\`          | css length  | Tab font size            |
| \`--df-tabs-tab-font-weight\`        | font weight | Tab font weight          |
| \`--df-tabs-tab-font-weight-active\` | font weight | Tab font weight active   |
| \`--df-tabs-tab-radius\`             | css length  | Tab radius               |
| \`--df-tabs-tab-fg\`                 | css color   | Tab foreground           |
| \`--df-tabs-tab-fg-hover\`           | css color   | Tab foreground hover     |
| \`--df-tabs-tab-fg-active\`          | css color   | Tab foreground active    |
| \`--df-tabs-tab-bg-hover\`           | css color   | Tab background hover     |
| \`--df-tabs-indicator-size\`         | css length  | Indicator size           |
| \`--df-tabs-indicator-color\`        | css color   | Indicator color          |
| \`--df-tabs-border-color\`           | css color   | Border color             |
| \`--df-tabs-toggle-bg\`              | css color   | Toggle background        |
| \`--df-tabs-toggle-padding\`         | css length  | Toggle padding           |
| \`--df-tabs-toggle-radius\`          | css length  | Toggle radius            |
| \`--df-tabs-toggle-border-color\`    | css color   | Toggle border color      |
| \`--df-tabs-toggle-active-bg\`       | css color   | Toggle active background |
| \`--df-tabs-toggle-active-fg\`       | css color   | Toggle active foreground |
| \`--df-tabs-panel-padding-block\`    | css length  | Panel padding block      |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    vertical: {
      type: 'boolean',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    variant: {
      type: 'string',
      options: TAB_VARIANTS,
      control: 'select',
      table: {
        defaultValue: { summary: 'underline' },
        category: 'Appearance',
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DTabs>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="overview">
        <h4 className="df-mb-4">Account Overview</h4>
        <p>
          Welcome to your account dashboard. Here you can view a comprehensive
          summary of your financial activity, including your current balance,
          recent transactions, and upcoming payments.
        </p>
        <p className="df-mb-2">
          <strong>Current Balance:</strong>
          {' '}
          $12,450.00
        </p>
        <p className="df-mb-2">
          <strong>Available Credit:</strong>
          {' '}
          $7,550.00
        </p>
        <p>
          Your last transaction was processed on March 15, 2024, for $150.00
          at Online Store Inc. You have 3 pending transactions that will be
          reflected in your account within the next 2-3 business days.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="settings">
        <h4 className="df-mb-4">Account Settings</h4>
        <p>
          Manage your account preferences and personal information. You can
          update your contact details, communication preferences, and security
          settings from this section.
        </p>
        <p className="df-mb-2">
          <strong>Email:</strong>
          {' '}
          user@example.com
        </p>
        <p className="df-mb-2">
          <strong>Phone:</strong>
          {' '}
          +1 (555) 123-4567
        </p>
        <p>
          Enable two-factor authentication for enhanced security. We recommend
          reviewing your settings regularly to ensure your account information
          is up to date and secure.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  argTypes: {
    defaultSelected: {
      control: 'select',
      options: ['overview', 'settings', 'empty'],
    },
  },
  args: {
    defaultSelected: 'overview',
    variant: 'underline',
    options: [
      { label: 'Overview', tab: 'overview' },
      { label: 'Settings', tab: 'settings' },
      {
        label: (
          <span className="df-flex df-gap-2 df-items-center df-justify-center">
            Notifications
            <DChip
              color="info"
              style={{
                '--df-chip-font-size': '10px',
                lineHeight: 1,
              } as CSSProperties}
              className="df-p-1"
              text="2"
            />
          </span>
        ),
        tab: 'empty',
      },
    ],
    className: 'mb-8',
    vertical: false,
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="profile">
        <h4 className="df-mb-4">Profile Information</h4>
        <p>
          Keep your personal information up to date. This information is used
          to verify your identity and communicate important account updates.
        </p>
        <p className="df-mb-2">
          <strong>Full Name:</strong>
          {' '}
          John Doe
        </p>
        <p className="df-mb-2">
          <strong>Date of Birth:</strong>
          {' '}
          January 15, 1990
        </p>
        <p className="df-mb-2">
          <strong>Address:</strong>
          {' '}
          123 Main Street, Apt 4B, New York, NY 10001
        </p>
        <p>
          Make sure all information is accurate to avoid any service
          interruptions. You can update these details at any time.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="security">
        <h4 className="df-mb-4">Security Settings</h4>
        <p>
          Protect your account with robust security measures. We recommend
          enabling all available security features to keep your account safe
          from unauthorized access.
        </p>
        <p className="df-mb-2">
          <strong>Two-Factor Authentication:</strong>
          {' '}
          Enabled
        </p>
        <p className="df-mb-2">
          <strong>Last Password Change:</strong>
          {' '}
          February 28, 2024
        </p>
        <p className="df-mb-2">
          <strong>Login Alerts:</strong>
          {' '}
          Enabled via email and SMS
        </p>
        <p>
          Review your security settings regularly and update your password
          every 90 days for optimal account protection.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'security',
    className: 'me-8',
    options: [
      { label: 'Profile', tab: 'profile' },
      { label: 'Security', tab: 'security' },
      { label: 'Privacy', tab: 'empty' },
    ],
    vertical: true,
  },
};

export const Pills: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="df-mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="df-mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="df-mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="df-mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="df-mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="df-mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'history',
    options: [
      { label: 'Details', tab: 'details' },
      { label: 'History', tab: 'history' },
      { label: 'Reports', tab: 'empty' },
    ],
    vertical: false,
    variant: 'pills',
    className: 'mb-8',
  },
};

export const ToggleButtonGroup: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="df-mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="df-mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="df-mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="df-mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="df-mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="df-mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'history',
    options: [
      { label: 'Details', tab: 'details' },
      { label: 'History', tab: 'history' },
      { label: 'Reports', tab: 'empty' },
    ],
    vertical: false,
    variant: 'toggle-button-group',
    className: 'mb-8 nav-fill',
  },
};

export const PillsWithIcons: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="df-mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="df-mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="df-mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="df-mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="df-mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="df-mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'history',
    options: [
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="Info" />
            Detail
          </span>),
        tab: 'details',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="FileCheck" />
            History
          </span>),
        tab: 'history',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="FlagTriangleLeft" />
            Reports
          </span>),
        tab: 'empty',
      },
    ],
    vertical: false,
    variant: 'pills',
    className: 'mb-8',
  },
};

export const PillsWithIconsFull: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="details">
        <h4 className="df-mb-4">Transaction Details</h4>
        <p>
          Access detailed information about your most recent transactions,
          including merchant information, transaction amounts, and processing
          status.
        </p>
        <p className="df-mb-2">
          <strong>Latest Transaction:</strong>
          {' '}
          Coffee Shop - $4.50 (March 20, 2024)
        </p>
        <p className="df-mb-2">
          <strong>Pending:</strong>
          {' '}
          Online Purchase - $89.99 (Processing)
        </p>
        <p>
          All transactions are processed securely and typically appear in your
          account within 1-2 business days. You can dispute any unauthorized
          transactions directly from this section.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="history">
        <h4 className="df-mb-4">Transaction History</h4>
        <p>
          Review your complete transaction history spanning the last 12 months.
          You can filter by date range, amount, merchant, or transaction type
          to find specific entries.
        </p>
        <p className="df-mb-2">
          <strong>Total Transactions (Last 30 days):</strong>
          {' '}
          47
        </p>
        <p className="df-mb-2">
          <strong>Total Spent:</strong>
          {' '}
          $2,340.50
        </p>
        <p>
          Export your transaction history to CSV or PDF format for your records.
          Historical data older than 12 months can be requested through customer
          support.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'history',
    options: [
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="Info" />
            Detail
          </span>),
        tab: 'details',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="FileCheck" />
            History
          </span>),
        tab: 'history',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="FlagTriangleLeft" />
            Reports
          </span>),
        tab: 'reports',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="ChartColumn" />
            Activities
          </span>),
        tab: 'activities',
      },
      {
        label: (
          <span className="df-flex df-flex-col df-gap-2">
            <DIcon icon="ChartPie" />
            Products
          </span>),
        tab: 'products',
      },
    ],
    vertical: false,
    variant: 'pills',
    className: 'mb-8 nav-fill',
  },
};

export const VerticalPills: Story = {
  decorators: [
    (Story) => (
      <DBox style={{ width: '800px', height: '400px' }}>
        <Story />
      </DBox>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="general">
        <h4 className="df-mb-4">General Settings</h4>
        <p>
          Customize your application experience with these general settings.
          Choose your preferred language, time zone, and display options to
          personalize your interface.
        </p>
        <p className="df-mb-2">
          <strong>Language:</strong>
          {' '}
          English (US)
        </p>
        <p className="df-mb-2">
          <strong>Time Zone:</strong>
          {' '}
          Eastern Standard Time (EST)
        </p>
        <p className="df-mb-2">
          <strong>Currency Display:</strong>
          {' '}
          USD ($)
        </p>
        <p>
          These settings will be applied across all your devices. Changes take
          effect immediately and are synchronized automatically.
        </p>
      </DTabs.Tab>
      <DTabs.Tab tab="notifications">
        <h4 className="df-mb-4">Notification Preferences</h4>
        <p>
          Control how you receive important updates and alerts. You can choose
          to receive notifications via email, SMS, or push notifications on
          your mobile device.
        </p>
        <p className="df-mb-2">
          <strong>Transaction Alerts:</strong>
          {' '}
          Enabled for amounts over $100
        </p>
        <p className="df-mb-2">
          <strong>Marketing Communications:</strong>
          {' '}
          Opted out
        </p>
        <p className="df-mb-2">
          <strong>Security Alerts:</strong>
          {' '}
          Enabled (Email + SMS)
        </p>
        <p>
          We recommend keeping security alerts enabled to stay informed about
          any suspicious activity on your account. You can adjust notification
          frequency in advanced settings.
        </p>
      </DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'notifications',
    options: [
      { label: 'General', tab: 'general' },
      { label: 'Notifications', tab: 'notifications' },
      { label: 'Advanced', tab: 'empty' },
    ],
    vertical: true,
    variant: 'pills',
    className: 'me-8',
  },
};

export const Tabs: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '800px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DBox className="df-p-8" style={{ width: '800px' }}>
      <DTabs {...args}>
        <DTabs.Tab tab="dashboard">
          <h4 className="df-mb-4">Dashboard Overview</h4>
          <p>
            Welcome to your comprehensive dashboard. This central hub provides
            real-time insights into your account activity, financial health,
            and important notifications.
          </p>
          <p className="df-mb-2">
            <strong>Account Balance:</strong>
            {' '}
            $12,450.00 (+5.2% from last month)
          </p>
          <p className="df-mb-2">
            <strong>Monthly Spending:</strong>
            {' '}
            $3,240.75 (within budget)
          </p>
          <p className="df-mb-2">
            <strong>Upcoming Bills:</strong>
            {' '}
            3 payments due in the next 7 days
          </p>
          <p>
            Your financial summary shows a positive trend this quarter. Review
            your spending patterns and savings goals to maintain healthy
            financial habits. Quick actions are available below for common tasks
            like transfers and bill payments.
          </p>
        </DTabs.Tab>
        <DTabs.Tab tab="analytics">
          <h4 className="df-mb-4">Financial Analytics</h4>
          <p>
            Dive deep into your financial data with comprehensive analytics and
            visual reports. Track your spending patterns, identify savings
            opportunities, and monitor your progress toward financial goals.
          </p>
          <p className="df-mb-2">
            <strong>Spending by Category:</strong>
            {' '}
            Groceries (30%), Transportation (20%), Entertainment (15%)
          </p>
          <p className="df-mb-2">
            <strong>Monthly Trend:</strong>
            {' '}
            Average spending decreased by 8% compared to previous quarter
          </p>
          <p className="df-mb-2">
            <strong>Savings Rate:</strong>
            {' '}
            22% of income (above recommended 20% target)
          </p>
          <p>
            Your spending analysis reveals opportunities to optimize your budget.
            Consider reviewing recurring subscriptions and discretionary expenses.
            Export detailed reports to share with your financial advisor or for
            tax preparation purposes.
          </p>
        </DTabs.Tab>
      </DTabs>
    </DBox>
  ),
  args: {
    defaultSelected: 'analytics',
    options: [
      { label: 'Dashboard', tab: 'dashboard' },
      { label: 'Analytics', tab: 'analytics' },
      { label: 'Reports', tab: 'empty' },
    ],
    vertical: false,
    variant: 'tabs',
    className: 'mb-8',
  },
};

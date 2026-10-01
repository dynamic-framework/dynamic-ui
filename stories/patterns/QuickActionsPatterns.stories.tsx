import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DBox,
  DChip,
  DIcon,
  DLayout,
  DListGroup,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta = {
  title: 'Patterns/Quick Actions',
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: `
This story showcases quick action patterns commonly used in financial applications.

Quick actions provide users with fast access to frequently used features like transfers, payments, loans, and support.

### Common Use Cases:

- Dashboard quick access buttons
- Main menu shortcuts
- Feature discovery
- Onboarding flows
- Mobile app home screens
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const BasicQuickActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Basic quick action grid with 4 common banking actions.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Quick Actions</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="df-mb-3 df-text-primary df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Transfer</h6>
            <small className="df-text-muted df-text-center">Send money easily</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="df-mb-3 df-text-success df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Pay Bills</h6>
            <small className="df-text-muted df-text-center">Manage payments</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2.5rem" className="df-mb-3 df-text-info df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Loans</h6>
            <small className="df-text-muted df-text-center">Apply for credit</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CircleQuestionMark" hasCircle size="2.5rem" className="df-mb-3 df-text-indigo-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Help</h6>
            <small className="df-text-muted df-text-center">Support & FAQs</small>
          </button>
        </DLayout.Pane>
      </DLayout>
    </DBox>
  ),
};

export const ExtendedQuickActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Extended quick actions grid with 8 options for a complete dashboard.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">All Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="df-mb-3 df-text-primary df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Transfer</h6>
            <small className="df-text-muted df-text-center">Send money</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Download" hasCircle size="2.5rem" className="df-mb-3 df-text-success df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Deposit</h6>
            <small className="df-text-muted df-text-center">Add funds</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="df-mb-3 df-text-info df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Pay Bills</h6>
            <small className="df-text-muted df-text-center">Manage payments</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2.5rem" className="df-mb-3 df-text-purple-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Cards</h6>
            <small className="df-text-muted df-text-center">Manage cards</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="TrendingUp" hasCircle size="2.5rem" className="df-mb-3 df-text-teal-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Investments</h6>
            <small className="df-text-muted df-text-center">Grow wealth</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Wallet" hasCircle size="2.5rem" className="df-mb-3 df-text-orange-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Loans</h6>
            <small className="df-text-muted df-text-center">Apply for credit</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Shield" hasCircle size="2.5rem" className="df-mb-3 df-text-indigo-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Insurance</h6>
            <small className="df-text-muted df-text-center">Protect assets</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Headset" hasCircle size="2.5rem" className="df-mb-3 df-text-pink-500 df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Support</h6>
            <small className="df-text-muted df-text-center">24/7 assistance</small>
          </button>
        </DLayout.Pane>
      </DLayout>
    </DBox>
  ),
};

export const WithHoverEffects: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Quick actions with hover effects and shadow for better interactivity.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-hover:bg-muted"
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="df-mb-3 df-text-primary df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Transfer Money</h6>
            <small className="df-text-muted df-text-center">Between accounts</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-hover:bg-muted"
            onClick={() => {}}
          >
            <DIcon icon="Zap" hasCircle size="2.5rem" className="df-mb-3 df-text-warning df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Pay Services</h6>
            <small className="df-text-muted df-text-center">Utilities & more</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-hover:bg-muted"
            onClick={() => {}}
          >
            <DIcon icon="DollarSign" hasCircle size="2.5rem" className="df-mb-3 df-text-success df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Request Credit</h6>
            <small className="df-text-muted df-text-center">Instant approval</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-hover:bg-muted"
            onClick={() => {}}
          >
            <DIcon icon="MessageCircle" hasCircle size="2.5rem" className="df-mb-3 df-text-info df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Support</h6>
            <small className="df-text-muted df-text-center">We&apos;re here to help</small>
          </button>
        </DLayout.Pane>
      </DLayout>
    </DBox>
  ),
};

export const WithBadges: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Quick actions with notification badges and status indicators using DChip.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Your Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="df-mb-3 df-text-primary df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Transfer</h6>
            <small className="df-text-muted df-text-center">Send money now</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="3" color="danger" className="df-absolute df-top-0 df-end-0 df-m-2" />
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="df-mb-3 df-text-warning df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Bills</h6>
            <small className="df-text-muted df-text-center">3 bills pending</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="5" color="info" className="df-absolute df-top-0 df-end-0 df-m-2" />
            <DIcon icon="Mail" hasCircle size="2.5rem" className="df-mb-3 df-text-info df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Messages</h6>
            <small className="df-text-muted df-text-center">5 unread</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-4 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full df-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="New" color="success" className="df-absolute df-top-0 df-end-0 df-m-2" />
            <DIcon icon="Gift" hasCircle size="2.5rem" className="df-mb-3 df-text-success df-bg-muted" />
            <h6 className="df-mb-1 df-text-center">Offers</h6>
            <small className="df-text-muted df-text-center">Special deals</small>
          </button>
        </DLayout.Pane>
      </DLayout>
    </DBox>
  ),
};

export const CompactGrid: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compact grid layout with 6 actions in 2 rows for space-constrained layouts.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Quick Access</h5>
      <DLayout gap={2}>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Send" hasCircle size="2rem" className="df-mb-2 df-text-primary df-bg-muted" />
            <small className="df-fw-semibold df-text-center">Transfer</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2rem" className="df-mb-2 df-text-success df-bg-muted" />
            <small className="df-fw-semibold df-text-center">Pay</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Smartphone" hasCircle size="2rem" className="df-mb-2 df-text-info df-bg-muted" />
            <small className="df-fw-semibold df-text-center">Recharge</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="TrendingUp" hasCircle size="2rem" className="df-mb-2 df-text-purple-500 df-bg-muted" />
            <small className="df-fw-semibold df-text-center">Invest</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Shield" hasCircle size="2rem" className="df-mb-2 df-text-orange-500 df-bg-muted" />
            <small className="df-fw-semibold df-text-center">Insurance</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="df-flex df-flex-col df-items-center df-justify-center df-p-3 df-bg-surface df-border-1 df-rounded-control df-no-underline df-w-full df-h-full"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Grid" hasCircle size="2rem" className="df-mb-2 df-bg-muted" />
            <small className="df-fw-semibold df-text-center">More</small>
          </button>
        </DLayout.Pane>
      </DLayout>
    </DBox>
  ),
};

export const SidebarListBasic: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Vertical list layout using DListGroup flush for sidebar placement.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Quick Actions Menu</h5>
      <div className="df-bg-surface df-border-1 df-rounded-control" style={{ maxWidth: '320px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="2rem" className="df-me-3 df-text-primary df-bg-muted" />
              <div>
                <div className="df-fw-semibold">Transfer Money</div>
                <small className="df-text-muted">Send funds instantly</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Receipt" hasCircle size="2rem" className="df-me-3 df-text-success df-bg-muted" />
              <div>
                <div className="df-fw-semibold">Pay Bills</div>
                <small className="df-text-muted">Manage your payments</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Download" hasCircle size="2rem" className="df-me-3 df-text-info df-bg-muted" />
              <div>
                <div className="df-fw-semibold">Deposit Check</div>
                <small className="df-text-muted">Mobile deposit</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="CreditCard" hasCircle size="2rem" className="df-me-3 df-text-warning df-bg-muted" />
              <div>
                <div className="df-fw-semibold">Request Loan</div>
                <small className="df-text-muted">Apply for credit</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="HelpCircle" hasCircle size="2rem" className="df-me-3 df-bg-muted" />
              <div>
                <div className="df-fw-semibold">Help & Support</div>
                <small className="df-text-muted">24/7 assistance</small>
              </div>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </div>
    </DBox>
  ),
};

export const SidebarListWithIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Compact sidebar list with icons and minimal text.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Sidebar Menu</h5>
      <div className="df-bg-surface df-border-1 df-rounded-control" style={{ maxWidth: '280px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="LayoutDashboard" hasCircle size="1rem" className="df-me-3 df-text-primary df-bg-muted" />
              <span className="df-fw-medium">Dashboard</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Wallet" hasCircle size="1rem" className="df-me-3 df-text-success df-bg-muted" />
              <span className="df-fw-medium">My Accounts</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="1rem" className="df-me-3 df-text-info df-bg-muted" />
              <span className="df-fw-medium">Transfers</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="df-me-3 df-text-purple-500 df-bg-muted" />
              <span className="df-fw-medium">Payments</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="df-me-3 df-text-orange-500 df-bg-muted" />
              <span className="df-fw-medium">Cards</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="DollarSign" hasCircle size="1rem" className="df-me-3 df-text-teal-500 df-bg-muted" />
              <span className="df-fw-medium">Loans</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Settings" hasCircle size="1rem" className="df-me-3 df-bg-muted" />
              <span className="df-fw-medium">Settings</span>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </div>
    </DBox>
  ),
};

export const SidebarListWithBadges: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Sidebar list with notification badges and counters using DChip.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Navigation with Notifications</h5>
      <div className="df-bg-surface df-border-1 df-rounded-control" style={{ maxWidth: '300px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-justify-between df-py-2">
              <div className="df-flex df-items-center">
                <DIcon icon="Home" hasCircle size="1rem" className="df-me-3 df-text-primary df-bg-muted" />
                <span className="df-fw-medium">Dashboard</span>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-justify-between df-py-2">
              <div className="df-flex df-items-center">
                <DIcon icon="Mail" hasCircle size="1rem" className="df-me-3 df-text-info df-bg-muted" />
                <span className="df-fw-medium">Messages</span>
              </div>
              <DChip text="5" color="danger" />
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-justify-between df-py-2">
              <div className="df-flex df-items-center">
                <DIcon icon="Receipt" hasCircle size="1rem" className="df-me-3 df-text-warning df-bg-muted" />
                <span className="df-fw-medium">Pending Bills</span>
              </div>
              <DChip text="3" color="warning" />
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-justify-between df-py-2">
              <div className="df-flex df-items-center">
                <DIcon icon="List" hasCircle size="1rem" className="df-me-3 df-text-success df-bg-muted" />
                <span className="df-fw-medium">Transactions</span>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-justify-between df-py-2">
              <div className="df-flex df-items-center">
                <DIcon icon="Gift" hasCircle size="1rem" className="df-me-3 df-text-pink-500 df-bg-muted" />
                <span className="df-fw-medium">Special Offers</span>
              </div>
              <DChip text="New" color="success" />
            </div>
          </DListGroup.Item>
        </DListGroup>
      </div>
    </DBox>
  ),
};

export const SidebarListGrouped: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Sidebar list with grouped sections for better organization.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Organized Sidebar Menu</h5>
      <div className="df-bg-surface df-border-1 df-rounded-control" style={{ maxWidth: '300px' }}>
        <div className="df-p-3 df-border-b-1">
          <small className="df-text-muted df-text-uppercase df-fw-semibold">Main Menu</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="LayoutDashboard" hasCircle size="1rem" className="df-me-3 df-text-primary df-bg-muted" />
              <span className="df-fw-medium">Dashboard</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Wallet" hasCircle size="1rem" className="df-me-3 df-text-success df-bg-muted" />
              <span className="df-fw-medium">Accounts</span>
            </div>
          </DListGroup.Item>
        </DListGroup>

        <div className="df-p-3 df-border-b-1 df-border-t-1">
          <small className="df-text-muted df-text-uppercase df-fw-semibold">Services</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="1rem" className="df-me-3 df-text-info df-bg-muted" />
              <span className="df-fw-medium">Transfer</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Receipt" hasCircle size="1rem" className="df-me-3 df-text-warning df-bg-muted" />
              <span className="df-fw-medium">Pay Bills</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="df-me-3 df-text-purple-500 df-bg-muted" />
              <span className="df-fw-medium">Loans</span>
            </div>
          </DListGroup.Item>
        </DListGroup>

        <div className="df-p-3 df-border-b-1 df-border-t-1">
          <small className="df-text-muted df-text-uppercase df-fw-semibold">Support</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="HelpCircle" hasCircle size="1rem" className="df-me-3 df-bg-muted" />
              <span className="df-fw-medium">Help Center</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="df-flex df-items-center df-py-2">
              <DIcon icon="Settings" hasCircle size="1rem" className="df-me-3 df-bg-muted" />
              <span className="df-fw-medium">Settings</span>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </div>
    </DBox>
  ),
};

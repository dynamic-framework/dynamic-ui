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
  title: 'Patterns/Quick Actions Patterns',
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
      <h5 className="mb-3">Quick Actions</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="mb-3 text-primary" />
            <h6 className="mb-1 text-center">Transfer</h6>
            <small className="text-body-secondary text-center">Send money easily</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="mb-3 text-success" />
            <h6 className="mb-1 text-center">Pay Bills</h6>
            <small className="text-body-secondary text-center">Manage payments</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2.5rem" className="mb-3 text-info" />
            <h6 className="mb-1 text-center">Loans</h6>
            <small className="text-body-secondary text-center">Apply for credit</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CircleQuestionMark" hasCircle size="2.5rem" className="mb-3 text-indigo-500" />
            <h6 className="mb-1 text-center">Help</h6>
            <small className="text-body-secondary text-center">Support & FAQs</small>
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
      <h5 className="mb-3">All Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="mb-3 text-primary" />
            <h6 className="mb-1 text-center">Transfer</h6>
            <small className="text-body-secondary text-center">Send money</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Download" hasCircle size="2.5rem" className="mb-3 text-success" />
            <h6 className="mb-1 text-center">Deposit</h6>
            <small className="text-body-secondary text-center">Add funds</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="mb-3 text-info" />
            <h6 className="mb-1 text-center">Pay Bills</h6>
            <small className="text-body-secondary text-center">Manage payments</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2.5rem" className="mb-3 text-purple" />
            <h6 className="mb-1 text-center">Cards</h6>
            <small className="text-body-secondary text-center">Manage cards</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="TrendingUp" hasCircle size="2.5rem" className="mb-3 text-teal" />
            <h6 className="mb-1 text-center">Investments</h6>
            <small className="text-body-secondary text-center">Grow wealth</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Wallet" hasCircle size="2.5rem" className="mb-3 text-orange" />
            <h6 className="mb-1 text-center">Loans</h6>
            <small className="text-body-secondary text-center">Apply for credit</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Shield" hasCircle size="2.5rem" className="mb-3 text-indigo" />
            <h6 className="mb-1 text-center">Insurance</h6>
            <small className="text-body-secondary text-center">Protect assets</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Headset" hasCircle size="2.5rem" className="mb-3 text-pink" />
            <h6 className="mb-1 text-center">Support</h6>
            <small className="text-body-secondary text-center">24/7 assistance</small>
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
      <h5 className="mb-3">Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 hover-bg-gray-50"
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="mb-3 text-primary" />
            <h6 className="mb-1 text-center">Transfer Money</h6>
            <small className="text-body-secondary text-center">Between accounts</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 hover-bg-gray-50"
            onClick={() => {}}
          >
            <DIcon icon="Zap" hasCircle size="2.5rem" className="mb-3 text-warning" />
            <h6 className="mb-1 text-center">Pay Services</h6>
            <small className="text-body-secondary text-center">Utilities & more</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 hover-bg-gray-50"
            onClick={() => {}}
          >
            <DIcon icon="DollarSign" hasCircle size="2.5rem" className="mb-3 text-success" />
            <h6 className="mb-1 text-center">Request Credit</h6>
            <small className="text-body-secondary text-center">Instant approval</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 hover-bg-gray-50"
            onClick={() => {}}
          >
            <DIcon icon="MessageCircle" hasCircle size="2.5rem" className="mb-3 text-info" />
            <h6 className="mb-1 text-center">Support</h6>
            <small className="text-body-secondary text-center">We&apos;re here to help</small>
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
      <h5 className="mb-3">Your Services</h5>
      <DLayout gap={3}>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 position-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="ArrowLeftRight" hasCircle size="2.5rem" className="mb-3 text-primary" />
            <h6 className="mb-1 text-center">Transfer</h6>
            <small className="text-body-secondary text-center">Send money now</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 position-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="3" color="danger" className="position-absolute top-0 end-0 m-2" />
            <DIcon icon="Receipt" hasCircle size="2.5rem" className="mb-3 text-warning" />
            <h6 className="mb-1 text-center">Bills</h6>
            <small className="text-body-secondary text-center">3 bills pending</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 position-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="5" color="info" className="position-absolute top-0 end-0 m-2" />
            <DIcon icon="Mail" hasCircle size="2.5rem" className="mb-3 text-info" />
            <h6 className="mb-1 text-center">Messages</h6>
            <small className="text-body-secondary text-center">5 unread</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="6" colsMd="3">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-4 bg-white border rounded text-decoration-none w-100 h-100 position-relative"
            style={{ minHeight: '160px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DChip text="New" color="success" className="position-absolute top-0 end-0 m-2" />
            <DIcon icon="Gift" hasCircle size="2.5rem" className="mb-3 text-success" />
            <h6 className="mb-1 text-center">Offers</h6>
            <small className="text-body-secondary text-center">Special deals</small>
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
      <h5 className="mb-3">Quick Access</h5>
      <DLayout gap={2}>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Send" hasCircle size="2rem" className="mb-2 text-primary" />
            <small className="fw-semibold text-center">Transfer</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="CreditCard" hasCircle size="2rem" className="mb-2 text-success" />
            <small className="fw-semibold text-center">Pay</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Smartphone" hasCircle size="2rem" className="mb-2 text-info" />
            <small className="fw-semibold text-center">Recharge</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="TrendingUp" hasCircle size="2rem" className="mb-2 text-purple" />
            <small className="fw-semibold text-center">Invest</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Shield" hasCircle size="2rem" className="mb-2 text-orange" />
            <small className="fw-semibold text-center">Insurance</small>
          </button>
        </DLayout.Pane>
        <DLayout.Pane cols="4" colsMd="2">
          <button
            type="button"
            className="d-flex flex-column align-items-center justify-content-center p-3 bg-white border rounded text-decoration-none w-100 h-100"
            style={{ minHeight: '120px', cursor: 'pointer' }}
            onClick={() => {}}
          >
            <DIcon icon="Grid" hasCircle size="2rem" className="mb-2 text-secondary" />
            <small className="fw-semibold text-center">More</small>
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
      <h5 className="mb-3">Quick Actions Menu</h5>
      <div className="bg-white border rounded" style={{ maxWidth: '320px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="2rem" className="me-3 text-primary" />
              <div>
                <div className="fw-semibold">Transfer Money</div>
                <small className="text-body-secondary">Send funds instantly</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Receipt" hasCircle size="2rem" className="me-3 text-success" />
              <div>
                <div className="fw-semibold">Pay Bills</div>
                <small className="text-body-secondary">Manage your payments</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Download" hasCircle size="2rem" className="me-3 text-info" />
              <div>
                <div className="fw-semibold">Deposit Check</div>
                <small className="text-body-secondary">Mobile deposit</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="CreditCard" hasCircle size="2rem" className="me-3 text-warning" />
              <div>
                <div className="fw-semibold">Request Loan</div>
                <small className="text-body-secondary">Apply for credit</small>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="HelpCircle" hasCircle size="2rem" className="me-3 text-secondary" />
              <div>
                <div className="fw-semibold">Help & Support</div>
                <small className="text-body-secondary">24/7 assistance</small>
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
      <h5 className="mb-3">Sidebar Menu</h5>
      <div className="bg-white border rounded" style={{ maxWidth: '280px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="LayoutDashboard" hasCircle size="1rem" className="me-3 text-primary" />
              <span className="fw-medium">Dashboard</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Wallet" hasCircle size="1rem" className="me-3 text-success" />
              <span className="fw-medium">My Accounts</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="1rem" className="me-3 text-info" />
              <span className="fw-medium">Transfers</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="me-3 text-purple" />
              <span className="fw-medium">Payments</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="me-3 text-orange" />
              <span className="fw-medium">Cards</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="DollarSign" hasCircle size="1rem" className="me-3 text-teal" />
              <span className="fw-medium">Loans</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Settings" hasCircle size="1rem" className="me-3 text-secondary" />
              <span className="fw-medium">Settings</span>
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
      <h5 className="mb-3">Navigation with Notifications</h5>
      <div className="bg-white border rounded" style={{ maxWidth: '300px' }}>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <DIcon icon="Home" hasCircle size="1rem" className="me-3 text-primary" />
                <span className="fw-medium">Dashboard</span>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <DIcon icon="Mail" hasCircle size="1rem" className="me-3 text-info" />
                <span className="fw-medium">Messages</span>
              </div>
              <DChip text="5" color="danger" />
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <DIcon icon="Receipt" hasCircle size="1rem" className="me-3 text-warning" />
                <span className="fw-medium">Pending Bills</span>
              </div>
              <DChip text="3" color="warning" />
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <DIcon icon="List" hasCircle size="1rem" className="me-3 text-success" />
                <span className="fw-medium">Transactions</span>
              </div>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center justify-content-between py-2">
              <div className="d-flex align-items-center">
                <DIcon icon="Gift" hasCircle size="1rem" className="me-3 text-pink" />
                <span className="fw-medium">Special Offers</span>
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
      <h5 className="mb-3">Organized Sidebar Menu</h5>
      <div className="bg-white border rounded" style={{ maxWidth: '300px' }}>
        <div className="p-3 border-bottom">
          <small className="text-body-secondary text-uppercase fw-semibold">Main Menu</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="LayoutDashboard" hasCircle size="1rem" className="me-3 text-primary" />
              <span className="fw-medium">Dashboard</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Wallet" hasCircle size="1rem" className="me-3 text-success" />
              <span className="fw-medium">Accounts</span>
            </div>
          </DListGroup.Item>
        </DListGroup>

        <div className="p-3 border-bottom border-top">
          <small className="text-body-secondary text-uppercase fw-semibold">Services</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="ArrowLeftRight" hasCircle size="1rem" className="me-3 text-info" />
              <span className="fw-medium">Transfer</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Receipt" hasCircle size="1rem" className="me-3 text-warning" />
              <span className="fw-medium">Pay Bills</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="CreditCard" hasCircle size="1rem" className="me-3 text-purple" />
              <span className="fw-medium">Loans</span>
            </div>
          </DListGroup.Item>
        </DListGroup>

        <div className="p-3 border-bottom border-top">
          <small className="text-body-secondary text-uppercase fw-semibold">Support</small>
        </div>
        <DListGroup flush>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="HelpCircle" hasCircle size="1rem" className="me-3 text-secondary" />
              <span className="fw-medium">Help Center</span>
            </div>
          </DListGroup.Item>
          <DListGroup.Item action onClick={() => {}}>
            <div className="d-flex align-items-center py-2">
              <DIcon icon="Settings" hasCircle size="1rem" className="me-3 text-secondary" />
              <span className="fw-medium">Settings</span>
            </div>
          </DListGroup.Item>
        </DListGroup>
      </div>
    </DBox>
  ),
};

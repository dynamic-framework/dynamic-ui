import { Meta, StoryObj } from '@storybook/react-vite';
import {
  DocsContainer,
  DocsContainerProps,
} from '@storybook/addon-docs/blocks';

import {
  DBadge,
  DBox,
  DButton,
  DCollapse,
  DDropdown,
  DIcon,
  DListGroup,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

function CustomDocs(props: DocsContainerProps) {
  return (
    <>
      <style>
        {`
          .sbdocs-content {
            max-width: unset;
          }
        `}
      </style>
      <DocsContainer {...props} />
    </>
  );
}

const meta: Meta<typeof DListGroup> = {
  title: 'Patterns/List Group',
  component: DListGroup,
  parameters: {
    docs: {
      page: DocsTemplate,
      container: CustomDocs,
      description: {
        component: `
This story showcases different list-based patterns for displaying financial information like accounts, transactions, balances, and more.

These patterns use \`DListGroup\` as the foundation to create organized, scannable lists of financial data.

### Common Use Cases:

- Account summaries with balances
- Transaction histories
- Payment methods
- Credit/debit card lists
- Investment portfolios
- Bill payments
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DListGroup>;

export const AccountList: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display a list of accounts with names, types, and current balances.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">My Accounts</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-justify-between df-items-start df-w-full">
            <div>
              <h6 className="df-mb-1">Checking Account</h6>
              <small className="df-text-muted">****1234</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$5,248.32</div>
              <small className="df-text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Savings Account</h6>
              <small className="df-text-muted">****5678</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$12,847.90</div>
              <small className="df-text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Credit Card</h6>
              <small className="df-text-muted">****9012</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold df-text-danger">-$1,523.45</div>
              <small className="df-text-muted">Current Balance</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Investment Account</h6>
              <small className="df-text-muted">****3456</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$45,892.15</div>
              <small className="df-text-muted">Market Value</small>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const TransactionHistory: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display recent transactions with dates, descriptions, and amounts.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h6 className="df-mb-1">
                <DBadge soft color="info" className="df-me-1" text="Food" />
                Starbucks Coffee
              </h6>
              <small className="df-text-muted">Today, 9:45 AM</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">-$5.75</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h6 className="df-mb-1">
                <DBadge soft color="info" className="df-me-1" text="Shopping" />
                Amazon Purchase
              </h6>
              <small className="df-text-muted">Yesterday, 3:20 PM</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">-$127.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h6 className="df-mb-1">
                <DBadge soft color="success" className="df-me-1" text="Income" />
                Salary Deposit
              </h6>
              <small className="df-text-muted">Oct 1, 2024</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">+$4,500.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h6 className="df-mb-1">
                <DBadge soft color="info" className="df-me-1" text="Utilities" />
                Electric Bill
              </h6>
              <small className="df-text-muted">Sep 28, 2024</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">-$89.32</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h6 className="df-mb-1">
                <DBadge soft color="info" className="df-me-1" text="Transfer" />
                Transfer to Savings
              </h6>
              <small className="df-text-muted">Sep 25, 2024</small>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">-$500.00</div>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const PaymentMethods: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display saved payment methods with card details and status.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Payment Methods</h5>
      <DListGroup>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <div className="df-me-3">
                <DIcon icon="CreditCard" color="success" hasCircle />
              </div>
              <div>
                <h6 className="df-mb-1">Visa •••• 4532</h6>
                <small className="df-text-muted">Expires 12/25</small>
                <div className="df-mt-1">
                  <DBadge color="primary" soft text="Primary" />
                </div>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="df-text-subtle" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <div className="df-me-3">
                <DIcon icon="CreditCard" color="info" hasCircle />
              </div>
              <div>
                <h6 className="df-mb-1">Mastercard •••• 8791</h6>
                <small className="df-text-muted">Expires 08/26</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="df-text-subtle" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <div className="df-me-3">
                <DIcon icon="Landmark" color="warning" hasCircle />
              </div>
              <div>
                <h6 className="df-mb-1">Bank Account ****1234</h6>
                <small className="df-text-muted">Checking Account</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="df-text-subtle" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-items-center df-flex df-justify-center df-gap-2">
            <DIcon icon="PlusCircle" />
            Add New Payment Method
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const BillPayments: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display upcoming bill payments with due dates and amounts.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Upcoming Bills</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-flex df-items-start">
              <div className="df-me-3">
                <DIcon icon="Zap" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="df-mb-1">Electric Company</h6>
                <small className="df-text-muted">Due: Nov 15, 2024</small>
                <div className="df-mt-1">
                  <DBadge soft color="warning" text="Due Sun" />
                </div>
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$92.45</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-flex df-items-start">
              <div className="df-me-3">
                <DIcon icon="Wifi" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="df-mb-1">Internet Service</h6>
                <small className="df-text-muted">Due: Nov 18, 2024</small>
                <div className="df-mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$79.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-flex df-items-start">
              <div className="df-me-3">
                <DIcon hasCircle icon="Phone" size="1rem" />
              </div>
              <div>
                <h6 className="df-mb-1">Mobile Phone</h6>
                <small className="df-text-muted">Due: Nov 20, 2024</small>
                <div className="df-mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$65.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-flex df-items-start">
              <div className="df-me-3">
                <DIcon hasCircle icon="Shapes" size="1rem" />
              </div>
              <div>
                <h6 className="df-mb-1">Rent Payment</h6>
                <small className="df-text-muted">Due: Dec 1, 2024</small>
                <div className="df-mt-1">
                  <DBadge soft color="secondary" text="Upcoming" />
                </div>
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$1,500.00</div>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const InvestmentPortfolio: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Display investment holdings with current values and performance.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Investment Portfolio</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Apple Inc. (AAPL)</h6>
              <small className="df-text-muted">25 shares @ $178.32</small>
              <div className="df-mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$4,458.00</div>
              <small className="df-text-success">+$495.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Microsoft Corp. (MSFT)</h6>
              <small className="df-text-muted">15 shares @ $368.45</small>
              <div className="df-mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$5,526.75</div>
              <small className="df-text-success">+$423.50</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">Tesla Inc. (TSLA)</h6>
              <small className="df-text-muted">10 shares @ $242.18</small>
              <div className="df-mt-1">
                <DBadge soft color="danger" text="-$1,500.00" iconStart="ArrowDown" />
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$2,421.80</div>
              <small className="df-text-danger">-$80.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div>
              <h6 className="df-mb-1">S&P 500 Index Fund (VOO)</h6>
              <small className="df-text-muted">50 shares @ $412.90</small>
              <div className="df-mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="df-text-end">
              <div className="df-fw-semibold">$20,645.00</div>
              <small className="df-text-success">+$2,805.00</small>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
      <div className="df-mt-3 df-p-3 df-bg-surface df-rounded-control">
        <div className="df-flex df-justify-between">
          <strong>Total Portfolio Value:</strong>
          <span className="df-fs-heading-5 df-fw-semibold">$33,051.55</span>
        </div>
        <div className="df-flex df-justify-between df-mt-2">
          <span className="df-text-muted">Total Gain:</span>
          <span>+$3,643.50 (+12.4%)</span>
        </div>
      </div>
    </DBox>
  ),
};

export const AccountSummaryWithActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Interactive account list with clickable items for navigation.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Quick Actions</h5>
      <DListGroup>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <i className="bi bi-arrow-left-right df-fs-heading-4 df-text-primary df-me-3" />
              <div>
                <h6 className="df-mb-0">Transfer Money</h6>
                <small className="df-text-muted">Between your accounts</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <i className="bi bi-receipt df-fs-heading-4 df-text-success df-me-3" />
              <div>
                <h6 className="df-mb-0">Pay Bills</h6>
                <small className="df-text-muted">3 bills due this month</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <i className="bi bi-camera df-fs-heading-4 df-text-info df-me-3" />
              <div>
                <h6 className="df-mb-0">Deposit Check</h6>
                <small className="df-text-muted">Use mobile deposit</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="df-hover:bg-surface">
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <i className="bi bi-file-earmark-text df-fs-heading-4 df-text-warning df-me-3" />
              <div>
                <h6 className="df-mb-0">Statements</h6>
                <small className="df-text-muted">View and download</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const CollapsibleAccountDetails: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.',
      },
    },
  },
  render: () => (
    <div style={{ width: 800 }}>
      <h5 className="df-mb-3">Account Details</h5>
      <DListGroup className="df-gap-1">
        <DListGroup.Item className="df-p-0 df-border-0 df-block">
          <DCollapse
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Checking Account</h6>
                  <small className="df-text-muted">****1234</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">$5,248.32</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Type:</div>
                <div className="df-col-span-6 df-fw-semibold">Personal Checking</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****1234</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Balance:</div>
                <div className="df-col-span-6 df-fw-semibold">$5,248.32</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Pending:</div>
                <div className="df-col-span-6 df-fw-semibold">$150.00</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Opened:</div>
                <div className="df-col-span-6 df-fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="df-p-0 df-border-0 df-block">
          <DCollapse
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Savings Account</h6>
                  <small className="df-text-muted">****5678</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">$12,847.90</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Type:</div>
                <div className="df-col-span-6 df-fw-semibold">High Yield Savings</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****5678</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Balance:</div>
                <div className="df-col-span-6 df-fw-semibold">$12,847.90</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Interest Rate:</div>
                <div className="df-col-span-6 df-fw-semibold">4.5% APY</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Opened:</div>
                <div className="df-col-span-6 df-fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="df-p-0 df-border-0 df-block">
          <DCollapse
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Credit Card</h6>
                  <small className="df-text-muted">****9012</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">-$1,523.45</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Card Type:</div>
                <div className="df-col-span-6 df-fw-semibold">Visa Platinum</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Card Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****9012</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Current Balance:</div>
                <div className="df-col-span-6 df-fw-semibold">-$1,523.45</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Credit:</div>
                <div className="df-col-span-6 df-fw-semibold">$8,476.55</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Credit Limit:</div>
                <div className="df-col-span-6 df-fw-semibold">$10,000.00</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Payment Due:</div>
                <div className="df-col-span-6 df-fw-semibold">Nov 15, 2024</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
      </DListGroup>
    </div>
  ),
};

export const CollapsibleAccountDetails2: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Account Details</h5>
      <DListGroup>
        <DListGroup.Item className="df-p-0 df-block">
          <DCollapse
            className="df-shadow-none df-hover:bg-surface"
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Checking Account</h6>
                  <small className="df-text-muted">****1234</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">$5,248.32</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Type:</div>
                <div className="df-col-span-6 df-fw-semibold">Personal Checking</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****1234</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Balance:</div>
                <div className="df-col-span-6 df-fw-semibold df-text-success">$5,248.32</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Pending:</div>
                <div className="df-col-span-6 df-fw-semibold">$150.00</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Opened:</div>
                <div className="df-col-span-6 df-fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="df-p-0 df-block">
          <DCollapse
            className="df-shadow-none df-hover:bg-surface"
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Savings Account</h6>
                  <small className="df-text-muted">****5678</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">$12,847.90</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Type:</div>
                <div className="df-col-span-6 df-fw-semibold">High Yield Savings</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Account Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****5678</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Balance:</div>
                <div className="df-col-span-6 df-fw-semibold df-text-success">$12,847.90</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Interest Rate:</div>
                <div className="df-col-span-6 df-fw-semibold">4.5% APY</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Opened:</div>
                <div className="df-col-span-6 df-fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="df-p-0 df-block">
          <DCollapse
            className="df-shadow-none df-hover:bg-surface"
            Component={(
              <div className="df-flex df-w-full df-justify-between df-items-center">
                <div>
                  <h6 className="df-mb-1">Credit Card</h6>
                  <small className="df-text-muted">****9012</small>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">-$1,523.45</div>
                </div>
              </div>
            )}
          >
            <div className="df-pt-3 df-ps-2">
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Card Type:</div>
                <div className="df-col-span-6 df-fw-semibold">Visa Platinum</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Card Number:</div>
                <div className="df-col-span-6 df-fw-semibold">****9012</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Current Balance:</div>
                <div className="df-col-span-6 df-fw-semibold df-text-danger">-$1,523.45</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Available Credit:</div>
                <div className="df-col-span-6 df-fw-semibold">$8,476.55</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4 df-mb-2">
                <div className="df-col-span-6 df-text-muted">Credit Limit:</div>
                <div className="df-col-span-6 df-fw-semibold">$10,000.00</div>
              </div>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-6 df-text-muted">Payment Due:</div>
                <div className="df-col-span-6 df-fw-semibold">Nov 15, 2024</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const ListWithContextualActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'List items with contextual dropdown menus for actions.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Payees</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <DIcon icon="Zap" hasCircle size="1rem" color="info" className="df-me-3" />
              <div>
                <h6 className="df-mb-1">Electric Company</h6>
                <small className="df-text-muted">Auto-pay enabled</small>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'Make Payment',
                  icon: 'CreditCard',
                  onClick: () => {},
                },
                {
                  label: 'Edit Details',
                  icon: 'Edit',
                  onClick: () => {},
                },
                {
                  label: 'View History',
                  icon: 'ClockHistory',
                  onClick: () => {},
                },
                { label: '', isDivider: true },
                {
                  label: 'Remove Payee',
                  icon: 'Trash',
                  color: 'danger',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <DIcon icon="Wifi" hasCircle size="1rem" color="info" className="df-me-3" />
              <div>
                <h6 className="df-mb-1">Internet Service Provider</h6>
                <small className="df-text-muted">Auto-pay enabled</small>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'Make Payment',
                  icon: 'CreditCard',
                  onClick: () => {},
                },
                {
                  label: 'Edit Details',
                  icon: 'Edit',
                  onClick: () => {},
                },
                {
                  label: 'View History',
                  icon: 'ClockHistory',
                  onClick: () => {},
                },
                { label: '', isDivider: true },
                {
                  label: 'Remove Payee',
                  icon: 'Trash',
                  color: 'danger',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div className="df-flex df-items-center">
              <DIcon icon="Phone" hasCircle size="1rem" color="info" className="df-me-3" />
              <div>
                <h6 className="df-mb-1">Mobile Phone Company</h6>
                <small className="df-text-muted">Manual payment</small>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'Make Payment',
                  icon: 'CreditCard',
                  onClick: () => {},
                },
                {
                  label: 'Enable Auto-pay',
                  icon: 'ToggleOn',
                  onClick: () => {},
                },
                {
                  label: 'Edit Details',
                  icon: 'Edit',
                  onClick: () => {},
                },
                {
                  label: 'View History',
                  icon: 'ClockHistory',
                  onClick: () => {},
                },
                { label: '', isDivider: true },
                {
                  label: 'Remove Payee',
                  icon: 'Trash',
                  color: 'danger',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const TransactionsWithActions: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Transaction list with contextual actions for each item.',
      },
    },
  },
  render: () => (
    <DBox style={{ width: 800 }}>
      <h5 className="df-mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-grow">
              <div className="df-flex df-justify-between df-items-start">
                <div>
                  <h6 className="df-mb-1">Starbucks Coffee</h6>
                  <small className="df-text-muted">Today, 9:45 AM</small>
                  <div className="df-mt-1">
                    <DBadge size="sm" color="secondary" soft text="Groceries" />
                  </div>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">-$5.75</div>
                </div>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'View Details',
                  icon: 'Eye',
                  onClick: () => {},
                },
                {
                  label: 'Add Note',
                  icon: 'Pencil',
                  onClick: () => {},
                },
                {
                  label: 'Change Category',
                  icon: 'Tag',
                  onClick: () => {},
                },
                { label: '', isDivider: true },
                {
                  label: 'Dispute Transaction',
                  icon: 'ExclamationTriangle',
                  color: 'warning',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-grow">
              <div className="df-flex df-justify-between df-items-start">
                <div>
                  <h6 className="df-mb-1">Amazon Purchase</h6>
                  <small className="df-text-muted">Yesterday, 3:20 PM</small>
                  <div className="df-mt-1">
                    <DBadge size="sm" color="secondary" soft text="Shopping" />
                  </div>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">-$127.99</div>
                </div>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'View Details',
                  icon: 'Eye',
                  onClick: () => {},
                },
                {
                  label: 'Add Note',
                  icon: 'Pencil',
                  onClick: () => {},
                },
                {
                  label: 'Change Category',
                  icon: 'Tag',
                  onClick: () => {},
                },
                {
                  label: 'Track Package',
                  icon: 'Box',
                  onClick: () => {},
                },
                { label: '', isDivider: true },
                {
                  label: 'Cancel Transaction',
                  icon: 'XCircle',
                  color: 'danger',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="df-flex df-w-full df-justify-between df-items-start">
            <div className="df-grow">
              <div className="df-flex df-justify-between df-items-start">
                <div>
                  <h6 className="df-mb-1">Salary Deposit</h6>
                  <small className="df-text-muted">Oct 1, 2024</small>
                  <div className="df-mt-1">
                    <DBadge size="sm" color="secondary" soft text="Income" />
                  </div>
                </div>
                <div className="df-text-end df-me-3">
                  <div className="df-fw-semibold">+$127.99</div>
                </div>
              </div>
            </div>
            <DDropdown
              actions={[
                {
                  label: 'View Details',
                  icon: 'Eye',
                  onClick: () => {},
                },
                {
                  label: 'Add Note',
                  icon: 'Pencil',
                  onClick: () => {},
                },
                {
                  label: 'Download Receipt',
                  icon: 'Download',
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

export const CollapsibleWithList: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Account list with collapsible details using DCollapse component.',
      },
    },
  },
  render: () => (
    <div style={{ width: 1000 }} className="df-bg-primary-subtle df-p-8">
      <DCollapse
        defaultCollapsed={false}
        Component={(
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h5 className="df-mb-1">Accounts</h5>
              <small className="df-text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-2 df-flex df-gap-2 df-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Current</small>
                  <div className="df-fw-semibold">$5,248.32</div>
                  <small className="df-text-muted">Available: $5,248.32</small>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Next Payment</small>
                  <div className="df-fw-semibold">May 12, 2023</div>
                  <small className="df-text-muted">Amount: $5,248.32</small>
                </div>
                <div className="df-col-span-6 df-flex df-gap-2 df-items-center df-justify-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown
                    actions={[
                      {
                        label: 'View Details',
                        icon: 'Eye',
                        onClick: () => {},
                      },
                      {
                        label: 'Add Note',
                        icon: 'Pencil',
                        onClick: () => {},
                      },
                      {
                        label: 'Change Category',
                        icon: 'Tag',
                        onClick: () => {},
                      },
                    ]}
                  />
                </div>
              </div>
            </DListGroup.Item>
          ))}
        </DListGroup>
      </DCollapse>
      <DCollapse
        className="df-mt-4"
        Component={(
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h5 className="df-mb-1">Transactions</h5>
              <small className="df-text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-2 df-flex df-gap-2 df-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Current</small>
                  <div className="df-fw-semibold">$5,248.32</div>
                  <small className="df-text-muted">Available: $5,248.32</small>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Next Payment</small>
                  <div className="df-fw-semibold">May 12, 2023</div>
                  <small className="df-text-muted">Amount: $5,248.32</small>
                </div>
                <div className="df-col-span-6 df-flex df-gap-2 df-items-center df-justify-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown
                    actions={[
                      {
                        label: 'View Details',
                        icon: 'Eye',
                        onClick: () => {},
                      },
                      {
                        label: 'Add Note',
                        icon: 'Pencil',
                        onClick: () => {},
                      },
                      {
                        label: 'Change Category',
                        icon: 'Tag',
                        onClick: () => {},
                      },
                    ]}
                  />
                </div>
              </div>
            </DListGroup.Item>
          ))}
        </DListGroup>
      </DCollapse>
      <DCollapse
        className="df-mt-4"
        Component={(
          <div className="df-flex df-w-full df-justify-between df-items-center">
            <div>
              <h5 className="df-mb-1">Deposits</h5>
              <small className="df-text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="df-grid df-grid-cols-12 df-gap-4">
                <div className="df-col-span-2 df-flex df-gap-2 df-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Current</small>
                  <div className="df-fw-semibold">$5,248.32</div>
                  <small className="df-text-muted">Available: $5,248.32</small>
                </div>
                <div className="df-col-span-2">
                  <small className="df-text-muted">Next Payment</small>
                  <div className="df-fw-semibold">May 12, 2023</div>
                  <small className="df-text-muted">Amount: $5,248.32</small>
                </div>
                <div className="df-col-span-6 df-flex df-gap-2 df-items-center df-justify-end">
                  <DButton variant="outline" text="View Details" color="secondary" />
                  <DButton variant="outline" text="Movements" color="secondary" />
                  <DButton text="Pay Now" variant="outline" />
                  <DDropdown
                    actions={[
                      {
                        label: 'View Details',
                        icon: 'Eye',
                        onClick: () => {},
                      },
                      {
                        label: 'Add Note',
                        icon: 'Pencil',
                        onClick: () => {},
                      },
                      {
                        label: 'Change Category',
                        icon: 'Tag',
                        onClick: () => {},
                      },
                    ]}
                  />
                </div>
              </div>
            </DListGroup.Item>
          ))}
        </DListGroup>
      </DCollapse>
    </div>
  ),
};

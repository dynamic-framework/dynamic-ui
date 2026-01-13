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
  title: 'Patterns/List Group Patterns',
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
      <h5 className="mb-3">My Accounts</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex justify-content-between align-items-start w-100">
            <div>
              <h6 className="mb-1">Checking Account</h6>
              <small className="text-muted">****1234</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$5,248.32</div>
              <small className="text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Savings Account</h6>
              <small className="text-muted">****5678</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$12,847.90</div>
              <small className="text-muted">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Credit Card</h6>
              <small className="text-muted">****9012</small>
            </div>
            <div className="text-end">
              <div className="fw-bold text-danger">-$1,523.45</div>
              <small className="text-muted">Current Balance</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Investment Account</h6>
              <small className="text-muted">****3456</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$45,892.15</div>
              <small className="text-muted">Market Value</small>
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
      <h5 className="mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Food" />
                Starbucks Coffee
              </h6>
              <small className="text-muted">Today, 9:45 AM</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$5.75</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Shopping" />
                Amazon Purchase
              </h6>
              <small className="text-muted">Yesterday, 3:20 PM</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$127.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="success" className="me-1" text="Income" />
                Salary Deposit
              </h6>
              <small className="text-muted">Oct 1, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">+$4,500.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Utilities" />
                Electric Bill
              </h6>
              <small className="text-muted">Sep 28, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$89.32</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Transfer" />
                Transfer to Savings
              </h6>
              <small className="text-muted">Sep 25, 2024</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">-$500.00</div>
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
      <h5 className="mb-3">Payment Methods</h5>
      <DListGroup>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="CreditCard" color="success" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Visa •••• 4532</h6>
                <small className="text-muted">Expires 12/25</small>
                <div className="mt-1">
                  <DBadge color="primary" soft text="Primary" />
                </div>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="CreditCard" color="info" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Mastercard •••• 8791</h6>
                <small className="text-muted">Expires 08/26</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <DIcon icon="Landmark" color="warning" hasCircle />
              </div>
              <div>
                <h6 className="mb-1">Bank Account ****1234</h6>
                <small className="text-muted">Checking Account</small>
              </div>
            </div>
            <DIcon icon="ChevronRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="align-items-center d-flex justify-content-center gap-2">
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
      <h5 className="mb-3">Upcoming Bills</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon icon="Zap" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Electric Company</h6>
                <small className="text-muted">Due: Nov 15, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="warning" text="Due Sun" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$92.45</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon icon="Wifi" hasCircle size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Internet Service</h6>
                <small className="text-muted">Due: Nov 18, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$79.99</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon hasCircle icon="Phone" size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Mobile Phone</h6>
                <small className="text-muted">Due: Nov 20, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="success" text="Auto-pay" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$65.00</div>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <div className="me-3">
                <DIcon hasCircle icon="Shapes" size="1rem" />
              </div>
              <div>
                <h6 className="mb-1">Rent Payment</h6>
                <small className="text-muted">Due: Dec 1, 2024</small>
                <div className="mt-1">
                  <DBadge soft color="secondary" text="Upcoming" />
                </div>
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$1,500.00</div>
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
      <h5 className="mb-3">Investment Portfolio</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Apple Inc. (AAPL)</h6>
              <small className="text-muted">25 shares @ $178.32</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$4,458.00</div>
              <small className="text-success">+$495.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Microsoft Corp. (MSFT)</h6>
              <small className="text-muted">15 shares @ $368.45</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$5,526.75</div>
              <small className="text-success">+$423.50</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Tesla Inc. (TSLA)</h6>
              <small className="text-muted">10 shares @ $242.18</small>
              <div className="mt-1">
                <DBadge soft color="danger" text="-$1,500.00" iconStart="ArrowDown" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$2,421.80</div>
              <small className="text-danger">-$80.00</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">S&P 500 Index Fund (VOO)</h6>
              <small className="text-muted">50 shares @ $412.90</small>
              <div className="mt-1">
                <DBadge soft color="success" text="+$1,500.00" iconStart="ArrowUp" />
              </div>
            </div>
            <div className="text-end">
              <div className="fw-bold">$20,645.00</div>
              <small className="text-success">+$2,805.00</small>
            </div>
          </div>
        </DListGroup.Item>
      </DListGroup>
      <div className="mt-3 p-3 bg-gray-25 rounded">
        <div className="d-flex justify-content-between">
          <strong>Total Portfolio Value:</strong>
          <span className="fs-5 fw-bold">$33,051.55</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className="text-muted">Total Gain:</span>
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
      <h5 className="mb-3">Quick Actions</h5>
      <DListGroup>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-arrow-left-right fs-4 text-primary me-3" />
              <div>
                <h6 className="mb-0">Transfer Money</h6>
                <small className="text-muted">Between your accounts</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-receipt fs-4 text-success me-3" />
              <div>
                <h6 className="mb-0">Pay Bills</h6>
                <small className="text-muted">3 bills due this month</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-camera fs-4 text-info me-3" />
              <div>
                <h6 className="mb-0">Deposit Check</h6>
                <small className="text-muted">Use mobile deposit</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="hover-bg-gray-25">
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <i className="bi bi-file-earmark-text fs-4 text-warning me-3" />
              <div>
                <h6 className="mb-0">Statements</h6>
                <small className="text-muted">View and download</small>
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
      <h5 className="mb-3">Account Details</h5>
      <DListGroup className="gap-1">
        <DListGroup.Item className="p-0 border-0 d-block">
          <DCollapse
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Checking Account</h6>
                  <small className="text-muted">****1234</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$5,248.32</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">Personal Checking</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****1234</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold">$5,248.32</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Pending:</div>
                <div className="col-6 fw-semibold">$150.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 border-0 d-block">
          <DCollapse
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Savings Account</h6>
                  <small className="text-muted">****5678</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$12,847.90</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">High Yield Savings</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****5678</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold">$12,847.90</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Interest Rate:</div>
                <div className="col-6 fw-semibold">4.5% APY</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 border-0 d-block">
          <DCollapse
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Credit Card</h6>
                  <small className="text-muted">****9012</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$1,523.45</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Type:</div>
                <div className="col-6 fw-semibold">Visa Platinum</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Number:</div>
                <div className="col-6 fw-semibold">****9012</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Current Balance:</div>
                <div className="col-6 fw-semibold">-$1,523.45</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Credit:</div>
                <div className="col-6 fw-semibold">$8,476.55</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Credit Limit:</div>
                <div className="col-6 fw-semibold">$10,000.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Payment Due:</div>
                <div className="col-6 fw-semibold">Nov 15, 2024</div>
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
      <h5 className="mb-3">Account Details</h5>
      <DListGroup>
        <DListGroup.Item className="p-0 d-block">
          <DCollapse
            className="shadow-none hover:bg-gray-25"
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Checking Account</h6>
                  <small className="text-muted">****1234</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$5,248.32</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">Personal Checking</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****1234</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold text-success">$5,248.32</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Pending:</div>
                <div className="col-6 fw-semibold">$150.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Jan 15, 2020</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 d-block">
          <DCollapse
            className="shadow-none hover:bg-gray-25"
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Savings Account</h6>
                  <small className="text-muted">****5678</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">$12,847.90</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Type:</div>
                <div className="col-6 fw-semibold">High Yield Savings</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Account Number:</div>
                <div className="col-6 fw-semibold">****5678</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Balance:</div>
                <div className="col-6 fw-semibold text-success">$12,847.90</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Interest Rate:</div>
                <div className="col-6 fw-semibold">4.5% APY</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Opened:</div>
                <div className="col-6 fw-semibold">Mar 22, 2021</div>
              </div>
            </div>
          </DCollapse>
        </DListGroup.Item>
        <DListGroup.Item className="p-0 d-block">
          <DCollapse
            className="shadow-none hover:bg-gray-25"
            Component={(
              <div className="d-flex w-100 justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">Credit Card</h6>
                  <small className="text-muted">****9012</small>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$1,523.45</div>
                </div>
              </div>
            )}
          >
            <div className="pt-3 ps-2">
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Type:</div>
                <div className="col-6 fw-semibold">Visa Platinum</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Card Number:</div>
                <div className="col-6 fw-semibold">****9012</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Current Balance:</div>
                <div className="col-6 fw-semibold text-danger">-$1,523.45</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Available Credit:</div>
                <div className="col-6 fw-semibold">$8,476.55</div>
              </div>
              <div className="row mb-2">
                <div className="col-6 text-muted">Credit Limit:</div>
                <div className="col-6 fw-semibold">$10,000.00</div>
              </div>
              <div className="row">
                <div className="col-6 text-muted">Payment Due:</div>
                <div className="col-6 fw-semibold">Nov 15, 2024</div>
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
      <h5 className="mb-3">Payees</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Zap" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Electric Company</h6>
                <small className="text-muted">Auto-pay enabled</small>
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
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Wifi" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Internet Service Provider</h6>
                <small className="text-muted">Auto-pay enabled</small>
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
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="Phone" hasCircle size="1rem" color="info" className="me-3" />
              <div>
                <h6 className="mb-1">Mobile Phone Company</h6>
                <small className="text-muted">Manual payment</small>
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
      <h5 className="mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Starbucks Coffee</h6>
                  <small className="text-muted">Today, 9:45 AM</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Groceries" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$5.75</div>
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
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Amazon Purchase</h6>
                  <small className="text-muted">Yesterday, 3:20 PM</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Shopping" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">-$127.99</div>
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
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h6 className="mb-1">Salary Deposit</h6>
                  <small className="text-muted">Oct 1, 2024</small>
                  <div className="mt-1">
                    <DBadge size="sm" color="secondary" soft text="Income" />
                  </div>
                </div>
                <div className="text-end me-3">
                  <div className="fw-bold">+$127.99</div>
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
    <div style={{ width: 1000 }}>
      <DCollapse
        defaultCollapsed={false}
        Component={(
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Accounts</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
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
        className="mt-4"
        Component={(
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Transactions</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
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
        className="mt-4"
        Component={(
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Deposits</h5>
              <small className="text-muted">Total: $5,248.32</small>
            </div>
          </div>
        )}
      >
        <DListGroup>
          {Array.from({ length: 3 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <DListGroup.Item key={index}>
              <div className="grid">
                <div className="g-col-2 d-flex gap-2 align-items-center">
                  <DIcon icon="CreditCard" size="1rem" hasCircle color="info" />
                  <h5>Mastercard</h5>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Current</small>
                  <div className="fw-bold">$5,248.32</div>
                  <small className="text-muted">Available: $5,248.32</small>
                </div>
                <div className="g-col-2">
                  <small className="text-muted">Next Payment</small>
                  <div className="fw-bold">May 12, 2023</div>
                  <small className="text-muted">Amount: $5,248.32</small>
                </div>
                <div className="g-col-6 d-flex gap-2 align-items-center justify-content-end">
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

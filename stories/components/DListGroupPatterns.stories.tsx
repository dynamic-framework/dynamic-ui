import { Meta, StoryObj } from '@storybook/react-vite';

import {
  DListGroup, DBadge, DBox, DIcon,
} from '../../src';

const meta: Meta<typeof DListGroup> = {
  title: 'Patterns/List Group Patterns',
  component: DListGroup,
  parameters: {
    docs: {
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
    <DBox style={{ width: '700px' }}>
      <h5 className="mb-3">My Accounts</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Checking Account</h6>
              <small className="text-body-secondary">****1234</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$5,248.32</div>
              <small className="text-body-secondary">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Savings Account</h6>
              <small className="text-body-secondary">****5678</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$12,847.90</div>
              <small className="text-body-secondary">Available</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Credit Card</h6>
              <small className="text-body-secondary">****9012</small>
            </div>
            <div className="text-end">
              <div className="fw-bold text-danger">-$1,523.45</div>
              <small className="text-body-secondary">Current Balance</small>
            </div>
          </div>
        </DListGroup.Item>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Investment Account</h6>
              <small className="text-body-secondary">****3456</small>
            </div>
            <div className="text-end">
              <div className="fw-bold">$45,892.15</div>
              <small className="text-body-secondary">Market Value</small>
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
    <DBox style={{ width: '700px' }}>
      <h5 className="mb-3">Recent Transactions</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div>
              <h6 className="mb-1">
                <DBadge soft color="info" className="me-1" text="Food" />
                Starbucks Coffee
              </h6>
              <small className="text-body-secondary">Today, 9:45 AM</small>
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
              <small className="text-body-secondary">Yesterday, 3:20 PM</small>
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
              <small className="text-body-secondary">Oct 1, 2024</small>
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
              <small className="text-body-secondary">Sep 28, 2024</small>
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
              <small className="text-body-secondary">Sep 25, 2024</small>
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
    <DBox style={{ width: '700px' }}>
      <h5 className="mb-3">Payment Methods</h5>
      <DListGroup>
        <DListGroup.Item action>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className="bi bi-credit-card-2-front fs-2 text-primary" />
              </div>
              <div>
                <h6 className="mb-1">Visa •••• 4532</h6>
                <small className="text-body-secondary">Expires 12/25</small>
                <div className="mt-1">
                  <DBadge color="primary">Primary</DBadge>
                </div>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className="bi bi-credit-card-2-front fs-2 text-dark" />
              </div>
              <div>
                <h6 className="mb-1">Mastercard •••• 8791</h6>
                <small className="text-body-secondary">Expires 08/26</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <i className="bi bi-bank fs-2 text-success" />
              </div>
              <div>
                <h6 className="mb-1">Bank Account ****1234</h6>
                <small className="text-body-secondary">Checking Account</small>
              </div>
            </div>
            <i className="bi bi-chevron-right" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item action className="text-center">
          <i className="bi bi-plus-circle me-2" />
          Add New Payment Method
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
    <DBox style={{ width: '700px' }}>
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
                <small className="text-body-secondary">Due: Nov 15, 2024</small>
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
                <small className="text-body-secondary">Due: Nov 18, 2024</small>
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
                <small className="text-body-secondary">Due: Nov 20, 2024</small>
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
                <small className="text-body-secondary">Due: Dec 1, 2024</small>
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
    <DBox style={{ width: '700px' }}>
      <h5 className="mb-3">Investment Portfolio</h5>
      <DListGroup>
        <DListGroup.Item>
          <div className="d-flex w-100 justify-content-between align-items-start">
            <div>
              <h6 className="mb-1">Apple Inc. (AAPL)</h6>
              <small className="text-body-secondary">25 shares @ $178.32</small>
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
              <small className="text-body-secondary">15 shares @ $368.45</small>
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
              <small className="text-body-secondary">10 shares @ $242.18</small>
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
              <small className="text-body-secondary">50 shares @ $412.90</small>
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
          <span className="text-body-secondary">Total Gain:</span>
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
    <DBox style={{ width: '700px' }}>
      <h5 className="mb-3">Quick Actions</h5>
      <DListGroup>
        <DListGroup.Item className="hover-bg-gray-25" action onClick={() => alert('Transfer funds')}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="ArrowRightLeft" hasCircle color="info" className="me-2" />
              <div>
                <h6 className="mb-0">Transfer Money</h6>
                <small className="text-body-secondary">Between your accounts</small>
              </div>
            </div>
            <DIcon icon="ArrowRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item className="hover-bg-gray-25" action onClick={() => alert('Pay bills')}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="FileText" hasCircle color="green" className="me-2" />
              <div>
                <h6 className="mb-0">Pay Bills</h6>
                <small className="text-body-secondary">3 bills due this month</small>
              </div>
            </div>
            <DIcon icon="ArrowRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item className="hover-bg-gray-25" action onClick={() => alert('Deposit check')}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="BanknoteArrowUp" hasCircle className="me-2 bg-orange-50" />
              <div>
                <h6 className="mb-0">Deposit Check</h6>
                <small className="text-body-secondary">Use mobile deposit</small>
              </div>
            </div>
            <DIcon icon="ArrowRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
        <DListGroup.Item className="hover-bg-gray-25" action onClick={() => alert('View statements')}>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <DIcon icon="FileText" hasCircle className="me-2 bg-indigo-50" />
              <div>
                <h6 className="mb-0">Statements</h6>
                <small className="text-body-secondary">View and download</small>
              </div>
            </div>
            <DIcon icon="ArrowRight" className="text-gray-300" />
          </div>
        </DListGroup.Item>
      </DListGroup>
    </DBox>
  ),
};

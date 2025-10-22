import { Meta, StoryObj } from '@storybook/react-vite';
import DCard from '../../src/components/DCard/DCard';
import DButton from '../../src/components/DButton/DButton';
import DIcon from '../../src/components/DIcon/DIcon';
import DBox from '../../src/components/DBox';
import { DChip } from '../../src';

const meta: Meta<typeof DCard> = {
  title: 'Design System/Patterns/Card Patterns',
  component: DCard,
  parameters: {
    docs: {
      description: {
        component: `
This story showcases different card-based patterns for the banking, insurance, and investment industries.
These patterns are designed to be reusable and can be customized to fit different use cases.
`,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DCard>;

export const InsurancePlan: Story = {
  render: () => (
    <div className="grid gap-4" style={{ '--bs-columns': 3, width: 800 }}>
      <DCard className="w-100" style={{ maxWidth: '350px' }}>
        <DCard.Body className="text-center">
          <DIcon icon="shield-check" size="3rem" className="mb-3 text-primary" />
          <h5 className="card-title">Basic Plan</h5>
          <p className="h2 my-4">$49/mo</p>
          <ul className="list-unstyled text-start mb-4">
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-success me-2" />
              $100,000 Coverage
            </li>
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-success me-2" />
              24/7 Support
            </li>
            <li className="mb-2 text-muted">
              <DIcon icon="x-circle" className="me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="primary" className="w-100" text="Choose Plan" />
        </DCard.Body>
      </DCard>
      <DCard className="w-100 bg-primary text-white" style={{ maxWidth: '350px' }}>
        <DCard.Body className="text-center">
          <DIcon icon="shield-shaded" size="3rem" className="mb-3 text-white" />
          <h5 className="card-title mb-0">Premium Plan</h5>
          <p className="h2 my-4">$99/mo</p>
          <ul className="list-unstyled text-start mb-4">
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              $500,000 Coverage
            </li>
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              24/7 Support
            </li>
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="light" className="w-100" text="Choose Plan" />
        </DCard.Body>
      </DCard>

      <DCard
        className="w-100 text-white"
        style={{
          maxWidth: '350px',
          background: 'linear-gradient(to right, #cc2b5e, #753a88)',
        }}
      >
        <DCard.Body className="text-center">
          <DIcon icon="shield-shaded" size="3rem" className="mb-3 text-white" />
          <h5 className="card-title mb-0">Premium Plan</h5>
          <p className="h2 my-4">$99/mo</p>
          <ul className="list-unstyled text-start mb-4">
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              $500,000 Coverage
            </li>
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              24/7 Support
            </li>
            <li className="mb-2">
              <DIcon icon="check-circle" className="text-white me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="light" className="w-100" text="Choose Plan" />
        </DCard.Body>
      </DCard>
    </div>
  ),
};

export const InvestmentPortfolio: Story = {
  render: () => (
    <DCard style={{ width: 500 }}>
      <DCard.Body className="p-8">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title">My Portfolio</h5>
          <DIcon hasCircle icon="graph-up-arrow" color="info" size="1rem" />
        </div>
        <p className="text-muted mb-1">Total Value</p>
        <p className="h3 mb-4">$123,456.78</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="text-muted mb-0">Top Holdings</p>
          <DButton variant="link" color="primary" text="View All" />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            <span>Apple Inc. (AAPL)</span>
            <span className="text-success">+2.34%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center  px-0">
            <span>Microsoft Corp. (MSFT)</span>
            <span className="text-danger">-0.12%</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center  px-0">
            <span>Amazon.com, Inc. (AMZN)</span>
            <span className="text-success">+1.89%</span>
          </li>
        </ul>
      </DCard.Body>
    </DCard>
  ),
};

export const Plan: Story = {
  render: () => (
    <div
      className="grid gap-4"
      style={{ '--bs-columns': '3' }}
    >
      <DBox>
        <p>Individuals</p>
        <div>
          <small className="text-muted">Start at</small>
          <div className="d-flex gap-2 align-items-baseline mb-3">
            <h3>$99</h3>
            <small className="fw-normal text-muted text-sm">per month/user</small>
          </div>
          <p className="text-muted small">
            Good individuals who are just starting out and simple businesses want the essentials.
          </p>
          <DButton color="secondary" className="w-100" variant="outline" text="Get Started" />
        </div>
        <hr />
        <ul className="list-unstyled small">
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            $500,000 Coverage
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            24/7 Support
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Roadside Assistance
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Devices
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Users
          </li>
        </ul>
      </DBox>
      <DBox
        className="position-relative"
        style={{
          background: 'linear-gradient(to bottom, #c9d6ff, #FFFFFF)',
        }}
      >
        <DChip
          color="success"
          className="position-absolute"
          style={{
            top: -10,
            right: 0,
            left: 0,
            width: 'fit-content',
            marginInline: 'auto',
          }}
          text="🥇 Best Value"
        />
        <p>Teams</p>
        <div>
          <small className="text-muted">Start at</small>
          <div className="d-flex gap-2 align-items-baseline mb-3">
            <h3>$99</h3>
            <small className="fw-normal text-muted text-sm">per month/user</small>
          </div>
          <p className="text-muted small">
            Good individuals who are just starting out and simple businesses want the essentials.
          </p>
          <DButton color="primary" className="w-100" text="Get Started" />
        </div>
        <hr />
        <ul className="list-unstyled small">
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            $500,000 Coverage
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            24/7 Support
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Roadside Assistance
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Devices
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Users
          </li>
        </ul>
      </DBox>
      <DBox>
        <p>Enterprise</p>
        <div>
          <small className="text-muted">Start at</small>
          <div className="d-flex gap-2 align-items-baseline mb-3">
            <h3>$99</h3>
            <small className="fw-normal text-muted text-sm">per month/user</small>
          </div>
          <p className="text-muted small">
            Good individuals who are just starting out and simple businesses want the essentials.
          </p>
          <DButton color="secondary" className="w-100" variant="outline" text="Get Started" />
        </div>
        <hr />
        <ul className="list-unstyled small">
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            $500,000 Coverage
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            24/7 Support
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Roadside Assistance
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Devices
          </li>
          <li>
            <DIcon size="1rem" icon="check" className="text-success me-2" />
            Unlimited Users
          </li>
        </ul>
      </DBox>
    </div>
  ),
};

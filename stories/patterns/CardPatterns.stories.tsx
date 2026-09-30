import { Meta, StoryObj } from '@storybook/react-vite';
import { CSSProperties } from 'react';
import {
  DChip,
  DBox,
  DIcon,
  DButton,
  DCard,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DCard> = {
  title: 'Patterns/Card',
  component: DCard,
  parameters: {
    docs: {
      page: DocsTemplate,
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
    <div className="df-grid df-grid-cols-3 df-gap-4" style={{ width: 800 } as CSSProperties}>
      <DCard className="df-w-full" style={{ maxWidth: '350px' }}>
        <DCard.Body className="df-text-center">
          <DIcon icon="ShieldCheck" size="3rem" className="df-mb-3 df-text-primary" />
          <h5 className="df-fs-heading-5 df-fw-semibold">Basic Plan</h5>
          <p className="df-h2 df-my-4">$49/mo</p>
          <ul className="df-list-unstyled df-text-start df-mb-4">
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-success df-me-2" />
              $100,000 Coverage
            </li>
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-success df-me-2" />
              24/7 Support
            </li>
            <li className="df-mb-2 df-text-muted">
              <DIcon icon="XCircle" className="df-me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="primary" className="df-w-full" text="Choose Plan" />
        </DCard.Body>
      </DCard>
      <DCard className="df-w-full df-bg-primary df-text-on-emphasis" style={{ maxWidth: '350px' }}>
        <DCard.Body className="df-text-center">
          <DIcon icon="Shield" size="3rem" className="df-mb-3 df-text-on-emphasis" />
          <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Premium Plan</h5>
          <p className="df-h2 df-my-4">$99/mo</p>
          <ul className="df-list-unstyled df-text-start df-mb-4">
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              $500,000 Coverage
            </li>
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              24/7 Support
            </li>
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="light" className="df-w-full" text="Choose Plan" />
        </DCard.Body>
      </DCard>

      <DCard
        className="df-w-full df-text-on-emphasis"
        style={{
          maxWidth: '350px',
          background: 'linear-gradient(to right, #cc2b5e, #753a88)',
        }}
      >
        <DCard.Body className="df-text-center">
          <DIcon icon="Shield" size="3rem" className="df-mb-3 df-text-on-emphasis" />
          <h5 className="df-fs-heading-5 df-fw-semibold df-mb-0">Premium Plan</h5>
          <p className="df-h2 df-my-4">$99/mo</p>
          <ul className="df-list-unstyled df-text-start df-mb-4">
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              $500,000 Coverage
            </li>
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              24/7 Support
            </li>
            <li className="df-mb-2">
              <DIcon icon="CheckCircle" className="df-text-on-emphasis df-me-2" />
              Roadside Assistance
            </li>
          </ul>
          <DButton color="light" className="df-w-full" text="Choose Plan" />
        </DCard.Body>
      </DCard>
    </div>
  ),
};

export const InvestmentPortfolio: Story = {
  render: () => (
    <DCard style={{ width: 500 }}>
      <DCard.Body className="df-p-8">
        <div className="df-flex df-justify-between df-items-center df-mb-3">
          <h5 className="df-fs-heading-5 df-fw-semibold">My Portfolio</h5>
          <DIcon hasCircle icon="TrendingUp" color="info" size="1rem" />
        </div>
        <p className="df-text-muted df-mb-1">Total Value</p>
        <p className="df-h3 df-mb-4">$123,456.78</p>
        <div className="df-flex df-justify-between df-items-center df-mb-3">
          <p className="df-text-muted df-mb-0">Top Holdings</p>
          <DButton variant="link" color="primary" text="View All" />
        </div>
        <ul className="df-list" data-flush>
          <li className="df-list-item df-flex df-justify-between df-items-center df-px-0">
            <span>Apple Inc. (AAPL)</span>
            <span className="df-text-success">+2.34%</span>
          </li>
          <li className="df-list-item df-flex df-justify-between df-items-center df-px-0">
            <span>Microsoft Corp. (MSFT)</span>
            <span className="df-text-danger">-0.12%</span>
          </li>
          <li className="df-list-item df-flex df-justify-between df-items-center df-px-0">
            <span>Amazon.com, Inc. (AMZN)</span>
            <span className="df-text-success">+1.89%</span>
          </li>
        </ul>
      </DCard.Body>
    </DCard>
  ),
};

export const Plan: Story = {
  render: () => (
    <div className="df-p-8 df-bg-primary-subtle">
      <div
        className="df-grid df-grid-cols-3 df-gap-4"
      >
        <DBox>
          <p>Individuals</p>
          <div>
            <small className="df-text-muted">Start at</small>
            <div className="df-flex df-gap-2 df-items-baseline df-mb-3">
              <h3>$99</h3>
              <small className="df-fw-normal df-text-muted df-fs-body-sm">per month/user</small>
            </div>
            <p className="df-text-muted df-fs-body-sm">
              Good individuals who are just starting out and simple businesses want the essentials.
            </p>
            <DButton color="secondary" className="df-w-full" variant="outline" text="Get Started" />
          </div>
          <hr />
          <ul className="df-list-unstyled df-fs-body-sm">
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              $500,000 Coverage
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              24/7 Support
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Roadside Assistance
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Devices
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Users
            </li>
          </ul>
        </DBox>
        <DBox
          className="df-relative"
          style={{
            background: 'linear-gradient(to bottom, #c9d6ff, #FFFFFF)',
          }}
        >
          <DChip
            color="success"
            className="df-absolute"
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
            <small className="df-text-muted">Start at</small>
            <div className="df-flex df-gap-2 df-items-baseline df-mb-3">
              <h3>$99</h3>
              <small className="df-fw-normal df-text-muted df-fs-body-sm">per month/user</small>
            </div>
            <p className="df-text-muted df-fs-body-sm">
              Good individuals who are just starting out and simple businesses want the essentials.
            </p>
            <DButton color="primary" className="df-w-full" text="Get Started" />
          </div>
          <hr />
          <ul className="df-list-unstyled df-fs-body-sm">
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              $500,000 Coverage
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              24/7 Support
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Roadside Assistance
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Devices
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Users
            </li>
          </ul>
        </DBox>
        <DBox>
          <p>Enterprise</p>
          <div>
            <small className="df-text-muted">Start at</small>
            <div className="df-flex df-gap-2 df-items-baseline df-mb-3">
              <h3>$99</h3>
              <small className="df-fw-normal df-text-muted df-fs-body-sm">per month/user</small>
            </div>
            <p className="df-text-muted df-fs-body-sm">
              Good individuals who are just starting out and simple businesses want the essentials.
            </p>
            <DButton color="secondary" className="df-w-full" variant="outline" text="Get Started" />
          </div>
          <hr />
          <ul className="df-list-unstyled df-fs-body-sm">
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              $500,000 Coverage
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              24/7 Support
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Roadside Assistance
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Devices
            </li>
            <li>
              <DIcon size="1rem" icon="Check" className="df-text-success df-me-2" />
              Unlimited Users
            </li>
          </ul>
        </DBox>
      </div>
    </div>
  ),
};

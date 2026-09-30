import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  DBadge,
  DBox,
  DInputRange,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Input Range',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Real-world usage patterns for `DInputRange`: live value display, step markers, loan simulators, and more.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

export const LiveValueBadge: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Controlled range that displays the current value as a live badge next to the label. Useful for settings like volume, brightness, or opacity.',
      },
    },
  },
  render: function Render() {
    const [value, setValue] = useState(40);
    return (
      <div style={{ width: '400px' }} className="df-flex df-flex-col df-gap-2">
        <div className="df-flex df-justify-between df-items-center">
          <span className="df-label df-mb-0 df-fw-semibold">Opacity</span>
          <span className="df-bg-muted df-rounded-control df-p-1 df-text-default df-fs-body-sm">
            {`${value}%`}
          </span>
        </div>
        <DInputRange
          id="opacity-range"
          ariaLabel="Opacity"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="df-flex df-justify-between">
          <small className="df-text-secondary">0%</small>
          <small className="df-text-secondary">100%</small>
        </div>
      </div>
    );
  },
};

export const StepMarkers: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Discrete range with labeled step markers. Useful for risk levels, satisfaction ratings, or any finite set of options.',
      },
    },
  },
  render: function Render() {
    const markers = [
      { value: 0, label: 'None' },
      { value: 25, label: 'Low' },
      { value: 50, label: 'Medium' },
      { value: 75, label: 'High' },
      { value: 100, label: 'Critical' },
    ];
    const [value, setValue] = useState(25);
    const active = markers.find((m) => m.value === value);

    const colorMap: Record<number, string> = {
      0: 'secondary',
      25: 'success',
      50: 'info',
      75: 'warning',
      100: 'danger',
    };

    return (
      <div style={{ width: '400px' }} className="df-flex df-flex-col df-gap-3">
        <div className="df-flex df-justify-between df-items-center">
          <span className="df-label df-mb-0 df-fw-semibold">Risk level</span>
          {active && (
            <DBadge
              color={colorMap[active.value] || 'danger'}
              text={active.label}
            />
          )}
        </div>
        <DInputRange
          id="risk-range"
          ariaLabel="Risk level"
          min={0}
          max={100}
          step={25}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="df-flex df-justify-between df-px-1">
          {markers.map((m) => (
            <small
              key={m.value}
              className={m.value === value ? 'fw-semibold text-primary' : 'text-secondary'}
            >
              {m.label}
            </small>
          ))}
        </div>
      </div>
    );
  },
};

const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(n);

export const LoanSimulator: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Range used as a loan amount selector. The summary card below updates live showing the selected amount and an estimated monthly installment.',
      },
    },
  },
  render: function Render() {
    const MIN = 1000;
    const MAX = 50000;
    const MONTHS = 36;
    const [amount, setAmount] = useState(10000);
    const monthly = Math.ceil(amount / MONTHS);

    return (
      <div style={{ width: '420px' }} className="df-flex df-flex-col df-gap-2">
        <DInputRange
          label="Loan amount"
          min={MIN}
          max={MAX}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="df-flex df-justify-between">
          <small className="df-text-secondary">{formatCurrency(MIN)}</small>
          <small className="df-text-secondary">{formatCurrency(MAX)}</small>
        </div>

        <div className="df-card df-border-2 df-border-primary df-mt-2">
          <div className="df-card-body df-flex df-flex-col df-items-center df-gap-1 df-py-4">
            <small className="df-text-secondary df-text-uppercase df-fw-semibold ls-1">
              Selected amount
            </small>
            <span className="df-display-6 df-fw-semibold df-text-primary">
              {formatCurrency(amount)}
            </span>
            <hr className="df-w-full df-my-2" />
            <small className="df-text-secondary">
              {`Estimated monthly payment (${MONTHS} months)`}
            </small>
            <span className="df-fs-heading-4 df-fw-semibold">
              {`${formatCurrency(monthly)} / mo`}
            </span>
          </div>
        </div>
      </div>
    );
  },
};

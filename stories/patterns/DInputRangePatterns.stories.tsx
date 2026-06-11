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
      <div style={{ width: '400px' }} className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="form-label mb-0 fw-semibold">Opacity</span>
          <span className="bg-gray-100 rounded p-1 text-gray-700 small">
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
        <div className="d-flex justify-content-between">
          <small className="text-secondary">0%</small>
          <small className="text-secondary">100%</small>
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
      <div style={{ width: '400px' }} className="d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-center">
          <span className="form-label mb-0 fw-semibold">Risk level</span>
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
        <div className="d-flex justify-content-between px-1">
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
      <div style={{ width: '420px' }} className="d-flex flex-column gap-2">
        <DInputRange
          label="Loan amount"
          min={MIN}
          max={MAX}
          step={500}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between">
          <small className="text-secondary">{formatCurrency(MIN)}</small>
          <small className="text-secondary">{formatCurrency(MAX)}</small>
        </div>

        <div className="card border-2 border-primary mt-2">
          <div className="card-body d-flex flex-column align-items-center gap-1 py-4">
            <small className="text-secondary text-uppercase fw-semibold ls-1">
              Selected amount
            </small>
            <span className="display-6 fw-bold text-primary">
              {formatCurrency(amount)}
            </span>
            <hr className="w-100 my-2" />
            <small className="text-secondary">
              {`Estimated monthly payment (${MONTHS} months)`}
            </small>
            <span className="fs-4 fw-semibold">
              {`${formatCurrency(monthly)} / mo`}
            </span>
          </div>
        </div>
      </div>
    );
  },
};

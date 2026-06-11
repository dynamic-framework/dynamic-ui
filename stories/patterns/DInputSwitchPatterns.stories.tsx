/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  DBox,
  DIcon,
  DInputSwitch,
} from '../../src';

import DocsTemplate from './docs/Template.mdx';

const meta: Meta<typeof DBox> = {
  title: 'Patterns/Input Switch',
  component: DBox,
  parameters: {
    docs: {
      page: DocsTemplate,
      description: {
        component: 'Modern switch patterns using `DInputSwitch` with descriptions and CSS `:has()` for full-row or full-card highlighting — no extra wrapper state needed.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DBox>;

/**
 * Vertical notification list where the entire row highlights when the switch is on.
 * The `:has(input:checked)` selector on the `<label>` drives the visual state — no
 * extra class toggling required.
 */
export const NotificationPreferences: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Each row is a `<label>` wrapping both the text and the switch. CSS `:has(input:checked)` highlights the whole row when enabled — no JS state needed for styling.',
      },
    },
  },
  render: function Render() {
    const items = [
      { id: 'np-email', title: 'Email notifications', desc: 'Receive updates and alerts via email' },
      { id: 'np-push', title: 'Push notifications', desc: 'Get real-time alerts on your device' },
      { id: 'np-sms', title: 'SMS notifications', desc: 'Receive text messages for critical alerts' },
      { id: 'np-digest', title: 'Weekly digest', desc: 'A summary of your activity every Monday' },
    ];

    const [checked, setChecked] = useState<Record<string, boolean>>({
      'np-email': true,
      'np-push': false,
      'np-sms': true,
      'np-digest': false,
    });

    return (
      <>
        <style>
          {`
          .np-row {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .np-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border-color: var(--bs-primary) !important;
          }
        `}
        </style>
        <div style={{ width: '480px' }} className="d-flex flex-column gap-2">
          <h6 className="fw-semibold mb-1">Notification Preferences</h6>
          {items.map(({ id, title, desc }) => (
            <label
              key={id}
              className="np-row d-flex align-items-center justify-content-between gap-3 p-3 rounded border"
            >
              <div>
                <span className="d-block fw-medium">{title}</span>
                <small className="text-secondary">{desc}</small>
              </div>
              <DInputSwitch
                id={id}
                ariaLabel={title}
                checked={checked[id]}
                onChange={() => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))}
              />
            </label>
          ))}
        </div>
      </>
    );
  },
};

/**
 * Card grid where each card fully highlights when its feature is enabled.
 * The icon color also transitions via `:has()`, showing how a single selector
 * can drive multiple child elements.
 */
export const FeatureCards: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Each feature is a card-sized `<label>`. When the switch is on, `:has(input:checked)` changes the card border and background, and updates the icon color — all in pure CSS.',
      },
    },
  },
  render: function Render() {
    const features = [
      {
        id: 'fc-analytics', icon: 'BarChart2', title: 'Analytics', desc: 'Track performance metrics in real time',
      },
      {
        id: 'fc-dark', icon: 'Moon', title: 'Dark mode', desc: 'Switch to a darker interface theme',
      },
      {
        id: 'fc-2fa', icon: 'ShieldCheck', title: 'Two-factor auth', desc: 'Add an extra layer of security',
      },
      {
        id: 'fc-backup', icon: 'Cloud', title: 'Auto backup', desc: 'Automatically save your data daily',
      },
    ];

    const [checked, setChecked] = useState<Record<string, boolean>>({
      'fc-analytics': true,
      'fc-dark': false,
      'fc-2fa': true,
      'fc-backup': false,
    });

    return (
      <>
        <style>
          {`
          .fc-card {
            cursor: pointer;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .fc-card:has(input:checked) {
            border-color: var(--bs-primary) !important;
            background-color: var(--bs-primary-bg-subtle);
          }
          .fc-card .fc-icon {
            color: var(--bs-secondary-color);
            transition: color 0.2s ease;
          }
          .fc-card:has(input:checked) .fc-icon {
            color: var(--bs-primary);
          }
        `}
        </style>
        <div
          className="d-grid gap-3"
          style={{ gridTemplateColumns: '1fr 1fr', width: '520px' }}
        >
          {features.map(({
            id, icon, title, desc,
          }) => (
            <label
              key={id}
              className="fc-card d-flex flex-column gap-3 p-4 rounded border"
            >
              <div className="d-flex justify-content-between align-items-start">
                <DIcon icon={icon} size="1.5rem" className="fc-icon" />
                <DInputSwitch
                  id={id}
                  ariaLabel={title}
                  checked={checked[id]}
                  onChange={() => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))}
                />
              </div>
              <div>
                <span className="d-block fw-semibold">{title}</span>
                <small className="text-secondary">{desc}</small>
              </div>
            </label>
          ))}
        </div>
      </>
    );
  },
};

/**
 * iOS-style grouped settings where rows are separated within a bordered section.
 * The active row tints its background and changes the title color via `:has()`.
 */
export const PrivacySettings: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Grouped settings list inspired by iOS. Each row uses `:has(input:checked)` to tint the background and change the label color — no React state drives the visual styling.',
      },
    },
  },
  render: function Render() {
    const sections = [
      {
        heading: 'Data & Personalization',
        items: [
          { id: 'ps-ads', title: 'Personalized ads', desc: 'Show ads tailored to your interests' },
          { id: 'ps-share', title: 'Third-party sharing', desc: 'Share anonymized data with our partners' },
        ],
      },
      {
        heading: 'App Permissions',
        items: [
          { id: 'ps-location', title: 'Location access', desc: 'Used to show nearby branches and ATMs' },
          { id: 'ps-crash', title: 'Crash reports', desc: 'Send diagnostic data to improve the app' },
        ],
      },
    ];

    const [checked, setChecked] = useState<Record<string, boolean>>({
      'ps-ads': false,
      'ps-share': false,
      'ps-location': true,
      'ps-crash': true,
    });

    return (
      <>
        <style>
          {`
          .ps-row {
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .ps-row:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
          }
          .ps-row .ps-title {
            transition: color 0.2s ease;
          }
          .ps-row:has(input:checked) .ps-title {
            color: var(--bs-primary);
          }
        `}
        </style>
        <div style={{ width: '480px' }} className="d-flex flex-column gap-4">
          {sections.map(({ heading, items }) => (
            <div key={heading}>
              <small className="text-secondary text-uppercase fw-semibold d-block mb-2">
                {heading}
              </small>
              <div className="border rounded overflow-hidden">
                {items.map(({ id, title, desc }, i) => (
                  <label
                    key={id}
                    className={`ps-row d-flex align-items-center m-0 justify-content-between gap-3 p-3${i < items.length - 1 ? ' border-bottom' : ''}`}
                  >
                    <div>
                      <span className="d-block fw-medium ps-title">{title}</span>
                      <small className="text-secondary">{desc}</small>
                    </div>
                    <DInputSwitch
                      id={id}
                      ariaLabel={title}
                      checked={checked[id]}
                      onChange={() => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))}
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  },
};

/**
 * Terms acceptance block with switch on the left, subtle border container,
 * and a trailing check icon that appears when accepted using CSS `:has()`.
 */
export const TermsAndConditionsCard: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Modern terms acceptance pattern with switch on the left. The full box uses a subtle border and highlighted background when accepted, and shows a trailing check icon using pure CSS `:has()`.',
      },
    },
  },
  render: function Render() {
    const [accepted, setAccepted] = useState(false);

    return (
      <>
        <style>
          {`
          .tc-card {
            cursor: pointer;
            border: 1px solid transparent;
            transition: background-color 0.2s ease, box-shadow 0.2s ease;
          }
          .tc-card:has(input:checked) {
            background-color: var(--bs-primary-bg-subtle);
            border: 1px solid var(--bs-primary-100) !important;
          }
          .tc-card .tc-check {
            opacity: 0;
            transform: scale(0.85);
            color: var(--bs-primary);
            transition: opacity 0.2s ease, transform 0.2s ease;
          }
          .tc-card:has(input:checked) .tc-check {
            opacity: 1;
            transform: scale(1);
          }
        `}
        </style>

        <div className="p-16 bg-gray-50">
          <label
            className="d-box tc-card d-flex align-items-start gap-3"
            style={{ width: '560px' }}
          >
            <DInputSwitch
              id="tc-accept"
              ariaLabel="Accept terms and conditions"
              checked={accepted}
              onChange={() => setAccepted((prev) => !prev)}
            />

            <div className="flex-grow-1">
              <span className="d-block fw-semibold mb-1">I accept the Terms & Conditions</span>
              <small className="text-secondary d-block">
                By enabling this option, you agree to our terms of service, privacy policy,
                and electronic communications consent.
              </small>
            </div>

            <DIcon className="tc-check" icon="CheckCircle" size="1.25rem" />
          </label>
        </div>
      </>
    );
  },
};

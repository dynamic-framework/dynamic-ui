/* eslint-disable no-alert */
/* eslint-disable no-promise-executor-return */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import DOtp from '../../src/components/DOtp';
import { DCard } from '../../src';
import { PropsOtp } from '../../src/components/DOtp/DOtp';

const meta: Meta<typeof DOtp> = {
  title: 'Design System/Components/DOtp',
  component: DOtp,
  parameters: {
    docs: {
      description: {
        component: `
**DOtp** is a reusable One-Time Password (OTP) component for secure authentication flows.
It includes:
- A configurable PIN input.
- Countdown timer with resend action.
- Submit button with async handling.
- Customizable texts and layout.

Ideal for **banking**, **insurance**, and **financial** applications.
        `,
      },
    },
  },
  argTypes: {
    action: {
      description: 'Function called when submitting the OTP.',
      control: false,
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows a loading spinner on the button.',
    },
    otpSize: {
      control: { type: 'number', min: 4, max: 8 },
      description: 'Number of digits in the OTP input.',
    },
    seconds: {
      control: { type: 'number', min: 5, max: 60 },
      description: 'Countdown seconds before resend becomes available.',
    },
    texts: {
      control: 'object',
      description: 'Customizable texts for labels, buttons, and messages.',
    },
    className: {
      control: 'text',
      description: 'Custom classes',
    },
  },
  tags: ['autodocs'],
};

export function Template(args: PropsOtp) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <DCard>
      <DCard.Body>
        <DOtp
          isLoading={isLoading}
          {...args}
          action={async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(() => {
              alert('OTP submitted');
              setIsLoading(false);
              resolve(true);
            }, 1000));
          }}
        />
      </DCard.Body>
    </DCard>
  );
}

export default meta;
type Story = StoryObj<typeof DOtp>;

// 🧾 Default example
export const Default: Story = {
  render: Template,
  args: {},
};
// 🕓 Custom countdown + different texts
export const CustomTexts: Story = {
  render: Template,
  args: {
    seconds: 30,
    otpSize: 4,
    texts: {
      title: 'We’ve sent a 4-digit code to your registered email address.',
      resend: 'Send again',
      resendText: 'Request new code',
      submit: 'Verify and continue',
      contact: (
        <>
          Having issues?
          {' '}
          <a
            href="https://www.modyo.com"
            className="link-primary text-nowrap"
            target="_blank"
            rel="noreferrer"
          >
            Contact support
          </a>
        </>
      ),
    },
  },
};

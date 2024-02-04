import { Meta, StoryObj } from '@storybook/react';
import DCardAccount from '../../src/components/DCardAccount/DCardAccount';
import { ICONS, THEMES } from '../config/constants';

/**
 * DCard component composition to make a CardAccount
 */
const config: Meta<typeof DCardAccount> = {
  title: 'Design System/Patterns/Card Account',
  component: DCardAccount,
  argTypes: {
    name: {
      control: 'text',
      type: 'string',
    },
    number: {
      control: 'text',
      type: 'string',
    },
    theme: {
      control: 'select',
      options: THEMES,
      type: 'string',
    },
    icon: {
      control: 'select',
      options: ICONS,
      type: 'string',
    },
    balance: {
      control: 'text',
      type: 'string',
    },
    balanceText: {
      control: 'text',
      type: 'string',
    },
    actionText: {
      control: 'text',
      type: 'string',
    },
    onClick: {
      action: 'onClick',
    },
    className: {
      control: 'text',
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCardAccount>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '300px' }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCardAccount {...args} />
  ),
  args: {
    name: 'Credit Card',
    number: '**** 456',
    theme: 'secondary',
    icon: 'credit-card',
    balance: '$50.000.000',
    balanceText: 'Available balance',
    actionText: 'Details',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

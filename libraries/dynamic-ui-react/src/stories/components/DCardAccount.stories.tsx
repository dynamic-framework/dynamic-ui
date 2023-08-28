import { Meta, StoryObj } from '@storybook/react';
import DCardAccount from '../../components/DCardAccount';
import { ICONS, THEMES } from '../constants';

const config: Meta<typeof DCardAccount> = {
  title: 'Design System/Components/Card Account',
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
    onEventClick: {
      action: 'onClick',
    },
    className: {
      control: 'text',
      type: 'string',
    },
  },
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
};

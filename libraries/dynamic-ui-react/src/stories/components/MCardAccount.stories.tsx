import { Meta, StoryObj } from '@storybook/react';
import MCardAccount from '../../components/MCardAccount';
import { ICONS, THEMES } from '../constants';

const config: Meta<typeof MCardAccount> = {
  title: 'Design System/Components/Card Account',
  component: MCardAccount,
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
    onClickText: {
      control: 'text',
      type: 'string',
    },
    onClick: {
      type: 'function',
    },
    className: {
      control: 'text',
      type: 'string',
    },
  },
};

export default config;
type Story = StoryObj<typeof MCardAccount>;

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
    <MCardAccount {...args} />
  ),
  args: {
    name: 'Credit Card',
    number: '**** 456',
    theme: 'secondary',
    icon: 'credit-card',
    balance: '$50.000.000',
    balanceText: 'Available balance',
    onClickText: 'Details',
    onClick() { console.log('Click'); },
  },
};

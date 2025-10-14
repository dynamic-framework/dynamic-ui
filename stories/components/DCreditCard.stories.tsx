/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import { DCreditCard } from '../../src';

const config: Meta<typeof DCreditCard> = {
  title: 'Design System/Components/DCreditCard',
  component: DCreditCard,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    nameOnCard: {
      control: 'text',
      type: 'string',
    },
    cardBrand: {
      control: 'select',
      type: 'string',
      options: ['mastercard', 'visa', 'amex', 'discover'],
    },
    cardNumber: {
      control: 'text',
      type: 'string',
    },
    isChipVisible: {
      control: 'boolean',
      type: 'boolean',
    },
    isVertical: {
      control: 'boolean',
      type: 'boolean',
    },
    logoImage: {
      control: 'text',
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCreditCard>;

export const Visa: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    nameOnCard: 'John Doe',
    cardNumber: '4242 4242 4242 4242',
  },
};

export const Mastercard: Story = {
  render: (args) => (
    <div style={{ width: 360 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    nameOnCard: 'John Doe',
    logoImage: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    cardBrand: 'mastercard',
    cardNumber: '4242 4242 4242 4242',
  },
};

export const Vertical: Story = {
  render: (args) => (
    <div style={{ width: 200 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    nameOnCard: 'John Doe',
    logoImage: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    cardBrand: 'mastercard',
    cardNumber: '4242 4242 4242 4242',
    isVertical: true,
  },
};

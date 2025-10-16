import { Meta, StoryObj } from '@storybook/react-vite';

import { PREFIX_BS } from '../../src/components/config';
import DCreditCard from '../../src/components/DCreditCard/DCreditCard';

const config: Meta<typeof DCreditCard> = {
  title: 'Design System/Components/DCreditCard',
  component: DCreditCard,
  parameters: {
    docs: {
      description: {
        component: `
## Description
A credit/debit card visual component displaying brand, chip, number, and holder name.

Supports different sizes and orientations, and can display custom branding logos.

---

## Props

| Prop             | Type | Description |
| ---------------- | ---- | ----------- |
| size             | \`'sm' | 'md' | 'lg'\` | Card size |
| className        | \`string\` | Additional custom class names |
| cardBrand        | \`string\` | The card brand name (e.g., Visa, MasterCard) |
| isChipVisible    | \`boolean\` | Whether the chip is visible on the card |
| nameOnCard       | \`string\` | Cardholder name text |
| cardNumber       | \`string\` | Visible card number |
| isVertical       | \`boolean\` | If true, displays the card in a vertical layout |
| logoImage        | \`string\` | Optional URL for a custom brand logo |

---

## CSS Variables

| Variable | Class | Type | Description |
| -------- | ------ | ---- | ----------- |
| --${PREFIX_BS}card-bg | .d-credit-card | color | Background color of the card |
| --${PREFIX_BS}card-color | .d-credit-card | color | Text color |
| --${PREFIX_BS}card-border-radius | .d-credit-card | length | Border radius |
| --${PREFIX_BS}card-padding | .d-credit-card | length | Inner spacing |
| --${PREFIX_BS}card-chip-size | .d-credit-card-chip | length | Size of the chip image |
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Card size variant',
      table: { defaultValue: { summary: 'md' } },
    },
    className: {
      control: 'text',
      description: 'Additional class names for the wrapper element',
      type: 'string',
    },
    cardBrand: {
      control: 'text',
      description: 'Card brand (used as alt text for the logo)',
      type: 'string',
      table: { defaultValue: { summary: 'visa' } },
    },
    cardHolderText: {
      control: 'text',
      description: 'Card holder text displayed at the bottom of the card',
      type: 'string',
      table: { defaultValue: { summary: 'Card Holder' } },
    },
    isChipVisible: {
      control: 'boolean',
      description: 'Displays or hides the chip icon',
      type: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    nameOnCard: {
      control: 'text',
      description: 'Cardholder name displayed at the bottom of the card',
      type: 'string',
    },
    cardNumber: {
      control: 'text',
      description: 'Card number displayed on the card',
      type: 'string',
    },
    isVertical: {
      control: 'boolean',
      description: 'Switches card layout to vertical mode',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    logoImage: {
      control: 'text',
      description: 'Custom brand logo image URL',
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof DCreditCard>;

const defaultCard = {
  nameOnCard: 'John Doe',
  cardNumber: '**** **** **** 1234',
  cardBrand: 'Visa',
};

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
  },
};

export const Small: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'A smaller version of the card component.',
      },
    },
  },
};

export const Large: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'A larger version of the card component.',
      },
    },
  },
};

export const WithoutChip: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    isChipVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the card without the chip icon.',
      },
    },
  },
};

export const VerticalLayout: Story = {
  render: (args) => (
    <div style={{ width: 200 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    isVertical: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays the card in a vertical orientation.',
      },
    },
  },
};

export const CustomLogo: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    logoImage: 'https://cdn.modyo.cloud/uploads/f686b9aa-65ab-4369-9db3-89ceece84f29/original/mastercard.png',
    cardBrand: 'MasterCard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with a custom brand logo image.',
      },
    },
  },
};

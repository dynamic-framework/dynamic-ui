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
A credit/debit card visual component displaying brand logo, chip, card number, and cardholder name.

Supports different sizes and orientations (horizontal and vertical), and can display custom branding logos.

To understand in more detail the aspects covered by this component, you can customize its appearance using CSS variables.

---

## CSS Variables

| Variable | Class | Type | Description |
| -------- | ----- | ---- | ----------- |
| --${PREFIX_BS}d-credit-card-bg | .d-credit-card | css gradient | Background gradient of the card |
| --${PREFIX_BS}d-credit-card-aspect-ratio | .d-credit-card | ratio | Aspect ratio of the card (16/9 horizontal, 9/16 vertical) |
| --${PREFIX_BS}d-credit-card-padding | .d-credit-card | css length unit | Inner padding of the card |
| --${PREFIX_BS}d-credit-card-chip-bg | .d-credit-card-chip | css color unit | Background color of the chip area |
| --${PREFIX_BS}d-credit-card-chip-size | .d-credit-card-chip-image | css length unit | Size of the chip image |
| --${PREFIX_BS}d-credit-card-logo-size | .d-credit-card-logo | percentage | Width of the brand logo (22% horizontal, 30% vertical) |
| --${PREFIX_BS}d-credit-card-font-family-number | .d-credit-card-number | css font family | Font family for card number |
| --${PREFIX_BS}d-credit-card-number-size | .d-credit-card-number | css length unit | Font size of card number |
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for the wrapper element',
      type: 'string',
    },
    brand: {
      control: 'text',
      description: 'Card brand (used as alt text for the logo)',
      type: 'string',
      table: { defaultValue: { summary: 'visa' } },
    },
    holderText: {
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
    name: {
      control: 'text',
      description: 'Cardholder name displayed at the bottom of the card',
      type: 'string',
    },
    number: {
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
  name: 'John Doe',
  number: '**** **** **** 1234',
  brand: 'Visa',
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
    brand: 'MasterCard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with a custom brand logo image.',
      },
    },
  },
};

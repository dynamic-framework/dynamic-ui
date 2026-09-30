import { Meta, StoryObj } from '@storybook/react-vite';

import DCreditCard from '../../src/components/DCreditCard/DCreditCard';

const config: Meta<typeof DCreditCard> = {
  title: 'Design System/Components/Credit Card',
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

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/credit-card.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                              | Type       | Description      |
|---------------------------------------|------------|------------------|
| \`--df-credit-card-padding\`          | css length | Padding          |
| \`--df-credit-card-radius\`           | css length | Radius           |
| \`--df-credit-card-fg\`               | css color  | Foreground       |
| \`--df-credit-card-chip-size\`        | css length | Chip size        |
| \`--df-credit-card-chip-padding\`     | css length | Chip padding     |
| \`--df-credit-card-chip-radius\`      | css length | Chip radius      |
| \`--df-credit-card-number-font-size\` | css length | Number font size |
| \`--df-credit-card-name-font-size\`   | css length | Name font size   |
| \`--df-credit-card-label-font-size\`  | css length | Label font size  |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names for the wrapper element',
      type: 'string',
      table: { category: 'Appearance' },
    },
    brand: {
      control: 'select',
      options: ['visa', 'mastercard'],
      description: 'Card brand; selects default logo unless logoImage is provided',
      table: {
        defaultValue: { summary: 'visa' },
        category: 'Appearance',
      },
    },
    holderText: {
      control: 'text',
      description: 'Card holder text displayed at the bottom of the card',
      type: 'string',
      table: {
        defaultValue: { summary: 'Card Holder' },
        category: 'Content',
      },
    },
    isChipVisible: {
      control: 'boolean',
      description: 'Displays or hides the chip icon',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'true' },
        category: 'Behavior',
      },
    },
    name: {
      control: 'text',
      description: 'Cardholder name displayed at the bottom of the card',
      type: 'string',
      table: { category: 'Content' },
    },
    number: {
      control: 'text',
      description: 'Card number displayed on the card',
      type: 'string',
      table: { category: 'Content' },
    },
    isVertical: {
      control: 'boolean',
      description: 'Switches card layout to vertical mode',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    logoImage: {
      control: 'text',
      description: 'Custom brand logo image URL',
      type: 'string',
      table: { category: 'Content' },
    },
  },
  tags: ['autodocs'],
};

export default config;

type Story = StoryObj<typeof DCreditCard>;

const defaultCard = {
  name: 'John Doe',
  number: '**** **** **** 1234',
  brand: 'visa',
} as const;

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

export const MastercardBrand: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <DCreditCard {...args} />
    </div>
  ),
  args: {
    ...defaultCard,
    brand: 'mastercard',
    logoImage: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with the default Mastercard brand logo.',
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
    brand: 'mastercard',
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays a card with a custom brand logo image.',
      },
    },
  },
};

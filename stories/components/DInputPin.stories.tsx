import { Meta, StoryObj } from '@storybook/react-vite';

import DInputPin from '../../src/components/DInputPin/DInputPin';

const config: Meta<typeof DInputPin> = {
  title: 'Design System/Components/Input Pin',
  component: DInputPin,
  parameters: {
    docs: {
      description: {
        component: `
Component with a partial API of \`d-input\` to take a pin/otp code.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/pin.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                          | Type       | Description          |
|-----------------------------------|------------|----------------------|
| \`--df-pin-gap\`                  | css length | Gap                  |
| \`--df-pin-size\`                 | css length | Size                 |
| \`--df-pin-font-size\`            | css length | Font size            |
| \`--df-pin-radius\`               | css length | Radius               |
| \`--df-pin-border-width\`         | css length | Border width         |
| \`--df-pin-bg\`                   | css color  | Background           |
| \`--df-pin-fg\`                   | css color  | Foreground           |
| \`--df-pin-border-color\`         | css color  | Border color         |
| \`--df-pin-focus-border-color\`   | css color  | Focus border color   |
| \`--df-pin-invalid-border-color\` | css color  | Invalid border color |
| \`--df-pin-valid-border-color\`   | css color  | Valid border color   |
| \`--df-pin-disabled-bg\`          | css color  | Disabled background  |
| \`--df-pin-disabled-fg\`          | css color  | Disabled foreground  |

        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    placeholder: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    type: {
      control: 'select',
      options: ['number', 'text', 'tel'],
      type: 'string',
      description: 'Type of the inputs',
      table: { category: 'HTML Attributes' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    secret: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      description: 'Hide the characters',
    },
    characters: {
      control: 'number',
      type: 'number',
      description: 'Number of characters of the pin',
      table: { category: 'Behavior' },
    },
    innerInputMode: {
      control: 'select',
      options: ['number', 'text', 'tel'],
      type: 'string',
      description: 'Keyboard style',
      table: { category: 'HTML Attributes' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
      table: { category: 'Content' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputPin>;

export const Default: Story = {
  args: {
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false,
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'componentId2',
    characters: 4,
    type: 'text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: false,
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: true,
    valid: false,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: false,
    loading: false,
    secret: false,
    invalid: false,
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    disabled: true,
    loading: false,
    secret: false,
    invalid: false,
    valid: false,
  },
};

import { Meta, StoryObj } from '@storybook/react-vite';

import DInputCheck from '../../src/components/DInputCheck/DInputCheck';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Radio',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device radios with our completely rewritten checks component.

**Radio:** It is a type of graphical interface widget that allows the user to choose an option from a predefined set of options.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/choice.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                              | Type       | Description           |
|---------------------------------------|------------|-----------------------|
| \`--df-choice-size\`                  | css length | Size                  |
| \`--df-choice-gap\`                   | css length | Gap                   |
| \`--df-choice-radius\`                | css length | Radius                |
| \`--df-choice-border-width\`          | css length | Border width          |
| \`--df-choice-bg\`                    | css color  | Background            |
| \`--df-choice-border-color\`          | css color  | Border color          |
| \`--df-choice-checked-bg\`            | css color  | Checked background    |
| \`--df-choice-checked-border-color\`  | css color  | Checked border color  |
| \`--df-choice-checked-mark-color\`    | css color  | Checked mark color    |
| \`--df-choice-hover-border-color\`    | css color  | Hover border color    |
| \`--df-choice-invalid-border-color\`  | css color  | Invalid border color  |
| \`--df-choice-valid-border-color\`    | css color  | Valid border color    |
| \`--df-choice-disabled-bg\`           | css color  | Disabled background   |
| \`--df-choice-disabled-border-color\` | css color  | Disabled border color |
| \`--df-choice-disabled-opacity\`      | number     | Disabled opacity      |
| \`--df-choice-label-color\`           | css color  | Label color           |
| \`--df-choice-label-font-size\`       | css length | Label font size       |
| \`--df-choice-switch-width\`          | css length | Switch width          |
| \`--df-choice-switch-height\`         | css length | Switch height         |
| \`--df-choice-switch-thumb-inset\`    | css length | Switch thumb inset    |
| \`--df-choice-switch-thumb-color\`    | css color  | Switch thumb color    |
| \`--df-choice-switch-track-color\`    | css color  | Switch track color    |

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
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
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
    type: {
      control: 'select',
      type: 'string',
      options: ['checkbox', 'radio'],
      defaultValue: 'radio',
      table: { category: 'HTML Attributes' },
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    indeterminate: {
      control: 'boolean',
      table: { category: 'Behavior' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputCheck>;

export const RadioWithoutLabel: Story = {
  args: {
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const RadioDefault: Story = {
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const RadioHint: Story = {
  args: {
    id: 'componentId2',
    type: 'radio',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const RadioValid: Story = {
  args: {
    id: 'componentId3',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const RadioInvalid: Story = {
  args: {
    id: 'componentId4',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const RadioChecked: Story = {
  args: {
    id: 'componentId5',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const RadioCheckedDisabled: Story = {
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

import { Meta, StoryObj } from '@storybook/react-vite';

import DInputCheck from '../../src/components/DInputCheck/DInputCheck';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

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
| \`--df-choice-accent\`                | css color  | Accent                |
| \`--df-choice-accent-invalid\`        | css color  | Accent invalid        |
| \`--df-choice-accent-valid\`          | css color  | Accent valid          |
| \`--df-choice-disabled-border-color\` | css color  | Disabled border color |
| \`--df-choice-disabled-opacity\`      | number     | Disabled opacity      |
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
      description: 'The class name for the wrapper div',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    inputClassName: {
      control: 'text',
      type: 'string',
      description: 'The class name for the input element',
      table: { category: 'Appearance' },
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['checkbox', 'radio'],
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

export const CheckboxWithoutLabel: Story = {
  args: {
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const CheckboxDefault: Story = {
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const CheckboxHint: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const CheckboxValid: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const CheckboxInvalid: Story = {
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const CheckboxChecked: Story = {
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckboxCheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

export const CheckboxWithInputClassName: Story = {
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2',
  },
};

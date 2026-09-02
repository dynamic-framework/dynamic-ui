import { Meta, StoryObj } from '@storybook/react-vite';

import { DInputCheck } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type            | Description                 |
|-----------------------------------------------------|---------------------|-----------------|-----------------------------|
| --${PREFIX_BS}form-check-input-focus-border-color   | .form-check-input   | css color unit  | Focus border color          |
| --${PREFIX_BS}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow  | Focus box shadow            |
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
      description: 'The ARIA label for the input, used when there is no visible label',
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
      description: 'Only applies when `type` is `checkbox`; ignored for `radio`.',
      table: { category: 'Behavior' },
    },
    hint: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputCheck>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: false,
    invalid: false,
    valid: false,
    hint: '',
    name: 'checkbox',
    value: 'value',
    className: '',
    inputClassName: '',
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'componentId2',
    type: 'checkbox',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Hint: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
    hint: 'Assistive text',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
    hint: 'Assistive text',
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Indeterminate: Story = {
  args: {
    id: 'componentId6b',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

export const WithInputClassName: Story = {
  args: {
    id: 'componentId9',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2 border-info-500',
  },
};

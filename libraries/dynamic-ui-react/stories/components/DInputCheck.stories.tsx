import { Meta, StoryObj } from '@storybook/react';

import DInputCheck from '../../src/components/DInputCheck/DInputCheck';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

Create consistent cross-browser and cross-device checkboxes with our completely rewritten checks component.

**Checkbox:** Allows the user to make multiple selections from a set of options.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Checks](https://getbootstrap.com/docs/5.3/forms/checks-radios/#checks)

## CSS Variables

The Bootstrap documentation provides details on the default [Check CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['checkbox', 'radio'],
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputCheck>;

export const CheckboxWithoutLabel: Story = {
  args: {
    id: 'componentId1',
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

export const CheckboxChecked: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

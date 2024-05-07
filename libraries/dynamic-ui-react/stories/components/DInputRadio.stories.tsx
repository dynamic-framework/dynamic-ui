import { Meta, StoryObj } from '@storybook/react';

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

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Checks and Radios](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Radios](https://getbootstrap.com/docs/5.3/forms/checks-radios/#radios)
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
      defaultValue: 'radio',
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

export const RadioWithoutLabel: Story = {
  args: {
    id: 'componentId5',
    type: 'radio',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const RadioDefault: Story = {
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const RadioChecked: Story = {
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'radio',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

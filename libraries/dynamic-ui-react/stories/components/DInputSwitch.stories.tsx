import { Meta, StoryObj } from '@storybook/react';

import DInputSwitch from '../../src/components/DInputSwitch/DInputSwitch';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputSwitch> = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Dynamic%20Component-E60063)

Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                         | Class        | Type           | Description               |
|--------------------------------------------------|--------------|----------------|---------------------------|
| --${PREFIX_BS}input-switch-bg                    | .form-switch | css color unit | Background color          |
| --${PREFIX_BS}input-switch-border-color          | .form-switch | css color unit | Border color              |
| --${PREFIX_BS}input-switch-dot                   | .form-switch | data url svg   | Component circle          |
| --${PREFIX_BS}input-switch-hover-border-color    | .form-switch | css color unit | Hover border color        |
| --${PREFIX_BS}input-switch-focus-outline-color   | .form-switch | css color unit | Focus outline color       |
| --${PREFIX_BS}input-switch-active-border-color   | .form-switch | css color unit | Active border color       |
| --${PREFIX_BS}input-switch-active-bg             | .form-switch | css color unit | Active background color   |
| --${PREFIX_BS}input-switch-disabled-border-color | .form-switch | css color unit | Disabled border color     |
| --${PREFIX_BS}input-switch-disabled-bg           | .form-switch | css color unit | Disabled background color |
| --${PREFIX_BS}input-switch-disabled-dot          | .form-switch | data url svg   | Disabled component circle |
| --${PREFIX_BS}input-switch-label-color           | .form-switch | css color unit | Label color               |
| --${PREFIX_BS}input-switch-active-label-color    | .form-switch | css color unit | Active label color        |
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
    label: {
      control: 'text',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    readonly: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputSwitch>;

export const WithoutLabel: Story = {
  args: {
    id: 'componentId1',
    checked: false,
    disabled: false,
    ariaLabel: 'Label',
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

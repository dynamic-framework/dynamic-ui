import { Meta, StoryObj } from '@storybook/react-vite';

import DInputSwitch from '../../src/components/DInputSwitch/DInputSwitch';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputSwitch> = {
  title: 'Design System/Components/Input Switch',
  component: DInputSwitch,
  parameters: {
    docs: {
      description: {
        component: `
Graphical control element that allows the user to choose between two mutually exclusive states.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Switch](https://getbootstrap.com/docs/5.3/forms/checks-radios/#switches)

## CSS Variables

The Bootstrap documentation provides details on the default [Checks CSS Variables](https://getbootstrap.com/docs/5.3/forms/checks-radios/#css)

| Variable                                            | Class               | Type              | Description                |
|-----------------------------------------------------|---------------------|-------------------|----------------------------|
| --${PREFIX_BS}form-switch-width                     | .form-switch        | css length unit   | Switch width               |
| --${PREFIX_BS}form-switch-padding-start             | .form-switch        | css length unit   | Padding start              |
| --${PREFIX_BS}form-switch-border-radius             | .form-switch        | css length unit   | Border radius              |
| --${PREFIX_BS}form-switch-bg                        | .form-switch        | data url svg      | Regular image background   |
| --${PREFIX_BS}form-switch-focus-bg-image            | .form-switch        | data url svg      | Focus image background     |
| --${PREFIX_BS}form-switch-checked-bg-image          | .form-switch        | data url svg      | Checked image backgound    |
| --${PREFIX_BS}form-check-input-focus-border-color   | .form-check-input   | css color unit    | Focus border color         |
| --${PREFIX_BS}form-check-input-focus-box-shadow     | .form-check-input   | css box shadow    | Focus box shadow           |
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
    invalid: {
      control: 'boolean',
      type: 'boolean',
    },
    valid: {
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

export const DefaultValid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const DefaultInvalid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const Checked: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const Readonly: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    checked: false,
    readonly: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

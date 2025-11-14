import { Meta, StoryObj } from '@storybook/react-vite';

import DInputCheck from '../../src/components/DInputCheck/DInputCheck';
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
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'The class name for the wrapper div',
    },
    style: {
      control: 'object',
    },
    inputClassName: {
      control: 'text',
      type: 'string',
      description: 'The class name for the input element',
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

export const CheckboxHint: Story = {
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    hint: 'Assistive text',
    checked: false,
    disabled: false,
  },
};

export const CheckboxValid: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    valid: true,
  },
};

export const CheckboxInvalid: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: false,
    invalid: true,
  },
};

export const CheckboxChecked: Story = {
  args: {
    id: 'componentId5',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'componentId6',
    type: 'checkbox',
    label: 'Label',
    checked: false,
    disabled: true,
  },
};

export const CheckboxCheckedDisabled: Story = {
  args: {
    id: 'componentId7',
    type: 'checkbox',
    label: 'Label',
    checked: true,
    disabled: true,
  },
};

export const CheckboxWithInputClassName: Story = {
  args: {
    id: 'componentId8',
    type: 'checkbox',
    label: 'Custom styled input',
    checked: false,
    inputClassName: 'border-2',
  },
};

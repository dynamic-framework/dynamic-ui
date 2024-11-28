import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DInputPassword from '../../src/components/DInputPassword/DInputPassword';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';

const config: Meta<typeof DInputPassword> = {
  title: 'Design System/Components/Input Password',
  component: DInputPassword,
  parameters: {
    docs: {
      description: {
        component: `
Component composition with \`d-input\` to make a password input component.

## CSS Variables

The Bootstrap documentation provides details on the default [Input Form CSS Variables](https://getbootstrap.com/docs/5.3/forms/form-control/#css)
and so it does [Input Group CSS Variables](https://getbootstrap.com/docs/5.3/forms/input-group/#css)

| Variable                                  | Class         | Type            | Description                 |
|-------------------------------------------|---------------|-----------------|-----------------------------|
| --${PREFIX_BS}label-color                 | :root         | css color unit  | Label color                 |
| --${PREFIX_BS}label-font-weight           | :root         | css font weight | Label font weight           |
| --${PREFIX_BS}label-font-size             | :root         | css length unit | Label font size             |
| --${PREFIX_BS}label-padding-x             | :root         | css length unit | Label horizontal padding    |
| --${PREFIX_BS}label-padding-y             | :root         | css length unit | Label vertical padding      |
| --${PREFIX_BS}input-border-color          | .input-group  | css color unit  | Input border color          |
| --${PREFIX_BS}input-border-width          | .input-group  | css length unit | Input border width          |
| --${PREFIX_BS}input-border-radius         | .input-group  | css length unit | Input border radius         |
| --${PREFIX_BS}input-focus-border-color    | .input-group  | css color unit  | Input focus border color    |
| --${PREFIX_BS}input-focus-box-shadow      | .input-group  | css shadow      | Input focus box shadow      |
| --${PREFIX_BS}input-disabled-bg           | .input-group  | css color unit  | Input disable background    |
| --${PREFIX_BS}input-disabled-color        | .input-group  | css color unit  | Input disable color         |
| --${PREFIX_BS}input-disabled-border-color | .input-group  | css color unit  | Input disable border color  |
| --${PREFIX_BS}form-text-padding           | .form-text    | css length unit | Hint padding                |
| --${PREFIX_BS}form-text-gap               | .form-text    | css length unit | Space between hint elements |
| --${PREFIX_BS}form-text-color             | .form-text    | css color unit  | Hint color                  |
| --${PREFIX_BS}form-control-text-align     | .form-control | css text align  | Input text align            |
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
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    placeholder: {
      control: 'text',
      type: 'string',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    size: {
      control: {
        type: 'radio',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputPassword>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Invalid: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    invalid: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    valid: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    disabled: true,
    iconEndAriaLabel: 'show/hide password',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
    floatingLabel: true,
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInputPassword>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInputPassword {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    value: undefined,
    iconEndAriaLabel: 'show/hide password',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

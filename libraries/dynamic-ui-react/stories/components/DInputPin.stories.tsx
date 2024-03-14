import { Meta, StoryObj } from '@storybook/react';

import DInputPin from '../../src/components/DInputPin/DInputPin';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInputPin> = {
  title: 'Design System/Components/Input Pin',
  component: DInputPin,
  parameters: {
    docs: {
      description: {
        component: `
Component with a partial API of \`d-input\` to take a pin/otp code.

## CSS Variables
| Variable                                                    | Type             | Description                         |
|-------------------------------------------------------------|------------------|-------------------------------------|
| --${PREFIX_BS}label-color                                   | css color unit   | Label color                         |
| --${PREFIX_BS}label-font-weight                             | css font weight  | Label font weight                   |
| --${PREFIX_BS}label-font-size                               | css length unit  | Label font size                     |
| --${PREFIX_BS}label-padding-x                               | css length unit  | Label horizontal padding            |
| --${PREFIX_BS}label-padding-y                               | css length unit  | Label vertical padding              |
| --${PREFIX_BS}input-pin-form-gap                            | css length unit  | Space between inputs                |
| --${PREFIX_BS}input-pin-form-control-size                   | css length unit  | Input width                         |
| --${PREFIX_BS}input-pin-form-control-focus-border-color     | css color unit   | Input focus border color            |
| --${PREFIX_BS}input-pin-form-control-focus-box-shadow       | css box shadow   | Input focus box shadow              |
| --${PREFIX_BS}form-text-padding                             | css length unit  | Hint padding                        |
| --${PREFIX_BS}form-text-gap                                 | css length unit  | Space between hint elements         |
| --${PREFIX_BS}form-text-color                               | css color unit   | Hint color                          |
| --${PREFIX_BS}form-control-text-align                       | css text align   | Input text align                    |
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
    type: {
      control: 'select',
      options: ['number', 'text', 'tel'],
      type: 'string',
      description: 'Type of the inputs',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    readOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    secret: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
      description: 'Hide the characters',
    },
    characters: {
      control: 'number',
      type: 'number',
      description: 'Number of characters of the pin',
    },
    innerInputMode: {
      control: 'select',
      options: ['number', 'text', 'tel'],
      type: 'string',
      description: 'Keyboard style',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    validIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    invalidIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputPin>;

export const Default: Story = {
  args: {
    id: 'componentId1',
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

export const Error: Story = {
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

export const Confirm: Story = {
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

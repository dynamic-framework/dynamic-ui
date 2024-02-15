import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import DInput from '../../src/components/DInput/DInput';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider, DIcon } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DInput> = {
  title: 'Design System/Components/Input',
  component: DInput,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap input group elements.

Give textual form controls like \`<input>s\`, \`<textarea>s\` and \`<label>s\` an upgrade with custom styles, sizing, focus states, and more.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
+ [Bootstrap Form Control](https://getbootstrap.com/docs/5.3/forms/forcontrol/)
+ [Bootstrap Input Group](https://getbootstrap.com/docs/5.3/forms/input-group/)

## CSS Variables

| Variable                                        | Type            | Description                   |
|-------------------------------------------------|-----------------|-------------------------------|
| --${PREFIX_BS}input-control-gap                 | css length unit | Space between layout elements |
| --${PREFIX_BS}input-label-color                 | css color unit  | Label color                   |
| --${PREFIX_BS}input-label-font-weight           | css font weight | Label font weight             |
| --${PREFIX_BS}input-label-font-size             | css length unit | Label font size               |
| --${PREFIX_BS}input-label-padding-x             | css length unit | Label horizontal padding      |
| --${PREFIX_BS}input-label-padding-y             | css length unit | Label vertical padding        |
| --${PREFIX_BS}input-label-gap                   | css length unit | Space between label elements  |
| --${PREFIX_BS}input-group-border-color          | css color unit  | Input border color            |
| --${PREFIX_BS}input-group-border-width          | css length unit | Input border width            |
| --${PREFIX_BS}input-group-border-radius         | css length unit | Input border radius           |
| --${PREFIX_BS}input-group-hover-border-color    | css color unit  | Input hover border color      |
| --${PREFIX_BS}input-group-focus-border-color    | css color unit  | Input focus border color      |
| --${PREFIX_BS}input-group-focus-box-shadow      | css shadow      | Input focus box shadow        |
| --${PREFIX_BS}input-form-text-padding           | css length unit | Hint padding                  |
| --${PREFIX_BS}input-form-text-gap               | css length unit | Space between hint elements   |
| --${PREFIX_BS}input-form-text-color             | css color unit  | Hint color                    |
| --${PREFIX_BS}input-group-disabled-bg           | css color unit  | Input disable background      |
| --${PREFIX_BS}input-group-disabled-color        | css color unit  | Input disable color           |
| --${PREFIX_BS}input-group-disabled-border-color | css color unit  | Input disable border color    |
| --${PREFIX_BS}input-form-control-text-align     | css text align  | Input text align              |
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
      description: 'Name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
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
    labelIconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    labelIconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    placeholder: {
      control: 'text',
      type: 'string',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
      type: 'string',
      description: 'The type of the input',
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    inputMode: {
      control: 'text',
      type: 'string',
      description: 'Input mode',
    },
    pattern: {
      control: 'text',
      type: 'string',
      description: 'Pattern to validate',
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
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconStartDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
    },
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
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
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
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
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    onIconStartClick: {
      action: 'onIconStartClicked',
    },
    onIconEndClick: {
      action: 'onIconStartClicked',
    },
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    onFocus: {
      action: 'onFocus',
    },
    onWheel: {
      action: 'onWheel',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInput>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: '',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
  },
};

export const Value: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: 'Value',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
  },
};

export const Error: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    invalid: true,
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEnd: undefined,
    hint: 'Assistive text',
    valid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    disabled: true,
  },
};

export const Text: Story = {
  args: {
    id: 'componentId6',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: undefined,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId7',
    label: 'Label',
    placeholder: 'Placeholder',
    labelIcon: undefined,
    type: 'text',
    value: '',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
    hint: 'Assistive text',
    floatingLabel: true,
  },
};

export const CustomInputStart: Story = {
  args: {
    id: 'componentId8',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputStart: (
      <DIcon
        icon="person"
      />
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const CustomInputEnd: Story = {
  args: {
    id: 'componentId9',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    inputEnd: (
      <DIcon
        icon="arrow-right"
      />
    ),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const MaterialIcon: Story = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInput {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId10',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    iconStart: 'face_5',
    iconEnd: 'face_5',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const MaterialIconError: Story = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInput {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId11',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
    invalid: true,
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const MaterialIconConfirm: Story = {
  render: (args: ComponentProps<typeof DInput>) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DInput {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId12',
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'text',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

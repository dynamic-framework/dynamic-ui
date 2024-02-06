import type { Meta, StoryObj } from '@storybook/react';

import DInputSelect from '../../src/components/DInputSelect';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

import type { DInputSelectProps } from '../../src/components/DInputSelect';

const config: Meta<typeof DInputSelect> = {
  title: 'Design System/Components/Input Select',
  component: DInputSelect,
  parameters: {
    docs: {
      description: {
        component: `
Customize the native \`<select>s\` with custom CSS that changes the element’s initial appearance, with a partial API of \`d-input\` over the HTML select component.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Select](https://getbootstrap.com/docs/5.3/forms/select/)
+ [Bootstrap Custom Select](https://getbootstrap.com/docs/5.3/forms/input-group/#custom-select)

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
      control: 'text',
      type: 'string',
    },
    value: {
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
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
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
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    labelExtractor: {
      table: {
        defaultValue: {
          summary: '(item: any) => item?.label',
        },
      },
    },
    valueExtractor: {
      table: {
        defaultValue: {
          summary: '(item: any) => item?.value',
        },
      },
    },
    onIconStartClick: {
      action: 'onIconStartClick',
    },
    onIconEndClick: {
      action: 'onIconEndClick',
    },
    onChange: {
      action: 'onChange',
    },
    onBlur: {
      action: 'onBlur',
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputSelect>;

export const Default: Story = {
  args: {
    id: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
  },
};

export const Selected: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    value: '2',
    hint: 'Assistive text',
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    disabled: true,
  },
};

export const Icon: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
    iconStartAriaLabel: 'start action',
    iconEndAriaLabel: 'end action',
  },
};

export const Extractors: StoryObj<DInputSelectProps<{ id: string; text: string; }>> = {
  render: (args) => (
    <DInputSelect<{ id: string; text: string; }> {...args} />
  ),
  args: {
    id: 'componentId4',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { id: '1', text: 'Option 1' },
      { id: '2', text: 'Option 2' },
    ],
    labelExtractor: (item) => item.text,
    valueExtractor: (item) => item.id,
    hint: 'Assistive text',
  },
};

export const Floating: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    floatingLabel: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import DSelect from '../../src/components/DSelect';

import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

import type { OptionIcon, OptionEmoji } from '../../src/components/DSelect';
import { CONTEXT_PROVIDER_CONFIG_MATERIAL, ICONS } from '../config/constants';

const config: Meta<typeof DSelect> = {
  title: 'Design System/Components/Select',
  component: DSelect,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Wrapper%20Component-red)

To understand in more detail the aspects covered by this component, review the following documentation:

+ [React Select](https://react-select.com/home)

## CSS Variables
| Variable                                            | Class         | Type            | Description                                  |
|-----------------------------------------------------|---------------|-----------------|----------------------------------------------|
| --${PREFIX_BS}label-color                           | :root         | css color unit  | Label color                                  |
| --${PREFIX_BS}label-font-weight                     | :root         | css font weight | Label font weight                            |
| --${PREFIX_BS}label-font-size                       | :root         | css length unit | Label font size                              |
| --${PREFIX_BS}label-padding-x                       | :root         | css length unit | Label horizontal padding                     |
| --${PREFIX_BS}label-padding-y                       | :root         | css length unit | Label vertical padding                       |
| --${PREFIX_BS}form-text-padding                     | .form-text    | css length unit | Hint padding                                 |
| --${PREFIX_BS}form-text-gap                         | .form-text    | css length unit | Space between hint elements                  |
| --${PREFIX_BS}form-text-color                       | .form-text    | css color unit  | Hint color                                   |
| --${PREFIX_BS}form-control-text-align               | .form-control | css text align  | Input text align                             |
| --${PREFIX_BS}select-gap                            | .d-select     | css length unit | Space between layout elements                |
| --${PREFIX_BS}select-menu-shadow                    | .d-select     | css shadow      | Input menu shadow                            |
| --${PREFIX_BS}select-option-focus-bg                | .d-select     | css color unit  | Input menu option focus background           |
| --${PREFIX_BS}select-option-selected-color          | .d-select     | css color unit  | Input menu selected option text color        |
| --${PREFIX_BS}select-option-selected-bg             | .d-select     | css color unit  | Input menu selected option background color  |
| --${PREFIX_BS}select-option-is-checkbox-font-size   | .d-select     | css length unit | Input menu option checkbox label font size   |
| --${PREFIX_BS}select-option-is-checkbox-font-weight | .d-select     | css length unit | Input menu option checkbox label font weight |
| --${PREFIX_BS}select-option-is-checkbox-color       | .d-select     | css color unit  | Input menu option checkbox text color        |
| --${PREFIX_BS}select-option-has-icon-icon-size      | .d-select     | css length unit | Input menu option icon size                  |
| --${PREFIX_BS}select-multi-value-padding-x          | .d-select     | css length unit | Input multi value padding x                  |
| --${PREFIX_BS}select-multi-value-padding-y          | .d-select     | css length unit | Input multi value padding y                  |
| --${PREFIX_BS}select-multi-value-margin-right       | .d-select     | css length unit | Input multi value margin right               |
| --${PREFIX_BS}select-multi-value-background         | .d-select     | css color unit  | Input multi value background color           |
| --${PREFIX_BS}select-multi-value-border-radius      | .d-select     | css length unit | Input multi value border radius              |
| --${PREFIX_BS}select-multi-value-label-color        | .d-select     | css color unit  | Input multi value label color                |
| --${PREFIX_BS}select-indicator-width                | .d-select     | css length unit | Input indicator width                        |
| --${PREFIX_BS}select-indicator-height               | .d-select     | css length unit | Input indicator height                       |
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
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
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
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconEndFamilyPrefix: {
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
    menuWithMaxContent: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    clearable: {
      control: 'boolean',
      type: 'boolean',
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
    },
    rtl: {
      control: 'boolean',
      type: 'boolean',
    },
    searchable: {
      control: 'boolean',
      type: 'boolean',
    },
    multi: {
      control: 'boolean',
      type: 'boolean',
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
    onInputChange: {
      action: 'onInputChange',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DSelect>;

const OPTIONS = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const OPTIONS_WITH_ICON = [
  { label: 'Option 1', value: '1', icon: 'fire' },
  { label: 'Option 2', value: '2', icon: 'calendar' },
  { label: 'Option 3', value: '3', icon: 'camera' },
];

const OPTIONS_WITH_EMOJI = [
  { label: 'Option 1', value: '1', emoji: '😀' },
  { label: 'Option 2', value: '2', emoji: '🥶' },
  { label: 'Option 3', value: '3', emoji: '👾' },
];

export const Default: Story = {
  args: {
    id: 'componentId1',
    options: OPTIONS,
    style: {
      minWidth: '200px',
    },
  },
};

export const Selected: Story = {
  args: {
    id: 'componentId2',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px',
    },
  },
};

export const SelectedWithMenuOpen: Story = {
  args: {
    id: 'componentId3',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px',
    },
  },
};

export const Multi: Story = {
  args: {
    id: 'componentId4',
    defaultValue: [OPTIONS[1], OPTIONS[2]],
    options: OPTIONS,
    multi: true,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px',
    },
  },
};

export const MultiCheckOption: Story = {
  render: (args) => (
    <DSelect
      {...args}
      components={{
        Option: DSelect.OptionCheck,
      }}
    />
  ),
  args: {
    id: 'componentId5',
    defaultValue: [OPTIONS[1], OPTIONS[2]],
    options: OPTIONS,
    multi: true,
    defaultMenuIsOpen: true,
    hideSelectedOptions: false,
    style: {
      minWidth: '200px',
    },
  },
};

export const IconOption: StoryObj<typeof DSelect<OptionIcon>> = {
  render: (args) => (
    <DSelect<OptionIcon>
      {...args}
      components={{
        Option: DSelect.OptionIcon,
        SingleValue: DSelect.SingleValueIconText,
      }}
    />
  ),
  args: {
    id: 'componentId6',
    defaultValue: OPTIONS_WITH_ICON[2],
    options: OPTIONS_WITH_ICON,
    defaultMenuIsOpen: true,
    style: {
      minWidth: '200px',
    },
  },
};

export const EmojiOption: StoryObj<typeof DSelect<OptionEmoji>> = {
  render: (args) => (
    <DSelect<OptionEmoji>
      {...args}
      components={{
        Option: DSelect.OptionEmoji,
        SingleValue: DSelect.SingleValueEmoji,
      }}
    />
  ),
  args: {
    id: 'componentId7',
    defaultValue: OPTIONS_WITH_EMOJI[2],
    options: OPTIONS_WITH_EMOJI,
    defaultMenuIsOpen: true,
    menuWithMaxContent: true,
  },
};

export const EmojiTextOption: StoryObj<typeof DSelect<OptionEmoji>> = {
  render: (args) => (
    <DSelect<OptionEmoji>
      {...args}
      components={{
        Option: DSelect.OptionEmoji,
        SingleValue: DSelect.SingleValueEmojiText,
      }}
    />
  ),
  args: {
    id: 'componentId7',
    defaultValue: OPTIONS_WITH_EMOJI[2],
    options: OPTIONS_WITH_EMOJI,
    defaultMenuIsOpen: true,
  },
};

export const Loading: Story = {
  args: {
    id: 'componentId8',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    loading: true,
    style: {
      minWidth: '200px',
    },
  },
};

export const Layout: Story = {
  args: {
    id: 'componentId9',
    options: OPTIONS,
    label: 'Label',
    hint: 'Assistive text',
    style: {
      minWidth: '200px',
    },
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId10',
    defaultValue: OPTIONS[2],
    options: OPTIONS,
    disabled: true,
    style: {
      minWidth: '200px',
    },
  },
};

/**
 * To use material symbols or any other material symbols style icon suite you can
 * use a `DContextProvider` to achieve global configuration
 */
export const MaterialStyleIcons: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (args) => (
    <DContextProvider
      {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
    >
      <DSelect {...args} />
    </DContextProvider>
  ),
  args: {
    id: 'componentId3',
    defaultValue: [OPTIONS[0]],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    multi: true,
    style: {
      minWidth: '200px',
    },
  },
};

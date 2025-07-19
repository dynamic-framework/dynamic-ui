import type { Meta, StoryObj } from '@storybook/react-vite';

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
      description: 'The ID of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'The CSS class for the component',
    },
    style: {
      control: 'object',
      description: 'The CSS style for the component',
    },
    label: {
      control: 'text',
      type: 'string',
      description: 'The label text for the component',
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
      description: 'The icon for the label of the component',
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the label should float above the input',
    },
    labelIconFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the label icon',
    },
    labelIconFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the label icon',
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the icons',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the icons',
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
      description: 'The icon at the start of the input',
    },
    iconStartDisabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the start icon is disabled',
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      description: 'The ARIA label for the start icon',
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
      description: 'The tabindex for the start icon',
    },
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the start icon',
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the start icon',
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
      description: 'The icon at the end of the input',
    },
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the end icon is disabled',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      description: 'The ARIA label for the end icon',
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the end icon',
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the end icon',
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
      description: 'The tabindex for the end icon',
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'The hint to display, also used for validity feedback',
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Determines if the input is invalid',
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: 'Determines if the input is valid',
    },
    menuWithMaxContent: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the menu should have maximum content height',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is disabled',
    },
    clearable: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input can be cleared',
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is in a loading state',
    },
    rtl: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is right-to-left',
    },
    searchable: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is searchable',
    },
    multi: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is multi-select',
    },
    defaultInputValue: {
      control: 'text',
      type: 'string',
      description: 'The default value for the input',
    },
    defaultMenuIsOpen: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the menu should be open by default',
    },
    defaultValue: {
      control: 'object',
      description: 'The default selected value(s) for the input',
    },
    classNamePrefix: {
      control: 'text',
      type: 'string',
      description: 'The prefix for the CSS class names',
    },
    options: {
      control: 'object',
      description: 'The options for the select input',
    },
    value: {
      control: 'object',
      description: 'The selected value(s) for the input',
    },
    onFocus: {
      action: 'focused',
      description: 'Event fired when the input is focused',
    },
    onBlur: {
      action: 'blurred',
      description: 'Event fired when the input is blurred',
    },
    onKeyDown: {
      action: 'keyDowned',
      description: 'Event fired when a key is pressed down',
    },
    menuIsOpen: {
      control: 'boolean',
      description: 'Determines if the menu is open',
    },
    hideSelectedOptions: {
      control: 'boolean',
      description: 'Determines if selected options should be hidden',
    },
    closeMenuOnSelect: {
      control: 'boolean',
      description: 'Determines if the menu should close on selection',
    },
    blurInputOnSelect: {
      control: 'boolean',
      description: 'Determines if the input should be blurred on selection',
    },
    isOptionDisabled: {
      control: 'boolean',
      description: 'Determines if an option is disabled',
    },
    loadingMessage: {
      control: 'text',
      description: 'The loading message to display',
    },
    noOptionsMessage: {
      control: 'text',
      description: 'The message to display when no options are available',
    },
    menuPortalTarget: {
      control: 'text',
      description: 'The DOM element to append the menu to',
    },
    menuPlacement: {
      control: 'text',
      description: 'The placement of the menu',
    },
    menuPosition: {
      control: 'text',
      description: 'The position of the menu',
    },
    menuShouldBlockScroll: {
      control: 'boolean',
      description: 'Determines if scrolling should be blocked when the menu is open',
    },
    menuShouldScrollIntoView: {
      control: 'boolean',
      description: 'Determines if the menu should scroll into view when opened',
    },
    formatGroupLabel: {
      type: 'function',
      description: 'Function to format group labels',
    },
    formatOptionLabel: {
      type: 'function',
      description: 'Function to format option labels',
    },
    getOptionLabel: {
      type: 'function',
      description: 'Function to get the label of an option',
    },
    getOptionValue: {
      type: 'function',
      description: 'Function to get the value of an option',
    },
    inputId: {
      control: 'text',
      description: 'The ID of the input element',
    },
    inputValue: {
      control: 'text',
      description: 'The value of the input element',
    },
    instanceId: {
      control: 'text',
      description: 'The instance ID of the component',
    },
    styles: {
      control: 'object',
      description: 'Custom styles for the component',
    },
    theme: {
      control: 'object',
      description: 'Custom theme for the component',
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for the component',
    },
    tabIndex: {
      control: 'number',
      description: 'The tab index of the component',
    },
    autoFocus: {
      control: 'boolean',
      description: 'Determines if the component should autofocus',
    },
    components: {
      control: 'object',
      description: 'Custom components for the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    escapeClearsValue: {
      control: 'boolean',
      description: 'Determines if pressing escape clears the value',
    },
    filterOption: {
      type: 'function',
      description: 'Function to filter options',
    },
    openMenuOnClick: {
      control: 'boolean',
      description: 'Determines if the menu should open on click',
    },
    closeMenuOnScroll: {
      control: 'boolean',
      description: 'Determines if the menu should close on scroll',
    },
    onMenuScrollToBottom: {
      action: 'scrolledToBottom',
      description: 'Event fired when the menu is scrolled to the bottom',
    },
    onMenuScrollToTop: {
      action: 'scrolledToTop',
      description: 'Event fired when the menu is scrolled to the top',
    },
    tabSelectsValue: {
      control: 'boolean',
      description: 'Determines if pressing tab selects the value',
    },
    backspaceRemovesValue: {
      control: 'boolean',
      description: 'Determines if pressing backspace removes the value',
    },
    maxMenuHeight: {
      control: 'number',
      description: 'The maximum height of the menu',
    },
    minMenuHeight: {
      control: 'number',
      description: 'The minimum height of the menu',
    },
    openMenuOnFocus: {
      control: 'boolean',
      description: 'Determines if the menu should open on focus',
    },
    onIconStartClick: {
      action: 'onIconStartClick',
      description: 'Event fired when the start icon is clicked',
    },
    onIconEndClick: {
      action: 'onIconEndClick',
      description: 'Event fired when the end icon is clicked',
    },
    onChange: {
      action: 'onChange',
      description: 'Event fired when the value changes',
    },
    onInputChange: {
      action: 'onInputChange',
      description: 'Event fired when the input value changes',
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

export const Floating: Story = {
  args: {
    id: 'componentId14',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    floatingLabel: true,
    label: 'Floating Label',
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
    id: 'componentId15',
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

export const Invalid: Story = {
  args: {
    id: 'componentId11',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px',
    },
    invalid: true,
  },
};

export const Valid: Story = {
  args: {
    id: 'componentId12',
    defaultValue: OPTIONS[0],
    options: OPTIONS,
    style: {
      minWidth: '200px',
    },
    valid: true,
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
    id: 'componentId13',
    defaultValue: [OPTIONS[0]],
    options: OPTIONS,
    defaultMenuIsOpen: true,
    multi: true,
    style: {
      minWidth: '200px',
    },
  },
};

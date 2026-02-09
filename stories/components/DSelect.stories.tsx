import type { Meta, StoryObj } from '@storybook/react-vite';

import DSelect from '../../src/components/DSelect';

import { DContextProvider } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

import type { OptionEmoji, OptionIcon } from '../../src/components/DSelect';
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
  args: {
    menuPlacement: 'bottom',
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The ID of the input',
      table: { category: 'HTML Attributes' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'The CSS class for the component',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      description: 'The CSS style for the component',
      table: { category: 'Appearance' },
    },
    label: {
      control: 'text',
      type: 'string',
      description: 'The label text for the component',
      table: { category: 'Content' },
    },
    floatingLabel: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the label should float above the input',
      table: { category: 'Appearance' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the icons',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the icons',
      table: { category: 'Icon' },
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
      table: { category: 'Icon' },
    },
    iconStartDisabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the start icon is disabled',
      table: { category: 'Behavior' },
    },
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
      description: 'The ARIA label for the start icon',
      table: { category: 'Content' },
    },
    iconStartTabIndex: {
      control: 'number',
      type: 'number',
      description: 'The tabindex for the start icon',
      table: { category: 'HTML Attributes' },
    },
    iconStartFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the start icon',
      table: { category: 'Icon' },
    },
    iconStartFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the start icon',
      table: { category: 'Icon' },
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
      table: { category: 'Icon' },
    },
    iconEndDisabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the end icon is disabled',
      table: { category: 'Behavior' },
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
      description: 'The ARIA label for the end icon',
      table: { category: 'Content' },
    },
    iconEndFamilyClass: {
      control: 'text',
      type: 'string',
      description: 'The icon family class for the end icon',
      table: { category: 'Icon' },
    },
    iconEndFamilyPrefix: {
      control: 'text',
      type: 'string',
      description: 'The icon family prefix for the end icon',
      table: { category: 'Icon' },
    },
    iconEndTabIndex: {
      control: 'number',
      type: 'number',
      description: 'The tabindex for the end icon',
      table: { category: 'HTML Attributes' },
    },
    hint: {
      control: 'text',
      type: 'string',
      description: 'The hint to display, also used for validity feedback',
      table: { category: 'Content' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      description: 'Determines if the input is invalid',
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
      description: 'Determines if the input is valid',
    },
    menuWithMaxContent: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the menu should have maximum content height',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is disabled',
      table: { category: 'Behavior' },
    },
    clearable: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input can be cleared',
      table: { category: 'Behavior' },
    },
    loading: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is in a loading state',
      table: { category: 'Behavior' },
    },
    rtl: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is right-to-left',
      table: { category: 'Appearance' },
    },
    searchable: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is searchable',
      table: { category: 'Behavior' },
    },
    multi: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the input is multi-select',
      table: { category: 'Behavior' },
    },
    defaultInputValue: {
      control: 'text',
      type: 'string',
      description: 'The default value for the input',
      table: { category: 'Content' },
    },
    defaultMenuIsOpen: {
      control: 'boolean',
      type: 'boolean',
      description: 'Determines if the menu should be open by default',
      table: { category: 'Behavior' },
    },
    defaultValue: {
      control: 'object',
      description: 'The default selected value(s) for the input',
      table: { category: 'Content' },
    },
    classNamePrefix: {
      control: 'text',
      type: 'string',
      description: 'The prefix for the CSS class names',
      table: { category: 'Appearance' },
    },
    options: {
      control: 'object',
      description: 'The options for the select input',
      table: { category: 'Content' },
    },
    value: {
      control: 'object',
      description: 'The selected value(s) for the input',
      table: { category: 'Content' },
    },
    onFocus: {
      action: 'focused',
      description: 'Event fired when the input is focused',
      table: { category: 'Events' },
    },
    onBlur: {
      action: 'blurred',
      description: 'Event fired when the input is blurred',
      table: { category: 'Events' },
    },
    onKeyDown: {
      action: 'keyDowned',
      description: 'Event fired when a key is pressed down',
      table: { category: 'Events' },
    },
    menuIsOpen: {
      control: 'boolean',
      description: 'Determines if the menu is open',
      table: { category: 'Behavior' },
    },
    hideSelectedOptions: {
      control: 'boolean',
      description: 'Determines if selected options should be hidden',
      table: { category: 'Behavior' },
    },
    closeMenuOnSelect: {
      control: 'boolean',
      description: 'Determines if the menu should close on selection',
      table: { category: 'Behavior' },
    },
    blurInputOnSelect: {
      control: 'boolean',
      description: 'Determines if the input should be blurred on selection',
      table: { category: 'Behavior' },
    },
    isOptionDisabled: {
      control: 'boolean',
      description: 'Determines if an option is disabled',
      table: { category: 'Behavior' },
    },
    loadingMessage: {
      control: 'text',
      description: 'The loading message to display',
      table: { category: 'Content' },
    },
    noOptionsMessage: {
      control: 'text',
      description: 'The message to display when no options are available',
      table: { category: 'Content' },
    },
    menuPortalTarget: {
      control: 'text',
      description: 'The DOM element to append the menu to',
      table: { category: 'Behavior' },
    },
    menuPlacement: {
      control: { type: 'select' },
      options: ['auto', 'top', 'bottom'],
      description: 'Placement of the menu in relation to the control',
      table: {
        type: { summary: '"bottom" | "auto" | "top"' },
        defaultValue: { summary: 'bottom' },
        category: 'Appearance',
      },
    },
    menuPosition: {
      control: 'text',
      description: 'The position of the menu',
      table: { category: 'Appearance' },
    },
    menuShouldBlockScroll: {
      control: 'boolean',
      description: 'Determines if scrolling should be blocked when the menu is open',
      table: { category: 'Behavior' },
    },
    menuShouldScrollIntoView: {
      control: 'boolean',
      description: 'Determines if the menu should scroll into view when opened',
      table: { category: 'Behavior' },
    },
    formatGroupLabel: {
      type: 'function',
      description: 'Function to format group labels',
      table: { category: 'Content' },
    },
    formatOptionLabel: {
      type: 'function',
      description: 'Function to format option labels',
      table: { category: 'Content' },
    },
    getOptionLabel: {
      type: 'function',
      description: 'Function to get the label of an option',
      table: { category: 'Behavior' },
    },
    getOptionValue: {
      type: 'function',
      description: 'Function to get the value of an option',
      table: { category: 'Behavior' },
    },
    inputId: {
      control: 'text',
      description: 'The ID of the input element',
      table: { category: 'HTML Attributes' },
    },
    inputValue: {
      control: 'text',
      description: 'The value of the input element',
      table: { category: 'Content' },
    },
    instanceId: {
      control: 'text',
      description: 'The instance ID of the component',
      table: { category: 'HTML Attributes' },
    },
    styles: {
      control: 'object',
      description: 'Custom styles for the component',
      table: { category: 'Appearance' },
    },
    color: {
      control: 'object',
      description: 'Custom color for the component',
      table: { category: 'Appearance' },
    },
    'aria-label': {
      control: 'text',
      description: 'ARIA label for the component',
      table: { category: 'HTML Attributes' },
    },
    tabIndex: {
      control: 'number',
      description: 'The tab index of the component',
      table: { category: 'HTML Attributes' },
    },
    autoFocus: {
      control: 'boolean',
      description: 'Determines if the component should autofocus',
      table: { category: 'Behavior' },
    },
    components: {
      control: 'object',
      description: 'Custom components for the input',
      table: { category: 'Behavior' },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
      table: { category: 'Content' },
    },
    escapeClearsValue: {
      control: 'boolean',
      description: 'Determines if pressing escape clears the value',
      table: { category: 'Behavior' },
    },
    filterOption: {
      type: 'function',
      description: 'Function to filter options',
      table: { category: 'Behavior' },
    },
    openMenuOnClick: {
      control: 'boolean',
      description: 'Determines if the menu should open on click',
      table: { category: 'Behavior' },
    },
    closeMenuOnScroll: {
      control: 'boolean',
      description: 'Determines if the menu should close on scroll',
      table: { category: 'Behavior' },
    },
    onMenuScrollToBottom: {
      action: 'scrolledToBottom',
      description: 'Event fired when the menu is scrolled to the bottom',
      table: { category: 'Events' },
    },
    onMenuScrollToTop: {
      action: 'scrolledToTop',
      description: 'Event fired when the menu is scrolled to the top',
      table: { category: 'Events' },
    },
    tabSelectsValue: {
      control: 'boolean',
      description: 'Determines if pressing tab selects the value',
      table: { category: 'Behavior' },
    },
    backspaceRemovesValue: {
      control: 'boolean',
      description: 'Determines if pressing backspace removes the value',
      table: { category: 'Behavior' },
    },
    maxMenuHeight: {
      control: 'number',
      description: 'The maximum height of the menu',
      table: { category: 'Appearance' },
    },
    minMenuHeight: {
      control: 'number',
      description: 'The minimum height of the menu',
      table: { category: 'Appearance' },
    },
    openMenuOnFocus: {
      control: 'boolean',
      description: 'Determines if the menu should open on focus',
      table: { category: 'Behavior' },
    },
    onIconStartClick: {
      action: 'onIconStartClick',
      description: 'Event fired when the start icon is clicked',
      table: { category: 'Events' },
    },
    onIconEndClick: {
      action: 'onIconEndClick',
      description: 'Event fired when the end icon is clicked',
      table: { category: 'Events' },
    },
    onChange: {
      action: 'onChange',
      description: 'Event fired when the value changes',
      table: { category: 'Events' },
    },
    onInputChange: {
      action: 'onInputChange',
      description: 'Event fired when the input value changes',
      table: { category: 'Events' },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="d-flex justify-content-center align-items-center">
        <div className="position-relative">
          <Story />
        </div>
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
  { label: 'Option 1', value: '1', icon: 'Flame' },
  { label: 'Option 2', value: '2', icon: 'Calendar' },
  { label: 'Option 3', value: '3', icon: 'Camera' },
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

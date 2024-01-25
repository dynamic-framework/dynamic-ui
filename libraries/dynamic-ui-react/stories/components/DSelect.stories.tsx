import type { Meta, StoryObj } from '@storybook/react';

import DSelect from '../../src/components/DSelect';

import { DContextProvider } from '../../src';

import type { OptionIcon, OptionEmoji } from '../../src/components/DSelect';

const config: Meta<typeof DSelect> = {
  title: 'Design System/Components/Select',
  component: DSelect,
  argTypes: {
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
        SingleValue: DSelect.SingleValueIcon,
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

export const MaterialStyleIcons: Story = {
  render: (args) => (
    <DContextProvider
      icon={{
        materialStyle: true,
        familyPrefix: '',
        familyClass: 'material-symbols-outlined',
        xIcon: 'close',
        xLgIcon: 'close',
        chevronDownIcon: 'expand_more',
      }}
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

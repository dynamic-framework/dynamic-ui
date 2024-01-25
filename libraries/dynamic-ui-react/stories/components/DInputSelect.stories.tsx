import type { Meta, StoryObj } from '@storybook/react';

import DInputSelect from '../../src/components/DInputSelect';
import type { DInputSelectProps } from '../../src/components/DInputSelect';

import { ICONS } from '../config/constants';

const config: Meta<typeof DInputSelect> = {
  title: 'Design System/Components/Input Select',
  component: DInputSelect,
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
    label: {
      control: 'text',
      type: 'string',
    },
    className: {
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
    iconStartAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconEndAriaLabel: {
      control: 'text',
      type: 'string',
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

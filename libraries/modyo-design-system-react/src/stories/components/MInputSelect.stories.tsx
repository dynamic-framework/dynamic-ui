import { Meta, StoryObj } from '@storybook/react';

import { MInputSelect } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof MInputSelect> = {
  title: 'Design System/Components/Input Select',
  component: MInputSelect,
  argTypes: {
    mId: {
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isLoading: {
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
    onMIconStartClick: {
      action: 'onIconStartClicked',
    },
    onMIconEndClick: {
      action: 'onIconStartClicked',
    },
    onMChange: {
      action: 'onMChange',
    },
    onMBlur: {
      action: 'mBlur',
    },
  },
};

export default config;
type Story = StoryObj<typeof MInputSelect>;

export const Default: Story = {
  args: {
    mId: 'componentId1',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
  },
};

export const Disabled: Story = {
  args: {
    mId: 'componentId2',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    isDisabled: true,
  },
};

export const Icon: Story = {
  args: {
    mId: 'componentId3',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    hint: 'Assistive text',
    iconStart: 'emoji-smile-upside-down',
    iconEnd: 'emoji-smile-upside-down',
  },
};

export const Extractors: Story = {
  args: {
    mId: 'componentId4',
    label: 'Label',
    labelIcon: undefined,
    options: [
      { text: 'Option 1', id: '1' },
      { text: 'Option 2', id: '2' },
    ],
    labelExtractor: (item: { text: string; id: string }) => item.text,
    valueExtractor: (item: { text: string; id: string }) => item.id,
    hint: 'Assistive text',
  },
};

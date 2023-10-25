import { Meta, StoryObj } from '@storybook/react';

import DInputPin from '../../src/components/DInputPin/DInputPin';
import { ICONS } from '../config/constants';

const config: Meta<typeof DInputPin> = {
  title: 'Design System/Components/Input Pin',
  component: DInputPin,
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
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
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isReadOnly: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isLoading: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isSecret: {
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
    hint: {
      control: 'text',
      type: 'string',
      description: 'Hint to display, also used to display validity feedback',
    },
    isInvalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    isValid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      action: 'onChange',
    },
  },
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
    isDisabled: false,
    isLoading: false,
    isSecret: false,
    isInvalid: false,
    isValid: false,
  },
};

export const WithoutLabel: Story = {
  args: {
    id: 'componentId2',
    characters: 4,
    type: 'text',
    isDisabled: false,
    isLoading: false,
    isSecret: false,
    isInvalid: false,
    isValid: false,
  },
};

export const Error: Story = {
  args: {
    id: 'componentId3',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    isDisabled: false,
    isLoading: false,
    isSecret: false,
    isInvalid: true,
    isValid: false,
  },
};

export const Confirm: Story = {
  args: {
    id: 'componentId4',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    isDisabled: false,
    isLoading: false,
    isSecret: false,
    isInvalid: false,
    isValid: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId5',
    label: 'Label',
    characters: 4,
    type: 'text',
    hint: 'Assistive text',
    isDisabled: true,
    isLoading: false,
    isSecret: false,
    isInvalid: false,
    isValid: false,
  },
};

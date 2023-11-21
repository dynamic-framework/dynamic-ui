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

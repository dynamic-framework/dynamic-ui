import { Meta, StoryObj } from '@storybook/react';

import DInputCheck from './DInputCheck';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['checkbox', 'radio'],
    },
    value: {
      control: 'text',
      type: 'string',
      description: 'The value of the input',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    isChecked: {
      control: 'boolean',
      type: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
      type: 'boolean',
    },
    isIndeterminate: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof DInputCheck>;

export const CheckboxWithoutLabel: Story = {
  args: {
    id: 'componentId1',
    type: 'checkbox',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxDefault: Story = {
  args: {
    id: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxChecked: Story = {
  args: {
    id: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    id: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

export const RadioWithoutLabel: Story = {
  args: {
    id: 'componentId5',
    type: 'radio',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioDefault: Story = {
  args: {
    id: 'componentId6',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioChecked: Story = {
  args: {
    id: 'componentId7',
    type: 'radio',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    id: 'componentId8',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

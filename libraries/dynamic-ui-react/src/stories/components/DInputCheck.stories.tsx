import { Meta, StoryObj } from '@storybook/react';

import { DInputCheck } from '../../components';

const config: Meta<typeof DInputCheck> = {
  title: 'Design System/Components/Input Check',
  component: DInputCheck,
  argTypes: {
    innerId: {
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
    innerId: 'componentId1',
    type: 'checkbox',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxDefault: Story = {
  args: {
    innerId: 'componentId2',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxChecked: Story = {
  args: {
    innerId: 'componentId3',
    type: 'checkbox',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    innerId: 'componentId4',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

export const RadioWithoutLabel: Story = {
  args: {
    innerId: 'componentId5',
    type: 'radio',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioDefault: Story = {
  args: {
    innerId: 'componentId6',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioChecked: Story = {
  args: {
    innerId: 'componentId7',
    type: 'radio',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    innerId: 'componentId8',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

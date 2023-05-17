import { Meta, StoryObj } from '@storybook/react';

import { MFormCheck } from '../../components';

const config: Meta<typeof MFormCheck> = {
  title: 'Design System/Components/Input Check',
  component: MFormCheck,
  argTypes: {
    mId: {
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
type Story = StoryObj<typeof MFormCheck>;

export const CheckboxWithoutLabel: Story = {
  args: {
    mId: 'componentId',
    type: 'checkbox',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxDefault: Story = {
  args: {
    mId: 'componentId',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const CheckboxChecked: Story = {
  args: {
    mId: 'componentId',
    type: 'checkbox',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    mId: 'componentId',
    type: 'checkbox',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

export const RadioWithoutLabel: Story = {
  args: {
    mId: 'componentId',
    type: 'radio',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioDefault: Story = {
  args: {
    mId: 'componentId',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: false,
  },
};

export const RadioChecked: Story = {
  args: {
    mId: 'componentId',
    type: 'radio',
    label: 'Label',
    isChecked: true,
    isDisabled: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    mId: 'componentId',
    type: 'radio',
    label: 'Label',
    isChecked: false,
    isDisabled: true,
  },
};

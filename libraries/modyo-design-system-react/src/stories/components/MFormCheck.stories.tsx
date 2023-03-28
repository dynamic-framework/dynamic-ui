import { Meta, StoryObj } from '@storybook/react';

import { MFormCheck } from '../../components';

const config: Meta<typeof MFormCheck> = {
  title: 'Stencil/FormCheck',
  component: MFormCheck,
  argTypes: {
    type: {
      control: 'select',
      options: ['checkbox', 'radio'],
    },
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    isChecked: {
      control: 'boolean',
    },
    mId: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [
        undefined,
        'success',
        'error',
        'warning',
        'indeterminate',
        'loading',
      ],
    },
    isIndeterminate: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    isButton: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MFormCheck>;

export const Default: Story = {
  args: {
    mId: 'componentId',
    label: 'the label',
    type: 'checkbox',
  },
};

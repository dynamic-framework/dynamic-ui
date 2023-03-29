import { Meta, StoryObj } from '@storybook/react';

import { MPin } from '../../components';

const config: Meta<typeof MPin> = {
  title: 'Stencil/Pin',
  component: MPin,
  argTypes: {
    characters: {
      control: 'number',
    },
    theme: {
      control: 'select',
      options: [undefined, 'tertiary', 'danger', 'warning'],
    },
    type: {
      control: 'select',
      options: ['number', 'text'],
    },
    isDisabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    labelIcon: {
      control: 'text',
    },
    iconStart: {
      control: 'text',
    },
    iconEnd: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
    hintIconStart: {
      control: 'text',
    },
    hintIconEnd: {
      control: 'text',
    },
  },
};

export default config;
type Story = StoryObj<typeof MPin>;

export const Default: Story = {
  render: (args) => (
    <div className="d-flex">
      <MPin {...args} />
    </div>
  ),

  args: {
    mId: 'myPin',
    characters: 4,
    theme: undefined,
    type: 'text',
    isDisabled: false,
    isLoading: false,
  },
};

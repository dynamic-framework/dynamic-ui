import { Meta, StoryObj } from '@storybook/react';

import { MAlert } from '../../components';
import { ALL_COLORS } from '../constants';

const config: Meta<typeof MAlert> = {
  title: 'Stencil/Alert',
  component: MAlert,
  parameters: {
    docs: {
      description: {
        component: 'Design System Alert',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: ALL_COLORS,
      table: { defaultValue: { summary: 'primary' } },
    },
    showClose: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MAlert>;

export const Default: Story = {
  render: (args) => <MAlert {...args}>Default alert</MAlert>,

  args: {
    theme: 'success',
    showIcon: true,
  },
};

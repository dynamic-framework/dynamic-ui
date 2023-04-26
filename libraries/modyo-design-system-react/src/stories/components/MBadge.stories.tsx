import { Meta, StoryObj } from '@storybook/react';

import { MBadge } from '../../components';
import { ALL_COLORS } from '../constants';

const config: Meta<typeof MBadge> = {
  title: 'Stencil/Badge',
  component: MBadge,
  argTypes: {
    text: {
      control: 'text',
    },
    theme: {
      control: 'select',
      options: ALL_COLORS,
      table: { defaultValue: { summary: 'primary' } },
    },
  },
};

export default config;
type Story = StoryObj<typeof MBadge>;

export const Default: Story = {
  args: {
    theme: 'primary',
    text: 'default',
  },
};

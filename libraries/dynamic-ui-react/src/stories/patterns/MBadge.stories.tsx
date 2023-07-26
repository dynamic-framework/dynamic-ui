import { Meta, StoryObj } from '@storybook/react';

import { MBadge } from '../../components';
import { THEMES } from '../constants';

const config: Meta<typeof MBadge> = {
  title: 'Design System/Patterns/Badge',
  component: MBadge,
  argTypes: {
    text: {
      control: 'text',
      type: 'string',
      description: 'Text of badge',
    },
    theme: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
      description: 'The theme to use.',
    },
    isDot: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable dot mode',
    },
  },
};

export default config;
type Story = StoryObj<typeof MBadge>;

export const Default: Story = {
  args: {
    theme: 'primary',
    text: 'Default',
  },
};

export const Dot: Story = {
  args: {
    theme: 'primary',
    text: '+2',
    isDot: true,
  },
};

export const Empty: Story = {
  args: {
    theme: 'primary',
    text: undefined,
    isDot: true,
  },
};

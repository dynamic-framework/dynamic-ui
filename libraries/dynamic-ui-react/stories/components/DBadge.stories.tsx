import { Meta, StoryObj } from '@storybook/react';

import DBadge from '../../src/components/DBadge/DBadge';

import { THEMES } from '../config/constants';

const config: Meta<typeof DBadge> = {
  title: 'Design System/Components/Badge',
  component: DBadge,
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
type Story = StoryObj<typeof DBadge>;

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

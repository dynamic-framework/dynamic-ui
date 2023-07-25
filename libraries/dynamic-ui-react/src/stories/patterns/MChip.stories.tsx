import { Meta, StoryObj } from '@storybook/react';

import { MChip } from '../../components';
import { THEMES } from '../constants';

const config: Meta<typeof MChip> = {
  title: 'Design System/Patterns/Chip',
  component: MChip,
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
    onMClose: {
      action: 'onMClose',
    },
  },
};

export default config;
type Story = StoryObj<typeof MChip>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    text: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
  },
};

export const Icon: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire',
  },
};

export const Close: Story = {
  args: {
    theme: 'secondary',
    text: 'Default',
    icon: 'fire',
    showClose: true,
  },
};

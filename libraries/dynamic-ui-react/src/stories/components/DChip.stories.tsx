import { Meta, StoryObj } from '@storybook/react';

import { DChip } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: Meta<typeof DChip> = {
  title: 'Design System/Components/Chip',
  component: DChip,
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
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    showClose: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      type: 'boolean',
    },
    onClose: {
      action: 'onClose',
    },
  },
};

export default config;
type Story = StoryObj<typeof DChip>;

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

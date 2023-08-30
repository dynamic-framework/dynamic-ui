import { Meta, StoryObj } from '@storybook/react';

import { DAlert } from '../../components';
import { ALERT_TYPES, ICONS } from '../constants';

const config: Meta<typeof DAlert> = {
  title: 'Design System/Patterns/Alert',
  component: DAlert,
  argTypes: {
    type: {
      control: 'select',
      type: 'string',
      options: ALERT_TYPES,
      table: { defaultValue: { summary: 'light' } },
      description: 'Alert type',
    },
    icon: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
    showClose: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show close button',
    },
    showIcon: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show alert icon',
    },
    onEventClose: {
      action: 'onEventClose',
    },
  },
};

export default config;
type Story = StoryObj<typeof DAlert>;

export const Light: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
  },
};

export const Dark: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
    type: 'dark',
  },
};
export const Success: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
    type: 'success',
  },
};

export const Danger: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
    type: 'danger',
  },
};

export const Info: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
    type: 'warning',
  },
};

export const LightIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
  },
};

export const DarkIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'dark',
  },
};

export const SuccessIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'success',
  },
};

export const DangerIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'danger',
  },
};

export const InfoIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'info',
  },
};

export const WarningIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'warning',
  },
};

export const LightClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    showClose: true,
  },
};

export const DarkClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    showClose: true,
    type: 'dark',
  },
};

export const SuccessClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'success',
    showClose: true,
  },
};

export const DangerClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'danger',
    showClose: true,
  },
};

export const InfoClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'info',
    showClose: true,
  },
};

export const WarningClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    type: 'warning',
    showClose: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'clock',
    children: 'Default alert',
    type: 'warning',
    showClose: true,
  },
};

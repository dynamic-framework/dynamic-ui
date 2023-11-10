import { Meta, StoryObj } from '@storybook/react';

import DToast from '../../src/components/DToast/DToast';
import { THEMES, ICONS } from '../config/constants';

const config: Meta<typeof DToast> = {
  title: 'Design System/Patterns/Toast',
  component: DToast,
  argTypes: {
    type: {
      control: 'select',
      type: 'string',
      options: THEMES,
      table: { defaultValue: { summary: 'success' } },
      description: 'Toast type',
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
      description: 'Show toast icon',
    },
    onClose: {
      action: 'onClose',
    },
  },
};

export default config;
type Story = StoryObj<typeof DToast>;

export const Success: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
  },
};

export const Danger: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'danger',
  },
};

export const Info: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'info',
  },
};

export const Warning: Story = {
  args: {
    showIcon: false,
    children: 'Default toast',
    type: 'warning',
  },
};

export const SuccessIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'success',
  },
};

export const DangerIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'danger',
  },
};

export const InfoIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'info',
  },
};

export const WarningIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'warning',
  },
};

export const SuccessClose: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'success',
    showClose: true,
  },
};

export const DangerClose: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'danger',
    showClose: true,
  },
};

export const InfoClose: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'info',
    showClose: true,
  },
};

export const WarningClose: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'warning',
    showClose: true,
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'clock',
    children: 'Default toast',
    type: 'warning',
    showClose: true,
  },
};

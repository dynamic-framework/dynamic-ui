import { Meta, StoryObj } from '@storybook/react';

import { MAlert } from '../../components';
import { ALERT_TYPES, ICONS } from '../constants';

const config: Meta<typeof MAlert> = {
  title: 'Design System/Patterns/Alert',
  component: MAlert,
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
      description: 'Show alert icon',
    },
    showIcon: {
      control: 'boolean',
      type: 'boolean',
      description: 'Show close button',
    },
  },
};

export default config;
type Story = StoryObj<typeof MAlert>;

export const Default: Story = {
  args: {
    showIcon: false,
    children: 'Default alert',
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

export const DefaultIcon: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
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

export const DefaultClose: Story = {
  args: {
    showIcon: true,
    children: 'Default alert',
    showClose: true,
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

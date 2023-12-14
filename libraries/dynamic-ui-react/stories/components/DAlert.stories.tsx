import { Meta, StoryObj } from '@storybook/react';

import DAlert from '../../src/components/DAlert/DAlert';
import { THEMES, ICONS } from '../config/constants';

const config: Meta<typeof DAlert> = {
  title: 'Design System/Components/Alert',
  component: DAlert,
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
    soft: {
      control: 'boolean',
      type: 'boolean',
      description: 'Soft style',
    },
    onClose: {
      action: 'onClose',
    },
  },
};

export default config;
type Story = StoryObj<typeof DAlert>;

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

export const SuccessSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'success',
    soft: true,
  },
};

export const DangerSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'danger',
    soft: true,
  },
};

export const InfoSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'info',
    soft: true,
  },
};

export const WarningSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'warning',
    soft: true,
  },
};

export const PrimarySoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'primary',
    soft: true,
  },
};

export const SecondarySoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'secondary',
    soft: true,
  },
};

export const LightSoft: Story = {
  args: {
    showIcon: true,
    children: 'Default toast',
    type: 'light',
    soft: true,
  },
};

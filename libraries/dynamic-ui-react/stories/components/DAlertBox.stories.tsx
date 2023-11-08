import { Meta, StoryObj } from '@storybook/react';

import DAlertBox from '../../src/components/DAlertBox/DAlertBox';
import { ICONS } from '../config/constants';

const config: Meta<typeof DAlertBox> = {
  title: 'Design System/Patterns/AlertBox',
  component: DAlertBox,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, 'info', 'white'],
      description: 'Alert theme',
    },
    icon: {
      control: 'select',
      type: 'string',
      options: ICONS,
      description: 'Name of icon to use (in kebab-case)',
    },
  },
};

export default config;
type Story = StoryObj<typeof DAlertBox>;

export const Default: Story = {
  args: {
    children: 'Default alert',
  },
};

export const Info: Story = {
  args: {
    children: 'Info alert',
    theme: 'box-info',
  },
};

export const White: Story = {
  args: {
    children: 'White alert',
    theme: 'box-white',
  },
};

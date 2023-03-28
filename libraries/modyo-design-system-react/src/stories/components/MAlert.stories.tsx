import { StoryFn, Meta } from '@storybook/react';

import { MAlert } from '../../components';
import { THEMES } from '../constants';

const config: Meta<typeof MAlert> = {
  title: 'Stencil/Alert',
  component: MAlert,
  parameters: {
    docs: {
      description: {
        component: 'Design System Alert',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    showClose: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export default config;

export const Default = {
  render: (args) => <MAlert {...args}>Default alert</MAlert>,

  args: {
    theme: 'success',
    showIcon: true,
  },
};

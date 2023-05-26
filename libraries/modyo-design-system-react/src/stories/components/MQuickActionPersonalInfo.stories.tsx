import { Meta, StoryObj } from '@storybook/react';

import { MQuickActionPersonalInfo } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof MQuickActionPersonalInfo> = {
  title: 'Design System/Components/Quick Action Personal Info',
  component: MQuickActionPersonalInfo,
  argTypes: {
    name: {
      control: 'text',
    },
    bank: {
      control: 'text',
    },
    account: {
      control: 'text',
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
    image: {
      control: 'text',
    },
  },
};

export default config;
type Story = StoryObj<typeof MQuickActionPersonalInfo>;

export const Default: Story = {
  args: {
    name: 'Jessica Rabit',
    bank: 'Toon Bank',
    account: '**** 721',
  },
};

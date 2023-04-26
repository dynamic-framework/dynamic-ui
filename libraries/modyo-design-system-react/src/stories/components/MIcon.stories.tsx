import { Meta, StoryObj } from '@storybook/react';

import { MIcon } from '../../components';
import { FIRST_ICON } from '../constants';

const meta: Meta<typeof MIcon> = {
  title: 'Components-Molecules/Icon',
  component: MIcon,
  argTypes: {
    size: {
      control: 'text',
      table: { defaultValue: { summary: '1rem' } },
    },
    loadingDuration: {
      control: 'number',
      description: 'In seconds',
      table: { defaultValue: { summary: 1.8 } },
    },
    color: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    hasCircle: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MIcon>;

export const Default: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: false,
    isLoading: false,
  },
};

export const Circle: Story = {
  args: {
    icon: FIRST_ICON,
    size: '120px',
    hasCircle: true,
    isLoading: false,
  },
};

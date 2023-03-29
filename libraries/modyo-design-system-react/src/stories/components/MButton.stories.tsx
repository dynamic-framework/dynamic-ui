import { Meta, StoryObj } from '@storybook/react';

import { MButton } from '../../components';
import { ICONS, INPUT_STATE, THEMES } from '../constants';

const config: Meta<typeof MButton> = {
  title: 'Stencil/Button',
  component: MButton,
  parameters: {
    docs: {
      description: {
        component: 'Design System Button',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'outline', 'text', 'ghost'],
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...INPUT_STATE],
    },
    text: {
      control: 'text',
    },
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    value: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    isPill: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MButton>;

export const Default: Story = {
  args: {
    theme: 'primary',
    text: 'default',
    type: 'button',
  },
};

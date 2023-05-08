import { Meta, StoryObj } from '@storybook/react';

import { MButton } from '../../components';
import {
  COMPONENT_SIZE,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../constants';

const config: Meta<typeof MButton> = {
  title: 'Design System/Components/Button',
  component: MButton,
  argTypes: {
    theme: {
      control: 'select',
      type: { name: 'string', required: true },
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: COMPONENT_SIZE,
    },
    text: {
      control: 'text',
      type: 'string',
      description: 'The text to display.',
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['submit', 'reset', 'button'],
      table: { defaultValue: { summary: 'button' } },
      description: 'The html type of the button.',
    },
    variant: {
      type: 'string',
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'outline', 'text'],
      description: 'The variant to use.',
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
      type: 'string',
      description: 'The html value of the button.',
    },
    isLoading: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      type: 'boolean',
    },
    isPill: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      type: 'boolean',
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...INPUT_STATE],
      type: 'string',
      description: 'Change the state of the button',
    },
  },
};

export default config;
type Story = StoryObj<typeof MButton>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    isLoading: false,
    isPill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const PrimaryFocus: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    isLoading: false,
    isPill: true,
    state: 'focus-visible',
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const PrimaryIconRight: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    isLoading: false,
    isPill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const PrimaryLoading: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    isLoading: true,
    isPill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const PrimaryLoadingIconRight: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    isLoading: true,
    isPill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    isLoading: false,
    isPill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const SecondaryFocus: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    isLoading: false,
    isPill: true,
    state: 'focus-visible',
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const SecondaryIconRight: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    isLoading: false,
    isPill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const SecondaryLoading: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    isLoading: true,
    isPill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const SecondaryLoadingIconRight: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    isLoading: true,
    isPill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import DButton from '../../src/components/DButton/DButton';

import {
  COMPONENT_SIZE,
  ICONS,
  INPUT_STATE,
  THEMES,
} from '../config/constants';

const config: Meta<typeof DButton> = {
  title: 'Design System/Components/Button',
  component: DButton,
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
          undefined: 'default',
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
    loading: {
      control: 'boolean',
      table: { defaultValue: { summary: false } },
      type: 'boolean',
    },
    pill: {
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
    onClick: {
      action: 'onClick',
    },
  },
};

export default config;
type Story = StoryObj<typeof DButton>;

export const Primary: Story = {
  args: {
    theme: 'primary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: undefined,
    loading: false,
    pill: true,
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
    loading: false,
    pill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    pill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const SecondaryIconRight: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'outline',
    loading: false,
    pill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

export const Link: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    pill: true,
    iconStart: undefined,
    iconEnd: undefined,
  },
};

export const LinkIconRight: Story = {
  args: {
    theme: 'secondary',
    size: undefined,
    text: 'Default',
    type: 'button',
    variant: 'link',
    loading: false,
    pill: true,
    iconStart: undefined,
    iconEnd: 'chevron-right',
  },
};

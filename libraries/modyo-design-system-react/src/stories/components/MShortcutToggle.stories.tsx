import { Meta, StoryObj } from '@storybook/react';

import { MShortcutToggle } from '../../components';
import { ICONS, INPUT_STATE } from '../constants';

const config: Meta<typeof MShortcutToggle> = {
  title: 'Stencil/ShortcutToggle',
  component: MShortcutToggle,
  argTypes: {
    mId: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
    subtext: {
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
    isChecked: {
      control: 'boolean',
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
    white: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MShortcutToggle>;

export const Default: Story = {
  args: {
    mId: 'componentId',
    name: 'the name',
    value: 'the value',
    label: 'the label',
    white: false,
  },
};

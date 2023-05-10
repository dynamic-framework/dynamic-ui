import { Meta, StoryObj } from '@storybook/react';

import { MListItem } from '../../components';
import { ICONS, ALL_COLORS } from '../constants';

const config: Meta<typeof MListItem> = {
  title: 'Stencil/ListItem',
  component: MListItem,
  argTypes: {
    theme: {
      control: 'select',
      options: ALL_COLORS,
      table: { defaultValue: { summary: 'primary' } },
    },
    text: {
      control: 'text',
    },
    subtext: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    alternativeValue: {
      control: 'text',
    },
    isPill: {
      control: 'boolean',
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
    variant: {
      control: 'select',
      options: ['default', 'selectable', 'navegable'],
    },
    selectableProps: {
      control: {
        type: 'object',
        value: {
          id: 'the id',
          name: 'the name',
          value: '',
          checked: false,
        },
      },
      description: '`optional` to use with forms',
      table: {
        defaultValue: { summary: undefined },
      },
    },
    navegableProps: {
      control: {
        type: 'object',
        value: {
          href: '/',
          target: '',
          'aria-current': '',
        },
      },
      description: '`optional` to use with links',
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
};

export default config;
type Story = StoryObj<typeof MListItem>;

export const Default: Story = {
  args: {
    text: 'the text',
    subtext: 'the subtext',
    theme: 'primary',
    variant: 'default',
  },
};

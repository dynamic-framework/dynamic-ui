import { Meta, StoryObj } from '@storybook/react';

import { MHint } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: Meta<typeof MHint> = {
  title: 'Stencil/Hint',
  component: MHint,
  argTypes: {
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
    text: {
      control: 'text',
    },
    theme: {
      control: 'select',
      options: THEMES.filter(
        (theme) => !['light', 'primary', 'secondary'].includes(theme),
      ),
      table: { defaultValue: { summary: 'primary' } },
    },
    iconSize: {
      control: 'text',
    },
  },
};

export default config;
type Story = StoryObj<typeof MHint>;

export const Default: Story = {
  args: {
    text: 'the text',
    theme: 'info',
  },
};

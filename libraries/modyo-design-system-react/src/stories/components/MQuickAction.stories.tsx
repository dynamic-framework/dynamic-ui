import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MQuickAction } from '../../components';
import { ICONS } from '../constants';

const config: ComponentMeta<typeof MQuickAction> = {
  title: 'Stencil/QuickAction',
  component: MQuickAction,
  argTypes: {
    text: {
      control: 'text',
    },
    subtext: {
      control: 'text',
    },
    extraInfo: {
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
    variant: {
      control: 'select',
      options: ['compact', 'extended'],
    },
    actionWord: {
      control: 'text',
    },
    actionIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'hover', 'disabled', 'focus'],
    },
  },
};

export default config;

const Template: ComponentStory<typeof MQuickAction> = (args) => (
  <MQuickAction {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'the text',
  variant: 'extended',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MCounter } from '../../components';
import { ICONS } from '../constants';

const config: ComponentMeta<typeof MCounter> = {
  title: 'Stencil/Counter',
  component: MCounter,
  argTypes: {
    mId: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
    hintIconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    hintIconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    theme: {
      control: 'select',
      options: ['info', 'warning', 'danger'],
      table: { defaultValue: { summary: 'info' } },
    },
    minValue: {
      control: 'number',
    },
    maxValue: {
      control: 'number',
    },
    value: {
      control: 'number',
    },
    variant: {
      control: 'select',
      options: ['default', 'prime'],
    },
    layoutDirection: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCounter> = (args) => <MCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  theme: 'info',
  minValue: 0,
  maxValue: 100,
  value: 3,
  variant: 'default',
  layoutDirection: 'vertical',
};

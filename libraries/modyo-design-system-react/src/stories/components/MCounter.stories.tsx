import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MCounter } from '../../components';
import { ICONS } from '../constants';

const config: ComponentMeta<typeof MCounter> = {
  title: 'Stencil/Counter',
  component: MCounter,
  argTypes: {
    theme: {
      control: 'select',
      options: ['info', 'warning', 'danger'],
      table: { defaultValue: { summary: 'info' } },
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
    variant: {
      control: 'select',
      options: ['default', 'prime'],
    },
    layoutDirection: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCounter> = (args) => <MCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'componentId',
  theme: 'info',
  min: 0,
  max: 100,
  value: 3,
  variant: 'default',
  layoutDirection: 'vertical',
};

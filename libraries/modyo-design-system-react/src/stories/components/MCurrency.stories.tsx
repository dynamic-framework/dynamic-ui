import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MCurrency } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MCurrency> = {
  title: 'Stencil/Currency',
  component: MCurrency,
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
    iconMiddle: {
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
      options: THEMES.filter((theme) => !['light', 'dark'].includes(theme)),
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'prime'],
    },
    layoutDirection: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCurrency> = (args) => <MCurrency {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  label: 'the label',
  selectOptions: [
    { label: 'USD', value: 'USD' },
    { label: 'CLP', value: 'CLP' },
  ],
  placeholder: 'the placeholder',
  value: 123,
  minValue: 0,
  maxValue: 100000,
  currencyOptions: {
    symbol: '$',
    precision: 2,
    separator: ',',
    decimal: '.',
  },
  layoutDirection: 'vertical',
};

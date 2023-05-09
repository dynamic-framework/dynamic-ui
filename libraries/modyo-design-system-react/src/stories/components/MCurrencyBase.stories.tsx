import { Meta, StoryObj } from '@storybook/react';

import { MCurrencyBase } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: Meta<typeof MCurrencyBase> = {
  title: 'Stencil/CurrencyBase',
  component: MCurrencyBase,
  argTypes: {
    mId: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
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
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    minValue: {
      control: 'number',
    },
    maxValue: {
      control: 'number',
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
    isLoading: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MCurrencyBase>;

export const Default: Story = {
  args: {
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
  },
};
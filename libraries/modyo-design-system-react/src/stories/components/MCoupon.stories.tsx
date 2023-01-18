import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MCoupon } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MCoupon> = {
  title: 'Stencil/Coupon',
  component: MCoupon,
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
    hasSelect: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'number'],
    },
    buttonText: {
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
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    layoutDirection: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    isLoading: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCoupon> = (args) => <MCoupon {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  label: 'the label',
};

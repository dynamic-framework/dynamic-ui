import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MSelect } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MSelect> = {
  title: 'Stencil/Select',
  component: MSelect,
  argTypes: {
    mId: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['prime', 'full', 'transparent'],
    },
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    label: {
      control: 'text',
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
    layoutDirection: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    isLoading: {
      control: 'boolean',
    }
  },
};

export default config;

const Template: ComponentStory<typeof MSelect> = (args) => <MSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  variant: 'prime',
  options: [
    { label: 'option 1', value: '1' },
    { label: 'option 2', value: '2' },
  ],
  layoutDirection: 'vertical',
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MInput } from '../../components';
import { ICONS } from '../constants';

const config: ComponentMeta<typeof MInput> = {
  title: 'Stencil/Input',
  component: MInput,
  argTypes: {
    labelIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    isDisabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
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
  },
};

export default config;

const Template: ComponentStory<typeof MInput> = (args) => <MInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  label: 'the label',
  placeholder: 'the placeholder',
  type: 'text',
  value: 'the value',
  layoutDirection: 'vertical',
};

import { StoryFn, Meta } from '@storybook/react';

import { MInput } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof MInput> = {
  title: 'Stencil/Input',
  component: MInput,
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
    placeholder: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number'],
    },
    value: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
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
    isLoading: {
      control: 'boolean',
    },
  },
};

export default config;

export const Default = {
  args: {
    mId: 'componentId',
    label: 'the label',
    labelIcon: undefined,
    placeholder: 'the placeholder',
    type: 'text',
    value: 'the value',
    layoutDirection: 'vertical',
  },
};

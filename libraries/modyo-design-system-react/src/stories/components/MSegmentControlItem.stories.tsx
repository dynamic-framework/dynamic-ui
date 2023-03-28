import { StoryFn, Meta } from '@storybook/react';

import { MSegmentControlItem } from '../../components';
import { INPUT_STATE } from '../constants';

const config: Meta<typeof MSegmentControlItem> = {
  title: 'Stencil/SegmentControlItem',
  component: MSegmentControlItem,
  parameters: {
    docs: {
      description: {
        component: 'Design System Segment Control Item',
      },
    },
  },
  argTypes: {
    mId: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
    isChecked: {
      control: 'boolean',
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...INPUT_STATE],
    },
  },
};

export default config;

export const Default = {
  args: {
    mId: 'componentId',
    name: 'the name',
    label: 'the label',
    value: 'the value',
  },
};

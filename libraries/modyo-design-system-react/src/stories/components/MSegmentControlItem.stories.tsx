import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MSegmentControlItem } from '../../components';
import { INPUT_STATE } from '../constants';

const config: ComponentMeta<typeof MSegmentControlItem> = {
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

const Template: ComponentStory<typeof MSegmentControlItem> = (args) => (
  <MSegmentControlItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  name: 'the name',
  label: 'the label',
  value: 'the value',
};

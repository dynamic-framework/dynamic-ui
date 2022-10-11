import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MFormCheck } from '../../components';

const config: ComponentMeta<typeof MFormCheck> = {
  title: 'Stencil/FormCheck',
  component: MFormCheck,
  argTypes: {
    type: {
      control: 'select',
      options: ['checkbox', 'radio'],
    },
    name: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
    mId: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'success', 'error', 'warning', 'indeterminate', 'loading'],
    },
    indeterminate: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    isButton: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MFormCheck> = (args) => <MFormCheck {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  label: 'the label',
  type: 'checkbox',
};

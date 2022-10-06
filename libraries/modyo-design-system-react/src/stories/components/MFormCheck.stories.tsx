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
    checked: {
      control: 'boolean',
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
    isButton: {
      control: 'boolean',
    },
    value: {
      control: 'text',
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

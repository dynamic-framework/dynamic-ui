import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MFormSwitch } from '../../components';

const config: ComponentMeta<typeof MFormSwitch> = {
  title: 'Stencil/FormSwitch',
  component: MFormSwitch,
  argTypes: {
    label: {
      control: 'text',
    },
    labelOn: {
      control: 'text',
    },
    labelOff: {
      control: 'text',
    },
    mId: {
      control: 'text',
    },
    isChecked: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MFormSwitch> = (args) => <MFormSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  mId: 'componentId',
  label: 'the label',
};

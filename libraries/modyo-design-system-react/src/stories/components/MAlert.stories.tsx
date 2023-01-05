import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MAlert } from '../../components';
import { THEMES } from '../constants';

const config: ComponentMeta<typeof MAlert> = {
  title: 'Stencil/Alert',
  component: MAlert,
  parameters: {
    docs: {
      description: {
        component: 'Design System Alert',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    showClose: {
      control: 'boolean',
    },
    showIcon: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MAlert> = (args) => (
  <MAlert {...args}>
    Default alert
  </MAlert>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'success',
  showIcon: true,
};

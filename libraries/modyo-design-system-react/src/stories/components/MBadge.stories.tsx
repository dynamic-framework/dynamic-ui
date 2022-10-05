import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MBadge } from '../../components';
import { THEMES } from '../constants';

const config: ComponentMeta<typeof MBadge> = {
  title: 'Stencil/Badge',
  component: MBadge,
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
  },
};

export default config;

const Template: ComponentStory<typeof MBadge> = (args) => (
  <MBadge {...args} />
);

export const Default = Template.bind({});
Default.args = {
  theme: 'primary',
  text: 'default',
};

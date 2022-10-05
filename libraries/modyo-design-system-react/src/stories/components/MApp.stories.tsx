import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MApp } from '../../components';

const config: ComponentMeta<typeof MApp> = {
  title: 'Stencil/App',
  component: MApp,
  decorators: [
    (Story) => <Story />,
  ],
};

export default config;

/* TODO: doc
  + icon style
  + tabs style
  + input group style
  + bootstrap utilities
  + bootstrap reboot
  + bootstrap type
  + bootstrap images
  + bootstrap containers
  + bootstrap grid
  + bootstrap helpers
  + bootstrap close
  + bootstrap transitions
 */
const Template: ComponentStory<typeof MApp> = (args) => (
  <MApp {...args}>
    The awesome widget
  </MApp>
);

export const Default = Template.bind({});
Default.args = {};

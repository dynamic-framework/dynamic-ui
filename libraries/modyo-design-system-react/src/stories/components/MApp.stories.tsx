import { StoryFn, Meta } from '@storybook/react';

import { MApp } from '../../components';

const config: Meta<typeof MApp> = {
  title: 'Stencil/App',
  component: MApp,
  decorators: [(Story) => <Story />],
};

export default config;

export const Default = {
  render: (args) => <MApp {...args}>The awesome widget</MApp>,

  args: {},
};

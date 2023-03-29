import { Meta, StoryObj } from '@storybook/react';

import { MApp } from '../../components';

const config: Meta<typeof MApp> = {
  title: 'Stencil/App',
  component: MApp,
  decorators: [(Story) => <Story />],
};

export default config;
type Story = StoryObj<typeof MApp>;

export const Default: Story = {
  render: (args) => <MApp {...args}>The awesome widget</MApp>,

  args: {},
};

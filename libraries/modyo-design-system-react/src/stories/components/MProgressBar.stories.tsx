import { Meta, StoryObj } from '@storybook/react';

import { MProgressBar } from '../../components';

const config: Meta<typeof MProgressBar> = {
  title: 'Stencil/ProgressBar',
  component: MProgressBar,
  argTypes: {
    currentValue: {
      control: 'number',
    },
    minValue: {
      control: 'number',
    },
    maxValue: {
      control: 'number',
    },
    enableStripedAnimation: {
      control: 'boolean',
    },
    enableDarkMode: {
      control: 'boolean',
    },
  },
};

export default config;
type Story = StoryObj<typeof MProgressBar>;

export const Default: Story = {
  render: (args) => (
    <div className="d-flex justify-content-center p-3">
      <MProgressBar {...args} />
    </div>
  ),

  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    enableDarkMode: false,
  },
};

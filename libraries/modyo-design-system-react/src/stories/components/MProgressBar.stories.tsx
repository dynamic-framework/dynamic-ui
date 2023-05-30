import { Meta, StoryObj } from '@storybook/react';

import { MProgressBar } from '../../components';

const config: Meta<typeof MProgressBar> = {
  title: 'Design System/Components/Progress Bar',
  component: MProgressBar,
  argTypes: {
    currentValue: {
      control: 'number',
      type: 'number',
      description: 'Current progress value',
    },
    minValue: {
      control: 'number',
      type: 'number',
      description: 'Minimum value of the bar',
    },
    maxValue: {
      control: 'number',
      type: 'number',
      description: 'Maximum value of the bar',
    },
    enableStripedAnimation: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable striped animation',
      table: { defaultValue: { summary: false } },
    },
  },
};

export default config;
type Story = StoryObj<typeof MProgressBar>;

export const Default: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MProgressBar {...args} />
    </div>
  ),

  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
  },
};

export const Stripped: Story = {
  render: (args) => (
    <div
      style={{ width: '320px', height: '320px' }}
      className="d-flex flex-column align-items-stretch justify-content-center"
    >
      <MProgressBar {...args} />
    </div>
  ),

  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: true,
  },
};

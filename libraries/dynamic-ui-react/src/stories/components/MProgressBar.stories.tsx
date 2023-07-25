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
    hideCurrentValue: {
      control: 'boolean',
      type: 'boolean',
      description: 'Hide current value',
      table: { defaultValue: { summary: false } },
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
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false,
  },
};

export const Stripped: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: true,
    hideCurrentValue: false,
  },
};

export const Valueless: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 33,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true,
  },
};

export const Zero: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 0,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false,
  },
};

export const Two: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 2,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false,
  },
};

export const TwoValueless: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 2,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true,
  },
};

export const OneHundred: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <MProgressBar {...args} />
  ),
  args: {
    currentValue: 100,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false,
  },
};

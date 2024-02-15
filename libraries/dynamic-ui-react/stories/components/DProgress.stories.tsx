import { Meta, StoryObj } from '@storybook/react';

import DProgress from '../../src/components/DProgress/DProgress';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DProgress> = {
  title: 'Design System/Components/Progress',
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap Progress.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Progress](https://getbootstrap.com/docs/5.3/components/progress/)

## CSS Variables
| Variable                                   | Type              | Description                           |
|--------------------------------------------|-------------------|---------------------------------------|
| --${PREFIX_BS}progress-bar-font-weight     | css length unit   | Text font weight                      |
        `,
      },
    },
  },
  component: DProgress,
  argTypes: {
    style: {
      control: 'object',
    },
    className: {
      control: 'text',
      type: 'string',
    },
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
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DProgress>;

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
    <DProgress {...args} />
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
    <DProgress {...args} />
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
    <DProgress {...args} />
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
    <DProgress {...args} />
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
    <DProgress {...args} />
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
    <DProgress {...args} />
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
    <DProgress {...args} />
  ),
  args: {
    currentValue: 100,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: false,
  },
};

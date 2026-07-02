import { Meta, StoryObj } from '@storybook/react-vite';

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
The Bootstrap documentation provides details on the default [Progress CSS Variables](https://getbootstrap.com/docs/5.3/components/progress/#css)

| Variable                               | Class     | Type            | Description      |
|----------------------------------------|-----------|-----------------|------------------|
| --${PREFIX_BS}progress-bar-font-weight | .progress | css length unit | Text font weight |
        `,
      },
    },
  },
  component: DProgress,
  argTypes: {
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    currentValue: {
      control: 'number',
      type: 'number',
      description: 'Current progress value',
      table: { category: 'Content' },
    },
    minValue: {
      control: 'number',
      type: 'number',
      description: 'Minimum value of the bar',
      table: { category: 'Behavior' },
    },
    maxValue: {
      control: 'number',
      type: 'number',
      description: 'Maximum value of the bar',
      table: { category: 'Behavior' },
    },
    hideCurrentValue: {
      control: 'boolean',
      type: 'boolean',
      description: 'Hide current value',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    enableStripedAnimation: {
      control: 'boolean',
      type: 'boolean',
      description: 'Enable striped animation',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
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

export const CustomHeight: Story = {
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
    currentValue: 75,
    minValue: 0,
    maxValue: 100,
    enableStripedAnimation: false,
    hideCurrentValue: true,
    style: { height: '10px' },
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with custom height (10px) without text value. Useful for compact designs.',
      },
    },
  },
};

export const SeeMoreExamples: Story = {
  name: 'See More Examples',
  parameters: {
    controls: { disable: true },
    docs: {
      description: { story: '' },
      canvas: { sourceState: 'hidden' },
      source: { code: null },
    },
  },
  render: () => (
    <div
      className="alert d-flex align-items-start gap-3 p-4 rounded border border-primary-subtle bg-primary-subtle"
      role="note"
      aria-label="See more examples"
    >
      <span className="fs-4" aria-hidden="true">💡</span>
      <div>
        <strong className="d-block mb-1">Looking for more examples?</strong>
        <span className="text-secondary">
          To see more real-world usage, check the
          {' '}
          <a href="/?path=/docs/patterns-progress--docs" target="_parent">
            <strong>Patterns / Progress</strong>
          </a>
          {' '}
          stories for onboarding, uploads, and financial trackers.
        </span>
      </div>
    </div>
  ),
};

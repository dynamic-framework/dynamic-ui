import { Meta, StoryObj } from '@storybook/react-vite';

import DInputRange from '../../src/components/DInputRange/DInputRange';

const config: Meta<typeof DInputRange> = {
  title: 'Design System/Components/Input Range',
  component: DInputRange,
  parameters: {
    docs: {
      description: {
        component: `
Use our custom range inputs for consistent cross-browser styling and built-in customization.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Range](https://getbootstrap.com/docs/5.3/forms/range/#overview)
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
      table: { category: 'HTML Attributes' },
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
      table: { category: 'HTML Attributes' },
    },
    className: {
      control: 'text',
      type: 'string',
      description: 'The CSS class name of the input',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      description: 'Inline style object for the input',
      table: { category: 'Appearance' },
    },
    value: {
      control: 'number',
      type: 'number',
      description: 'The value of the input',
      table: { category: 'Content' },
    },
    label: {
      control: 'text',
      type: 'string',
      description: 'The label for the input',
      table: { category: 'Content' },
    },
    ariaLabel: {
      control: 'text',
      type: 'string',
      description: 'The ARIA label for the input',
      table: { category: 'HTML Attributes' },
    },
    min: {
      control: 'number',
      type: 'number',
      description: 'The minimum value for the input',
      table: { category: 'Behavior' },
    },
    max: {
      control: 'number',
      type: 'number',
      description: 'The maximum value for the input',
      table: { category: 'Behavior' },
    },
    step: {
      control: 'number',
      type: 'number',
      description: 'The step value for the input',
      table: { category: 'Behavior' },
    },
    filledValue: {
      control: 'boolean',
      type: 'boolean',
      description: 'To determine if the color of the track behind the thumb is changed',
      table: { category: 'Appearance' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      description: 'Whether the input is disabled or not',
      table: { category: 'Behavior' },
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function triggered when the input value changes',
      table: { category: 'Events' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DInputRange>;

export const WithoutLabel: Story = {
  args: {
    min: 1,
    max: 100,
    value: 40,
    ariaLabel: 'Label',
  },
};

export const Default: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
  },
};

export const WithoutFilledValue: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 50,
    filledValue: false,
  },
};

export const Disabled: Story = {
  args: {
    id: 'componentId2',
    label: 'Label',
    min: 1,
    max: 100,
    value: 80,
    disabled: true,
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
          To see more examples, you can review the
          {' '}
          <a href="/?path=/docs/patterns-input-range--docs" target="_parent">
            <strong>Patterns / Input Range</strong>
          </a>
          {' '}
          stories, where you will find real-world usage patterns like live value display,
          step markers, and loan simulators.
        </span>
      </div>
    </div>
  ),
};

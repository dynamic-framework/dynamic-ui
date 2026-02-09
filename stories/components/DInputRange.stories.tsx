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

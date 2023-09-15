import { Meta, StoryObj } from '@storybook/react';

import { DStepper } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof DStepper> = {
  title: 'Design System/Components/Stepper',
  component: DStepper,
  argTypes: {
    currentStep: {
      control: 'number',
      type: 'number',
      description: 'Current step number',
    },
    successIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    isVertical: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display vertical stepper',
    },
    breakpoint: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
  },
};

export default config;
type Story = StoryObj<typeof DStepper>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '420px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 1,
    options: [
      { label: 'Lorem ipsum dolor sit amet', value: 1 },
      { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ', value: 2 },
      { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', value: 3 },
    ],
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '420px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DStepper {...args} />
  ),
  args: {
    currentStep: 1,
    options: [
      { label: 'Lorem ipsum dolor sit amet', value: 1 },
      { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ', value: 2 },
      { label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', value: 3 },
    ],
    isVertical: true,
  },
};

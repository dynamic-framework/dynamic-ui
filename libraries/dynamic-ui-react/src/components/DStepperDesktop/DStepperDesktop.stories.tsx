import { Meta, StoryObj } from '@storybook/react';

import DStepperDesktop from './DStepperDesktop';
import { ICONS } from '../../stories/config/constants';

const config: Meta<typeof DStepperDesktop> = {
  title: 'Design System/Components/Stepper Desktop',
  component: DStepperDesktop,
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
  },
};

export default config;
type Story = StoryObj<typeof DStepperDesktop>;

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
    <DStepperDesktop {...args} />
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
    <DStepperDesktop {...args} />
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

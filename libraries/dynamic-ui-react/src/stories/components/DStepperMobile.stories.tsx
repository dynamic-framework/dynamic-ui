import { Meta, StoryObj } from '@storybook/react';

import { DStepperMobile } from '../../components';

const config: Meta<typeof DStepperMobile> = {
  title: 'Design System/Components/Stepper Mobile',
  component: DStepperMobile,
  argTypes: {
    currentStep: {
      control: 'number',
      type: 'number',
      description: 'Current step number',
    },
  },
};

export default config;
type Story = StoryObj<typeof DStepperMobile>;

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
    <DStepperMobile {...args} />
  ),
  args: {
    currentStep: 1,
    options: [
      {
        label: 'First step',
        description: 'Lorem ipsum dolor sit amet',
        value: 1,
      },
      {
        label: 'Second step',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        value: 2,
      },
      {
        label: 'Third step',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        value: 3,
      },
      {
        label: 'Fourth step',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        value: 4,
      },
      {
        label: 'Fifth step',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
        value: 5,
      },
    ],
  },
};

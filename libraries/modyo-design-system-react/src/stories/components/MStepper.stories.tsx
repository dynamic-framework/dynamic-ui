import { Meta, StoryObj } from '@storybook/react';

import { MStepper } from '../../components';
import { ICONS } from '../constants';

const config: Meta<typeof MStepper> = {
  title: 'Design System/Components/Stepper',
  component: MStepper,
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
  },
};

export default config;
type Story = StoryObj<typeof MStepper>;

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
    <MStepper {...args} />
  ),
  args: {
    currentStep: 1,
    options: [
      { label: 'Lorem ipsum 1', value: 1 },
      { label: 'Lorem ipsum 2', value: 2 },
      { label: 'Lorem ipsum 3', value: 3 },
    ],
  },
};

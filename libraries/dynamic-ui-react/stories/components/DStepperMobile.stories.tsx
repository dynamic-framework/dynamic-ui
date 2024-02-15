import { Meta, StoryObj } from '@storybook/react';

import DStepperMobile from '../../src/components/DStepperMobile/DStepperMobile';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DStepperMobile> = {
  title: 'Design System/Components/Stepper Mobile',
  component: DStepperMobile,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                                                   | Type               | Description                        |
|------------------------------------------------------------|--------------------|------------------------------------|
| --${PREFIX_BS}step-container-gap                           | css length unit    | Container gap                      |
| --${PREFIX_BS}step-progress-outter-size                    | css length unit    | Outter circle size                 |
| --${PREFIX_BS}step-progress-outter-z-index                 | css index unit     | Outter circle z-index              |
| --${PREFIX_BS}step-progress-outter-fill-background-color   | css color unit     | Fill background color              |
| --${PREFIX_BS}step-progress-outter-background-color        | css color unit     | Unfilled background color          |
| --${PREFIX_BS}step-progress-inner-size                     | css length unit    | Inner circle size                  |
| --${PREFIX_BS}step-progress-inner-z-index                  | css index unit     | Inner circle z-index               |
| --${PREFIX_BS}step-progress-inner-background-color         | css color unit     | Inner background color             |
| --${PREFIX_BS}step-current-step-z-index                    | css index unit     | Current step text z-index          |
| --${PREFIX_BS}step-current-step-font-weight                | css weight unit    | Current step font weight           |
| --${PREFIX_BS}step-current-step-color                      | css color unit     | Current step text color            |
| --${PREFIX_BS}step-info-max-width                          | css length unit    | Step info max width                |
| --${PREFIX_BS}step-info-label-font-size                    | css length unit    | Step label font size               |
| --${PREFIX_BS}step-info-description-font-size              | css length unit    | Step description font size         |
| --${PREFIX_BS}step-info-description-color                  | css color unit     | Step description color             |
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    currentStep: {
      control: 'number',
      type: 'number',
      description: 'Current step number',
    },
  },
  tags: ['autodocs'],
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

import { Meta, StoryObj } from '@storybook/react-vite';

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
| Variable                                                   |Class| Type               | Description                        |
|------------------------------------------------------------|-|--------------------|------------------------------------|
| --${PREFIX_BS}step-container-gap                           |.d-stepper| css length unit    | Container gap                      |
| --${PREFIX_BS}step-progress-outter-size                    |.d-stepper| css length unit    | Outter circle size                 |
| --${PREFIX_BS}step-progress-outter-z-index                 |.d-stepper| css index unit     | Outter circle z-index              |
| --${PREFIX_BS}step-progress-outter-fill-background-color   |.d-stepper| css color unit     | Fill background color              |
| --${PREFIX_BS}step-progress-outter-background-color        |.d-stepper| css color unit     | Unfilled background color          |
| --${PREFIX_BS}step-progress-inner-size                     |.d-stepper| css length unit    | Inner circle size                  |
| --${PREFIX_BS}step-progress-inner-z-index                  |.d-stepper| css index unit     | Inner circle z-index               |
| --${PREFIX_BS}step-progress-inner-background-color         |.d-stepper| css color unit     | Inner background color             |
| --${PREFIX_BS}step-current-step-z-index                    |.d-stepper| css index unit     | Current step text z-index          |
| --${PREFIX_BS}step-current-step-font-weight                |.d-stepper| css weight unit    | Current step font weight           |
| --${PREFIX_BS}step-current-step-color                      |.d-stepper| css color unit     | Current step text color            |
| --${PREFIX_BS}step-info-max-width                          |.d-stepper| css length unit    | Step info max width                |
| --${PREFIX_BS}step-info-label-font-size                    |.d-stepper| css length unit    | Step label font size               |
| --${PREFIX_BS}step-info-label-color                        |.d-stepper| css color unit     | Step label color                   |
| --${PREFIX_BS}step-info-description-font-size              |.d-stepper| css length unit    | Step description font size         |
| --${PREFIX_BS}step-info-description-color                  |.d-stepper| css color unit     | Step description color             |
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

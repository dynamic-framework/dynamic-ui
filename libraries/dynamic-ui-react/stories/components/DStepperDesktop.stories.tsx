import { Meta, StoryObj } from '@storybook/react';

import DStepperDesktop from '../../src/components/DStepperDesktop/DStepperDesktop';
import { ICONS } from '../config/constants';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DStepperDesktop> = {
  title: 'Design System/Components/Stepper Desktop',
  component: DStepperDesktop,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                                            | Type               | Description                        |
|-----------------------------------------------------|--------------------|------------------------------------|
| --${PREFIX_BS}step-icon-container-color             | css color unit     | Icon container color               |
| --${PREFIX_BS}step-icon-container-background-color  | css color unit     | Icon container background color    |
| --${PREFIX_BS}step-icon-container-size              | css length unit    | Icon container size                |
| --${PREFIX_BS}step-icon-container-border-width      | css length unit    | Icon container border width        |
| --${PREFIX_BS}step-icon-container-font-size         | css length unit    | Icon container font size           |
| --${PREFIX_BS}step-icon-container-border-color      | css color unit     | Icon container border color        |
| --${PREFIX_BS}step-icon-container-border-radius     | css length unit    | Icon container border radius       |
| --${PREFIX_BS}step-icon-container-z-index           | css index unit     | Icon container z-index             |
| --${PREFIX_BS}step-label-height                     | css length unit    | Step label height                  |
| --${PREFIX_BS}step-icon-size                        | css length unit    | Step icon size                     |
| --${PREFIX_BS}step-gap                              | css length unit    | Step gap spacing                   |
| --${PREFIX_BS}step-z-index                          | css index unit     | Step z-index                       |
| --${PREFIX_BS}step-check-text-color                 | css color unit     | Checked step text color            |
| --${PREFIX_BS}step-check-background-color           | css color unit     | Checked step background color      |
| --${PREFIX_BS}step-check-border-color               | css color unit     | Checked step border color          |
| --${PREFIX_BS}step-current-text-color               | css color unit     | Current step text color            |
| --${PREFIX_BS}step-current-background-color         | css color unit     | Current step background color      |
| --${PREFIX_BS}step-line-stroke                      | css length unit    | Step line size                     |
| --${PREFIX_BS}step-line-color                       | css color unit     | Step line color                    |
| --${PREFIX_BS}step-label-padding                    | css length unit    | Step label padding                 |
| --${PREFIX_BS}step-vertical-label-padding           | css length unit    | Step vertical label padding        |
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
    iconSuccess: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    vertical: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display vertical stepper',
    },
  },
  tags: ['autodocs'],
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
    vertical: true,
  },
};

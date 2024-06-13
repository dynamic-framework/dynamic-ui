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
![Shield Badge](https://img.shields.io/badge/Dynamic%20Component-E60063)

## CSS Variables
| Variable                                           | Class              | Type            | Description                     |
|----------------------------------------------------|--------------------|-----------------|---------------------------------|
| --${PREFIX_BS}step-icon-container-color            | .d-stepper-desktop | css color unit  | Icon container color            |
| --${PREFIX_BS}step-icon-container-background-color | .d-stepper-desktop | css color unit  | Icon container background color |
| --${PREFIX_BS}step-icon-container-size             | .d-stepper-desktop | css length unit | Icon container size             |
| --${PREFIX_BS}step-icon-container-border-width     | .d-stepper-desktop | css length unit | Icon container border width     |
| --${PREFIX_BS}step-icon-container-font-size        | .d-stepper-desktop | css length unit | Icon container font size        |
| --${PREFIX_BS}step-icon-container-border-color     | .d-stepper-desktop | css color unit  | Icon container border color     |
| --${PREFIX_BS}step-icon-container-border-radius    | .d-stepper-desktop | css length unit | Icon container border radius    |
| --${PREFIX_BS}step-icon-container-z-index          | .d-stepper-desktop | css index unit  | Icon container z-index          |
| --${PREFIX_BS}step-label-height                    | .d-stepper-desktop | css length unit | Step label height               |
| --${PREFIX_BS}step-icon-size                       | .d-stepper-desktop | css length unit | Step icon size                  |
| --${PREFIX_BS}step-gap                             | .d-stepper-desktop | css length unit | Step gap spacing                |
| --${PREFIX_BS}step-z-index                         | .d-stepper-desktop | css index unit  | Step z-index                    |
| --${PREFIX_BS}step-check-text-color                | .d-stepper-desktop | css color unit  | Checked step text color         |
| --${PREFIX_BS}step-check-background-color          | .d-stepper-desktop | css color unit  | Checked step background color   |
| --${PREFIX_BS}step-check-border-color              | .d-stepper-desktop | css color unit  | Checked step border color       |
| --${PREFIX_BS}step-current-text-color              | .d-stepper-desktop | css color unit  | Current step text color         |
| --${PREFIX_BS}step-current-background-color        | .d-stepper-desktop | css color unit  | Current step background color   |
| --${PREFIX_BS}step-line-stroke                     | .d-stepper-desktop | css length unit | Step line size                  |
| --${PREFIX_BS}step-line-color                      | .d-stepper-desktop | css color unit  | Step line color                 |
| --${PREFIX_BS}step-label-padding                   | .d-stepper-desktop | css length unit | Step label padding              |
| --${PREFIX_BS}step-vertical-label-padding          | .d-stepper-desktop | css length unit | Step vertical label padding     |
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

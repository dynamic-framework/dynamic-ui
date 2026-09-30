import { Meta, StoryObj } from '@storybook/react-vite';

import DStepperDesktop from '../../src/components/DStepperDesktop/DStepperDesktop';
import { ICONS } from '../config/constants';

const config: Meta<typeof DStepperDesktop> = {
  title: 'Design System/Components/Stepper Desktop',
  component: DStepperDesktop,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/stepper.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                               | Type       | Description           |
|----------------------------------------|------------|-----------------------|
| \`--df-stepper-gap\`                   | css length | Gap                   |
| \`--df-stepper-marker-size\`           | css length | Marker size           |
| \`--df-stepper-marker-font-size\`      | css length | Marker font size      |
| \`--df-stepper-marker-border-width\`   | css length | Marker border width   |
| \`--df-stepper-marker-radius\`         | css length | Marker radius         |
| \`--df-stepper-marker-fg\`             | css color  | Marker foreground     |
| \`--df-stepper-marker-bg\`             | css color  | Marker background     |
| \`--df-stepper-marker-border-color\`   | css color  | Marker border color   |
| \`--df-stepper-icon-size\`             | css length | Icon size             |
| \`--df-stepper-done-bg\`               | css color  | Done background       |
| \`--df-stepper-done-fg\`               | css color  | Done foreground       |
| \`--df-stepper-done-border-color\`     | css color  | Done border color     |
| \`--df-stepper-current-fg\`            | css color  | Current foreground    |
| \`--df-stepper-current-border-color\`  | css color  | Current border color  |
| \`--df-stepper-line-size\`             | css length | Line size             |
| \`--df-stepper-line-color\`            | css color  | Line color            |
| \`--df-stepper-line-done-color\`       | css color  | Line done color       |
| \`--df-stepper-label-font-size\`       | css length | Label font size       |
| \`--df-stepper-label-padding\`         | css length | Label padding         |
| \`--df-stepper-description-font-size\` | css length | Description font size |
| \`--df-stepper-description-color\`     | css color  | Description color     |
| \`--df-stepper-progress-size\`         | css length | Progress size         |
| \`--df-stepper-progress-track-color\`  | css color  | Progress track color  |
| \`--df-stepper-progress-fill-color\`   | css color  | Progress fill color   |
| \`--df-stepper-progress-thickness\`    | css length | Progress thickness    |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    currentStep: {
      control: 'number',
      type: 'number',
      description: 'Current step number',
      table: { category: 'Content' },
    },
    iconSuccess: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
      table: { category: 'Icon' },
    },
    vertical: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display vertical stepper',
      table: { category: 'Appearance' },
    },
    completed: {
      control: 'boolean',
      type: 'boolean',
      description: 'Display all steps as completed',
      table: { category: 'Behavior' },
    },
    alignStart: {
      control: 'boolean',
      type: 'boolean',
      description: 'Change text alignment',
      table: { category: 'Appearance' },
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
        className="df-flex df-flex-col df-items-stretch df-justify-center df-gap-3"
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

export const TextAlignStart: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '420px' }}
        className="df-flex df-flex-col df-items-stretch df-justify-center df-gap-3"
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
    alignStart: true,
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

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '768px', height: '420px' }}
        className="df-flex df-flex-col df-items-stretch df-justify-center df-gap-3"
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
    vertical: true,
  },
};

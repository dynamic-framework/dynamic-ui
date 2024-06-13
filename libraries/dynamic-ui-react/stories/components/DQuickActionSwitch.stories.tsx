import { Meta, StoryObj } from '@storybook/react';

import { PREFIX_BS } from '../../src/components/config';
import DQuickActionSwitch from '../../src/components/DQuickActionSwitch/DQuickActionSwitch';

const config: Meta<typeof DQuickActionSwitch> = {
  title: 'Design System/Components/Quick Action Switch',
  component: DQuickActionSwitch,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Dynamic%20Component-E60063)

## CSS Variables
| Variable                                              | Class                  | Type            | Description                  |
|-------------------------------------------------------|------------------------|-----------------|------------------------------|
| --${PREFIX_BS}quick-action-switch-gap                 | .d-quick-action-switch | css length unit | Space between content        |
| --${PREFIX_BS}quick-action-switch-padding             | .d-quick-action-switch | css length unit | Content padding              |
| --${PREFIX_BS}quick-action-switch-bg                  | .d-quick-action-switch | css color unit  | Content background color     |
| --${PREFIX_BS}quick-action-switch-border-radius       | .d-quick-action-switch | css length unit | Quick action border radius   |
| --${PREFIX_BS}quick-action-switch-content-gap         | .d-quick-action-switch | css length unit | Space between switch content |
| --${PREFIX_BS}quick-action-switch-label-font-size     | .d-quick-action-switch | css length unit | Label font size              |
| --${PREFIX_BS}quick-action-switch-label-font-weight   | .d-quick-action-switch | css font weight | Label font weight            |
| --${PREFIX_BS}quick-action-switch-label-color         | .d-quick-action-switch | css color unit  | Label color                  |
| --${PREFIX_BS}quick-action-switch-hint-font-size      | .d-quick-action-switch | css length unit | Hint font size               |
| --${PREFIX_BS}quick-action-switch-hint-font-weight    | .d-quick-action-switch | css length unit | Hint font weight             |
| --${PREFIX_BS}quick-action-switch-hint-color          | .d-quick-action-switch | css color unit  | Hint color                   |
| --${PREFIX_BS}quick-action-switch-hover-bg            | .d-quick-action-switch | css color unit  | Content hover background     |
| --${PREFIX_BS}quick-action-switch-checked-bg          | .d-quick-action-switch | css color unit  | Content checked background   |
| --${PREFIX_BS}quick-action-switch-checked-label-color | .d-quick-action-switch | css color unit  | Content checked label color  |
| --${PREFIX_BS}quick-action-switch-checked-hint-color  | .d-quick-action-switch | css color unit  | Content checked hint color   |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
      description: 'The id of the input',
    },
    name: {
      control: 'text',
      type: 'string',
      description: 'The name of the input',
    },
    label: {
      control: 'text',
      type: 'string',
    },
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    hint: {
      control: 'text',
      type: 'string',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
    onClick: {
      action: 'onClick',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DQuickActionSwitch>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId1',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false,
  },
};

export const Checked: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId2',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true,
  },
};

export const DefaultDisabled: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId3',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: false,
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '320px', height: '320px' }}
        className="d-flex flex-column align-items-stretch justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  args: {
    id: 'componentId4',
    label: 'Program',
    hint: 'This payment is applied with the periodicity and date that you define',
    checked: true,
    disabled: true,
  },
};

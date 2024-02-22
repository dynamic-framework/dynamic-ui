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
## CSS Variables
| Variable                                                      | Type              | Description                           |
|---------------------------------------------------------------|-------------------|---------------------------------------|
| --${PREFIX_BS}quick-action-switch-gap                         | css length unit   | Space between content                 |
| --${PREFIX_BS}quick-action-switch-padding                     | css length unit   | Content padding                       |
| --${PREFIX_BS}quick-action-switch-bg                          | css color unit    | Content background color              |
| --${PREFIX_BS}quick-action-switch-border-radius               | css length unit   | Quick action border radius            |
| --${PREFIX_BS}quick-action-switch-content-gap                 | css length unit   | Space between switch content          |
| --${PREFIX_BS}quick-action-switch-label-font-size             | css length unit   | Label font size                       |
| --${PREFIX_BS}quick-action-switch-label-font-weight           | css font weight   | Label font weight                     |
| --${PREFIX_BS}quick-action-switch-label-color                 | css color unit    | Label color                           |
| --${PREFIX_BS}quick-action-switch-hint-font-size              | css length unit   | Hint font size                        |
| --${PREFIX_BS}quick-action-switch-hint-font-weight            | css length unit   | Hint font weight                      |
| --${PREFIX_BS}quick-action-switch-hint-color                  | css color unit    | Hint color                            |
| --${PREFIX_BS}quick-action-switch-hover-bg                    | css color unit    | Content hover background              |
| --${PREFIX_BS}quick-action-switch-checked-bg                  | css color unit    | Content checked background            |
| --${PREFIX_BS}quick-action-switch-checked-label-color         | css color unit    | Content checked label color           |
| --${PREFIX_BS}quick-action-switch-checked-hint-color          | css color unit    | Content checked hint color            |
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

import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { PREFIX_BS } from '../../src/components/config';
import DQuickActionCheck from '../../src/components/DQuickActionCheck/DQuickActionCheck';

const config: Meta<typeof DQuickActionCheck> = {
  title: 'Design System/Components/Quick Action Check',
  component: DQuickActionCheck,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                                           | Class                 | Type            | Description                    |
|----------------------------------------------------|-----------------------|-----------------|--------------------------------|
| --${PREFIX_BS}quick-action-check-gap               | .d-quick-action-check | css length unit | Space between content elements |
| --${PREFIX_BS}quick-action-check-padding           | .d-quick-action-check | css length unit | Content padding                |
| --${PREFIX_BS}quick-action-check-bg                | .d-quick-action-check | css color unit  | Content background color       |
| --${PREFIX_BS}quick-action-check-border-radius     | .d-quick-action-check | css length unit | Quick action border radius     |
| --${PREFIX_BS}quick-action-check-line1-font-size   | .d-quick-action-check | css length unit | First line font size           |
| --${PREFIX_BS}quick-action-check-line1-font-weight | .d-quick-action-check | css font weight | First line font weight         |
| --${PREFIX_BS}quick-action-check-line1-color       | .d-quick-action-check | css color unit  | First line color               |
| --${PREFIX_BS}quick-action-check-line2-font-size   | .d-quick-action-check | css length unit | Second line font size          |
| --${PREFIX_BS}quick-action-check-line2-font-weight | .d-quick-action-check | css length unit | Second line font weight        |
| --${PREFIX_BS}quick-action-check-line2-color       | .d-quick-action-check | css color unit  | Second line color              |
| --${PREFIX_BS}quick-action-check-line3-font-size   | .d-quick-action-check | css length unit | Third line font size           |
| --${PREFIX_BS}quick-action-check-line3-font-weight | .d-quick-action-check | css length unit | Third line font weight         |
| --${PREFIX_BS}quick-action-check-line3-color       | .d-quick-action-check | css color unit  | Third line color               |
| --${PREFIX_BS}quick-action-check-hover-bg          | .d-quick-action-check | css color unit  | Content hover background       |
| --${PREFIX_BS}quick-action-check-checked-bg        | .d-quick-action-check | css color unit  | Content checked background     |
| --${PREFIX_BS}quick-action-check-checked-color     | .d-quick-action-check | css color unit  | Content checked color          |
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: 'text',
      type: 'string',
    },
    name: {
      control: 'text',
      type: 'string',
    },
    value: {
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
    line1: {
      control: 'text',
      type: 'string',
      description: 'The title',
    },
    line2: {
      control: 'text',
      type: 'string',
      description: 'The subtitle',
    },
    line3: {
      control: 'text',
      type: 'string',
      description: 'The text value',
    },
    checked: {
      control: 'boolean',
      type: 'boolean',
    },
    onChange: {
      action: 'onChange',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DQuickActionCheck>;

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
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Example: Story = {
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
  render: ({ id, ...args }: ComponentProps<typeof DQuickActionCheck>) => (
    <>
      <DQuickActionCheck id={`${id}2`} {...args} />
      <DQuickActionCheck id={`${id}3`} {...args} />
      <DQuickActionCheck id={`${id}4`} {...args} />
    </>
  ),
  args: {
    id: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
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
    id: 'componentId5',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
    checked: true,
  },
};

import { Meta, StoryObj } from '@storybook/react';

import type { ComponentProps } from 'react';

import { PREFIX_BS } from '../../src/components/config';
import DQuickActionSelect from '../../src/components/DQuickActionSelect/DQuickActionSelect';

const config: Meta<typeof DQuickActionSelect> = {
  title: 'Design System/Components/Quick Action Select',
  component: DQuickActionSelect,
  parameters: {
    docs: {
      description: {
        component: `
![Shield Badge](https://img.shields.io/badge/Dynamic%20Component-E60063)

## CSS Variables
| Variable                                            | Class                  | Type            | Description                |
|-----------------------------------------------------|------------------------|-----------------|----------------------------|
| --${PREFIX_BS}quick-action-select-padding           | .d-quick-action-select | css length unit | Content padding            |
| --${PREFIX_BS}quick-action-select-bg                | .d-quick-action-select | css color unit  | Content background color   |
| --${PREFIX_BS}quick-action-select-border-radius     | .d-quick-action-select | css length unit | Quick action border radius |
| --${PREFIX_BS}quick-action-select-line1-font-size   | .d-quick-action-select | css length unit | First line font size       |
| --${PREFIX_BS}quick-action-select-line1-font-weight | .d-quick-action-select | css font weight | First line font weight     |
| --${PREFIX_BS}quick-action-select-line1-color       | .d-quick-action-select | css color unit  | First line color           |
| --${PREFIX_BS}quick-action-select-line2-font-size   | .d-quick-action-select | css length unit | Second line font size      |
| --${PREFIX_BS}quick-action-select-line2-font-weight | .d-quick-action-select | css length unit | Second line font weight    |
| --${PREFIX_BS}quick-action-select-line2-color       | .d-quick-action-select | css color unit  | Second line color          |
| --${PREFIX_BS}quick-action-select-hover-bg          | .d-quick-action-select | css color unit  | Content hover background   |
| --${PREFIX_BS}quick-action-select-checked-bg        | .d-quick-action-select | css color unit  | Content checked background |
| --${PREFIX_BS}quick-action-select-checked-color     | .d-quick-action-select | css color unit  | Content checked color      |
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
    selected: {
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
type Story = StoryObj<typeof DQuickActionSelect>;

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
  render: ({ id, ...args }: ComponentProps<typeof DQuickActionSelect>) => (
    <>
      <DQuickActionSelect id={`${id}2`} {...args} />
      <DQuickActionSelect id={`${id}3`} {...args} />
      <DQuickActionSelect id={`${id}4`} {...args} />
    </>
  ),
  args: {
    id: 'componentId',
    name: 'name',
    line1: 'total',
    line2: '$ 7.432.450',
  },
};

export const Selected: Story = {
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
    selected: true,
  },
};

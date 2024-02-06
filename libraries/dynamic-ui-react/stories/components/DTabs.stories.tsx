import { Meta, StoryObj } from '@storybook/react';

import DTabs from '../../src/components/DTabs';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DTabs> = {
  title: 'Design System/Patterns/Tabs',
  component: DTabs,
  parameters: {
    docs: {
      description: {
        component: `
Wrapper around Bootstrap Navs & Tabs.

To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Navs & Tabs](https://getbootstrap.com/docs/5.3/components/navs-tabs/)

## CSS Variables
| Variable                                            | Type              | Description                        |
|-----------------------------------------------------|-------------------|------------------------------------|
| --${PREFIX_BS}tabs-nav-gap                          | css length unit   | Space between nav links            |
| --${PREFIX_BS}tabs-nav-padding-x                    | css length unit   | Nav padding horizontal             |
| --${PREFIX_BS}tabs-nav-padding-y                    | css length unit   | Nav padding vertical               |
| --${PREFIX_BS}tabs-link-border-height               | css length unit   | Nav link border height             |
| --${PREFIX_BS}tabs-link-border-border-radius        | css length unit   | Nav link border radius             |
| --${PREFIX_BS}tabs-link-border-active-color         | css color unit    | Nav link border active color       |
| --${PREFIX_BS}tabs-link-border-active-font-weight   | css font weight   | Nav link border active font weight |
| --${PREFIX_BS}tabs-link-border-active-bg            | css color unit    | Nav link border active background  |
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
      control: 'text',
      type: 'string',
    },
    vertical: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DTabs>;

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
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">Tab content for Tab 1</DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    vertical: false,
  },
};

export const Vertical: Story = {
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
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">Tab content for Tab 1</DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    vertical: true,
  },
};

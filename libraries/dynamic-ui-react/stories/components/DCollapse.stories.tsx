import { Meta, StoryObj } from '@storybook/react';

import DCollapse from '../../src/components/DCollapse/DCollapse';
import DIcon from '../../src/components/DIcon';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DCollapse> = {
  title: 'Design System/Patterns/Collapse',
  component: DCollapse,
  parameters: {
    docs: {
      description: {
        component: `
## CSS Variables
| Variable                                  | Type              | Description                                 |
|-------------------------------------------|-------------------|---------------------------------------------|
| --${PREFIX_BS}collapse-bg                 | css color unit    | Collapse background                         |
| --${PREFIX_BS}collapse-border-radius      | css length unit   | Collapse border radius                      |
| --${PREFIX_BS}collapse-box-shadow         | css box shadow    | Collapse box shadow                         |
| --${PREFIX_BS}collapse-button-padding-x   | css length unit   | Collapse header button padding horizontal   |
| --${PREFIX_BS}collapse-button-padding-y   | css length unit   | Collapse header button padding vertical     |
| --${PREFIX_BS}collapse-button-gap         | css length unit   | Collapse header button gap                  |
| --${PREFIX_BS}collapse-body-padding-x     | css length unit   | Collapse body padding horizontal            |
| --${PREFIX_BS}collapse-body-padding-y     | css length unit   | Collapse body padding vertical              |
| --${PREFIX_BS}collapse-separator-display  | css display       | Collapse separator display                  |
| --${PREFIX_BS}collapse-separator-height   | css length unit   | Collapse separator size                     |
| --${PREFIX_BS}collapse-separator-bg       | css color unit    | Collapse separator color                    |
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
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex align-items-center gap-3">
            <DIcon icon="fire" hasCircle />
            <h1 className="h4 m-0">Custom component</h1>
          </div>
        ),
      },
    },
    defaultCollapsed: {
      control: 'boolean',
    },
    hasSeparator: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DCollapse>;

export const HeaderText: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <p>Text</p>
    ),
    defaultCollapsed: false,
    hasSeparator: true,
  },
};

export const HeaderComponent: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <div className="d-flex align-items-center gap-3">
        <DIcon icon="fire" hasCircle />
        <h1 className="h4 m-0">Custom component</h1>
      </div>
    ),
    defaultCollapsed: false,
    hasSeparator: true,
  },
};

export const Collapsed: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapse {...args}>
      <div className="row d-flex flex-column gap-3 pt-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapse>
  ),
  args: {
    Component: (
      <p>Text</p>
    ),
    defaultCollapsed: true,
    hasSeparator: true,
  },
};

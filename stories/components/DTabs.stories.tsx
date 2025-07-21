/* eslint-disable jsx-a11y/anchor-is-valid */
import { Meta, StoryObj } from '@storybook/react-vite';

import DTabs from '../../src/components/DTabs';
import { PREFIX_BS } from '../../src/components/config';
import { TAB_VARIANTS } from '../config/constants';

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
The Bootstrap documentation provides details on the default [Tabs CSS Variables](https://getbootstrap.com/docs/5.3/components/navs-tabs/#css)

| Variable                                              | Classes                               | Type            | Description                        |
|-------------------------------------------------------|---------------------------------------|-----------------|------------------------------------|
| --${PREFIX_BS}nav-tabs-nav-gap                        | .nav-pills, .nav-underline, .nav-tabs | css length unit | Space between nav links            |
| --${PREFIX_BS}nav-tabs-link-border-active-font-weight | .nav-pills, .nav-underline, .nav-tabs | css font weight | Nav link border active font weight |
| --${PREFIX_BS}nav-tabs-border-color                   | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav border color                   |
| --${PREFIX_BS}nav-link-padding-x                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding horizontal        |
| --${PREFIX_BS}nav-link-padding-y                      | .nav-pills, .nav-underline, .nav-tabs | css length unit | Nav link padding vertical          |
| --${PREFIX_BS}nav-link-hover-bg                       | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover background          |
| --${PREFIX_BS}nav-link-hover-color                    | .nav-pills, .nav-underline, .nav-tabs | css color       | Nav link hover color               |
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
    vertical: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    variant: {
      type: 'string',
      options: TAB_VARIANTS,
      control: 'select',
      table: { defaultValue: { summary: 'underline' } },
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
        style={{ width: '576px', height: '220px' }}
        className="d-flex justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab1',
    variant: 'underline',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    className: 'mb-3',
    vertical: false,
  },
};

export const Vertical: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '576px', height: '220px' }}
        className="d-flex justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
      <DTabs.Tab tab="tab2">Tab content for Tab 2</DTabs.Tab>
    </DTabs>
  ),
  args: {
    defaultSelected: 'tab2',
    className: 'me-3',
    options: [
      { label: 'Tab 1', tab: 'tab1' },
      { label: 'Tab 2', tab: 'tab2' },
      { label: 'Tab w/o Content', tab: 'empty' },
    ],
    vertical: true,
  },
};

export const Pills: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '576px', height: '220px' }}
        className="d-flex justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
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
    variant: 'pills',
    className: 'mb-3',
  },
};

export const VerticalPills: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '576px', height: '220px' }}
        className="d-flex justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
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
    variant: 'pills',
    className: 'me-3',
  },
};

export const Tabs: Story = {
  decorators: [
    (Story) => (
      <div
        style={{ width: '576px', height: '220px' }}
        className="d-flex justify-content-center gap-3"
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DTabs {...args}>
      <DTabs.Tab tab="tab1">
        Tab content for Tab 1. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Eligendi error beatae temporibus cupiditate
        quasi ut enim vero, consectetur mollitia soluta! Officiis maxime
        laboriosam, beatae quia earum id velit, doloribus, voluptatibus
        soluta ea molestiae? Quo molestiae rem iusto atque beatae aliquam.
      </DTabs.Tab>
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
    variant: 'tabs',
    className: 'mb-3',
  },
};

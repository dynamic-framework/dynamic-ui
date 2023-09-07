import { Meta, StoryObj } from '@storybook/react';

import { DButton, DModal } from '../../components';

const config: Meta<typeof DModal> = {
  title: 'Design System/Patterns/Modal',
  component: DModal,
  argTypes: {
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    isStatic: {
      control: 'boolean',
      type: 'boolean',
    },
    isScrollable: {
      control: 'boolean',
      type: 'boolean',
    },
    isCentered: {
      control: 'boolean',
      type: 'boolean',
    },
    isFullScreen: {
      control: 'boolean',
      type: 'boolean',
    },
    fullScreenFrom: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg', 'xl', 'xxl'],
    },
    modalSize: {
      control: 'radio',
      type: 'string',
      options: ['sm', 'lg', 'xl'],
    },
    showCloseButton: {
      control: 'boolean',
      type: 'boolean',
    },
    footerActionPlacement: {
      control: 'radio',
      type: 'string',
      options: ['fill', 'start', 'end'],
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default config;
type Story = StoryObj<typeof DModal>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="header">
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </div>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'fill',
    innerClass: 'd-block',
  },
};

export const ActionsPlacementStart: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="header">
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </div>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'start',
    innerClass: 'd-block',
  },
};

export const ActionsPlacementEnd: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="header">
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </div>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'end',
    innerClass: 'd-block',
  },
};

export const WithoutHeader: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'fill',
    innerClass: 'd-block',
  },
};

export const WithoutActions: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="header">
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </div>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'fill',
    innerClass: 'd-block',
  },
};

export const OnlyBody: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: true,
    footerActionPlacement: 'fill',
    innerClass: 'd-block',
  },
};

export const WithoutCancelX: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DModal {...args}>
      <div slot="header">
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </div>
      <div slot="body">
        <p className="py-3 px-5">Modal body</p>
      </div>
      <div slot="footer">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </div>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    showCloseButton: false,
    footerActionPlacement: 'fill',
    innerClass: 'd-block',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import {
  DButton,
  DModal,
  DModalBody,
  DModalFooter,
  DModalHeader,
} from '../../components';

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
      <DModalHeader showCloseButton>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModalHeader>
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
      <DModalFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DModalFooter>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalHeader>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModalHeader>
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
      <DModalFooter actionPlacement="start">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DModalFooter>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalHeader>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModalHeader>
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
      <DModalFooter actionPlacement="end">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DModalFooter>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
      <DModalFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DModalFooter>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalHeader>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModalHeader>
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
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
      <DModalHeader>
        <h5 className="fw-bold">Do you want to reject the offer?</h5>
      </DModalHeader>
      <DModalBody>
        <p className="py-3 px-5">Modal body</p>
      </DModalBody>
      <DModalFooter>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          isPill
        />
        <DButton text="ok" className="d-grid" isPill />
      </DModalFooter>
    </DModal>
  ),
  args: {
    name: 'exampleModal',
    isStatic: false,
    isScrollable: false,
    isCentered: true,
    isFullScreen: false,
    modalSize: 'sm',
    className: 'd-block',
  },
};

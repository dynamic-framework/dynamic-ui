import { Meta, StoryObj } from '@storybook/react-vite';

import DToast from '../../src/components/DToast/DToast';
import { DIcon } from '../../src';
import { PREFIX_BS } from '../../src/components/config';

const config: Meta<typeof DToast> = {
  title: 'Design System/Components/Toast',
  component: DToast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
To understand in more detail the aspects covered by this component, review the following documentation:

+ [Bootstrap Toast](https://getbootstrap.com/docs/5.3/components/toasts/)

## CSS Variables
The Bootstrap documentation provides details on the default [Toast CSS Variables](https://getbootstrap.com/docs/5.3/components/toasts/#css)

| Variable                                | Classes    | Type              | Description                        |
|-----------------------------------------|------------|-------------------|------------------------------------|
| --${PREFIX_BS}toast-header-gap          | .toast     | css length unit   | Space between content              |
| --${PREFIX_BS}toast-body-gap            | .toast     | css font weight   | Space between content              |
| --${PREFIX_BS}toast-color               | .toast     | css color         | Toast body text color              |
| --${PREFIX_BS}toast-close-color         | .toast     | css length unit   | Close icon color                   |
| --${PREFIX_BS}toast-header-color        | .toast     | css length unit   | Toast header text color            |
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
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DToast>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Disc" color="primary" className="me-2" />
        <strong className="me-auto">Notification</strong>
        <small className="me-2">just now</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Hello! This is a toast message.
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const Success: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleCheck" color="success" className="me-2" />
        <strong className="me-auto">Success</strong>
        <small className="me-2">2 mins ago</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Your changes have been saved successfully!
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const Warning: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="AlertTriangle" color="warning" className="me-2" />
        <strong className="me-auto">Warning</strong>
        <small className="me-2">5 mins ago</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Please review your input before proceeding.
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const Danger: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleX" color="danger" className="me-2" />
        <strong className="me-auto">Error</strong>
        <small className="me-2">1 min ago</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        An error occurred while processing your request.
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const Info: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Info" color="info" className="me-2" />
        <strong className="me-auto">Information</strong>
        <small className="me-2">10 mins ago</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="X" />
        </button>
      </DToast.Header>
      <DToast.Body>
        New features are now available in your account.
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const ColoredBackgrounds: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '600px', padding: '20px' }} className="position-relative d-flex flex-column gap-3">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <DToast className="show text-bg-primary">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Primary background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-success">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Success background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-warning">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Warning background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-danger">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Danger background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show text-bg-info">
        <DToast.Body className="d-flex justify-content-between align-items-center">
          <span>Info background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toasts with colored backgrounds using Bootstrap text-bg utility classes.',
      },
    },
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
    <DToast {...args}>
      <DToast.Body className="d-flex justify-content-between align-items-center">
        <span>Simple toast without header</span>
        <button type="button" className="d-close d-close-white" aria-label="Close">
          <DIcon icon="X" />
        </button>
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
  },
};

export const Stacked: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '600px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="toast-container position-absolute top-0 end-0 p-3">
      <DToast className="show mb-2">
        <DToast.Header>
          <DIcon icon="Disc" color="primary" className="me-2" />
          <strong className="me-auto">Message 1</strong>
          <small className="me-2">just now</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          First notification message
        </DToast.Body>
      </DToast>
      <DToast className="show mb-2">
        <DToast.Header>
          <DIcon icon="CircleCheck" color="success" className="me-2" />
          <strong className="me-auto">Message 2</strong>
          <small className="me-2">2 mins ago</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          Second notification message
        </DToast.Body>
      </DToast>
      <DToast className="show">
        <DToast.Header>
          <DIcon icon="Info" color="info" className="me-2" />
          <strong className="me-auto">Message 3</strong>
          <small className="me-2">5 mins ago</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          Third notification message
        </DToast.Body>
      </DToast>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple toasts stacked together using a toast-container.',
      },
    },
  },
};

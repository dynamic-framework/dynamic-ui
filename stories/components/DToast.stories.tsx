import { Meta, StoryObj } from '@storybook/react-vite';

import { DToast } from '../../src/components';
import { DIcon } from '../../src';

const config: Meta<typeof DToast> = {
  title: 'Design System/Components/Toast',
  component: DToast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
> ⚠️ To achieve the behavior of a toast it is necessary to use the **\`DToastContainer\`** and the **\`useDToast\`** hook. For detailed guidance on the **correct usage** of toasts, please refer to the [Toast Usage](/docs/design-system-components-toast-usage--docs) page in our documentation.

## CSS Variables

Every value below is a design token: set it on the component, on an ancestor, or
on \`:root\` to retheme. The table is generated from \`tokens/component/toast.json\`,
so it cannot fall out of step with the stylesheet.

| Variable                          | Type           | Description                                             |
|-----------------------------------|----------------|---------------------------------------------------------|
| \`--df-toast-region-gap\`         | css length     | Region gap                                              |
| \`--df-toast-region-inset\`       | css length     | Region inset                                            |
| \`--df-toast-min-width\`          | css length     | Min width                                               |
| \`--df-toast-padding-block\`      | css length     | Padding block                                           |
| \`--df-toast-padding-inline\`     | css length     | Padding inline                                          |
| \`--df-toast-gap\`                | css length     | Between items in a row: icon, title, timestamp, dismiss |
| \`--df-toast-stack-gap\`          | css length     | Between the title row and the description below it      |
| \`--df-toast-radius\`             | css length     | Radius                                                  |
| \`--df-toast-border-width\`       | css length     | Border width                                            |
| \`--df-toast-font-size\`          | css length     | Font size                                               |
| \`--df-toast-bg\`                 | css color      | Background                                              |
| \`--df-toast-fg\`                 | css color      | Foreground                                              |
| \`--df-toast-border-color\`       | css color      | Border color                                            |
| \`--df-toast-shadow\`             | css box-shadow | Shadow                                                  |
| \`--df-toast-header-font-weight\` | font weight    | Header font weight                                      |
| \`--df-toast-timestamp-color\`    | css color      | Timestamp color                                         |

        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DToast>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Disc" color="primary" className="df-me-2" />
        <strong className="df-me-auto">Notification</strong>
        <small className="df-me-2">just now</small>
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
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleCheck" color="success" className="df-me-2" />
        <strong className="df-me-auto">Success</strong>
        <small className="df-me-2">2 mins ago</small>
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
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="AlertTriangle" color="warning" className="df-me-2" />
        <strong className="df-me-auto">Warning</strong>
        <small className="df-me-2">5 mins ago</small>
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
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="CircleX" color="danger" className="df-me-2" />
        <strong className="df-me-auto">Error</strong>
        <small className="df-me-2">1 min ago</small>
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
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Header>
        <DIcon icon="Info" color="info" className="df-me-2" />
        <strong className="df-me-auto">Information</strong>
        <small className="df-me-2">10 mins ago</small>
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
      <div style={{ height: '600px', padding: '20px' }} className="df-relative df-flex df-flex-col df-gap-3">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <>
      <DToast className="show df-bg-primary df-text-on-emphasis">
        <DToast.Body className="df-flex df-justify-between df-items-center">
          <span>Primary background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show df-bg-success df-text-on-emphasis">
        <DToast.Body className="df-flex df-justify-between df-items-center">
          <span>Success background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show df-bg-warning df-text-on-emphasis">
        <DToast.Body className="df-flex df-justify-between df-items-center">
          <span>Warning background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show df-bg-danger df-text-on-emphasis">
        <DToast.Body className="df-flex df-justify-between df-items-center">
          <span>Danger background toast</span>
          <button type="button" className="d-close d-close-white" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Body>
      </DToast>
      <DToast className="show df-bg-info df-text-on-emphasis">
        <DToast.Body className="df-flex df-justify-between df-items-center">
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
      <div style={{ height: '400px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DToast {...args}>
      <DToast.Body className="df-flex df-justify-between df-items-center">
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
      <div style={{ height: '600px' }} className="df-relative">
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="df-absolute df-top-0 df-end-0 df-p-3">
      <DToast className="show df-mb-2">
        <DToast.Header>
          <DIcon icon="Disc" color="primary" className="df-me-2" />
          <strong className="df-me-auto">Message 1</strong>
          <small className="df-me-2">just now</small>
          <button type="button" className="d-close" aria-label="Close">
            <DIcon icon="X" />
          </button>
        </DToast.Header>
        <DToast.Body>
          First notification message
        </DToast.Body>
      </DToast>
      <DToast className="show df-mb-2">
        <DToast.Header>
          <DIcon icon="CircleCheck" color="success" className="df-me-2" />
          <strong className="df-me-auto">Message 2</strong>
          <small className="df-me-2">2 mins ago</small>
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
          <DIcon icon="Info" color="info" className="df-me-2" />
          <strong className="df-me-auto">Message 3</strong>
          <small className="df-me-2">5 mins ago</small>
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

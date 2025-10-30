import { Meta, StoryObj } from '@storybook/react-vite';

const config: Meta = {
  title: 'Design System/Utilities/Text Background Variants',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Bootstrap provides utility classes \`text-bg-{variant}\` that automatically set the appropriate text color when using a background variant. This ensures proper contrast and readability.

Available variants: primary, secondary, success, danger, warning, info, light, dark

These classes can be applied to various components like cards, badges, toasts, and more.

+ [Bootstrap Background Colors](https://getbootstrap.com/docs/5.3/utilities/background/)
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <div className="text-bg-primary p-4 rounded">
        <strong>Primary</strong>
        <p className="mb-0 mt-2">Content with primary background</p>
      </div>
      <div className="text-bg-secondary p-4 rounded">
        <strong>Secondary</strong>
        <p className="mb-0 mt-2">Content with secondary background</p>
      </div>
      <div className="text-bg-success p-4 rounded">
        <strong>Success</strong>
        <p className="mb-0 mt-2">Content with success background</p>
      </div>
      <div className="text-bg-danger p-4 rounded">
        <strong>Danger</strong>
        <p className="mb-0 mt-2">Content with danger background</p>
      </div>
      <div className="text-bg-warning p-4 rounded">
        <strong>Warning</strong>
        <p className="mb-0 mt-2">Content with warning background</p>
      </div>
      <div className="text-bg-info p-4 rounded">
        <strong>Info</strong>
        <p className="mb-0 mt-2">Content with info background</p>
      </div>
      <div className="text-bg-light p-4 rounded">
        <strong>Light</strong>
        <p className="mb-0 mt-2">Content with light background</p>
      </div>
      <div className="text-bg-dark p-4 rounded">
        <strong>Dark</strong>
        <p className="mb-0 mt-2">Content with dark background</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'All available text-bg variants showing automatic text color adjustment for proper contrast.',
      },
    },
  },
};

export const WithBorders: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-3">
      <div className="text-bg-primary p-4 rounded border border-3">
        <strong>Primary with border</strong>
      </div>
      <div className="text-bg-secondary p-4 rounded border border-3">
        <strong>Secondary with border</strong>
      </div>
      <div className="text-bg-success p-4 rounded border border-3">
        <strong>Success with border</strong>
      </div>
      <div className="text-bg-danger p-4 rounded border border-3">
        <strong>Danger with border</strong>
      </div>
      <div className="text-bg-warning p-4 rounded border border-3">
        <strong>Warning with border</strong>
      </div>
      <div className="text-bg-info p-4 rounded border border-3">
        <strong>Info with border</strong>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text-bg variants combined with borders to create emphasized containers.',
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3">
      <div className="text-bg-primary p-2 rounded">
        <strong>Small padding (p-2)</strong>
      </div>
      <div className="text-bg-secondary p-3 rounded">
        <strong>Medium padding (p-3)</strong>
      </div>
      <div className="text-bg-success p-4 rounded">
        <strong>Large padding (p-4)</strong>
      </div>
      <div className="text-bg-info p-5 rounded">
        <strong>Extra large padding (p-5)</strong>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text-bg variants with different padding sizes to show flexibility.',
      },
    },
  },
};

export const InlineElements: Story = {
  render: () => (
    <div className="d-flex flex-wrap gap-2 align-items-center">
      <span className="text-bg-primary p-4 rounded">Primary</span>
      <span className="text-bg-secondary p-4 rounded">Secondary</span>
      <span className="text-bg-success p-4 rounded">Success</span>
      <span className="text-bg-danger p-4 rounded">Danger</span>
      <span className="text-bg-warning p-4 rounded">Warning</span>
      <span className="text-bg-info p-4 rounded">Info</span>
      <span className="text-bg-light p-4 rounded">Light</span>
      <span className="text-bg-dark p-4 rounded">Dark</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text-bg variants applied to inline elements like spans.',
      },
    },
  },
};

export const AlertMessages: Story = {
  render: () => (
    <div className="d-flex flex-column gap-3" style={{ maxWidth: '600px' }}>
      <div className="text-bg-success p-4 rounded">
        <strong>Success!</strong>
        <p className="mb-0 mt-2">Your changes have been saved successfully.</p>
      </div>
      <div className="text-bg-danger p-4 rounded">
        <strong>Error!</strong>
        <p className="mb-0 mt-2">Unable to process your request. Please try again.</p>
      </div>
      <div className="text-bg-warning p-4 rounded">
        <strong>Warning!</strong>
        <p className="mb-0 mt-2">Your session will expire in 5 minutes.</p>
      </div>
      <div className="text-bg-info p-4 rounded">
        <strong>Information</strong>
        <p className="mb-0 mt-2">This is an informational message with important details.</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text-bg variants used for alert messages and notifications.',
      },
    },
  },
};

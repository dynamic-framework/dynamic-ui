import { Meta, StoryObj } from '@storybook/react-vite';

const config: Meta = {
  title: 'Design System/Utils/Text Background Variants',
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
    <div className="df-flex df-flex-wrap df-gap-3">
      <div className="df-bg-primary df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Primary</strong>
        <p className="df-mb-0 df-mt-2">Content with primary background</p>
      </div>
      <div className="df-bg-secondary df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Secondary</strong>
        <p className="df-mb-0 df-mt-2">Content with secondary background</p>
      </div>
      <div className="df-bg-success df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Success</strong>
        <p className="df-mb-0 df-mt-2">Content with success background</p>
      </div>
      <div className="df-bg-danger df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Danger</strong>
        <p className="df-mb-0 df-mt-2">Content with danger background</p>
      </div>
      <div className="df-bg-warning df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Warning</strong>
        <p className="df-mb-0 df-mt-2">Content with warning background</p>
      </div>
      <div className="df-bg-info df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Info</strong>
        <p className="df-mb-0 df-mt-2">Content with info background</p>
      </div>
      <div className="df-bg-muted df-text-default df-p-4 df-rounded-control">
        <strong>Light</strong>
        <p className="df-mb-0 df-mt-2">Content with light background</p>
      </div>
      <div className="df-bg-inverse df-text-inverse df-p-4 df-rounded-control">
        <strong>Dark</strong>
        <p className="df-mb-0 df-mt-2">Content with dark background</p>
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
    <div className="df-flex df-flex-wrap df-gap-3">
      <div className="df-bg-primary df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
        <strong>Primary with border</strong>
      </div>
      <div className="df-bg-secondary df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
        <strong>Secondary with border</strong>
      </div>
      <div className="df-bg-success df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
        <strong>Success with border</strong>
      </div>
      <div className="df-bg-danger df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
        <strong>Danger with border</strong>
      </div>
      <div className="df-bg-warning df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
        <strong>Warning with border</strong>
      </div>
      <div className="df-bg-info df-text-on-emphasis df-p-4 df-rounded-control df-border-1 df-border-3">
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
    <div className="df-flex df-flex-col df-gap-3">
      <div className="df-bg-primary df-text-on-emphasis df-p-2 df-rounded-control">
        <strong>Small padding (p-2)</strong>
      </div>
      <div className="df-bg-secondary df-text-on-emphasis df-p-3 df-rounded-control">
        <strong>Medium padding (p-3)</strong>
      </div>
      <div className="df-bg-success df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Large padding (p-4)</strong>
      </div>
      <div className="df-bg-info df-text-on-emphasis df-p-5 df-rounded-control">
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
    <div className="df-flex df-flex-wrap df-gap-2 df-items-center">
      <span className="df-bg-primary df-text-on-emphasis df-p-4 df-rounded-control">Primary</span>
      <span className="df-bg-secondary df-text-on-emphasis df-p-4 df-rounded-control">Secondary</span>
      <span className="df-bg-success df-text-on-emphasis df-p-4 df-rounded-control">Success</span>
      <span className="df-bg-danger df-text-on-emphasis df-p-4 df-rounded-control">Danger</span>
      <span className="df-bg-warning df-text-on-emphasis df-p-4 df-rounded-control">Warning</span>
      <span className="df-bg-info df-text-on-emphasis df-p-4 df-rounded-control">Info</span>
      <span className="df-bg-muted df-text-default df-p-4 df-rounded-control">Light</span>
      <span className="df-bg-inverse df-text-inverse df-p-4 df-rounded-control">Dark</span>
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
    <div className="df-flex df-flex-col df-gap-3" style={{ maxWidth: '600px' }}>
      <div className="df-bg-success df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Success!</strong>
        <p className="df-mb-0 df-mt-2">Your changes have been saved successfully.</p>
      </div>
      <div className="df-bg-danger df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Error!</strong>
        <p className="df-mb-0 df-mt-2">Unable to process your request. Please try again.</p>
      </div>
      <div className="df-bg-warning df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Warning!</strong>
        <p className="df-mb-0 df-mt-2">Your session will expire in 5 minutes.</p>
      </div>
      <div className="df-bg-info df-text-on-emphasis df-p-4 df-rounded-control">
        <strong>Information</strong>
        <p className="df-mb-0 df-mt-2">This is an informational message with important details.</p>
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

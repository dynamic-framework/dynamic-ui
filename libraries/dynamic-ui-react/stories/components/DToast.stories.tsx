import { Meta, StoryObj } from '@storybook/react';

import DToast from '../../src/components/DToast/DToast';
import DButton from '../../src/components/DButton';
import { DIcon } from '../../src';

const config: Meta<typeof DToast> = {
  title: 'Design System/Components/Toast',
  component: DToast,
  parameters: {
    layout: 'fullscreen',
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
        <DIcon icon="square-fill" theme="secondary" className="me-2" />
        <strong className="me-auto">Bootstrap</strong>
        <small className="me-2">11 mins ago</small>
        <DButton
          type="button"
          iconStart="x"
          variant="outline"
          theme="secondary"
          size="sm"
        />
      </DToast.Header>
      <DToast.Body>
        <p>Modal body</p>
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0',
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
      <DToast.Body>
        <span>Modal body</span>
      </DToast.Body>
    </DToast>
  ),
  args: {
    className: 'show position-absolute top-0 end-0 text-bg-secondary',
  },
};

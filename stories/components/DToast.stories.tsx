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
        <DIcon icon="square-fill" theme="secondary" className="me-2" />
        <strong className="me-auto">Bootstrap</strong>
        <small className="me-2">11 mins ago</small>
        <button
          type="button"
          className="d-close"
          aria-label="Close"
        >
          <DIcon icon="x" />
        </button>
      </DToast.Header>
      <DToast.Body>
        Toast body
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

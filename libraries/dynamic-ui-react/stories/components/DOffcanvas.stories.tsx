import { Meta, StoryObj } from '@storybook/react';

import DOffcanvas from '../../src/components/DOffcanvas/DOffcanvas';
import DButton from '../../src/components/DButton';
import { PREFIX_BS } from '../../src/components/config';
import { DContextProvider } from '../../src';
import { DContextProviderConfigMaterial } from '../config/contextProviderMaterial';

const config: Meta<typeof DOffcanvas> = {
  title: 'Design System/Components/Offcanvas',
  component: DOffcanvas,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
To achieve the behavior of an offcanvas it is necessary to use the \`DOffcanvasContextProvider\` and the \`useDOffcanvasContext\` hook,
however, it is possible to create an inline offcanvas simply using \`DOffcanvas\`

This part of the documentation talks about \`DOffcanvas\` directly covering its inline use.

> To achieve the behavior of an offcanvas review the offcanvas topic in patterns


## CSS Variables
| Variable                                 | Type              | Description                                 |
|------------------------------------------|-------------------|---------------------------------------------|
| --${PREFIX_BS}offcanvas-header-gap       | css length unit   | Space between header items                  |
| --${PREFIX_BS}offcanvas-footer-gap       | css length unit   | Space between footer actions                |
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
    name: {
      control: 'text',
      type: { name: 'string', required: true },
    },
    staticBackdrop: {
      control: 'boolean',
      type: 'boolean',
    },
    scrollable: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default config;
type Story = StoryObj<typeof DOffcanvas>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};

export const CloseIcon: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DOffcanvas {...args}>
      <DOffcanvas.Header
        icon="x-circle"
        showCloseButton
      >
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer footerActionPlacement="start">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer footerActionPlacement="end">
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header showCloseButton />
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
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
    <DOffcanvas {...args}>
      <DOffcanvas.Header>
        <h5 className="fw-bold">Advanced filters</h5>
      </DOffcanvas.Header>
      <DOffcanvas.Body>
        <p>Offcanvas body</p>
      </DOffcanvas.Body>
      <DOffcanvas.Footer>
        <DButton
          text="cancel"
          theme="secondary"
          variant="outline"
          className="d-grid"
          pill
        />
        <DButton text="ok" className="d-grid" pill />
      </DOffcanvas.Footer>
    </DOffcanvas>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};

/**
 * To use material symbols or any other material symbols style icon suite you can
 * use a `DContextProvider` to achieve global configuration or use the same configuration
 * variables on the `DOffcanvas`, in this case, for the close icon on the
 * `DOffcanvas.Header` or `DOffcanvasHeader`.
 */
export const MaterialStyleCloseIcon: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DContextProvider
      {...DContextProviderConfigMaterial}
    >
      <DOffcanvas {...args}>
        <DOffcanvas.Header
          showCloseButton
        >
          <h5 className="fw-bold">Advanced filters</h5>
        </DOffcanvas.Header>
        <DOffcanvas.Body>
          <p>Offcanvas body</p>
        </DOffcanvas.Body>
        <DOffcanvas.Footer>
          <DButton
            text="cancel"
            theme="secondary"
            variant="outline"
            className="d-grid"
            pill
          />
          <DButton text="ok" className="d-grid" pill />
        </DOffcanvas.Footer>
      </DOffcanvas>
    </DContextProvider>
  ),
  args: {
    name: 'exampleOffcanvas',
    staticBackdrop: false,
    scrollable: false,
    openFrom: 'end',
  },
};

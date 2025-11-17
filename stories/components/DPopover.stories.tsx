import { Meta, StoryObj } from '@storybook/react-vite';

import DPopover from '../../src/components/DPopover/DPopover';
import DButton from '../../src/components/DButton';
import { DCard } from '../../src';

const config: Meta<typeof DPopover> = {
  title: 'Design System/Components/Popover',
  component: DPopover,
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    adjustContentToRender: {
      control: 'boolean',
      type: 'boolean',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{ height: '250px' }}
        className="d-flex justify-content-center align-items-center"
      >
        <Story />
      </div>
    ),
  ],
};

export default config;
type Story = StoryObj<typeof DPopover>;

function ButtonRenderComponent(toggle: boolean) {
  return (
    <DButton
      className="w-100"
      text="Popover on bottom"
      iconEnd={`${toggle ? 'ChevronUp' : 'ChevronDown'}`}
      stopPropagationEnabled={false}
    />
  );
}

function CodeComponent(position: string, adjustContentToRender?: boolean) {
  return `
<DPopover renderComponent={(toggle: boolean) => (
  <DButton
    text="Popover on ${position}"
    iconEnd={\`\${toggle ? 'ChevronUp' : 'ChevronDown'}\`}
    stopPropagationEnabled={false}
    ${adjustContentToRender ? 'adjustContentToRender' : ''}
  />
)}>
  <DCard>
    <DCard.Body>${position} popover</DCard.Body>
  </DCard>
</DPopover>
  `;
}

export const Default: Story = {
  render: (args) => (
    <DPopover
      {...args}
    >
      <DCard>
        <DCard.Body>Bottom popover</DCard.Body>
      </DCard>
    </DPopover>
  ),
  args: {
    renderComponent: ButtonRenderComponent,
  },
  parameters: {
    docs: {
      source: {
        code: CodeComponent('Bottom'),
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const AdjustToContent: Story = {
  render: (args) => (
    <DPopover
      {...args}
    >
      <DCard>
        <DCard.Body>Full size</DCard.Body>
      </DCard>
    </DPopover>
  ),
  args: {
    adjustContentToRender: true,
    renderComponent: ButtonRenderComponent,
  },
  parameters: {
    docs: {
      source: {
        code: CodeComponent('Bottom'),
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export const Plain: Story = {
  render: () => (
    <DPopover
      open={false}
      renderComponent={() => (
        <h4>Click me</h4>
      )}
    >
      Plain popover
    </DPopover>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<DPopover
  open={false}
  renderComponent={() => (
    <h4>Click me</h4>
  )}
>
  Plain popover
</DPopover>
        `,
      },
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

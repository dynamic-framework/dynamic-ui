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
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      table: { category: 'Appearance' },
    },
    adjustContentToRender: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
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
    />
  );
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
};

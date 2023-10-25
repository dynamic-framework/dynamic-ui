import { Meta, StoryObj } from '@storybook/react';

import DCollapseIconText from '../../src/components/DCollapseIconText/DCollapseIconText';

const config: Meta<typeof DCollapseIconText> = {
  title: 'Design System/Patterns/Collapse Icon Text',
  component: DCollapseIconText,
};

export default config;
type Story = StoryObj<typeof DCollapseIconText>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ width: '320px', height: '320px' }}>
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DCollapseIconText {...args}>
      <div className="row d-flex flex-column gap-3">
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
      </div>
    </DCollapseIconText>
  ),
  args: {
    title: 'Credit cards',
    icon: 'credit-card-2-back',
    iconSize: '1.5rem',
    iconTheme: 'primary',
  },
};

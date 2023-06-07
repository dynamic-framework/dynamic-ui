import { Meta, StoryObj } from '@storybook/react';

import { MCollapseIconText } from '../../components';

const config: Meta<typeof MCollapseIconText> = {
  title: 'Design System/Patterns/Collapse Icon Text',
  component: MCollapseIconText,
};

export default config;
type Story = StoryObj<typeof MCollapseIconText>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '320px', height: '320px' }}>
      <MCollapseIconText {...args}>
        <div className="row d-flex flex-column gap-3">
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="col-12">Lorem ipsum dolor sit amet consectetur.</div>
        </div>
      </MCollapseIconText>
    </div>
  ),

  args: {
    title: 'Credit cards',
    icon: 'credit-card-2-back',
    iconSize: '1.5rem',
    iconTheme: 'primary',
  },
};

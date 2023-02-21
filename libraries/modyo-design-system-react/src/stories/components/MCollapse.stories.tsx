import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MCollapse } from '../../components';

const config: ComponentMeta<typeof MCollapse> = {
  title: 'React/Components/Collapse',
  component: MCollapse,
  argTypes: {
    Component: {
      options: ['Text', 'Custom'],
      mapping: {
        Text: 'Simple text',
        Custom: (
          <div className="d-flex gap-3">
            <h4 className="m-0 fw-bold">
              Custom component
            </h4>
          </div>
        ),
      },
    },
    isCollapsed: {
      control: 'boolean',
    },
    hasSeparator: {
      control: 'boolean',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCollapse> = (args) => (
  <MCollapse {...args}>
    <div className="row d-flex flex-column gap-3">
      <div className="col-12">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <div className="col-12">
        Lorem ipsum dolor sit amet consectetur.
      </div>
      <div className="col-12">
        Lorem ipsum dolor sit amet consectetur.
      </div>
    </div>
  </MCollapse>
);

export const Default = Template.bind({});
Default.args = {
  Component: 'Text',
  isCollapsed: false,
  hasSeparator: true,
};

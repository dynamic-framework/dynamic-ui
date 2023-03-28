import { StoryFn, Meta } from "@storybook/react";

import { MSegmentControl, MSegmentControlItem } from "../../components";

const config: Meta<typeof MSegmentControl> = {
  title: "Stencil/SegmentControl",
  component: MSegmentControl,
  parameters: {
    docs: {
      description: {
        component: "Design System Segment Control",
      },
    },
  },
  argTypes: {
    description: {
      control: "text",
    },
  },
};

export default config;

export const Default = {
  render: (args) => (
    <MSegmentControl {...args}>
      <MSegmentControlItem
        mId="segment1"
        label="the label1"
        name="the name"
        value="the value"
      />
      <MSegmentControlItem
        mId="segment2"
        label="the label2"
        name="the name"
        value="the value"
      />
      <MSegmentControlItem
        mId="segment3"
        label="the label3"
        name="the name"
        value="the value"
      />
    </MSegmentControl>
  ),

  args: {},
};

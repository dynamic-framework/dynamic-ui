import { StoryFn, Meta } from "@storybook/react";

import { MSkeleton } from "../../components";

const config: Meta<typeof MSkeleton> = {
  title: "React/Components/Skeleton",
  component: MSkeleton,
  argTypes: {
    speed: {
      control: "number",
    },
    viewBox: {
      control: "text",
    },
    backgroundColor: {
      control: "color",
    },
    foregroundColor: {
      control: "color",
    },
  },
};

export default config;

export const Default = {
  render: (args) => (
    <MSkeleton {...args}>
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </MSkeleton>
  ),

  args: {},
};

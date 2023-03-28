import { StoryFn, Meta } from "@storybook/react";

import { MBadge } from "../../components";
import { THEMES } from "../constants";

const config: Meta<typeof MBadge> = {
  title: "Stencil/Badge",
  component: MBadge,
  argTypes: {
    text: {
      control: "text",
    },
    theme: {
      control: "select",
      options: THEMES,
      table: { defaultValue: { summary: "primary" } },
    },
  },
};

export default config;

export const Default = {
  args: {
    theme: "primary",
    text: "default",
  },
};

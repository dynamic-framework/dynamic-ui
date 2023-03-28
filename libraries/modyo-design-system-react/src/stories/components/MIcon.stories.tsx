import { StoryFn, Meta } from "@storybook/react";

import { MIcon } from "../../components";
import { ICONS, THEMES } from "../constants";

const config: Meta<typeof MIcon> = {
  title: "Stencil/Icon",
  component: MIcon,
  argTypes: {
    icon: {
      control: "select",
      options: ICONS,
    },
    theme: {
      control: "select",
      options: THEMES,
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "text",
    },
    isLoading: {
      control: "boolean",
    },
    duration: {
      control: "number",
    },
  },
};

export default config;

export const Default = {
  args: {
    icon: ICONS[0],
    theme: "info",
  },
};

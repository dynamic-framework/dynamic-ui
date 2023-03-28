import { StoryFn, Meta } from "@storybook/react";

import { MFormSwitch } from "../../components";

const config: Meta<typeof MFormSwitch> = {
  title: "Stencil/FormSwitch",
  component: MFormSwitch,
  argTypes: {
    label: {
      control: "text",
    },
    labelOn: {
      control: "text",
    },
    labelOff: {
      control: "text",
    },
    mId: {
      control: "text",
    },
    isChecked: {
      control: "boolean",
    },
    isDisabled: {
      control: "boolean",
    },
  },
};

export default config;

export const Default = {
  args: {
    mId: "componentId",
    label: "the label",
  },
};

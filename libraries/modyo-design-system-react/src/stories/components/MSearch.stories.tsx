import { StoryFn, Meta } from "@storybook/react";

import { MSearch } from "../../components";
import { ICONS } from "../constants";

const config: Meta<typeof MSearch> = {
  title: "Stencil/Search",
  component: MSearch,
  argTypes: {
    mId: {
      control: "text",
    },
    label: {
      control: "text",
    },
    labelIcon: {
      control: {
        type: "select",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, ...ICONS],
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    isDisabled: {
      control: "boolean",
    },
    isReadOnly: {
      control: "boolean",
    },
    iconEnd: {
      control: {
        type: "select",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, ...ICONS],
    },
    hint: {
      control: "text",
    },
    hintIconStart: {
      control: {
        type: "select",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, ...ICONS],
    },
    hintIconEnd: {
      control: {
        type: "select",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, ...ICONS],
    },
    theme: {
      control: {
        type: "theme",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, "warning", "danger"],
    },
    variant: {
      control: {
        type: "select",
        labels: {
          undefined: "empty",
        },
      },
      options: [undefined, "prime", "secondary"],
    },
    layoutDirection: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    isLoading: {
      control: "boolean",
    },
  },
};

export default config;

export const Default = {
  args: {
    mId: "componentId",
    placeholder: "the placeholder",
    layoutDirection: "vertical",
  },
};

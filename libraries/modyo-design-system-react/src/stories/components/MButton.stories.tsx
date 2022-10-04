import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MButton } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MButton> = {
  title: 'Stencil/Button',
  component: MButton,
  parameters: {
    docs: {
      description: {
        component: 'Design System Button',
      },
    },
  },
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'outline', 'text', 'ghost'],
    },
    state: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, 'focus', 'hover', 'active', 'disabled'],
    },
    iconLeft: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconRight: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
  },
};

export default config;

const Template: ComponentStory<typeof MButton> = (args) => <MButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'primary',
  text: 'default',
  isPill: false,
};

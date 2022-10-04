import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MButton, MApp } from '../../components';

export default {
  title: 'Stencil/Button',
  component: MButton,
  decorators: [
    (Story) => (
      <MApp>
        <Story />
      </MApp>
    ),
  ],
  argTypes: {
    theme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'],
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
  },
} as ComponentMeta<typeof MButton>;

const Template: ComponentStory<typeof MButton> = (args) => <MButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: 'primary',
  text: 'default',
  isPill: false,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MHint } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MHint> = {
  title: 'Stencil/Hint',
  component: MHint,
  argTypes: {
    iconStart: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    iconEnd: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    theme: {
      control: 'select',
      options: THEMES.filter((theme) => (
        !['light', 'primary', 'secondary'].includes(theme)
      )),
      table: { defaultValue: { summary: 'primary' } },
    },
    iconSize: {
      control: 'text',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MHint> = (args) => <MHint {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'the text',
  theme: 'info',
};

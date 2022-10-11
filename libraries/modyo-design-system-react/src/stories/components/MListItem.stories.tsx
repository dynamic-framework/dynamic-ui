import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MListItem } from '../../components';
import { ICONS, THEMES } from '../constants';

const config: ComponentMeta<typeof MListItem> = {
  title: 'Stencil/ListItem',
  component: MListItem,
  argTypes: {
    theme: {
      control: 'select',
      options: THEMES,
      table: { defaultValue: { summary: 'primary' } },
    },
    text: {
      control: 'text',
    },
    subtext: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    alternativeValue: {
      control: 'text',
    },
    isPill: {
      control: 'boolean',
    },
    icon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      options: [undefined, ...ICONS],
    },
    image: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'selectable', 'navegable'],
    },
    selectableProps: {
      control: {
        type: 'object',
        value: {
          id: 'the id',
          name: 'the name',
          value: '',
          checked: false,
        },
      },
      description: '`optional` to use with forms',
      table: {
        defaultValue: { summary: undefined },
      },
    },
    navegableProps: {
      control: {
        type: 'object',
        value: {
          href: '/',
          target: '',
          'aria-current': '',
        },
      },
      description: '`optional` to use with links',
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
};

export default config;

const Template: ComponentStory<typeof MListItem> = (args) => <MListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'the text',
  subtext: 'the subtext',
  theme: 'primary',
  variant: 'default',
};

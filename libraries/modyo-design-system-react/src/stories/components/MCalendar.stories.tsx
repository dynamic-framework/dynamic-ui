import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateTime } from 'luxon';

import { MCalendar } from '../../components';

const config: ComponentMeta<typeof MCalendar> = {
  title: 'React/Components/Calendar',
  component: MCalendar,
  parameters: {
    docs: {
      description: {
        component: 'Design System Calendar',
      },
    },
  },
  argTypes: {
    calendarContainer: {
      control: 'text',
    },
    inline: {
      control: 'boolean',
    },
    withPortal: {
      control: 'boolean',
    },
    showTimeInput: {
      control: 'boolean',
    },
    calendarStartDay: {
      control: 'number',
    },
    timeInputLabel: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    dateFormat: {
      control: 'text',
    },
  },
};

export default config;

const Template: ComponentStory<typeof MCalendar> = (args) => <MCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  date: DateTime.now().toISO(),
};

import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import { MCalendar } from '../../components';

const config: Meta<typeof MCalendar> = {
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
type Story = StoryObj<typeof MCalendar>;

export const Default: Story = {
  args: {
    date: DateTime.now().toISO(),
  },
};

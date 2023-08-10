import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import type { ComponentProps } from 'react';

import { MDatePicker } from '../../components';

const config: Meta<typeof MDatePicker> = {
  title: 'Design System/Alpha/Patterns/Datepicker',
  component: MDatePicker,
  argTypes: {
    autoFocus: {
      type: 'boolean',
      control: 'boolean',
      description: 'Autofocus input',
    },
    date: {
      type: 'string',
      control: 'text',
      description: 'Date as string (DEFINE ISO)',
    },
    inline: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show button inline',
      defaultValue: false,
    },
    withPortal: {
      type: 'boolean',
      control: 'boolean',
      description: 'Open calendar in portal',
    },
    minDate: {
      type: 'string',
      control: 'text',
      description: 'Show calendar from minimum date',
    },
    showTimeInput: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show time input',
    },
    calendarStartDay: {
      type: 'number',
      control: 'number',
      description: 'Number to start calendar day from',
    },
    dateFormat: {
      type: 'string',
      control: 'text',
      description: 'Format to display date',
    },
    selectsRange: {
      type: 'boolean',
      control: 'boolean',
      description: 'Enable select range',
    },
    selectsStart: {
      type: 'boolean',
      control: 'boolean',
      description: 'Enable select start range (two calendar)',
    },
    selectsEnd: {
      type: 'boolean',
      control: 'boolean',
      description: 'Enable select end range (two calendar)',
    },
    startDate: {
      type: 'string',
      control: 'text',
      description: 'Start date',
    },
    endDate: {
      type: 'string',
      control: 'text',
      description: 'End date on range',
    },
    fixedHeight: {
      type: 'boolean',
      control: 'boolean',
      description: 'Calendar has fixed height',
    },
    showMonthDropdown: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show month dropdown on calendar',
    },
    showYearDropdown: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show year dropdown on calendar',
    },
    monthsShown: {
      type: 'number',
      control: 'number',
      description: 'Number of months showed on calendar',
    },
  },
};

export default config;
type Story = StoryObj<typeof MDatePicker>;

const MDatePickerBase = (props: ComponentProps<typeof MDatePicker>) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  return (
    <MDatePicker
      {...props}
      date={date}
      setDate={(value) => setDate(value as string)}
    />
  );
};

export const Default: Story = {
  render: (args) => (
    <MDatePickerBase {...args} />
  ),
  args: {
    inline: false,
  },
};

export const Open: Story = {
  render: (args) => (
    <MDatePickerBase {...args} />
  ),
  args: {
    inline: true,
  },
};

export const WithTime: Story = {
  render: (args) => (
    <MDatePickerBase {...args} />
  ),
  args: {
    showTimeInput: true,
  },
};

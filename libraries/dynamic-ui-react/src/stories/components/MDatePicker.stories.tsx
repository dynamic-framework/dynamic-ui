import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';

import type { ComponentProps } from 'react';

import { MDatePicker } from '../../components';
import MMonthPicker from '../../components/MMonthPicker';

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
      defaultValue: 'dd/MM/yyyy',
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
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };

  return (
    <MDatePicker
      {...props}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
    />
  );
};

const MMonthPickerBase = (props: ComponentProps<typeof MMonthPicker>) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };

  return (
    <MMonthPicker
      {...props}
      date={date}
      dateFormat="MM/yyyy"
      setDate={(value) => handleDate(value)}
    />
  );
};

const MDatePickerRange = (props: ComponentProps<typeof MDatePicker>) => {
  const [startDate, setStartDate] = useState<string | null>(DateTime.now().toISO());
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleChange = (value: Date | [Date | null, Date | null] | null) => {
    const [newStartDate, newEndDate] = value as Array<Date>;
    setStartDate(DateTime.fromJSDate(newStartDate).toISODate());
    setEndDate(DateTime.fromJSDate(newEndDate).toISODate());
  };

  return (
    <MDatePicker
      {...props}
      {...startDate && {
        selected: DateTime.fromISO(startDate).toJSDate(),
        startDate: DateTime.fromISO(startDate).toJSDate(),
      }}
      {...endDate && {
        endDate: DateTime.fromISO(endDate).toJSDate(),
      }}
      setDate={handleChange}
      selectsRange
      dateFormat="dd/MM/yyyy"
      inline
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

export const DefaultWithMonth: Story = {
  render: (args) => (
    <MDatePickerBase {...args} />
  ),
  args: {
    inline: false,
    withMonthSelector: true,
  },
};

export const Inline: Story = {
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
    inline: true,
    showTimeInput: true,
  },
};

export const WithMonthSelector: Story = {
  render: (args) => (
    <MDatePickerBase {...args} />
  ),
  args: {
    inline: true,
    withMonthSelector: true,
  },
};

export const MonthPicker: Story = {
  render: (args) => (
    <MMonthPickerBase {...args} />
  ),
  args: {
    inline: true,
  },
};

export const DateRange: Story = {
  render: (args) => (
    <MDatePickerRange {...args} />
  ),
  args: {
    inline: true,
    selectsRange: true,
  },
};

export const DateRangeWithMonthSelector: Story = {
  render: (args) => (
    <MDatePickerRange {...args} />
  ),
  args: {
    inline: true,
    selectsRange: true,
    withMonthSelector: true,
  },
};

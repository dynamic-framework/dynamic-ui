import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { DateTime } from 'luxon';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import type { ComponentProps } from 'react';

import { DDatePicker } from '../../components';
import DMonthPicker from '../../components/DMonthPicker';

registerLocale('es', es);

const config: Meta<typeof DDatePicker> = {
  title: 'Design System/Components/Datepicker',
  component: DDatePicker,
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
    onEventChangeDate: {
      action: 'onEventChangeDate',
    },
  },
};

export default config;
type Story = StoryObj<typeof DDatePicker>;

const DDatePickerBase = (props: ComponentProps<typeof DDatePicker>) => {
  const [date, onEventDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      onEventDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };

  return (
    <DDatePicker
      {...props}
      date={date}
      dateFormat="dd/MM/yyyy"
      onEventChangeDate={(value) => handleDate(value)}
    />
  );
};

const MMonthPickerBase = (props: ComponentProps<typeof DMonthPicker>) => {
  const [date, onEventDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      onEventDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };

  return (
    <DMonthPicker
      {...props}
      date={date}
      dateFormat="MM/yyyy"
      onEventChangeDate={(value) => handleDate(value)}
    />
  );
};

const DDatePickerRange = (props: ComponentProps<typeof DDatePicker>) => {
  const [startDate, setStartDate] = useState<string | null>(DateTime.now().toISO());
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleChange = (value: Date | [Date | null, Date | null] | null) => {
    const [newStartDate, newEndDate] = value as Array<Date>;
    setStartDate(DateTime.fromJSDate(newStartDate).toISODate());
    setEndDate(DateTime.fromJSDate(newEndDate).toISODate());
  };

  return (
    <DDatePicker
      {...props}
      {...startDate && {
        selected: DateTime.fromISO(startDate).toJSDate(),
        startDate: DateTime.fromISO(startDate).toJSDate(),
      }}
      {...endDate && {
        endDate: DateTime.fromISO(endDate).toJSDate(),
      }}
      onEventChangeDate={handleChange}
      selectsRange
      dateFormat="dd/MM/yyyy"
      inline
    />
  );
};

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DDatePickerBase {...args} />
  ),
  args: {
    inline: false,
  },
};

export const DefaultWithMonth: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: (args) => (
    <DDatePickerBase {...args} />
  ),
  args: {
    inline: false,
    withMonthSelector: true,
  },
};

export const Inline: Story = {
  render: (args) => (
    <DDatePickerBase {...args} />
  ),
  args: {
    inline: true,
  },
};

export const WithTime: Story = {
  render: (args) => (
    <DDatePickerBase {...args} />
  ),
  args: {
    inline: true,
    showTimeInput: true,
    timeLabel: 'Select time',
  },
};

export const WithMonthSelector: Story = {
  render: (args) => (
    <DDatePickerBase {...args} />
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
    <DDatePickerRange {...args} />
  ),
  args: {
    inline: true,
    selectsRange: true,
  },
};

export const DateRangeWithMonthSelector: Story = {
  render: (args) => (
    <DDatePickerRange {...args} />
  ),
  args: {
    inline: true,
    selectsRange: true,
    withMonthSelector: true,
  },
};

export const OnPortal: Story = {
  render: (args) => (
    <DDatePickerBase {...args} />
  ),
  args: {
    inline: false,
    withMonthSelector: true,
    withPortal: true,
    showTimeInput: true,
  },
};
import { useState } from 'react';
import { Meta } from '@storybook/react';
import { DateTime } from 'luxon';

import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { MDatePicker } from '../../components';
import { MDatePickerProps } from '../../components/MDatePicker';
import MMonthPicker from '../../components/MMonthPicker';

registerLocale('es', es);

const config: Meta<typeof MDatePicker> = {
  title: 'Design System/Components/Datepicker',
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

export const Default = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
    />
  );
};

// Default.decorators = [
//   (Story) => (
//     <div style={{ height: '400px' }} className="position-relative">
//       <Story />
//     </div>
//   ),
// ];

export const DefaultWithMonthSelector = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
      inline={false}
      withMonthSelector
    />
  );
};

export const Inline = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
      inline
    />
  );
};

export const WithTime = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
      showTimeInput
      timeLabel="Select time"
      inline
    />
  );
};

export const WithMonthSelector = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
      withMonthSelector
      inline
    />
  );
};

export const MonthPicker = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MMonthPicker
      {...args}
      date={date}
      dateFormat="MM/yyyy"
      setDate={(value) => handleDate(value)}
      inline
    />
  );
};

export const DateRange = (args: MDatePickerProps) => {
  const [startDate, setStartDate] = useState<string | null>(DateTime.now().toISO());
  const [endDate, setEndDate] = useState<string | null>(null);

  const handleChange = (value: Date | [Date | null, Date | null] | null) => {
    const [newStartDate, newEndDate] = value as Array<Date>;
    setStartDate(DateTime.fromJSDate(newStartDate).toISODate());
    setEndDate(DateTime.fromJSDate(newEndDate).toISODate());
  };

  return (
    <MDatePicker
      {...args}
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

export const OnPortal = (args: MDatePickerProps) => {
  const [date, setDate] = useState<string>(DateTime.now().toISO());
  const handleDate = (value: Date | [Date | null, Date | null] | null) => {
    if (value) {
      setDate(DateTime.fromJSDate(value as Date).toISODate());
    }
  };
  return (
    <MDatePicker
      {...args}
      date={date}
      dateFormat="dd/MM/yyyy"
      setDate={(value) => handleDate(value)}
      inline={false}
      withMonthSelector
      withPortal
      showTimeInput
    />
  );
};

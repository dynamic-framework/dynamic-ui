import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import DDatePicker from '../../src/components/DDatePicker/DDatePicker';
import DMonthPicker from '../../src/components/DMonthPicker';

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
      control: 'date',
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
    withMonthSelector: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show month dropdown on calendar header',
      defaultValue: false,
    },
    monthsShown: {
      type: 'number',
      control: 'number',
      description: 'Number of months showed on calendar',
    },
    onChange: {
      action: 'onChange',
    },
  },
};

export default config;
type Story = StoryObj<typeof DDatePicker>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }} className="position-relative">
        <Story />
      </div>
    ),
  ],
  render: function Render({ ...args }) {
    const [date, setDate] = useState(args.date);
    const handleDate = (value: Date | null) => {
      if (value) {
        setDate(new Date(value).toISOString());
      }
    };
    return (
      <DDatePicker
        {...args}
        date={date}
        dateFormat="dd/MM/yyyy"
        onChange={(value) => handleDate(value)}
      />
    );
  },
  args: {
    inputAriaLabel: 'Calendar',
    date: new Date().toISOString(),
    dateFormat: 'dd/MM/yyyy',
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
  args: {
    inline: false,
    withMonthSelector: true,
    inputAriaLabel: 'Calendar',
    date: new Date().toISOString(),
    dateFormat: 'dd/MM/yyyy',
  },
};

export const Inline: Story = {
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    date: new Date().toISOString(),
    dateFormat: 'dd/MM/yyyy',
    headerPrevMonthAriaLabel: 'decrease month',
    headerNextMonthAriaLabel: 'increase month',
  },
};

export const WithTime: Story = {
  render: function Render({ ...args }) {
    const [date, onDate] = useState<string>(new Date().toISOString());
    const handleDate = (value: Date | null) => {
      if (value) {
        onDate(new Date(value).toISOString());
      }
    };

    return (
      <DDatePicker
        {...args}
        date={date}
        dateFormat="dd/MM/yyyy"
        onChange={(value) => handleDate(value)}
      />
    );
  },
  args: {
    inline: true,
    showTimeInput: true,
    timeLabel: 'Select time',
  },
};

export const WithMonthSelector: Story = {
  render: function Render({ ...args }) {
    const [date, onDate] = useState<string>(new Date().toISOString());
    const handleDate = (value: Date | null) => {
      if (value) {
        onDate(new Date(value).toISOString());
      }
    };

    return (
      <DDatePicker
        {...args}
        date={date}
        dateFormat="dd/MM/yyyy"
        onChange={(value) => handleDate(value)}
      />
    );
  },
  args: {
    inline: true,
    withMonthSelector: true,
  },
};

export const MonthPicker: Story = {
  render: function Render({ ...args }) {
    const [date, onDate] = useState<string>(new Date().toISOString());
    const handleDate = (value: Date | null) => {
      if (value) {
        onDate(new Date(value).toISOString());
      }
    };
    return (
      <DMonthPicker
        {...args}
        date={date}
        dateFormat="MM/yyyy"
        onChangeDate={(value) => handleDate(value)}
        headerPrevYearAriaLabel="decrease year"
        headerNextYearAriaLabel="increase year"
      />
    );
  },
  args: {
    inline: true,
  },
};

export const DateRange: Story = {
  render: function Render({ ...args }) {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>();

    const handleChange = (value: [Date | null, Date | null]) => {
      const [newStartDate, newEndDate] = value as Array<Date>;
      setStartDate(newStartDate);
      setEndDate(newEndDate);
    };

    return (
      <DDatePicker
        {...args}
        {...startDate && {
          selected: new Date(startDate),
          startDate: new Date(startDate),
        }}
        {...endDate && {
          endDate: new Date(endDate),
        }}
        onChange={handleChange}
        selectsRange
        dateFormat="dd/MM/yyyy"
        inline
      />
    );
  },
  args: {
    inline: true,
    selectsRange: true,
  },
};

export const DateRangeWithMonthSelector: Story = {
  render: function Render({ ...args }) {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>();

    const handleChange = (value: [Date | null, Date | null]) => {
      const [newStartDate, newEndDate] = value as Array<Date>;
      setStartDate(newStartDate);
      setEndDate(newEndDate);
    };

    return (
      <DDatePicker
        {...args}
        {...startDate && {
          selected: new Date(startDate),
          startDate: new Date(startDate),
        }}
        {...endDate && {
          endDate: new Date(endDate),
        }}
        onChange={handleChange}
        selectsRange
        dateFormat="dd/MM/yyyy"
        inline
      />
    );
  },
  args: {
    inline: true,
    selectsRange: true,
    withMonthSelector: true,
  },
};

export const OnPortal: Story = {
  render: function Render({ ...args }) {
    const [date, onDate] = useState<string>(new Date().toISOString());
    const handleDate = (value: Date | null) => {
      if (value) {
        onDate(new Date(value).toISOString());
      }
    };

    return (
      <DDatePicker
        {...args}
        date={date}
        dateFormat="dd/MM/yyyy"
        onChange={(value) => handleDate(value)}
      />
    );
  },
  args: {
    inline: false,
    withMonthSelector: true,
    withPortal: true,
    showTimeInput: true,
    timeLabel: 'Select time',
    inputAriaLabel: 'Calendar',
  },
};

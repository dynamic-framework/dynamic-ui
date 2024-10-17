import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import DDatePicker from '../../src/components/DDatePicker/DDatePicker';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';

registerLocale('es', es);

const config: Meta<typeof DDatePicker> = {
  title: 'Design System/Components/Datepicker',
  component: DDatePicker,
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
    },
    inputLabel: {
      control: 'text',
      type: 'string',
    },
    inputHint: {
      control: 'text',
      type: 'string',
    },
    inputAriaLabel: {
      control: 'text',
      type: 'string',
    },
    inputActionAriaLabel: {
      control: 'text',
      type: 'string',
    },
    iconInput: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconHeaderPrevMonth: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconHeaderNextMonth: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
    },
    headerPrevMonthAriaLabel: {
      control: 'text',
      type: 'string',
    },
    headerNextMonthAriaLabel: {
      control: 'text',
      type: 'string',
    },
    headerButtonTheme: {
      control: 'text',
      type: 'string',
    },
    inputId: {
      control: 'text',
      type: 'string',
    },
    timeId: {
      control: 'text',
      type: 'string',
    },
    timeLabel: {
      control: 'text',
      type: 'string',
    },
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
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      type: 'string',
      control: 'text',
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
    iconInput: 'calendar',
    iconHeaderPrevMonth: 'chevron-left',
    iconHeaderNextMonth: 'chevron-right',
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

export const WithLocale: Story = {
  render: function Render({ ...args }) {
    registerLocale('es', es);
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
        locale={es}
        dateFormat="dd/MM/yyyy"
        onChange={(value) => handleDate(value)}
      />
    );
  },
  args: {
    inline: true,
  },
};

export const WithTime: Story = {
  render: function Render({ ...args }) {
    registerLocale('es', es);
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
        locale={es}
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
      <DDatePicker<string, boolean>
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

export const Error: Story = {
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
    invalid: true,
    inputHint: 'This is an invalid date',
    inline: false,
    iconInput: 'calendar',
    iconHeaderPrevMonth: 'chevron-left',
    iconHeaderNextMonth: 'chevron-right',
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
    withPortal: true,
    showTimeInput: true,
    timeLabel: 'Select time',
    inputAriaLabel: 'Calendar',
  },
};

export const MaterialStyle: Story = {
  render: function Render({ ...args }) {
    const [date, onDate] = useState<string>(new Date().toISOString());
    const handleDate = (value: Date | null) => {
      if (value) {
        onDate(new Date(value).toISOString());
      }
    };

    return (
      <DContextProvider
        {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
      >
        <DDatePicker
          {...args}
          date={date}
          dateFormat="dd/MM/yyyy"
          onChange={(value) => handleDate(value)}
        />
      </DContextProvider>
    );
  },
  args: {
    inline: false,
    withPortal: true,
    showTimeInput: true,
    timeLabel: 'Select time',
    inputAriaLabel: 'Calendar',
  },
};

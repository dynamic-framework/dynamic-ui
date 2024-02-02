import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import DDatePicker from '../../src/components/DDatePicker/DDatePicker';
import DMonthPicker from '../../src/components/DMonthPicker';
import { PREFIX_BS } from '../../src/components/config';
import { ICONS } from '../config/constants';

registerLocale('es', es);

const config: Meta<typeof DDatePicker> = {
  title: 'Design System/Components/Datepicker',
  component: DDatePicker,
  parameters: {
    docs: {
      description: {
        component: `
Datepicker with range and month support

To understand in more detail the aspects covered by this component, review the following documentation:

+ [React Datepicker](https://reactdatepicker.com/)

## CSS Variables
| Variable                                                | Type               | Description                                      |
|---------------------------------------------------------|--------------------|--------------------------------------------------|
| --${PREFIX_BS}datepicker-font-family                    | css font family    | Datepicker font family                           |
| --${PREFIX_BS}datepicker-border                         | css length unit    | Datepicker border                                |
| --${PREFIX_BS}datepicker-box-shadow                     | css shadow unit    | Datepicker box shadow                            |
| --${PREFIX_BS}datepicker-font-size                      | css font unit      | Datepicker font size                             |
| --${PREFIX_BS}datepicker-header-gap                     | css length unit    | Datepicker header gap                            |
| --${PREFIX_BS}datepicker-header-padding                 | css length unit    | Datepicker header padding                        |
| --${PREFIX_BS}datepicker-header-background-color        | css color unit     | Datepicker header background color               |
| --${PREFIX_BS}datepicker-header-border                  | css length unit    | Datepicker header border                         |
| --${PREFIX_BS}datepicker-header-font-size               | css font unit      | Datepicker header font size                      |
| --${PREFIX_BS}datepicker-day-names-margin               | css length unit    | Datepicker header days margin                    |
| --${PREFIX_BS}datepicker-day-names-font-size            | css length unit    | Datepicker header days font size                 |
| --${PREFIX_BS}datepicker-day-name-weight                | css weight unit    | Datepicker header days weight                    |
| --${PREFIX_BS}datepicker-day-name-margin                | css length unit    | Datepicker header days margin                    |
| --${PREFIX_BS}datepicker-day-name-size                  | css length unit    | Datepicker header days size                      |
| --${PREFIX_BS}datepicker-day-name-color                 | css color unit     | Datepicker header days color                     |
| --${PREFIX_BS}datepicker-month-gap                      | css length unit    | Datepicker month gap                             |
| --${PREFIX_BS}datepicker-month-padding                  | css length unit    | Datepicker month padding                         |
| --${PREFIX_BS}datepicker-month-margin                   | css length unit    | Datepicker month margin                          |
| --${PREFIX_BS}datepicker-week-gap                       | css length unit    | Datepicker week gap                              |
| --${PREFIX_BS}datepicker-day-margin                     | css length unit    | Datepicker day margin                            |
| --${PREFIX_BS}datepicker-day-font-size                  | css font unit      | Datepicker day font size                         |
| --${PREFIX_BS}datepicker-day-size                       | css length unit    | Datepicker day size                              |
| --${PREFIX_BS}datepicker-day-radius                     | css length unit    | Datepicker day border radius                     |
| --${PREFIX_BS}datepicker-day-bg-hover                   | css color unit     | Datepicker day hover background                  |
| --${PREFIX_BS}datepicker-day-color-hover                | css color unit     | Datepicker day hover color                       |
| --${PREFIX_BS}datepicker-day-selected-color             | css color unit     | Datepicker day selected color                    |
| --${PREFIX_BS}datepicker-day-selected-bg                | css color unit     | Datepicker day selected background               |
| --${PREFIX_BS}datepicker-day-in-range-color             | css color unit     | Datepicker date range color                      |
| --${PREFIX_BS}datepicker-day-in-range-bg                | css color unit     | Datepicker date range background                 |
| --${PREFIX_BS}datepicker-day-outside-month-color        | css color unit     | Datepicker day outside color                     |
| --${PREFIX_BS}datepicker-day-today-font-weight          | css weight unit    | Datepicker today weight                          |
| --${PREFIX_BS}datepicker-day-today-box-shadow           | css shadow unit    | Datepicker today box shadow                      |
| --${PREFIX_BS}datepicker-time-container-margin          | css length unit    | Datepicker container time margin                 |
| --${PREFIX_BS}datepicker-time-container-align           | css align unit     | Datepicker container time alignment              |
| --${PREFIX_BS}datepicker-time-input-width               | css length unit    | Datepicker time width                            |
| --${PREFIX_BS}datepicker-time-input-margin              | css length unit    | Datepicker time margin                           |
| --${PREFIX_BS}datepicker-time-input-align               | css align unit     | Datepicker time alignment                        |
| --${PREFIX_BS}datepicker-time-input-padding             | css length unit    | Datepicker time padding                          |
| --${PREFIX_BS}datepicker-time-input-gap                 | css length unit    | Datepicker time gap                              |
| --${PREFIX_BS}datepicker-time-input-label-weight        | css weight unit    | Datepicker time weight                           |
| --${PREFIX_BS}datepicker-time-input-label-color         | css color unit     | Datepicker label time color                      |
| --${PREFIX_BS}datepicker-time-input-label-size          | css length unit    | Datepicker label time size                       |
| --${PREFIX_BS}monthpicker-header-padding                | css length unit    | Monthpicker header padding                       |
| --${PREFIX_BS}monthpicker-font-weight                   | css weight unit    | Monthpicker font weight                          |
| --${PREFIX_BS}monthpicker-header-color                  | css color unit     | Monthpicker header color                         |
| --${PREFIX_BS}monthpicker-header-bg                     | css color unit     | Monthpicker header background color              |
| --${PREFIX_BS}monthpicker-month-gap                     | css length unit    | Monthpicker month gap                            |
| --${PREFIX_BS}monthpicker-month-padding                 | css length unit    | Monthpicker month padding                        |
| --${PREFIX_BS}monthpicker-month-color                   | css color unit     | Monthpicker month color                          |
| --${PREFIX_BS}monthpicker-month-bg                      | css color unit     | Monthpicker month background                     |
| --${PREFIX_BS}monthpicker-month-today-color             | css color unit     | Monthpicker month today color                    |
| --${PREFIX_BS}monthpicker-month-selected-bg             | css color unit     | Monthpicker month selected bg                    |
| --${PREFIX_BS}monthpicker-month-selected-box-shadow     | css box shadow     | Monthpicker month selected box shadow            |
| --${PREFIX_BS}monthpicker-month-hover-bg                | css color unit     | Monthpicker month hover background               |
| --${PREFIX_BS}monthpicker-month-wrapper-gap             | css length unit    | Monthpicker month wrapper gap                    |
| --${PREFIX_BS}monthpicker-month-wrapper-font-size       | css length unit    | Monthpicker month wrapper font size              |
| --${PREFIX_BS}monthpicker-single-month-width            | css length unit    | Monthpicker single month width                   |
| --${PREFIX_BS}monthpicker-single-month-padding          | css length unit    | Monthpicker single month padding                 |
| --${PREFIX_BS}monthpicker-single-month-margin           | css length unit    | Monthpicker single month margin                  |
| --${PREFIX_BS}monthpicker-single-month-text-transform   | css text transform | Monthpicker single month text transform          |
| --${PREFIX_BS}monthpicker-single-month-radius           | css length unit    | Monthpicker single month border radius           |
| --${PREFIX_BS}monthpicker-single-month-after-display    | css display unit   | Monthpicker single month after display           |
| --${PREFIX_BS}monthpicker-single-month-after-content    | css content        | Monthpicker single month content                 |
| --${PREFIX_BS}datepicker-triangle-color                 | css color unit     | Datepicker triangle color                        |
| --${PREFIX_BS}datepicker-webkit-time-color              | css color unit     | Datepicker webkit time color                     |
| --${PREFIX_BS}datepicker-webkit-time-align              | css align unit     | Datepicker webkit time align                     |
| --${PREFIX_BS}datepicker-webkit-edit-text-padding       | css length unit    | Datepicker webkit edit text padding              |
| --${PREFIX_BS}datepicker-webkit-edit-ampm-padding       | css length unit    | Datepicker webkit edit am/pm padding             |
| --${PREFIX_BS}datepicker-webkit-edit-ampm-color         | css color unit     | Datepicker webkit edit am/pm color               |
| --${PREFIX_BS}datepicker-webkit-edit-ampm-bg            | css color unit     | Datepicker webkit edit am/pm background color    |
| --${PREFIX_BS}datepicker-webkit-edit-ampm-radius        | css length unit    | Datepicker webkit edit am/pm border radius       |
| --${PREFIX_BS}datepicker-calendar-picker-icon           | css url icon       | Datepicker picker icon                           |
        `,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'text',
      type: 'string',
    },
    inputLabel: {
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
    inputIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    headerPrevMonthIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    headerNextMonthIcon: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
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
  tags: ['autodocs'],
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
    inputIcon: 'calendar',
    headerPrevMonthIcon: 'chevron-left',
    headerNextMonthIcon: 'chevron-right',
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
        onChange={(value) => handleDate(value)}
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

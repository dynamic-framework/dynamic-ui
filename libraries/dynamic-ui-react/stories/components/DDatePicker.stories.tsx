import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';

import DDatePicker from '../../src/components/DDatePicker/DDatePicker';
import { PREFIX_BS } from '../../src/components/config';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';

registerLocale('es', es);

const config: Meta<typeof DDatePicker> = {
  title: 'Design System/Components/Datepicker',
  component: DDatePicker,
  parameters: {
    docs: {
      description: {
        component: `
Datepicker with month, year and time selector. This component is a custom wrapper which does
not cover all the features of the original library.

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
| --${PREFIX_BS}datepicker-header-font-size               | css length unit    | Datepicker header border                         |
| --${PREFIX_BS}datepicker-header-button-padding          | css length unit    | Datepicker header buttons padding                |
| --${PREFIX_BS}datepicker-header-select-padding          | css length unit    | Datepicker header selects padding                |
| --${PREFIX_BS}datepicker-header-select-font-weight      | css weight unit    | Datepicker header select font weight             |
| --${PREFIX_BS}datepicker-header-select-menu-width       | css length unit    | Datepicker header select width                   |
| --${PREFIX_BS}datepicker-day-names-margin               | css length unit    | Datepicker header days margin                    |
| --${PREFIX_BS}datepicker-day-names-font-size            | css length unit    | Datepicker header days font size                 |
| --${PREFIX_BS}datepicker-day-name-weight                | css weight unit    | Datepicker header days weight                    |
| --${PREFIX_BS}datepicker-day-name-margin                | css length unit    | Datepicker header days margin                    |
| --${PREFIX_BS}datepicker-day-name-size                  | css length unit    | Datepicker header days size                      |
| --${PREFIX_BS}datepicker-day-name-color                 | css color unit     | Datepicker header days color                     |
| --${PREFIX_BS}datepicker-month-gap                      | css length unit    | Datepicker month gap                             |
| --${PREFIX_BS}datepicker-month-padding                  | css length unit    | Datepicker month padding                         |
| --${PREFIX_BS}datepicker-month-margin                   | css length unit    | Datepicker month margin                          |
| --${PREFIX_BS}datepicker-month-color                    | css color unit     | Datepicker month color                           |
| --${PREFIX_BS}datepicker-week-gap                       | css length unit    | Datepicker week gap                              |
| --${PREFIX_BS}datepicker-day-margin                     | css length unit    | Datepicker day margin                            |
| --${PREFIX_BS}datepicker-day-font-size                  | css font unit      | Datepicker day font size                         |
| --${PREFIX_BS}datepicker-day-size                       | css length unit    | Datepicker day size                              |
| --${PREFIX_BS}datepicker-day-padding                    | css length unit    | Datepicker day padding                           |
| --${PREFIX_BS}datepicker-day-radius                     | css length unit    | Datepicker day border radius                     |
| --${PREFIX_BS}datepicker-day-color                      | css color unit     | Datepicker day text color                        |
| --${PREFIX_BS}datepicker-day-disabled-color             | css color unit     | Datepicker disabled day text color                        |
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
      table: { defaultValue: { summary: false } },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: { defaultValue: { summary: false } },
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

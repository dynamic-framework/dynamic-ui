import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import {
  addDays,
  setHours,
  setMinutes,
} from 'date-fns';
import { es } from 'date-fns/locale';

import DDatePicker from '../../src/components/DDatePicker/DDatePicker';
import { ICONS, CONTEXT_PROVIDER_CONFIG_MATERIAL } from '../config/constants';
import { DContextProvider } from '../../src';

const config: Meta<typeof DDatePicker> = {
  title: 'Design System/Components/Datepicker',
  component: DDatePicker,
  decorators: [
    (Story) => (
      <div
        style={{ height: '400px' }}
        className="position-relative"
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
    },
    style: {
      control: 'object',
      type: 'string',
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
    iconHeaderPrev: {
      control: {
        type: 'select',
        labels: {
          undefined: 'empty',
        },
      },
      type: 'string',
      options: [undefined, ...ICONS],
    },
    iconHeaderNext: {
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
      table: { defaultValue: { summary: 'false' } },
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
      table: { defaultValue: { summary: 'dd/MM/yyyy' } },
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
    value: {
      type: 'string',
      control: 'date',
    },
    monthsShown: {
      control: {
        type: 'select',
      },
      type: 'number',
      options: [1, 2, 3],
      defaultValue: 1,
      table: { defaultValue: { summary: '1' } },
    },
    showPopperArrow: {
      control: 'boolean',
      type: 'boolean',
    },
    showWeekPicker: {
      control: 'boolean',
      type: 'boolean',
    },
    showYearPicker: {
      control: 'boolean',
      type: 'boolean',
    },
    showFullMonthYearPicker: {
      control: 'boolean',
      type: 'boolean',
    },
    showMonthYearPicker: {
      control: 'boolean',
      type: 'boolean',
    },
    showPreviousMonths: {
      control: 'boolean',
      type: 'boolean',
    },
    showDateSelect: {
      control: 'boolean',
      type: 'boolean',
    },
    showDisabledMonthNavigation: {
      control: 'boolean',
      type: 'boolean',
    },
    showQuarterYearPicker: {
      control: 'boolean',
      type: 'boolean',
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
    },
  },
};

function ControlledDatePicker(props: ComponentProps<typeof DDatePicker>) {
  const {
    value,
    onChange,
    selected,
    ...rest
  } = useMemo(() => props, [props]);

  const [date, setDate] = useState<Date | null>(value ? new Date(value) : new Date());

  const handleDate = useCallback((newDate: Date | null) => {
    setDate(newDate);
  }, []);

  useEffect(() => {
    if (value) {
      handleDate(new Date(value));
    }
  }, [value, handleDate]);

  return (
    <DDatePicker
      {...rest}
      key={JSON.stringify(props, null, 0)}
      selected={date}
      onChange={(newDate: Date | null) => setDate(newDate)}
      showHeaderSelectors
    />
  );
}

function ControlledDateRangePicker(props: ComponentProps<typeof DDatePicker>) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(addDays(new Date(), 6));

  const handleChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DDatePicker
      {...props}
      selected={startDate}
      startDate={startDate}
      endDate={endDate}
      onChange={handleChange}
      selectsRange
    />
  );
}

export default config;
type Story = StoryObj<typeof DDatePicker>;

export const Default: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    inline: false,
    iconInput: 'calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
    showHeaderSelectors: false,
    monthsShown: 1,
    style: {},
    showWeekPicker: false,
    showYearPicker: false,
    showFullMonthYearPicker: false,
    showMonthYearPicker: false,
    showPopperArrow: true,
    showPreviousMonths: false,
    showDateSelect: true,
    showDisabledMonthNavigation: false,
    showQuarterYearPicker: false,
    className: '',
    dataAttributes: {},
    iconFamilyClass: '',
    id: '',
    disabled: false,
  },
};

export const WithSelector: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    inline: false,
    iconInput: 'calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
  },
};

export const Weeks: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    inline: true,
    iconInput: 'calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
    showWeekNumbers: true,
    showWeekPicker: true,
  },
};

export const MonthSelector: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    dateFormat: 'MM/yyyy',
    showMonthYearPicker: true,
    showTwoColumnMonthYearPicker: true,
    showFullMonthYearPicker: true,
  },
};

export const QuarterSelector: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    dateFormat: 'MM/yyyy',
    showQuarterYearPicker: true,
  },
};

export const YearSelector: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    dateFormat: 'yyyy',
    showYearPicker: true,
  },
};

export const Inline: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    headerPrevMonthAriaLabel: 'decrease month',
    headerNextMonthAriaLabel: 'increase month',
  },
};

export const InputValidState: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    valid: true,
    inputHint: 'This is a valid date',
    inline: false,
    iconInput: 'calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
  },
};

export const InputInvalidState: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    invalid: true,
    inputHint: 'This is an invalid date',
    inline: false,
    iconInput: 'calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
  },
};

export const TwoMonths: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    headerPrevMonthAriaLabel: 'decrease month',
    headerNextMonthAriaLabel: 'increase month',
    monthsShown: 2,
  },
};

export const WithLocale: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    locale: es,
    dateFormat: 'dd/MM/yyyy',
  },
};

export const WithTimeInput: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    showTimeInput: true,
    timeInputLabel: 'Select time',
    dateFormat: 'dd/MM/yyyy h:mm aa',
  },
};

export const WithTimeSelect: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    showTimeSelect: true,
    dateFormat: 'dd/MM/yyyy h:mm aa',
    minTime: setHours(setMinutes(new Date(), 0), 8),
    maxTime: setHours(setMinutes(new Date(), 0), 17),
  },
};

export const DateRange: Story = {
  render: ControlledDateRangePicker,
  args: {
    inline: true,
    selectsRange: true,
    excludeDates: [
      addDays(new Date(), 2),
    ],
    selectsDisabledDaysInRange: true,
  },
};

export const DateRangeMonths: Story = {
  render: ControlledDateRangePicker,
  args: {
    inline: true,
    selectsRange: true,
    dateFormat: 'MM/yyyy',
    showMonthYearPicker: true,
  },
};

export const DateRangeYear: Story = {
  render: ControlledDateRangePicker,
  args: {
    inline: true,
    selectsRange: true,
    dateFormat: 'yyyy',
    showYearPicker: true,
  },
};

export const MaterialStyle: Story = {
  render: function Render({ ...args }) {
    return (
      <DContextProvider
        {...CONTEXT_PROVIDER_CONFIG_MATERIAL}
      >
        <ControlledDatePicker {...args} />
      </DContextProvider>
    );
  },
  args: {
    inline: false,
    showTimeInput: true,
    timeInputLabel: 'Select time',
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
  },
};

export const WithSpecialDates: Story = {
  render: ControlledDatePicker,
  args: {
    inputAriaLabel: 'Calendar',
    dateFormat: 'dd/MM/yyyy',
    inline: true,
    headerPrevMonthAriaLabel: 'decrease month',
    headerNextMonthAriaLabel: 'increase month',
    excludeDates: [
      addDays(new Date(), 1),
      addDays(new Date(), 5),
    ],
    highlightDates: [
      addDays(new Date(), 2),
      addDays(new Date(), 3),
    ],
    holidays: [
      { date: addDays(new Date(), 4).toISOString(), holidayName: 'Holiday one' },
      { date: addDays(new Date(), 5).toISOString(), holidayName: 'Holiday two' },
    ],
  },
};

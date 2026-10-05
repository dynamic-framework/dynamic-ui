import {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { addDays } from 'date-fns';

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
        className="df-relative"
      >
        <Story />
      </div>
    ),
  ],
  /*
   * Every example pins a locale.
   *
   * Without it `Intl` falls back to whoever is LOOKING at the page, so the
   * docs rendered in Spanish for the team here and in English for everyone
   * else — and the story whose whole point was localisation looked identical
   * to the default for exactly the readers most likely to open it.
   *
   * `en-US` is the pin because it is the one locale a reader can tell apart
   * from their own at a glance, whatever their own is.
   */
  args: {
    locale: 'en-US',
  },
  argTypes: {
    className: {
      control: 'text',
      type: 'string',
      table: { category: 'Appearance' },
    },
    style: {
      control: 'object',
      type: 'string',
      table: { category: 'Appearance' },
    },
    inputLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    inputHint: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    inputAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    inputActionAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
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
      table: { category: 'Icon' },
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
      table: { category: 'Icon' },
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
      table: { category: 'Icon' },
    },
    iconFamilyClass: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    iconFamilyPrefix: {
      control: 'text',
      type: 'string',
      table: { category: 'Icon' },
    },
    headerPrevMonthAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    headerNextMonthAriaLabel: {
      control: 'text',
      type: 'string',
      table: { category: 'Content' },
    },
    inputId: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    timeId: {
      control: 'text',
      type: 'string',
      table: { category: 'HTML Attributes' },
    },
    inline: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show button inline',
      defaultValue: false,
      table: {
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    minDate: {
      type: 'string',
      control: 'text',
      description: 'Show calendar from minimum date',
      table: { category: 'Behavior' },
    },
    showTimeInput: {
      type: 'boolean',
      control: 'boolean',
      description: 'Show time input',
      table: { category: 'Behavior' },
    },
    calendarStartDay: {
      type: 'number',
      control: 'number',
      description: 'Number to start calendar day from',
      table: { category: 'Behavior' },
    },
    dateFormat: {
      type: 'string',
      control: 'text',
      description: 'Format to display date',
      table: {
        defaultValue: { summary: 'dd/MM/yyyy' },
        category: 'Content',
      },
    },
    selectsRange: {
      type: 'boolean',
      control: 'boolean',
      description: 'Enable select range',
      table: { category: 'Behavior' },
    },
    startDate: {
      type: 'string',
      control: 'text',
      description: 'Start date',
      table: { category: 'Content' },
    },
    endDate: {
      type: 'string',
      control: 'text',
      description: 'End date on range',
      table: { category: 'Content' },
    },
    fixedHeight: {
      type: 'boolean',
      control: 'boolean',
      description: 'Calendar has fixed height',
      table: { category: 'Appearance' },
    },
    invalid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    valid: {
      control: 'boolean',
      type: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
        category: 'Behavior',
      },
    },
    placeholder: {
      type: 'string',
      control: 'text',
      table: { category: 'Content' },
    },
    onChange: {
      action: 'onChange',
      table: { category: 'Events' },
    },
    monthsShown: {
      control: {
        type: 'select',
      },
      type: 'number',
      options: [1, 2, 3],
      defaultValue: 1,
      table: {
        defaultValue: { summary: '1' },
        category: 'Appearance',
      },
    },
    locale: {
      control: 'select',
      options: ['en-US', 'en-GB', 'es', 'es-CL', 'pt-BR', 'fr-FR', 'de-DE', 'ja-JP', 'ar-EG'],
      description:
        'BCP 47. Every name in the calendar comes from `Intl`, and so does the '
        + 'day the week starts on. Omitted, it follows the reader\'s own locale.',
      table: { category: 'Content' },
    },
    showWeekPicker: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    showYearPicker: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    showMonthYearPicker: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    showQuarterYearPicker: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: { category: 'Behavior' },
    },
  },
};

function ControlledDatePicker(props: ComponentProps<typeof DDatePicker>) {
  const {
    onChange,
    selected,
    ...rest
  } = useMemo(() => props, [props]);

  /*
   * `value` is gone. It was `react-datepicker`'s escape hatch for overriding
   * the text in the field independently of the date — two sources of truth for
   * one thing, and the field now renders `selected` through `dateFormat`.
   */
  const [date, setDate] = useState<Date | null>(selected ?? new Date());

  const handleDate = useCallback((newDate: Date | null) => {
    setDate(newDate);
  }, []);

  useEffect(() => {
    if (selected) handleDate(selected);
  }, [selected, handleDate]);

  return (
    <DDatePicker
      {...rest}
      key={JSON.stringify(props, null, 0)}
      selected={date}
      onChange={(newDate) => setDate(newDate as Date | null)}
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
    iconInput: 'Calendar',
    iconHeaderPrev: 'chevron-left',
    iconHeaderNext: 'chevron-right',
    showHeaderSelectors: false,
    monthsShown: 1,
    style: {},
    showWeekPicker: false,
    showYearPicker: false,
    showMonthYearPicker: false,
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
    iconInput: 'Calendar',
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
    iconInput: 'Calendar',
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
    iconInput: 'Calendar',
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
    iconInput: 'Calendar',
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

/**
 * Four locales side by side, because one calendar in one language demonstrates
 * nothing to a reader who already speaks it.
 *
 * Note the first column of each: the day the week starts on comes from the
 * locale too, so `en-US` starts on Sunday, `es-CL` and `fr-FR` on Monday. A
 * calendar with Spanish month names over a Sunday-first week is wrong in Chile,
 * and wrong in the quiet way — the names look right, so nothing draws the eye
 * to the column headers.
 */
export const WithLocale: Story = {
  render: () => (
    <div className="df-flex df-flex-wrap df-gap-4">
      {(['en-US', 'es-CL', 'fr-FR', 'ja-JP'] as const).map((locale) => (
        <div key={locale}>
          <p className="df-fs-body-sm df-text-muted df-mb-2">{locale}</p>
          <DDatePicker inline locale={locale} selected={new Date(2026, 2, 8)} />
        </div>
      ))}
    </div>
  ),
};

/**
 * `dateFormat` decides what the FIELD shows; `locale` decides the names inside
 * it. The two are separate: a Chilean user may well want `dd/MM/yyyy` with
 * month names in English, or the other way round.
 */
export const DateFormats: Story = {
  render: () => (
    <div className="df-flex df-flex-col df-gap-3">
      {([
        'dd/MM/yyyy',
        'MM/dd/yyyy',
        'd MMMM yyyy',
        "d 'de' MMMM 'de' yyyy",
      ] as const).map((dateFormat) => (
        <div key={dateFormat}>
          <p className="df-fs-body-sm df-text-muted df-mb-1"><code>{dateFormat}</code></p>
          <DDatePicker
            locale="es-CL"
            dateFormat={dateFormat}
            selected={new Date(2026, 2, 8)}
            inputAriaLabel="Fecha"
          />
        </div>
      ))}
    </div>
  ),
};

export const WithTimeInput: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    showTimeInput: true,
    timeInputLabel: 'Select time',
    dateFormat: 'dd/MM/yyyy h:mm aa',
    ariaLabelInputTime: 'Select an hour for the selected date',
  },
};

/**
 * A time FIELD, not a time list.
 *
 * `showTimeSelect` rendered a scrolling column of every half hour beside the
 * grid. It is gone: the platform's own `type="time"` is keyboard-accessible,
 * localised, and already knows what a time looks like in the reader's region,
 * which a hand-rolled column of strings never did.
 */
export const WithTimeSelect: Story = {
  render: ControlledDatePicker,
  args: {
    inline: true,
    showTimeInput: true,
    timeInputLabel: 'Time',
    dateFormat: 'dd/MM/yyyy h:mm aa',
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
  },
};

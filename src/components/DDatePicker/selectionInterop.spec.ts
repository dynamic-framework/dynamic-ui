import {
  calendarView, dayFilter, flattenHighlights, fromSelection, initialMonth,
  selectionMode, toSelection,
} from './selectionInterop';

/**
 * The seam between the two implementations.
 *
 * `react-datepicker` spells one idea three ways — `selected` for a day,
 * `startDate`/`endDate` for a span, `selectedDates` for several — with two
 * booleans saying which pair is live. `DCalendar` has one `mode` and one
 * `selected`.
 *
 * While both exist, every difference between them is in this file, so it is
 * tested without rendering either.
 */

const d = (n: number) => new Date(2026, 2, n);

describe('selection interop', () => {
  describe('into the calendar', () => {
    it('should pass a single day through', () => {
      expect(toSelection({ selected: d(10) })).toEqual(d(10));
    });

    it('should read null as nothing chosen', () => {
      expect(toSelection({ selected: null })).toBeUndefined();
    });

    it('should build a range from the two dates', () => {
      expect(toSelection({ selectsRange: true, startDate: d(10), endDate: d(14) }))
        .toEqual({ from: d(10), to: d(14) });
    });

    it('should build a half-drawn range', () => {
      expect(toSelection({ selectsRange: true, startDate: d(10), endDate: null }))
        .toEqual({ from: d(10), to: undefined });
    });

    /**
     * No start means no range, not an empty one. `{ from: undefined }` would
     * be a range half-drawn from nowhere, and every reader of a range would
     * have to defend against it.
     */
    it('should read a missing start as no range at all', () => {
      expect(toSelection({ selectsRange: true, startDate: null })).toBeUndefined();
    });

    it('should pass several days through', () => {
      expect(toSelection({ selectsMultiple: true, selectedDates: [d(1), d(2)] }))
        .toEqual([d(1), d(2)]);
      expect(toSelection({ selectsMultiple: true })).toEqual([]);
    });
  });

  describe('back out', () => {
    it('should report a single day', () => {
      expect(fromSelection(d(10), {})).toEqual(d(10));
      expect(fromSelection(undefined, {})).toBeNull();
    });

    it('should report a range as a pair', () => {
      expect(fromSelection({ from: d(10), to: d(14) }, { selectsRange: true }))
        .toEqual([d(10), d(14)]);
    });

    it('should report a half-drawn range with a null end', () => {
      expect(fromSelection({ from: d(10) }, { selectsRange: true }))
        .toEqual([d(10), null]);
    });

    it('should report a cleared range as two nulls', () => {
      expect(fromSelection(undefined, { selectsRange: true })).toEqual([null, null]);
    });

    it('should report several days', () => {
      expect(fromSelection([d(1), d(2)], { selectsMultiple: true })).toEqual([d(1), d(2)]);
      expect(fromSelection(undefined, { selectsMultiple: true })).toEqual([]);
    });

    /**
     * A range and a multiple selection are the same JavaScript type once they
     * leave here, so they are told apart by the PROPS and never by looking at
     * the value. A reader that sniffed the array would report a range as a
     * list of two dates, which is a different thing entirely.
     */
    it('should tell range from multiple by the props, not the value', () => {
      const pair = [d(10), d(14)];
      expect(fromSelection(pair, { selectsMultiple: true })).toEqual(pair);
      expect(fromSelection(pair, { selectsRange: true })).toEqual([null, null]);
    });
  });

  describe('round trip', () => {
    const reapply = (out: unknown, props: Record<string, unknown>) => {
      if (props.selectsRange) {
        const [from, to] = out as [Date | null, Date | null];
        return { startDate: from, endDate: to };
      }
      if (props.selectsMultiple) return { selectedDates: out as Date[] };
      return { selected: out as Date | null };
    };

    it.each([
      ['single', { selected: d(10) }],
      ['range', { selectsRange: true, startDate: d(10), endDate: d(14) }],
      ['multiple', { selectsMultiple: true, selectedDates: [d(1), d(2)] }],
    ])('should survive %s', (_label, props) => {
      const out = fromSelection(toSelection(props), props);
      expect(toSelection({ ...props, ...reapply(out, props) })).toEqual(toSelection(props));
    });
  });
});

/**
 * The day predicates, which the library spells three ways.
 *
 * `excludeDates` blocks a list, `includeDates` allows only a list, and
 * `filterDate` answers per day. They COMPOSE — a day has to survive all three
 * — which is the only reading that does not silently drop one when two are
 * given together.
 */
describe('day predicates', () => {
  const march = (n: number) => new Date(2026, 2, n);

  it('should be absent when nothing filters', () => {
    expect(dayFilter({})).toBeUndefined();
  });

  it('should block an excluded day', () => {
    const blocked = dayFilter({ excludeDates: [march(10)] })!;
    expect(blocked(march(10))).toBe(true);
    expect(blocked(march(11))).toBe(false);
  });

  /** The library accepts `{ date, message }` as well as a bare date. */
  it('should read the object form of an exclusion', () => {
    const blocked = dayFilter({ excludeDates: [{ date: march(10), message: 'Full' }] })!;
    expect(blocked(march(10))).toBe(true);
  });

  it('should block everything not in an include list', () => {
    const blocked = dayFilter({ includeDates: [march(10)] })!;
    expect(blocked(march(10))).toBe(false);
    expect(blocked(march(11))).toBe(true);
  });

  it('should block what a filter rejects', () => {
    const noWeekends = dayFilter({
      filterDate: (day) => day.getDay() !== 0 && day.getDay() !== 6,
    })!;
    /* 2026-03-07 is a Saturday, 2026-03-09 a Monday. */
    expect(noWeekends(march(7))).toBe(true);
    expect(noWeekends(march(9))).toBe(false);
  });

  /**
   * All three at once. An implementation that returned on the first match
   * would let an excluded day through whenever an include list also named it.
   */
  it('should require a day to survive all three', () => {
    const blocked = dayFilter({
      excludeDates: [march(10)],
      includeDates: [march(10), march(11), march(12)],
      filterDate: (day) => day.getDate() !== 12,
    })!;

    expect(blocked(march(10))).toBe(true);
    expect(blocked(march(11))).toBe(false);
    expect(blocked(march(12))).toBe(true);
    expect(blocked(march(20))).toBe(true);
  });
});

describe('highlight flattening', () => {
  const march = (n: number) => new Date(2026, 2, n);

  it('should be absent when nothing is highlighted', () => {
    expect(flattenHighlights(undefined)).toBeUndefined();
  });

  it('should pass a plain list through', () => {
    expect(flattenHighlights([march(1), march(2)])).toEqual([march(1), march(2)]);
  });

  /** The class names are the library's styling hook; this calendar has its own. */
  it('should take the dates out of the keyed form', () => {
    expect(flattenHighlights([{ 'holiday-red': [march(1), march(2)] }]))
      .toEqual([march(1), march(2)]);
  });

  it('should handle both forms together', () => {
    expect(flattenHighlights([march(1), { x: [march(2)] }]))
      .toEqual([march(1), march(2)]);
  });
});

/**
 * Three booleans for one axis with four values.
 *
 * The library can be asked for two views at once and resolves it by whichever
 * branch it tests first. Collapsing them here makes the precedence explicit —
 * coarsest wins — instead of leaving it to the order of some `if`s.
 */
describe('view', () => {
  it('should default to days', () => {
    expect(calendarView({})).toBe('day');
  });

  it.each([
    [{ showMonthYearPicker: true }, 'month'],
    [{ showQuarterYearPicker: true }, 'quarter'],
    [{ showYearPicker: true }, 'year'],
  ])('should read %o as %s', (props, expected) => {
    expect(calendarView(props)).toBe(expected);
  });

  it('should let the coarsest win when two are asked for', () => {
    expect(calendarView({ showYearPicker: true, showMonthYearPicker: true })).toBe('year');
    expect(calendarView({ showQuarterYearPicker: true, showMonthYearPicker: true }))
      .toBe('quarter');
  });
});

/**
 * Week, which crosses the boundary as one date and lives inside as a range.
 *
 * Keeping the library's contract — hand over a Date, get a Date back — means
 * a consumer switching to the in-house grid changes nothing in their code.
 */
describe('week selection across the boundary', () => {
  const ymd = (y: number, m: number, day: number) => new Date(y, m - 1, day);

  it('should widen a chosen day into its week', () => {
    expect(toSelection({ showWeekPicker: true, selected: ymd(2026, 3, 11) }))
      .toEqual({ from: ymd(2026, 3, 8), to: ymd(2026, 3, 14) });
  });

  it('should follow the first day of the week', () => {
    expect(toSelection({ showWeekPicker: true, selected: ymd(2026, 3, 11), calendarStartDay: 1 }))
      .toEqual({ from: ymd(2026, 3, 9), to: ymd(2026, 3, 15) });
  });

  it('should report one date back, not a pair', () => {
    const week = { from: ymd(2026, 3, 8), to: ymd(2026, 3, 14) };
    expect(fromSelection(week, { showWeekPicker: true })).toEqual(ymd(2026, 3, 8));
  });

  it('should report nothing when the week is cleared', () => {
    expect(fromSelection(undefined, { showWeekPicker: true })).toBeNull();
  });

  it('should round-trip', () => {
    const props = { showWeekPicker: true, selected: ymd(2026, 3, 11) };
    const back = fromSelection(toSelection(props), props) as Date;
    /* Not the same day — the WEEK is what was chosen, so it normalises to its
       first day, and feeding that back names the same week. */
    expect(toSelection({ ...props, selected: back })).toEqual(toSelection(props));
  });
});

/**
 * One axis, four values, three booleans.
 *
 * The call site had this as a chain of `&&`, where the precedence was wherever
 * the operators fell. Week beats range because a week IS a range with both
 * ends fixed, so asking for both can only mean the narrower one.
 */
describe('selectionMode', () => {
  it('should default to a single date', () => {
    expect(selectionMode({})).toBe('single');
  });

  it.each([
    [{ selectsRange: true }, 'range'],
    [{ selectsMultiple: true }, 'multiple'],
    [{ showWeekPicker: true }, 'week'],
  ])('should read %p as %s', (props, expected) => {
    expect(selectionMode(props)).toBe(expected);
  });

  it('should let the narrower mode win when two are asked for', () => {
    expect(selectionMode({ showWeekPicker: true, selectsRange: true })).toBe('week');
    expect(selectionMode({ selectsRange: true, selectsMultiple: true })).toBe('range');
  });
});

/**
 * The month the calendar opens on.
 *
 * It opened on TODAY whatever was chosen: a field showing 08/03/2026 opened in
 * September, so the reader either paged back six months to find their own date
 * or picked a September one believing the grid had taken them to March.
 */
describe('initialMonth', () => {
  const on = (y: number, m: number, day: number) => new Date(y, m - 1, day);

  it('should open on the chosen date', () => {
    expect(initialMonth(on(2026, 3, 8))).toEqual(on(2026, 3, 8));
  });

  it('should open on the start of a range', () => {
    expect(initialMonth({ from: on(2026, 3, 10), to: on(2026, 4, 2) }))
      .toEqual(on(2026, 3, 10));
  });

  it('should open on the first of several dates', () => {
    expect(initialMonth([on(2026, 3, 10), on(2026, 5, 2)])).toEqual(on(2026, 3, 10));
  });

  /* The caller saying so outright beats what happens to be selected. */
  it('should let openToDate win', () => {
    expect(initialMonth(on(2026, 3, 8), on(2026, 9, 1))).toEqual(on(2026, 9, 1));
  });

  /* Undefined, not today: the calendar's own default is today, and deciding it
     twice in two places is how the two drift apart. */
  it('should leave it to the calendar when nothing is chosen', () => {
    expect(initialMonth(undefined)).toBeUndefined();
  });
});

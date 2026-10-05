import {
  addDays, addMonths, addYears, cellLabel, cellName, cellText, endOfMonth, firstDayOfWeek,
  isSameDay, isSameMonth, isSelected, isoDay, isoWeek, monthMatrix, monthName, nextSelection,
  rangePosition, startOfDay, startOfMonth, startOfWeek, startOfYearPage, viewDescriptor,
  viewLabel, weekdayNames,
} from './month';

/**
 * The arithmetic a month grid is built on.
 *
 * Tested first and separately because every calendar bug that reaches a user
 * is in here: a day duplicated across a DST boundary, a month skipped when
 * paging from the 31st, a grid that changes height as you page.
 */

const d = (y: number, m: number, day: number) => new Date(y, m - 1, day);

describe('month arithmetic', () => {
  describe('addMonths', () => {
    /**
     * `new Date(2026, 0, 31)` plus one month is 31 February, which the runtime
     * normalises to 3 March — so paging forward from the 31st would skip
     * February entirely.
     */
    it('should clamp to the shorter month rather than overflow it', () => {
      expect(addMonths(d(2026, 1, 31), 1)).toEqual(d(2026, 2, 28));
      expect(addMonths(d(2026, 3, 31), 1)).toEqual(d(2026, 4, 30));
    });

    it('should reach February 29 in a leap year and 28 otherwise', () => {
      expect(addMonths(d(2024, 1, 31), 1)).toEqual(d(2024, 2, 29));
      expect(addYears(d(2024, 2, 29), 1)).toEqual(d(2025, 2, 28));
    });

    it('should go backwards the same way', () => {
      expect(addMonths(d(2026, 3, 31), -1)).toEqual(d(2026, 2, 28));
    });

    it('should cross a year boundary', () => {
      expect(addMonths(d(2026, 12, 15), 1)).toEqual(d(2027, 1, 15));
      expect(addMonths(d(2026, 1, 15), -1)).toEqual(d(2025, 12, 15));
    });
  });

  /**
   * The DST rule.
   *
   * `+24h` is not "tomorrow": on the day a zone springs forward it is tomorrow
   * at 01:00, and on the day it falls back it is still today at 23:00. These
   * dates are the 2026 transitions in US and EU zones; under a timestamp-based
   * implementation one of them repeats or skips a day, depending on where the
   * machine is.
   */
  describe('addDays across a DST boundary', () => {
    const boundaries = [
      ['US spring forward', d(2026, 3, 8)],
      ['US fall back', d(2026, 11, 1)],
      ['EU spring forward', d(2026, 3, 29)],
      ['EU fall back', d(2026, 10, 25)],
    ] as const;

    it.each(boundaries)('should advance exactly one day over %s', (_label, date) => {
      const next = addDays(date, 1);
      const tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
      expect(next.getDate()).toBe(tomorrow.getDate());
      expect(isSameDay(next, date)).toBe(false);
    });

    it.each(boundaries)('should produce seven distinct days around %s', (_label, date) => {
      const week = Array.from({ length: 7 }, (_u, i) => addDays(addDays(date, -3), i));
      const seen = new Set(week.map(isoDay));
      expect(seen.size).toBe(7);
    });
  });

  describe('startOfWeek', () => {
    it('should respect a Sunday start', () => {
      expect(startOfWeek(d(2026, 3, 11), 0)).toEqual(d(2026, 3, 8));
    });

    it('should respect a Monday start', () => {
      expect(startOfWeek(d(2026, 3, 11), 1)).toEqual(d(2026, 3, 9));
    });

    it('should not move a date already on the first day', () => {
      expect(startOfWeek(d(2026, 3, 9), 1)).toEqual(d(2026, 3, 9));
    });
  });

  describe('monthMatrix', () => {
    it('should return whole weeks of seven', () => {
      monthMatrix(d(2026, 3, 1)).forEach((week) => expect(week).toHaveLength(7));
    });

    /**
     * Six rows always, so the grid does not change height as you page — which
     * moves everything below it, and in a popover can flip the popover to the
     * other side of its trigger mid-navigation.
     */
    it('should pad every month to six weeks', () => {
      /* February 2026 starts on a Sunday and is exactly four weeks. */
      expect(monthMatrix(d(2026, 2, 1), { weekStartsOn: 0 })).toHaveLength(6);
      expect(monthMatrix(d(2026, 5, 1))).toHaveLength(6);
    });

    it('should let a caller turn the padding off', () => {
      const weeks = monthMatrix(d(2026, 2, 1), { weekStartsOn: 0, fixedWeeks: false });
      expect(weeks).toHaveLength(4);
    });

    /** Holes cannot be navigated: pressing Left on the 1st has to land somewhere. */
    it('should fill the edges with the neighbouring months', () => {
      const weeks = monthMatrix(d(2026, 3, 1), { weekStartsOn: 1 });
      const first = weeks[0][0];

      expect(isSameMonth(first, d(2026, 3, 1))).toBe(false);
      expect(first).toEqual(d(2026, 2, 23));
    });

    it('should contain every day of the month exactly once', () => {
      const month = d(2026, 3, 1);
      const days = monthMatrix(month).flat().filter((day) => isSameMonth(day, month));

      expect(days).toHaveLength(endOfMonth(month).getDate());
      expect(new Set(days.map(isoDay)).size).toBe(days.length);
    });

    it('should run in reading order with no gaps', () => {
      const flat = monthMatrix(d(2026, 3, 1)).flat();
      flat.slice(1).forEach((day, i) => {
        expect(isSameDay(day, addDays(flat[i], 1))).toBe(true);
      });
    });

    it('should start the first row on the requested weekday', () => {
      expect(monthMatrix(d(2026, 3, 1), { weekStartsOn: 1 })[0][0].getDay()).toBe(1);
      expect(monthMatrix(d(2026, 3, 1), { weekStartsOn: 0 })[0][0].getDay()).toBe(0);
    });

    /** A month that genuinely spans six weeks must not be truncated. */
    it('should hold a six-week month', () => {
      const weeks = monthMatrix(d(2026, 8, 1), { weekStartsOn: 1, fixedWeeks: false });
      const august = weeks.flat().filter((day) => isSameMonth(day, d(2026, 8, 1)));
      expect(august).toHaveLength(31);
    });
  });

  describe('names', () => {
    it('should give seven weekday names in the grid order', () => {
      expect(weekdayNames('en-US', 0)).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
      expect(weekdayNames('en-US', 1)).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
    });

    it('should follow the locale', () => {
      expect(weekdayNames('es-ES', 1)[0].toLowerCase()).toMatch(/^lun/);
      expect(monthName(d(2026, 3, 1), 'es-ES')).toMatch(/marzo/i);
    });

    /** A cell announces the whole date; "14" alone says nothing out of context. */
    it('should label a cell with the full date', () => {
      expect(cellLabel(d(2026, 3, 14), 'en-US')).toContain('2026');
      expect(cellLabel(d(2026, 3, 14), 'en-US')).toContain('14');
    });

    it('should pad the ISO day', () => {
      expect(isoDay(d(2026, 3, 4))).toBe('2026-03-04');
      expect(isoDay(startOfMonth(d(2026, 12, 20)))).toBe('2026-12-01');
    });
  });
});

describe('selection', () => {
  const march = (n: number) => d(2026, 3, n);

  describe('single', () => {
    it('should choose a day', () => {
      expect(nextSelection(march(10), undefined, 'single')).toEqual(march(10));
    });

    /** Clicking the chosen day again clears it — the only way to undo a
        single selection when there is no other control for it. */
    it('should clear when the same day is chosen twice', () => {
      expect(nextSelection(march(10), march(10), 'single')).toBeUndefined();
    });

    it('should replace, not accumulate', () => {
      expect(nextSelection(march(11), march(10), 'single')).toEqual(march(11));
    });
  });

  describe('multiple', () => {
    it('should add and remove', () => {
      const one = nextSelection(march(10), undefined, 'multiple') as Date[];
      expect(one).toEqual([march(10)]);

      const two = nextSelection(march(12), one, 'multiple') as Date[];
      expect(two).toHaveLength(2);

      expect(nextSelection(march(10), two, 'multiple')).toEqual([march(12)]);
    });
  });

  describe('range', () => {
    it('should open on the first day and close on the second', () => {
      const open = nextSelection(march(10), undefined, 'range');
      expect(open).toEqual({ from: march(10) });

      expect(nextSelection(march(14), open, 'range')).toEqual({
        from: march(10), to: march(14),
      });
    });

    /** Nothing stops the second click landing before the first. */
    it('should order a backwards range', () => {
      const open = nextSelection(march(14), undefined, 'range');
      expect(nextSelection(march(10), open, 'range')).toEqual({
        from: march(10), to: march(14),
      });
    });

    /**
     * The third click starts over. Without this case a completed range can
     * never be changed without a reset the user has no way to guess at.
     */
    it('should start a new range once one is complete', () => {
      const done = { from: march(10), to: march(14) };
      expect(nextSelection(march(20), done, 'range')).toEqual({ from: march(20) });
    });

    it('should allow a single-day range', () => {
      const open = nextSelection(march(10), undefined, 'range');
      expect(nextSelection(march(10), open, 'range')).toEqual({
        from: march(10), to: march(10),
      });
    });
  });

  describe('isSelected', () => {
    it('should read every shape', () => {
      expect(isSelected(march(10), march(10))).toBe(true);
      expect(isSelected(march(10), [march(9), march(10)])).toBe(true);
      expect(isSelected(march(11), { from: march(10), to: march(14) })).toBe(true);
      expect(isSelected(march(15), { from: march(10), to: march(14) })).toBe(false);
    });

    it('should treat an open range as its single day', () => {
      expect(isSelected(march(10), { from: march(10) })).toBe(true);
      expect(isSelected(march(11), { from: march(10) })).toBe(false);
    });

    it('should read a backwards range as the ordered one', () => {
      expect(isSelected(march(11), { from: march(14), to: march(10) })).toBe(true);
    });

    it('should be false for nothing selected', () => {
      expect(isSelected(march(10), undefined)).toBe(false);
      expect(isSelected(march(10), [])).toBe(false);
    });
  });

  describe('rangePosition', () => {
    const range = { from: march(10), to: march(14) };

    it('should name the three shapes the stylesheet draws', () => {
      expect(rangePosition(march(10), range)).toBe('start');
      expect(rangePosition(march(12), range)).toBe('middle');
      expect(rangePosition(march(14), range)).toBe('end');
      expect(rangePosition(march(20), range)).toBeNull();
    });

    it('should call a one-day range a start, not an end', () => {
      expect(rangePosition(march(10), { from: march(10), to: march(10) })).toBe('start');
    });

    it('should handle a range still being drawn', () => {
      expect(rangePosition(march(10), { from: march(10) })).toBe('start');
      expect(rangePosition(march(12), { from: march(10) })).toBeNull();
    });
  });
});

/**
 * ISO week numbers, which are not "count weeks from January".
 *
 * Week 1 is the week containing the first Thursday of the year — equivalently,
 * the week containing January 4th. So 1 January can be week 52 or 53 of the
 * PREVIOUS year, and 29 December can be week 1 of the next. A naive
 * `ceil(dayOfYear / 7)` is wrong at both ends of most years, which is why
 * these cases are the ones tested.
 */
describe('isoWeek', () => {
  it.each([
    ['2026-01-01 is a Thursday, so week 1 of its own year', d(2026, 1, 1), 1],
    ['2024-01-01 is a Monday, so week 1', d(2024, 1, 1), 1],
    ['2023-01-01 is a Sunday, so week 52 of 2022', d(2023, 1, 1), 52],
    ['2021-01-01 is a Friday, so week 53 of 2020', d(2021, 1, 1), 53],
    /* 2026 begins on a Thursday, which is exactly the condition for a
       53-week year — so its last week runs into January 2027. */
    ['2026-12-28 is week 53, because 2026 has one', d(2026, 12, 28), 53],
    /* The 53rd week of 2026 runs to 3 January, so the Monday after it opens week 1. */
    ['2027-01-04 opens week 1 of 2027', d(2027, 1, 4), 1],
    ['mid-year is unremarkable', d(2026, 6, 15), 25],
  ])('%s', (_label, date, expected) => {
    expect(isoWeek(date)).toBe(expected);
  });

  it('should be stable across every day of one week', () => {
    const monday = startOfWeek(d(2026, 6, 15), 1);
    const week = Array.from({ length: 7 }, (_u, i) => isoWeek(addDays(monday, i)));
    expect(new Set(week).size).toBe(1);
  });
});

/**
 * The week numbers, checked against the rule rather than against a table.
 *
 * I got three of the hand-written expectations above wrong before getting them
 * right, which is the whole argument for this test: it derives the answer from
 * the ISO definition independently, so it cannot inherit a mistake from the
 * implementation OR from me.
 *
 * The definition, restated: a week belongs to the year containing its
 * Thursday, and weeks are numbered from the first such week of that year.
 */
describe('isoWeek against the definition', () => {
  const thursdayOf = (date: Date) => addDays(startOfWeek(date, 1), 3);

  it('should agree with the rule on every day for eight years', () => {
    const mismatches: string[] = [];

    for (let i = 0; i < 365 * 8; i += 1) {
      const date = addDays(new Date(2021, 0, 1), i);
      const thursday = thursdayOf(date);
      const year = thursday.getFullYear();

      /* The first ISO week of that year is the one whose Thursday comes first. */
      let first = thursdayOf(new Date(year, 0, 1));
      if (first.getFullYear() < year) first = addDays(first, 7);

      const expected = Math.round(
        (startOfDay(thursday).getTime() - startOfDay(first).getTime()) / (86400000 * 7),
      ) + 1;

      if (isoWeek(date) !== expected) {
        mismatches.push(`${isoDay(date)}: got ${isoWeek(date)}, rule says ${expected}`);
      }
    }

    expect(mismatches).toEqual([]);
  });

  it('should only ever produce 1 to 53', () => {
    for (let i = 0; i < 365 * 8; i += 1) {
      const week = isoWeek(addDays(new Date(2021, 0, 1), i));
      expect(week).toBeGreaterThanOrEqual(1);
      expect(week).toBeLessThanOrEqual(53);
    }
  });
});

/**
 * The coarser views.
 *
 * Modelled as one description rather than as branches in the component,
 * because every view shares the keyboard and the roving tabindex — only the
 * cells and the step sizes differ. Four `if (view === …)` chains is how a
 * month grid ends up navigable and a year grid not.
 */
describe('views', () => {
  describe('month', () => {
    const view = viewDescriptor('month', d(2026, 6, 15));

    it('should hold twelve months in four rows of three', () => {
      expect(view.cells).toHaveLength(4);
      view.cells.forEach((row) => expect(row).toHaveLength(3));
      expect(view.cells.flat()).toHaveLength(12);
    });

    it('should start at January of the anchor year', () => {
      expect(view.cells[0][0]).toEqual(d(2026, 1, 1));
      expect(view.cells[3][2]).toEqual(d(2026, 12, 1));
    });

    it('should step by one month and page by one year', () => {
      expect(view.step(d(2026, 6, 15), 1)).toEqual(d(2026, 7, 1));
      expect(view.page(d(2026, 6, 15), 1)).toEqual(d(2027, 6, 1));
    });
  });

  describe('quarter', () => {
    const view = viewDescriptor('quarter', d(2026, 6, 15));

    it('should hold four quarters in two rows', () => {
      expect(view.cells.flat()).toHaveLength(4);
      expect(view.cells.flat().map((c) => c.getMonth())).toEqual([0, 3, 6, 9]);
    });

    it('should step by three months from the start of the quarter', () => {
      /* June is in Q2, which starts 1 April; one step on is Q3. */
      expect(view.step(d(2026, 6, 15), 1)).toEqual(d(2026, 7, 1));
      expect(view.step(d(2026, 6, 15), -1)).toEqual(d(2026, 1, 1));
    });

    it('should know when two dates share a quarter', () => {
      expect(view.isSame(d(2026, 4, 1), d(2026, 6, 30))).toBe(true);
      expect(view.isSame(d(2026, 6, 30), d(2026, 7, 1))).toBe(false);
    });
  });

  describe('year', () => {
    /**
     * Pages are aligned to multiples of twelve, not centred on the current
     * year. A page centred on "now" shifts under the reader every time they
     * arrive from a different year, and the same year then appears in two
     * different pages.
     */
    it('should align the page, so paging returns to the same one', () => {
      expect(startOfYearPage(d(2026, 6, 1)).getFullYear()).toBe(2016);
      expect(startOfYearPage(d(2016, 1, 1)).getFullYear()).toBe(2016);
      expect(startOfYearPage(d(2027, 1, 1)).getFullYear()).toBe(2016);
      expect(startOfYearPage(d(2028, 1, 1)).getFullYear()).toBe(2028);
    });

    it('should hold twelve years', () => {
      const view = viewDescriptor('year', d(2026, 6, 15));
      expect(view.cells.flat()).toHaveLength(12);
      expect(view.cells[0][0].getFullYear()).toBe(2016);
      expect(view.cells[3][2].getFullYear()).toBe(2027);
    });

    it('should page by a whole page, not by a year', () => {
      const view = viewDescriptor('year', d(2026, 6, 15));
      expect(view.page(d(2026, 1, 1), 1).getFullYear()).toBe(2038);
    });

    it('should round-trip paging', () => {
      const view = viewDescriptor('year', d(2026, 6, 15));
      const forward = view.page(d(2026, 1, 1), 1);
      expect(startOfYearPage(view.page(forward, -1))).toEqual(startOfYearPage(d(2026, 1, 1)));
    });
  });

  describe('labels', () => {
    it('should say what the grid is showing', () => {
      expect(viewLabel('day', d(2026, 3, 1), 'en-US')).toMatch(/March 2026/);
      expect(viewLabel('month', d(2026, 3, 1))).toBe('2026');
      expect(viewLabel('quarter', d(2026, 3, 1))).toBe('2026');
      expect(viewLabel('year', d(2026, 3, 1))).toBe('2016 – 2027');
    });

    /** A cell never announces just "Q1" or "03" out of context. */
    it('should announce a cell with its year', () => {
      expect(cellName('month', d(2026, 3, 1), 'en-US')).toMatch(/March 2026/);
      expect(cellName('quarter', d(2026, 3, 1))).toBe('Q1 2026');
      expect(cellName('year', d(2026, 3, 1))).toBe('2026');
    });

    it('should show something shorter than it announces', () => {
      expect(cellText('month', d(2026, 3, 1), 'en-US')).toBe('Mar');
      expect(cellText('quarter', d(2026, 3, 1))).toBe('Q1');
      expect(cellText('day', d(2026, 3, 14))).toBe('14');
    });
  });
});

/**
 * A week is a range whose ends the reader never picks.
 *
 * Modelled as one so everything downstream — `isSelected`, `rangePosition`,
 * the stylesheet's three range rules, the interop that reports a start and an
 * end — works on it unchanged. One activation produces both ends instead of
 * two.
 */
describe('week selection', () => {
  const march = (n: number) => d(2026, 3, n);

  it('should select the whole week a day belongs to', () => {
    /* 2026-03-11 is a Wednesday; a Sunday-start week runs the 8th to the 14th. */
    expect(nextSelection(march(11), undefined, 'week', 0))
      .toEqual({ from: march(8), to: march(14) });
  });

  it('should follow the first day of the week', () => {
    expect(nextSelection(march(11), undefined, 'week', 1))
      .toEqual({ from: march(9), to: march(15) });
  });

  it('should give the same week from any day in it', () => {
    const week = nextSelection(march(8), undefined, 'week', 0);
    [9, 10, 11, 12, 13, 14].forEach((n) => {
      expect(nextSelection(march(n), undefined, 'week', 0)).toEqual(week);
    });
  });

  it('should clear when the same week is chosen twice', () => {
    const week = nextSelection(march(11), undefined, 'week', 0);
    expect(nextSelection(march(9), week, 'week', 0)).toBeUndefined();
  });

  it('should move to another week rather than clear', () => {
    const week = nextSelection(march(11), undefined, 'week', 0);
    expect(nextSelection(march(18), week, 'week', 0))
      .toEqual({ from: march(15), to: march(21) });
  });

  /** It is a range, so every range reader has to work on it as-is. */
  it('should read as a range everywhere else', () => {
    const week = nextSelection(march(11), undefined, 'week', 0);
    expect(isSelected(march(10), week)).toBe(true);
    expect(isSelected(march(15), week)).toBe(false);
    expect(rangePosition(march(8), week as never)).toBe('start');
    expect(rangePosition(march(14), week as never)).toBe('end');
  });
});

/**
 * The first day of the week is a property of the LOCALE, like the month names.
 *
 * A calendar showing Spanish month names with a Sunday-first week is wrong in
 * Spain and in Chile — and wrong silently, because the names look right.
 */
describe('firstDayOfWeek', () => {
  it.each([
    ['es-CL', 1],
    ['es-ES', 1],
    ['en-GB', 1],
    ['fr-FR', 1],
    ['en-US', 0],
    ['pt-BR', 0],
    ['ja', 0],
  ])('should start the week correctly for %s', (locale, expected) => {
    expect(firstDayOfWeek(locale)).toBe(expected);
  });

  /* ISO numbers Sunday 7; `Date.getDay()` numbers it 0. Getting this backwards
     shifts every calendar in a Sunday-first locale by one day. */
  it('should convert ISO Sunday to getDay Sunday', () => {
    expect(firstDayOfWeek('en-US')).toBe(0);
  });

  /* Saturday-first locales exist, and are the case a boolean would have missed. */
  it('should handle a Saturday-first locale', () => {
    expect(firstDayOfWeek('ar-EG')).toBe(6);
  });

  it('should fall back to Sunday for nonsense rather than throwing', () => {
    expect(firstDayOfWeek('not a locale')).toBe(0);
  });

  it('should answer for the runtime default when given nothing', () => {
    expect([0, 1, 2, 3, 4, 5, 6]).toContain(firstDayOfWeek());
  });
});

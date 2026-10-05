import { expandTwoDigitYear, formatDate, parseDate } from './format';

/**
 * The four patterns the library is actually asked for, and the edges around
 * them.
 *
 * Parsing is where the bugs live. `new Date(2026, 1, 31)` is the 3rd of March
 * rather than an error, so a parser that trusts the constructor accepts a date
 * nobody can have and quietly moves the reader to another month — which is why
 * most of this file is about refusal rather than about success.
 */

const d = (y: number, m: number, day: number, h = 0, min = 0) => new Date(y, m - 1, day, h, min);

describe('formatDate', () => {
  it.each([
    ['dd/MM/yyyy', d(2026, 3, 8), '08/03/2026'],
    ['MM/yyyy', d(2026, 3, 8), '03/2026'],
    ['yyyy', d(2026, 3, 8), '2026'],
    ['d/M/yy', d(2026, 3, 8), '8/3/26'],
  ])('should format %s', (pattern, date, expected) => {
    expect(formatDate(date, pattern)).toBe(expected);
  });

  describe('the twelve-hour clock', () => {
    /* Midnight and noon are the two values a naive `% 12` gets wrong, and they
       are the two a reader notices: "0:30 am" is not a time anyone writes. */
    it.each([
      [d(2026, 3, 8, 0, 30), '12:30 am'],
      [d(2026, 3, 8, 12, 30), '12:30 pm'],
      [d(2026, 3, 8, 13, 5), '1:05 pm'],
      [d(2026, 3, 8, 11, 59), '11:59 am'],
    ])('should write %s as %s', (date, expected) => {
      expect(formatDate(date, 'h:mm aa')).toBe(expected);
    });
  });

  it('should take month names from the locale', () => {
    expect(formatDate(d(2026, 3, 8), 'MMMM', { locale: 'es' })).toMatch(/marzo/i);
    expect(formatDate(d(2026, 3, 8), 'MMMM', { locale: 'en-US' })).toBe('March');
  });

  /*
   * Without quoting, the "de" in the usual Spanish long date lexes as tokens —
   * `d` and `e` — and formats as digits, which reads as corruption rather than
   * as a pattern mistake.
   */
  it('should keep quoted text literal', () => {
    expect(formatDate(d(2026, 3, 8), "d 'de' MMMM", { locale: 'es' })).toMatch(/^8 de marzo$/i);
  });

  it('should refuse a token it does not know', () => {
    expect(() => formatDate(d(2026, 3, 8), 'dd/LL/yyyy')).toThrow(/unknown date token/);
  });
});

describe('parseDate', () => {
  it('should read back what it wrote', () => {
    expect(parseDate('08/03/2026', 'dd/MM/yyyy')).toEqual(d(2026, 3, 8));
  });

  it('should round-trip every day of a leap year', () => {
    const pattern = 'dd/MM/yyyy';
    for (let day = new Date(2024, 0, 1); day.getFullYear() === 2024;) {
      const text = formatDate(day, pattern);
      expect(parseDate(text, pattern)).toEqual(day);
      day = new Date(2024, day.getMonth(), day.getDate() + 1);
    }
  });

  /** The whole reason the parse is strict. */
  it.each([
    ['31/02/2026', 'a February that has no 31st'],
    ['30/02/2024', 'a leap February that still has no 30th'],
    ['29/02/2026', 'a 29th in a year that is not a leap year'],
    ['32/01/2026', 'a day past the end of a long month'],
    ['00/01/2026', 'a zeroth day'],
    ['01/13/2026', 'a thirteenth month'],
    ['01/00/2026', 'a zeroth month'],
  ])('should refuse %s — %s', (text) => {
    expect(parseDate(text, 'dd/MM/yyyy')).toBeNull();
  });

  it('should accept the 29th of a real leap February', () => {
    expect(parseDate('29/02/2024', 'dd/MM/yyyy')).toEqual(d(2024, 2, 29));
  });

  it.each([
    ['8/3/2026', 'the pattern wants two digits'],
    ['08-03-2026', 'the separators do not match'],
    ['08/03/2026 extra', 'trailing text the pattern does not account for'],
    ['', 'nothing at all'],
    ['1/', 'someone mid-keystroke'],
    ['not a date', 'words'],
  ])('should return null for %s — %s', (text) => {
    expect(parseDate(text, 'dd/MM/yyyy')).toBeNull();
  });

  it('should take a period as its first day', () => {
    expect(parseDate('03/2026', 'MM/yyyy')).toEqual(d(2026, 3, 1));
    expect(parseDate('2026', 'yyyy')).toEqual(d(2026, 1, 1));
  });

  describe('times', () => {
    it('should read a twelve-hour time', () => {
      expect(parseDate('08/03/2026 1:05 pm', 'dd/MM/yyyy h:mm aa')).toEqual(d(2026, 3, 8, 13, 5));
    });

    it.each([
      ['12:30 am', 0],
      ['12:30 pm', 12],
    ])('should read %s as hour %i', (text, hour) => {
      expect(parseDate(text, 'h:mm aa')?.getHours()).toBe(hour);
    });

    it('should refuse an hour a twelve-hour clock cannot name', () => {
      expect(parseDate('13:05 pm', 'h:mm aa')).toBeNull();
      expect(parseDate('0:05 am', 'h:mm aa')).toBeNull();
    });

    it('should refuse impossible minutes', () => {
      expect(parseDate('08/03/2026 10:60', 'dd/MM/yyyy H:mm')).toBeNull();
    });
  });

  describe('month names', () => {
    it('should read a long month name in the locale given', () => {
      expect(parseDate('8 marzo 2026', 'd MMMM yyyy', { locale: 'es' })).toEqual(d(2026, 3, 8));
    });

    /* Several locales abbreviate with a trailing dot that nobody types. */
    it('should read a short month name with or without its dot', () => {
      expect(parseDate('8 ene 2026', 'd MMM yyyy', { locale: 'es' })).toEqual(d(2026, 1, 8));
      expect(parseDate('8 ene. 2026', 'd MMM yyyy', { locale: 'es' })).toEqual(d(2026, 1, 8));
    });

    it('should refuse a month name that is not one', () => {
      expect(parseDate('8 smarch 2026', 'd MMMM yyyy', { locale: 'en-US' })).toBeNull();
    });
  });
});

/**
 * A two-digit year has to mean something and every choice is wrong sometimes.
 * The window is nearer 50 years back than forward, which is what a date of
 * birth needs.
 */
describe('expandTwoDigitYear', () => {
  it.each([
    [26, 2026, 2026],
    [99, 2026, 1999],
    [76, 2026, 1976],
    [75, 2026, 2075],
    [77, 2026, 1977],
  ])('should read %i in %i as %i', (value, now, expected) => {
    expect(expandTwoDigitYear(value, now)).toBe(expected);
  });

  it('should round-trip through a two-digit pattern', () => {
    const parsed = parseDate('08/03/26', 'dd/MM/yy', { referenceYear: 2026 });
    expect(parsed).toEqual(d(2026, 3, 8));
  });
});

/**
 * The rule for fields the pattern does not name, stated once and checked on
 * all four shapes the library asks for.
 */
describe('fields the pattern does not name', () => {
  const reference = d(2026, 7, 20, 9, 45);

  it('should reset the time when a day is named', () => {
    const parsed = parseDate('08/03/2026', 'dd/MM/yyyy', { reference })!;
    expect([parsed.getHours(), parsed.getMinutes()]).toEqual([0, 0]);
  });

  it('should keep the whole date when only a time is named', () => {
    const parsed = parseDate('1:05 pm', 'h:mm aa', { reference })!;
    expect([parsed.getFullYear(), parsed.getMonth(), parsed.getDate()])
      .toEqual([2026, 6, 20]);
    expect([parsed.getHours(), parsed.getMinutes()]).toEqual([13, 5]);
  });

  /* Not "the 20th of February": a month is a period, and it starts on the 1st. */
  it('should reset the day to the first when only a month is named', () => {
    expect(parseDate('02/2026', 'MM/yyyy', { reference })).toEqual(d(2026, 2, 1));
  });

  it('should reset to January the first when only a year is named', () => {
    expect(parseDate('2026', 'yyyy', { reference })).toEqual(d(2026, 1, 1));
  });
});

/**
 * Every token the formatter advertises, formatted at least once.
 *
 * Eight of them — `MMM`, `HH`, `H`, `hh`, `m`, `ss`, `s`, `yy` — were in the
 * token table, in the type and in the docs, and no test ever formatted one.
 * They are each a line of padding arithmetic, which is exactly the kind of
 * line that is wrong by one and that nobody reads twice.
 */
describe('every advertised token', () => {
  /* A time with no symmetric digits, so a swapped field is visible: the month
     is 3, the day 8, the hour 9 (21:00), minute 7, second 5. */
  const sample = new Date(2026, 2, 8, 21, 7, 5);

  it.each([
    ['yyyy', '2026'],
    ['yy', '26'],
    ['MM', '03'],
    ['M', '3'],
    ['dd', '08'],
    ['d', '8'],
    ['HH', '21'],
    ['H', '21'],
    ['hh', '09'],
    ['h', '9'],
    ['mm', '07'],
    ['m', '7'],
    ['ss', '05'],
    ['s', '5'],
    ['aa', 'pm'],
    ['a', 'pm'],
  ])('should format %s as %s', (token, expected) => {
    expect(formatDate(sample, token)).toBe(expected);
  });

  it.each([
    ['MMMM', /^March$/],
    ['MMM', /^Mar$/],
  ])('should format %s from Intl', (token, expected) => {
    expect(formatDate(sample, token, { locale: 'en-US' })).toMatch(expected);
  });

  /* Single-digit tokens must NOT pad, padded ones must. Getting the pair the
     wrong way round reads as a formatting glitch rather than as a bug. */
  it('should pad only the double-width tokens', () => {
    const single = new Date(2026, 0, 2, 3, 4, 5);
    expect(formatDate(single, 'd/M/yy H:m:s')).toBe('2/1/26 3:4:5');
    expect(formatDate(single, 'dd/MM/yyyy HH:mm:ss')).toBe('02/01/2026 03:04:05');
  });

  /* Every token must also parse back, or the pair is only half a contract. */
  it('should round-trip a full pattern', () => {
    const pattern = 'dd/MM/yyyy HH:mm:ss';
    expect(parseDate(formatDate(sample, pattern), pattern)).toEqual(sample);
  });
});

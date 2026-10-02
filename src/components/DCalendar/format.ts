/**
 * Formatting and parsing a date against a pattern.
 *
 * `date-fns` does this and is already a dependency. It is not used here for
 * the same reason `month.ts` does its own arithmetic: the vanilla bundle would
 * carry it, and the point of that build is that a bank's page loads kilobytes.
 * What is genuinely hard — every NAME a calendar shows — stays `Intl`'s job.
 *
 * ## The token set is closed
 *
 * Only the tokens below are understood. An unknown letter is a mistake in the
 * caller's pattern, and the alternative to saying so is emitting it literally —
 * which turns `dd/LL/yyyy` into a date reading `08/LL/2026` that looks like a
 * rendering bug rather than a typo. So formatting throws, loudly, at the call
 * site that wrote the pattern.
 *
 * ## Parsing is strict
 *
 * The subtle part, and the reason this is a module with tests rather than two
 * lines inside a component. `new Date(2026, 1, 31)` is not an error — it is
 * the 3rd of March. A parser built on it accepts "31/02/2026", silently moves
 * the reader to another month, and the bug surfaces later as a date nobody
 * typed. So every parse is checked by taking the date back apart: if the day
 * that comes out is not the day that went in, the input named a date that does
 * not exist, and the answer is `null`.
 */

export type DateFormatOptions = {
  locale?: string;
};

/** Longest first: `MMMM` must be tried before `MM`, or it matches as `MM`+`MM`. */
const TOKENS = [
  'yyyy', 'yy',
  'MMMM', 'MMM', 'MM', 'M',
  'dd', 'd',
  'HH', 'H', 'hh', 'h',
  'mm', 'm',
  'ss', 's',
  'aa', 'a',
] as const;

const TOKEN_RE = new RegExp(`(${TOKENS.join('|')})`, 'g');

const pad = (value: number, length: number) => String(value).padStart(length, '0');

/** 0 and 12 both display as 12 on a twelve-hour clock, not as 0. */
const twelve = (hours: number) => (hours % 12 === 0 ? 12 : hours % 12);

function monthName(date: Date, locale: string | undefined, month: 'long' | 'short') {
  return new Intl.DateTimeFormat(locale, { month }).format(date);
}

function formatToken(token: string, date: Date, options: DateFormatOptions): string {
  switch (token) {
    case 'yyyy': return pad(date.getFullYear(), 4);
    case 'yy': return pad(date.getFullYear() % 100, 2);
    case 'MMMM': return monthName(date, options.locale, 'long');
    case 'MMM': return monthName(date, options.locale, 'short');
    case 'MM': return pad(date.getMonth() + 1, 2);
    case 'M': return String(date.getMonth() + 1);
    case 'dd': return pad(date.getDate(), 2);
    case 'd': return String(date.getDate());
    case 'HH': return pad(date.getHours(), 2);
    case 'H': return String(date.getHours());
    case 'hh': return pad(twelve(date.getHours()), 2);
    case 'h': return String(twelve(date.getHours()));
    case 'mm': return pad(date.getMinutes(), 2);
    case 'm': return String(date.getMinutes());
    case 'ss': return pad(date.getSeconds(), 2);
    case 's': return String(date.getSeconds());
    /* Lower case, because that is what the four patterns in use expect. */
    case 'aa':
    case 'a': return date.getHours() < 12 ? 'am' : 'pm';
    /* Unreachable for a lexed pattern — `lex` refuses an unknown token
       before formatting starts — and kept so the switch stays total. */
    default:
      throw new Error(`DCalendar: unknown date token "${token}"`);
  }
}

/**
 * Splits a pattern into tokens and literal text.
 *
 * Text inside single quotes is literal, so a pattern can contain a letter that
 * would otherwise be read as a token — `d 'de' MMMM` is the usual Spanish long
 * date, and without quoting its "de" would format as `0 e5` and look like
 * corruption.
 */
function lex(pattern: string): { token?: string; literal?: string }[] {
  const parts: { token?: string; literal?: string }[] = [];
  let rest = pattern;

  while (rest.length) {
    const quoted = /^'([^']*)'/.exec(rest);

    if (quoted) {
      // `''` is an escaped apostrophe, which is how date-fns spells it too.
      parts.push({ literal: quoted[1] === '' ? "'" : quoted[1] });
      rest = rest.slice(quoted[0].length);
    } else if (/^\p{L}/u.test(rest)) {
      /*
       * A letter is a token or a mistake — never a literal.
       *
       * Scanning for "the next token" instead let the lexer walk PAST a quote
       * and then read the text inside it as tokens: `d 'de' MMMM` lexed as
       * `d`, `" '"`, `d`, `e`, … and formatted to `8 '8e' marzo`. Advancing a
       * region at a time means the quote is always seen before what follows.
       */
      TOKEN_RE.lastIndex = 0;
      const match = TOKEN_RE.exec(rest);
      if (!match || match.index !== 0) {
        throw new Error(`DCalendar: unknown date token "${/^\p{L}+/u.exec(rest)?.[0]}" `
          + `in pattern "${pattern}" — quote it if it is meant literally`);
      }
      parts.push({ token: match[0] });
      rest = rest.slice(match[0].length);
    } else {
      /* Up to the next letter or quote is punctuation and spacing. */
      const next = /[\p{L}']/u.exec(rest);
      const end = next ? next.index : rest.length;
      parts.push({ literal: rest.slice(0, end) });
      rest = rest.slice(end);
    }
  }

  return parts;
}

export function formatDate(
  date: Date,
  pattern: string,
  options: DateFormatOptions = {},
): string {
  return lex(pattern)
    .map((part) => (part.token ? formatToken(part.token, date, options) : part.literal))
    .join('');
}

/* ------------------------------------------------------------------ *
 * Parsing
 * ------------------------------------------------------------------ */

type Fields = {
  year?: number;
  month?: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  meridiem?: 'am' | 'pm';
};

const escapeRe = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** The digits a token can consume, as a regex fragment. */
const DIGITS: Record<string, string> = {
  yyyy: '\\d{4}',
  yy: '\\d{2}',
  MM: '\\d{2}',
  M: '\\d{1,2}',
  dd: '\\d{2}',
  d: '\\d{1,2}',
  HH: '\\d{2}',
  H: '\\d{1,2}',
  hh: '\\d{2}',
  h: '\\d{1,2}',
  mm: '\\d{2}',
  m: '\\d{1,2}',
  ss: '\\d{2}',
  s: '\\d{1,2}',
};

/**
 * A two-digit year has to mean something, and every choice is wrong sometimes.
 *
 * The window below is the one `date-fns` uses and the one a date of birth
 * needs: nearer 50 years back than 50 forward. It is named rather than inlined
 * because it is a policy, not a fact.
 */
export function expandTwoDigitYear(value: number, now: number): number {
  const century = Math.floor(now / 100) * 100;
  const candidate = century + value;
  return candidate >= now + 50 ? candidate - 100 : candidate;
}

/**
 * Fills in what the pattern did not name.
 *
 * One rule, largest field to smallest: a field the pattern does not name is
 * taken from the reference date, EXCEPT that every field smaller than the
 * smallest one it does name resets to the start of its period.
 *
 * That single sentence covers all four cases the library asks for, where
 * three ad-hoc defaults would not:
 *
 * - `dd/MM/yyyy` names a day, so the time resets — midnight, not now.
 * - `MM/yyyy` names a month, so the day resets to the 1st. February means
 *   February, not "the 31st of February" and not today's date in February.
 * - `yyyy` names a year: January 1st.
 * - `h:mm aa` names no date field at all, so the whole date comes from the
 *   reference — which is what a time picker needs, since changing the time
 *   must not move the day.
 */
function assemble(fields: Fields, reference?: Date): Date | null {
  const base = reference ?? new Date();

  /* Largest to smallest. The first one the pattern named is the cut. */
  const named = [
    fields.year !== undefined,
    fields.month !== undefined,
    fields.day !== undefined,
    fields.hours !== undefined,
    fields.minutes !== undefined,
    fields.seconds !== undefined,
  ];
  const smallest = named.lastIndexOf(true);
  if (smallest === -1) return null;

  const fallback = [
    base.getFullYear(), base.getMonth(), base.getDate(), 0, 0, 0,
  ];
  /* Below the cut, reset; at or above it, take the reference's value. */
  const resolved = [
    fields.year, fields.month, fields.day, fields.hours, fields.minutes, fields.seconds,
  ].map((value, index) => {
    if (value !== undefined) return value;
    if (index > smallest) return [0, 0, 1, 0, 0, 0][index];
    return fallback[index];
  });

  const [year, month, day] = resolved;
  const [, , , , minutes, seconds] = resolved;

  if (month < 0 || month > 11) return null;

  let hours = resolved[3];
  const { meridiem } = fields;
  if (meridiem) {
    if (hours < 1 || hours > 12) return null;
    hours = meridiem === 'pm' ? (hours % 12) + 12 : hours % 12;
  }
  if (hours > 23 || minutes > 59 || seconds > 59) return null;

  const date = new Date(year, month, day, hours, minutes, seconds, 0);

  /*
   * The check that makes this strict.
   *
   * `new Date(2026, 1, 31)` is the 3rd of March, not an error — so a parser
   * that stops here accepts a date nobody can have and moves the reader to a
   * month they did not type. Taking it back apart is the only way to tell a
   * real date from a rolled-over one.
   */
  if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
    return null;
  }

  return date;
}

/** Month names for a locale, lower-cased for comparison. */
function monthIndexByName(
  name: string,
  locale: string | undefined,
  width: 'long' | 'short',
): number {
  const formatter = new Intl.DateTimeFormat(locale, { month: width });
  const wanted = name.toLocaleLowerCase(locale);
  for (let month = 0; month < 12; month += 1) {
    const candidate = formatter
      .format(new Date(2020, month, 1))
      /* Several locales abbreviate with a trailing dot — "ene." — and nobody
         types the dot. */
      .replace(/\.$/, '')
      .toLocaleLowerCase(locale);
    if (candidate === wanted.replace(/\.$/, '')) return month;
  }
  return -1;
}

/**
 * Text -> date, or `null` if the text does not name a real date.
 *
 * `null` for "not a date" rather than an exception: a person typing into a
 * field is in an incomplete state almost every keystroke, and "1/" is not an
 * error, it is someone mid-way through. The caller decides when incomplete
 * becomes wrong.
 */
export function parseDate(
  text: string,
  pattern: string,
  options: DateFormatOptions & { referenceYear?: number; reference?: Date } = {},
): Date | null {
  const parts = lex(pattern);
  const order: string[] = [];
  let source = '^';

  /*
   * Each pattern part contributes one regex fragment; a token also records
   * its name, so the capture groups and `order` stay index-aligned.
   */
  const fragment = (part: { token?: string; literal?: string }): string => {
    if (part.literal !== undefined) return escapeRe(part.literal);

    const token = part.token as string;
    order.push(token);

    /* A month NAME, with the trailing dot several locales abbreviate with. */
    if (token === 'MMMM' || token === 'MMM') return '(\\p{L}+\\.?)';
    if (token === 'aa' || token === 'a') return '([AaPp][Mm]?)';

    const digits = DIGITS[token];
    if (!digits) throw new Error(`DCalendar: unknown date token "${token}"`);
    return `(${digits})`;
  };

  source += parts.map(fragment).join('');
  source += '$';

  const match = new RegExp(source, 'u').exec(text.trim());
  if (!match) return null;

  const fields: Fields = {};
  const { locale } = options;

  for (let i = 0; i < order.length; i += 1) {
    const token = order[i];
    const raw = match[i + 1];

    switch (token) {
      case 'yyyy': fields.year = Number(raw); break;
      case 'yy':
        fields.year = expandTwoDigitYear(
          Number(raw),
          options.referenceYear ?? new Date().getFullYear(),
        );
        break;
      case 'MMMM':
      case 'MMM': {
        const index = monthIndexByName(raw, locale, token === 'MMMM' ? 'long' : 'short');
        if (index === -1) return null;
        fields.month = index;
        break;
      }
      case 'MM': case 'M': fields.month = Number(raw) - 1; break;
      case 'dd': case 'd': fields.day = Number(raw); break;
      case 'HH': case 'H': case 'hh': case 'h': fields.hours = Number(raw); break;
      case 'mm': case 'm': fields.minutes = Number(raw); break;
      case 'ss': case 's': fields.seconds = Number(raw); break;
      case 'aa': case 'a':
        fields.meridiem = raw[0].toLowerCase() === 'a' ? 'am' : 'pm';
        break;
      default: return null;
    }
  }

  return assemble(fields, options.reference);
}

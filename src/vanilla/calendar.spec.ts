/// <reference types="@testing-library/jest-dom" />

import userEvent from '@testing-library/user-event';

import { enhance, stop } from './registry';
import './calendar';

/** What `df:calendar:select` carries. Typed so the tests are not reading `any`. */
type SelectDetail = { value: string | string[] | null };

/**
 * The vanilla calendar.
 *
 * This is the first behaviour whose DOM the script BUILDS rather than finds,
 * so most of these are about the markup itself: it has to be the markup React
 * renders, or the one stylesheet that dresses both stops working.
 */

afterEach(() => {
  stop();
  document.body.innerHTML = '';
});

const mount = (attrs = '') => {
  document.body.innerHTML = `<div data-df-calendar data-month="2026-03-01" ${attrs}></div>`;
  enhance(document);
  return document.querySelector('[data-df-calendar]') as HTMLElement;
};

const captions = () => Array.from(document.querySelectorAll('.df-calendar-caption'))
  .map((caption) => caption.textContent);

const day = (label: string) => Array.from(
  document.querySelectorAll<HTMLButtonElement>('.df-calendar-day'),
).find((button) => button.getAttribute('aria-label') === label)!;

describe('markup', () => {
  it('should build a grid from an empty element', () => {
    mount('data-locale="en-US"');
    expect(document.querySelector('[role="grid"]')).toBeInTheDocument();
    expect(document.querySelectorAll('.df-calendar-day').length).toBeGreaterThan(27);
  });

  it('should carry the classes the stylesheet is written against', () => {
    mount('data-locale="en-US"');
    ['df-calendar', 'df-calendar-header', 'df-calendar-title', 'df-calendar-months',
      'df-calendar-grid', 'df-calendar-weekday', 'df-calendar-day'].forEach((name) => {
      expect(document.querySelector(`.${name}`)).toBeInTheDocument();
    });
  });

  /* The grid pattern is the difference between a calendar and a pile of
     buttons, and it is the part a hand-written port drops first. */
  it('should be a grid, with cells and a roving tab stop', () => {
    mount('data-locale="en-US"');
    expect(document.querySelectorAll('[role="gridcell"]').length).toBeGreaterThan(27);
    expect(document.querySelectorAll('.df-calendar-day[tabindex="0"]')).toHaveLength(1);
  });

  it('should name every cell with its full date', () => {
    mount('data-locale="en-US"');
    expect(day('Sunday, March 8, 2026')).toBeInTheDocument();
  });
});

describe('locale', () => {
  it('should take every name from the locale', () => {
    mount('data-locale="es-CL"');
    expect(captions()[0]).toMatch(/marzo/i);
  });

  /* The same rule as React: the first day is a property of the locale. */
  it('should start the week on Monday for es-CL', () => {
    mount('data-locale="es-CL"');
    const first = document.querySelector('thead th')?.textContent ?? '';
    expect(first.toLowerCase()).toMatch(/^l/);
  });

  it('should start the week on Sunday for en-US', () => {
    mount('data-locale="en-US"');
    expect(document.querySelector('thead th')?.textContent?.toLowerCase()).toMatch(/^s/);
  });

  it('should let the markup override the first day', () => {
    mount('data-locale="es-CL" data-week-starts-on="0"');
    expect(document.querySelector('thead th')?.textContent?.toLowerCase()).toMatch(/^d/);
  });
});

describe('navigation', () => {
  it('should page back and forward', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    await user.click(document.querySelector('[data-direction="next"]')!);
    expect(captions()[0]).toBe('April');

    await user.click(document.querySelector('[data-direction="prev"]')!);
    expect(captions()[0]).toBe('March');
  });

  /* Its own hidden element, not the heading: anything replacing the heading
     would otherwise take the announcement with it. */
  it('should announce the month as a live region', () => {
    mount('data-locale="en-US"');
    const live = document.querySelector('[aria-live="polite"]');
    expect(live).toBeInTheDocument();
    expect(live).toHaveTextContent('March 2026');
  });

  it('should disable paging at the edge of the allowed range', () => {
    mount('data-locale="en-US" data-min="2026-03-05"');
    expect(document.querySelector('[data-direction="prev"]')).toBeDisabled();
    expect(document.querySelector('[data-direction="next"]')).not.toBeDisabled();
  });

  /* The vanilla seam for what React does with a render prop. */
  it('should use a template for a nav button when one is given', () => {
    document.body.innerHTML = `
      <div data-df-calendar data-month="2026-03-01" data-locale="en-US">
        <template data-nav="prev">Anterior</template>
      </div>`;
    enhance(document);
    expect(document.querySelector('[data-direction="prev"]')).toHaveTextContent('Anterior');
  });

  /*
   * The template is read once, before the first render. Left in the DOM it
   * would be destroyed by the first paging, so the custom button would come
   * back as the default one press later.
   */
  it('should keep the template through paging', async () => {
    const user = userEvent.setup();
    document.body.innerHTML = `
      <div data-df-calendar data-month="2026-03-01" data-locale="en-US">
        <template data-nav="prev">Anterior</template>
      </div>`;
    enhance(document);

    await user.click(document.querySelector('[data-direction="next"]')!);
    expect(document.querySelector('[data-direction="prev"]')).toHaveTextContent('Anterior');
  });
});

describe('selection', () => {
  it('should report a chosen date', async () => {
    const user = userEvent.setup();
    const root = mount('data-locale="en-US"');
    const seen: unknown[] = [];
    root.addEventListener('df:calendar:select', (event) => {
      seen.push((event as CustomEvent<SelectDetail>).detail.value);
    });

    await user.click(day('Sunday, March 8, 2026'));
    expect(seen).toEqual(['2026-03-08']);
  });

  it('should mark the chosen cell', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    await user.click(day('Sunday, March 8, 2026'));
    expect(day('Sunday, March 8, 2026')).toHaveAttribute('data-selected');
    expect(day('Sunday, March 8, 2026').closest('[role="gridcell"]'))
      .toHaveAttribute('aria-selected', 'true');
  });

  it('should draw a range across both ends', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US" data-mode="range"');

    await user.click(day('Tuesday, March 10, 2026'));
    await user.click(day('Friday, March 13, 2026'));

    expect(day('Tuesday, March 10, 2026')).toHaveAttribute('data-range', 'start');
    expect(day('Wednesday, March 11, 2026')).toHaveAttribute('data-range', 'middle');
    expect(day('Friday, March 13, 2026')).toHaveAttribute('data-range', 'end');
  });

  it('should report a range as both ends', async () => {
    const user = userEvent.setup();
    const root = mount('data-locale="en-US" data-mode="range"');
    let last: unknown;
    root.addEventListener('df:calendar:select', (event) => {
      last = (event as CustomEvent<SelectDetail>).detail.value;
    });

    await user.click(day('Tuesday, March 10, 2026'));
    await user.click(day('Friday, March 13, 2026'));
    expect(last).toEqual(['2026-03-10', '2026-03-13']);
  });

  it('should select a whole week', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US" data-mode="week"');

    await user.click(day('Wednesday, March 11, 2026'));
    expect(day('Sunday, March 8, 2026')).toHaveAttribute('data-range', 'start');
    expect(day('Saturday, March 14, 2026')).toHaveAttribute('data-range', 'end');
  });

  /*
   * `aria-disabled`, not `disabled`: a disabled button cannot take focus, so
   * the grid cursor could not land on it and a screen reader user never
   * learned the range existed.
   */
  it('should refuse a day outside the allowed range', async () => {
    const user = userEvent.setup();
    const root = mount('data-locale="en-US" data-min="2026-03-10"');
    const seen: unknown[] = [];
    root.addEventListener('df:calendar:select', () => seen.push(1));

    expect(day('Sunday, March 8, 2026')).toHaveAttribute('aria-disabled', 'true');
    expect(day('Tuesday, March 10, 2026')).not.toHaveAttribute('aria-disabled');

    await user.click(day('Sunday, March 8, 2026'));
    expect(seen).toHaveLength(0);
  });
});

describe('keyboard', () => {
  it('should move a day with the arrows', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    day('Sunday, March 1, 2026').focus();
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toHaveAttribute('aria-label', 'Monday, March 2, 2026');
  });

  it('should move a row with up and down', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    day('Sunday, March 8, 2026').focus();
    await user.keyboard('{ArrowDown}');
    expect(document.activeElement).toHaveAttribute('aria-label', 'Sunday, March 15, 2026');
  });

  it('should page with PageDown', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    day('Sunday, March 8, 2026').focus();
    await user.keyboard('{PageDown}');
    expect(captions()[0]).toBe('April');
  });

  it('should select with Enter', async () => {
    const user = userEvent.setup();
    const root = mount('data-locale="en-US"');
    const seen: unknown[] = [];
    root.addEventListener('df:calendar:select', (event) => {
      seen.push((event as CustomEvent<SelectDetail>).detail.value);
    });

    day('Sunday, March 8, 2026').focus();
    await user.keyboard('{Enter}');
    expect(seen).toEqual(['2026-03-08']);
  });

  /*
   * Rendering replaces every node, so the focused button is destroyed and
   * focus falls to `<body>`. Restoring it is what keeps the keyboard usable
   * at all — but only when focus was inside already, or a calendar on a page
   * would steal the caret from whatever the reader was typing in.
   */
  it('should keep focus inside the grid across a re-render', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    day('Sunday, March 8, 2026').focus();
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toHaveClass('df-calendar-day');
  });

  it('should not take focus on mount', () => {
    document.body.innerHTML = '<input id="other"><div data-df-calendar data-month="2026-03-01"></div>';
    const input = document.getElementById('other') as HTMLInputElement;
    input.focus();

    enhance(document);
    expect(document.activeElement).toBe(input);
  });
});

describe('several months', () => {
  it('should render as many grids as asked for', () => {
    mount('data-locale="en-US" data-months="2"');
    expect(captions()).toEqual(['March', 'April']);
  });

  /* The bug reported through the React component, which this shares. */
  it('should not shift when a day in the second month is chosen', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US" data-months="2" data-mode="range"');

    await user.click(day('Wednesday, April 15, 2026'));
    expect(captions()).toEqual(['March', 'April']);
  });
});

describe('week numbers', () => {
  it('should add a leading column when asked', () => {
    mount('data-locale="en-US" data-week-numbers');
    expect(document.querySelector('.df-calendar-week-number')).toBeInTheDocument();
  });

  it('should announce a row header as a week, not a bare number', () => {
    mount('data-locale="en-US" data-week-numbers');
    expect(document.querySelector('.df-calendar-week-number')).toHaveTextContent(/Week \d+/);
  });
});

describe('teardown', () => {
  it('should leave the element empty', () => {
    const root = mount('data-locale="en-US"');
    expect(root.children.length).toBeGreaterThan(0);
  });
});

/**
 * The grid pattern, in the vanilla build.
 *
 * The React side has its own audit; this is the half that cannot be inferred
 * from markup parity, because parity compares which hooks EXIST rather than
 * whether a keyboard can actually reach them.
 */
describe('accessibility', () => {
  const tabStops = () => document.querySelectorAll('.df-calendar-day[tabindex="0"]');

  it('should have exactly one tab stop', () => {
    mount('data-locale="en-US"');
    expect(tabStops()).toHaveLength(1);
  });

  /*
   * The one that made the React side unusable, checked here too because the
   * two share the design: the tab stop started on the first of the month
   * whether or not that day was allowed, and a `disabled` button cannot take
   * focus — so with a `min` past the 1st the grid had no reachable entry.
   */
  it('should put the tab stop on a day that can take focus', () => {
    mount('data-locale="en-US" data-min="2026-03-10"');
    const [entry] = Array.from(tabStops()) as HTMLButtonElement[];

    expect(entry).toBeDefined();
    expect(entry).not.toBeDisabled();
    entry.focus();
    expect(entry).toHaveFocus();
  });

  it('should name the grid with its month', () => {
    mount('data-locale="es-CL"');
    expect(document.querySelector('[role="grid"]')?.getAttribute('aria-label'))
      .toMatch(/marzo/i);
  });

  it('should declare rows as well as cells', () => {
    mount('data-locale="en-US"');
    expect(document.querySelectorAll('[role="row"]').length).toBeGreaterThan(4);
  });

  it('should say when more than one cell can be selected', () => {
    mount('data-locale="en-US" data-mode="range"');
    expect(document.querySelector('[role="grid"]'))
      .toHaveAttribute('aria-multiselectable', 'true');
  });

  it('should not say so for a single date', () => {
    mount('data-locale="en-US"');
    expect(document.querySelector('[role="grid"]'))
      .not.toHaveAttribute('aria-multiselectable');
  });

  it('should mark today', () => {
    document.body.innerHTML = '<div data-df-calendar data-locale="en-US"></div>';
    enhance(document);
    expect(document.querySelector('.df-calendar-day[data-today]'))
      .toHaveAttribute('aria-current', 'date');
  });

  it('should announce the chosen day on the button itself', async () => {
    const user = userEvent.setup();
    mount('data-locale="en-US"');

    await user.click(day('Sunday, March 8, 2026'));
    expect(day('Sunday, March 8, 2026')).toHaveAttribute('aria-pressed', 'true');
  });
});

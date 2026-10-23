/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DDatePicker from './DDatePicker';

/**
 * The header's month and year dropdowns are `DSelect`s rendered inside
 * react-datepicker, and `DSelect` portals its menu out of the calendar.
 *
 * In a POPUP calendar that is a collision: react-datepicker dismisses itself
 * from a `mousedown` listener on `document`, and a menu outside its subtree
 * makes pressing an option an outside press. The calendar unmounts with the
 * option still under the pointer, so the click that would have committed the
 * month or year never reaches it.
 *
 * Inline calendars never had the problem — they have no outside-click
 * dismissal — which is exactly why this has to be tested on a popup.
 */
function PopupDatePicker() {
  const [date, setDate] = useState<Date | null>(new Date(2026, 0, 15));
  return (
    <DDatePicker
      id="datepicker"
      selected={date}
      onChange={setDate}
      showHeaderSelectors
      minYearSelect={2024}
      maxYearSelect={2028}
    />
  );
}

const yearSelect = () => screen.getByRole('combobox', { name: 'select year' });
const monthSelect = () => screen.getByRole('combobox', { name: 'select month' });
const calendar = () => document.querySelector('.react-datepicker');

async function openCalendar(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('textbox'));
  expect(calendar()).toBeInTheDocument();
}

it('should commit a year chosen from the header of a popup calendar', async () => {
  const user = userEvent.setup();
  render(<PopupDatePicker />);
  await openCalendar(user);

  await user.click(yearSelect());
  await user.click(screen.getByRole('option', { name: '2027' }));

  // The calendar survived the press, and its header moved.
  expect(calendar()).toBeInTheDocument();
  expect(yearSelect()).toHaveValue('2027');
});

it('should commit a month chosen from the header of a popup calendar', async () => {
  const user = userEvent.setup();
  render(<PopupDatePicker />);
  await openCalendar(user);

  await user.click(monthSelect());
  await user.click(screen.getByRole('option', { name: 'March' }));

  expect(calendar()).toBeInTheDocument();
  expect(monthSelect()).toHaveValue('March');
});

/**
 * The menu is still portalled, so it is still free of the calendar's
 * `overflow` and still stacks above an overlay. Only the press is contained.
 */
it('should still render its menu outside the calendar', async () => {
  const user = userEvent.setup();
  render(<PopupDatePicker />);
  await openCalendar(user);

  await user.click(yearSelect());

  const menu = document.querySelector('.d-combobox-menu-datepicker');
  expect(menu).toBeInTheDocument();
  expect(calendar()?.contains(menu)).toBe(false);
});

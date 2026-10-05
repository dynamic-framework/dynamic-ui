/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';

import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DDatePicker from './DDatePicker';

it('should render datepicker', () => {
  const props = {
    onChange: jest.fn(),
    id: 'datepicker',
  };

  const { container } = render(
    <DDatePicker {...props} />,
  );

  const input = container.querySelector('#datepicker');
  const button = container.querySelector('button[aria-label="open calendar"]');
  const icon = button?.querySelector('.df-icon');

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute('type', 'text');
  expect(button).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
  expect(icon?.querySelector('svg')).toBeInTheDocument();
});

/**
 * The field and the panel it opens — the path that used to be
 * `react-datepicker` entirely.
 *
 * The field is read-only, as it has been since 2.x: the date is chosen in the
 * grid, not typed. So these are about the two things that replaced the
 * library — what the field SHOWS, and when the panel opens and closes.
 */
describe('<DDatePicker /> popover', () => {
  const open = () => screen.getByRole('button', { name: 'open calendar' });
  const field = () => screen.getByRole('textbox');

  it('should show the chosen date through dateFormat', () => {
    render(<DDatePicker selected={new Date(2026, 2, 8)} dateFormat="dd/MM/yyyy" />);
    expect(field()).toHaveValue('08/03/2026');
  });

  it('should show nothing when no date is chosen', () => {
    render(<DDatePicker dateFormat="dd/MM/yyyy" />);
    expect(field()).toHaveValue('');
  });

  it('should keep the panel shut until it is asked for', () => {
    render(<DDatePicker selected={new Date(2026, 2, 8)} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('should open the calendar', async () => {
    const user = userEvent.setup();
    render(<DDatePicker selected={new Date(2026, 2, 8)} locale="en-US" />);

    await user.click(open());
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  /* A dangling `aria-labelledby` is ignored, not a fallback — the panel would
     be announced as "dialog" with no name at all. */
  it('should give the panel a name', async () => {
    const user = userEvent.setup();
    render(<DDatePicker selected={new Date(2026, 2, 8)} inputAriaLabel="Payment date" />);

    await user.click(open());
    expect(screen.getByRole('dialog')).toHaveAccessibleName('Payment date');
  });

  it('should report the date and close', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();
    render(
      <DDatePicker selected={new Date(2026, 2, 8)} locale="en-US" onChange={onChange} />,
    );

    await user.click(open());
    await user.click(screen.getByRole('button', { name: /March 15, 2026/ }));

    expect(onChange).toHaveBeenCalledWith(new Date(2026, 2, 15));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  /*
   * The first click only names a start. Closing there would make the second
   * end unreachable without reopening — and reopening restarts the range.
   */
  it('should stay open until a range has both ends', async () => {
    const user = userEvent.setup();
    const onChange = jest.fn();

    function Controlled() {
      const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
      return (
        <DDatePicker
          selectsRange
          startDate={range[0]}
          endDate={range[1]}
          locale="en-US"
          openToDate={new Date(2026, 2, 1)}
          onChange={(value) => {
            setRange(value as [Date | null, Date | null]);
            onChange(value);
          }}
        />
      );
    }
    render(<Controlled />);

    await user.click(open());
    await user.click(screen.getByRole('button', { name: /March 10, 2026/ }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /March 15, 2026/ }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(onChange).toHaveBeenLastCalledWith([new Date(2026, 2, 10), new Date(2026, 2, 15)]);
  });

  it('should close on Escape and give focus back to the field', async () => {
    const user = userEvent.setup();
    render(<DDatePicker selected={new Date(2026, 2, 8)} locale="en-US" />);

    await user.click(open());
    await user.keyboard('{Escape}');

    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(document.activeElement).not.toBe(document.body);
  });

  it('should render inline without a field at all', () => {
    render(<DDatePicker inline selected={new Date(2026, 2, 8)} locale="en-US" />);
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.getByRole('grid')).toBeInTheDocument();
  });

  /*
   * A range reads as both ends. An unfinished one reads as the end it has,
   * rather than as an empty field that looks like nothing was chosen.
   */
  it('should write a range as both of its ends', () => {
    render(
      <DDatePicker
        selectsRange
        startDate={new Date(2026, 2, 10)}
        endDate={new Date(2026, 2, 15)}
        dateFormat="dd/MM/yyyy"
      />,
    );
    expect(field()).toHaveValue('10/03/2026 – 15/03/2026');
  });

  it('should write an unfinished range as the end it has', () => {
    render(
      <DDatePicker selectsRange startDate={new Date(2026, 2, 10)} dateFormat="dd/MM/yyyy" />,
    );
    expect(field()).toHaveValue('10/03/2026');
  });
});

/**
 * The time field, which changes the clock without moving the day.
 *
 * Adding milliseconds to a timestamp would cross a daylight saving boundary
 * twice a year and land on the day before or after.
 */
describe('<DDatePicker /> time field', () => {
  it('should keep the day when the time changes', () => {
    const onChange = jest.fn();
    render(
      <DDatePicker
        inline
        showTimeInput
        timeInputLabel="Time"
        selected={new Date(2026, 2, 8, 9, 0)}
        onChange={onChange}
        locale="en-US"
      />,
    );

    /*
     * `fireEvent`, not `user.type`.
     *
     * A `type="time"` field reports a whole time, and typing into it
     * character by character fires a change per keystroke — "1", then "14",
     * then "14:3" — so the assertion would be about an intermediate state a
     * real control never emits. The browser's own interaction is one change
     * with the finished value, which is what this reproduces.
     */
    const time = screen.getByLabelText('Time');
    fireEvent.change(time, { target: { value: '14:30' } });

    expect(onChange).toHaveBeenLastCalledWith(new Date(2026, 2, 8, 14, 30));
  });

  it('should not render the time field unless asked', () => {
    render(<DDatePicker inline selected={new Date(2026, 2, 8)} locale="en-US" />);
    expect(screen.queryByLabelText('Time')).not.toBeInTheDocument();
  });
});

/**
 * The picker passes `monthsShown` straight through, so the multi-month fix in
 * the calendar has to reach it — this is the shape a date range is actually
 * picked in, and the bug was reported through this component rather than
 * through `DCalendar` directly.
 */
describe('<DDatePicker /> range across two months', () => {
  it('should keep both months in view while the range is drawn', async () => {
    const user = userEvent.setup();

    function Controlled() {
      const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
      return (
        <DDatePicker
          inline
          selectsRange
          monthsShown={2}
          locale="en-US"
          openToDate={new Date(2026, 2, 1)}
          startDate={range[0]}
          endDate={range[1]}
          onChange={(value) => setRange(value as [Date | null, Date | null])}
        />
      );
    }
    render(<Controlled />);

    const captions = () => Array.from(
      document.querySelectorAll('.df-calendar-grid caption'),
    ).map((caption) => caption.textContent);

    expect(captions()).toEqual(['March', 'April']);

    await user.click(screen.getByRole('button', { name: /^Tuesday, March 10, 2026$/ }));
    await user.click(screen.getByRole('button', { name: /^Wednesday, April 15, 2026$/ }));

    expect(captions()).toEqual(['March', 'April']);
  });
});

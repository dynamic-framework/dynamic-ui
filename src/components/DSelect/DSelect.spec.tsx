/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  fireEvent, render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DSelect from '.';
import type { DSelectOption } from './types';

const OPTIONS: Array<DSelectOption> = [
  { value: 'es', label: 'Spain' },
  { value: 'mx', label: 'México', description: 'North America' },
  { value: 'cl', label: 'Chile' },
  { value: 'ar', label: 'Argentina', disabled: true },
];

const GROUPS = [
  { label: 'Europe', options: [{ value: 'es', label: 'Spain' }] },
  { label: 'America', options: [{ value: 'mx', label: 'México' }, { value: 'cl', label: 'Chile' }] },
];

const scrollIntoView = jest.fn();

beforeAll(() => {
  // Not implemented in jsdom. Held in a variable so a test can assert the
  // component never reaches for it — see the regression below.
  Element.prototype.scrollIntoView = scrollIntoView;
});

beforeEach(() => scrollIntoView.mockClear());

const combobox = () => screen.getByRole('combobox');
const listbox = () => screen.getByRole('listbox');
const optionLabels = () => within(listbox())
  .getAllByRole('option')
  .map((option) => option.textContent);

describe('<DSelect />', () => {
  describe('Accessibility', () => {
    /**
     * ARIA 1.2's combobox pattern. The input stays focused and points at the
     * highlighted option with `aria-activedescendant`, which is what lets
     * someone type and arrow at the same time.
     */
    it('should wire the combobox to its listbox', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      const input = combobox();
      expect(input).toHaveAttribute('aria-expanded', 'false');
      expect(input).toHaveAttribute('aria-autocomplete', 'list');

      await user.click(input);
      expect(input).toHaveAttribute('aria-expanded', 'true');
      expect(input).toHaveAttribute('aria-controls', listbox().id);
    });

    it('should point at the highlighted option rather than moving focus to it', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('{ArrowDown}');

      const active = within(listbox()).getAllByRole('option')[1];
      expect(combobox()).toHaveAttribute('aria-activedescendant', active.id);
      // Focus has NOT moved — that is the point of the pattern.
      expect(combobox()).toHaveFocus();
    });

    it('should tie a hint to the control for a screen reader', () => {
      render(<DSelect options={OPTIONS} label="Country" hint="Pick one" id="c" />);
      expect(combobox()).toHaveAttribute('aria-describedby', 'cHint');
      expect(document.getElementById('cHint')).toHaveTextContent('Pick one');
    });

    it('should mark an invalid control for assistive technology, not only in colour', () => {
      render(<DSelect options={OPTIONS} label="Country" invalid />);
      expect(combobox()).toHaveAttribute('aria-invalid', 'true');
    });

    it('should announce how many options survived the filter', async () => {
      const user = userEvent.setup();
      const { container } = render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('chi');

      const live = container.querySelector('[aria-live="polite"]');
      expect(live).toHaveTextContent('1 options available');
    });

    it('should mark a multi listbox as taking more than one answer', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" multi />);

      await user.click(combobox());
      expect(listbox()).toHaveAttribute('aria-multiselectable', 'true');
    });
  });

  describe('Accessible name', () => {
    it('should name the control with a text label', () => {
      render(<DSelect options={OPTIONS} label="Country" />);

      expect(combobox()).toHaveAccessibleName('Country');
      expect(combobox()).not.toHaveAttribute('aria-label');
    });

    it('should let ariaLabel replace the name the label gives', () => {
      render(<DSelect options={OPTIONS} label="Country" ariaLabel="Country of residence" />);

      expect(combobox()).toHaveAccessibleName('Country of residence');
    });

    it('should name the control from ariaLabelledBy', () => {
      render(
        <>
          <span id="countryHeading">Country</span>
          <DSelect options={OPTIONS} ariaLabelledBy="countryHeading" />
        </>,
      );

      expect(combobox()).toHaveAccessibleName('Country');
      expect(combobox()).not.toHaveAttribute('aria-label');
    });

    /**
     * The fallback is for the unlabelled case only: on top of a label it would
     * outrank it and make every select on the page announce the same name.
     */
    it('should fall back to a generic name only without a label', () => {
      render(<DSelect options={OPTIONS} />);

      expect(combobox()).toHaveAccessibleName('Select an option');
    });

    it('should warn about a rich label with no accessible name', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      render(<DSelect options={OPTIONS} label={<span>Country</span>} />);

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('ariaLabel'));
      warn.mockRestore();
    });
  });

  describe('Selecting', () => {
    it('should report the value, not the option object', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));

      expect(onChange).toHaveBeenCalledWith('es', expect.objectContaining({ value: 'es' }));
    });

    it('should show the chosen label in the box and close', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));

      expect(combobox()).toHaveValue('Spain');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should not select a disabled option', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Argentina' }));
      expect(onChange).not.toHaveBeenCalled();
    });

    /**
     * Assistive technology activates an option by synthesizing a click, with
     * no mouse events in front of it. Committing on `mousedown` left a screen
     * reader user pressing an option that did nothing.
     */
    it('should select on a click with no mouse press in front of it', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      // `fireEvent` and not `user.click`: the point is a bare click, with no
      // pointer or mouse events in front of it — which is what activating an
      // option through assistive technology dispatches.
      fireEvent.click(screen.getByRole('option', { name: 'Spain' }));

      expect(onChange).toHaveBeenCalledWith('es', expect.objectContaining({ value: 'es' }));
    });

    /** `mousedown` fires for every button; `click` is primary-button only. */
    it('should not select on a right-click', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.pointer({
        keys: '[MouseRight]',
        target: screen.getByRole('option', { name: 'Spain' }),
      });

      expect(onChange).not.toHaveBeenCalled();
    });

    it('should take a controlled value', () => {
      render(<DSelect options={OPTIONS} label="Country" value="cl" />);
      expect(combobox()).toHaveValue('Chile');
    });

    it('should leave a controlled value alone until the owner changes it', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" value="cl" onChange={jest.fn()} />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));
      expect(combobox()).toHaveValue('Chile');
    });
  });

  describe('Searching', () => {
    it('should filter as you type', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('chi');
      expect(optionLabels()).toEqual(['Chile']);
    });

    /**
     * Without accent folding, typing "mexico" finds nothing in a list that
     * contains "México" — which in a Spanish-language product is most of the
     * searches people actually make.
     */
    it('should ignore accents', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('mexico');
      expect(optionLabels()).toEqual([expect.stringContaining('México')]);
    });

    it('should search the description as well as the label', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('north');
      expect(optionLabels()).toEqual([expect.stringContaining('México')]);
    });

    it('should say so when nothing matches', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('zzz');
      expect(screen.queryAllByRole('option')).toHaveLength(0);
      expect(screen.getByText('No options')).toBeInTheDocument();
    });

    it('should report the query for loading options remotely', async () => {
      const user = userEvent.setup();
      const onSearch = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onSearch={onSearch} />);

      await user.click(combobox());
      await user.keyboard('ch');
      expect(onSearch).toHaveBeenLastCalledWith('ch');
    });

    /**
     * After choosing, the box holds the chosen label. Filtering on it would
     * reopen the menu showing one option, which reads as the rest having
     * disappeared.
     */
    it('should show the whole list again when reopened on a selection', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));
      await user.click(combobox());

      expect(optionLabels()).toHaveLength(OPTIONS.length);
    });

    /**
     * `search` aims at row 0 before the new query has been applied, so the aim
     * has to be validated against the list that comes back. Row 0 disabled
     * meant Enter did nothing, with an enabled match sitting right below it.
     */
    it('should aim Enter at the first result that can be chosen', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect
          label="Word"
          onChange={onChange}
          options={[
            { value: 'alpha', label: 'Alpha', disabled: true },
            { value: 'alpaca', label: 'Alpaca' },
          ]}
        />,
      );

      await user.click(combobox());
      await user.keyboard('alp{Enter}');

      expect(onChange).toHaveBeenCalledWith('alpaca', expect.anything());
    });

    /**
     * The shape of a remote search: the list empties while the request is in
     * flight and comes back with results. Emptying put the cursor at -1, and
     * nothing moved it off -1 when the results landed — so the first Enter
     * after a search resolved chose nothing.
     */
    it('should aim at the first result when a list comes back after emptying', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      // The server does the filtering, so the client must not filter again.
      const props = { label: 'Country', onChange, filterOption: () => true };
      const { rerender } = render(<DSelect {...props} options={OPTIONS} />);

      await user.click(combobox());
      await user.keyboard('chi');

      // In flight.
      rerender(<DSelect {...props} options={[]} />);
      // Resolved.
      rerender(<DSelect {...props} options={[{ value: 'cl', label: 'Chile' }]} />);

      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith('cl', expect.anything());
    });

    it('should take no text when it is not searchable', () => {
      render(<DSelect options={OPTIONS} label="Country" searchable={false} />);
      expect(combobox()).toHaveAttribute('readonly');
    });
  });

  describe('Keyboard', () => {
    it('should open on ArrowDown and move the cursor', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      combobox().focus();
      await user.keyboard('{Escape}{ArrowDown}');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should choose the highlighted option with Enter', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.keyboard('{ArrowDown}{Enter}');
      expect(onChange).toHaveBeenCalledWith('mx', expect.anything());
    });

    /** A disabled option is stepped over, not landed on and refused. */
    it('should skip a disabled option while arrowing', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('{ArrowUp}');

      const options = within(listbox()).getAllByRole('option');
      expect(options[3]).toHaveAttribute('aria-disabled', 'true');
      expect(options[3]).not.toHaveAttribute('data-active');
      expect(options[2]).toHaveAttribute('data-active');
    });

    it('should close on Escape without changing the value', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.keyboard('{ArrowDown}{Escape}');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(onChange).not.toHaveBeenCalled();
    });

    it('should jump to the ends with Home and End', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('{End}');
      // Argentina is disabled, so End lands on the last option that is not.
      expect(within(listbox()).getAllByRole('option')[2]).toHaveAttribute('data-active');
    });

    /** What a native `<select>` does, and what people expect from one. */
    it('should jump by typeahead when there is no search box', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" searchable={false} />);

      await user.click(combobox());
      await user.keyboard('chi');
      expect(within(listbox()).getAllByRole('option')[2]).toHaveAttribute('data-active');
    });

    /**
     * The keystroke that opens the menu may already have aimed somewhere.
     * Opening used to overwrite that aim with the selection, so pressing a
     * letter from a closed menu looked ignored.
     */
    it('should keep the target the opening keystroke aimed at', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" searchable={false} />);

      combobox().focus();
      await user.keyboard('{Escape}c');

      expect(within(listbox()).getAllByRole('option')[2]).toHaveAttribute('data-active');
    });

    /**
     * Enter confirms the candidate word in an input method editor. Acting on
     * it chose an option while the person was still spelling their query.
     */
    it('should leave Enter to an input method editor mid-composition', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" onChange={onChange} />);

      await user.click(combobox());
      await user.keyboard('{ArrowDown}');
      fireEvent.keyDown(combobox(), { key: 'Enter', isComposing: true });

      expect(onChange).not.toHaveBeenCalled();
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      // The same key, once composition is over, does choose.
      fireEvent.keyDown(combobox(), { key: 'Enter' });
      expect(onChange).toHaveBeenCalled();
    });

    /**
     * `DPortalContext` closes the top modal or offcanvas from a `keydown`
     * listener on `window` without consulting `defaultPrevented`, so one
     * Escape over an open menu took the panel around it with it.
     */
    it('should keep Escape from reaching the overlay that contains it', async () => {
      const user = userEvent.setup();
      const onWindowKeyDown = jest.fn();
      window.addEventListener('keydown', onWindowKeyDown);

      try {
        render(<DSelect options={OPTIONS} label="Country" />);

        await user.click(combobox());
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
        expect(onWindowKeyDown).not.toHaveBeenCalled();

        // With the menu shut there is nothing left to absorb it, so the next
        // press falls through to whatever contains the select.
        await user.keyboard('{Escape}');
        expect(onWindowKeyDown).toHaveBeenCalledTimes(1);
      } finally {
        window.removeEventListener('keydown', onWindowKeyDown);
      }
    });
  });

  describe('Scrolling', () => {
    /**
     * Opening the menu used to scroll the page back to the top.
     *
     * `scrollIntoView` scrolls EVERY ancestor, and the menu is in a
     * portal on `document.body`; on the frame it mounts it has not been
     * positioned yet, so it is at the document's top-left and bringing it into
     * view takes the whole page with it.
     *
     * jsdom has no layout, so the symptom cannot be reproduced here — but the
     * cause can be pinned exactly: the component must keep the highlight
     * visible by moving the menu's own `scrollTop`, and must never ask the
     * browser to scroll anything to an element.
     */
    it('should never scroll an ancestor to keep the highlight visible', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('{ArrowDown}{ArrowDown}{End}');

      expect(scrollIntoView).not.toHaveBeenCalled();
    });
  });

  describe('Multiple selection', () => {
    it('should render a removable tag per selection', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" multi defaultValue={['es', 'cl']} />);

      expect(screen.getByRole('button', { name: 'Remove Spain' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Remove Chile' })).toBeInTheDocument();

      await user.click(screen.getByRole('button', { name: 'Remove Spain' }));
      expect(screen.queryByRole('button', { name: 'Remove Spain' })).not.toBeInTheDocument();
    });

    it('should toggle a value rather than replace it', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<DSelect options={OPTIONS} label="Country" multi onChange={onChange} />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));
      expect(onChange).toHaveBeenLastCalledWith(['es'], expect.anything());

      await user.click(screen.getByRole('option', { name: 'Chile' }));
      expect(onChange).toHaveBeenLastCalledWith(['es', 'cl'], expect.anything());

      await user.click(screen.getByRole('option', { name: 'Spain' }));
      expect(onChange).toHaveBeenLastCalledWith(['cl'], expect.anything());
    });

    it('should stay open while picking several', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" multi />);

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    /**
     * The tags and the keyboard have to agree on which one is last. Deriving
     * the chosen options by filtering the option list put them out of step:
     * tags came out in list order, Backspace removed the last entry of
     * `value`, and with a value ordered against the list those were two
     * different options.
     */
    it('should show tags in the order they were chosen', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      // OPTIONS runs Spain, México, Chile; this value runs the other way.
      render(
        <DSelect
          options={OPTIONS}
          label="Countries"
          multi
          value={['cl', 'es']}
          onChange={onChange}
        />,
      );

      const labelled = screen.getAllByRole('button', { name: /^Remove / })
        .map((button) => button.getAttribute('aria-label'));
      expect(labelled).toEqual(['Remove Chile', 'Remove Spain']);

      // So Backspace takes Spain — the one actually sitting last.
      await user.click(combobox());
      await user.keyboard('{Backspace}');
      expect(onChange).toHaveBeenLastCalledWith(['cl'], expect.anything());
    });

    /** The behaviour every tag input has, and only with an empty query. */
    it('should remove the last tag on Backspace', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect
          options={OPTIONS}
          label="Country"
          multi
          defaultValue={['es', 'cl']}
          onChange={onChange}
        />,
      );

      await user.click(combobox());
      await user.keyboard('{Backspace}');
      expect(onChange).toHaveBeenLastCalledWith(['es'], expect.anything());
    });

    it('should leave the query alone when Backspace has text to delete', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect
          options={OPTIONS}
          label="Country"
          multi
          defaultValue={['es']}
          onChange={onChange}
        />,
      );

      await user.click(combobox());
      await user.keyboard('ch{Backspace}');
      expect(onChange).not.toHaveBeenCalled();
      expect(combobox()).toHaveValue('c');
    });
  });

  describe('Groups', () => {
    it('should render each group under its own heading', async () => {
      const user = userEvent.setup();
      render(<DSelect options={GROUPS} label="Country" />);

      await user.click(combobox());
      expect(screen.getByRole('group', { name: 'Europe' })).toBeInTheDocument();
      expect(screen.getByRole('group', { name: 'America' })).toBeInTheDocument();
    });

    it('should drop a group the filter emptied', async () => {
      const user = userEvent.setup();
      render(<DSelect options={GROUPS} label="Country" />);

      await user.click(combobox());
      await user.keyboard('chi');
      expect(screen.queryByRole('group', { name: 'Europe' })).not.toBeInTheDocument();
      expect(screen.getByRole('group', { name: 'America' })).toBeInTheDocument();
    });
  });

  describe('Clearing and states', () => {
    it('should clear everything with the clear button', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect
          options={OPTIONS}
          label="Country"
          clearable
          defaultValue="es"
          onChange={onChange}
        />,
      );

      await user.click(screen.getByRole('button', { name: 'Clear selection' }));
      expect(onChange).toHaveBeenCalledWith(null, null);
    });

    it('should offer no clear button when there is nothing to clear', () => {
      render(<DSelect options={OPTIONS} label="Country" clearable />);
      expect(screen.queryByRole('button', { name: 'Clear selection' })).not.toBeInTheDocument();
    });

    it('should not open while disabled', async () => {
      const user = userEvent.setup();
      const { container } = render(<DSelect options={OPTIONS} label="Country" disabled />);

      await user.click(combobox());
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(container.querySelector('.d-combobox')).toHaveClass('disabled');
    });

    it('should still open while loading', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" loading />);

      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
      await user.click(combobox());
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should say it is busy rather than report an empty result set', () => {
      const { container, rerender } = render(
        <DSelect options={[]} label="Country" defaultOpen loading />,
      );
      const live = () => container.querySelector('[aria-live="polite"]');
      expect(live()).toHaveTextContent('Loading…');

      rerender(<DSelect options={OPTIONS} label="Country" defaultOpen />);
      expect(live()).toHaveTextContent('4 options available');
    });

    /**
     * The defect the `AsyncSearch` example had: `onSearch` sets `loading` on
     * the first keystroke, and `loading` disabled the input — so the search
     * killed the box it was being typed into, taking the focus with it.
     */
    it('should stay editable and focused through a remote search', async () => {
      function Remote() {
        const [loading, setLoading] = useState(false);
        return (
          <DSelect
            label="Country"
            options={[]}
            loading={loading}
            onSearch={(query) => setLoading(!!query)}
            // The server does the filtering, so the client must not filter again.
            filterOption={() => true}
          />
        );
      }

      const user = userEvent.setup();
      render(<Remote />);

      await user.click(combobox());
      await user.keyboard('chi');

      expect(combobox()).not.toBeDisabled();
      expect(combobox()).toHaveFocus();
      expect(combobox()).toHaveValue('chi');
      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should let a tag be removed while loading', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect
          options={OPTIONS}
          label="Countries"
          multi
          loading
          value={['es', 'cl']}
          onChange={onChange}
        />,
      );

      await user.click(screen.getByRole('button', { name: 'Remove Chile' }));

      expect(onChange).toHaveBeenCalledWith(['es'], expect.anything());
    });

    /**
     * A form that locks itself on submit, or a `loading` that arrives from a
     * fetch, disables the control with its menu already open. Refusing to
     * close while disabled stranded that menu on screen.
     */
    it('should close an open menu when it becomes disabled', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      expect(screen.getByRole('listbox')).toBeInTheDocument();

      rerender(<DSelect options={OPTIONS} label="Country" disabled />);
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    /**
     * `loading` is busy, not dead — so unlike `disabled` it leaves the menu
     * where it is. A list that empties mid-request and comes back is the whole
     * shape of a remote search.
     */
    it('should keep its menu open while loading', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<DSelect options={OPTIONS} label="Country" />);

      await user.click(combobox());
      rerender(<DSelect options={OPTIONS} label="Country" loading />);

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    it('should carry the validation and size classes the stylesheet expects', () => {
      const { container } = render(
        <DSelect options={OPTIONS} label="Country" invalid size="sm" className="my-select" />,
      );

      const root = container.querySelector('.d-combobox');
      expect(root).toHaveClass('is-invalid', 'd-combobox-sm', 'my-select');
    });
  });

  describe('Forms', () => {
    /** So a plain HTML form posts what the control shows. */
    it('should post a single value under its name', () => {
      const { container } = render(
        <DSelect options={OPTIONS} label="Country" name="country" defaultValue="cl" />,
      );
      const hidden = container.querySelector('input[type="hidden"]');
      expect(hidden).toHaveAttribute('name', 'country');
      expect(hidden).toHaveValue('cl');
    });

    it('should post one entry per value when multiple', () => {
      const { container } = render(
        <DSelect
          options={OPTIONS}
          label="Country"
          name="country"
          multi
          defaultValue={['es', 'cl']}
        />,
      );
      const hidden = [...container.querySelectorAll('input[type="hidden"]')];
      expect(hidden.map((input) => (input as HTMLInputElement).value)).toEqual(['es', 'cl']);
      expect(hidden[0]).toHaveAttribute('name', 'country[]');
    });

    /**
     * What gets submitted cannot depend on whether the value can be given a
     * label. A remote search replaces the option list, and the selection then
     * dropped out of the form with no `onChange` to say so — the single branch
     * posting an empty string over it.
     */
    it('should keep posting a value the option list can no longer name', () => {
      // The server does the filtering, so the client must not filter again.
      const props = { label: 'Country', name: 'country', filterOption: () => true };
      const { container, rerender } = render(
        <DSelect {...props} options={OPTIONS} value="cl" />,
      );
      expect(container.querySelector('input[type="hidden"]')).toHaveValue('cl');

      rerender(<DSelect {...props} options={[{ value: 'ar', label: 'Argentina' }]} value="cl" />);

      expect(container.querySelector('input[type="hidden"]')).toHaveValue('cl');
    });

    it('should keep posting every value when the list is replaced', () => {
      const props = {
        label: 'Countries', name: 'country', multi: true, filterOption: () => true,
      };
      const { container, rerender } = render(
        <DSelect {...props} options={OPTIONS} value={['es', 'cl']} />,
      );
      const posted = () => [...container.querySelectorAll('input[type="hidden"]')]
        .map((input) => (input as HTMLInputElement).value);
      expect(posted()).toEqual(['es', 'cl']);

      rerender(<DSelect {...props} options={[]} value={['es', 'cl']} />);

      expect(posted()).toEqual(['es', 'cl']);
    });

    /**
     * The hidden inputs follow the SELECTION, not the `value` prop: a multi
     * select left uncontrolled starts with no `value` and no `defaultValue` at
     * all, and a form that posted nothing after three picks would be a control
     * that silently drops what it shows.
     */
    it('should post what an uncontrolled multi select has collected', async () => {
      const user = userEvent.setup();
      const { container } = render(
        <DSelect options={OPTIONS} label="Country" name="country" multi />,
      );

      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Spain' }));

      const hidden = [...container.querySelectorAll('input[type="hidden"]')];
      expect(hidden.map((input) => (input as HTMLInputElement).value)).toEqual(['es']);
    });
  });

  describe('Rendering options', () => {
    it('should render an icon, a label and a description without a custom renderer', async () => {
      const user = userEvent.setup();
      render(
        <DSelect
          label="Country"
          options={[{
            value: 'es', label: 'Spain', icon: 'Flag', description: 'Europe',
          }]}
        />,
      );

      await user.click(combobox());
      const option = screen.getByRole('option');
      expect(within(option).getByText('Spain')).toBeInTheDocument();
      expect(within(option).getByText('Europe')).toBeInTheDocument();
      expect(option.querySelector('.d-icon')).toBeInTheDocument();
    });

    it('should hand the option and its state to a custom renderer', async () => {
      const user = userEvent.setup();
      render(
        <DSelect
          label="Country"
          options={OPTIONS}
          defaultValue="es"
          renderOption={(option, state) => (
            <span>{`${option.label}${state.selected ? ' ✓' : ''}`}</span>
          )}
        />,
      );

      await user.click(combobox());
      expect(screen.getByRole('option', { name: 'Spain ✓' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Chile' })).toBeInTheDocument();
    });

    /**
     * The menu is portalled, so `className` cannot reach it. Without a handle
     * of its own a consumer styling the list writes a selector that never
     * matches.
     */
    it('should let the menu be classed from outside', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" menuClassName="my-menu" />);

      await user.click(combobox());
      expect(listbox().parentElement).toHaveClass('d-combobox-menu', 'my-menu');
    });
  });

  /**
   * The case a parent owns both halves: a dependent pair, or a list that
   * arrives from a server after the value it belongs to.
   */
  describe('Driven by a parent', () => {
    const CITIES: Array<DSelectOption> = [
      { value: 'scl', label: 'Santiago' },
      { value: 'vap', label: 'Valparaíso' },
    ];

    it('should follow a value the parent changes', () => {
      const { rerender } = render(<DSelect options={OPTIONS} label="Country" value="cl" />);
      expect(combobox()).toHaveValue('Chile');

      rerender(<DSelect options={OPTIONS} label="Country" value="es" />);
      expect(combobox()).toHaveValue('Spain');
    });

    /**
     * A value set before its options exist — which is every form that loads
     * its lists from a server — must not read as empty once they arrive.
     */
    it('should show the label for a value whose option arrives later', () => {
      const { rerender } = render(<DSelect options={[]} label="Country" value="cl" />);
      expect(combobox()).toHaveValue('');

      rerender(<DSelect options={OPTIONS} label="Country" value="cl" />);
      expect(combobox()).toHaveValue('Chile');
    });

    it('should empty itself when the parent swaps both the options and the value', () => {
      const { rerender } = render(<DSelect options={OPTIONS} label="Place" value="cl" />);
      expect(combobox()).toHaveValue('Chile');

      rerender(<DSelect options={CITIES} label="Place" value={null} />);
      expect(combobox()).toHaveValue('');
    });

    it('should land on the new value when the parent swaps both at once', () => {
      const { rerender } = render(<DSelect options={OPTIONS} label="Place" value="cl" />);

      rerender(<DSelect options={CITIES} label="Place" value="vap" />);
      expect(combobox()).toHaveValue('Valparaíso');
    });

    it('should offer the options the parent last passed', async () => {
      const user = userEvent.setup();
      const { rerender } = render(<DSelect options={OPTIONS} label="Place" value={null} />);

      rerender(<DSelect options={CITIES} label="Place" value={null} />);
      await user.click(combobox());

      expect(optionLabels()).toEqual(['Santiago', 'Valparaíso']);
    });

    it('should re-tag a multi select the parent changed', () => {
      const { rerender } = render(
        <DSelect options={OPTIONS} label="Countries" multi value={['es']} />,
      );
      expect(screen.getByRole('button', { name: 'Remove Spain' })).toBeInTheDocument();

      rerender(<DSelect options={OPTIONS} label="Countries" multi value={['cl', 'mx']} />);
      expect(screen.queryByRole('button', { name: 'Remove Spain' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Remove Chile' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Remove México' })).toBeInTheDocument();
    });
  });

  describe('Uncontrolled and controlled together', () => {
    it('should drive a controlled consumer', async () => {
      function Controlled() {
        const [value, setValue] = useState<string | null>(null);
        return (
          <>
            <DSelect
              options={OPTIONS}
              label="Country"
              value={value}
              onChange={(next) => setValue(next as string | null)}
            />
            <output>{value ?? 'none'}</output>
          </>
        );
      }

      const user = userEvent.setup();
      render(<Controlled />);

      expect(screen.getByRole('status')).toHaveTextContent('none');
      await user.click(combobox());
      await user.click(screen.getByRole('option', { name: 'Chile' }));
      expect(screen.getByRole('status')).toHaveTextContent('cl');
    });
  });
});

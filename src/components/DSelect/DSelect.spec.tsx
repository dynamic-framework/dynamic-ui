/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import { render, screen, within } from '@testing-library/react';
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

    it('should name itself when there is no visible label', () => {
      render(<DSelect options={OPTIONS} />);
      expect(screen.getByRole('combobox', { name: 'Select an option' })).toBeInTheDocument();
    });

    it('should tie a hint to the control for a screen reader', () => {
      render(<DSelect options={OPTIONS} label="Country" hint="Pick one" id="c" />);
      expect(combobox()).toHaveAttribute('aria-describedby', 'c-hint');
      expect(document.getElementById('c-hint')).toHaveTextContent('Pick one');
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

    /** The behaviour every tag input has, and only with an empty query. */
    it('should remove the last tag on Backspace', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect options={OPTIONS} label="Country" multi defaultValue={['es', 'cl']} onChange={onChange} />,
      );

      await user.click(combobox());
      await user.keyboard('{Backspace}');
      expect(onChange).toHaveBeenLastCalledWith(['es'], expect.anything());
    });

    it('should leave the query alone when Backspace has text to delete', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(
        <DSelect options={OPTIONS} label="Country" multi defaultValue={['es']} onChange={onChange} />,
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
        <DSelect options={OPTIONS} label="Country" clearable defaultValue="es" onChange={onChange} />,
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
      render(<DSelect options={OPTIONS} label="Country" disabled />);

      await user.click(combobox());
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should not open while loading', async () => {
      const user = userEvent.setup();
      render(<DSelect options={OPTIONS} label="Country" loading />);

      expect(screen.getByRole('status')).toBeInTheDocument();
      await user.click(combobox());
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
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
        <DSelect options={OPTIONS} label="Country" name="country" multi defaultValue={['es', 'cl']} />,
      );
      const hidden = [...container.querySelectorAll('input[type="hidden"]')];
      expect(hidden.map((input) => (input as HTMLInputElement).value)).toEqual(['es', 'cl']);
      expect(hidden[0]).toHaveAttribute('name', 'country[]');
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
      expect(option.querySelector('.df-icon')).toBeInTheDocument();
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

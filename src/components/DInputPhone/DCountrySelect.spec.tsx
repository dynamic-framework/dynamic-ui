/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ParsedCountry } from 'react-international-phone';
import DCountrySelect from './DCountrySelect';
import orderCountries, { preferredKeyOf } from './orderCountries';
import { DContextProvider } from '../../contexts';
import * as orderCountriesModule from './orderCountries';

/**
 * The country picker, which is ours now.
 *
 * The library's `CountrySelector` rendered `react-international-phone-*` class
 * names and shipped a stylesheet nothing here imports, so the control came out
 * with no styles at all — and it drew each flag as an `<img>` from a CDN, so
 * opening a list of 217 asked the network for 217 SVGs.
 *
 * The library's DATA is kept. Only the chrome is ours.
 */

const country = (iso2: string, name: string, dialCode: string): ParsedCountry => ({
  iso2, name, dialCode, format: undefined, priority: undefined, areaCodes: undefined,
} as ParsedCountry);

const LIST = [
  country('ar', 'Argentina', '54'),
  country('cl', 'Chile', '56'),
  country('co', 'Colombia', '57'),
  country('us', 'United States', '1'),
];

describe('orderCountries', () => {
  it('should leave the list alone when nothing is pinned', () => {
    expect(orderCountries(LIST)).toBe(LIST);
  });

  /*
   * In the order the caller wrote, not alphabetical.
   *
   * "Chile, Colombia, United States" is a decision — sorting the pinned group
   * would undo it, and the whole point is that a Chilean bank's readers find
   * Chile first.
   */
  it('should pin in the order given', () => {
    expect(orderCountries(LIST, ['us', 'cl']).map((c) => c.iso2))
      .toEqual(['us', 'cl', 'ar', 'co']);
  });

  it('should keep the rest in their original order', () => {
    expect(orderCountries(LIST, ['cl']).map((c) => c.iso2))
      .toEqual(['cl', 'ar', 'co', 'us']);
  });

  /* A consumer's pinned list can name a country `filteredCountries` excluded. */
  it('should skip a code that is not in the list', () => {
    expect(orderCountries(LIST, ['zz', 'cl']).map((c) => c.iso2))
      .toEqual(['cl', 'ar', 'co', 'us']);
  });

  it('should list each country once', () => {
    const result = orderCountries(LIST, ['cl', 'cl']);
    expect(result).toHaveLength(LIST.length);
    expect(result.filter((c) => c.iso2 === 'cl')).toHaveLength(1);
  });
});

describe('<DCountrySelect />', () => {
  const setup = (props = {}) => render(
    <DContextProvider>
      <DCountrySelect countries={LIST} selected="cl" onSelect={() => {}} {...props} />
    </DContextProvider>,
  );

  const openPanel = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole('button', { name: /^Country:/ }));
  };

  describe('the closed trigger', () => {
    /*
     * The trigger names the current country, because it is a button rather
     * than a control with a value: a reader reaching it with nothing else
     * announced has to hear which country the field is set to.
     */
    it('should name the current country', () => {
      setup();
      expect(screen.getByRole('button', { name: 'Country: Chile' })).toBeInTheDocument();
    });

    it('should take its words from the page language', () => {
      setup({ i18n: { label: 'País' } });
      expect(screen.getByRole('button', { name: 'País: Chile' })).toBeInTheDocument();
    });

    /* No request, and nothing to fail behind a firewall. */
    it('should draw the flag without an image', () => {
      const { container } = setup();
      expect(container.querySelectorAll('img')).toHaveLength(0);
      expect(container.querySelector('.df-phone-flag')).toHaveTextContent('🇨🇱');
    });

    it('should show the dial code of the selected country', () => {
      const { container } = setup();
      expect(container.querySelector('.df-phone-dial')).toHaveTextContent('+56');
    });

    /*
     * The flag and the dial code are decoration beside a button that already
     * names the country. Announced, a reader would hear it twice — and on
     * Windows, which ships no flag glyphs, two letters in boxes.
     */
    it('should hide the decoration from assistive technology', () => {
      const { container } = setup();
      expect(container.querySelector('.df-phone-flag')).toHaveAttribute('aria-hidden', 'true');
      expect(container.querySelector('.df-phone-dial')).toHaveAttribute('aria-hidden', 'true');
    });

    it('should say whether the panel is open', async () => {
      const user = userEvent.setup();
      setup();
      const trigger = screen.getByRole('button', { name: /^Country:/ });

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      await user.click(trigger);
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('should be disabled when asked', () => {
      setup({ disabled: true });
      expect(screen.getByRole('button', { name: /^Country:/ })).toBeDisabled();
    });

    /* Nothing is rendered until it is opened: 217 rows is not a mount cost. */
    it('should render no list before it is opened', () => {
      setup();
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(screen.queryAllByRole('option')).toHaveLength(0);
    });
  });

  describe('the open panel', () => {
    it('should show every country with its flag and dial code', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      expect(screen.getAllByRole('option')).toHaveLength(LIST.length);
      expect(screen.getByRole('option', { name: /Chile/ })).toHaveTextContent('+56');
    });

    /*
     * A search field, which is what a native `<select>` could not give and
     * what made replacing the library's dropdown a regression: 217 countries
     * is not a list anybody scrolls.
     */
    it('should move focus into the search field', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      expect(screen.getByRole('combobox', { name: 'Search a country' })).toHaveFocus();
    });

    it('should mark the current country as selected', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      expect(screen.getByRole('option', { name: /Chile/ })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByRole('option', { name: /Argentina/ })).toHaveAttribute('aria-selected', 'false');
    });

    it('should report a choice and close', async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      setup({ onSelect });
      await openPanel(user);

      await user.click(screen.getByRole('option', { name: /United States/ }));

      expect(onSelect).toHaveBeenCalledWith('us');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should put the pinned countries first', async () => {
      const user = userEvent.setup();
      setup({ preferredCountries: ['us', 'cl'] });
      await openPanel(user);

      const names = screen.getAllByRole('option').map((option) => option.textContent);
      expect(names[0]).toContain('United States');
      expect(names[1]).toContain('Chile');
    });
  });

  describe('searching', () => {
    const typeQuery = async (query: string) => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);
      await user.type(screen.getByRole('combobox'), query);
      return screen.queryAllByRole('option').map((option) => option.textContent ?? '');
    };

    it('should find a country by name', async () => {
      const names = await typeQuery('chil');
      expect(names).toHaveLength(1);
      expect(names[0]).toContain('Chile');
    });

    /* Somebody checking a number already written down has the code, not the name. */
    it('should find a country by dial code', async () => {
      const names = await typeQuery('57');
      expect(names).toHaveLength(1);
      expect(names[0]).toContain('Colombia');
    });

    it('should find a country by dial code written with a plus', async () => {
      const names = await typeQuery('+54');
      expect(names).toHaveLength(1);
      expect(names[0]).toContain('Argentina');
    });

    /* `cl` finds Chile, which substring matching on the name never would. */
    it('should find a country by ISO code', async () => {
      const names = await typeQuery('cl');
      expect(names).toHaveLength(1);
      expect(names[0]).toContain('Chile');
    });

    it('should say so when nothing matches', async () => {
      const names = await typeQuery('zzzz');
      expect(names).toHaveLength(0);
      expect(screen.getByText('No countries found')).toBeInTheDocument();
    });

    /*
     * Empty each time it opens. `useSelect` puts the chosen label in the query
     * when a single select closes — right when the input IS the control, wrong
     * here, where the search field is a separate thing inside the panel.
     */
    it('should open with an empty query', async () => {
      const user = userEvent.setup();
      setup();

      await openPanel(user);
      await user.type(screen.getByRole('combobox'), 'chil');
      await user.keyboard('{Escape}');
      await openPanel(user);

      expect(screen.getByRole('combobox')).toHaveValue('');
    });
  });

  describe('the keyboard', () => {
    it('should open on ArrowDown from the trigger', async () => {
      const user = userEvent.setup();
      setup();

      screen.getByRole('button', { name: /^Country:/ }).focus();
      await user.keyboard('{ArrowDown}');

      expect(screen.getByRole('listbox')).toBeInTheDocument();
    });

    /*
     * Focus stays in the search field and the cursor is a separate thing the
     * field points at — the ARIA 1.2 combobox pattern. It is what lets arrows
     * and typing work at the same time.
     */
    it('should move the cursor without moving focus', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      const search = screen.getByRole('combobox');
      await user.keyboard('{ArrowDown}');

      expect(search).toHaveFocus();
      expect(search).toHaveAttribute('aria-activedescendant');
    });

    it('should choose the highlighted country with Enter', async () => {
      const user = userEvent.setup();
      const onSelect = jest.fn();
      setup({ onSelect });
      await openPanel(user);

      await user.type(screen.getByRole('combobox'), 'united');
      await user.keyboard('{Enter}');

      expect(onSelect).toHaveBeenCalledWith('us');
    });

    /* Escape has to return focus, or it lands on a field that no longer exists. */
    it('should close on Escape and return focus to the trigger', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      await user.keyboard('{Escape}');

      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^Country:/ })).toHaveFocus();
    });
  });

  /*
   * A panel on `document.body` renders BEHIND an open `DModal`: `showModal()`
   * puts the dialog in the top layer, which paints above the whole document
   * whatever `z-index` says. A phone field inside a modal is the common case
   * for a bank, not the edge.
   */
  describe('inside a modal', () => {
    it('should portal into the open dialog rather than the body', async () => {
      const user = userEvent.setup();
      render(
        <DContextProvider>
          <dialog open data-testid="host">
            <DCountrySelect countries={LIST} selected="cl" onSelect={() => {}} />
          </dialog>
        </DContextProvider>,
      );

      await openPanel(user);

      const host = screen.getByTestId('host');
      expect(host).toContainElement(screen.getByRole('listbox'));
    });

    it('should portal to the body when there is no dialog', async () => {
      const user = userEvent.setup();
      setup();
      await openPanel(user);

      const list = screen.getByRole('listbox');
      expect(list.closest('dialog')).toBeNull();
      expect(document.body).toContainElement(list);
    });
  });
});

describe('preferredKeyOf', () => {
  /*
   * The regression this guards: depending on `preferredCountries` itself
   * rather than on its contents. It type-checks, it looks right, and it
   * memoises nothing — because the array is written inline at almost every
   * call site and so has a new identity on every render of the consumer.
   */
  it('should give two equal lists the same key despite different identities', () => {
    const written = ['cl', 'us'];
    const writtenAgain = ['cl', 'us'];

    expect(Object.is(written, writtenAgain)).toBe(false);
    expect(preferredKeyOf(written)).toBe(preferredKeyOf(writtenAgain));
  });

  it('should give differently ordered lists different keys', () => {
    expect(preferredKeyOf(['cl', 'us'])).not.toBe(preferredKeyOf(['us', 'cl']));
  });

  it('should treat an absent list as empty', () => {
    expect(preferredKeyOf()).toBe('');
    expect(preferredKeyOf([])).toBe('');
  });

  it('should round-trip back to the list it was built from', () => {
    const key = preferredKeyOf(['cl', 'us', 'ar']);
    expect(key.split('|')).toEqual(['cl', 'us', 'ar']);
  });
});

describe('the option list is built once', () => {
  /*
   * `orderCountries` lives in its own module so this call is observable: a
   * same-file call compiles to a local reference that no spy can see, and the
   * cost being guarded here is invisible in review.
   *
   * What it costs when it regresses: the list is 217 options long, the parent
   * re-renders on every keystroke, and each rebuild allocates a 217-entry
   * `Map` plus 217 React elements for a list that cannot have changed.
   */
  function Harness({ tick }: { tick: number }) {
    return (
      <>
        <span>{tick}</span>
        <DCountrySelect
          countries={LIST}
          selected="cl"
          onSelect={() => {}}
          /*
           * Written inline, as a consumer writes it — a new array identity on
           * every render. A dependency on the array itself would rebuild here
           * and memoise nothing, which is the regression.
           */
          preferredCountries={['cl', 'us']}
        />
      </>
    );
  }

  it('should not rebuild the list when the parent re-renders', () => {
    const spy = jest.spyOn(orderCountriesModule, 'default');
    const { rerender } = render(<Harness tick={0} />);

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear();

    rerender(<Harness tick={1} />);
    rerender(<Harness tick={2} />);

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

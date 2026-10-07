/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ParsedCountry } from 'react-international-phone';
import DCountrySelect from './DCountrySelect';
import orderCountries, { preferredKeyOf } from './orderCountries';
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
    <DCountrySelect countries={LIST} selected="cl" onSelect={() => {}} {...props} />,
  );

  it('should be a combobox with a name', () => {
    setup();
    expect(screen.getByRole('combobox', { name: 'Country' })).toBeInTheDocument();
  });

  it('should take its name from the page language', () => {
    setup({ label: 'País' });
    expect(screen.getByRole('combobox', { name: 'País' })).toBeInTheDocument();
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
   * The flag and the dial code are decoration beside a control that already
   * has a name and a value. Announced, a reader would hear the country twice
   * — and on Windows, which ships no flag glyphs, two letters in boxes.
   */
  it('should hide the decoration from assistive technology', () => {
    const { container } = setup();
    expect(container.querySelector('.df-phone-flag')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('.df-phone-dial')).toHaveAttribute('aria-hidden', 'true');
  });

  it('should name each option with its country and dial code', () => {
    setup();
    expect(screen.getByRole('option', { name: 'Chile +56' })).toBeInTheDocument();
  });

  it('should report a change', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    setup({ onSelect });

    await user.selectOptions(screen.getByRole('combobox'), 'us');
    expect(onSelect).toHaveBeenCalledWith('us');
  });

  it('should be disabled when asked', () => {
    setup({ disabled: true });
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('should put the pinned countries first', () => {
    setup({ preferredCountries: ['us', 'cl'] });
    const options = screen.getAllByRole('option').map((o) => o.textContent);
    expect(options.slice(0, 2)).toEqual(['United States +1', 'Chile +56']);
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

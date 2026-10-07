import { useCallback, useMemo } from 'react';

import type { ParsedCountry } from 'react-international-phone';

import countryFlag from './countryFlag';
import orderCountries, { preferredKeyOf } from './orderCountries';

type Props = {
  countries: ParsedCountry[];
  selected: string;
  onSelect: (iso2: string) => void;
  disabled?: boolean;
  /** Announced as the control's name. */
  label?: string;
  /**
   * ISO codes pinned to the top of the list, in the order given.
   *
   * A list of 217 countries alphabetised is wrong for almost every product:
   * a Chilean bank's readers pick Chile, and a handful of neighbours, almost
   * every time. This was `countrySelectorProps.preferredCountries`, which
   * reached the library's own picker; it is ours now.
   */
  preferredCountries?: string[];
};

/**
 * The country picker, as a native `<select>`.
 *
 * ## Why not the library's `CountrySelector`
 *
 * Two reasons, and neither is about the logic:
 *
 * - it renders `react-international-phone-*` class names and ships a
 *   stylesheet nothing in this build imports, so the control came out with no
 *   styles at all. That is what "the phone input does not respect the design"
 *   was;
 * - it draws each flag as an `<img>` from a CDN, so opening it asks the
 *   network for 217 SVGs.
 *
 * The library's DATA is the valuable part and is kept — the country list, the
 * dial codes, the format masks, and `usePhoneInput` for the typing. Only the
 * chrome is ours.
 *
 * ## Why a native `<select>` rather than `DSelect`
 *
 * A list of 217 options is where the platform control wins outright: it is
 * searchable by typing, it opens as the operating system's own picker on a
 * phone, and it costs nothing to render until it is opened. `DSelect` renders
 * its menu into a portal on `document.body`, which would also put it behind a
 * `DModal` — and a phone field inside a modal is the common case, not the
 * edge.
 */
export default function DCountrySelect({
  countries, selected, onSelect, disabled, label = 'Country', preferredCountries,
}: Props) {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  }, [onSelect]);

  /*
   * The 217 options, built once and reused.
   *
   * Every keystroke re-renders this component — `usePhoneInput` holds the
   * value — and without this it rebuilt a 217-entry `Map` and 217 React
   * elements each time, for a list that cannot have changed. Handing React the
   * same element references lets it skip the whole subtree instead of
   * reconciling it.
   *
   * Keyed on a joined string rather than on `preferredCountries` itself
   * because the array is almost always written inline at the call site
   * (`preferredCountries={['cl', 'us']}`), which is a new identity on every
   * render of the consumer's component — so an identity dep would memoise
   * nothing in exactly the normal case. The string is rebuilt into the array
   * inside, so nothing is read from the closure that the deps do not name.
   */
  const preferredKey = preferredKeyOf(preferredCountries);
  const options = useMemo(() => {
    const preferred = preferredKey ? preferredKey.split('|') : [];

    return orderCountries(countries, preferred).map((country) => (
      <option key={country.iso2} value={country.iso2}>
        {`${country.name} +${country.dialCode}`}
      </option>
    ));
  }, [countries, preferredKey]);

  const current = countries.find((country) => country.iso2 === selected);

  return (
    <div className="df-input-group-addon df-phone-country">
      {/*
        * The flag is decoration beside a control that already has a name.
        * Announcing "flag of Chile" before the select would make a reader hear
        * the country twice, and on Windows — which ships no flag glyphs — it
        * would announce two letters in boxes.
        */}
      <span className="df-phone-flag" aria-hidden="true">
        {countryFlag(selected)}
      </span>

      <select
        className="df-phone-select"
        aria-label={label}
        value={selected}
        onChange={handleChange}
        disabled={disabled}
      >
        {options}
      </select>

      {/*
        * The dial code, shown rather than read from the select.
        *
        * The select's own text is the country NAME, which is what a reader
        * needs when choosing; the dial code is what they need when checking
        * the number they typed. Both at once makes the control as wide as its
        * longest country name.
        */}
      <span className="df-phone-dial" aria-hidden="true">
        {current ? `+${current.dialCode}` : ''}
      </span>
    </div>
  );
}

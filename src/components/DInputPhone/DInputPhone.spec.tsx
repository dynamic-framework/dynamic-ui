/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputPhone from './DInputPhone';
import { DContextProvider } from '../../contexts';
import * as orderCountriesModule from './orderCountries';

type PhoneDataObject = {
  phone: string;
  country: {
    iso2: string;
  };
};

describe('<DInputPhone />', () => {
  describe('Rendering and Props', () => {
    /*
     * Structure, not a snapshot of someone else's DOM.
     *
     * This was an inline snapshot of `react-international-phone`'s markup —
     * every `react-international-phone-country-selector-button__flag-emoji`
     * of it. It pinned a third party's class names, so it broke the moment
     * the chrome became ours, and while it passed it was asserting nothing
     * about this library.
     */
    it('should render an input phone with default settings', () => {
      const { container } = render(
        <DContextProvider>
          <DInputPhone
            id="ComponentId1"
            defaultCountry="cl"
            filteredCountries={['cl', 'co', 'us']}
          />
        </DContextProvider>,
      );

      expect(container.querySelector('.df-phone')).toBeInTheDocument();
      expect(container.querySelector('.df-input-group')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toHaveClass('df-input');
      expect(screen.getByRole('combobox', { name: 'Country' })).toBeInTheDocument();
    });

    /* The names the 3.x stylesheet is written against, and no Bootstrap. */
    it('should render no Bootstrap class names', () => {
      const { container } = render(
        <DContextProvider>
          <DInputPhone id="bs" defaultCountry="cl" hint="h" loading />
        </DContextProvider>,
      );

      const markup = container.innerHTML;
      ['input-group-text', 'form-control', 'form-text', 'spinner-border', 'visually-hidden']
        .forEach((name) => expect(markup).not.toContain(`class="${name}`));
    });

    /*
     * No flag is fetched.
     *
     * The library draws each one as an `<img>` from a CDN — 217 requests when
     * the picker opens, which is the pause a reader feels on focus, and a
     * third-party GET from a bank's page besides.
     */
    it('should draw the flag without asking the network', () => {
      const { container } = render(
        <DContextProvider>
          <DInputPhone id="flag" defaultCountry="cl" />
        </DContextProvider>,
      );

      expect(container.querySelectorAll('img')).toHaveLength(0);
      expect(container.querySelector('.df-phone-flag')).toHaveTextContent('🇨🇱');
    });

    it('displays a controlled value', () => {
      render(
        <DContextProvider>
          <DInputPhone
            value="+15551234567"
            defaultCountry="cl"
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('+1 (555) 123-4567');

      const countrySelector = screen.getByRole('combobox');
      /* The picker is a native select; its value IS the country. */
      expect(countrySelector).toHaveValue('us');
    });

    it('renders with a label', () => {
      render(
        <DContextProvider>
          <DInputPhone
            label="Phone Number"
            defaultCountry="cl"
          />
        </DContextProvider>,
      );
      expect(screen.getByLabelText('Phone Number')).toBeInTheDocument();
    });

    it('renders with a floating label', () => {
      render(
        <DContextProvider>
          <DInputPhone label="Phone" floatingLabel />
        </DContextProvider>,
      );
      const input = screen.getByLabelText('Phone');
      expect(input.closest('.df-input-floating')).toBeInTheDocument();
    });

    it('renders with hint text', () => {
      render(
        <DContextProvider>
          <DInputPhone label="Phone" hint="Please enter a valid number." />
        </DContextProvider>,
      );
      expect(screen.getByText('Please enter a valid number.')).toBeInTheDocument();
    });

    it('renders with a placeholder when floatingLabel is false', () => {
      render(
        <DContextProvider>
          <DInputPhone placeholder="Enter phone..." />
        </DContextProvider>,
      );
      expect(screen.getByPlaceholderText('Enter phone...')).toBeInTheDocument();
    });

    it('renders an empty placeholder when floatingLabel is true', () => {
      render(
        <DContextProvider>
          <DInputPhone label="Phone" floatingLabel placeholder="This should be ignored" />
        </DContextProvider>,
      );
      const input = screen.getByLabelText('Phone');
      expect(input).toHaveAttribute('placeholder', '');
    });

    it('is disabled when disabled prop is true', () => {
      render(
        <DContextProvider>
          <DInputPhone
            disabled
            defaultCountry="cl"
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      const countrySelector = screen.getByRole('combobox', { name: 'Country' });

      expect(input).toBeDisabled();
      expect(countrySelector).toBeDisabled();
    });

    it('shows invalid state', () => {
      render(
        <DContextProvider>
          <DInputPhone
            invalid
            defaultCountry="cl"
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      /* `data-invalid` styles it and `aria-invalid` announces it. Bootstrap's
         `is-invalid` did only the first. */
      expect(input).toHaveAttribute('data-invalid');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });

    it('shows valid state', () => {
      render(
        <DContextProvider>
          <DInputPhone
            valid
            defaultCountry="cl"
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('data-valid');
    });

    it('renders with loading state', () => {
      render(
        <DContextProvider>
          <DInputPhone label="Phone" loading />
        </DContextProvider>,
      );
      expect(screen.getByRole('status', { hidden: true })).toBeInTheDocument();
      expect(screen.getByLabelText('Phone')).toBeDisabled();
    });

    it('renders with inputEnd content', () => {
      render(
        <DContextProvider>
          <DInputPhone label="Phone" inputEnd={<span>Verified</span>} />
        </DContextProvider>,
      );
      expect(screen.getByText('Verified')).toBeInTheDocument();
    });

    it('renders with a size class', () => {
      render(
        <DContextProvider>
          <DInputPhone size="lg" />
        </DContextProvider>,
      );
      const inputGroup = screen.getByRole('textbox').closest('.df-input-group');
      /* The size is an attribute in 3.x, like every other variant axis. */
      expect(inputGroup).toHaveAttribute('data-size', 'lg');
    });

    it('renders icon with default tabIndex of -1 when onIconEndClick is not provided', () => {
      render(
        <DContextProvider>
          <DInputPhone iconEnd="search" iconEndAriaLabel="Search Icon" />
        </DContextProvider>,
      );
      const iconButton = screen.getByRole('button', { name: /Search Icon/i });
      expect(iconButton).toHaveAttribute('tabIndex', '-1');
    });

    it('uses default countries when filteredCountries is undefined', () => {
      const { container } = render(
        <DContextProvider>
          <DInputPhone />
        </DContextProvider>,
      );
      expect(container.querySelector('.df-phone-country')).toBeInTheDocument();
    });

    /*
     * The picker is named, not configured with a third party's prop type.
     *
     * `countrySelectorProps` was an `Omit` of the library's own props — the
     * whole API of the picker was somebody else's, and the one thing a
     * consumer needed from it was a name in their language.
     */
    it('should let the country picker be named', () => {
      render(
        <DContextProvider>
          <DInputPhone countryAriaLabel="País" />
        </DContextProvider>,
      );

      expect(screen.getByRole('combobox', { name: 'País' })).toBeInTheDocument();
    });
  });

  describe('User Interaction and Events', () => {
    it('handles onChange event when typing', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn() as jest.Mock<void, [PhoneDataObject]>;
      render(
        <DContextProvider>
          <DInputPhone
            defaultCountry="cl"
            onChange={handleChange}
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      await user.type(input, '987654321');

      expect(handleChange).toHaveBeenLastCalledWith(
        expect.objectContaining({
          phone: '+56987654321',
          isValid: true,
        }),
      );
    });

    it('does not crash when typing if onChange prop is not provided', async () => {
      const user = userEvent.setup();
      render(
        <DContextProvider>
          <DInputPhone defaultCountry="cl" />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');
      await user.type(input, '912345678');

      expect(input).toHaveValue('+56 912345678');
    });

    it('changes country and updates value', async () => {
      const handleChange = jest.fn() as jest.Mock<void, [PhoneDataObject]>;
      render(
        <DContextProvider>
          <DInputPhone
            defaultCountry="cl"
            filteredCountries={['cl', 'us']}
            onChange={handleChange}
          />
        </DContextProvider>,
      );

      /*
       * Selected, not clicked through a menu.
       *
       * The picker is a native `<select>` now — opening a list and clicking a
       * row was the library's custom dropdown, which is also what made the
       * flags 217 network requests.
       */
      const countrySelector = screen.getByRole('combobox', { name: 'Country' });
      await userEvent.selectOptions(countrySelector, 'us');

      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('+1 ');

      const lastCallArgs = handleChange.mock.calls[handleChange.mock.calls.length - 1][0];
      expect(lastCallArgs.country.iso2).toBe('us');
      expect(lastCallArgs.phone).toBe('+1');
    });

    it('calls onFocus and onBlur events', () => {
      const handleFocus = jest.fn();
      const handleBlur = jest.fn();

      render(
        <DContextProvider>
          <DInputPhone
            onFocus={handleFocus}
            onBlur={handleBlur}
            value="+15551234567"
          />
        </DContextProvider>,
      );

      const input = screen.getByRole('textbox');

      fireEvent.focus(input);
      expect(handleFocus).toHaveBeenCalled();

      fireEvent.blur(input);
      expect(handleBlur).toHaveBeenCalled();
    });

    it('calls onIconEndClick when the end icon is clicked', async () => {
      const user = userEvent.setup();
      const handleIconClick = jest.fn();
      render(
        <DContextProvider>
          <DInputPhone
            value="+56987654321"
            iconEnd="search"
            iconEndAriaLabel="Search Icon"
            onIconEndClick={handleIconClick}
          />
        </DContextProvider>,
      );

      const iconButton = screen.getByRole('button', { name: /Search Icon/i });
      await user.click(iconButton);

      expect(handleIconClick).toHaveBeenCalledTimes(1);
      expect(handleIconClick).toHaveBeenCalledWith('+56987654321');
    });

    it('does not call onIconEndClick if not provided', async () => {
      const user = userEvent.setup();
      render(
        <DContextProvider>
          <DInputPhone iconEnd="search" iconEndAriaLabel="Search Icon" />
        </DContextProvider>,
      );
      const iconButton = screen.getByRole('button', { name: /Search Icon/i });
      await expect(user.click(iconButton)).resolves.not.toThrow();
    });
  });
});

describe('typing does not rebuild the country list', () => {
  /*
   * The other half of the memoisation, and the half a test on
   * `DCountrySelect` alone cannot see: this component re-renders on every
   * keystroke, because `usePhoneInput` holds the value. If the parsed country
   * list is rebuilt per render, the picker receives a new array identity and
   * rebuilds its 217 options however well it memoises them.
   */
  it('should order the countries once, however much is typed', async () => {
    const spy = jest.spyOn(orderCountriesModule, 'default');
    const user = userEvent.setup();

    render(<DInputPhone label="Phone" preferredCountries={['cl', 'us']} />);
    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockClear();

    await user.type(screen.getByLabelText('Phone'), '912345678');

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
});

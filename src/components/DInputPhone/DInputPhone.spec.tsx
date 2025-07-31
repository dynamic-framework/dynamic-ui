/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DInputPhone from '.';
import { DContextProvider } from '../../contexts';

type PhoneDataObject = {
  phone: string;
  country: {
    iso2: string;
  };
};

describe('<DInputPhone />', () => {
  it('should render an input phone', () => {
    const { container } = render(
      <DContextProvider>
        <DInputPhone
          id="ComponentId1"
          defaultCountry="cl"
          filteredCountries={['cl', 'co', 'us']}
        />
      </DContextProvider>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-input-phone"
        >
          <div
            class="input-group"
          >
            <div
              class="react-international-phone-country-selector input-group-text"
            >
              <button
                aria-expanded="false"
                aria-haspopup="listbox"
                aria-label="Country selector"
                class="react-international-phone-country-selector-button"
                data-country="cl"
                role="combobox"
                title="Chile"
                type="button"
              >
                <div
                  class="react-international-phone-country-selector-button__button-content"
                >
                  <img
                    alt=""
                    class="react-international-phone-flag-emoji react-international-phone-country-selector-button__flag-emoji"
                    data-country="cl"
                    draggable="false"
                    loading="lazy"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f1.svg"
                    style="visibility: visible;"
                  />
                  <div
                    class="react-international-phone-country-selector-button__dropdown-arrow"
                  />
                </div>
              </button>
              <ul
                aria-activedescendant="react-international-phone__cl-option"
                class="react-international-phone-country-selector-dropdown"
                role="listbox"
                style="display: none;"
                tabindex="-1"
              >
                <li
                  aria-label="Chile +56"
                  aria-selected="true"
                  class="react-international-phone-country-selector-dropdown__list-item react-international-phone-country-selector-dropdown__list-item--selected react-international-phone-country-selector-dropdown__list-item--focused"
                  data-country="cl"
                  id="react-international-phone__cl-option"
                  role="option"
                  title="Chile"
                >
                  <img
                    alt=""
                    class="react-international-phone-flag-emoji react-international-phone-country-selector-dropdown__list-item-flag-emoji"
                    data-country="cl"
                    draggable="false"
                    loading="lazy"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f1.svg"
                  />
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-country-name"
                  >
                    Chile
                  </span>
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-dial-code"
                  >
                    +
                    56
                  </span>
                </li>
                <li
                  aria-label="Colombia +57"
                  aria-selected="false"
                  class="react-international-phone-country-selector-dropdown__list-item"
                  data-country="co"
                  id="react-international-phone__co-option"
                  role="option"
                  title="Colombia"
                >
                  <img
                    alt=""
                    class="react-international-phone-flag-emoji react-international-phone-country-selector-dropdown__list-item-flag-emoji"
                    data-country="co"
                    draggable="false"
                    loading="lazy"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1e8-1f1f4.svg"
                  />
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-country-name"
                  >
                    Colombia
                  </span>
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-dial-code"
                  >
                    +
                    57
                  </span>
                </li>
                <li
                  aria-label="United States +1"
                  aria-selected="false"
                  class="react-international-phone-country-selector-dropdown__list-item"
                  data-country="us"
                  id="react-international-phone__us-option"
                  role="option"
                  title="United States"
                >
                  <img
                    alt=""
                    class="react-international-phone-flag-emoji react-international-phone-country-selector-dropdown__list-item-flag-emoji"
                    data-country="us"
                    draggable="false"
                    loading="lazy"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/1f1fa-1f1f8.svg"
                  />
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-country-name"
                  >
                    United States
                  </span>
                  <span
                    class="react-international-phone-country-selector-dropdown__list-item-dial-code"
                  >
                    +
                    1
                  </span>
                </li>
              </ul>
            </div>
            <input
              class="form-control"
              id="ComponentId1"
              inputmode="tel"
              value="+56 "
            />
          </div>
        </div>
      </div>
    `);
  });

  it('handles onChange event when typing', () => {
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
    fireEvent.change(input, { target: { value: '+56 9 8765 4321' } });

    expect(handleChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        phone: '+56987654321',
        isValid: true,
      }),
    );
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

    const countrySelector = screen.getByRole('combobox', { name: /Country selector/i });
    fireEvent.click(countrySelector);

    const usaOption = await screen.findByRole('option', { name: /United States \+1/i });
    fireEvent.click(usaOption);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('+1 ');

    const lastCallArgs = handleChange.mock.calls[handleChange.mock.calls.length - 1][0];
    expect(lastCallArgs.country.iso2).toBe('us');
    expect(lastCallArgs.phone).toBe('+1');
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
    const countrySelector = screen.getByRole('combobox', { name: /Country selector/i });

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
    expect(input).toHaveClass('is-invalid');
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
    expect(input).toHaveClass('is-valid');
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
    expect(countrySelector).toHaveAttribute('data-country', 'us');
  });

  it('calls onFocus and onBlur and formats value', () => {
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

    expect(input).toHaveValue('+1 (555) 123-4567');
  });
});

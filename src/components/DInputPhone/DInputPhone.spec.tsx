import { render } from '@testing-library/react';
import DInputPhone from '.';

it('should render an input phone', () => {
  const { container } = render(
    <DInputPhone
      id="ComponentId1"
      defaultCountry="cl"
      filteredCountries={['cl', 'co', 'us']}
    />,
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

import { render } from '@testing-library/react';

import DSelect from './DSelect';

it('should render my component', () => {
  const input = {
    id: 'componentId1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    style: {
      minWidth: '200px',
    },
  };

  const { container } = render(
    <DSelect {...input} />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div
      class="d-select"
      style="min-width: 200px;"
    >
      <div
        class="input-group"
      >
        <div
          class="d-select-component css-khl8b7-container"
          id="componentId1Container"
        >
          <span
            class="css-1f43avz-a11yText-A11yText"
            id="react-select-2-live-region"
          />
          <span
            aria-atomic="false"
            aria-live="polite"
            aria-relevant="additions text"
            class="css-1f43avz-a11yText-A11yText"
            role="log"
          />
          <div
            class="d-select__control css-1ulfhu6-control"
          >
            <div
              class="d-select__value-container css-14oxtc6"
            >
              <div
                class="d-select__placeholder css-1vlsb4t-placeholder"
                id="componentId1Placeholder"
              >
                Select...
              </div>
              <div
                class="d-select__input-container css-n9qnu9"
                data-value=""
              >
                <input
                  aria-activedescendant=""
                  aria-autocomplete="list"
                  aria-describedby="react-select-2-placeholder"
                  aria-expanded="false"
                  aria-haspopup="true"
                  autocapitalize="none"
                  autocomplete="off"
                  autocorrect="off"
                  class="d-select__input"
                  id="componentId1"
                  role="combobox"
                  spellcheck="false"
                  style="opacity: 1; width: 100%; grid-area: 1 / 2; min-width: 2px; border: 0px; margin: 0px; outline: 0; padding: 0px;"
                  tabindex="0"
                  type="text"
                  value=""
                />
              </div>
            </div>
            <div
              class="d-select__indicators css-1wy0on6"
            >
              <span
                class="d-select__indicator-separator css-j4w2j1-indicatorSeparator"
              />
              <div
                aria-hidden="true"
                class="d-select__indicator d-select__dropdown-indicator css-g56vrd-indicatorContainer"
              >
                <i
                  class="d-icon bi bi-chevron-down"
                  style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
});

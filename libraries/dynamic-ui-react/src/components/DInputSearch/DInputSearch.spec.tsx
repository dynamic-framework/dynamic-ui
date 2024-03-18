import { render } from '@testing-library/react';
import DInputSearch from './DInputSearch';

it('should render my component', () => {
  const search = {
    id: 'searchId',
    label: 'Label',
    value: 'Value',
    placeholder: 'Search',
  };

  const { container } = render(
    <DInputSearch
      {...search}
    />,
  );

  expect(container).toMatchInlineSnapshot(`
  <div>
    <div>
      <label
        for="searchId"
      >
        Label
      </label>
      <div
        class="input-group"
      >
        <input
          aria-describedby="searchIdEnd"
          class="form-control"
          id="searchId"
          placeholder="Search"
          type="text"
          value="Value"
        />
        <button
          aria-label="search"
          class="input-group-text"
          id="searchIdEnd"
          type="button"
        >
          <i
            class="d-icon bi bi-search"
            style="--bs-icon-component-size: 1.5rem; --bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
          />
        </button>
      </div>
    </div>
  </div>
  `);
});

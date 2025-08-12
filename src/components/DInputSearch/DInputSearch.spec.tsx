/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputSearch from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSearch />', () => {
  describe('Rendering and Props', () => {
    it('should render the component with all props', () => {
      const search = {
        id: 'searchId',
        label: 'Label',
        value: 'Value',
        placeholder: 'Search',
      };

      const { container } = render(
        <DContextProvider>
          <DInputSearch {...search} />
        </DContextProvider>,
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
                tabindex="-1"
                type="button"
              >
                <i
                  class="d-icon bi bi-search"
                  style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
                />
              </button>
            </div>
          </div>
        </div>
      `);
    });

    it('should be disabled when the disabled prop is true', () => {
      render(
        <DContextProvider>
          <DInputSearch label="Search" disabled />
        </DContextProvider>,
      );

      const input = screen.getByLabelText('Search');
      const searchButton = screen.getByRole('button', { name: /search/i });

      expect(input).toBeDisabled();
      expect(searchButton).toBeDisabled();
    });

    it('should show the invalid state when the invalid prop is true', () => {
      render(
        <DContextProvider>
          <DInputSearch label="Search" invalid />
        </DContextProvider>,
      );

      const input = screen.getByLabelText('Search');
      expect(input).toHaveClass('is-invalid');
    });
  });

  describe('User Interaction and Events', () => {
    it('should call onChange when a user types', async () => {
      const user = userEvent.setup();
      const handleChange = jest.fn();
      render(
        <DContextProvider>
          <DInputSearch label="Search" onChange={handleChange} />
        </DContextProvider>,
      );

      const input = screen.getByLabelText('Search');
      await user.type(input, 'hello world');

      expect(handleChange).toHaveBeenCalled();
      expect(input).toHaveValue('hello world');
    });

    it('should call onIconEndClick with the input value when the search icon is clicked', async () => {
      const user = userEvent.setup();
      const handleIconClick = jest.fn();
      render(
        <DContextProvider>
          <DInputSearch
            label="Search"
            value="query"
            onIconEndClick={handleIconClick}
          />
        </DContextProvider>,
      );

      const searchButton = screen.getByRole('button', { name: /search/i });
      await user.click(searchButton);

      expect(handleIconClick).toHaveBeenCalledWith('query');
    });
  });
});

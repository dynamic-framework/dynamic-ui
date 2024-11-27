import { render } from '@testing-library/react';

import DTableHead from './DTableHead';

describe('DTableHead', () => {
  test('should render', () => {
    const props = {
      field: 'field',
      label: 'label',
      onChange: jest.fn(),
    };

    const { container } = render(
      <table>
        <thead>
          <tr>
            <DTableHead {...props} />
          </tr>
        </thead>
      </table>,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <table>
          <thead>
            <tr>
              <th
                class="d-table-head"
              >
                <button
                  type="button"
                >
                  label
                </button>
              </th>
            </tr>
          </thead>
        </table>
      </div>
    `);
  });
});

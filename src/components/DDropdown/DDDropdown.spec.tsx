/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DDropdown from '.';

describe('<DDropdown />', () => {
  it('should render a DDropdown', () => {
    const props: ComponentProps<typeof DDropdown> = {
      className: 'custom-card',
      children: <>Card body</>,
    };

    const { container } = render(
      <DDropdown {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="d-credit-card custom-card"
        >
          Card body
        </div>
      </div>
    `);
  });
});

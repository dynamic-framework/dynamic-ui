/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import DDropdown from '.';

describe('<DDropdown />', () => {
  it('should render a DDropdown', () => {
    const props: ComponentProps<typeof DDropdown> = {
      className: 'custom-dropdown',
      actions: [
        { label: 'Action 1', onClick: () => {} },
        { label: 'Action 2', onClick: () => {} },
        { label: 'Action 3', isDivider: true },
      ],
    };

    const { container } = render(
      <DDropdown {...props} />,
    );

    const dropdown = container.querySelector('.dropdown');
    const toggle = container.querySelector('button');

    expect(dropdown).toBeInTheDocument();
    expect(dropdown).toHaveClass('custom-dropdown');
    expect(toggle).toBeInTheDocument();
  });
});

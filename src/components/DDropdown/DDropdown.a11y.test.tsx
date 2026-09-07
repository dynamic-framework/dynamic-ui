/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import { ComponentProps } from 'react';
import axe from '../../../tests/a11y/axeHelper';
import DDropdown from '.';

describe('<DDropdown /> a11y', () => {
  const baseActions: ComponentProps<typeof DDropdown>['actions'] = [
    { label: 'Action 1', onClick: () => {} },
    { label: 'Action 2', onClick: () => {} },
    { label: 'Action 3', isDivider: true },
    { label: 'Action 4', onClick: () => {}, icon: 'Heart' },
  ];

  it('should have no violations with default (closed) dropdown', async () => {
    const { container } = render(
      <DDropdown actions={baseActions} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a disabled action', async () => {
    const { container } = render(
      <DDropdown
        actions={[
          ...baseActions,
          { label: 'Disabled Action', disabled: true },
        ]}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a custom dropdown toggle', async () => {
    const { container } = render(
      <DDropdown
        actions={baseActions}
        dropdownToggle={({ toggle }) => (
          <button type="button" onClick={toggle}>
            Custom Toggle
          </button>
        )}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when rendered as a portal', async () => {
    const { container } = render(
      <DDropdown actions={baseActions} asPortal />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

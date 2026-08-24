/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DChip from './DChip';

describe('<DChip /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(
      <DChip text="Chip content" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a leading icon', async () => {
    const { container } = render(
      <DChip
        color="secondary"
        text="Chip with icon"
        icon="check"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a close button', async () => {
    const { container } = render(
      <DChip
        color="danger"
        text="Removable chip"
        showClose
        closeAriaLabel="Remove chip"
        onClose={() => {}}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

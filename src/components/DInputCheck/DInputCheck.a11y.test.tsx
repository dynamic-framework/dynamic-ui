/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputCheck from './DInputCheck';

describe('<DInputCheck /> a11y', () => {
  it('should have no violations with a checkbox and label', async () => {
    const { container } = render(
      <DInputCheck
        id="checkboxId"
        type="checkbox"
        label="Accept terms"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when checked', async () => {
    const { container } = render(
      <DInputCheck
        id="checkedCheckbox"
        type="checkbox"
        label="Subscribe"
        checked
        onChange={() => {}}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled and invalid', async () => {
    const { container } = render(
      <DInputCheck
        id="disabledCheckbox"
        type="checkbox"
        label="Disabled option"
        disabled
        invalid
        hint="This field is required"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a radio input and aria-label instead of visible label', async () => {
    const { container } = render(
      <DInputCheck
        id="radioId"
        type="radio"
        name="radioGroup"
        ariaLabel="Select option"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInput from './DInput';

describe('<DInput /> a11y', () => {
  it('should have no violations with a label and value', async () => {
    const { container } = render(
      <DInput
        id="inputId"
        label="Label"
        value="Value"
        placeholder="Input"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled', async () => {
    const { container } = render(
      <DInput
        id="disabledInput"
        label="Disabled input"
        disabled
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when invalid with a hint', async () => {
    const { container } = render(
      <DInput
        id="invalidInput"
        label="Invalid input"
        invalid
        hint="This field is required"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with start/end icons and loading state', async () => {
    const { container } = render(
      <DInput
        id="iconInput"
        label="Icon input"
        iconStart="Search"
        iconEnd="X"
        onIconStartClick={() => {}}
        onIconEndClick={() => {}}
        iconStartAriaLabel="Search"
        iconEndAriaLabel="Clear"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with floating label and loading state', async () => {
    const { container } = render(
      <DInput
        id="floatingInput"
        label="Floating label"
        floatingLabel
        loading
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

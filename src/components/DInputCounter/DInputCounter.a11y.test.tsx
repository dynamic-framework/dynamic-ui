/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputCounter from './DInputCounter';

describe('<DInputCounter /> a11y', () => {
  it('should have no violations at minimum value (decrease disabled)', async () => {
    const { container } = render(
      <DInputCounter
        id="counter"
        label="Quantity"
        minValue={0}
        maxValue={10}
        value={0}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations at maximum value (increase disabled)', async () => {
    const { container } = render(
      <DInputCounter
        id="maxCounter"
        label="Quantity"
        minValue={0}
        maxValue={10}
        value={10}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a label and invalid state (out of range)', async () => {
    const { container } = render(
      <DInputCounter
        id="invalidCounter"
        label="Quantity"
        minValue={0}
        maxValue={10}
        value={20}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled', async () => {
    const { container } = render(
      <DInputCounter
        id="disabledCounter"
        label="Quantity"
        minValue={0}
        maxValue={10}
        value={5}
        disabled
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

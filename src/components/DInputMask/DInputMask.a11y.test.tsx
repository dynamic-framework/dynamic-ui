import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputMask from '.';

const phoneMask = '+7 (___) ___-__-__';

describe('<DInputMask /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DInputMask
        id="inputId"
        label="Phone"
        mask={phoneMask}
        replacement={{ _: /\d/ }}
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when showing the mask', async () => {
    const { container } = render(
      <DInputMask
        id="inputId"
        label="Phone"
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        showMask
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DInputMask
        id="inputId"
        label="Phone"
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        disabled
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid', async () => {
    const { container } = render(
      <DInputMask
        id="inputId"
        label="Phone"
        mask={phoneMask}
        replacement={{ _: /\d/ }}
        invalid
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

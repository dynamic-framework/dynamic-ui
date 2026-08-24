import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputSwitch from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSwitch /> a11y', () => {
  it('should have no violations with a label', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSwitch label="My Switch" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when checked and disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSwitch label="My Switch" checked disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in the invalid state', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSwitch label="My Switch" invalid />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when using ariaLabel instead of a visible label', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSwitch ariaLabel="My Switch" valid />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

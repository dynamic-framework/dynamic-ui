import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputPin from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputPin /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPin id="myPin" label="Pin" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with number type', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPin id="myPin" label="Pin" type="number" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPin id="myPin" label="Pin" invalid />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPin id="myPin" label="Pin" disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

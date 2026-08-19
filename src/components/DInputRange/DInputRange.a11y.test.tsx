import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputRange from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputRange /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputRange id="range" label="Range" value={4} onChange={jest.fn()} />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputRange label="Disabled Range" disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations without the fill indicator', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputRange label="No Fill Range" filledValue={false} onChange={jest.fn()} />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations using aria-label instead of a visible label', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputRange ariaLabel="Volume" onChange={jest.fn()} />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

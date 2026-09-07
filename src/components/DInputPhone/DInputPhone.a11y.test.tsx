import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputPhone from './DInputPhone';
import { DContextProvider } from '../../contexts';

describe('<DInputPhone /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPhone label="Phone Number" defaultCountry="cl" />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPhone label="Phone Number" defaultCountry="cl" disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid with a hint', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPhone
          label="Phone Number"
          defaultCountry="cl"
          invalid
          hint="Please enter a valid number."
        />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with an end icon', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputPhone
          label="Phone Number"
          defaultCountry="cl"
          iconEnd="search"
          iconEndAriaLabel="Search Icon"
        />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

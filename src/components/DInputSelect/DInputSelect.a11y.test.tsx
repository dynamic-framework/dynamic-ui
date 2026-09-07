import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputSelect from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSelect /> a11y', () => {
  const defaultOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  it('should have no violations with default options', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when disabled', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} disabled />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in the invalid state with a hint', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSelect
          label="My Select"
          options={defaultOptions}
          invalid
          hint="This is a hint"
        />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a floating label and icons', async () => {
    const { container } = render(
      <DContextProvider>
        <DInputSelect
          label="My Select"
          options={defaultOptions}
          floatingLabel
          iconStart="check"
          iconStartAriaLabel="start-icon"
          iconEnd="box"
          iconEndAriaLabel="end-icon"
        />
      </DContextProvider>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

import { render, screen } from '@testing-library/react';

import DSelect from './DSelect';

it('should render my component', () => {
  const input = {
    id: 'componentId1',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    style: {
      minWidth: '200px',
    },
  };

  const { container } = render(
    <DSelect {...input} />,
  );

  const selectContainer = container.querySelector('.d-select');
  const selectComponent = container.querySelector('.d-select-component');
  const inputElement = container.querySelector('#componentId1');

  expect(selectContainer).toBeInTheDocument();
  expect(selectComponent).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');
});

// `aria-label` always reaches the inner input, where it outranks the associated
// `<label>`, so in this component the visible label never names the control.
// These pin that down: the JSDoc and the story documentation describe it, and a
// change here should be a deliberate one.
describe('<DSelect /> accessible name', () => {
  it('should name the control with ariaLabel rather than with a text label', () => {
    render(
      <DSelect
        inputId="countrySelect"
        label="Country"
        options={[{ label: 'Chile', value: 'cl' }]}
      />,
    );

    const input = screen.getByRole('combobox');
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(input).toHaveAccessibleName('Search for an option');
  });

  it('should announce the generic default until ariaLabel is set', () => {
    const { rerender } = render(
      <DSelect
        inputId="countrySelect"
        label="Country"
        options={[{ label: 'Chile', value: 'cl' }]}
      />,
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleName('Search for an option');

    rerender(
      <DSelect
        inputId="countrySelect"
        label="Country"
        ariaLabel="Country"
        options={[{ label: 'Chile', value: 'cl' }]}
      />,
    );
    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country');
  });
});

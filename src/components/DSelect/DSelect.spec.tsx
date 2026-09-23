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

describe('<DSelect /> accessible name', () => {
  const options = [{ label: 'Chile', value: 'cl' }];

  it('should name the control with a text label', () => {
    render(<DSelect label="Country" options={options} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveAccessibleName('Country');
    expect(input).not.toHaveAttribute('aria-label');
  });

  it('should associate the label with an explicit inputId', () => {
    render(<DSelect inputId="countrySelect" label="Country" options={options} />);

    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('id', 'countrySelect');
    expect(input).toHaveAccessibleName('Country');
  });

  it('should let ariaLabel replace the name given by the label', () => {
    render(<DSelect label="Country" ariaLabel="Country of residence" options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country of residence');
  });

  it('should fall back to the generic name only without a label', () => {
    render(<DSelect options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Search for an option');
  });

  it('should warn in development when a node label has no accessible name', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(<DSelect label={<span>Country</span>} options={options} />);

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('DSelect'));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('ariaLabel'));
    warn.mockRestore();
  });

  it('should name the control with ariaLabel when the label is a node', () => {
    render(<DSelect label={<span>Country</span>} ariaLabel="Country" options={options} />);

    expect(screen.getByRole('combobox')).toHaveAccessibleName('Country');
  });
});

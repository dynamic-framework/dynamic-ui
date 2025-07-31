/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DInputSelect from '.';
import { DContextProvider } from '../../contexts';

describe('<DInputSelect />', () => {
  const defaultOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  it('should render my component with options', () => {
    const { container } = render(
      <DContextProvider>
        <DInputSelect id="Random-id" options={defaultOptions} />
      </DContextProvider>,
    );

    expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <div
          class="input-group"
        >
          <select
            aria-label=""
            class="form-select"
            id="Random-id"
          >
            <option
              value="1"
            >
              Option 1
            </option>
            <option
              value="2"
            >
              Option 2
            </option>
          </select>
        </div>
      </div>
    </div>
  `);
  });

  it('calls onChange with the full selected option object', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} onChange={handleChange} />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('My Select');
    await user.selectOptions(select, '2');

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({ label: 'Option 2', value: '2' });
  });

  it('renders with a floating label', () => {
    render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} floatingLabel />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('My Select');
    expect(select.closest('.form-floating')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} disabled />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('My Select');
    expect(select).toBeDisabled();
  });

  it('shows invalid state', () => {
    render(
      <DContextProvider>
        <DInputSelect label="My Select" options={defaultOptions} invalid />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('My Select');
    expect(select).toHaveClass('is-invalid');
  });

  it('works with custom data structure using extractors', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    const customOptions = [
      { id: 101, name: 'Product A' },
      { id: 102, name: 'Product B' },
    ];

    render(
      <DContextProvider>
        <DInputSelect
          label="Custom Select"
          options={customOptions}
          onChange={handleChange}
          valueExtractor={(item) => item.id}
          labelExtractor={(item) => item.name}
        />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('Custom Select');
    expect(screen.getByText('Product A')).toBeInTheDocument();

    await user.selectOptions(select, '102');
    expect(handleChange).toHaveBeenCalledWith({ id: 102, name: 'Product B' });
  });

  it('calls onIconEndClick when the end icon is clicked', async () => {
    const user = userEvent.setup();
    const handleIconClick = jest.fn();
    render(
      <DContextProvider>
        <DInputSelect
          label="Select with Icon"
          options={defaultOptions}
          iconEnd="box"
          iconEndAriaLabel="box-icon"
          onIconEndClick={handleIconClick}
        />
      </DContextProvider>,
    );

    const iconButton = screen.getByRole('button', { name: /box-icon/i });
    await user.click(iconButton);

    expect(handleIconClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled and shows a spinner when loading', () => {
    render(
      <DContextProvider>
        <DInputSelect label="Loading Select" options={[]} loading />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('Loading Select');
    expect(select).toBeDisabled();

    const spinner = screen.getByRole('status', { hidden: true });
    expect(spinner).toBeInTheDocument();
  });

  it.each(['sm', 'lg'])('renders with the correct size class for size "%s"', (size) => {
    render(
      <DContextProvider>
        <DInputSelect
          label="Sized Select"
          size={size as 'sm' | 'lg'}
          options={[]}
          onChange={() => { }}
        />
      </DContextProvider>,
    );

    const select = screen.getByLabelText('Sized Select');
    expect(select).toHaveClass(`form-select-${size}`);
  });
});

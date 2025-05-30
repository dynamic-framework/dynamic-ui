/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import DInput from './DInput';

describe('', () => {
  it('should render my component', () => {
    const input = {
      id: 'inputId',
      label: 'Label',
      value: 'Value',
      placeholder: 'Input',
    };

    const { container } = render(
      <DInput {...input} />,
    );

    expect(container).toMatchInlineSnapshot(`
    <div>
      <div>
        <label
          for="inputId"
        >
          Label
        </label>
        <div
          class="input-group"
        >
          <input
            class="form-control"
            id="inputId"
            placeholder="Input"
            value="Value"
          />
        </div>
      </div>
    </div>
    `);
  });

  it('renders the input with label', () => {
    render(
      <DInput
        label="Input label"
      />,
    );

    expect(screen.getByLabelText('Input label')).toBeInTheDocument();
  });

  it('renders the input with floating label', () => {
    render(
      <DInput
        label="Input label"
        floatingLabel
      />,
    );

    expect(screen.getByText('Input label')).toBeInTheDocument();
    expect(screen.getByLabelText('Input label').closest('.form-floating')).toBeInTheDocument();
  });

  it('renders hint text', () => {
    render(
      <DInput
        label="Input label"
        hint="Hint text"
      />,
    );

    expect(screen.getByText('Hint text')).toBeInTheDocument();
  });

  it('shows invalid state', () => {
    render(
      <DInput
        label="Input label"
        invalid
      />,
    );

    const input = screen.getByLabelText('Input label');
    expect(input).toHaveClass('is-invalid');
  });

  it('shows valid state', () => {
    render(
      <DInput
        label="Input label"
        valid
      />,
    );

    const input = screen.getByLabelText('Input label');
    expect(input).toHaveClass('is-valid');
  });

  it('calls onChange with input value', () => {
    const handleChange = jest.fn();

    render(
      <DInput
        label="Input label"
        onChange={handleChange}
      />,
    );

    fireEvent.change(screen.getByLabelText('Input label'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  it('renders loading spinner when loading', () => {
    render(
      <DInput
        label="Input label"
        loading
      />,
    );

    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toHaveAttribute('role', 'status');
    expect(spinner).toHaveTextContent('Loading...');
  });

  it('calls onIconStartClick when iconStart is clicked', () => {
    const handleIconClick = jest.fn();

    render(
      <DInput
        label="Input label"
        iconStart="search"
        onIconStartClick={handleIconClick}
        value="query"
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: '' }));
    expect(handleIconClick).toHaveBeenCalledWith('query');
  });

  it('calls onIconEndClick when iconEnd is clicked', () => {
    const handleIconClick = jest.fn();

    render(
      <DInput
        label="Input label"
        iconEnd="clear"
        onIconEndClick={handleIconClick}
        value="query"
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: '' }));
    expect(handleIconClick).toHaveBeenCalledWith('query');
  });

  it('renders inputStart content', () => {
    render(
      <DInput
        label="Teléfono"
        inputStart={<span data-testid="input-start">+56</span>}
      />,
    );

    expect(screen.getByTestId('input-start')).toBeInTheDocument();
  });

  it('renders inputEnd content', () => {
    render(
      <DInput
        label="Teléfono"
        inputEnd={<span data-testid="input-end">CL</span>}
      />,
    );

    expect(screen.getByTestId('input-end')).toBeInTheDocument();
  });

  it('passes data-testid correctly via dataAttributes', () => {
    render(
      <DInput
        label="Prueba"
        dataAttributes={{ 'data-testid': 'custom-input' }}
      />,
    );

    expect(screen.getByTestId('custom-input')).toBeInTheDocument();
  });

  it('label is not provided', () => {
    const { container } = render(
      <DInput />,
    );

    expect(container.querySelector('label')).not.toBeInTheDocument();
  });

  it('calls onChange with input value when typing', () => {
    const handleChange = jest.fn();

    render(
      <DInput
        label="Input label"
        onChange={handleChange}
      />,
    );

    fireEvent.change(screen.getByLabelText('Input label'), {
      target: { value: 'new text' },
    });

    expect(handleChange).toHaveBeenCalledWith('new text');
  });

  it('calls onIconStartClick with current value when inputStart is clicked', async () => {
    const handleIconStartClick = jest.fn();

    render(
      <DInput
        label="Input label"
        value="value"
        onIconStartClick={handleIconStartClick}
        iconStartTabIndex={1}
        iconStart="heart"
      />,
    );

    const iconStart = await screen.findByRole('button');
    fireEvent.click(iconStart);
    expect(handleIconStartClick).toHaveBeenCalledWith('value');
    expect(iconStart.tabIndex).toBe(1);
  });

  it('calls onIconEndClick with current value when inputEnd is clicked', async () => {
    const handleIconEndClick = jest.fn();

    render(
      <DInput
        label="Input label"
        value="value"
        onIconEndClick={handleIconEndClick}
        iconEnd="heart"
      />,
    );

    const iconStart = await screen.findByRole('button');
    fireEvent.click(iconStart);
    expect(handleIconEndClick).toHaveBeenCalledWith('value');
  });

  it('renders the label icon', () => {
    const { container } = render(
      <DInput
        label="Input label"
        labelIcon="heart"
      />,
    );

    expect(container.querySelector('i')).toHaveClass('d-icon', 'bi-heart');
  });
});

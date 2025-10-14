/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
} from '@testing-library/react';
import DButton from './DButton';

describe('<DButton />', () => {
  it('Should render base button', () => {
    const props = { text: 'Test' };

    const { container } = render(
      <DButton {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        aria-label="Test"
        class="btn btn-primary"
        type="button"
      >
        <span>
          ${props.text}
        </span>
      </button>
    </div>
  `);
  });

  it('Should render button pill', () => {
    const props = {
      text: 'Test',
      pill: true,
    };

    const { container } = render(
      <DButton {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          aria-label="Test"
          class="btn btn-primary"
          type="button"
        >
          <span>
            ${props.text}
          </span>
        </button>
      </div>
    `);
  });

  it('Should call onClick when clicked and stopPropagation is true', () => {
    const handleClick = jest.fn();
    const stopPropagation = jest.fn();

    const { getByRole } = render(
      <DButton
        text="Click"
        onClick={(e) => {
          stopPropagation();
          handleClick(e);
        }}
      />,
    );

    const button = getByRole('button');
    fireEvent.click(button);

    expect(stopPropagation).toHaveBeenCalled();
    expect(handleClick).toHaveBeenCalled();
  });

  it('Should render loading state with aria label', () => {
    const { container } = render(
      <DButton
        text="Submit"
        loading
        loadingAriaLabel="Loading..."
      />,
    );

    expect(container.querySelector('.spinner-border')).toBeInTheDocument();
    expect(container.querySelector('[aria-label="Loading..."]')).toBeInTheDocument();
  });

  it('Should render color secondary outline', () => {
    const { container } = render(
      <DButton
        text="Button content"
        color="secondary"
        variant="outline"
      />,
    );

    expect(container.querySelector('.btn-outline-secondary')).toBeInTheDocument();
  });

  it('Should disable button when state is disabled', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <DButton
        text="Disabled"
        state="disabled"
        onClick={(e) => {
          handleClick(e);
        }}
      />,
    );

    const button = getByRole('button');
    fireEvent.click(button);

    expect(getByRole('button')).toBeDisabled();
    expect(handleClick).toHaveBeenCalledTimes(0);
  });

  it('Should render start and end icons', () => {
    const { container } = render(
      <DButton
        text="With Icons"
        iconStart="start"
        iconEnd="end"
      />,
    );

    const [iconStart, iconEnd] = container.querySelectorAll('i');
    expect(iconStart).toHaveClass('d-icon', 'bi-start');
    expect(iconEnd).toHaveClass('d-icon', 'bi-end');
  });

  it('Should apply value, form, and data attributes', () => {
    const { getByRole } = render(
      <DButton
        text="Submit"
        value="submit-value"
        form="form-id"
        dataAttributes={{ 'data-test': 'button' }}
      />,
    );

    const button = getByRole('button');
    expect(button).toHaveAttribute('value', 'submit-value');
    expect(button).toHaveAttribute('form', 'form-id');
    expect(button).toHaveAttribute('data-test', 'button');
  });

  it('Should apply custom style', () => {
    const { getByRole } = render(
      <DButton text="Styled" style={{ backgroundColor: 'red' }} />,
    );

    expect(getByRole('button')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('Should apply state class when state is not disabled', () => {
    const { getByRole } = render(
      <DButton
        text="State"
        state="active"
      />,
    );

    expect(getByRole('button')).toHaveClass('active');
  });

  it('Should not render text when loading is true', () => {
    const { queryByText } = render(
      <DButton
        text="Loading text"
        loading
      />,
    );

    expect(queryByText('Loading text')).not.toBeInTheDocument();
  });

  it('Should not render value if empty string', () => {
    const { getByRole } = render(
      <DButton
        text="No Value"
        value=""
      />,
    );

    expect(getByRole('button')).not.toHaveAttribute('value');
  });

  it('Should apply size class', () => {
    const { getByRole } = render(
      <DButton
        text="Sized"
        size="lg"
      />,
    );

    expect(getByRole('button')).toHaveClass('btn-lg');
  });

  it('Should not throw if onClick is not provided', () => {
    const { getByRole } = render(
      <DButton
        text="No onClick"
      />,
    );

    const button = getByRole('button');
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });

  it('Should not render text span when text is empty', () => {
    const { container } = render(<DButton />);

    const span = container.querySelector('span');
    expect(span).toBeNull();
  });
});

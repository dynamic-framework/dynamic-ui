/// <reference types="@testing-library/jest-dom" />

import { fireEvent, render } from '@testing-library/react';
import DButtonIcon from './DButtonIcon';

describe('<DButtonIcon />', () => {
  it('Should render base icon button', () => {
    const props = { icon: 'x-lg' };

    const { container } = render(
      <DButtonIcon {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="btn d-button-icon btn-primary"
          type="button"
        >
          <i
            class="d-icon bi bi-x-lg"
            style="--bs-icon-component-loading-duration: 1.8s; --bs-icon-component-padding: 0;"
          />
        </button>
      </div>
    `);
  });

  it('Should call onClick when clicked and stopPropagation is true', () => {
    const handleClick = jest.fn();
    const stopPropagation = jest.fn();

    const { getByRole } = render(
      <DButtonIcon
        icon="check"
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
      <DButtonIcon
        icon="check"
        loading
        loadingAriaLabel="Loading..."
      />,
    );

    expect(container.querySelector('.spinner-border')).toBeInTheDocument();
    expect(container.querySelector('[aria-label="Loading..."]')).toBeInTheDocument();
  });

  it('Should render color secondary outline', () => {
    const { container } = render(
      <DButtonIcon
        icon="check"
        color="secondary"
        variant="outline"
      />,
    );

    expect(container.querySelector('.btn-outline-secondary')).toBeInTheDocument();
  });

  it('Should disable button when state is disabled', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <DButtonIcon
        icon="check"
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

  it('Should apply data attributes', () => {
    const { getByRole } = render(
      <DButtonIcon
        icon="check"
        dataAttributes={{ 'data-test': 'button' }}
      />,
    );

    const button = getByRole('button');
    expect(button).toHaveAttribute('data-test', 'button');
  });

  it('Should apply custom style', () => {
    const { getByRole } = render(
      <DButtonIcon icon="check" style={{ backgroundColor: 'red' }} />,
    );

    expect(getByRole('button')).toHaveStyle({ backgroundColor: 'red' });
  });

  it('Should apply state class when state is not disabled', () => {
    const { getByRole } = render(
      <DButtonIcon
        icon="check"
        state="active"
        disabled={false}
      />,
    );

    expect(getByRole('button')).toHaveClass('active');
  });

  it('Should not render icon when loading is true', () => {
    const { getByRole } = render(
      <DButtonIcon
        icon="check"
        loading
      />,
    );

    const icon = getByRole('button').querySelector('i');
    expect(icon).not.toBeInTheDocument();
  });

  it('Should apply size class', () => {
    const { getByRole } = render(
      <DButtonIcon
        icon="check"
        size="lg"
      />,
    );

    expect(getByRole('button')).toHaveClass('btn-lg');
  });

  it('Should not throw if onClick is not provided', () => {
    const { getByRole } = render(
      <DButtonIcon
        icon="check"
      />,
    );

    const button = getByRole('button');
    expect(() => {
      fireEvent.click(button);
    }).not.toThrow();
  });
});

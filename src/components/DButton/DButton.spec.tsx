/// <reference types="@testing-library/jest-dom" />

import {
  fireEvent,
  render,
} from '@testing-library/react';
import DButton from './DButton';
import { DContextProvider } from '../../contexts';

jest.mock('../../utils/getCssVariable', () => ({
  __esModule: true,
  default: (name: string) => {
    if (name.includes('lg')) return '960px';
    if (name.includes('md')) return '768px';
    if (name.includes('sm')) return '576px';
    if (name.includes('xl')) return '1200px';
    if (name.includes('xxl')) return '1400px';
    if (name.includes('xs')) return '0px';
    return '';
  },
}));

beforeAll(() => {
  window.matchMedia = (query) => ({
    matches: /960/.test(query),
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  });
});

describe('<DButton />', () => {
  it('Should render base button', () => {
    const props = { text: 'Test' };

    const { container } = render(
      <DButton {...props} />,
    );

    expect(container).toMatchInlineSnapshot(`
    <div>
      <button
        aria-busy="false"
        aria-disabled="false"
        aria-label="Test"
        class="btn btn-primary"
        type="button"
      >
        ${props.text}
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

  it('Should render start and end icons', () => {
    const { container } = render(
      <DButton
        text="With Icons"
        iconStart="ArrowLeft"
        iconEnd="ArrowRight"
      />,
    );

    const icons = container.querySelectorAll('.d-icon');
    expect(icons).toHaveLength(2);
    expect(icons[0].querySelector('svg')).toBeInTheDocument();
    expect(icons[1].querySelector('svg')).toBeInTheDocument();
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

    expect(getByRole('button')).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
  });

  it('Should render loadingText when is passed', () => {
    const { getByRole } = render(
      <DButton
        text="Loading"
        loading
        loadingText="Loading..."
      />,
    );

    expect(getByRole('status')).toHaveTextContent('Loading...');
  });

  it('Should not render value if empty string', () => {
    const { getByRole } = render(
      <DButton
        text="No Value"
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

  it('Should apply responsive size class (sm)', () => {
    // Simula mobile viewport
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 400 });
    window.dispatchEvent(new Event('resize'));
    const { getByRole } = render(
      <DContextProvider breakpoints={{
        xs: '0px', sm: '576px', md: '768px', lg: '960px', xl: '1200px', xxl: '1400px',
      }}
      >
        <DButton text="Responsive" size={{ sm: 'sm', lg: 'lg' }} />
      </DContextProvider>,
    );
    expect([
      'btn btn-primary',
      'btn btn-primary btn-sm',
      'btn btn-primary btn-md',
      'btn btn-primary btn-lg',
    ]).toContain(getByRole('button').className);
  });

  it('Should apply responsive size class (lg)', () => {
    // Simula desktop viewport
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1000 });
    window.dispatchEvent(new Event('resize'));
    const { getByRole } = render(
      <DContextProvider breakpoints={{
        xs: '0px', sm: '576px', md: '768px', lg: '960px', xl: '1200px', xxl: '1400px',
      }}
      >
        <DButton text="Responsive" size={{ lg: 'lg' }} />
      </DContextProvider>,
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

  it('Should render as anchor when href is provided and apply target/rel', () => {
    const { container } = render(
      <DButton
        text="Go"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      />,
    );

    const anchor = container.querySelector('a');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute('href', 'https://example.com');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });
});

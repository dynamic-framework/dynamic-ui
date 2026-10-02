import { render } from '@testing-library/react';
import DButton from '../../components/DButton';
import DBadge from '../../components/DBadge';
import DIcon from '../../components/DIcon';
import { resetCssBreakpointsCache } from '../useMediaBreakpointUp';

const BREAKPOINTS = {
  xs: '0', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px',
};

let viewportWidth = 0;
const originalMatchMedia = window.matchMedia;

// Matches `(min-width: Npx)` against a simulated viewport, like a browser.
const matchMediaAt = (query: string) => {
  const minWidth = /\(min-width:\s*(\d+)(?:px)?\)/.exec(query);
  return {
    matches: minWidth ? viewportWidth >= Number(minWidth[1]) : false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

describe('responsive props without DContextProvider', () => {
  beforeAll(() => {
    Object.entries(BREAKPOINTS).forEach(([name, value]) => {
      document.documentElement.style.setProperty(`--bs-breakpoint-${name}`, value);
    });
    window.matchMedia = jest.fn(matchMediaAt) as unknown as typeof window.matchMedia;
  });

  afterAll(() => {
    Object.keys(BREAKPOINTS).forEach((name) => {
      document.documentElement.style.removeProperty(`--bs-breakpoint-${name}`);
    });
    window.matchMedia = originalMatchMedia;
    resetCssBreakpointsCache();
  });

  it.each([
    [400, 'btn-sm'],
    [1300, 'btn-lg'],
  ])('DButton at %ipx resolves %s', (width, expected) => {
    viewportWidth = width;
    const { container } = render(<DButton size={{ xs: 'sm', lg: 'lg' }} text="Continuar" />);
    expect(container.querySelector('button')).toHaveClass(expected);
  });

  it.each([
    [400, 'badge-sm'],
    [1300, 'badge-lg'],
  ])('DBadge at %ipx resolves %s', (width, expected) => {
    viewportWidth = width;
    const { container } = render(<DBadge size={{ xs: 'sm', lg: 'lg' }} text="Nuevo" />);
    expect(container.querySelector('.badge')).toHaveClass(expected);
  });

  it.each([
    [400, '1rem'],
    [1300, '2rem'],
  ])('DIcon at %ipx resolves %s', (width, expected) => {
    viewportWidth = width;
    const { container } = render(<DIcon icon="Settings" size={{ xs: '1rem', lg: '2rem' }} />);
    const icon = container.querySelector('.d-icon') as HTMLElement;
    expect(icon.style.getPropertyValue('--bs-icon-component-size')).toBe(expected);
  });
});

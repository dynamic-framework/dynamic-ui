/// <reference types="@testing-library/jest-dom" />

import {
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DOffcanvas from '.';
import { DContextProvider } from '../../contexts/DContext';

jest.mock('../../contexts', () => ({
  useDContext: () => ({
    iconMap: {
      xLg: 'x-lg-icon',
    },
    icon: {
      familyClass: 'bi',
      familyPrefix: 'bi',
    },
  }),
}));

// Matches the DS default Bootstrap breakpoints, so `DContextProvider`'s
// `useLayoutEffect` (which reads `--bs-breakpoint-*` CSS variables) resolves
// the same breakpoints used in a real browser.
jest.mock('../../utils/getCssVariable', () => ({
  __esModule: true,
  default: (name: string) => {
    if (name.includes('xxl')) return '1400px';
    if (name.includes('xl')) return '1200px';
    if (name.includes('lg')) return '992px';
    if (name.includes('md')) return '768px';
    if (name.includes('sm')) return '576px';
    if (name.includes('xs')) return '0px';
    return '';
  },
}));

const BREAKPOINTS_WIDTH: Record<string, number> = {
  xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400,
};

// Simulates a real viewport width against `(min-width: <n>px)` media queries,
// so `useMediaBreakpointUp`/`useResponsiveProp` resolve the same way they
// would in a real browser at that width.
let currentViewportWidth = 0;

beforeAll(() => {
  window.matchMedia = jest.fn((query: string) => {
    const match = /min-width:\s*(\d+)px/.exec(query);
    const breakpointPx = match ? Number(match[1]) : 0;
    return {
      matches: currentViewportWidth >= breakpointPx,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    } as unknown as MediaQueryList;
  });
});

beforeEach(() => {
  currentViewportWidth = 0;
});

describe('<DOffcanvas />', () => {
  describe('Rendering and Props', () => {
    it('should render with header, body, and footer', () => {
      const { container } = render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header>Test Header</DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          <DOffcanvas.Footer>Test Footer</DOffcanvas.Footer>
        </DOffcanvas>,
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            aria-hidden="false"
            aria-labelledby="myOffcanvasLabel"
            class="offcanvas portal show offcanvas-end"
            id="myOffcanvas"
            style="transition: none; transform: translateX(100%);"
            tabindex="-1"
          >
            <div
              class="offcanvas-header"
            >
              <div>
                Test Header
              </div>
            </div>
            <div
              class="d-offcanvas-separator"
            />
            <div
              class="offcanvas-body"
            >
              Test Body
            </div>
            <div
              class="d-offcanvas-separator"
            />
            <div
              class="d-offcanvas-footer"
            >
              Test Footer
            </div>
          </div>
        </div>
      `);
    });

    it.each([
      ['start', 'offcanvas-start'],
      ['top', 'offcanvas-top'],
      ['bottom', 'offcanvas-bottom'],
    ])('should render on position %s', (position, expectedClass) => {
      const { container } = render(<DOffcanvas name="test" openFrom={position as 'start' | 'top' | 'bottom'} />);
      expect(container.firstChild).toHaveClass(expectedClass);
    });

    it('should render with a static backdrop', () => {
      const { container } = render(<DOffcanvas name="test" staticBackdrop />);
      expect(container.firstChild).toHaveAttribute('data-bs-backdrop', 'static');
    });

    it('should resolve responsive openFrom based on the current breakpoint', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.lg;
      const { container } = render(
        <DContextProvider>
          <DOffcanvas name="test" openFrom={{ xs: 'bottom', md: 'end', lg: 'top' }} />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveClass('offcanvas-top');
      expect(container.firstChild).not.toHaveClass('offcanvas-bottom');
      expect(container.firstChild).not.toHaveClass('offcanvas-end');
    });

    it('should fall back to "end" when no breakpoint in the responsive openFrom object matches', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.xs;
      const { container } = render(
        <DContextProvider>
          <DOffcanvas name="test" openFrom={{ md: 'top', lg: 'start' }} />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveClass('offcanvas-end');
    });

    it('should inject --bs-offcanvas-width/height CSS variables when width/height are provided', () => {
      const { container } = render(
        <DOffcanvas name="test" openFrom="end" width="320px" height="50vh" />,
      );
      expect(container.firstChild).toHaveStyle({
        '--bs-offcanvas-width': '320px',
        '--bs-offcanvas-height': '50vh',
      });
    });

    it('should resolve responsive width/height based on the current breakpoint', () => {
      currentViewportWidth = BREAKPOINTS_WIDTH.md;
      const { container } = render(
        <DContextProvider>
          <DOffcanvas
            name="test"
            openFrom="end"
            width={{ xs: '100%', md: '320px' }}
          />
        </DContextProvider>,
      );
      expect(container.firstChild).toHaveStyle({ '--bs-offcanvas-width': '320px' });
    });

    it('should not set --bs-offcanvas-width/height when width/height are not provided', () => {
      const { container } = render(<DOffcanvas name="test" openFrom="end" />);
      expect(container.firstChild).not.toHaveStyle({ '--bs-offcanvas-width': '400px' });
    });

    it('should render a scrollable offcanvas', () => {
      const { container } = render(<DOffcanvas name="test" scrollable />);
      expect(container.firstChild).toHaveAttribute('data-bs-scroll', 'true');
    });
  });

  describe('<DOffcanvas.Header />', () => {
    it('should render a close button and call onClose when clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      render(
        <DOffcanvas.Header showCloseButton onClose={handleClose}>
          Header
        </DOffcanvas.Header>,
      );

      const closeButton = screen.getByRole('button', { name: /Close/i });
      expect(closeButton).toBeInTheDocument();

      await user.click(closeButton);
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('<DOffcanvas.Body />', () => {
    it('should render children correctly', () => {
      render(<DOffcanvas.Body>Offcanvas Body Content</DOffcanvas.Body>);
      expect(screen.getByText('Offcanvas Body Content')).toBeInTheDocument();
    });
  });

  describe('<DOffcanvas.Footer />', () => {
    it('should apply an action placement class', () => {
      const { container } = render(
        <DOffcanvas.Footer actionPlacement="start">
          Footer Content
        </DOffcanvas.Footer>,
      );

      const footer = container.querySelector('.d-offcanvas-footer');
      expect(footer).toHaveClass('d-offcanvas-action-start');
    });
  });
});

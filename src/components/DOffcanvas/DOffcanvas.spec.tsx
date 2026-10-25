/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DOffcanvas from '.';
import { DContextProvider } from '../../contexts/DContext';
import { useDPortalContext } from '../../contexts/DPortalContext';

const mockUseDContext = jest.fn(() => ({
  iconMap: {
    xLg: 'x-lg-icon',
  },
  icon: {
    familyClass: 'bi',
    familyPrefix: 'bi',
    materialStyle: false,
  },
}));

jest.mock('../../contexts', () => ({
  useDContext: () => mockUseDContext(),
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
            aria-modal="true"
            class="offcanvas portal show offcanvas-end"
            id="myOffcanvas"
            role="dialog"
            style="transition: none; transform: translateX(100%);"
            tabindex="-1"
          >
            <div
              class="offcanvas-header"
            >
              <div
                id="myOffcanvasLabel"
              >
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

    it('falls back to context icon configuration when no icon family props are provided', () => {
      mockUseDContext.mockReturnValueOnce({
        iconMap: {
          xLg: 'x-lg-icon',
        },
        icon: {
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        },
      });

      const { container } = render(
        <DOffcanvas.Header showCloseButton />,
      );

      const icon = container.querySelector('.d-icon');
      expect(icon?.className).toContain('material-symbols-outlined');
      expect(icon).toHaveTextContent('x-lg-icon');
      expect(icon?.tagName).toBe('I');
    });

    it('prioritizes local icon family props over context configuration', () => {
      mockUseDContext.mockReturnValueOnce({
        iconMap: {
          xLg: 'x-lg-icon',
        },
        icon: {
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        },
      });

      const { container } = render(
        <DOffcanvas.Header
          showCloseButton
          icon="X"
          iconMaterialStyle={false}
          iconFamilyClass="bi"
          iconFamilyPrefix="bi-"
        />,
      );

      const icon = container.querySelector('.d-icon');
      expect(icon?.className).not.toContain('material-symbols-outlined');
      expect(icon?.querySelector('svg')).toBeInTheDocument();
    });

    it('still honors the deprecated materialStyle prop', () => {
      mockUseDContext.mockReturnValueOnce({
        iconMap: {
          xLg: 'x-lg-icon',
        },
        icon: {
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: false,
        },
      });

      const { container } = render(
        <DOffcanvas.Header
          showCloseButton
          materialStyle
        />,
      );

      const icon = container.querySelector('.d-icon');
      expect(icon?.className).toContain('material-symbols-outlined');
      expect(icon).toHaveTextContent('x-lg-icon');
      expect(icon?.tagName).toBe('I');
    });

    it('prioritizes iconMaterialStyle over the deprecated materialStyle prop', () => {
      mockUseDContext.mockReturnValueOnce({
        iconMap: {
          xLg: 'X',
        },
        icon: {
          familyClass: 'material-symbols-outlined',
          familyPrefix: '',
          materialStyle: true,
        },
      });

      const { container } = render(
        <DOffcanvas.Header
          showCloseButton
          materialStyle
          iconMaterialStyle={false}
        />,
      );

      const icon = container.querySelector('.d-icon');
      expect(icon?.className).not.toContain('material-symbols-outlined');
      expect(icon?.querySelector('svg')).toBeInTheDocument();
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
  describe('diálogo modal', () => {
    it('se anuncia como diálogo modal con el nombre del header', () => {
      render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header>Test Header</DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Test Header' });
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      expect(dialog).toHaveAttribute('aria-labelledby', 'myOffcanvasLabel');
    });

    it('respeta el id que el consumidor ya puso en el título, sin duplicarlo', () => {
      render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header>
            <span id="myOffcanvasLabel">Test Header</span>
          </DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>,
      );

      expect(screen.getByRole('dialog', { name: 'Test Header' })).toBeInTheDocument();
      expect(document.querySelectorAll('[id="myOffcanvasLabel"]')).toHaveLength(1);
      expect(document.getElementById('myOffcanvasLabel')?.tagName).toBe('SPAN');
    });

    it('sigue al título cuando este pone o quita el id por su propio estado', async () => {
      const control: { setOwnLabel?: (value: boolean) => void } = {};
      function Title() {
        const [ownLabel, setOwnLabel] = useState(false);
        control.setOwnLabel = setOwnLabel;
        return <span id={ownLabel ? 'myOffcanvasLabel' : undefined}>Test Header</span>;
      }
      render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header><Title /></DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>,
      );
      const labels = () => document.querySelectorAll('[id="myOffcanvasLabel"]');

      expect(labels()).toHaveLength(1);
      expect(labels()[0].tagName).toBe('DIV');

      act(() => control.setOwnLabel?.(true));
      await waitFor(() => expect(labels()[0].tagName).toBe('SPAN'));
      expect(labels()).toHaveLength(1);
      expect(screen.getByRole('dialog', { name: 'Test Header' })).toBeInTheDocument();

      act(() => control.setOwnLabel?.(false));
      await waitFor(() => expect(labels()[0]?.tagName).toBe('DIV'));
      expect(labels()).toHaveLength(1);
      expect(screen.getByRole('dialog', { name: 'Test Header' })).toBeInTheDocument();
    });

    it('usa ariaLabel como nombre cuando no hay título', () => {
      render(
        <DOffcanvas name="myOffcanvas" ariaLabel="Filtros">
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Filtros' });
      expect(dialog).toHaveAttribute('aria-label', 'Filtros');
      expect(dialog).not.toHaveAttribute('aria-labelledby');
    });

    it('enfoca el contenedor al abrir', () => {
      render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header>Test Header</DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>,
      );

      expect(screen.getByRole('dialog')).toHaveFocus();
    });

    it('no quita el foco a un hijo con autoFocus', () => {
      render(
        <DOffcanvas name="myOffcanvas">
          <DOffcanvas.Header>Test Header</DOffcanvas.Header>
          <DOffcanvas.Body>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input aria-label="Buscar" autoFocus />
          </DOffcanvas.Body>
        </DOffcanvas>,
      );

      expect(screen.getByRole('textbox', { name: 'Buscar' })).toHaveFocus();
    });

    describe('dentro de DContextProvider', () => {
      function ExampleOffcanvas() {
        const { closePortal } = useDPortalContext();
        return (
          <DOffcanvas name="exampleOffcanvas">
            <DOffcanvas.Header showCloseButton onClose={closePortal}>Test Header</DOffcanvas.Header>
            <DOffcanvas.Body>
              <button type="button">Primero</button>
              <button type="button">Último</button>
            </DOffcanvas.Body>
          </DOffcanvas>
        );
      }

      function EmptyExample() {
        return (
          <DOffcanvas name="exampleOffcanvasEmpty">
            <DOffcanvas.Header>Sin enfocables</DOffcanvas.Header>
            <DOffcanvas.Body>Solo texto</DOffcanvas.Body>
          </DOffcanvas>
        );
      }

      type Portals = { example: undefined; empty: undefined };

      function Opener({ portal = 'example' }: { portal?: keyof Portals }) {
        const { openPortal } = useDPortalContext<Portals>();
        return <button type="button" onClick={() => openPortal(portal, undefined)}>Abrir</button>;
      }

      async function openOffcanvas(portal: keyof Portals = 'example') {
        const user = userEvent.setup();
        render(
          <DContextProvider availablePortals={{ example: ExampleOffcanvas, empty: EmptyExample }}>
            <Opener portal={portal} />
          </DContextProvider>,
        );
        await user.click(screen.getByRole('button', { name: 'Abrir' }));
        const dialog = await screen.findByRole('dialog');
        return { user, dialog };
      }

      it('al abrir, el foco está dentro del diálogo', async () => {
        const { dialog } = await openOffcanvas();

        expect(dialog).toHaveFocus();
        expect(dialog).toContainElement(document.activeElement as HTMLElement);
      });

      it('al abrir, Tab va al primer enfocable', async () => {
        const { user } = await openOffcanvas();

        await user.tab();
        expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
      });

      it('al abrir, Shift+Tab va al último enfocable', async () => {
        const { user } = await openOffcanvas();

        await user.tab({ shift: true });
        expect(screen.getByRole('button', { name: 'Último' })).toHaveFocus();
      });

      it('el bucle de Tab vuelve del último al primero y del primero al último', async () => {
        const { user } = await openOffcanvas();
        const first = screen.getByRole('button', { name: 'Close' });
        const last = screen.getByRole('button', { name: 'Último' });

        last.focus();
        await user.tab();
        expect(first).toHaveFocus();
        await user.tab({ shift: true });
        expect(last).toHaveFocus();
      });

      it('un diálogo sin enfocables conserva el foco con Tab y con Shift+Tab', async () => {
        const { user, dialog } = await openOffcanvas('empty');

        expect(dialog).toHaveFocus();
        await expect(user.tab()).resolves.toBeUndefined();
        expect(dialog).toHaveFocus();
        await expect(user.tab({ shift: true })).resolves.toBeUndefined();
        expect(dialog).toHaveFocus();
      });
    });
  });
});

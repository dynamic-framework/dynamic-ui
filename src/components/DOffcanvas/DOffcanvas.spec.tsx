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
import DBoxFile from '../DBoxFile';
import DTabs from '../DTabs';
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

    describe('ariaLabelledby', () => {
      it('nombra el diálogo con un título que vive fuera del header', () => {
        render(
          <DOffcanvas name="successSheet" ariaLabelledby="successTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="successTitle">Transferencia exitosa</h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );

        const dialog = screen.getByRole('dialog', { name: 'Transferencia exitosa' });
        expect(dialog).toHaveAttribute('aria-labelledby', 'successTitle');
      });

      it('el header cede el id cuando el título de fuera usa ese mismo id', () => {
        // La migración natural es declarar el id que ya se tenía. Si el header
        // siguiera adoptándolo habría dos elementos con él y el navegador
        // resolvería con el del header, vacío.
        render(
          <DOffcanvas name="successSheet" ariaLabelledby="successSheetLabel">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="successSheetLabel">Transferencia exitosa</h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );

        expect(document.querySelectorAll('[id="successSheetLabel"]')).toHaveLength(1);
        expect(document.getElementById('successSheetLabel')?.tagName).toBe('H2');
        expect(screen.getByRole('dialog', { name: 'Transferencia exitosa' })).toBeInTheDocument();
      });

      it('el header también cede el id con ariaLabel', () => {
        render(
          <DOffcanvas name="successSheet" ariaLabel="Filtros">
            <DOffcanvas.Header>Cabecera</DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );

        expect(document.querySelectorAll('[id="successSheetLabel"]')).toHaveLength(0);
      });

      it('ariaLabel manda sobre ariaLabelledby', () => {
        render(
          <DOffcanvas name="successSheet" ariaLabel="Filtros" ariaLabelledby="successTitle">
            <DOffcanvas.Body><h2 id="successTitle">Transferencia exitosa</h2></DOffcanvas.Body>
          </DOffcanvas>,
        );

        const dialog = screen.getByRole('dialog', { name: 'Filtros' });
        expect(dialog).not.toHaveAttribute('aria-labelledby');
      });

      it('sin la prop, el comportamiento actual no cambia', () => {
        render(
          <DOffcanvas name="myOffcanvas">
            <DOffcanvas.Header>Test Header</DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );

        const dialog = screen.getByRole('dialog', { name: 'Test Header' });
        expect(dialog).toHaveAttribute('aria-labelledby', 'myOffcanvasLabel');
        expect(document.getElementById('myOffcanvasLabel')?.tagName).toBe('DIV');
      });
    });

    describe('aviso de diálogo sin nombre', () => {
      // El aviso se emite en un microtask: el header adopta el id en un layout
      // effect con estado y aún no ha llegado al DOM cuando corren los efectos
      // del diálogo.
      const flush = () => act(async () => { await Promise.resolve(); });
      let warn: jest.SpyInstance;

      beforeEach(() => {
        warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      });
      afterEach(() => {
        warn.mockRestore();
      });

      it('avisa cuando el título vive fuera del header y no se declara', async () => {
        render(
          <DOffcanvas name="warnUndeclared">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="warnUndeclaredLabel">Transferencia exitosa</h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
        expect(warn).toHaveBeenCalledWith(expect.stringContaining('pass ariaLabelledby'));
      });

      it('avisa cuando no hay título en ninguna parte', async () => {
        render(
          <DOffcanvas name="warnNoTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('avisa cuando ariaLabelledby apunta a un id que no existe', async () => {
        render(
          <DOffcanvas name="warnBadRef" ariaLabelledby="noSuchTitle">
            <DOffcanvas.Header>Cabecera</DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('its ariaLabelledby points to "noSuchTitle"'),
        );
      });

      it('no avisa cuando el título está en el header', async () => {
        render(
          <DOffcanvas name="warnTitled">
            <DOffcanvas.Header>Test Header</DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título de fuera se declara con ariaLabelledby', async () => {
        render(
          <DOffcanvas name="warnDeclared" ariaLabelledby="warnDeclaredTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body><h2 id="warnDeclaredTitle">Operación exitosa</h2></DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando lleva ariaLabel', async () => {
        render(
          <DOffcanvas name="warnAriaLabel" ariaLabel="Filtros">
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('avisa cuando el único texto del header está en un descendiente aria-hidden', async () => {
        render(
          <DOffcanvas name="warnAriaHidden">
            <DOffcanvas.Header><span aria-hidden="true">Invisible</span></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('avisa cuando el único texto del header está en un descendiente display:none', async () => {
        // `display: none` saca al elemento del árbol de accesibilidad: hay
        // texto en el DOM, pero el diálogo no tiene nombre.
        render(
          <DOffcanvas name="warnDisplayNone">
            <DOffcanvas.Header><span style={{ display: 'none' }}>Invisible</span></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('avisa cuando el único texto del header está en un descendiente visibility:hidden', async () => {
        render(
          <DOffcanvas name="warnVisibilityHidden">
            <DOffcanvas.Header><span style={{ visibility: 'hidden' }}>Invisible</span></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('no avisa cuando el título usa el patrón visually-hidden', async () => {
        // Recorta una caja posicionada, sin display:none ni visibility:hidden,
        // así que el lector de pantalla sí lo lee.
        render(
          <DOffcanvas name="warnVisuallyHidden" ariaLabelledby="warnVisuallyHiddenTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2
                id="warnVisuallyHiddenTitle"
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  border: 0,
                }}
              >
                Transferencia exitosa
              </h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título referenciado es una imagen con alt', async () => {
        render(
          <DOffcanvas name="warnImgRef" ariaLabelledby="warnImgRefTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <img id="warnImgRefTitle" alt="Transfer successful" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el header solo contiene una imagen con alt', async () => {
        render(
          <DOffcanvas name="warnImgHeader">
            <DOffcanvas.Header><img alt="Transfer successful" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('avisa cuando la imagen del header es decorativa', async () => {
        // Un alt vacío marca la imagen como decorativa: no aporta nombre.
        render(
          <DOffcanvas name="warnImgDecorative">
            <DOffcanvas.Header><img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('no avisa cuando el nombre sale del atributo title', async () => {
        render(
          <DOffcanvas name="warnTitleAttr">
            <DOffcanvas.Header><span title="Transferencia exitosa" /></DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando ariaLabelledby referencia varios ids', async () => {
        render(
          <DOffcanvas name="warnMultiRef" ariaLabelledby="warnPart1 warnPart2">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="warnPart1">Trans</h2>
              <span id="warnPart2">ferencia</span>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('ariaLabelledby vacío se comporta como no pasarlo', async () => {
        render(
          <DOffcanvas name="warnEmptyProp" ariaLabelledby="">
            <DOffcanvas.Header>Test Header</DOffcanvas.Header>
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'warnEmptyPropLabel');
        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título referenciado está oculto y envuelve su texto', async () => {
        // La raíz referenciada está exenta aunque esté oculta, y la exención
        // alcanza a su subárbol: el span hereda la visibilidad pero sigue
        // nombrando el diálogo.
        render(
          <DOffcanvas name="warnNestedHidden" ariaLabelledby="warnNestedHiddenTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="warnNestedHiddenTitle" style={{ visibility: 'hidden' }}>
                <span>Transferencia exitosa</span>
              </h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título referenciado con display:none envuelve su texto', async () => {
        render(
          <DOffcanvas name="warnNestedNone" ariaLabelledby="warnNestedNoneTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="warnNestedNoneTitle" style={{ display: 'none' }}>
                <span>Transferencia exitosa</span>
              </h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).not.toHaveBeenCalled();
      });

      it('con la raíz visible, un descendiente oculto sí se descarta', async () => {
        render(
          <DOffcanvas name="warnVisibleRoot" ariaLabelledby="warnVisibleRootTitle">
            <DOffcanvas.Header showCloseButton onClose={() => {}} />
            <DOffcanvas.Body>
              <h2 id="warnVisibleRootTitle">
                <span style={{ visibility: 'hidden' }}>Invisible</span>
              </h2>
            </DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('solo avisa una vez por diálogo', async () => {
        const { unmount } = render(
          <DOffcanvas name="warnOnce">
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();
        unmount();

        render(
          <DOffcanvas name="warnOnce">
            <DOffcanvas.Body>Test Body</DOffcanvas.Body>
          </DOffcanvas>,
        );
        await flush();

        expect(warn).toHaveBeenCalledTimes(1);
      });
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

      function HiddenInputExample() {
        return (
          <DOffcanvas name="exampleOffcanvasHiddenInput">
            <DOffcanvas.Header>Con input oculto</DOffcanvas.Header>
            <DOffcanvas.Body>
              <button type="button">Primero</button>
              <button type="button">Último</button>
              <input type="hidden" name="token" value="abc" />
            </DOffcanvas.Body>
          </DOffcanvas>
        );
      }

      function BoxFileExample() {
        return (
          <DOffcanvas name="exampleOffcanvasBoxFile">
            <DOffcanvas.Header>Con DBoxFile</DOffcanvas.Header>
            <DOffcanvas.Body>
              <button type="button">Primero</button>
              <DBoxFile accept={{ 'image/*': [] }}>Arrastra un archivo</DBoxFile>
            </DOffcanvas.Body>
          </DOffcanvas>
        );
      }

      // Solo la pestaña activa lleva tabindex="0": las inactivas no pueden ser
      // ni el primer ni el último candidato del bucle.
      function TabsExample() {
        return (
          <DOffcanvas name="exampleOffcanvasTabs">
            <DOffcanvas.Header>Con DTabs</DOffcanvas.Header>
            <DOffcanvas.Body>
              <DTabs
                options={[
                  { label: 'Tab 1', tab: 'tab1' },
                  { label: 'Tab 2', tab: 'tab2' },
                  { label: 'Tab 3', tab: 'tab3' },
                ]}
                defaultSelected="tab2"
              />
            </DOffcanvas.Body>
          </DOffcanvas>
        );
      }

      type Portals = {
        example: undefined;
        empty: undefined;
        hiddenInput: undefined;
        boxFile: undefined;
        tabs: undefined;
      };

      function Opener({ portal = 'example' }: { portal?: keyof Portals }) {
        const { openPortal } = useDPortalContext<Portals>();
        return <button type="button" onClick={() => openPortal(portal, undefined)}>Abrir</button>;
      }

      async function openOffcanvas(portal: keyof Portals = 'example') {
        const user = userEvent.setup();
        render(
          <DContextProvider
            availablePortals={{
              example: ExampleOffcanvas,
              empty: EmptyExample,
              hiddenInput: HiddenInputExample,
              boxFile: BoxFileExample,
              tabs: TabsExample,
            }}
          >
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

      describe.each([
        [
          'un input type="hidden" al final',
          'hiddenInput' as const,
          () => screen.getByRole('button', { name: 'Primero' }),
          () => screen.getByRole('button', { name: 'Último' }),
        ],
        [
          'un DBoxFile al final',
          'boxFile' as const,
          () => screen.getByRole('button', { name: 'Primero' }),
          () => document.querySelector<HTMLElement>('.d-box-file-dropzone') as HTMLElement,
        ],
        [
          'un DTabs con la pestaña del medio activa',
          'tabs' as const,
          () => screen.getByRole('tab', { name: 'Tab 2' }),
          () => screen.getByRole('tab', { name: 'Tab 2' }),
        ],
      ])('con %s', (_, portal, getFirst, getLast) => {
        it('al abrir, Tab va al primero y Shift+Tab al último enfocable', async () => {
          const { user, dialog } = await openOffcanvas(portal);

          await user.tab();
          expect(getFirst()).toHaveFocus();
          dialog.focus();
          await user.tab({ shift: true });
          expect(getLast()).toHaveFocus();
        });

        it('el bucle va del último al primero y del primero al último', async () => {
          const { user, dialog } = await openOffcanvas(portal);
          const first = getFirst();
          const last = getLast();

          last.focus();
          await user.tab();
          expect(first).toHaveFocus();
          await user.tab({ shift: true });
          expect(last).toHaveFocus();
          expect(dialog).toContainElement(document.activeElement as HTMLElement);
        });
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

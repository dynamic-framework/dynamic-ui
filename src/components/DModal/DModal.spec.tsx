/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DModal from '.';
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

describe('<DModal />', () => {
  describe('Rendering and Props', () => {
    it('should render with header, body, and footer', () => {
      const { container } = render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
          <DModal.Footer>Test Footer</DModal.Footer>
        </DModal>,
      );

      expect(container).toMatchInlineSnapshot(`
        <div>
          <div
            aria-hidden="false"
            aria-labelledby="_r_0_"
            aria-modal="true"
            class="modal portal show"
            id="myModal"
            role="dialog"
            style="opacity: 0; transform: scale(0.95);"
            tabindex="-1"
          >
            <div
              class="modal-dialog"
            >
              <div
                class="modal-content"
              >
                <div
                  class="modal-header"
                >
                  <div
                    id="_r_0_"
                  >
                    Test Header
                  </div>
                </div>
                <div
                  class="d-modal-separator"
                />
                <div
                  class="modal-body"
                >
                  Test Body
                </div>
                <div
                  class="d-modal-separator"
                />
                <div
                  class="modal-footer"
                >
                  Test Footer
                </div>
              </div>
            </div>
          </div>
        </div>
`);
    });

    it('should render a centered and large modal', () => {
      const { container } = render(<DModal name="test" centered size="lg" />);

      const dialog = container.querySelector('.modal-dialog');
      expect(dialog).toHaveClass('modal-dialog-centered');
      expect(dialog).toHaveClass('modal-lg');
    });

    it('should render with a static backdrop', () => {
      const { container } = render(<DModal name="test" staticBackdrop />);

      const modal = container.querySelector('.modal');
      expect(modal).toHaveAttribute('data-bs-backdrop', 'static');
    });

    it('should render a fullscreen modal', () => {
      const { container } = render(<DModal name="test" fullScreen />);

      const dialog = container.querySelector('.modal-dialog');
      expect(dialog).toHaveClass('modal-fullscreen');
    });

    it('should render a fullscreen modal from a specific breakpoint', () => {
      const { container } = render(<DModal name="test" fullScreen fullScreenFrom="md" />);

      const dialog = container.querySelector('.modal-dialog');
      expect(dialog).toHaveClass('modal-fullscreen-md-down');
    });
  });

  describe('<DModal.Header />', () => {
    it('should render a close button and call onClose when clicked', async () => {
      const user = userEvent.setup();
      const handleClose = jest.fn();
      render(
        <DModal.Header showCloseButton onClose={handleClose}>
          Header
        </DModal.Header>,
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
        <DModal.Header showCloseButton />,
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
        <DModal.Header
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
        <DModal.Header
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
        <DModal.Header
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

  describe('<DModal.Body />', () => {
    it('should render children correctly', () => {
      render(<DModal.Body>Modal Body Content</DModal.Body>);
      expect(screen.getByText('Modal Body Content')).toBeInTheDocument();
    });
  });

  describe('<DModal.Footer />', () => {
    it('should apply an action placement class', () => {
      const { container } = render(
        <DModal.Footer actionPlacement="end">
          Footer Content
        </DModal.Footer>,
      );

      const footer = container.querySelector('.modal-footer');
      expect(footer).toHaveClass('d-modal-action-end');
    });
  });
  describe('diálogo modal', () => {
    it('se anuncia como diálogo modal con el nombre del header', () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Test Header' });
      expect(dialog).toHaveAttribute('aria-modal', 'true');
      // El id lo genera el diálogo con `useId`, no se deriva de `name`.
      const labelId = dialog.getAttribute('aria-labelledby');
      expect(labelId).toBeTruthy();
      expect(document.getElementById(labelId as string)).toHaveTextContent('Test Header');
    });

    it('usa ariaLabelledby cuando el título vive fuera del header', () => {
      render(
        <DModal name="myModal" ariaLabelledby="successTitle">
          <DModal.Header showCloseButton onClose={() => {}} />
          <DModal.Body>
            <h2 id="successTitle">Operación exitosa</h2>
          </DModal.Body>
        </DModal>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Operación exitosa' });
      expect(dialog).toHaveAttribute('aria-labelledby', 'successTitle');
    });

    it('ariaLabelledby manda sobre el título del header', () => {
      render(
        <DModal name="myModal" ariaLabelledby="realTitle">
          <DModal.Header>Cabecera</DModal.Header>
          <DModal.Body>
            <h2 id="realTitle">Operación exitosa</h2>
          </DModal.Body>
        </DModal>,
      );

      expect(screen.getByRole('dialog', { name: 'Operación exitosa' })).toBeInTheDocument();
    });

    it('ariaLabel manda sobre ariaLabelledby y sobre el título del header', () => {
      render(
        <DModal name="myModal" ariaLabel="Filtros" ariaLabelledby="realTitle">
          <DModal.Header>Cabecera</DModal.Header>
          <DModal.Body>
            <h2 id="realTitle">Operación exitosa</h2>
          </DModal.Body>
        </DModal>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Filtros' });
      expect(dialog).toHaveAttribute('aria-label', 'Filtros');
      expect(dialog).not.toHaveAttribute('aria-labelledby');
    });

    it('el id del título no se deriva de name: dos diálogos con el mismo name no chocan', () => {
      render(
        <>
          <DModal name="dup">
            <DModal.Header>Primero</DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>
          <DModal name="dup">
            <DModal.Header>Segundo</DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>
        </>,
      );

      const [first, second] = screen.getAllByRole('dialog');
      const firstLabel = first.getAttribute('aria-labelledby');
      const secondLabel = second.getAttribute('aria-labelledby');
      expect(firstLabel).not.toBe(secondLabel);
      expect(screen.getByRole('dialog', { name: 'Primero' })).toBeInTheDocument();
      expect(screen.getByRole('dialog', { name: 'Segundo' })).toBeInTheDocument();
    });

    it('monta con un name que no es un selector CSS válido', () => {
      // No se interpola ningún id dentro de un selector, así que un `name` con
      // comillas no puede producir un selector inválido.
      expect(() => render(
        <DModal name={'account"edit'}>
          <DModal.Header>Editar</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      )).not.toThrow();

      expect(screen.getByRole('dialog', { name: 'Editar' })).toBeInTheDocument();
    });

    describe('aviso de diálogo sin nombre', () => {
      let warn: jest.SpyInstance;

      beforeEach(() => {
        warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      });
      afterEach(() => {
        warn.mockRestore();
      });

      it('avisa cuando el header está vacío y no hay ariaLabel', () => {
        render(
          <DModal name="warnEmptyHeader">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('avisa cuando no hay header ni ariaLabel', () => {
        render(
          <DModal name="warnNoHeader">
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('no avisa cuando el título está en el header', () => {
        render(
          <DModal name="warnTitled">
            <DModal.Header>Test Header</DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título de fuera del header se declara con ariaLabelledby', () => {
        render(
          <DModal name="warnTitleOutside" ariaLabelledby="warnTitleOutsideTitle">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>
              <h2 id="warnTitleOutsideTitle">Operación exitosa</h2>
            </DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando ariaLabelledby referencia varios ids', () => {
        // `aria-labelledby` admite una lista separada por espacios y el nombre
        // es lo que aportan todos juntos.
        render(
          <DModal name="warnMultiRef" ariaLabelledby="warnPart1 warnPart2">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>
              <h2 id="warnPart1">Trans</h2>
              <span id="warnPart2">ferencia</span>
            </DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando ariaLabelledby lleva espacios alrededor', () => {
        render(
          <DModal name="warnPadded" ariaLabelledby=" warnPaddedTitle ">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>
              <h2 id="warnPaddedTitle">Operación exitosa</h2>
            </DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('no avisa cuando el título referenciado se nombra con su propio aria-label', () => {
        // El nombre de un elemento referenciado sale de su `aria-label` antes
        // que de su contenido: sin texto, pero nombrado.
        render(
          <DModal name="warnAuthorLabel" ariaLabelledby="warnAuthorLabelTitle">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>
              {/* El aria-label le da nombre aunque no tenga contenido: es justo
                  el caso que se comprueba. */}
              {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
              <h2 id="warnAuthorLabelTitle" aria-label="Transfer complete" />
            </DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('avisa cuando el único texto del header está en un descendiente aria-hidden', () => {
        // `textContent` lo daría por nombrado, pero un lector de pantalla no ve
        // ese texto y el diálogo se queda sin nombre.
        render(
          <DModal name="warnHiddenText">
            <DModal.Header><span aria-hidden="true">Invisible</span></DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('avisa cuando el único texto del header está en un descendiente con hidden', () => {
        render(
          <DModal name="warnHiddenAttr">
            <DModal.Header><span hidden>Invisible</span></DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('this dialog has no accessible name'),
        );
      });

      it('no avisa cuando el texto del header viene del aria-label de un hijo', () => {
        render(
          <DModal name="warnChildLabel">
            <DModal.Header><span aria-label="Desde el hijo" /></DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('avisa cuando ariaLabelledby apunta a un id que no existe', () => {
        render(
          <DModal name="warnBadRef" ariaLabelledby="noSuchTitle">
            <DModal.Header>Cabecera</DModal.Header>
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledWith(
          expect.stringContaining('its ariaLabelledby points to "noSuchTitle"'),
        );
      });

      it('no avisa cuando lleva ariaLabel', () => {
        render(
          <DModal name="warnAriaLabel" ariaLabel="Filtros">
            <DModal.Header showCloseButton onClose={() => {}} />
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).not.toHaveBeenCalled();
      });

      it('solo avisa una vez por diálogo', () => {
        const { unmount } = render(
          <DModal name="warnOnce">
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );
        unmount();

        render(
          <DModal name="warnOnce">
            <DModal.Body>Test Body</DModal.Body>
          </DModal>,
        );

        expect(warn).toHaveBeenCalledTimes(1);
      });
    });

    it('usa ariaLabel como nombre cuando no hay título', () => {
      render(
        <DModal name="myModal" ariaLabel="Confirmación">
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );

      const dialog = screen.getByRole('dialog', { name: 'Confirmación' });
      expect(dialog).toHaveAttribute('aria-label', 'Confirmación');
      expect(dialog).not.toHaveAttribute('aria-labelledby');
    });

    it('enfoca el contenedor al abrir', () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );

      expect(screen.getByRole('dialog')).toHaveFocus();
    });

    it('no quita el foco a un hijo con autoFocus', () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Test Header</DModal.Header>
          <DModal.Body>
            {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
            <input aria-label="Nombre" autoFocus />
          </DModal.Body>
        </DModal>,
      );

      expect(screen.getByRole('textbox', { name: 'Nombre' })).toHaveFocus();
    });

    describe('dentro de DContextProvider', () => {
      function ExampleModal() {
        const { closePortal } = useDPortalContext();
        return (
          <DModal name="exampleModal">
            <DModal.Header showCloseButton onClose={closePortal}>Test Header</DModal.Header>
            <DModal.Body>
              <button type="button">Primero</button>
              <button type="button">Último</button>
            </DModal.Body>
          </DModal>
        );
      }

      function EmptyExample() {
        return (
          <DModal name="exampleModalEmpty">
            <DModal.Header>Sin enfocables</DModal.Header>
            <DModal.Body>Solo texto</DModal.Body>
          </DModal>
        );
      }

      function HiddenInputExample() {
        return (
          <DModal name="exampleModalHiddenInput">
            <DModal.Header>Con input oculto</DModal.Header>
            <DModal.Body>
              <button type="button">Primero</button>
              <button type="button">Último</button>
              <input type="hidden" name="token" value="abc" />
            </DModal.Body>
          </DModal>
        );
      }

      function BoxFileExample() {
        return (
          <DModal name="exampleModalBoxFile">
            <DModal.Header>Con DBoxFile</DModal.Header>
            <DModal.Body>
              <button type="button">Primero</button>
              <DBoxFile accept={{ 'image/*': [] }}>Arrastra un archivo</DBoxFile>
            </DModal.Body>
          </DModal>
        );
      }

      // Solo la pestaña activa lleva tabindex="0": las inactivas no pueden ser
      // ni el primer ni el último candidato del bucle.
      function TabsExample() {
        return (
          <DModal name="exampleModalTabs">
            <DModal.Header>Con DTabs</DModal.Header>
            <DModal.Body>
              <DTabs
                options={[
                  { label: 'Tab 1', tab: 'tab1' },
                  { label: 'Tab 2', tab: 'tab2' },
                  { label: 'Tab 3', tab: 'tab3' },
                ]}
                defaultSelected="tab2"
              />
            </DModal.Body>
          </DModal>
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

      async function openModal(portal: keyof Portals = 'example') {
        const user = userEvent.setup();
        render(
          <DContextProvider
            availablePortals={{
              example: ExampleModal,
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
        const { dialog } = await openModal();

        expect(dialog).toHaveFocus();
        expect(dialog).toContainElement(document.activeElement as HTMLElement);
      });

      it('al abrir, Tab va al primer enfocable', async () => {
        const { user } = await openModal();

        await user.tab();
        expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
      });

      it('al abrir, Shift+Tab va al último enfocable', async () => {
        const { user } = await openModal();

        await user.tab({ shift: true });
        expect(screen.getByRole('button', { name: 'Último' })).toHaveFocus();
      });

      it('el bucle de Tab vuelve del último al primero y del primero al último', async () => {
        const { user } = await openModal();
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
          const { user, dialog } = await openModal(portal);

          await user.tab();
          expect(getFirst()).toHaveFocus();
          dialog.focus();
          await user.tab({ shift: true });
          expect(getLast()).toHaveFocus();
        });

        it('el bucle va del último al primero y del primero al último', async () => {
          const { user, dialog } = await openModal(portal);
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
        const { user, dialog } = await openModal('empty');

        expect(dialog).toHaveFocus();
        await expect(user.tab()).resolves.toBeUndefined();
        expect(dialog).toHaveFocus();
        await expect(user.tab({ shift: true })).resolves.toBeUndefined();
        expect(dialog).toHaveFocus();
      });
    });
  });
});

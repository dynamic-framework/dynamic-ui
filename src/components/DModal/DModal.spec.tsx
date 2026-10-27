/// <reference types="@testing-library/jest-dom" />

import { useState } from 'react';
import {
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
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
            aria-labelledby="myModalLabel"
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
                    data-d-label-slot=""
                    id="myModalLabel"
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
      expect(dialog).toHaveAttribute('aria-labelledby', 'myModalLabel');
    });

    it('respeta el id que el consumidor ya puso en el título, sin duplicarlo', () => {
      render(
        <DModal name="myModal">
          <DModal.Header>
            <span id="myModalLabel">Test Header</span>
          </DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );

      expect(screen.getByRole('dialog', { name: 'Test Header' })).toBeInTheDocument();
      expect(document.querySelectorAll('[id="myModalLabel"]')).toHaveLength(1);
      expect(document.getElementById('myModalLabel')?.tagName).toBe('SPAN');
    });

    it('sigue al título cuando este pone o quita el id por su propio estado', async () => {
      const control: { setOwnLabel?: (value: boolean) => void } = {};
      function Title() {
        const [ownLabel, setOwnLabel] = useState(false);
        control.setOwnLabel = setOwnLabel;
        return <span id={ownLabel ? 'myModalLabel' : undefined}>Test Header</span>;
      }
      render(
        <DModal name="myModal">
          <DModal.Header><Title /></DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );
      const labels = () => document.querySelectorAll('[id="myModalLabel"]');

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

    it('respeta el id cuando el título está fuera del header', () => {
      render(
        <DModal name="myModal">
          <DModal.Header showCloseButton onClose={() => {}} />
          <DModal.Body>
            <h2 id="myModalLabel">Operación exitosa</h2>
            <p>Test Body</p>
          </DModal.Body>
        </DModal>,
      );

      // El header no puede quedarse con el id: sería el primero en orden de
      // documento y el diálogo se quedaría sin nombre.
      expect(document.querySelectorAll('[id="myModalLabel"]')).toHaveLength(1);
      expect(document.getElementById('myModalLabel')?.tagName).toBe('H2');
    });

    it('cede el id al título de fuera del header aunque el header tenga contenido', () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Cabecera sin id</DModal.Header>
          <DModal.Body>
            <h2 id="myModalLabel">Operación exitosa</h2>
          </DModal.Body>
        </DModal>,
      );

      expect(document.querySelectorAll('[id="myModalLabel"]')).toHaveLength(1);
      expect(screen.getByRole('dialog', { name: 'Operación exitosa' })).toBeInTheDocument();
    });

    it('suelta y recupera el id cuando el título de fuera del header monta y desmonta', async () => {
      const control: { setShowTitle?: (value: boolean) => void } = {};
      function Example() {
        const [showTitle, setShowTitle] = useState(false);
        control.setShowTitle = setShowTitle;
        return (
          <DModal name="myModal">
            <DModal.Header>Cabecera</DModal.Header>
            <DModal.Body>
              {showTitle && <h2 id="myModalLabel">Operación exitosa</h2>}
            </DModal.Body>
          </DModal>
        );
      }
      render(<Example />);
      const labels = () => document.querySelectorAll('[id="myModalLabel"]');

      expect(labels()).toHaveLength(1);
      expect(labels()[0].tagName).toBe('DIV');

      act(() => control.setShowTitle?.(true));
      await waitFor(() => expect(labels()[0].tagName).toBe('H2'));
      expect(labels()).toHaveLength(1);

      act(() => control.setShowTitle?.(false));
      await waitFor(() => expect(labels()[0]?.tagName).toBe('DIV'));
      expect(labels()).toHaveLength(1);
      expect(screen.getByRole('dialog', { name: 'Cabecera' })).toBeInTheDocument();
    });

    it('monta con un name que no es un selector CSS válido', () => {
      // Interpolar el id en el selector lanzaría SyntaxError y el diálogo no
      // llegaría a montar.
      expect(() => render(
        <DModal name={'account"edit'}>
          <DModal.Header>Editar</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      )).not.toThrow();

      expect(screen.getByRole('dialog', { name: 'Editar' })).toBeInTheDocument();
      expect(document.querySelectorAll('[id=\'account"editLabel\']')).toHaveLength(1);
    });

    it('con dos headers montados, solo el primero adopta el id', async () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Primero</DModal.Header>
          <DModal.Header>Segundo</DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );
      const labels = () => document.querySelectorAll('[id="myModalLabel"]');

      // Sin un criterio estable los dos se lo quitarían y lo reclamarían en
      // bucle: este await no llegaría a resolverse.
      await act(async () => { await Promise.resolve(); });

      expect(labels()).toHaveLength(1);
      expect(labels()[0]).toHaveTextContent('Primero');
      expect(screen.getByRole('dialog', { name: 'Primero' })).toBeInTheDocument();
    });

    it('con dos headers, un id explícito del consumidor manda sobre ambos', async () => {
      render(
        <DModal name="myModal">
          <DModal.Header>Primero</DModal.Header>
          <DModal.Header><span id="myModalLabel">Segundo</span></DModal.Header>
          <DModal.Body>Test Body</DModal.Body>
        </DModal>,
      );
      const labels = () => document.querySelectorAll('[id="myModalLabel"]');

      await act(async () => { await Promise.resolve(); });

      expect(labels()).toHaveLength(1);
      expect(labels()[0].tagName).toBe('SPAN');
      expect(screen.getByRole('dialog', { name: 'Segundo' })).toBeInTheDocument();
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

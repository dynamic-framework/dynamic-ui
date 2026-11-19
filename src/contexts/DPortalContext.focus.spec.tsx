/*
 * El foco al abrir y al cerrar un panel del portal (#1293).
 *
 * El foco vuelve al disparador porque el panel es un `<dialog>` abierto con
 * `showModal()` y se CIERRA antes de que React lo quite del documento. Esa
 * devolución la hace el navegador, y jsdom no la tiene: aquí se comprueban las
 * dos condiciones que la hacen posible —no desenfocar al abrir, y cerrar con el
 * nodo todavía puesto—, no su resultado.
 *
 * Va en su propio archivo porque importar `DModal` registra el renderer
 * animado del stack, y con él un cierre deja de ser síncrono.
 */
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import type { FC } from 'react';

import { DContextProvider } from './DContext';
import { useDPortalContext, type PortalProps } from './DPortalContext';
import DModal from '../components/DModal/DModal';

type Payloads = { example: { title: string } };

function PlainPortal({ payload }: PortalProps<Payloads['example']>) {
  return <div className="portal">{payload.title}</div>;
}

function ModalPortal() {
  return (
    <DModal name="example">
      <DModal.Body>Portal content</DModal.Body>
    </DModal>
  );
}

function Opener() {
  const { openPortal, closePortal } = useDPortalContext<Payloads>();
  return (
    <>
      <button type="button" onClick={() => openPortal('example', { title: 'Portal content' })}>Open</button>
      <button type="button" onClick={closePortal}>Close</button>
    </>
  );
}

function renderWith(Portal: FC<PortalProps<Payloads['example']>>) {
  return render(
    <DContextProvider availablePortals={{ example: Portal }}>
      <Opener />
    </DContextProvider>,
  );
}

describe('el foco al abrir y al cerrar un panel del portal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('deja el foco en el disparador al abrir', async () => {
    // `openPortal` desenfocaba el disparador, así que el elemento que el
    // navegador recuerda al abrir el diálogo era `<body>`, y al cerrarlo el
    // foco no volvía a ninguna parte.
    renderWith(PlainPortal);
    const open = screen.getByText('Open');
    open.focus();
    fireEvent.click(open);

    await screen.findByText('Portal content');
    expect(open).toHaveFocus();
  });

  it('abre el panel como diálogo modal', async () => {
    renderWith(ModalPortal);
    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Portal content');

    expect(document.querySelector('#d-portal dialog')).toHaveAttribute('open');
  });

  it.each([
    ['closePortal', () => fireEvent.click(screen.getByText('Close'))],
    ['Escape', () => fireEvent.keyDown(window, { key: 'Escape' })],
  ])('cierra el diálogo con el nodo aún en el documento al cerrar con %s', async (_, close) => {
    renderWith(ModalPortal);
    fireEvent.click(screen.getByText('Open'));
    await screen.findByText('Portal content');

    const dialog = document.querySelector('#d-portal dialog') as HTMLDialogElement;
    let openInDocument: boolean | undefined;
    dialog.addEventListener('close', () => {
      openInDocument = document.contains(dialog);
    });

    close();
    await waitFor(() => expect(document.querySelector('#d-portal dialog')).not.toBeInTheDocument());
    // Si el panel se desmontara sin cerrarse no habría evento y esto sería
    // `undefined`: es justo el caso que dejaba el foco en `<body>`.
    expect(openInDocument).toBe(true);
  });
});

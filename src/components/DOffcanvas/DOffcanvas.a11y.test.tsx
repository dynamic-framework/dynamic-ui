import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DOffcanvas from '.';

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

describe('<DOffcanvas /> a11y', () => {
  it('should have no violations with header, body, and footer', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        <DOffcanvas.Footer>Test Footer</DOffcanvas.Footer>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a close button', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header showCloseButton onClose={jest.fn()}>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when opened from the top with a static backdrop', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas" openFrom="top" staticBackdrop>
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when scrollable with a custom width', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas" scrollable width="320px">
        <DOffcanvas.Header>
          <span id="myOffcanvasLabel">Test Header</span>
        </DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        <DOffcanvas.Footer actionPlacement="start">Test Footer</DOffcanvas.Footer>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('no tiene violaciones cuando el header no lleva id y el diálogo toma su nombre', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas">
        <DOffcanvas.Header>Test Header</DOffcanvas.Header>
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('no tiene violaciones con el título fuera del header y ariaLabelledby', async () => {
    const { container } = render(
      <DOffcanvas name="myDOffcanvas" ariaLabelledby="successTitle">
        <DOffcanvas.Header showCloseButton onClose={() => {}} />
        <DOffcanvas.Body>
          <h2 id="successTitle">Operación exitosa</h2>
          <p>Test Body</p>
        </DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toEqual(
      expect.arrayContaining(['duplicate-id-aria', 'aria-dialog-name']),
    );
  });

  it('el id del título es único, aunque dos diálogos compartan name', async () => {
    const { container } = render(
      <>
        <DOffcanvas name="dup">
          <DOffcanvas.Header>Primero</DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>
        <DOffcanvas name="dup">
          <DOffcanvas.Header>Segundo</DOffcanvas.Header>
          <DOffcanvas.Body>Test Body</DOffcanvas.Body>
        </DOffcanvas>
      </>,
    );

    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).not.toContain('duplicate-id-aria');
  });

  it('avisa que falta el nombre cuando el header está vacío y no hay ariaLabel', async () => {
    const { container } = render(
      <DOffcanvas name="doffcanvasNoName">
        <DOffcanvas.Header showCloseButton onClose={() => {}} />
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    // El contenedor del header adopta el id pero está vacío: el diálogo se
    // queda sin nombre. No lo puede resolver el componente, hace falta un
    // título o `ariaLabel`.
    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('avisa que falta el nombre cuando no hay header ni ariaLabel', async () => {
    const { container } = render(
      <DOffcanvas name="doffcanvasNoHeader">
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    // Sin header nadie adopta el id y el `aria-labelledby` apunta a un id
    // inexistente: mismo resultado que con el header vacío.
    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('con ariaLabel, el header vacío ya no deja al diálogo sin nombre', async () => {
    const { container } = render(
      <DOffcanvas name="doffcanvasNamed" ariaLabel="Advanced filters">
        <DOffcanvas.Header showCloseButton onClose={() => {}} />
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('no tiene violaciones sin título cuando lleva ariaLabel', async () => {
    const { container } = render(
      <DOffcanvas name="myOffcanvas" ariaLabel="Filtros">
        <DOffcanvas.Body>Test Body</DOffcanvas.Body>
      </DOffcanvas>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });
});

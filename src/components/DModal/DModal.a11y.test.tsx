import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DModal from '.';

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

describe('<DModal /> a11y', () => {
  it('should have no violations with header, body, and footer', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
        <DModal.Footer>Test Footer</DModal.Footer>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a close button', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header showCloseButton onClose={jest.fn()}>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when centered, scrollable and sized', async () => {
    const { container } = render(
      <DModal name="myModal" centered scrollable size="lg">
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when fullscreen with a static backdrop', async () => {
    const { container } = render(
      <DModal name="myModal" fullScreen fullScreenFrom="md" staticBackdrop>
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
        <DModal.Footer actionPlacement="end">Test Footer</DModal.Footer>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('no tiene violaciones cuando el header no lleva id y el diálogo toma su nombre', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header>Test Header</DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('no tiene violaciones con el título fuera del header y ariaLabelledby', async () => {
    const { container } = render(
      <DModal name="myDModal" ariaLabelledby="successTitle">
        <DModal.Header showCloseButton onClose={() => {}} />
        <DModal.Body>
          <h2 id="successTitle">Operación exitosa</h2>
          <p>Test Body</p>
        </DModal.Body>
      </DModal>,
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

    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).not.toContain('duplicate-id-aria');
  });

  it('avisa que falta el nombre cuando el header está vacío y no hay ariaLabel', async () => {
    const { container } = render(
      <DModal name="dmodalNoName">
        <DModal.Header showCloseButton onClose={() => {}} />
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    // El contenedor del header adopta el id pero está vacío: el diálogo se
    // queda sin nombre. No lo puede resolver el componente, hace falta un
    // título o `ariaLabel`.
    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('avisa que falta el nombre cuando no hay header ni ariaLabel', async () => {
    const { container } = render(
      <DModal name="dmodalNoHeader">
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    // Sin header nadie adopta el id y el `aria-labelledby` apunta a un id
    // inexistente: mismo resultado que con el header vacío.
    const results = await axe(container);
    expect(results.violations.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('con ariaLabel, el header vacío ya no deja al diálogo sin nombre', async () => {
    const { container } = render(
      <DModal name="dmodalNamed" ariaLabel="Advanced filters">
        <DModal.Header showCloseButton onClose={() => {}} />
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });

  it('no tiene violaciones sin título cuando lleva ariaLabel', async () => {
    const { container } = render(
      <DModal name="myModal" ariaLabel="Confirmación">
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-dialog-name');
  });
});

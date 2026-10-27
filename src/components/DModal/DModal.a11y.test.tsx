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

  it('no duplica el id cuando el consumidor ya lo puso en el título', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header>
          <span id="myModalLabel">Test Header</span>
        </DModal.Header>
        <DModal.Body>Test Body</DModal.Body>
      </DModal>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toEqual(
      expect.arrayContaining(['duplicate-id-aria', 'aria-dialog-name']),
    );
  });

  it('no duplica el id cuando el título está fuera del header', async () => {
    const { container } = render(
      <DModal name="myModal">
        <DModal.Header showCloseButton onClose={() => {}} />
        <DModal.Body>
          <h2 id="myModalLabel">Operación exitosa</h2>
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

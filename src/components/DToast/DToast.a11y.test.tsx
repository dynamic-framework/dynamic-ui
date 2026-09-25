import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import axe from '../../../tests/a11y/axeHelper';
import DToast from './DToast';

describe('<DToast /> a11y', () => {
  it('should have no violations with plain text content', async () => {
    const { container } = render(<DToast>Mensaje de prueba</DToast>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with header and body sections', async () => {
    const { container } = render(
      <DToast>
        <DToast.Header>Notification title</DToast.Header>
        <DToast.Body>Notification body content</DToast.Body>
      </DToast>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with a custom className', async () => {
    const { container } = render(<DToast className="extra-clase">Contenido</DToast>);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it.each(['status', 'none'] as const)('should have no violations with role="%s"', async (role) => {
    const { container } = render(
      <DToast role={role}>
        <DToast.Header>Transferencia enviada</DToast.Header>
        <DToast.Body>El dinero llegará en unos minutos.</DToast.Body>
      </DToast>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

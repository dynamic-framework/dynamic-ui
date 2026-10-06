import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DProgress from './DProgress';

describe('<DProgress /> a11y', () => {
  it('should have no violations with default props', async () => {
    const { container } = render(
      <DProgress currentValue={33} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with hideCurrentValue', async () => {
    const { container } = render(
      <DProgress currentValue={80} hideCurrentValue />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with striped animation and custom min/max', async () => {
    const { container } = render(
      <DProgress
        currentValue={25}
        minValue={0}
        maxValue={50}
        enableStripedAnimation
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with ariaLabel', async () => {
    const { container } = render(
      <DProgress currentValue={40} ariaLabel="Tiempo restante" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations with ariaLabelledBy', async () => {
    const { container } = render(
      <div>
        <span id="upload-title">Carga de archivos</span>
        <DProgress currentValue={40} ariaLabelledBy="upload-title" />
      </div>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

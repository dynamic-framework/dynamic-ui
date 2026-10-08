import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DSkeleton from './DSkeleton';

function TransactionSkeleton() {
  return (
    <DSkeleton direction="horizontal" gap={16}>
      <DSkeleton.Circle size={40} />
      <DSkeleton.Text lines={2} size="sm" widths={['70%', '40%']} className="flex-grow-1" />
      <DSkeleton.Block width={64} height={16} />
    </DSkeleton>
  );
}

describe('<DSkeleton /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DSkeleton>
        <DSkeleton.Text />
      </DSkeleton>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with a composed layout and custom label', async () => {
    const { container } = render(
      <DSkeleton ariaLabel="Cargando perfil" animation="wave" color="primary">
        <div className="d-flex gap-3 align-items-center">
          <DSkeleton.Circle size={48} />
          <DSkeleton.Text lines={2} />
        </div>
        <DSkeleton.Block height={160} rounded={3} />
      </DSkeleton>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations as an iterator of a custom item component', async () => {
    const { container } = render(
      <DSkeleton
        component={TransactionSkeleton}
        items={4}
        ariaLabel="Cargando movimientos"
        animation="wave"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when primitives are used standalone', async () => {
    const { container } = render(
      <div>
        <DSkeleton.Circle />
        <DSkeleton.Block />
        <DSkeleton.Text />
      </div>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

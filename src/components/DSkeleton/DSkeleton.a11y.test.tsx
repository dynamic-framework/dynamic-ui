import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DSkeleton from './DSkeleton';

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

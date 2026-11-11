/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axe from '../../../tests/a11y/axeHelper';
import DCollapse from '.';

describe('<DCollapse /> a11y', () => {
  const HeaderMock = <>Header Content</>;
  const BodyMock = <>Collapsible Body</>;

  it('should have no violations when collapsed by default', async () => {
    const { container } = render(
      <DCollapse Component={HeaderMock}>
        {BodyMock}
      </DCollapse>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when expanded', async () => {
    const { container } = render(
      <DCollapse Component={HeaderMock} defaultCollapsed={false}>
        {BodyMock}
      </DCollapse>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations without body content', async () => {
    const { container } = render(
      <DCollapse Component={HeaderMock} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('declara un aria-controls que apunta a un elemento existente', async () => {
    const { container } = render(
      <DCollapse Component={HeaderMock}>
        {BodyMock}
      </DCollapse>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(results.passes.map(({ id }) => id)).toContain('aria-valid-attr-value');
  });

  it('no tiene violaciones tras expandir con el teclado', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <DCollapse Component={HeaderMock}>
        {BodyMock}
      </DCollapse>,
    );

    await user.tab();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

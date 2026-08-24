/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
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
});

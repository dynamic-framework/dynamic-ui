/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DInputSearch from './DInputSearch';

describe('<DInputSearch /> a11y', () => {
  it('has no violations with default props', async () => {
    const { container } = render(
      <DInputSearch label="Search input" />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations with a value set', async () => {
    const { container } = render(
      <DInputSearch label="Search input" value="policy" onChange={jest.fn()} />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <DInputSearch label="Search input" disabled />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no violations when invalid', async () => {
    const { container } = render(
      <DInputSearch label="Search input" invalid />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

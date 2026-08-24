/// <reference types="@testing-library/jest-dom" />

import { render } from '@testing-library/react';
import axe from '../../../tests/a11y/axeHelper';
import DDataStateWrapper from './DDataStateWrapper';

describe('<DDataStateWrapper /> a11y', () => {
  it('should have no violations in loading state', async () => {
    const { container } = render(
      <DDataStateWrapper isLoading isError={false} data={undefined}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in error state', async () => {
    const onRetry = jest.fn();
    const { container } = render(
      <DDataStateWrapper isLoading={false} isError data={undefined} onRetry={onRetry}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations in empty state', async () => {
    const { container } = render(
      <DDataStateWrapper isLoading={false} isError={false} data={[]}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have no violations when rendering data (success state)', async () => {
    const { container } = render(
      <DDataStateWrapper isLoading={false} isError={false} data={['a', 'b']}>
        {(data) => <ul>{data.map((item) => <li key={item}>{item}</li>)}</ul>}
      </DDataStateWrapper>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

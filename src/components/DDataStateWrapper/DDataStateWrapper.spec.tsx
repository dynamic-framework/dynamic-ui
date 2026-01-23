/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import { DDataStateWrapper } from './DDataStateWrapper';

describe('<DDataStateWrapper />', () => {
  it('renders spinner when loading', () => {
    const { container } = render(
      <DDataStateWrapper isLoading isError={false} data={undefined}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    expect(container.querySelector('.spinner-border')).toBeInTheDocument();
  });

  it('renders default error state and calls onRetry', () => {
    const onRetry = jest.fn();
    render(
      <DDataStateWrapper isLoading={false} isError data={undefined} onRetry={onRetry}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    const retryBtn = screen.getByRole('button');
    fireEvent.click(retryBtn);
    expect(onRetry).toHaveBeenCalled();
  });

  it('renders default empty state when no data', () => {
    const { container } = render(
      <DDataStateWrapper isLoading={false} isError={false} data={[]}>
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    expect(container.querySelector('.d-icon')).toBeInTheDocument();
  });

  it('renders children when data exists', () => {
    render(
      <DDataStateWrapper isLoading={false} isError={false} data={[1, 2, 3]}>
        {(data) => (
          <div>
            items:
            {data.length}
          </div>
        )}
      </DDataStateWrapper>,
    );

    expect(screen.getByText(/items:\s*3/i)).toBeInTheDocument();
  });

  it('supports custom render overrides', () => {
    const { getByText } = render(
      <DDataStateWrapper
        isLoading={false}
        isError={false}
        data={[]}
        renderEmpty={<div>Custom Empty</div>}
      >
        {() => <div>content</div>}
      </DDataStateWrapper>,
    );

    expect(getByText('Custom Empty')).toBeInTheDocument();
  });
});

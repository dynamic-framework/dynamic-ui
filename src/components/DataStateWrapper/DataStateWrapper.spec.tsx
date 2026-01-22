/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import { DataStateWrapper } from './DataStateWrapper';

describe('<DataStateWrapper />', () => {
  it('renders spinner when loading', () => {
    const { container } = render(
      <DataStateWrapper isLoading isError={false} data={undefined}>
        {() => <div>content</div>}
      </DataStateWrapper>,
    );

    expect(container.querySelector('.spinner-border')).toBeInTheDocument();
  });

  it('renders default error state and calls onRetry', () => {
    const onRetry = jest.fn();
    render(
      <DataStateWrapper isLoading={false} isError data={undefined} onRetry={onRetry}>
        {() => <div>content</div>}
      </DataStateWrapper>,
    );

    const retryBtn = screen.getByRole('button');
    fireEvent.click(retryBtn);
    expect(onRetry).toHaveBeenCalled();
  });

  it('renders default empty state when no data', () => {
    const { container } = render(
      <DataStateWrapper isLoading={false} isError={false} data={[]}>
        {() => <div>content</div>}
      </DataStateWrapper>,
    );

    expect(container.querySelector('.d-icon')).toBeInTheDocument();
  });

  it('renders children when data exists', () => {
    render(
      <DataStateWrapper isLoading={false} isError={false} data={[1, 2, 3]}>
        {(data) => (
          <div>
            items:
            {data.length}
          </div>
        )}
      </DataStateWrapper>,
    );

    expect(screen.getByText(/items:\s*3/i)).toBeInTheDocument();
  });

  it('supports custom render overrides', () => {
    const { getByText } = render(
      <DataStateWrapper
        isLoading={false}
        isError={false}
        data={[]}
        renderEmpty={<div>Custom Empty</div>}
      >
        {() => <div>content</div>}
      </DataStateWrapper>,
    );

    expect(getByText('Custom Empty')).toBeInTheDocument();
  });
});

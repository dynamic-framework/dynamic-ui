/// <reference types="@testing-library/jest-dom" />

import { render, screen, fireEvent } from '@testing-library/react';
import DDataStateWrapper from './DDataStateWrapper';

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

  describe('messages prop', () => {
    it('uses messages.loading as aria-label for the spinner', () => {
      render(
        <DDataStateWrapper
          isLoading
          isError={false}
          data={undefined}
          messages={{ loading: 'Cargando...' }}
        >
          {() => <div>content</div>}
        </DDataStateWrapper>,
      );

      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Cargando...');
    });

    it('renders messages.empty as the empty-state message', () => {
      render(
        <DDataStateWrapper
          isLoading={false}
          isError={false}
          data={[]}
          messages={{ empty: 'Sin datos disponibles.' }}
        >
          {() => <div>content</div>}
        </DDataStateWrapper>,
      );

      expect(screen.getByText('Sin datos disponibles.')).toBeInTheDocument();
    });

    it('renders messages.error as the error-state message', () => {
      render(
        <DDataStateWrapper
          isLoading={false}
          isError
          data={undefined}
          messages={{ error: 'Ocurrió un error inesperado.' }}
        >
          {() => <div>content</div>}
        </DDataStateWrapper>,
      );

      expect(screen.getByText('Ocurrió un error inesperado.')).toBeInTheDocument();
    });

    it('renders messages.retry as the retry-button label', () => {
      render(
        <DDataStateWrapper
          isLoading={false}
          isError
          data={undefined}
          onRetry={jest.fn()}
          messages={{ retry: 'Reintentar' }}
        >
          {() => <div>content</div>}
        </DDataStateWrapper>,
      );

      expect(screen.getByRole('button', { name: /Reintentar/i })).toBeInTheDocument();
    });

    it('renderError overrides messages.error when both are supplied', () => {
      render(
        <DDataStateWrapper
          isLoading={false}
          isError
          data={undefined}
          renderError={<div>Custom Error UI</div>}
          messages={{ error: 'Ocurrió un error inesperado.' }}
        >
          {() => <div>content</div>}
        </DDataStateWrapper>,
      );

      expect(screen.getByText('Custom Error UI')).toBeInTheDocument();
      expect(screen.queryByText('Ocurrió un error inesperado.')).not.toBeInTheDocument();
    });
  });
});

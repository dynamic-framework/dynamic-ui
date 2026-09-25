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

  describe('single resource', () => {
    type Detail = { id: string; title: string };
    const detail: Detail = { id: '1', title: 'Cuenta de ahorros' };

    it('passes the object itself to the render prop', () => {
      render(
        <DDataStateWrapper isLoading={false} isError={false} data={detail}>
          {(item) => <h2>{item.title}</h2>}
        </DDataStateWrapper>,
      );
      expect(screen.getByRole('heading', { name: 'Cuenta de ahorros' })).toBeInTheDocument();
    });

    it.each([
      ['undefined', undefined],
      ['null', null],
    ])('renders the empty state when the object is %s', (_, value) => {
      render(
        <DDataStateWrapper<Detail> isLoading={false} isError={false} data={value}>
          {(item) => <h2>{item.title}</h2>}
        </DDataStateWrapper>,
      );
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
      expect(screen.getByText(/no data/i)).toBeInTheDocument();
    });

    it('keeps loading and error ahead of the data check', () => {
      const { rerender } = render(
        <DDataStateWrapper isLoading isError={false} data={detail}>
          {(item) => <h2>{item.title}</h2>}
        </DDataStateWrapper>,
      );
      expect(screen.getByRole('status')).toBeInTheDocument();
      rerender(
        <DDataStateWrapper isLoading={false} isError data={detail}>
          {(item) => <h2>{item.title}</h2>}
        </DDataStateWrapper>,
      );
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('treats an empty object as data, not as empty', () => {
      render(
        <DDataStateWrapper isLoading={false} isError={false} data={{}}>
          {() => <p>Sin campos</p>}
        </DDataStateWrapper>,
      );
      expect(screen.getByText('Sin campos')).toBeInTheDocument();
    });

    it('types the render prop after the shape of data', () => {
      // Compile-time checks: ts-jest fails the suite if these stop holding.
      const list = (
        <DDataStateWrapper isLoading={false} isError={false} data={[detail]}>
          {(items) => items.map((item) => <p key={item.id}>{item.title}</p>)}
        </DDataStateWrapper>
      );
      const single = (
        <DDataStateWrapper isLoading={false} isError={false} data={detail}>
          {(item) => <p>{item.title}</p>}
        </DDataStateWrapper>
      );
      /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
      const wrong = (
        <DDataStateWrapper isLoading={false} isError={false} data={detail}>
          {/* @ts-expect-error a single object is not an array */}
          {(items) => items.map(() => null)}
        </DDataStateWrapper>
      );
      /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return */
      expect([list, single, wrong]).toHaveLength(3);
    });
  });
});

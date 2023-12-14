/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

import type { PropsWithChildren, FC } from 'react';

import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';
import usePortal from '../hooks/usePortal';
import useStackState from '../hooks/useStackState';

type OffcanvasComponent<P = any> = FC<OffcanvasProps<P>>;

type OffcanvasAvailableList<T extends Record<string, unknown>> = {
  [K in keyof T]: OffcanvasComponent<T[K]>;
};

type Props<T extends Record<string, unknown>> = PropsWithChildren<{
  portalName: string;
  availableOffcanvas: OffcanvasAvailableList<T>;
}>;
type OffcanvasStackItem<N extends string = string, P = any> = {
  offcanvasName: N;
  Component: OffcanvasComponent<P>;
  payload: P;
};
type OpenOffcanvasFunction<P = unknown> = (name: string, payload: P) => void;
type CloseOffcanvasFunction = () => void;
type OffcanvasContextType<T extends Record<string, unknown>> = {
  stack: OffcanvasStackItem<string, T[keyof T]>[];
  openOffcanvas: OpenOffcanvasFunction;
  closeOffcanvas: CloseOffcanvasFunction;
};
export type OffcanvasProps<P = any> = {
  name: string;
  payload: P;
  openOffcanvas: OpenOffcanvasFunction<P>;
  closeOffcanvas: CloseOffcanvasFunction;
};

export const DOffcanvasContext = createContext<OffcanvasContextType<any> | undefined>(undefined);

export function DOffcanvasContextProvider<T extends Record<string, unknown>>(
  {
    portalName,
    children,
    availableOffcanvas,
  }: Props<T>,
) {
  const { created } = usePortal(portalName);
  const [stack, { push, pop, peek }] = useStackState<OffcanvasStackItem<string, T[keyof T]>>([]);
  useDisableBodyScrollEffect(Boolean(stack.length));

  const openOffcanvas = useCallback<OpenOffcanvasFunction<T[keyof T]>>(
    (offcanvasName, payload) => {
      const Component = (
        availableOffcanvas[offcanvasName as keyof T] as OffcanvasComponent<T[keyof T]>
      );
      if (!Component) {
        throw new Error(`there is no component for offcanvas ${offcanvasName}`);
      }
      push({
        offcanvasName,
        Component,
        payload,
      });
    },
    [availableOffcanvas, push],
  );

  const closeOffcanvas = useCallback<OffcanvasContextType<T>['closeOffcanvas']>(
    () => {
      const stackItem = peek();
      if (!stackItem) {
        return;
      }
      pop();
    },
    [peek, pop],
  );

  const value = useMemo(() => ({
    stack,
    openOffcanvas,
    closeOffcanvas,
  }), [stack, openOffcanvas, closeOffcanvas]) as OffcanvasContextType<any>;

  return (
    <DOffcanvasContext.Provider value={value}>
      {children}
      {created && createPortal(
        <>
          {stack.map((
            {
              Component,
              offcanvasName,
              payload,
            },
          ) => (
            <Component
              key={offcanvasName}
              name={offcanvasName}
              payload={payload}
              openOffcanvas={openOffcanvas}
              closeOffcanvas={closeOffcanvas}
            />
          ))}
          {!!stack.length && <div className="offcanvas-backdrop fade show" />}
        </>,
        document.getElementById(portalName) as Element,
      )}
    </DOffcanvasContext.Provider>
  );
}

export function useDOffcanvasContext<T extends Record<string, unknown>>(): OffcanvasContextType<T> {
  const context = useContext(DOffcanvasContext) as OffcanvasContextType<T>;

  if (context === undefined) {
    throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
  }

  return context;
}

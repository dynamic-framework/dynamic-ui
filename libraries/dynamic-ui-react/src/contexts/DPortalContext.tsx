/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { createPortal } from 'react-dom';

import type {
  PropsWithChildren,
  FC,
} from 'react';

import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';
import usePortal from '../hooks/usePortal';
import useStackState from '../hooks/useStackState';

type PortalComponent<P = any> = FC<PortalProps<P>>;

type PortalAvailableList<T extends Record<string, unknown>> = {
  [K in keyof T]: PortalComponent<T[K]>;
};

export type PortalContextProps<T extends Record<string, unknown>> = PropsWithChildren<{
  portalName: string;
  availablePortals?: PortalAvailableList<T>;
}>;
type PortalStackItem<N extends string = string, P = any> = {
  name: N;
  Component: PortalComponent<P>;
  payload: P;
};
type OpenPortalFunction<P = unknown> = (name: string, payload: P) => void;
type ClosePortalFunction = () => void;
export type PortalContextType<T extends Record<string, unknown>> = {
  stack: PortalStackItem<string, T[keyof T]>[];
  openPortal: OpenPortalFunction<T[keyof T]>;
  closePortal: ClosePortalFunction;
};

export type PortalProps<P = unknown> = {
  name: string;
  payload: P;
};

export const DPortalContext = createContext<PortalContextType<any> | undefined>(undefined);

export function DPortalContextProvider<T extends Record<string, unknown>>(
  {
    portalName,
    children,
    availablePortals,
  }: PortalContextProps<T>,
) {
  const { created } = usePortal(portalName);
  const [stack, { push, pop, isEmpty }] = useStackState<PortalStackItem<string, T[keyof T]>>([]);
  useDisableBodyScrollEffect(Boolean(stack.length));

  const openPortal = useCallback<PortalContextType<T>['openPortal']>(
    (name, payload) => {
      if (!availablePortals) {
        throw new Error(`there is no component for portal ${name.toString()}`);
      }

      const Component = availablePortals[name as keyof T] as PortalComponent<T[keyof T]>;
      if (!Component) {
        throw new Error(`there is no component for portal ${name.toString()}`);
      }
      push({
        name,
        Component,
        payload,
      });
    },
    [availablePortals, push],
  );

  const closePortal = useCallback<PortalContextType<T>['closePortal']>(
    () => {
      if (isEmpty()) {
        return;
      }
      pop();
    },
    [isEmpty, pop],
  );

  const value = useMemo(() => ({
    stack,
    openPortal,
    closePortal,
  }), [stack, openPortal, closePortal]) as PortalContextType<any>;

  const handleClose = useCallback((target: Element) => {
    if (!(target instanceof HTMLDivElement)) {
      return;
    }
    if (target.classList.contains('portal') && !('bsBackdrop' in target.dataset)) {
      closePortal();
      return;
    }
    if (target.classList.contains('backdrop')) {
      const lastPortal = target.nextElementSibling as HTMLElement;
      if (lastPortal && lastPortal.classList.contains('portal') && !('bsBackdrop' in lastPortal.dataset)) {
        closePortal();
      }
    }
  }, [closePortal]);

  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const lastPortal = document.querySelector(`#${portalName} > div > div:last-child`);
        if (lastPortal) {
          handleClose(lastPortal as HTMLElement);
        }
      }
    };
    if (stack.length !== 0) {
      window.addEventListener('keydown', keyEvent);
    }

    return () => {
      window.removeEventListener('keydown', keyEvent);
    };
  }, [handleClose, portalName, stack.length]);

  return (
    <DPortalContext.Provider value={value}>
      {children}
      {created && createPortal(
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onClick={({ target }) => handleClose(target as Element)}
          onKeyDown={() => {}}
        >
          {stack.map((
            {
              Component,
              name,
              payload,
            },
          ) => (
            <Fragment key={name}>
              <div className="backdrop fade show" />
              <Component
                name={name}
                payload={payload}
              />
            </Fragment>
          ))}
        </div>,
        document.getElementById(portalName) as Element,
      )}
    </DPortalContext.Provider>
  );
}

export function useDPortalContext<T extends Record<string, unknown>>(): PortalContextType<T> {
  const context = useContext(DPortalContext) as PortalContextType<T>;

  if (context === undefined) {
    throw new Error('usePortalContext was used outside of PortalContextProvider');
  }

  return context;
}

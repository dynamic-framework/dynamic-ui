import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo, useState,
} from 'react';
import { createPortal } from 'react-dom';

import type { PropsWithChildren, FC } from 'react';

import useStackState from '../hooks/useStackState';

export type OffcanvasComponent = FC<OffcanvasProps>;
export type OffcanvasAvailableList = Record<string, OffcanvasComponent>;
type Props = PropsWithChildren<{
  portalName: string;
  availableOffcanvas: OffcanvasAvailableList;
}>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type OffcanvasPayload = Record<string, any>;
export type OffcanvasCallbackContext = {
  fromOffcanvas: boolean;
};
export type OffcanvasCallbacks = {
  onBeforeOpen?: (payload?: OffcanvasPayload) => void;
  onAfterOpen?: (payload?: OffcanvasPayload) => void;
  onBeforeClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
  onAfterClose?: (context: OffcanvasCallbackContext, payload?: OffcanvasPayload) => void;
};
export type OffcanvasStackItem = {
  offcanvasName: keyof OffcanvasAvailableList;
  Component: OffcanvasComponent;
  payload: OffcanvasPayload;
  callbacks?: OffcanvasCallbacks;
};
export type OffcanvasConfig = {
  payload: OffcanvasPayload;
  callbacks?: OffcanvasCallbacks;
};
export type OpenOffcanvasFunction = (name: string, config?: OffcanvasConfig) => void;
export type CloseOffcanvasFunction = (context?: OffcanvasCallbackContext) => void;
export type OffcanvasContextType = {
  stack: OffcanvasStackItem[];
  openOffcanvas: OpenOffcanvasFunction;
  closeOffcanvas: CloseOffcanvasFunction;
};
export type OffcanvasProps = {
  name: string;
  payload: OffcanvasPayload;
  openOffcanvas: OpenOffcanvasFunction;
  closeOffcanvas: CloseOffcanvasFunction;
};

export const OffcanvasContext = createContext<OffcanvasContextType | undefined>(undefined);

function enhanceOffcanvas(
  Offcanvas: OffcanvasComponent,
  callbacks?: OffcanvasCallbacks,
) {
  return function EnhancedOffcanvas({ name, payload, ...otherProps }: OffcanvasProps) {
    useEffect(() => {
      if (callbacks?.onAfterOpen) {
        callbacks.onAfterOpen(payload);
      }
      return () => {
        if (callbacks?.onAfterClose) {
          callbacks.onAfterClose({ fromOffcanvas: false }, payload);
        }
      };
    }, [payload]);
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Offcanvas name={name} payload={payload} {...otherProps} />
    );
  };
}

export function OffcanvasContextProvider(
  {
    portalName,
    children,
    availableOffcanvas,
  }: Props,
) {
  const [hasPortal, setHasPortal] = useState(false);
  useEffect(() => {
    const previousPortal = document.querySelector(`#${portalName}`);
    if (previousPortal) {
      previousPortal.remove();
    }
    const portal = document.createElement('div');
    portal.id = portalName;
    document.body.appendChild(portal);
    setHasPortal(true);
  }, [portalName]);

  const [stack, { push, pop, peek }] = useStackState<OffcanvasStackItem>([]);

  useEffect(() => {
    if (stack.length) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }
  }, [stack.length]);

  const openOffcanvas = useCallback<OffcanvasContextType['openOffcanvas']>(
    (offcanvasName, { payload, callbacks } = { payload: {} }) => {
      const Component = availableOffcanvas[offcanvasName];
      if (!Component) {
        throw new Error(`there is no component for offcanvas ${offcanvasName}`);
      }
      const stackItem: OffcanvasStackItem = {
        offcanvasName,
        Component,
        payload,
        callbacks,
      };
      if (callbacks?.onBeforeOpen) {
        callbacks.onBeforeOpen(payload);
      }
      push(stackItem);
    },
    [availableOffcanvas, push],
  );

  const closeOffcanvas = useCallback<OffcanvasContextType['closeOffcanvas']>(
    (context = { fromOffcanvas: false }) => {
      const stackItem = peek();
      if (!stackItem) {
        return;
      }
      if (stackItem.callbacks?.onBeforeClose) {
        stackItem.callbacks.onBeforeClose(context, stackItem.payload);
      }
      pop();
    },
    [peek, pop],
  );

  const value = useMemo(() => ({
    stack,
    openOffcanvas,
    closeOffcanvas,
  }), [stack, openOffcanvas, closeOffcanvas]);

  return (
    <OffcanvasContext.Provider value={value}>
      {children}
      {hasPortal && createPortal(
        <>
          {stack.map((
            {
              Component,
              offcanvasName,
              callbacks,
              payload,
            },
          ) => {
            const EnhancedComponent = enhanceOffcanvas(Component, callbacks);
            return (
              <EnhancedComponent
                key={offcanvasName}
                name={offcanvasName}
                payload={payload}
                openOffcanvas={openOffcanvas}
                closeOffcanvas={closeOffcanvas}
              />
            );
          })}
          {!!stack.length && <div className="offcanvas-backdrop fade show" />}
        </>,
        document.getElementById(portalName) as Element,
      )}
    </OffcanvasContext.Provider>
  );
}

export function useOffcanvasContext() {
  const context = useContext(OffcanvasContext) as OffcanvasContextType;

  if (context === undefined) {
    throw new Error('useOffcanvasContext was used outside of OffcanvasContextProvider');
  }

  return context;
}

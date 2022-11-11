import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo, useState,
} from 'react';
import type { PropsWithChildren, FC } from 'react';
import { createPortal } from 'react-dom';

import useStackState from '../hooks/useStackState';

export type AsideComponent = FC<AsideProps>;
export type AsideAvailableList = Record<string, AsideComponent>;
type Props = PropsWithChildren<{
  portalName: string;
  availableAsides: AsideAvailableList;
}>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AsidePayload = Record<string, any>;
export type AsideCallbackContext = {
  fromAside: boolean;
};
export type AsideCallbacks = {
  onBeforeOpen?: (payload?: AsidePayload) => void;
  onAfterOpen?: (payload?: AsidePayload) => void;
  onBeforeClose?: (context: AsideCallbackContext, payload?: AsidePayload) => void;
  onAfterClose?: (context: AsideCallbackContext, payload?: AsidePayload) => void;
};
export type AsideStackItem = {
  asideName: keyof AsideAvailableList;
  Component: AsideComponent;
  payload: AsidePayload;
  callbacks?: AsideCallbacks;
};
export type AsideConfig = {
  payload: AsidePayload;
  callbacks?: AsideCallbacks;
};
export type OpenAsideFunction = (name: string, config?: AsideConfig) => void;
export type CloseAsideFunction = (context?: AsideCallbackContext) => void;
export type AsideContextType = {
  stack: AsideStackItem[];
  openAside: OpenAsideFunction;
  closeAside: CloseAsideFunction;
};
export type AsideProps = {
  name: string;
  payload: AsidePayload;
  openAside: OpenAsideFunction;
  closeAside: CloseAsideFunction;
};

export const AsideContext = createContext<AsideContextType | undefined>(undefined);

function enhanceAside(
  Aside: AsideComponent,
  callbacks?: AsideCallbacks,
) {
  return function EnhancedAside({ name, payload, ...otherProps }: AsideProps) {
    useEffect(() => {
      if (callbacks?.onAfterOpen) {
        callbacks.onAfterOpen(payload);
      }
      return () => {
        if (callbacks?.onAfterClose) {
          callbacks.onAfterClose({ fromAside: false }, payload);
        }
      };
    }, [payload]);
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Aside name={name} payload={payload} {...otherProps} />
    );
  };
}

export function AsideContextProvider(
  {
    portalName,
    children,
    availableAsides,
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

  const [stack, { push, pop, peek }] = useStackState<AsideStackItem>([]);

  useEffect(() => {
    if (stack.length) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }
  }, [stack.length]);

  const openAside = useCallback<AsideContextType['openAside']>(
    (asideName, { payload, callbacks } = { payload: {} }) => {
      const Component = availableAsides[asideName];
      if (!Component) {
        throw new Error(`there is no component for aside ${asideName}`);
      }
      const stackItem: AsideStackItem = {
        asideName,
        Component,
        payload,
        callbacks,
      };
      if (callbacks?.onBeforeOpen) {
        callbacks.onBeforeOpen(payload);
      }
      push(stackItem);
    },
    [availableAsides, push],
  );

  const closeAside = useCallback<AsideContextType['closeAside']>(
    (context = { fromAside: false }) => {
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
    openAside,
    closeAside,
  }), [stack, openAside, closeAside]);

  return (
    <AsideContext.Provider value={value}>
      {children}
      {hasPortal && createPortal(
        <>
          {stack.map((
            {
              Component,
              asideName,
              callbacks,
              payload,
            },
          ) => {
            const EnhancedComponent = enhanceAside(Component, callbacks);
            return (
              <EnhancedComponent
                key={asideName}
                name={asideName}
                payload={payload}
                openAside={openAside}
                closeAside={closeAside}
              />
            );
          })}
          {!!stack.length && <div className="offcanvas-backdrop fade show" />}
        </>,
        document.getElementById(portalName) as Element,
      )}
    </AsideContext.Provider>
  );
}

export function useAsideContext() {
  const context = useContext(AsideContext) as AsideContextType;

  if (context === undefined) {
    throw new Error('useAsideContext was used outside of AsideContextProvider');
  }

  return context;
}

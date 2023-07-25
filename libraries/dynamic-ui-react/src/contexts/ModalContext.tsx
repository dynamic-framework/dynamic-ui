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

export type ModalComponent = FC<ModalProps>;
export type ModalAvailableList = Record<string, ModalComponent>;
type Props = PropsWithChildren<{
  portalName: string;
  availableModals: ModalAvailableList
}>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ModalPayload = Record<string, any>;
export type ModalCallbackContext = {
  fromModal: boolean;
};
export type ModalCallbacks = {
  onBeforeOpen?: (payload?: ModalPayload) => void;
  onAfterOpen?: (payload?: ModalPayload) => void;
  onBeforeClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
  onAfterClose?: (context: ModalCallbackContext, payload?: ModalPayload) => void;
};
export type ModalStackItem = {
  modalName: keyof ModalAvailableList;
  Component: ModalComponent;
  payload: ModalPayload;
  callbacks?: ModalCallbacks;
};
export type ModalConfig = {
  payload: ModalPayload;
  callbacks?: ModalCallbacks;
};
export type OpenModalFunction = (name: string, config?: ModalConfig) => void;
export type CloseModalFunction = (context?: ModalCallbackContext) => void;
export type ModalContextType = {
  stack: ModalStackItem[];
  openModal: OpenModalFunction;
  closeModal: CloseModalFunction;
};
export type ModalProps = {
  name: string;
  payload: ModalPayload;
  openModal: OpenModalFunction;
  closeModal: CloseModalFunction;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

function enhanceModal(
  Modal: ModalComponent,
  callbacks?: ModalCallbacks,
) {
  return function EnhancedModal({ name, payload, ...otherProps }: ModalProps) {
    useEffect(() => {
      if (callbacks?.onAfterOpen) {
        callbacks.onAfterOpen(payload);
      }
      return () => {
        if (callbacks?.onAfterClose) {
          callbacks.onAfterClose({ fromModal: false }, payload);
        }
      };
    }, [payload]);
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Modal name={name} payload={payload} {...otherProps} />
    );
  };
}

export function ModalContextProvider(
  {
    portalName,
    children,
    availableModals,
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

  const [stack, { push, pop, peek }] = useStackState<ModalStackItem>([]);

  useEffect(() => {
    if (stack.length) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }
  }, [stack.length]);

  const openModal = useCallback<ModalContextType['openModal']>(
    (modalName, { payload, callbacks } = { payload: {} }) => {
      const Component = availableModals[modalName];
      if (!Component) {
        throw new Error(`there is no component for modal ${modalName}`);
      }
      const stackItem: ModalStackItem = {
        modalName,
        Component,
        payload,
        callbacks,
      };
      if (callbacks?.onBeforeOpen) {
        callbacks.onBeforeOpen(payload);
      }
      push(stackItem);
    },
    [availableModals, push],
  );

  const closeModal = useCallback<ModalContextType['closeModal']>(
    (context = { fromModal: false }) => {
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
    openModal,
    closeModal,
  }), [stack, openModal, closeModal]);

  return (
    <ModalContext.Provider value={value}>
      {children}
      {hasPortal && createPortal(
        <>
          {stack.map((
            {
              Component,
              modalName,
              callbacks,
              payload,
            },
          ) => {
            const EnhancedComponent = enhanceModal(Component, callbacks);
            return (
              <EnhancedComponent
                key={modalName}
                name={modalName}
                payload={payload}
                openModal={openModal}
                closeModal={closeModal}
              />
            );
          })}
          {!!stack.length && <div className="modal-backdrop fade show" />}
        </>,
        document.getElementById(portalName) as Element,
      )}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext) as ModalContextType;

  if (context === undefined) {
    throw new Error('useModalContext was used outside of ModalContextProvider');
  }

  return context;
}

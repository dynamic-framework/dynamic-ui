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

type ModalComponent<P = any> = FC<ModalProps<P>>;

type ModalAvailableList<T extends Record<string, unknown>> = {
  [K in keyof T]: ModalComponent<T[K]>;
};

type Props<T extends Record<string, unknown>> = PropsWithChildren<{
  portalName: string;
  availableModals: ModalAvailableList<T>;
}>;
type ModalStackItem<N extends string = string, P = any> = {
  modalName: N;
  Component: ModalComponent<P>;
  payload: P;
};
type OpenModalFunction<P = unknown> = (name: string, payload: P) => void;
type CloseModalFunction = () => void;
type ModalContextType<T extends Record<string, unknown>> = {
  stack: ModalStackItem<string, T[keyof T]>[];
  openModal: OpenModalFunction<T[keyof T]>;
  closeModal: CloseModalFunction;
};
export type ModalProps<P = unknown> = {
  name: string;
  payload: P;
  openModal: OpenModalFunction<P>;
  closeModal: CloseModalFunction;
};

export const DModalContext = createContext<ModalContextType<any> | undefined>(undefined);

export function DModalContextProvider<T extends Record<string, unknown>>(
  {
    portalName,
    children,
    availableModals,
  }: Props<T>,
) {
  const { created } = usePortal(portalName);
  const [stack, { push, pop, peek }] = useStackState<ModalStackItem<string, T[keyof T]>>([]);
  useDisableBodyScrollEffect(Boolean(stack.length));

  const openModal = useCallback<ModalContextType<T>['openModal']>(
    (modalName, payload) => {
      const Component = availableModals[modalName as keyof T] as ModalComponent<T[keyof T]>;
      if (!Component) {
        throw new Error(`there is no component for modal ${modalName.toString()}`);
      }
      push({
        modalName,
        Component,
        payload,
      });
    },
    [availableModals, push],
  );

  const closeModal = useCallback<ModalContextType<T>['closeModal']>(
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
    openModal,
    closeModal,
  }), [stack, openModal, closeModal]) as ModalContextType<any>;

  return (
    <DModalContext.Provider value={value}>
      {children}
      {created && createPortal(
        <>
          {stack.map((
            {
              Component,
              modalName,
              payload,
            },
          ) => (
            <Component
              key={modalName}
              name={modalName}
              payload={payload}
              openModal={openModal}
              closeModal={closeModal}
            />
          ))}
          {!!stack.length && <div className="modal-backdrop fade show" />}
        </>,
        document.getElementById(portalName) as Element,
      )}
    </DModalContext.Provider>
  );
}

export function useDModalContext<T extends Record<string, unknown>>(): ModalContextType<T> {
  const context = useContext(DModalContext) as ModalContextType<T>;

  if (context === undefined) {
    throw new Error('useModalContext was used outside of ModalContextProvider');
  }

  return context;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
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

import { AnimatePresence, motion } from 'framer-motion';
import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';
import usePortal from '../hooks/usePortal';
import useStackState from '../hooks/useStackState';
import getKeyboardFocusableElements from '../utils/getKeyboardFocusableElements';

type PortalComponent<P = any> = FC<PortalProps<P>>;

type PortalAvailableList<T extends Record<string, unknown>> = {
  [K in keyof T]: PortalComponent<T[K]>;
};

/**
 * Props for the `DPortalContextProvider` (mounted internally by `DContextProvider`).
 * Consumers should configure these props on `DContextProvider` directly — never
 * use `DPortalContextProvider` directly.
 * @template T - Map of portal name → payload shape (e.g. `{ modal: { title: string } }`).
 */
export type PortalContextProps<T extends Record<string, unknown>> = PropsWithChildren<{
  /** DOM element id used as the portal mount point. */
  portalName: string;
  /** Map of portal name to the component that renders it. */
  availablePortals?: PortalAvailableList<T>;
}>;
type PortalStackItem<N extends string = string, P = any> = {
  name: N;
  Component: PortalComponent<P>;
  payload: P;
};
type OpenPortalFunction<T extends Record<string, unknown>> = <K extends keyof T>(
  name: K,
  payload: T[K],
) => void;
type ClosePortalFunction = () => void;

/**
 * Consumer-facing shape of a single entry in the portal stack.
 * Only exposes `name` and `payload` — the internal `Component` field is not part of the public API.
 * @template T - Map of portal name → payload shape.
 */
export type PortalStackEntry<T extends Record<string, unknown>> = {
  /** Portal identifier — matches the key passed to `openPortal`. */
  name: keyof T & string;
  /** Payload forwarded from `openPortal`. */
  payload: T[keyof T];
};

/**
 * Value returned by `useDPortalContext`. Provides methods to open/close portals
 * and inspect the current portal stack.
 * @template T - Map of portal name → payload shape.
 */
export type PortalContextType<T extends Record<string, unknown>> = {
  /** Currently open portals, ordered from oldest (bottom) to newest (top). */
  stack: PortalStackEntry<T>[];
  /**
   * Pushes a named portal onto the stack, rendering its registered component
   * with the given payload.
   * @param name - Key of the portal to open (must be registered in `availablePortals`).
   * @param payload - Data forwarded to the portal component via `PortalProps.payload`.
   *   TypeScript will enforce that `payload` matches the shape declared for `name` in `T`.
   */
  openPortal: OpenPortalFunction<T>;
  /** Pops the topmost portal off the stack, closing it. */
  closePortal: ClosePortalFunction;
};

/**
 * Props interface received by every component registered in `availablePortals`.
 * Use `PortalProps<Payloads['myPortal']>` to type a specific portal component.
 * @template P - The payload shape for this portal.
 */
export type PortalProps<P = unknown> = {
  /** Portal identifier, matches the key used in `openPortal`. */
  name: string;
  /** Data passed via `openPortal`. */
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

  const openPortal = useCallback(
    // eslint-disable-next-line prefer-arrow-callback
    function openPortalImpl<K extends keyof T>(name: K, payload: T[K]) {
      if (!availablePortals) {
        throw new Error(`there is no component for portal ${String(name)}`);
      }

      const Component = availablePortals[name] as PortalComponent<T[K]>;
      if (!Component) {
        throw new Error(`there is no component for portal ${String(name)}`);
      }
      push({
        name: name as string,
        Component: Component as PortalComponent<T[keyof T]>,
        payload,
      });
      (document.activeElement as HTMLElement)?.blur();
    },
    [availablePortals, push],
  ) as PortalContextType<T>['openPortal'];

  const closePortal = useCallback<PortalContextType<T>['closePortal']>(
    () => {
      if (isEmpty()) {
        return;
      }
      pop();
    },
    [isEmpty, pop],
  );

  const publicStack = useMemo(
    () => stack.map(({ name, payload }) => ({ name, payload })) as PortalStackEntry<T>[],
    [stack],
  );

  const value = useMemo(() => ({
    stack: publicStack,
    openPortal,
    closePortal,
  }), [publicStack, openPortal, closePortal]) as PortalContextType<any>;

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
      const lastPortal = document.querySelector(`#${portalName} > div > div:last-child`);
      if (event.key === 'Escape') {
        if (lastPortal) {
          handleClose(lastPortal as HTMLElement);
          return;
        }
      }
      if (event.key === 'Tab') {
        const focusableElements = getKeyboardFocusableElements(lastPortal as HTMLElement);
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
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
          <AnimatePresence>
            {stack.flatMap((
              {
                Component,
                name,
                payload,
              },
            ) => [
              <motion.div
                key={`${name}-backdrop`}
                className="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0, transition: { delay: 0.3 } }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />,
              <Component
                key={name}
                name={name}
                payload={payload}
              />,
            ])}
          </AnimatePresence>
        </div>,
        document.getElementById(portalName) as Element,
      )}
    </DPortalContext.Provider>
  );
}

/**
 * Hook to open/close registered portals (modals, offcanvas, etc.).
 *
 * **Prerequisite**: must be called inside a `DContextProvider` configured with
 * `portalName` and `availablePortals`. `DContextProvider` mounts
 * `DPortalContextProvider` internally — consumers never use
 * `DPortalContextProvider` directly.
 *
 * @template T - Map of portal name → payload shape (e.g. `ModalPayloads`).
 *   Typing this generic gives you autocomplete on `openPortal` arguments.
 * @returns `{ openPortal, closePortal, stack }` from the nearest portal context.
 * @throws If called outside of `DContextProvider` / `DPortalContextProvider`.
 *
 * @requires DContextProvider
 *
 * @example
 * ```tsx
 * const { openPortal, closePortal } = useDPortalContext<ModalPayloads>();
 * openPortal('confirm', { message: 'Are you sure?' });
 * ```
 */
export function useDPortalContext<T extends Record<string, unknown>>(): PortalContextType<T> {
  const context = useContext(DPortalContext) as PortalContextType<T>;

  if (context === undefined) {
    throw new Error('useDPortalContext was used outside of DPortalContextProvider');
  }

  return context;
}

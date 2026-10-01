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

/**
 * A component the portal can mount.
 *
 * `nativeDialog` says it renders a `<dialog>` and opens it with `showModal()`,
 * which means the BROWSER owns the backdrop, the focus trap, page inertness,
 * Escape and the top layer. The portal then renders none of its own and runs
 * none of its own handlers — two implementations of a focus trap on one
 * element is worse than either alone.
 */
type PortalComponent<P = any> = FC<PortalProps<P>> & { nativeDialog?: boolean };

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
type InternalStackItem<T extends Record<string, unknown>> = {
  [K in keyof T & string]: PortalStackItem<K, T[K]>;
}[keyof T & string];
type OpenPortalFunction<T extends Record<string, unknown>> = <K extends keyof T & string>(
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
  [K in keyof T]: {
    /** Portal identifier — matches the key passed to `openPortal`. */
    name: K & string;
    /** Payload forwarded from `openPortal`. */
    payload: T[K];
  };
}[keyof T];

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
  /**
   * Pops this panel off the stack.
   *
   * A `<dialog>` can close itself — Escape, or `close()` — and the portal has
   * no way to know it happened. Without this the stack kept an entry for a
   * panel that was already gone, and reopening it did nothing.
   */
  onClose?: () => void;
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
  const [stack, { push, pop }] = useStackState<InternalStackItem<T>>([]);
  useDisableBodyScrollEffect(Boolean(stack.length));

  const openPortal = useCallback(
    // eslint-disable-next-line prefer-arrow-callback
    function openPortalImpl<K extends keyof T & string>(name: K, payload: T[K]) {
      if (!availablePortals) {
        throw new Error(
          'openPortal was called but DContextProvider has no availablePortals configured. '
          + 'Pass an availablePortals map to DContextProvider.',
        );
      }

      const Component = availablePortals[name] as PortalComponent<T[K]>;
      if (!Component) {
        throw new Error(
          `No component registered for portal "${String(name)}". `
          + `Ensure "${String(name)}" has an entry in the availablePortals map on DContextProvider.`,
        );
      }
      // K is a specific member of keyof T & string so the object satisfies
      // InternalStackItem<T>, but TS can't verify generic-over-union assignability.
      push({ name, Component, payload } as unknown as InternalStackItem<T>);
      /*
       * The trigger is deliberately NOT blurred.
       *
       * It used to be, which looked harmless and broke two things at once:
       * `showModal()` returns focus on close to whatever had it when the dialog
       * opened, so blurring first meant focus came back to `<body>` and a
       * keyboard user was dumped at the top of the page. And the old Tab trap
       * only engaged once focus was already inside the panel, so starting from
       * `<body>` meant it never engaged at all.
       */
    },
    [availablePortals, push],
  ) as PortalContextType<T>['openPortal'];

  const closePortal = useCallback<PortalContextType<T>['closePortal']>(
    () => {
      // pop() is safe on empty stacks, so close remains idempotent.
      pop();
    },
    [pop],
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

  /**
   * Closes when the click landed outside the panel.
   *
   * Three names in here were Bootstrap's and were never ported, so all three
   * silently did nothing:
   *
   * - `.backdrop` had no stylesheet rule, so the scrim rendered transparent —
   *   a modal with no visible backdrop at all.
   * - `.portal` was never on any element, so a click on the panel's own padding
   *   fell through to the next branch instead of being ignored.
   * - `data-bs-backdrop` is Bootstrap's attribute; the components emit
   *   `data-static-backdrop`, so a static backdrop closed on a click like any
   *   other.
   *
   * The panel is `.df-overlay` and the scrim is `.df-backdrop`, which are the
   * names the stylesheet is written against.
   */
  /** True when the panel on top is a `<dialog>` the browser is managing. */
  const topIsNativeDialog = stack.length > 0
    && Boolean(stack[stack.length - 1].Component.nativeDialog);

  const handleClose = useCallback((target: Element) => {
    // A native dialog closes itself: Escape, and a click outside the panel.
    // Doing it here as well would close two panels for one press.
    if (topIsNativeDialog) return;

    if (!(target instanceof HTMLDivElement)) {
      return;
    }

    const isStatic = (element: HTMLElement) => 'staticBackdrop' in element.dataset;

    if (target.classList.contains('df-overlay')) {
      if (!isStatic(target)) closePortal();
      return;
    }

    if (target.classList.contains('df-backdrop')) {
      const panel = target.nextElementSibling as HTMLElement | null;
      if (panel?.classList.contains('df-overlay') && !isStatic(panel)) {
        closePortal();
      }
    }
  }, [closePortal, topIsNativeDialog]);

  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => {
      const lastPortal = document.querySelector(`#${portalName} > div > div:last-child`);
      if (event.key === 'Escape') {
        if (lastPortal) {
          handleClose(lastPortal as HTMLElement);
          return;
        }
      }
      /*
       * The Tab trap, for panels that are not a `<dialog>`.
       *
       * A native dialog traps focus itself, and correctly — this version only
       * cycles between the first and last focusable element it can find, which
       * does nothing if focus is outside the panel to begin with, and nothing
       * at all for a screen reader's virtual cursor.
       */
      if (event.key === 'Tab' && !topIsNativeDialog) {
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
  }, [handleClose, portalName, stack.length, topIsNativeDialog]);

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
              /*
               * A `<dialog>` paints its own scrim through `::backdrop`, styled
               * from the same token in `overlay.css`. Rendering this one as
               * well would stack two 50% scrims into one much darker than the
               * design says.
               */
              ...(Component.nativeDialog ? [] : [<motion.div
                key={`${name}-backdrop`}
                className="df-backdrop"
                initial={{ opacity: 0 }}
                /*
                 * To 1, not to 0.5. The darkness is
                 * `--df-overlay-backdrop-color`, which already carries 50%
                 * alpha — animating opacity to 0.5 as well multiplied the two
                 * and produced a 25% scrim, which is most of why this looked
                 * like no backdrop even once the class name was right.
                 */
                animate={{ opacity: 1 }}
                /*
                 * No delay on the way out.
                 *
                 * The 300ms that used to be here existed to let the PANEL
                 * animate away first, back when the panel was a `framer-motion`
                 * element with a matching delay. The panel animates in CSS now,
                 * so the delay only meant the scrim stayed mounted for 450ms
                 * after the close — still covering the page, still swallowing
                 * the next click, so dismissing appeared to need two presses.
                 */
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15, ease: 'linear' }}
              />]),
              <Component
                key={name}
                name={name}
                payload={payload}
                onClose={closePortal}
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
  const context = useContext(DPortalContext);

  if (context === undefined) {
    throw new Error('useDPortalContext was used outside of DPortalContextProvider');
  }

  return context as PortalContextType<T>;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import type {
  PropsWithChildren,
  FC,
} from 'react';

import useDisableBodyScrollEffect from '../hooks/useDisableBodyScrollEffect';
import usePortal from '../hooks/usePortal';
import useRenderLoopWarning from '../hooks/useRenderLoopWarning';
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
  /**
   * A panel reporting that the BROWSER is managing it.
   *
   * `DModal` calls this on mount and again on unmount, because it is a real
   * `<dialog>` opened with `showModal()`: the browser draws `::backdrop`,
   * traps focus, makes the rest of the page inert and handles Escape. The
   * portal must then do none of those — every one of its own versions fights
   * the real thing rather than adding to it.
   *
   * `true` on mount, `false` on unmount; the provider counts rather than
   * flags, so two stacked panels do not leave the portal thinking the last
   * one to unmount took the whole stack with it.
   *
   * Not part of the documented surface — a consumer never calls it. It exists
   * so the thing that KNOWS can say so, instead of whoever registers the
   * panel having to remember a static flag.
   */
  panelIsNative: (open: boolean) => void;
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
  useRenderLoopWarning('DPortalContextProvider');

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

  /*
   * What the panel on top paints for itself.
   *
   * Reported by `DModal` on mount rather than declared as a static
   * `Component.nativeDialog` by whoever registers the panel. The static flag
   * was a contract a consumer had to remember, and forgetting it failed in a
   * way that looked like a different bug entirely: the portal rendered its own
   * scrim ON TOP of the dialog's `::backdrop`, so a modal had two 50% layers
   * and the extra one outlived the panel.
   *
   * The flag is still read, so a panel that is a `<dialog>` without using
   * `DModal` can declare itself. This is the belt.
   */
  const [nativePanels, setNativePanels] = useState(0);

  /*
   * A count, not a flag.
   *
   * With two panels stacked, a boolean goes false the moment the INNER one
   * unmounts — while the outer is still open and still a `<dialog>`. The
   * portal would then switch its own machinery back on underneath a live
   * dialog: its scrim over the panel, its click-outside handler closing an
   * extra entry, and its Tab trap calling `focus()` against the browser's own
   * focus trap. A counter cannot get that wrong.
   */
  const panelIsNative = useCallback((open: boolean) => {
    setNativePanels((count) => Math.max(0, count + (open ? 1 : -1)));
  }, []);

  const value = useMemo(() => ({
    stack: publicStack,
    openPortal,
    closePortal,
    panelIsNative,
  }), [publicStack, openPortal, closePortal, panelIsNative]) as PortalContextType<any>;

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

  /**
   * True when the browser is managing the panel on top.
   *
   * Either because a mounted panel said so — `DModal` reports it, which is
   * how a naive panel gets this right without its author knowing the
   * contract exists — or because whoever registered it set the static flag,
   * for a `<dialog>` built without `DModal`.
   *
   * EVERYTHING the portal does keys off this, not just the scrim: the
   * click-outside handler, Escape, and the Tab trap. Each has a native
   * counterpart, and running both does not add up — it fights. The Tab trap
   * is the worst of them, because `focus()` against the browser's own focus
   * trap is two pieces of code moving focus at each other.
   */
  const topIsNativeDialog = stack.length > 0
    && (nativePanels > 0 || Boolean(stack[stack.length - 1].Component.nativeDialog));

  /*
   * Whether the stack needs OUR scrim: something is open, and the top panel is
   * not painting its own. Every panel the library ships is a dialog, so this
   * is for a custom panel a consumer registers with the portal.
   */
  /* Our scrim is for a panel the browser is NOT managing — a dialog paints
     its own through `::backdrop`. */
  const needsScrim = stack.length > 0 && !topIsNativeDialog;

  /**
   * Whether the scrim element exists at all.
   *
   * It has to OUTLIVE the panel so its fade-out has a previous frame to leave
   * from — that is the whole reason it is a persistent element rather than
   * something mounted alongside the panel. But "persistent" was written as
   * "always", and that is a `position: fixed` element covering the viewport
   * for every provider on the page whether or not it will ever be used.
   *
   * A Storybook docs page mounts one provider per story: seventeen of them on
   * the modal page, which is seventeen full-viewport compositing layers over
   * a document that needed none. It made the page unusable, and nothing in a
   * test environment notices — jsdom composites nothing.
   *
   * So it is latched: absent until something needs it, present from then on.
   * A page where every panel is a `<dialog>` — which is every panel this
   * library ships — never mounts one.
   */
  const [scrimMounted, setScrimMounted] = useState(false);
  useEffect(() => {
    if (needsScrim) setScrimMounted(true);
  }, [needsScrim]);

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
          {/*
            * The scrim, mounted whatever the stack holds.
            *
            * This was a `motion.div` inside `<AnimatePresence>`, and the only
            * reason for the library was the EXIT: an element that unmounts has
            * no previous frame to animate from, so something had to hold it
            * there while it faded. 41.6 KB of `framer-motion` for one opacity
            * fade.
            *
            * Kept in the document and switched with `data-open`, the exit is an
            * ordinary CSS transition. It is `pointer-events: none` while
            * closed, so an invisible sheet is not sitting over the page
            * catching clicks.
            *
            * A `<dialog>` paints its own through `::backdrop` from the same
            * token, so this stays off for a native panel — two 50% scrims
            * stack into something much darker than the design says.
            */}
          {scrimMounted && (
            <div
              className="df-backdrop"
              {...needsScrim && { 'data-open': '' }}
            />
          )}

          {stack.map(({ Component, name, payload }) => (
            <Component
              key={name}
              name={name}
              payload={payload}
              onClose={closePortal}
            />
          ))}
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

/**
 * The portal context if there is one, `undefined` if not.
 *
 * `useDPortalContext` throws outside a provider, which is right for a consumer
 * calling `openPortal` — that is a mistake with no sensible fallback. A PANEL
 * is different: `DModal` is perfectly usable on its own, rendered inline
 * without any portal, and it still needs to ask whether it is in one so it can
 * report that it paints its own scrim.
 *
 * Separate function rather than a flag on the other, so neither has to explain
 * at the call site which behaviour it is asking for.
 */
export function useOptionalPortalContext():
PortalContextType<Record<string, unknown>> | undefined {
  return useContext(DPortalContext) as
    PortalContextType<Record<string, unknown>> | undefined;
}

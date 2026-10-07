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
 * none of its own handlers — two implementations of a focus trap on one element
 * is worse than either alone.
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
   * Pops a NAMED entry, and only while it is still on top.
   *
   * `closePortal()` takes whatever is on top at the moment it runs, which is the
   * wrong answer when two things race to close the same panel. A `<dialog>`
   * closes itself and then reports it, so a consumer who forwards the portal's
   * `onClose` into `DModal` would have the entry popped twice for one Escape:
   * once by their handler and once by the panel. With one panel open the second
   * pop is harmless; with two it takes the one underneath as well.
   *
   * `DModal` and `DOffcanvas` use this instead. It is a separate function rather
   * than an argument on `closePortal`, because `closePortal` is passed straight
   * to `onClick` in a few hundred places and an optional first parameter would
   * quietly start receiving a `MouseEvent`.
   *
   * Not part of the documented surface — a consumer never calls it.
   */
  closePanel: (name: string) => void;
  /**
   * A panel reporting that the BROWSER is managing it.
   *
   * `DModal` and `DOffcanvas` call this on mount and again on unmount, because
   * both are real `<dialog>`s opened with `showModal()`: the browser draws
   * `::backdrop`, traps focus, makes the rest of the page inert and handles
   * Escape. The portal must then do none of those — every one of its own
   * versions fights the real thing rather than adding to it.
   *
   * `true` on mount, `false` on unmount; the provider counts rather than flags,
   * so two stacked panels do not leave the portal thinking the last one to
   * unmount took the whole stack with it.
   *
   * Not part of the documented surface — a consumer never calls it. It exists
   * so the thing that KNOWS can say so, instead of whoever registers the panel
   * having to remember a static flag.
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
   * A `<dialog>` can close itself — Escape, or `close()` — and the portal has no
   * way to know it happened. Without this the stack kept an entry for a panel
   * that was already gone, and reopening it did nothing.
   */
  onClose?: () => void;
};

/**
 * The `<dialog>` a stack entry rendered, if it rendered one.
 *
 * Looked up by id rather than held as a ref, because the provider renders these
 * components dynamically and never sees their elements. `id={name}` is the same
 * contract the stack is already keyed by: `DModal` and `DOffcanvas` both set it,
 * and `isPortalPanel` inside them already assumes it.
 *
 * Scoped to the portal node instead of `document.getElementById`, so an element
 * elsewhere on the page that happens to share the id cannot be closed by
 * mistake. Matched by tag and id rather than with a selector, because an id is
 * author-supplied and `CSS.escape` is not available everywhere.
 */
function panelDialog(portalName: string, name: string): HTMLDialogElement | undefined {
  const root = document.getElementById(portalName);
  if (!root) return undefined;
  return Array.from(root.getElementsByTagName('dialog')).find((el) => el.id === name);
}

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

  const [stack, { push, pop, popIf }] = useStackState<InternalStackItem<T>>([]);
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
       *
       * The panel stack is also no longer loaded on demand. That indirection
       * existed to keep `framer-motion` off the critical path, and the panels
       * animate in CSS now — so there is nothing to wait for, no `pending`
       * queue, and no window in which an `openPortal` could be cancelled by a
       * `closePortal` that arrived before the module did.
       */
    },
    [availablePortals, push],
  ) as PortalContextType<T>['openPortal'];

  const closePortal = useCallback<PortalContextType<T>['closePortal']>(
    () => {
      /*
       * Ask the panel to close. Do not yank it.
       *
       * Popping the stack unmounts the panel, and an element removed from the
       * document stops transitioning — so `closePortal()` from a Cancel button
       * made the panel vanish on the frame it was told to leave, while Escape
       * and a click outside animated properly. The difference was never the
       * intent, it was the ROUTE: those two go through the dialog's own `close`
       * event, which is what `DModal` hangs its exit off.
       *
       * So this takes the same route deliberately. The element closes, fires
       * `close`, and the panel pops its own entry once the transition has
       * finished.
       */
      const top = stack[stack.length - 1];
      const dialog = top && panelDialog(portalName, top.name);

      if (dialog) {
        /*
         * Already closed means an exit is in flight — the panel will pop itself
         * when it ends, and popping here would cut the animation short. That is
         * the re-entrant case: a consumer who forwards the portal's `onClose`
         * into `DModal` calls this again from inside the `close` event.
         */
        if (dialog.open) dialog.close();
        return;
      }

      // A panel that is not a `<dialog>` has no such route, so it is popped
      // directly. pop() is safe on empty stacks, so close remains idempotent.
      pop();
    },
    [pop, portalName, stack],
  );

  const closePanel = useCallback<PortalContextType<T>['closePanel']>(
    (name) => popIf((top) => top.name === name),
    [popIf],
  );

  const publicStack = useMemo(
    () => stack.map(({ name, payload }) => ({ name, payload })) as PortalStackEntry<T>[],
    [stack],
  );

  /*
   * What the panel on top paints for itself.
   *
   * Reported by the panel on mount rather than declared as a static
   * `Component.nativeDialog` by whoever registers it. The static flag was a
   * contract a consumer had to remember, and forgetting it failed in a way that
   * looked like a different bug entirely: the portal rendered its own scrim ON
   * TOP of the dialog's `::backdrop`, so a modal had two layers of dimming and
   * the extra one outlived the panel.
   *
   * The flag is still read, so a panel that is a `<dialog>` without using
   * `DModal`/`DOffcanvas` can declare itself. This is the belt.
   */
  const [nativePanels, setNativePanels] = useState(0);

  /*
   * A count, not a flag.
   *
   * With two panels stacked, a boolean goes false the moment the INNER one
   * unmounts — while the outer is still open and still a `<dialog>`. The portal
   * would then switch its own machinery back on underneath a live dialog: its
   * scrim over the panel, its click-outside handler closing an extra entry, and
   * its Tab trap calling `focus()` against the browser's own focus trap. A
   * counter cannot get that wrong.
   */
  const panelIsNative = useCallback((open: boolean) => {
    setNativePanels((count) => Math.max(0, count + (open ? 1 : -1)));
  }, []);

  const value = useMemo(() => ({
    stack: publicStack,
    openPortal,
    closePortal,
    closePanel,
    panelIsNative,
  }), [
    publicStack,
    openPortal,
    closePortal,
    closePanel,
    panelIsNative,
  ]) as PortalContextType<any>;

  /**
   * True when the browser is managing the panel on top.
   *
   * Either because a mounted panel said so — `DModal` and `DOffcanvas` report
   * it, which is how a naive panel gets this right without its author knowing
   * the contract exists — or because whoever registered it set the static flag,
   * for a `<dialog>` built without them.
   *
   * EVERYTHING the portal does keys off this, not just the scrim: the
   * click-outside handler, Escape, and the Tab trap. Each has a native
   * counterpart, and running both does not add up — it fights. The Tab trap is
   * the worst of them, because `focus()` against the browser's own focus trap is
   * two pieces of code moving focus at each other.
   */
  const topIsNativeDialog = stack.length > 0
    && (nativePanels > 0 || Boolean(stack[stack.length - 1].Component.nativeDialog));

  /*
   * Whether the stack needs OUR scrim: something is open, and the top panel is
   * not painting its own. Every panel the library ships is a dialog, so this is
   * for a custom panel a consumer registers with the portal.
   */
  const needsScrim = stack.length > 0 && !topIsNativeDialog;

  /**
   * Whether the scrim element exists at all.
   *
   * It has to OUTLIVE the panel so its fade-out has a previous frame to leave
   * from — that is the whole reason it is a persistent element rather than
   * something mounted alongside the panel, and it is what `AnimatePresence` was
   * being paid 41.6 KB to do.
   *
   * But "persistent" must not mean "always": that is a `position: fixed`
   * element covering the viewport for every provider on the page whether or not
   * it will ever be used, and a Storybook docs page mounts one provider per
   * story. So it is latched — absent until something needs it, present from
   * then on. A page where every panel is a `<dialog>` never mounts one.
   */
  const [scrimMounted, setScrimMounted] = useState(false);
  useEffect(() => {
    if (!needsScrim) return undefined;
    /*
     * Deferred by a tick, because the answer is not final yet.
     *
     * A panel reports `panelIsNative` from its OWN mount effect, which runs in
     * the same commit as this one — and the state it sets only lands in the next
     * render. So on the first frame of any panel, native or not, `needsScrim` is
     * true. Latching here directly would mount a scrim for a stack of
     * `<dialog>`s that will never use it.
     *
     * Scheduling instead gives the panel's report time to arrive: if it does,
     * this effect re-runs with `needsScrim` false and the cleanup cancels the
     * latch. A panel that really is not a dialog never cancels it, and mounts
     * the scrim a tick later.
     */
    const handle = window.setTimeout(() => setScrimMounted(true), 0);
    return () => window.clearTimeout(handle);
  }, [needsScrim]);

  /**
   * Closes when the click landed outside the panel.
   *
   * Two of the three names this used to match on were Bootstrap's and were
   * never ported, so they silently did nothing: `.portal` was on the panel but
   * `data-bs-backdrop` is an attribute Bootstrap's JS writes and the components
   * emit `data-static-backdrop`, so a static backdrop closed on a click like
   * any other.
   */
  const handleClose = useCallback((target: Element) => {
    // A native dialog closes itself: Escape, and a click outside the panel.
    // Doing it here as well would close two panels for one press.
    if (topIsNativeDialog) return;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const isStatic = (element: HTMLElement) => 'staticBackdrop' in element.dataset;

    if (target.classList.contains('portal')) {
      if (!isStatic(target)) closePortal();
      return;
    }

    if (target.classList.contains('backdrop')) {
      const panel = target.nextElementSibling as HTMLElement | null;
      if (panel?.classList.contains('portal') && !isStatic(panel)) {
        closePortal();
      }
    }
  }, [closePortal, topIsNativeDialog]);

  useEffect(() => {
    const keyEvent = (event: KeyboardEvent) => {
      const lastPortal = document.querySelector(`#${portalName} > div > *:last-child`);
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
            * The scrim, kept in the document and switched with `data-open`.
            *
            * A `<dialog>` paints its own through `::backdrop` from the same
            * token, so this stays off for a native panel — two scrims stack
            * into something much darker than the design says, and the extra one
            * sits over the page catching clicks after the panel has gone.
            */}
          {scrimMounted && (
            <div
              className="backdrop"
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
 * calling `openPortal` — that is a mistake with no sensible fallback. A PANEL is
 * different: `DModal` and `DOffcanvas` are perfectly usable on their own,
 * rendered inline without any portal, and they still need to ask whether they
 * are in one so they can report that they paint their own scrim.
 *
 * Separate function rather than a flag on the other, so neither has to explain
 * at the call site which behaviour it is asking for.
 */
export function useOptionalPortalContext():
PortalContextType<Record<string, unknown>> | undefined {
  return useContext(DPortalContext) as
    PortalContextType<Record<string, unknown>> | undefined;
}

import {
  useCallback, useEffect, useMemo, type PropsWithChildren, type RefObject,
} from 'react';
import classNames from 'classnames';

import { useOptionalPortalContext } from '../../contexts/DPortalContext';
import useExitTransition from '../../hooks/useExitTransition';
import useRenderLoopWarning from '../../hooks/useRenderLoopWarning';
import { DOverlayContext } from '../DOverlayContext';
import useOverlayDialog from '../useOverlayDialog';

import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { BaseProps, ModalFullScreenFrom, ModalSize } from '../interface';

type Props = BaseProps & PropsWithChildren<{
  /** Panel id. Also seeds the id the header's title carries for `aria-labelledby`. */
  name: string;
  /** Refuses both ways out: a click on the backdrop and Escape. */
  staticBackdrop?: boolean;
  /**
   * A ref pointed at the `<dialog>` element.
   *
   * The way to close the panel from outside it: `dialogRef.current?.close()`
   * runs the exit transition and fires `onClose` when the element is actually
   * shut. Unmounting it instead — the obvious thing — stops the transition dead,
   * because an element removed from the document stops transitioning.
   */
  dialogRef?: RefObject<HTMLDialogElement | null>;
  scrollable?: boolean;
  centered?: boolean;
  fullScreen?: boolean;
  fullScreenFrom?: ModalFullScreenFrom;
  size?: ModalSize;
  /**
   * Called when the browser closes the panel: Escape, a click outside it, or
   * `close()`.
   *
   * `<dialog>` closes itself, and nothing else can know it happened — without
   * this the portal kept a stack entry for a panel that was already gone, and
   * reopening it by name did nothing.
   */
  onClose?: () => void;
}>;

/**
 * A Bootstrap modal, rendered as a native `<dialog>` and opened with
 * `showModal()`.
 *
 * The markup is unchanged — `.modal > .modal-dialog > .modal-content`, the same
 * modifier classes, the same props. Only the outer tag moved from `<div>` to
 * `<dialog>`, and with it the backdrop, the focus trap, page inertness, Escape
 * and the top layer stopped being this library's problem. See
 * `useOverlayDialog` for what each of those replaced.
 *
 * `framer-motion` is gone from this path: the enter and exit are CSS
 * transitions on `[open]` in `_d-modal.scss`. The library was animating the
 * panel AND owning when it mounted, and `showModal()` has to be called on an
 * element already in the document — so the two were fighting over the same
 * moment.
 */
function DModal(
  {
    name,
    className,
    style,
    staticBackdrop,
    dialogRef,
    scrollable,
    centered,
    fullScreen,
    fullScreenFrom,
    size,
    onClose,
    children,
    dataAttributes,
  }: Props,
) {
  const {
    ref, overlay, onCancel, onClick,
  } = useOverlayDialog({ name, staticBackdrop, dialogRef });

  useRenderLoopWarning(`DModal(${name})`);

  const fullScreenClass = useMemo(() => {
    if (fullScreen) {
      if (fullScreenFrom) {
        return `modal-fullscreen-${fullScreenFrom}-down`;
      }
      return 'modal-fullscreen';
    }
    return '';
  }, [fullScreenFrom, fullScreen]);

  const generateModalDialogClasses = useMemo(() => ({
    'modal-dialog': true,
    'modal-dialog-centered': !!centered,
    'modal-dialog-scrollable': !!scrollable,
    [fullScreenClass]: !!fullScreen,
    ...size && { [`modal-${size}`]: true },
  }), [fullScreenClass, centered, fullScreen, scrollable, size]);

  /*
   * Two things reported to the portal, both because forgetting them failed in
   * ways that did not look like the cause.
   *
   * `panelIsNative` says the browser is managing this panel: it draws
   * `::backdrop`, traps focus, makes the page inert and handles Escape. The
   * portal then does none of those, because each of its own versions FIGHTS the
   * real one rather than adding to it — two 50% scrims stacked, a click handler
   * closing a second entry, a Tab trap calling `focus()` against the browser's
   * focus trap.
   *
   * `closePortal` on close is the other half: `<dialog>` closes itself for
   * Escape and for a click outside, and if nothing pops the stack the entry
   * stays, so the portal keeps rendering a closed panel.
   */
  const portal = useOptionalPortalContext();

  useEffect(() => {
    portal?.panelIsNative?.(true);
    return () => portal?.panelIsNative?.(false);
  }, [portal]);

  const afterExit = useExitTransition();

  /**
   * Whether THIS panel is the one the portal has on top.
   *
   * The portal keys its stack by name and passes that name to the panel, so a
   * match means this dialog is the portal's current entry. A `DModal` that is
   * not — the one `useConfirmModal` renders, or one a consumer put inline —
   * must not touch the stack.
   *
   * Without this, closing a confirmation closed the panel underneath it as
   * well: the confirm's dialog is a `DModal`, so it called `closePortal` and
   * popped an entry that was never its own. One Escape, two panels gone.
   */
  const isPortalPanel = portal?.stack?.at(-1)?.name === name;

  /**
   * Closing, after the animation rather than during it.
   *
   * `closePortal()` pops the stack, which unmounts this component — and an
   * element removed from the document stops transitioning. Called straight from
   * the `close` event it won the race every time: the panel vanished on the
   * frame it was told to leave and the exit never rendered.
   *
   * `onClose` fires immediately regardless — a consumer waiting to know the
   * panel is closed should not wait on an animation.
   */
  const handleClose = useCallback(() => {
    onClose?.();
    const { closePanel } = portal ?? {};
    if (!isPortalPanel || !closePanel) return;
    /*
     * `closePanel(name)`, not `closePortal()`.
     *
     * A consumer who forwards the portal's own `onClose` into this component
     * would otherwise pop the entry twice for one Escape — once from their
     * handler and once from here. `closePanel` only pops while this panel is
     * still the top entry, so the second call is a no-op instead of taking the
     * panel underneath with it.
     */
    afterExit(ref.current, () => closePanel(name));
  }, [afterExit, isPortalPanel, name, onClose, portal, ref]);

  return (
    <DOverlayContext.Provider value={overlay}>
      {/*
        * The click listener is for the BACKDROP, which `<dialog>` reports as a
        * click on the dialog itself. Escape is the keyboard equivalent and the
        * browser already handles it, so the rule's "add a key listener" would
        * mean writing a second implementation of something native.
        */}
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <dialog
        ref={ref}
        className={classNames('modal portal show', className)}
        id={name}
        /*
         * No `role="dialog"` and no `aria-modal`: `<dialog>` carries the role,
         * and `showModal()` already tells assistive technology it is modal. The
         * APG is explicit that `aria-modal` should NOT be added to a native
         * dialog — it has caused the content to be announced as empty.
         *
         * `aria-labelledby` now points at an id that EXISTS: `DModalHeader`
         * puts it on the title, through `DOverlayContext`. It pointed at
         * `${name}Label` before and nothing carried that id — and a dangling
         * `aria-labelledby` is ignored rather than falling back, so the panel
         * had no accessible name at all.
         *
         * `aria-hidden="false"` is gone with it: it was announcing nothing and
         * `aria-hidden` on a dialog is a contradiction in terms.
         */
        aria-labelledby={overlay.labelId}
        style={style}
        onCancel={onCancel}
        onClick={onClick}
        onClose={handleClose}
        {...staticBackdrop && { 'data-static-backdrop': '' }}
        {...dataAttributes}
      >
        <div className={classNames(generateModalDialogClasses)}>
          <div className="modal-content">
            {children}
          </div>
        </div>
      </dialog>
    </DOverlayContext.Provider>
  );
}

/*
 * Tells `DPortalContext` the browser is managing this panel: the backdrop, the
 * focus trap, page inertness, Escape and the top layer all come from
 * `showModal()`, so the portal renders no scrim of its own and runs none of its
 * own handlers.
 */
export default Object.assign(DModal, {
  nativeDialog: true,
  Header: DModalHeader,
  Body: DModalBody,
  Footer: DModalFooter,
});

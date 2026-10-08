import {
  useCallback, useEffect, useMemo, type PropsWithChildren, type RefObject,
} from 'react';
import classNames from 'classnames';

import { PREFIX_BS } from '../config';
import { useOptionalPortalContext } from '../../contexts/DPortalContext';
import useExitTransition from '../../hooks/useExitTransition';
import useRenderLoopWarning from '../../hooks/useRenderLoopWarning';
import { useResponsiveProp, type ResponsiveProp } from '../../hooks/useResponsiveProp';
import { DOverlayContext } from '../DOverlayContext';
import useOverlayDialog from '../useOverlayDialog';

import DOffcanvasHeader from './components/DOffcanvasHeader';
import DOffcanvasBody from './components/DOffcanvasBody';
import DOffcanvasFooter from './components/DOffcanvasFooter';

import type { BaseProps, OffcanvasPositionToggleFrom } from '../interface';

type OffcanvasResponsivePlacement = Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl', OffcanvasPositionToggleFrom>>;

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
  /**
   * @deprecated No-op. It stood in for Bootstrap's `data-bs-scroll`, which asks
   * Bootstrap's JS to leave the page scrollable behind the panel — and that JS
   * has never been on the page here. `showModal()` now makes the rest of the
   * document `inert`, which is the behaviour a modal panel wants anyway.
   */
  scrollable?: boolean;
  openFrom?: OffcanvasPositionToggleFrom | OffcanvasResponsivePlacement;
  /**
   * Overrides the offcanvas size on the `start`/`end` placements (defaults to `400px`).
   * Accepts any CSS length (e.g. `'320px'`, `'50vw'`, `'100%'`) or a `ResponsiveProp` object.
   */
  width?: string | ResponsiveProp;
  /**
   * Overrides the offcanvas size on the `top`/`bottom` placements (defaults to `100%`).
   * Accepts any CSS length (e.g. `'50vh'`, `'320px'`) or a `ResponsiveProp` object.
   */
  height?: string | ResponsiveProp;
  /**
   * Called when the browser closes the panel: Escape, a click outside it, or
   * `close()`.
   */
  onClose?: () => void;
}>;

/**
 * A Bootstrap offcanvas, rendered as a native `<dialog>` and opened with
 * `showModal()`.
 *
 * The class names are unchanged — `.offcanvas` plus `.offcanvas-{start|end|top|bottom}`
 * — and so are the props. The panel IS the dialog here, unlike `DModal` where
 * the dialog is the full-viewport `.modal` box around it; both report an
 * outside click the same way, because a click on a dialog's `::backdrop` is
 * reported as a click on the dialog.
 *
 * The slide-in is a CSS `translate` transition on `[open]` in
 * `_d-offcanvas.scss`, which is what replaced the `framer-motion` variants.
 * `translate` rather than `transform`, so Bootstrap's own
 * `transform: translateX(…)` on each placement is left alone.
 */
function DOffcanvas(
  {
    name,
    className,
    style,
    staticBackdrop,
    dialogRef,
    openFrom = 'end',
    width,
    height,
    onClose,
    children,
    dataAttributes,
  }: Props,
) {
  const {
    ref, overlay, onCancel, onClick,
  } = useOverlayDialog({ name, staticBackdrop, dialogRef });

  useRenderLoopWarning(`DOffcanvas(${name})`);

  // Only subscribe to breakpoint-change listeners when a responsive object is
  // actually provided, avoiding unnecessary matchMedia subscriptions for the
  // common case of plain string values.
  const hasResponsiveProp = typeof openFrom === 'object'
    || typeof width === 'object'
    || typeof height === 'object';
  const { responsivePropValue } = useResponsiveProp(hasResponsiveProp);
  const resolvedOpenFrom = useMemo((): OffcanvasPositionToggleFrom => {
    if (typeof openFrom === 'string') return openFrom;
    return (responsivePropValue(openFrom) as OffcanvasPositionToggleFrom | undefined) ?? 'end';
  }, [responsivePropValue, openFrom]);
  const resolvedWidth = useMemo(() => {
    if (!width) return undefined;
    if (typeof width === 'string') return width;
    return responsivePropValue(width);
  }, [responsivePropValue, width]);
  const resolvedHeight = useMemo(() => {
    if (!height) return undefined;
    if (typeof height === 'string') return height;
    return responsivePropValue(height);
  }, [responsivePropValue, height]);

  const portal = useOptionalPortalContext();

  useEffect(() => {
    portal?.panelIsNative?.(true);
    return () => portal?.panelIsNative?.(false);
  }, [portal]);

  const afterExit = useExitTransition();

  /* Only the portal's own top entry may pop the stack. See `DModal`. */
  const isPortalPanel = portal?.stack?.at(-1)?.name === name;

  const handleClose = useCallback(() => {
    onClose?.();
    const { closePanel } = portal ?? {};
    if (!isPortalPanel || !closePanel) return;
    /* `closePanel(name)` rather than `closePortal()` — see `DModal`. */
    afterExit(ref.current, () => closePanel(name));
  }, [afterExit, isPortalPanel, name, onClose, portal, ref]);

  return (
    <DOverlayContext.Provider value={overlay}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */}
      <dialog
        ref={ref}
        className={classNames(
          'offcanvas portal show',
          {
            [`offcanvas-${resolvedOpenFrom}`]: resolvedOpenFrom,
          },
          className,
        )}
        /*
         * `aria-labelledby` points at the id `DOffcanvasHeader` writes onto the
         * title through `DOverlayContext`. It used to point at `${name}Label`,
         * which nothing carried — a dangling reference is ignored rather than
         * falling back, so the panel had no accessible name at all.
         */
        aria-labelledby={overlay.labelId}
        id={name}
        style={{
          ...style,
          ...(resolvedWidth && { [`--${PREFIX_BS}offcanvas-width`]: resolvedWidth }),
          ...(resolvedHeight && { [`--${PREFIX_BS}offcanvas-height`]: resolvedHeight }),
        }}
        onCancel={onCancel}
        onClick={onClick}
        onClose={handleClose}
        {...staticBackdrop && { 'data-static-backdrop': '' }}
        {...dataAttributes}
      >
        {children}
      </dialog>
    </DOverlayContext.Provider>
  );
}

export default Object.assign(DOffcanvas, {
  nativeDialog: true,
  Header: DOffcanvasHeader,
  Body: DOffcanvasBody,
  Footer: DOffcanvasFooter,
});

import { useMemo, type PropsWithChildren } from 'react';
import classNames from 'classnames';

import { PREFIX } from '../config';
import { DOverlayContext } from '../DOverlayContext';
import useOverlayDialog from '../useOverlayDialog';
import { useResponsiveProp, type ResponsiveProp } from '../../hooks/useResponsiveProp';

import DModalHeader from './components/DModalHeader';
import DModalBody from './components/DModalBody';
import DModalFooter from './components/DModalFooter';

import type { BaseProps, OverlayPlacement, OverlaySize } from '../interface';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
type ResponsivePlacement = Partial<Record<Breakpoint, OverlayPlacement>>;
type ResponsiveSize = Partial<Record<Breakpoint, OverlaySize>>;

type Props = BaseProps & PropsWithChildren<{
  name: string;
  /**
   * Where the panel is anchored. `center` is a dialog; the four edges are
   * drawers and sheets; `fill` covers the viewport.
   *
   * Responsive, which is what makes `{ xs: 'bottom', md: 'center' }` — a sheet
   * on a phone and a dialog on a desktop — a single panel rather than two
   * components swapped at a breakpoint.
   */
  placement?: OverlayPlacement | ResponsivePlacement;
  /**
   * A rung on the shared size scale. Sets whichever axis `placement` sizes:
   * the width of a side drawer, the height of a top/bottom sheet, or the
   * max-width of a centred dialog.
   */
  size?: OverlaySize | ResponsiveSize;
  /** Escape hatch: any CSS length, when a named rung is not the right answer. */
  width?: string | ResponsiveProp;
  /** Escape hatch for the block axis. */
  height?: string | ResponsiveProp;
  /** Refuses both ways out: a click on the backdrop and Escape. */
  staticBackdrop?: boolean;
  /** Called when the browser closes it: Escape, or a click outside the panel. */
  onClose?: () => void;
}>;

/**
 * A modal panel, at any placement.
 *
 * `DModal` and `DModal` used to be two components with two prop sets, and
 * the split did not survive contact: `centered` and `scrollable` were emitted
 * as data attributes NO rule matched, and `fullScreenFrom="md"` had its value
 * ignored, so a modal told to go fullscreen only below `md` went fullscreen
 * everywhere. Three of the four props that justified a second component did
 * nothing at all. `css:attributes` exists now and reports all four at once.
 *
 * They were never two models. A drawer and a dialog both pin some edges, fill
 * the axis they do not size, and take their size from one scale — so they are
 * one component with a `placement`, and `placement="center"` is the dialog.
 *
 * The name is the behaviour, not the position: opened with `showModal()`, a
 * drawer is as modal as a centred dialog. See `useOverlayDialog`.
 */
function DModal(
  {
    name,
    className,
    style,
    placement = 'center',
    size,
    width,
    height,
    staticBackdrop,
    onClose,
    children,
    dataAttributes,
  }: Props,
) {
  const {
    ref, overlay, onCancel, onClick,
  } = useOverlayDialog({ name, staticBackdrop });

  /*
   * Only subscribe to breakpoint changes when a responsive object is actually
   * given — the common case is a plain string and needs no `matchMedia`.
   */
  const hasResponsiveProp = [placement, size, width, height].some((p) => typeof p === 'object');
  const { responsivePropValue } = useResponsiveProp(hasResponsiveProp);

  /* A plain value passes through; a `{ xs, md, … }` object is resolved against
     the current breakpoint, falling back when no tier matches. */
  function resolve<T>(value: T | object | undefined, fallback?: T): T | undefined {
    if (value === undefined) return fallback;
    if (typeof value !== 'object') return value as T;
    return responsivePropValue(value as never) ?? fallback;
  }

  const resolvedPlacement = resolve<OverlayPlacement>(placement, 'center');
  const resolvedSize = resolve<OverlaySize>(size);
  const resolvedWidth = resolve<string>(width);
  const resolvedHeight = resolve<string>(height);

  /*
   * One attribute for the placement, one for the size.
   *
   * 2.x spread this across a `.modal` wrapper and a `.modal-dialog` child with
   * five modifier classes between them; 3.0 spread it across `data-kind`,
   * `data-from`, `data-fullscreen` and `data-centered`, two of which no rule
   * ever read. The panel is one element with one attribute per question.
   */
  const dataProps = useMemo(() => ({
    'data-placement': resolvedPlacement,
    ...(resolvedSize ? { 'data-size': resolvedSize } : {}),
    ...(staticBackdrop ? { 'data-static-backdrop': '' } : {}),
  }), [resolvedPlacement, resolvedSize, staticBackdrop]);

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
        className={classNames('df-overlay', className)}
        id={name}
        /*
         * No `role="dialog"` and no `aria-modal`: `<dialog>` carries the role,
         * and `showModal()` already tells assistive technology it is modal.
         * The APG is explicit that `aria-modal` should NOT be added to a
         * native dialog — it has caused the content to be announced as empty.
         *
         * `aria-labelledby` points at an id that exists: `DModalHeader` puts
         * it on the title, through `DOverlayContext`. It used to point at
         * `${name}Label`, which nothing carried, and a dangling reference is
         * ignored rather than falling back — so the panel had no accessible
         * name at all.
         */
        aria-labelledby={overlay.labelId}
        style={{
          ...style,
          /*
           * One custom property per AXIS, and the stylesheet picks which one
           * the current placement reads. A single slot would force the choice
           * into JavaScript, and `placement` is responsive, so there is no
           * single choice: the same value is a height at `xs` and a width at
           * `md` under `{ xs: 'bottom', md: 'end' }`.
           */
          ...(resolvedWidth && { [`--${PREFIX}overlay-size-inline`]: resolvedWidth }),
          ...(resolvedHeight && { [`--${PREFIX}overlay-size-block`]: resolvedHeight }),
        }}
        onCancel={onCancel}
        onClick={onClick}
        onClose={onClose}
        {...dataProps}
        {...dataAttributes}
      >
        {/* 2.x nested `.modal > .modal-dialog > .modal-content` — three
            elements where one carries the panel. */}
        {children}
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

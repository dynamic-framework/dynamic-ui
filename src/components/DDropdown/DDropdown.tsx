/* eslint-disable react/no-array-index-key */
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import DButtonIcon from '../DButtonIcon';
import DIcon from '../DIcon';

export type DropdownAction = {
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: string;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
  label: string;
};

type ResolvedSide = 'down' | 'up' | 'start' | 'end';

type MenuCoords = {
  top: number;
  left: number;
  minWidth: number;
  maxHeight: string;
};

type DropdownPlacement = 'auto' | ResolvedSide;

/**
 * Horizontal alignment of the menu relative to the toggle, applied only when
 * the resolved placement is vertical (`down`/`up`) — mirrors Bootstrap's
 * `dropdown-menu-end`/`dropdown-center` menu alignment options.
 */
export type DropdownAlignment = 'start' | 'end' | 'center';

type Props = {
  actions: DropdownAction[];
  dropdownToggle?: ((props: { open: boolean, toggle: () => void }) => React.ReactNode);
  className?: string;
  classNameMenu?: string;
  asPortal?: boolean;
  placement?: DropdownPlacement;
  alignment?: DropdownAlignment;
};

// Gap between the toggle and the menu.
const GAP = 4;
// Minimum distance the menu should keep from the viewport edges.
const VIEWPORT_PADDING = 8;
// Minimum usable height left for the menu before we consider a side unusable.
const MIN_USABLE_SPACE = 120;

const getItemClass = (action: DropdownAction) => classNames({
  'dropdown-item d-flex align-items-center': true,
  [`dropdown-item-${action.color}`]: !!action.color,
  disabled: action.disabled,
});

const clamp = (value: number, min: number, max: number) => {
  if (max < min) return min;
  return Math.min(Math.max(value, min), max);
};

/**
 * `position: fixed` is normally relative to the viewport, but any ancestor
 * with a `transform`, `perspective`, `filter`, `will-change` (of those) or a
 * non-trivial `contain` establishes a new containing block, making `fixed`
 * behave like `absolute` relative to that ancestor instead (e.g. Storybook's
 * docs canvas wrapper, animated cards, sticky containers, etc.). We detect
 * that ancestor so the computed coordinates can be adjusted accordingly,
 * keeping the menu correctly anchored to the toggle in every context.
 */
const getFixedPositioningOffset = (fromEl: HTMLElement | null): { top: number, left: number } => {
  let node = fromEl?.parentElement ?? null;
  while (node && node !== document.body) {
    const cs = window.getComputedStyle(node);
    // Treat empty/undefined values as "unset" (jsdom returns "" rather than
    // the CSS initial value like "none" for some of these properties).
    const isSet = (value: string | undefined) => !!value && value !== 'none';
    const establishesContainingBlock = isSet(cs.transform)
      || isSet(cs.perspective)
      || isSet(cs.filter)
      || isSet(cs.backdropFilter)
      || ['transform', 'perspective', 'filter'].some((prop) => cs.willChange?.includes(prop))
      || cs.contain.split(' ').some((value) => ['layout', 'paint', 'strict', 'content'].includes(value));
    if (establishesContainingBlock) {
      const rect = node.getBoundingClientRect();
      return { top: rect.top, left: rect.left };
    }
    node = node.parentElement;
  }
  return { top: 0, left: 0 };
};

/**
 * Resolves where the menu should render (flip) and where it should sit along
 * the cross axis (shift), so it always stays fully inside the viewport
 * regardless of where the toggle is placed or how the viewport is resized.
 * This mimics floating-ui's `flip` + `shift` middlewares without adding the
 * dependency, keeping the existing Bootstrap markup/classes.
 */
const computeCoords = (
  toggleRect: DOMRect,
  menuSize: { width: number, height: number },
  placement: DropdownPlacement,
  alignment: DropdownAlignment,
): MenuCoords & { resolvedSide: ResolvedSide } => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const spaceBelow = viewportHeight - toggleRect.bottom;
  const spaceAbove = toggleRect.top;
  const spaceLeft = toggleRect.left;
  const spaceRight = viewportWidth - toggleRect.right;

  let side: ResolvedSide = placement === 'auto'
    ? 'down'
    : placement;
  if (placement === 'auto') {
    side = spaceBelow >= menuSize.height + GAP || spaceBelow >= spaceAbove ? 'down' : 'up';
  }

  // Flip within the current axis if the chosen side can't fit the menu but
  // the opposite side (same axis) can.
  if (side === 'down' && spaceBelow < menuSize.height + GAP && spaceAbove > spaceBelow) {
    side = 'up';
  } else if (side === 'up' && spaceAbove < menuSize.height + GAP && spaceBelow > spaceAbove) {
    side = 'down';
  } else if (side === 'start' && spaceLeft < menuSize.width + GAP && spaceRight > spaceLeft) {
    side = 'end';
  } else if (side === 'end' && spaceRight < menuSize.width + GAP && spaceLeft > spaceRight) {
    side = 'start';
  }

  // Cross-axis fallback: e.g. a horizontally-centered toggle on a narrow
  // viewport can't open sideways (neither `start` nor `end` fit), but there
  // is plenty of room above/below — switch the whole axis in that case
  // (and vice versa for `down`/`up` squeezed against a short viewport).
  const bestVerticalSpace = Math.max(spaceBelow, spaceAbove);
  const bestHorizontalSpace = Math.max(spaceLeft, spaceRight);
  if (side === 'down' || side === 'up') {
    if (bestVerticalSpace < menuSize.height + GAP && bestHorizontalSpace > bestVerticalSpace) {
      side = spaceRight >= spaceLeft ? 'end' : 'start';
    }
  } else if (
    bestHorizontalSpace < menuSize.width + GAP
    && bestVerticalSpace > bestHorizontalSpace
  ) {
    side = spaceBelow >= spaceAbove ? 'down' : 'up';
  }

  if (side === 'down' || side === 'up') {
    const top = side === 'down'
      ? toggleRect.bottom + GAP
      : toggleRect.top - menuSize.height - GAP;

    // Align horizontally per the requested `alignment` (start/end/center), then
    // fall back to the opposite edge if the preferred alignment would overflow
    // the viewport, and clamp as a final safety net so it never overflows.
    let left: number;
    if (alignment === 'end') {
      left = toggleRect.right - menuSize.width;
    } else if (alignment === 'center') {
      left = toggleRect.left + (toggleRect.width / 2) - (menuSize.width / 2);
    } else {
      left = toggleRect.left;
    }

    if (left + menuSize.width > viewportWidth - VIEWPORT_PADDING && alignment !== 'end') {
      const altLeft = toggleRect.right - menuSize.width;
      if (altLeft >= VIEWPORT_PADDING) left = altLeft;
    } else if (left < VIEWPORT_PADDING && alignment !== 'start') {
      const altLeft = toggleRect.left;
      if (altLeft + menuSize.width <= viewportWidth - VIEWPORT_PADDING) left = altLeft;
    }

    left = clamp(
      left,
      VIEWPORT_PADDING,
      Math.max(viewportWidth - menuSize.width - VIEWPORT_PADDING, VIEWPORT_PADDING),
    );

    const availableHeight = side === 'down' ? spaceBelow : spaceAbove;

    return {
      top,
      left,
      minWidth: Math.max(toggleRect.width, 160),
      maxHeight: `${Math.max(availableHeight - GAP - VIEWPORT_PADDING, MIN_USABLE_SPACE)}px`,
      resolvedSide: side,
    };
  }

  // side is 'start' or 'end'
  let left = side === 'start'
    ? toggleRect.left - menuSize.width - GAP
    : toggleRect.right + GAP;
  // Safety-net clamp: in rare cases where the toggle is squeezed so tightly
  // that no side of any axis has enough room, keep the menu inside the
  // viewport rather than letting it render off-screen.
  left = clamp(
    left,
    VIEWPORT_PADDING,
    Math.max(viewportWidth - menuSize.width - VIEWPORT_PADDING, VIEWPORT_PADDING),
  );

  // Shift vertically: align with the toggle's top edge by default, but switch
  // to the bottom edge (or clamp) if that would overflow the viewport.
  let { top } = toggleRect;
  if (top + menuSize.height > viewportHeight - VIEWPORT_PADDING) {
    top = toggleRect.bottom - menuSize.height;
  }
  top = clamp(
    top,
    VIEWPORT_PADDING,
    Math.max(viewportHeight - menuSize.height - VIEWPORT_PADDING, VIEWPORT_PADDING),
  );

  return {
    top,
    left,
    minWidth: Math.max(toggleRect.width, 160),
    maxHeight: `${Math.max(viewportHeight - VIEWPORT_PADDING * 2, MIN_USABLE_SPACE)}px`,
    resolvedSide: side,
  };
};

export default function DDropdown(
  {
    actions,
    dropdownToggle,
    className,
    classNameMenu,
    asPortal = false,
    placement = 'auto',
    alignment = 'start',
  }: Props,
) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<MenuCoords | null>(null);
  const [resolvedSide, setResolvedSide] = useState<ResolvedSide>('down');

  // Wraps the toggle in both modes — used to read its viewport-relative rect.
  const toggleRef = useRef<HTMLDivElement>(null);
  // Ref on the rendered <ul> — used to measure its size and for outside-click detection.
  const menuRef = useRef<HTMLUListElement>(null);

  const toggle = () => {
    setCoords(null);
    setOpen((prev) => !prev);
  };

  // Measures the toggle + menu and (re)computes fixed, pixel-perfect coords
  // with collision detection, so the menu never overflows the viewport.
  const updatePosition = useCallback(() => {
    if (!toggleRef.current || !menuRef.current) return;
    const toggleRect = toggleRef.current.getBoundingClientRect();
    // If the toggle itself has scrolled completely out of the viewport
    // (regardless of `placement`), close the menu instead of leaving it
    // rendered detached from the toggle that opened it.
    const toggleIsMeasured = toggleRect.width > 0 || toggleRect.height > 0;
    const toggleIsOutOfView = toggleRect.bottom <= 0
      || toggleRect.top >= window.innerHeight
      || toggleRect.right <= 0
      || toggleRect.left >= window.innerWidth;
    if (toggleIsMeasured && toggleIsOutOfView) {
      setOpen(false);
      return;
    }
    const menuRect = menuRef.current.getBoundingClientRect();
    const { resolvedSide: side, ...menuCoords } = computeCoords(
      toggleRect,
      { width: menuRect.width, height: menuRect.height },
      placement,
      alignment,
    );
    // In portal mode the menu is appended to document.body, whose containing
    // block for `fixed` is always the viewport (no adjustment needed). In
    // inline mode the menu stays next to the toggle, so we must look for a
    // containing-block-establishing ancestor starting from the toggle.
    const offset = asPortal
      ? { top: 0, left: 0 }
      : getFixedPositioningOffset(toggleRef.current);
    setResolvedSide(side);
    setCoords({
      ...menuCoords,
      top: menuCoords.top - offset.top,
      left: menuCoords.left - offset.left,
    });
  }, [placement, alignment, asPortal]);

  // Outside-click detection (checks both the toggle and the floating menu,
  // since in portal mode the menu isn't a DOM descendant of the toggle).
  useLayoutEffect(() => {
    if (!open) return () => {};
    const handler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!toggleRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Computes the initial position synchronously (before paint, to avoid a
  // flicker) and keeps it fresh while the menu is open and the viewport
  // scrolls or resizes.
  useLayoutEffect(() => {
    if (!open) return () => {};
    updatePosition();
    window.addEventListener('scroll', updatePosition, { passive: true, capture: true });
    window.addEventListener('resize', updatePosition, { passive: true });
    return () => {
      window.removeEventListener('scroll', updatePosition, { capture: true });
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, updatePosition]);

  let ToggleElement: React.ReactNode;
  if (dropdownToggle) {
    ToggleElement = typeof dropdownToggle === 'function'
      ? dropdownToggle({ open, toggle })
      : dropdownToggle;
  } else {
    ToggleElement = (
      <DButtonIcon
        variant="link"
        stopPropagationEnabled={false}
        aria-label="Toggle Dropdown"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
        icon="MoreVertical"
      />
    );
  }

  // Until the first measurement is available, keep the menu off-screen but
  // measurable (visibility: hidden preserves layout, unlike display: none).
  const menuStyle: React.CSSProperties = coords
    ? {
      position: 'fixed',
      top: coords.top,
      left: coords.left,
      minWidth: coords.minWidth,
      maxHeight: coords.maxHeight,
      overflowY: 'auto',
      zIndex: 1050,
      transform: 'none',
      visibility: 'visible',
    }
    : {
      position: 'fixed',
      top: 0,
      left: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      zIndex: 1050,
      transform: 'none',
    };

  const menuItems = (
    <ul
      ref={menuRef}
      role="menu"
      className={classNames('dropdown-menu p-2', { show: open }, classNameMenu)}
      style={menuStyle}
    >
      {actions.map((action, index) => {
        if (action.isDivider) {
          return <hr key={index} className="dropdown-divider" />;
        }
        return (
          <li key={index}>
            {action.href ? (
              <a
                className={getItemClass(action)}
                href={action.href}
                onClick={(e) => {
                  if (action.disabled) {
                    e.preventDefault();
                  } else {
                    setOpen(false);
                  }
                }}
              >
                {action.icon && <DIcon icon={action.icon} className="me-2" size="1rem" />}
                {action.label}
              </a>
            ) : (
              <button
                className={getItemClass(action)}
                type="button"
                onClick={() => {
                  if (!action.disabled) {
                    action.onClick?.();
                    setOpen(false);
                  }
                }}
                disabled={action.disabled}
              >
                {action.icon && <DIcon icon={action.icon} className="me-2" size="1rem" />}
                {action.label}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div
      ref={toggleRef}
      className={classNames(`dropdown drop-${resolvedSide} d-inline-block`, className)}
    >
      {ToggleElement}
      {open && (asPortal ? createPortal(menuItems, document.body) : menuItems)}
    </div>
  );
}

/* eslint-disable react/no-array-index-key */
import {
  useCallback,
  useEffect,
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

type MenuCoords = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  minWidth: number;
  maxHeight: string;
};

type DropdownPlacement = 'auto' | 'down' | 'up' | 'start' | 'end';

type Props = {
  actions: DropdownAction[];
  dropdownToggle?: ((props: { open: boolean, toggle: () => void }) => React.ReactNode);
  className?: string;
  classNameMenu?: string;
  asPortal?: boolean;
  placement?: DropdownPlacement;
};

const getItemClass = (action: DropdownAction) => classNames({
  'dropdown-item d-flex align-items-center': true,
  [`dropdown-item-${action.color}`]: !!action.color,
  disabled: action.disabled,
});

export default function DDropdown(
  {
    actions,
    dropdownToggle,
    className,
    classNameMenu,
    asPortal = false,
    placement = 'auto',
  }: Props,
) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<'down' | 'up' | 'start' | 'end'>('down');
  const [menuCoords, setMenuCoords] = useState<MenuCoords | null>(null);

  // Used in default (non-portal) mode: wraps the entire dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  // Used in portal mode: ref on the toggle wrapper to read its viewport coords
  const toggleRef = useRef<HTMLDivElement>(null);
  // Ref on the rendered <ul> — used for outside-click detection in portal mode
  const menuRef = useRef<HTMLUListElement>(null);

  const toggle = () => setOpen((prev) => !prev);
  const resolvedInlinePosition = placement === 'auto' ? position : placement;

  // Compute fixed coords from the toggle's bounding rect (portal mode only)
  const computePortalCoords = useCallback(() => {
    if (!toggleRef.current) return;
    const rect = toggleRef.current.getBoundingClientRect();
    const spaceRight = window.innerWidth - rect.right;
    const spaceBottom = window.innerHeight - rect.bottom;
    const spaceTop = rect.top;
    let resolvedPlacement: DropdownPlacement;
    if (placement === 'auto') {
      if (spaceBottom < 150) {
        resolvedPlacement = 'up';
      } else if (spaceRight < 150) {
        resolvedPlacement = 'start';
      } else {
        resolvedPlacement = 'down';
      }
    } else {
      resolvedPlacement = placement;
    }

    const alignRight = resolvedPlacement === 'start';
    const openUp = resolvedPlacement === 'up';

    setMenuCoords({
      ...openUp ? { bottom: window.innerHeight - rect.top + 4 } : { top: rect.bottom + 4 },
      ...alignRight
        ? { right: window.innerWidth - rect.right }
        : { left: rect.left },
      minWidth: Math.max(rect.width, 160),
      maxHeight: `${Math.max((openUp ? spaceTop : spaceBottom) - 12, 120)}px`,
    });
  }, [placement]);

  // Outside-click: default mode
  useEffect(() => {
    if (asPortal) return () => {};
    const handler = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [asPortal]);

  // Outside-click: portal mode (must check both toggle and floating menu)
  useEffect(() => {
    if (!asPortal) return () => {};
    const handler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!toggleRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [asPortal]);

  // Auto-position: default mode
  useEffect(() => {
    if (asPortal || !open || !dropdownRef.current || placement !== 'auto') return;
    const rect = dropdownRef.current.getBoundingClientRect();
    const spaceBottom = window.innerHeight - rect.bottom;
    const spaceRight = window.innerWidth - rect.right;
    if (spaceBottom < 150) setPosition('up');
    else if (spaceRight < 150) setPosition('start');
    else setPosition('down');
  }, [asPortal, open, placement]);

  // Compute + track coords: portal mode
  // Re-runs whenever the menu opens and keeps coords fresh on scroll/resize
  useEffect(() => {
    if (!asPortal || !open) return () => {};
    computePortalCoords();
    const update = () => computePortalCoords();
    window.addEventListener('scroll', update, { passive: true, capture: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      window.removeEventListener('scroll', update, { capture: true });
      window.removeEventListener('resize', update);
    };
  }, [asPortal, open, computePortalCoords]);

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

  const portalMenuStyle: React.CSSProperties | undefined = asPortal && menuCoords
    ? {
      position: 'fixed',
      top: menuCoords.top,
      bottom: menuCoords.bottom,
      left: menuCoords.left,
      right: menuCoords.right,
      minWidth: menuCoords.minWidth,
      maxHeight: menuCoords.maxHeight,
      overflowY: 'auto',
      zIndex: 1050,
      transform: 'none',
    }
    : undefined;

  const inlineMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: resolvedInlinePosition === 'up' ? 'auto' : '100%',
    bottom: resolvedInlinePosition === 'up' ? '100%' : 'auto',
    left: resolvedInlinePosition === 'start' ? 'auto' : 0,
    right: resolvedInlinePosition === 'start' ? '0' : 'auto',
    transform: resolvedInlinePosition === 'up' ? 'translateY(-4px)' : 'translateY(4px)',
  };

  const menuItems = (
    <ul
      ref={menuRef}
      role="menu"
      className={classNames('dropdown-menu p-2', { show: open }, classNameMenu)}
      style={portalMenuStyle ?? inlineMenuStyle}
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

  if (asPortal) {
    return (
      <div ref={toggleRef} className={classNames('dropdown', className)}>
        {ToggleElement}
        {open && createPortal(menuItems, document.body)}
      </div>
    );
  }

  return (
    <div
      className={classNames(`dropdown drop-${position}`, className)}
      ref={dropdownRef}
    >
      {ToggleElement}
      {menuItems}
    </div>
  );
}

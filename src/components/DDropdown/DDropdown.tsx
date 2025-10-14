/* eslint-disable react/no-array-index-key */
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import DButtonIcon from '../DButtonIcon';
import DIcon from '../DIcon';

type DropdownAction = {
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  icon?: string;
  color?: 'default' | 'danger' | 'success' | 'warning' | 'info';
  isDivider?: boolean;
  label: string;
};

type Props = {
  actions: DropdownAction[];
  dropdownToggle?: ((props: { open: boolean, toggle: () => void }) => React.ReactNode);
  className?: string;
};

const getItemClass = (action: DropdownAction) => {
  const base = `dropdown-item d-flex align-items-center 
  ${action.color ? `dropdown-item-${action.color}` : ''} ${action.disabled ? 'disabled' : ''}`;
  return base;
};

export default function ActionDropdown(
  {
    actions,
    dropdownToggle,
    className,
  }: Props,
) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<'down' | 'up' | 'start' | 'end'>('down'); // 🆕

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 🆕 Calcular posición del menú al abrir
  useEffect(() => {
    if (open && dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const spaceBottom = window.innerHeight - rect.bottom;
      const spaceRight = window.innerWidth - rect.right;

      if (spaceBottom < 150) {
        setPosition('up');
      } else if (spaceRight < 150) {
        setPosition('start');
      } else {
        setPosition('down');
      }
    }
  }, [open]);

  let ToggleElement: React.ReactNode;

  if (dropdownToggle) {
    if (typeof dropdownToggle === 'function') {
      ToggleElement = dropdownToggle({ open, toggle: () => setOpen(!open) });
    } else {
      ToggleElement = dropdownToggle;
    }
  } else {
    ToggleElement = (
      <DButtonIcon
        variant="link"
        stopPropagationEnabled={false}
        onClick={() => setOpen(!open)}
        icon="three-dots-vertical"
      />
    );
  }

  return (
    <div
      className={`dropdown position-relative drop-${position} ${className}`}
      ref={dropdownRef}
    >
      {ToggleElement}
      <ul
        style={{
          position: 'absolute',
          top: position === 'up' ? 'auto' : '100%',
          bottom: position === 'up' ? '100%' : 'auto',
          left: position === 'start' ? 'auto' : 0,
          right: position === 'start' ? '0' : 'auto',
          transform: 'translateY(4px)',
        }}
        className={`dropdown-menu p-2 ${open ? 'show' : ''}`}
      >
        {actions.map((action, index) => {
          if (action.isDivider) {
            return (
              <hr
                key={index}
                className="dropdown-divider"
              />
            );
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
                  {action.icon && (
                    <DIcon
                      icon={action.icon}
                      className="me-2"
                      size="1rem"
                    // style={{ '--bs-icon-size': '1rem' }}
                    />
                  )}
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
                  {action.icon && (
                    <DIcon
                      icon={action.icon}
                      className="me-2"
                      size="1rem"
                    // style={{ '--bs-icon-size': '1rem' }}
                    />
                  )}
                  {action.label}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

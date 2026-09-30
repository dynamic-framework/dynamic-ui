import classNames from 'classnames';
import {
  useMemo,
  useState,
  useEffect,
  useId,
} from 'react';

import type {
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import DIcon from '../DIcon';

import { useDContext } from '../../contexts';
import type { BaseProps, FamilyIconProps } from '../interface';

type Props =
  & BaseProps
  & FamilyIconProps
  & PropsWithChildren<{
    id?: string;
    Component: ReactElement<unknown> | ReactNode;
    /**
     * Reactive prop for controlled and uncontrolled mode.
     *
     * @param true show the component closed (collapsed)
     * @param false show the component open (expanded)
     */
    defaultCollapsed?: boolean;
    onChange?: (value: boolean) => void;
    iconOpen?: string;
    iconClose?: string;
  }>;

export default function DCollapse(
  {
    id,
    className,
    style,
    Component,
    defaultCollapsed = true,
    onChange,
    children,
    iconOpen: iconOpenProp,
    iconClose: iconCloseProp,
    iconFamilyClass,
    iconFamilyPrefix,
    iconMaterialStyle = false,
    dataAttributes,
  }: Props,
) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const innerId = useId();
  const bodyId = `${id ?? innerId}Body`;

  const onChangeCollapse = () => {
    setCollapsed((prev) => {
      const next = !prev;
      if (onChange) {
        onChange(next);
      }
      return next;
    });
  };

  useEffect(() => {
    setCollapsed(defaultCollapsed);
  }, [defaultCollapsed]);

  const {
    iconMap: {
      chevronDown,
      chevronUp,
    },
  } = useDContext();

  const iconOpen = useMemo(() => iconOpenProp || chevronDown, [chevronDown, iconOpenProp]);
  const iconClose = useMemo(() => iconCloseProp || chevronUp, [chevronUp, iconCloseProp]);

  return (
    <div
      id={id}
      className={classNames('df-collapse', className)}
      style={style}
      {...dataAttributes}
    >
      <button
        className="df-collapse-trigger"
        type="button"
        // `aria-expanded` and `aria-controls` are what make this a disclosure
        // to a screen reader. 2.x had neither: the button announced only its
        // label, with no indication that it opened anything or what.
        aria-expanded={!collapsed}
        aria-controls={bodyId}
        onClick={onChangeCollapse}
      >
        <div className="df-collapse-trigger-label">
          {Component}
        </div>
        <DIcon
          className="df-collapse-trigger-end df-collapse-trigger-icon"
          color="primary"
          size="20px"
          icon={collapsed ? iconOpen : iconClose}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      </button>
      <div
        id={bodyId}
        className="df-collapse-body"
        {...!collapsed && { 'data-expanded': '' }}
      >
        <div className="df-collapse-body-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

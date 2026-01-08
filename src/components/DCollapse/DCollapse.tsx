import classNames from 'classnames';
import {
  useMemo,
  useState,
} from 'react';

import type {
  PropsWithChildren,
  ReactElement,
  ReactNode,
} from 'react';

import { PREFIX_BS } from '../config';
import DIcon from '../DIcon';

import { useDContext } from '../../contexts';
import type { BaseProps, CustomStyles, FamilyIconProps } from '../interface';

type Props =
  & BaseProps
  & FamilyIconProps
  & PropsWithChildren<{
    id?: string;
    Component: ReactElement<unknown> | ReactNode;
    hasSeparator?: boolean;
    /**
     * Initial state of the component uncontrolled.
     *
     * @param true show the component closed (collapsed)
     * @param false show the component open (expanded)
     */
    defaultCollapsed?: boolean;
    /**
     * Initial state of the component controlled.
     *
     * @param true show the component closed (collapsed)
     * @param false show the component open (expanded)
     */
    collapsed?: boolean;
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
    hasSeparator = false,
    defaultCollapsed = true,
    collapsed: collapsedProp,
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
  const [collapsedState, setCollapsedState] = useState(defaultCollapsed);
  const isControlled = collapsedProp !== undefined;
  const collapsed = isControlled ? collapsedProp as boolean : collapsedState;

  const onChangeCollapse = () => {
    if (isControlled) {
      if (onChange) {
        onChange(!collapsed);
      }
      return;
    }
    setCollapsedState((prev) => {
      const next = !prev;
      if (onChange) {
        onChange(next);
      }
      return next;
    });
  };

  const {
    iconMap: {
      chevronDown,
      chevronUp,
    },
  } = useDContext();

  const iconOpen = useMemo(() => iconOpenProp || chevronDown, [chevronDown, iconOpenProp]);
  const iconClose = useMemo(() => iconCloseProp || chevronUp, [chevronUp, iconCloseProp]);

  const generateStyles = useMemo<CustomStyles>(() => ({
    [`--${PREFIX_BS}collapse-separator-display`]: hasSeparator ? 'block' : 'none',
  }), [hasSeparator]);

  return (
    <div
      id={id}
      className={classNames('collapse-container', className)}
      style={style}
      {...dataAttributes}
    >
      <button
        className="collapse-button"
        type="button"
        onClick={onChangeCollapse}
      >
        <div className="flex-grow-1">
          {Component}
        </div>
        <DIcon
          color="gray"
          size="1rem"
          icon={collapsed ? iconOpen : iconClose}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      </button>
      {!collapsed && (
        <div
          className={classNames({
            'collapse-body': true,
          })}
          style={generateStyles}
        >
          {children}
        </div>
      )}
    </div>
  );
}

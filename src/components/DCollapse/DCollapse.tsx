import classNames from 'classnames';
import {
  useMemo,
  useState,
  useEffect,
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
    hasSeparator = false,
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

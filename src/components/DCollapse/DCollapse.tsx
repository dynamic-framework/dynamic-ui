import classNames from 'classnames';
import {
  useState,
  useMemo,
} from 'react';

import type {
  PropsWithChildren,
  ReactNode,
  ReactElement,
} from 'react';

import { PREFIX_BS } from '../config';
import DIcon from '../DIcon';

import type { BaseProps, CustomStyles, FamilyIconProps } from '../interface';
import { useDContext } from '../../contexts';

type Props =
& BaseProps
& FamilyIconProps
& PropsWithChildren<{
  id?: string;
  Component: ReactElement | ReactNode;
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
    defaultCollapsed = false,
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
  const [toggle, setToggle] = useState(defaultCollapsed);

  const onChangeCollapse = () => {
    setToggle((prev) => {
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

  const iconOpen = useMemo(() => iconOpenProp || chevronUp, [chevronUp, iconOpenProp]);
  const iconClose = useMemo(() => iconCloseProp || chevronDown, [chevronDown, iconCloseProp]);

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
          color={`var(--${PREFIX_BS}gray)`}
          size={`var(--${PREFIX_BS}fs-small)`}
          icon={toggle ? iconOpen : iconClose}
          familyClass={iconFamilyClass}
          familyPrefix={iconFamilyPrefix}
          materialStyle={iconMaterialStyle}
        />
      </button>
      {toggle && (
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

import { useMemo } from 'react';
import classNames from 'classnames';

import type { PropsWithChildren } from 'react';

import DIcon from '../DIcon';

import type { BaseProps, AlertBoxTheme, FamilyIconProps } from '../interface';

type Props =
  & BaseProps
  & FamilyIconProps
  & PropsWithChildren<{
    id?: string;
    theme?: AlertBoxTheme;
    icon?: string;
  }>;

export default function DAlertBox(
  {
    theme = 'box-secondary',
    icon = 'info-circle',
    iconFamilyClass,
    iconFamilyPrefix,
    children,
    id,
    className,
    style,
  }: Props,
) {
  const generateClasses = useMemo(
    () => ({
      'alert alert-box': true,
      [`alert-${theme}`]: true,
      ...className && { [className]: true },
    }),
    [theme, className],
  );

  return (
    <div
      className={classNames(generateClasses)}
      style={style}
      role="alert"
      id={id}
    >

      <DIcon
        className="alert-icon"
        icon={icon}
        {...iconFamilyClass && { familyClass: iconFamilyClass }}
        {...iconFamilyPrefix && { familyPrefix: iconFamilyPrefix }}
      />
      <div className="alert-text">
        {children}
      </div>
    </div>
  );
}

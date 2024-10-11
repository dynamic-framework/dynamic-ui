import type { CSSProperties } from 'react';

export type ClassMap = { [className: string]: boolean };
export type CustomStyles = Record<string, string | undefined> | undefined;
export type InputState = 'focus-visible' | 'hover' | 'active' | 'disabled';
export type FormControlLayoutDirection = 'horizontal' | 'vertical';
export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current'?: string,
};
export type ComponentSize = 'sm' | 'lg';
export type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type AvatarSize = 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';

export type DataAttributes = Record<`data-${string}`, string | number | undefined | null | boolean>;

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  dataAttributes?: DataAttributes;
};

export type FamilyIconProps = {
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  iconMaterialStyle?: boolean;
};
export type LabelIconProps = {
  labelIcon?: string;
  labelIconFamilyClass?: string;
  labelIconFamilyPrefix?: string;
  labelIconMaterialStyle?: boolean;
};
export type StartIconProps = {
  iconStart?: string;
  iconStartDisabled?: boolean;
  iconStartFamilyClass?: string;
  iconStartFamilyPrefix?: string;
  iconStartAriaLabel?: string;
  iconStartTabIndex?: number;
  iconStartMaterialStyle?: boolean;
};
export type EndIconProps = {
  iconEnd?: string;
  iconEndDisabled?: boolean;
  iconEndFamilyClass?: string;
  iconEndFamilyPrefix?: string;
  iconEndAriaLabel?: string;
  iconEndTabIndex?: number;
  iconEndMaterialStyle?: boolean;
};

export type AlertTheme = 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary';
export type AlertThemeIconMap = {
  [state in AlertTheme]: string;
};

export type ButtonVariant = 'outline' | 'link';
export type ButtonType = 'submit' | 'reset' | 'button';

export type InputCheckType = 'checkbox' | 'radio';

export type PinInputMode = 'numeric' | 'text' | 'tel';
export type PinInputType = 'number' | 'text' | 'tel';

export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalFullScreenFrom = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type OffcanvasPositionToggleFrom = 'top' | 'bottom' | 'start' | 'end';

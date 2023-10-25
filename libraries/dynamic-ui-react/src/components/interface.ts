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

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
};

export type FamilyIconProps = {
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
};
export type LabelIconProps = {
  labelIcon?: string;
  labelIconFamilyClass?: string;
  labelIconFamilyPrefix?: string;
};
export type StartIconProps = {
  iconStart?: string;
  iconStartFamilyClass?: string;
  iconStartFamilyPrefix?: string;
};
export type EndIconProps = {
  iconEnd?: string;
  iconEndFamilyClass?: string;
  iconEndFamilyPrefix?: string;
};

export type AlertType = 'success' | 'info' | 'light' | 'dark' | 'warning' | 'danger';
export type AlertTypeIconMap = {
  [state in AlertType]: string;
};

export type ButtonVariant = 'outline' | 'link';
export type ButtonType = 'submit' | 'reset' | 'button';

export type InputCheckType = 'checkbox' | 'radio';

export type PinInputMode = 'numeric' | 'text' | 'tel';
export type PinInputType = 'number' | 'text' | 'tel';

export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalFullScreenFrom = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type OffcanvasPositionToggleFrom = 'top' | 'bottom' | 'start' | 'end';

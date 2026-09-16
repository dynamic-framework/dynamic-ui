import type {
  ComponentType,
  CSSProperties,
  ReactNode,
  SVGProps,
} from 'react';

export type ClassMap = { [className: string]: boolean };
export type CustomStyles = Record<string, string | undefined> | undefined;
export type InputState = 'focus-visible' | 'hover' | 'active' | 'disabled';
export type FormControlLayoutDirection = 'horizontal' | 'vertical';
export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current'?: string,
};

/**
 * The label of a form control.
 *
 * Any node is accepted so a label can carry a link, an info trigger or other
 * markup — the terms-and-conditions pattern, for instance. A text label still
 * doubles as the control's accessible name; a richer one needs that name given
 * explicitly, and does not fit the `floatingLabel` layout where one exists.
 *
 * Which prop carries the name depends on the component: the ones that spread
 * the native input attributes take `aria-label`, the rest expose the camelCase
 * `ariaLabel`. A development-only warning names the right one per component.
 */
export type DLabel = ReactNode;

export type ComponentSize = 'sm' | 'lg';
export type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export type AvatarSize = 'xs' | 'sm' | 'lg' | 'xl' | 'xxl';

export type DataAttributes = Record<`data-${string}`, string | number | undefined | null | boolean>;

export type BaseProps = {
  style?: CSSProperties;
  className?: string;
  dataAttributes?: DataAttributes;
};

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;
export type IconValue = string | IconComponent;

export type FamilyIconProps = {
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
  iconMaterialStyle?: boolean;
};
export type StartIconProps = {
  iconStart?: IconValue;
  iconStartDisabled?: boolean;
  iconStartFamilyClass?: string;
  iconStartFamilyPrefix?: string;
  iconStartAriaLabel?: string;
  iconStartTabIndex?: number;
  iconStartMaterialStyle?: boolean;
};
export type EndIconProps = {
  iconEnd?: IconValue;
  iconEndDisabled?: boolean;
  iconEndFamilyClass?: string;
  iconEndFamilyPrefix?: string;
  iconEndAriaLabel?: string;
  iconEndTabIndex?: number;
  iconEndMaterialStyle?: boolean;
};

export type ComponentColor = string;
export type ComponentStateColor = 'success' | 'danger' | 'warning' | 'info';
export type AlertThemeIconMap = {
  [state in ComponentStateColor]: string;
};

export type ButtonVariant = 'solid' | 'outline' | 'link' | 'soft';
export type ButtonType = 'submit' | 'reset' | 'button';

export type InputCheckType = 'checkbox' | 'radio';

export type PinInputMode = 'numeric' | 'text' | 'tel';
export type PinInputType = 'number' | 'text' | 'tel';

export type ModalSize = 'sm' | 'lg' | 'xl';
export type ModalFullScreenFrom = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type OffcanvasPositionToggleFrom = 'top' | 'bottom' | 'start' | 'end';

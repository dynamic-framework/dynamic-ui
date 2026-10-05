import type { ComponentType, CSSProperties, SVGProps } from 'react';

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

/**
 * Where a modal panel is anchored. `center` is a dialog, the four edges are
 * drawers and sheets, `fill` covers the viewport.
 *
 * One question with one answer, where 2.x had two components and four props:
 * the offcanvas's `openFrom` and the modal's `centered`, `fullScreen` and
 * `fullScreenFrom`. All four answer "where does the panel sit".
 *
 * Because the prop is responsive, `{ xs: 'fill', md: 'center' }` says what
 * `fullScreen` + `fullScreenFrom="md"` said with two props, and
 * `{ xs: 'bottom', md: 'center' }` — a sheet on a phone, a dialog on a desktop
 * — is a single panel rather than two components swapped at a breakpoint.
 */
export type OverlayPlacement = 'center' | 'start' | 'end' | 'top' | 'bottom' | 'fill';

/**
 * One size scale for every placement: the width of a side drawer, the height
 * of a top/bottom sheet, the max-width of a centred dialog.
 *
 * 2.x had no such scale. `ModalSize` was `sm | lg | xl` — Bootstrap treats the
 * middle rung as the implicit default, so there was no name for it — and the
 * offcanvas had no size prop at all: its width came from the stylesheet, so the
 * only way to change it was `style`.
 */
export type OverlaySize = 'sm' | 'md' | 'lg' | 'xl';

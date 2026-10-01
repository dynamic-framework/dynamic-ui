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
 * Replaces `OverlayPlacement` plus the modal's `centered` and
 * `fullScreen`/`fullScreenFrom` — one question with one answer. Because the
 * prop is responsive, `{ xs: 'fill', md: 'center' }` is what
 * `fullScreenFrom="md"` was trying to say; that prop emitted its value into an
 * attribute no rule ever matched, so it went fullscreen at every width.
 */
export type OverlayPlacement = 'center' | 'start' | 'end' | 'top' | 'bottom' | 'fill';

/**
 * One size scale for every placement: the width of a side drawer, the height
 * of a top/bottom sheet, the max-width of a centred dialog.
 *
 * `md` was missing from the old `OverlaySize` while the token and the CSS rule
 * for it both existed, so one of the four rungs was unreachable.
 */
export type OverlaySize = 'sm' | 'md' | 'lg' | 'xl';

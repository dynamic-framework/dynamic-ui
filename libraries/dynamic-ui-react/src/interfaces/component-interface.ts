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

export type FamilyIcon = {
  iconFamilyClass?: string;
  iconFamilyPrefix?: string;
};
export type LabelIcon = {
  labelIcon?: string;
  labelIconFamilyClass?: string;
  labelIconFamilyPrefix?: string;
};
export type StartIcon = {
  iconStart?: string;
  iconStartFamilyClass?: string;
  iconStartFamilyPrefix?: string;
};
export type EndIcon = {
  iconEnd?: string;
  iconEndFamilyClass?: string;
  iconEndFamilyPrefix?: string;
};

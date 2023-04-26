export type ClassMap = { [className: string]: boolean };
export type IconStateMap = { [state: string]: string };
export type InputState = 'focus' | 'hover' | 'active' | 'disabled';
export type FormControlLayoutDirection = 'horizontal' | 'vertical';
export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current'?: string,
};

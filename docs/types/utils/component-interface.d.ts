export type ClassMap = {
  [className: string]: boolean;
};
export type InputState = 'focus-visible' | 'hover' | 'active' | 'disabled';
export type FormControlLayoutDirection = 'horizontal' | 'vertical';
export type NavegableProps = {
  href: string;
  target?: string;
  'aria-current'?: string;
};
export type ComponentSize = 'sm' | 'lg';
export type BreakpointSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

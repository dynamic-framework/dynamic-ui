export type ClassMap = { [className: string]: boolean };
export type InputState = 'focus' | 'hover' | 'active' | 'disabled';
export type InputThemes = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger';
export type FormControlLayoutDirection = 'horizontal' | 'vertical';
export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current'?: string,
};

export declare type ClassMap = {
  [className: string]: boolean;
};
export declare type IconStateMap = {
  [state: string]: string;
};
export declare type InputState = 'focus' | 'hover' | 'active' | 'disabled';
export declare type FormControlLayoutDirection = 'horizontal' | 'vertical';
export declare type NavegableProps = {
  href: string;
  target?: string;
  'aria-current'?: string;
};
export declare const ICON_STATE: IconStateMap;
export declare const prefixBS = "bs-";

import BOOTSTRAP_ICONS from './bootstrap-icons.json';

export const ICONS = BOOTSTRAP_ICONS;
export const FIRST_ICON = BOOTSTRAP_ICONS[0];

export const COLOR_THEMES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
export const THEMES = [...COLOR_THEMES, 'light', 'dark'];

export const THEMES_WITH_EMPTY = [undefined, ...THEMES];
export const INPUT_STATE = ['focus-visible', 'hover', 'active', 'disabled'];

export const COMPONENT_SIZE = [undefined, 'sm', 'lg'];

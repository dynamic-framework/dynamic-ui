import BOOTSTRAP_ICONS from './bootstrap-icons.json';
import BOOTSTRAP_THEMES from './bootstrap-themes.json';

export const ICONS = BOOTSTRAP_ICONS;
export const FIRST_ICON = BOOTSTRAP_ICONS[0];

export const THEMES = BOOTSTRAP_THEMES;

export const ALERT_TYPES = ['success', 'info', 'danger', 'warning', 'light', 'dark'];

export const THEMES_WITH_EMPTY = [undefined, ...THEMES];
export const INPUT_STATE = ['focus-visible', 'hover', 'active', 'disabled'];

export const COMPONENT_SIZE = [undefined, 'sm', 'lg'];

import BOOTSTRAP_ICONS from './bootstrap-icons.json';
import BOOTSTRAP_COLORS from './bootstrap-colors.json';
import BOOTSTRAP_THEMES from './bootstrap-themes.json';

export const ICONS = BOOTSTRAP_ICONS;
export const FIRST_ICON = BOOTSTRAP_ICONS[0];

export const THEMES = BOOTSTRAP_THEMES;
export const ALL_COLORS = [...BOOTSTRAP_THEMES, ...BOOTSTRAP_COLORS];

export const ALERT_TYPES = ['success', 'info', 'danger', 'warning', 'light', 'dark'];

export const ALL_COLORS_WITH_EMPTY = [undefined, ...ALL_COLORS];
export const INPUT_STATE = ['focus-visible', 'hover', 'active', 'disabled'];

export const COMPONENT_SIZE = [undefined, 'sm', 'lg'];

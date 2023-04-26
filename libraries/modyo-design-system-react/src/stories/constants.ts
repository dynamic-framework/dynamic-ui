import BOOTSTRAP_ICONS from './bootstrap-icons.json';
import BOOTSTRAP_COLORS from './bootstrap-colors.json';
import BOOTSTRAP_THEMES from './bootstrap-themes.json';

export const ICONS = BOOTSTRAP_ICONS;
export const FIRST_ICON = BOOTSTRAP_ICONS[0];
export const ALL_COLORS = [...BOOTSTRAP_THEMES, ...BOOTSTRAP_COLORS];
export const ALL_COLORS_WITH_EMPTY = [undefined, ...ALL_COLORS];
export const INPUT_STATE = ['focus', 'hover', 'active', 'disabled'];

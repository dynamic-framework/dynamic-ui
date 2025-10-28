import BOOTSTRAP_ICONS from '../bootstrap-icons.json';

export const ICONS = BOOTSTRAP_ICONS;
export const FIRST_ICON = BOOTSTRAP_ICONS[0];

export const COLOR_THEMES = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
export const THEMES = [...COLOR_THEMES, 'light', 'dark'];

export const COLOR_STATES = ['success', 'info', 'warning', 'danger'];

export const THEMES_WITH_EMPTY = [undefined, ...THEMES];
export const INPUT_STATE = ['focus-visible', 'hover', 'active', 'disabled'];

export const COMPONENT_SIZE = [undefined, 'sm', 'lg'];
export const AVATAR_SIZE = [undefined, 'xs', 'sm', 'lg', 'xl', 'xxl'];

export const TAB_VARIANTS = ['underline', 'pills', 'tabs'];

export const CONTEXT_PROVIDER_CONFIG_MATERIAL = {
  icon: {
    materialStyle: true,
    familyPrefix: '',
    familyClass: 'material-symbols-outlined',
  },
  iconMap: {
    x: 'close_small',
    xLg: 'close',
    chevronUp: 'expand_less',
    chevronDown: 'expand_more',
    chevronLeft: 'chevron_left',
    chevronRight: 'chevron_right',
    upload: 'cloud_upload',
    calendar: 'calendar_month',
    check: 'verified',
    alert: {
      warning: 'warning',
      danger: 'error',
      success: 'done',
      info: 'info',
      dark: 'info',
      light: 'info',
      primary: 'info',
      secondary: 'info',
    },
    input: {
      search: 'search',
      show: 'visibility',
      hide: 'visibility_off',
      increase: 'add_box',
      decrease: 'indeterminate_check_box',
    },
  },
};

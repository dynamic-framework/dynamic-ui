export type AlertType = 'success' | 'info' | 'light' | 'dark' | 'warning' | 'danger';
export type AlertTypeIconMap = {
  [state in AlertType]: string;
};

export const ALERT_TYPE_ICON: AlertTypeIconMap = {
  warning: 'exclamation-circle-fill',
  danger: 'exclamation-triangle',
  success: 'check-circle-fill',
  info: 'info-circle-fill',
  light: 'info-circle-fill',
  dark: 'info-circle-fill',
};

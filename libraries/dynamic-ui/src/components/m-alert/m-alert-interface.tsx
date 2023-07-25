export type AlertType = 'success' | 'info' | 'light' | 'dark' | 'warning' | 'danger';
export type AlertTypeIconMap = {
  [state in AlertType]: string;
};

export const ALERT_TYPE_ICON: AlertTypeIconMap = {
  warning: 'exclamation-circle',
  danger: 'exclamation-triangle',
  success: 'check-circle',
  info: 'info-circle',
  light: 'info-circle',
  dark: 'info-circle',
};

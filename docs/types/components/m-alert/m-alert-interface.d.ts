export type AlertType = 'success' | 'info' | 'light' | 'dark' | 'warning' | 'danger';
export type AlertTypeIconMap = {
  [state in AlertType]: string;
};
export declare const ALERT_TYPE_ICON: AlertTypeIconMap;

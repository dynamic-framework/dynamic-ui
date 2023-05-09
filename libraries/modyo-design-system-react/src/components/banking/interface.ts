export type PermissionItemType = {
  id: string;
  /* State: enabled or disabled */
  enabled: boolean;
  label: string;
  /* Type: 'switch' or 'custom' */
  type: string;
  /* On - Off - Custom */
  value: unknown;
};

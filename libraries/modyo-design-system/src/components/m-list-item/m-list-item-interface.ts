export type ListItemVariant = 'default' | 'selectable' | 'navegable';

export type SelectableProps = {
  id: string;
  name: string;
  value?: string | number;
  checked?: boolean;
};

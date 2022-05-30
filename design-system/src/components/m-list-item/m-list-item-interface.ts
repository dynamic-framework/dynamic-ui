export type ListItemVariant = 'default' | 'selectable' | 'navegable';

export const tagType = {
  default: 'div',
  selectable: 'label',
  navegable: 'a',
};

export type SelectableProps = {
  id: string;
  name?: string
};

export type NavegableProps = {
  href: string,
  target?: string,
};

export type NavLinkVariant = 'option' | 'navegable';

export const tagType = {
  option: 'button',
  navegable: 'a',
};

export type OptionProps = {
  id: string;
  type: string,
  role: string,
  'data-bs-toggle': string,
  'data-bs-target': string,
  'aria-controls': string,
  'aria-selected': string
};

export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current': string,
};

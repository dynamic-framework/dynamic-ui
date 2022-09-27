export type NavLinkVariant = 'option' | 'navegable';

export type OptionProps = {
  id: string;
  type: string,
  role: string,
  'data-bs-toggle': string,
  'data-bs-target': string,
  'aria-controls': string,
  'aria-selected': string
};

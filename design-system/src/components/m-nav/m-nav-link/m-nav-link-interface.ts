export type NavLinkVariant = 'option' | 'navegable';

export const tagType = {
  option: 'button',
  navegable: 'a',
};

// <button
// id="pills-home-tab"
// data-bs-toggle="pill"
// data-bs-target="#pills-home"
// type="button"
// role="tab"
// aria-controls="pills-home"
// aria-selected="true">
// Home</button>

export type OptionProps = {
  id: string;
  type: string,
  role: string,
  'data-bs-toggle': string,
  'data-bs-target': string,
  'aria-controls': string,
  'aria-selected': boolean
};

// <a
// class="nav-link active"
// aria-current="page"
// href="#"
// target="blank">
// Active</a>

export type NavegableProps = {
  href: string,
  target?: string,
  'aria-current': string,
};

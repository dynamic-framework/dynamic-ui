import { createStore } from '@stencil/store';

type Store = {
  iconFamilyClass: string;
  iconFamilyPrefix: string;
};

const { state, set } = createStore<Store>({
  iconFamilyClass: 'bi',
  iconFamilyPrefix: 'bi-',
});

export type IconSettings = {
  familyClass?: string;
  familyPrefix?: string;
};

export function setIconSettings(
  {
    familyClass = 'bi',
    familyPrefix = 'bi-',
  }: IconSettings,
) {
  set('iconFamilyClass', familyClass);
  set('iconFamilyPrefix', familyPrefix);
}

export default state;

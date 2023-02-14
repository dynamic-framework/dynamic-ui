import { createStore } from '@stencil/store';
const { state, set } = createStore({
  iconFamilyClass: 'bi',
  iconFamilyPrefix: 'bi-',
});
export function setIconSettings({ familyClass = 'bi', familyPrefix = 'bi-', }) {
  set('iconFamilyClass', familyClass);
  set('iconFamilyPrefix', familyPrefix);
}
export default state;

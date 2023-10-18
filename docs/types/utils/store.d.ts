type Store = {
  iconFamilyClass: string;
  iconFamilyPrefix: string;
};
declare const state: Store;
export type IconSettings = {
  familyClass?: string;
  familyPrefix?: string;
};
export declare function setIconSettings({ familyClass, familyPrefix, }: IconSettings): void;
export default state;

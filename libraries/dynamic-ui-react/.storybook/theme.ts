import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  fontBase: '"Source Sans Pro", sans-serif',

  brandTitle: 'Dynamic',
  brandUrl: 'https://modyo.com',
  brandImage: 'https://cloud.modyocdn.com/uploads/77647270-2c05-40b4-9fa1-2e57fba27f80/original/dynamic_framework.svg',
  brandTarget: '_self',

  colorPrimary: '#d81b60',
  colorSecondary: '#4848b7',

  appBg: '#fbfaff',
  appContentBg: '#fbfaff',
  appBorderColor: '#e6e6f3',
  appBorderRadius: 8,

  textColor: '#161723',
  textInverseColor: '#ffffff',
  textMutedColor: '#6d6d82',

  barTextColor: '#9E9E9E',
  barSelectedColor: '#4848b7',
  barBg: '#fbfaff',
});

import { create } from 'storybook/theming/create';

export default create({
  base: 'light',
  fontBase: '"Jost", sans-serif',

  brandTitle: 'Dynamic',
  brandUrl: 'https://react.dynamicframework.dev',
  brandImage: 'https://cdn.modyo.cloud/uploads/8c051a86-0d5b-4064-b5fd-76fb346e0fb0/original/dynamic_logo.svg',
  brandTarget: '_self',

  colorPrimary: '#2068d5',
  colorSecondary: '#2068d5',

  appBg: '#fbfaff',
  appContentBg: '#fbfaff',
  appBorderColor: '#e6e6f3',
  appBorderRadius: 8,

  textColor: '#161723',
  textInverseColor: '#ffffff',
  textMutedColor: '#6d6d82',

  barTextColor: '#9E9E9E',
  barSelectedColor: '#2068d5',
  barBg: '#fbfaff',
});

import { createApp } from 'vue';
import { DesignSystem } from '@modyo-dynamic/modyo-design-system-vue';
import { defineCustomElements } from '@modyo-dynamic/modyo-design-system/loader';

import '@modyo-dynamic/modyo-design-system/dist/design-system/design-system.css';

import App from './App.vue';

// TODO: this is a hack to wait for the custom elements to be defined
await defineCustomElements();

Array.from(document.querySelectorAll('#vue-profile'))
  .forEach((container) => {
    createApp(App)
      .use(DesignSystem)
      .mount(container);
  });

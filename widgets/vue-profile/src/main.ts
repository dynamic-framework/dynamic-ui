import { createApp } from 'vue';
import { DesignSystem } from '@modyolabs/vue-design-system';
import { defineCustomElements } from '@modyolabs/design-system/loader';

import '@modyolabs/design-system/dist/design-system/design-system.css';

import App from './App.vue';

// TODO: this is a hack to wait for the custom elements to be defined
await defineCustomElements();

Array.from(document.querySelectorAll('#vue-profile'))
  .forEach((container) => {
    createApp(App)
      .use(DesignSystem)
      .mount(container);
  });

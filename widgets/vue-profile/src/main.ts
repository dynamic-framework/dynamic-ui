import { createApp } from 'vue';
import { applyPolyfills, defineCustomElements } from '@modyo/design-system/loader';
import kebabCase from 'lodash.kebabcase';

import App from './App.vue';


// to solve this problem https://github.com/ionic-team/stencil/issues/2804
// TODO: analyze the ionic team solution to solve this with a plugin
//  https://github.com/ionic-team/ionic-framework/blob/main/packages/vue/src/ionic-vue.ts#L20
await applyPolyfills();

await defineCustomElements(window, {
  ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(kebabCase(eventName), cb, opts),
  rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(kebabCase(eventName), cb, opts),
  ce: (eventName: string, opts: any) => new CustomEvent(kebabCase(eventName), opts)
} as any);

createApp(App).mount('#app');

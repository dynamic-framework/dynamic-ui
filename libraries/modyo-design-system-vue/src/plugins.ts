// https://github.com/ionic-team/ionic-framework/blob/49da5f85e3be3dc31777939f41b4d16dca0b926b/packages/vue/src/ionic-vue.ts
// https://github.com/ionic-team/ionic-framework/commit/dc48a9f1a2dff8a2d644112bbe1df8b0b6811848#diff-8cee275a9cf24f29120acc6b18432e1b43901e53e260a64bd80c5601a6b97210
import { App, Plugin } from 'vue';
import { initialize, Config } from '@modyolabs/modyo-design-system';

export const toKebabCase = (eventName: string) => eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();

export const getHelperFunctions = () => ({
  ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(toKebabCase(eventName), cb, opts),
  rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(toKebabCase(eventName), cb, opts),
  ce: (eventName: string, opts: any) => new CustomEvent(toKebabCase(eventName), opts)
});

export const DesignSystem: Plugin = {
  install(_: App, config: Config = {}) {
    const { ael, rel, ce } = getHelperFunctions();
    initialize({
      ...config,
      _ael: ael,
      _rel: rel,
      _ce: ce
    });
  }
}

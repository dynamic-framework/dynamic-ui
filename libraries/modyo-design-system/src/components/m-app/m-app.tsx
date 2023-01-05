import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
  Watch,
} from '@stencil/core';

import { setIconSettings } from '../../utils';
import type { IconSettings } from '../../utils';

@Component({
  tag: 'm-app',
  styleUrl: 'm-app.scss',
  shadow: false,
  scoped: false,
})
export class MApp implements ComponentInterface {
  /**
   * Icon settings
   * */
  @Prop() iconSettings?: IconSettings;

  // eslint-disable-next-line class-methods-use-this
  @Watch('iconSettings')
  watchIconSettingsHandler(newValue: IconSettings) {
    setIconSettings({
      familyClass: newValue.familyClass,
      familyPrefix: newValue.familyPrefix,
    });
  }

  componentDidLoad() {
    setIconSettings({
      familyClass: this.iconSettings?.familyClass,
      familyPrefix: this.iconSettings?.familyPrefix,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Host class="m-app">
        <slot />
      </Host>
    );
  }
}

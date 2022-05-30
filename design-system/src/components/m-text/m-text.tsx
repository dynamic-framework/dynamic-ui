import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'm-text',
  shadow: false,
})
export class MText implements ComponentInterface {
  /**
   * The theme to use
   */
  @Prop() theme = 'dark';

  render() {
    return (
      <Host class={`text-${this.theme}`}>
        <slot />
      </Host>
    );
  }
}

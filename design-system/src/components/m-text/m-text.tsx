import type { ComponentInterface } from '@stencil/core';
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-text',
  shadow: false
})
export class MText implements ComponentInterface {
  @Prop() theme: string = 'dark';

  render() {
    return (
      <Host
        {...this.theme && { class: `text-${this.theme}`}}
      >
        <slot />
      </Host>
    );
  }
}

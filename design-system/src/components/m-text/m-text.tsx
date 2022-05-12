import type { ComponentInterface } from '@stencil/core';
import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-text',
  shadow: true,
})
export class MText implements ComponentInterface {
  @Prop() color: string = 'primary';

  render() {
    return (
      <Host
        {...this.color && { class: `text-${this.color}`}}
      >
        <slot />
      </Host>
    );
  }
}

import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-text',
  shadow: true,
})
export class MText {
  @Prop() color: string;

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

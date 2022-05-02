import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'm-text',
  shadow: true,
})
export class MText {
  render() {
    return (
      <Host>
        <p>
          <slot />
        </p>
      </Host>
    );
  }
}

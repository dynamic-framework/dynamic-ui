import type { ComponentInterface } from '@stencil/core';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'm-app',
  styleUrl: 'm-app.scss',
  // shadow: { delegatesFocus: true }
  shadow: false,
  scoped: false,
})
export class MApp implements ComponentInterface {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Host class="m-app">
        <m-button text="I'm shadow" />
        <m-text>me too</m-text>
        <div class="container">
          <slot />
        </div>
      </Host>
    );
  }
}

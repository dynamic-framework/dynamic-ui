import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Host,
} from '@stencil/core';

@Component({
  tag: 'm-nav-content',
})

export class MNavContent implements ComponentInterface {
  render() {
    return (
      <Host
        class="tab-content"
      >
        <slot />
      </Host>
    );
  }
}

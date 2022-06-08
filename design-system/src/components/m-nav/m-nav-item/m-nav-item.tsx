import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Host,
} from '@stencil/core';

@Component({
  tag: 'm-nav-item',
  shadow: false,
})

export class MNavItem implements ComponentInterface {
  render() {
    return (
      <Host
        class="nav-item"
        role="presentation"
      >
        <slot />
      </Host>
    );
  }
}

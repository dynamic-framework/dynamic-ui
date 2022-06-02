/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

@Component({ tag: 'm-nav-item' })

export class MNavItem implements ComponentInterface {
  /** Test nav */
  @Prop() variant = '';

  render() {
    return (
      <Host
        class="nav-item"
        id="nav-tab"
        role="presentation"
      >
        <slot />
      </Host>
    );
  }
}

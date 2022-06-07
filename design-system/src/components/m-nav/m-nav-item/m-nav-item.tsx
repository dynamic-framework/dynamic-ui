import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

@Component({
  tag: 'm-nav-item',
})

export class MNavItem implements ComponentInterface {
  /**
   * Id of nav-item
   * */
  @Prop() mId!: string;

  /**
   * Role of nav-item
   * */
  @Prop() role = 'presentation';

  render() {
    return (
      <Host
        id={this.mId}
        class="nav-item"
        role={this.role}
      >
        <slot />
      </Host>
    );
  }
}

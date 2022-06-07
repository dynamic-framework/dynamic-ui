import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

@Component({ tag: 'm-nav-content' })

export class MNavContent implements ComponentInterface {
  /**
   * Id of the nav-content
   * */
  @Prop() mId!: string;

  render() {
    return (
      <Host
        id={this.mId}
        class="tab-content"
      >
        <slot />
      </Host>
    );
  }
}

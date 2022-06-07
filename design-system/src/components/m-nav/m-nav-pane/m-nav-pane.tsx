import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

@Component({ tag: 'm-nav-pane' })

export class MNavPane implements ComponentInterface {
  /**
   * Id of the nav-pane
   * */
  @Prop() mId!: string;

  /**
   * Role of the nav-pane
   * */
  @Prop() role = 'tabpanel';

  /**
   * Tab Index of the nav-pane
   * */
  @Prop() mTabindex?: number = 0;

  /**
   * Is the current active nav-pane
   * */
  @Prop() isActive = false;

  render() {
    return (
      <Host
        id={this.mId}
        class={{
          'tab-pane fade': true,
          'active show': this.isActive,
        }}
        role={this.role}
        tabindex={this.mTabindex}
      >
        <slot />
      </Host>
    );
  }
}

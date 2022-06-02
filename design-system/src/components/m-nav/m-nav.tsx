/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

@Component({
  tag: 'm-nav',
  styleUrl: 'm-nav.scss',
})
export class MNav implements ComponentInterface {
  /** Id of nav */
  @Prop() mId = '';

  /** Variant of nav */
  @Prop() variant?: 'tabs' | 'pills';

  /** Is vertical nav */
  @Prop() isVertical = false;

  render() {
    return (
      <Host
        id={this.mId}
        class={{
          nav: true,
          [`nav-${this.variant}`]: !!this.variant,
        }}
        role="tablist"
        {...this.isVertical && { 'aria-orientation': 'vertical' }}
      >
        <slot />
      </Host>
    );
  }
}

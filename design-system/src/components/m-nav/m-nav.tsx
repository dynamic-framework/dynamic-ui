import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Element,
} from '@stencil/core';
import { Tab } from 'bootstrap';

import type { NavVariant } from './m-nav-interface';

@Component({
  tag: 'm-nav',
  styleUrl: 'm-nav.scss',
})
export class MNav implements ComponentInterface {
  @Element() el!: HTMLMNavElement;

  /**
   * Variant of nav
   * */
  @Prop() variant?: NavVariant;

  /**
   * Is aria orientation vertical
   * */
  @Prop() isAriaVertical = false;

  connectedCallback() {
    // eslint-disable-next-line no-new
    new Tab(this.el);
  }

  render() {
    return (
      <Host
        class={{
          nav: true,
          [`nav-${this.variant}`]: !!this.variant,
        }}
        role="tablist"
        {...(this.isAriaVertical && { 'aria-orientation': 'vertical' })}
      >
        <slot />
      </Host>
    );
  }
}

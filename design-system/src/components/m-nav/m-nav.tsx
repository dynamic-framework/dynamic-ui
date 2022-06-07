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
   * Id of nav
   * */
  @Prop() mId = '';

  /**
   * Variant of nav
   * */
  @Prop() variant?: NavVariant;

  /**
   * Is aria orientation vertical
   * */
  @Prop() isAriaVertical = false;

  connectedCallback() {
    const mTab = new Tab(this.el);
    mTab.show();
  }

  render() {
    return (
      <Host
        id={this.mId}
        class={{
          nav: true,
          [`nav-${this.variant}`]: !!this.variant,
        }}
        role="tablist"
        {...(this.isAriaVertical && {
          'aria-orientation': 'vertical',
        })}
      >
        <slot />
      </Host>
    );
  }
}

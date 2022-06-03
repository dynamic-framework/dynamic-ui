/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Element,
} from '@stencil/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Tab } from 'bootstrap';

@Component({
  tag: 'm-nav',
  styleUrl: 'm-nav.scss',
})
export class MNav implements ComponentInterface {
  @Element() el!: HTMLMNavElement;
  /** Id of nav */
  @Prop() mId = '';

  /** Variant of nav */
  @Prop() variant?: 'tabs' | 'pills';

  /** Is vertical nav */
  @Prop() isVertical = false;

  connectedCallback() {
    // eslint-disable-next-line no-new
    new Tab(this.el);
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
        {...this.isVertical && { 'aria-orientation': 'vertical' }}
      >
        <slot />
      </Host>
    );
  }
}

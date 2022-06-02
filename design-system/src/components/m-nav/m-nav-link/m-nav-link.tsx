/* eslint-disable jsx-a11y/anchor-is-valid */
import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

import type {
  NavLinkVariant,
  OptionProps,
  NavegableProps,
} from './m-nav-link-interface';
import { tagType } from './m-nav-link-interface';

@Component({ tag: 'm-nav-link' })

export class MNavLink implements ComponentInterface {
  /** Text of nav link */
  @Prop() text!: string;

  /**
  * The icon to display
  */
  @Prop() icon?: string;

  /** Variant of nav link */
  @Prop() variant: NavLinkVariant = 'navegable';

  /** Is active nav link */
  @Prop() isActive = false;

  /** Is disabled nav link */
  @Prop() isDisabled = false;

  /**
   * Props for the nav link option variant
   */
  @Prop() optionProps?: OptionProps;

  /**
    * Props for the nav link navegable variant
    */
  @Prop() navegableProps?: NavegableProps;

  private getTagType(): string {
    return this.variant ? tagType[this.variant] : tagType.navegable;
  }

  private getTagAttributes() {
    switch (this.variant) {
      case 'option': {
        return this.optionProps;
      }
      default: {
        return this.navegableProps || {
          href: '#',
          'aria-current': false,
        };
      }
    }
  }

  render() {
    const Tag = this.getTagType();
    return (
      <Host>
        <Tag
          class={{
            'nav-link': true,
            'd-flex justify-content-between align-items-center gap-1': true,
            active: this.isActive,
            disabled: this.isDisabled,
          }}
          {...this.getTagAttributes()}
          disabled={this.isDisabled}
        >
          {this.icon && <small><i class={`bi bi-${this.icon}`} /></small>}
          {this.text}
        </Tag>
      </Host>
    );
  }
}

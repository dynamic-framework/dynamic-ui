import type { ComponentInterface } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
} from '@stencil/core';

import type { NavegableProps } from '../../utils/component-interface';

import type {
  NavLinkVariant,
  OptionProps,
} from './m-nav-link-interface';

const TAG_TYPE = {
  option: 'button',
  navegable: 'a',
};

@Component({
  tag: 'm-nav-link',
  shadow: false,
})

export class MNavLink implements ComponentInterface {
  /**
   * Text of nav link
   * */
  @Prop() text!: string;

  /**
  * The icon to display
  */
  @Prop() icon?: string;

  /**
   * Variant of nav link
   * */
  @Prop() variant: NavLinkVariant = 'navegable';

  /**
   * Is active nav link
   * */
  @Prop() isActive = false;

  /**
   * Is disabled nav link
   * */
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
    return this.variant ? TAG_TYPE[this.variant] : TAG_TYPE.navegable;
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

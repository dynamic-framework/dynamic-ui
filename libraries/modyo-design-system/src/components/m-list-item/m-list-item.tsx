import {
  Component,
  h,
  Prop,
  Host,
  ComponentInterface,
  Event,
  EventEmitter,
  Fragment,
} from '@stencil/core';

import type { ClassMap, NavegableProps } from '../../utils/component-interface';

import type {
  ListItemVariant,
  SelectableProps,
} from './m-list-item-interface';

const TAG_TYPE = {
  default: 'div',
  selectable: 'label',
  navegable: 'a',
};

@Component({
  tag: 'm-list-item',
  styleUrl: 'm-list-item.scss',
  shadow: false,
})
export class MListItem implements ComponentInterface {
  /**
  * The theme to use.
  */
  @Prop() theme?: string;

  /**
  * Main text of the list.
  */
  @Prop() text = '';

  /**
  * Subtext of the list.
  */
  @Prop() subtext = '';

  /**
  * Value of the list
  */
  @Prop() value?: string | number;

  /**
  * Alternative value
  */
  @Prop() alternativeValue?: string | number;

  /**
  * Has borders rounded
  */
  @Prop() isPill = false;

  /**
  * The icon to display
  */
  @Prop() icon?: string;

  /**
   * Icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Icon family class
   */
  @Prop() iconFamilyPrefix?: string;

  /**
  * Url to replace the default icon image
  */
  @Prop() image: string | null = null;

  /**
  * Variant for text item list or complete item list
  */
  @Prop() variant?: ListItemVariant;

  /**
   * Props for the list item selectable variant
   */
  @Prop() selectableProps?: SelectableProps;

  /**
   * Theme to apply in the list value
   */
  @Prop() themeValue?: string = 'gray';

  /**
   * Right custom icon clickable
   */
  @Prop() rightIconCustomAction?: string;

  /**
   * Right custom icon class
   */
  @Prop() rightIconCustomActionClass?: string;

  /**
   * Right custom icon clickable
   */
  @Prop() isLoading?: boolean;

  /**
   * Props for the list item navegable variant
   */
  @Prop() navegableProps?: NavegableProps;

  /**
   * Emitted when the right custom icon has been clicked.
   */
  @Event() mCustomClick?: EventEmitter;

  private clickHandler = () => {
    this.mCustomClick?.emit();
  };

  private getTagType(): string {
    return this.variant ? TAG_TYPE[this.variant] : TAG_TYPE.default;
  }

  private getTagAttributes() {
    switch (this.variant) {
      case 'selectable': {
        return { htmlFor: this.selectableProps?.id };
      }
      case 'navegable': {
        return this.navegableProps;
      }
      default:
        return {};
    }
  }

  private generateHostClasses(): ClassMap {
    return {
      'list-group-item': true,
      'list-group-item-variant': !!this.variant,
      [`list-group-item-${this.theme}`]: !!this.theme,
      'list-group-item-pill': this.isPill,
    };
  }

  render() {
    const Tag = this.getTagType();
    if (this.variant) {
      return (
        <Host class={this.generateHostClasses()}>
          <Tag
            class="gap-2"
            {...this.getTagAttributes()}
          >
            {this.variant === 'selectable' && (
              <input
                class="form-check-input"
                type="radio"
                {...this.selectableProps?.id && { id: this.selectableProps.id }}
                {...this.selectableProps?.name && { name: this.selectableProps.name }}
                {...this.selectableProps?.value && { value: this.selectableProps.value }}
                {...this.selectableProps?.checked && { checked: this.selectableProps.checked }}
              />
            )}
            {(this.icon || this.image) && (
              <div
                class={{
                  'list-group-item-picture-container d-inline-flex justify-content-center align-items-center overflow-hidden': true,
                  'bg-tertiary': this.image === null,
                }}
              >
                {this.icon && (
                  <m-icon
                    class="text-white fs-5"
                    icon={this.icon}
                    familyClass={this.iconFamilyClass}
                    familyPrefix={this.iconFamilyPrefix}
                  />
                )}
                {this.image && (
                  <img
                    class="list-group-item-picture"
                    src={this.image}
                    alt=""
                  />
                )}
              </div>
            )}
            <div class="d-flex flex-column flex-grow-1">
              <span class="d-block fw-bold fs-6 text-dark lh-3">
                {this.text}
              </span>
              {!!this.subtext && (
                <small class="d-block text-gray lh-3">
                  {this.subtext}
                </small>
              )}
            </div>
            {this.value !== null && (
              <div class="d-flex flex-column flex-grow-1 text-end">
                <span class={`fw-bold lh-3 text-${this.themeValue}`}>
                  {this.value}
                </span>
                {this.alternativeValue !== undefined && (
                  <small class="text-gray lh-3">
                    {this.alternativeValue}
                  </small>
                )}
              </div>
            )}
            {this.variant === 'navegable' && (
              <Fragment>
                {this.rightIconCustomAction && (
                  <button
                    class={`p-0 m-0 border-0 bg-transparent rounded-pill ${this.rightIconCustomActionClass}`}
                    onClick={(event) => {
                      event.stopPropagation();
                      this.clickHandler();
                    }}
                  >
                    <m-icon
                      class="text-tertiary fs-5"
                      icon={this.rightIconCustomAction}
                      isLoading={this.isLoading}
                    />
                  </button>
                )}
                <m-icon
                  class="text-gray-light fs-5"
                  icon="chevron-right"
                />
              </Fragment>
            )}
          </Tag>
        </Host>
      );
    }
    return (
      <Host class="list-group-item">
        <span class="gap-3">
          <span class="flex-grow-1 opacity-40">
            {this.text}
          </span>
          <span class="flex-shrink-1 text-end">
            {this.value}
          </span>
        </span>
      </Host>
    );
  }
}

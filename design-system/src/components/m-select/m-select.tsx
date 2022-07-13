import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  Host,
  h,
  Prop,
  Event,
} from '@stencil/core';

import type { FormControlLayoutDirection, ClassMap } from '../../utils/component-interface';

import type { FormControlLayoutVariant } from './m-select-interface';

@Component({
  tag: 'm-select',
  styleUrl: 'm-select.scss',
  shadow: false,
})

export class MSelect implements ComponentInterface {
  /**
   * Id of the select
   */
  @Prop() mId!: string;

  /**
   * The variant of the select
   */
  @Prop() variant: FormControlLayoutVariant = 'prime';

  /**
   * The theme of the select
   */
  @Prop() theme = 'tertiary';

  /**
   * The label of the select in full variant
   */
  @Prop() label?: string;

  /**
   * The start icon for the select
   */
  @Prop() iconStart?: string;

  /**
   * The middle icon for the select
   */
  @Prop() iconMiddle?: string;

  /**
   * The end icon for the select
   */
  @Prop() iconEnd?: string;

  /**
   * The hint icon for the select in full variant
   */
  @Prop() hintIcon?: string = 'emoji-smile';

  /**
   * The hint of the select in full variant
   */
  @Prop() hint?: string;

  /**
   * Change the layout direction to put the label on top or left of select
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * Emitted when the select value has changed
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<string>;

  private changeHandler = (event: Event) => {
    this.mChange.emit((event.target as HTMLInputElement).value);
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout': true,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
      [`form-control-layout-${this.variant}`]: !!this.variant,
      'form-control-layout-pill': this.variant !== 'full',
      [`form-control-theme-${this.theme}`]: this.variant !== 'prime',
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {(this.label) && (
          <label htmlFor={this.mId}>
            {this.label}
            <small class="form-control-icon">
              {/** TODO: Implements popover/tooltip */}
              <m-icon
                icon="info-circle"
              />
            </small>
          </label>
        )}
        <div class="form-control-input w-100">
          <div
            class="input-group"
          >
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                <span class="form-control-icon">
                  <m-icon
                    icon={this.iconStart}
                  />
                </span>
              </span>
            )}
            <select
              id={this.mId}
              class={{
                'form-select': true,
                'no-icons': !this.iconStart && !this.iconMiddle && !this.iconEnd,
                [`form-select-${this.theme}`]: this.variant !== 'prime',
              }}
              aria-describedby={`${this.mId}-add`}
              onChange={this.changeHandler}
            >
              <slot />
            </select>
            {(this.iconMiddle || this.iconEnd) && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                {this.iconMiddle && (
                  <span class="form-control-icon">
                    <m-icon
                      icon={this.iconMiddle}
                    />
                  </span>
                )}
                {this.iconEnd && (
                  <span class="form-control-icon">
                    <m-icon
                      icon={this.iconEnd}
                    />
                  </span>
                )}
              </span>
            )}
          </div>
          {(this.hint) && (
            <div class="d-flex gap-2 hint text-start">
              <small>
                {this.hintIcon && (
                  <span class="form-control-icon">
                    <m-icon
                      icon={this.hintIcon}
                    />
                  </span>
                )}
                {this.hint}
              </small>
            </div>
          )}
        </div>
      </Host>
    );
  }
}

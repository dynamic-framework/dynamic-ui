import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Event,
} from '@stencil/core';

import type { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

import type { CurrencyEvent, CurrencyVariant } from './m-currency-interface';

@Component({
  tag: 'm-currency',
  styleUrl: 'm-currency.scss',
})
export class MCurrency implements ComponentInterface {
  /**
   * Id for the input
   * */
  @Prop() mId!: string;
  /**
   * Label for the input
   * */
  @Prop() label = '';
  /**
   * Icon for the label text
   * */
  @Prop() iconLabel = 'info-circle';
  /**
   * Icon for the left
   * */
  @Prop() iconStart?: string;
  /**
   * Icon for the middle
   * */
  @Prop() iconMiddle?: string;
  /**
   * Icon for the end
   * */
  @Prop() iconEnd?: string;
  /**
   * Has a select input
   * */
  @Prop() hasSelect = false;
  /**
   * Placeholder for the input
   * */
  @Prop() placeholder?: string = '';
  /**
   * * The type of the input
  */
  @Prop() type = 'number';
  /**
   * * The value of the input
  */
  @Prop() value?: number;
  /**
   * * The min value of the input
  */
  @Prop() minValue?: number;
  /**
   * * The max value of the input
  */
  @Prop() maxValue?: number;
  /**
   * Hint text for the m-currency
   * */
  @Prop() hint?: string;
  /**
   * Icon start for the hint text
   * */
  @Prop() hintIconStart?: string;
  /**
   * Icon end for the hint text
   * */
  @Prop() hintIconEnd?: string;
  /**
   * Theme for the m-currency
   * */
  @Prop() theme? = 'primary';
  /**
   * Variant for the m-currency
   * */
  @Prop() variant?: CurrencyVariant;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';
  /**
   * Emitted when the inputs change
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<CurrencyEvent>;

  /**
   * HTML input elemet
   */
  private htmlInput?: HTMLInputElement;

  /**
   * HTML select elemet
   */
  private htmlSelect?: HTMLSelectElement;

  /**
   * Emit input and select values when the values change
   */
  private changeHandler = () => {
    this.mChange.emit({
      amount: (this.htmlInput && this.htmlInput.value)
        ? parseFloat(this.htmlInput.value)
        : 0,
      currency: this.htmlSelect?.value,
    });
  };

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-currency': true,
      [`form-control-theme-${this.theme}`]: true,
      [`form-control-layout-currency-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            <m-icon
              class="form-control-icon"
              icon={this.iconLabel}
            />
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-start`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconStart}
                />
              </span>
            )}
            {this.hasSelect && (
              <select
               // eslint-disable-next-line no-return-assign
                ref={(el) => (this.htmlSelect = el as HTMLSelectElement)}
                class="form-select"
                onInput={this.changeHandler}
              >
                <slot />
              </select>
            )}
            <input
              // eslint-disable-next-line no-return-assign
              ref={(el) => (this.htmlInput = el as HTMLInputElement)}
              id={this.mId}
              type={this.type}
              value={this.value}
              min={this.minValue}
              max={this.maxValue}
              class="form-control"
              placeholder={this.placeholder}
              aria-label={this.label}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
            />
            {this.iconMiddle && (
              <span
                class="input-group-text"
                id={`${this.mId}-middle`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconMiddle}
                />
              </span>
            )}
            {this.iconEnd && (
              <span
                class="input-group-text"
                id={`${this.mId}-end`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconEnd}
                />
              </span>
            )}
          </div>
          {this.hint && (
            <small class="hint">
              {this.hintIconStart && (
                <m-icon
                  class="form-control-icon"
                  icon={this.hintIconStart}
                />
              )}
              {this.hint}
              {this.hintIconEnd && (
                <m-icon
                  class="form-control-icon"
                  icon={this.hintIconEnd}
                />
              )}
            </small>
          )}
        </div>
      </Host>
    );
  }
}

import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Event,
} from '@stencil/core';

import type { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

import type { CurrencyEvent } from './m-currency-interface';

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
   * Emit input and select values only when the button was clicked
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
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            <span class="form-control-icon">
              <m-icon
                icon={this.iconLabel}
              />
            </span>
          </label>
        )}
        <div class="form-control-input">
          <div class="input-group">
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
                id={`${this.mId}-add`}
              >
                <span class="form-control-icon">
                  <m-icon
                    icon={this.iconMiddle}
                  />
                </span>
              </span>
            )}
            {this.iconEnd && (
              <span
                class="input-group-text"
                id={`${this.mId}-add`}
              >
                <span class="form-control-icon">
                  <m-icon
                    icon={this.iconEnd}
                  />
                </span>
              </span>
            )}
          </div>
          {this.hint && (
            <small class="hint">
              {this.hintIconStart && (
                <span class="form-control-icon">
                  <m-icon
                    icon={this.hintIconStart}
                  />
                </span>
              )}
              {this.hint}
              {this.hintIconEnd && (
                <span class="form-control-icon">
                  <m-icon
                    icon={this.hintIconEnd}
                  />
                </span>
              )}
            </small>
          )}
        </div>
      </Host>
    );
  }
}

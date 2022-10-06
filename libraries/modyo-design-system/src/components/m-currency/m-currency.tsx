import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Host,
  Event,
  Watch,
  State,
} from '@stencil/core';
import currency from 'currency.js';
import type { Options } from 'currency.js';

import type { ClassMap, FormControlLayoutDirection } from '../../utils/component-interface';

import type {
  CurrencyEvent,
  CurrencyVariant,
} from './m-currency-interface';

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
   * Select options
   * */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() selectOptions: Array<any> = [];
  /**
   * Callback to extract the value from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() valueExtractor: (item: any) => string | number = (item) => item?.value;
  /**
   * Callback to extract the label from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() labelExtractor: (item: any) => string = (item) => item?.label;
  /**
   * Placeholder for the input
   * */
  @Prop() placeholder?: string = '';
  /**
   * * The value of the input
  */
  @Prop() value!: number;
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
  @Prop() theme = 'primary';
  /**
   * Variant for the m-currency
   * */
  @Prop() variant?: CurrencyVariant;
  /**
   * Options for the m-currency
   * */
  @Prop() currencyOptions!: Options;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';
  /**
   * Emitted when the inputs change
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<CurrencyEvent>;

  @State() internalTheme?: string;

  @State() internalValue = 0;

  @Watch('value')
  watchValueHandler(newValue: number) {
    if (!this.isValid(newValue)) {
      this.internalTheme = 'danger';
      return;
    }
    this.internalTheme = this.theme;
  }

  @Watch('theme')
  watchThemeHandler(newValue: string) {
    this.internalTheme = newValue;
  }

  connectedCallback() {
    this.internalTheme = this.theme;
    this.internalValue = this.value;
  }

  /**
   * HTML input element
   */
  private htmlInput!: HTMLInputElement;

  /**
   * HTML select element
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onBlurEvent = (event: any) => {
    this.internalValue = event.target.valueAsNumber;
    const value = currency(event.target.valueAsNumber, this.currencyOptions).format();
    this.htmlInput.setAttribute('type', 'text');
    this.htmlInput.value = value;
  };

  private onFocusEvent = () => {
    this.htmlInput.setAttribute('type', 'number');
    this.htmlInput.value = `${this.internalValue}`;
  };

  private isValid(value?: number): boolean {
    if (value === undefined) {
      return true;
    }

    if (this.htmlInput.getAttribute('type') === 'number') {
      return (
        (this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true)
      );
    }

    return true;
  }

  private generateHostClasses(): ClassMap {
    return {
      'form-control-layout form-control-layout-currency': true,
      [`form-control-theme-${this.internalTheme}`]: true,
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
            {this.selectOptions.length > 0 && (
              <select
                // eslint-disable-next-line no-return-assign
                ref={(el) => (this.htmlSelect = el as HTMLSelectElement)}
                class="form-select"
                onInput={this.changeHandler}
              >
                {this.selectOptions.map((opt) => (
                  <option value={this.valueExtractor(opt)}>
                    {this.labelExtractor(opt)}
                  </option>
                ))}
              </select>
            )}
            <input
              // eslint-disable-next-line no-return-assign
              ref={(el) => (this.htmlInput = el as HTMLInputElement)}
              id={this.mId}
              type="number"
              value={this.value}
              min={this.minValue}
              max={this.maxValue}
              class="form-control"
              placeholder={this.placeholder}
              aria-label={this.label}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
              onBlur={this.onBlurEvent}
              onFocus={this.onFocusEvent}
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
            <m-hint
              text={this.hint}
              theme={this.internalTheme}
              {...(this.hintIconStart && ({ iconStart: this.hintIconStart }))}
              {...(this.hintIconEnd && ({ iconEnd: this.hintIconEnd }))}
            />
          )}
        </div>
      </Host>
    );
  }
}

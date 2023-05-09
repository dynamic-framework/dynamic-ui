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
} from './m-currency-base-interface';

@Component({
  tag: 'm-currency-base',
  styleUrl: 'm-currency-base.scss',
})
export class MCurrencyBase implements ComponentInterface {
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
  @Prop() labelIcon = 'info-circle';

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyClass?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyPrefix?: string;

  /**
   * Icon for the left
   * */
  @Prop() iconStart?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyClass?: string;

  /**
   * Left icon family class
   */
  @Prop() iconStartFamilyPrefix?: string;

  /**
   * Icon for the middle
   * */
  @Prop() iconMiddle?: string;

  /**
   * Middle icon family class
   */
  @Prop() iconMiddleFamilyClass?: string;

  /**
   * Middle icon family class
   */
  @Prop() iconMiddleFamilyPrefix?: string;

  /**
   * Icon for the end
   * */
  @Prop() iconEnd?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconEndFamilyPrefix?: string;

  /**
   * Select options
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop() selectOptions: Array<any> = [];

  /**
   * Callback to extract the value from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
  @Prop() valueExtractor: (item: any) => string | number = (item) => item?.value;

  /**
   * Callback to extract the label from the option
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,class-methods-use-this
  @Prop() labelExtractor: (item: any) => string = (item) => item?.label;

  /**
   * Placeholder for the input
   * */
  @Prop() placeholder?: string = '';

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
   * Hint text for the m-currency-base
   * */
  @Prop() hint?: string;

  /**
   * Icon start for the hint text
   * */
  @Prop() hintIconStart?: string;

  /**
   * Hint left icon family class
   */
  @Prop() hintIconStartFamilyClass?: string;

  /**
   * Hint left icon family class
   */
  @Prop() hintIconStartFamilyPrefix?: string;

  /**
   * Icon end for the hint text
   * */
  @Prop() hintIconEnd?: string;

  /**
   * Hint right icon family class
   */
  @Prop() hintIconEndFamilyClass?: string;

  /**
   * Hint right icon family class
   */
  @Prop() hintIconEndFamilyPrefix?: string;

  /**
   * Theme for the m-currency-base
   * */
  @Prop() theme?: string;

  /**
   * Variant for the m-currency-base
   * */
  @Prop() variant?: CurrencyVariant;

  /**
   * Options for the m-currency-base
   * */
  @Prop() currencyOptions!: Options;

  /**
   * Change the layout direction to put the label on top or left of input
   */
  @Prop() layoutDirection: FormControlLayoutDirection = 'vertical';

  /**
   * The input is disabled
   */
  @Prop() isDisabled = false;

  /**
   * Flag for loading state.
   */
  @Prop() isLoading = false;

  /**
   * Emitted when the inputs change
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<CurrencyEvent>;

  @State() internalTheme?: string;

  @State() internalValue?: number;

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
        : undefined,
      currency: this.htmlSelect?.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onBlurEvent = (event: any) => {
    if (!Number.isNaN(event.target.valueAsNumber)) {
      this.internalValue = event.target.valueAsNumber;
    } else {
      this.internalValue = undefined;
    }
    this.htmlInput.setAttribute('type', 'text');
    this.htmlInput.value = this.internalValue !== undefined
      ? currency(this.internalValue, this.currencyOptions).format()
      : '';
  };

  private onFocusEvent = () => {
    this.htmlInput.setAttribute('type', 'number');
    if (this.internalValue !== undefined) {
      this.htmlInput.value = `${this.internalValue}`;
    }
  };

  private onWheelEvent = () => {
    this.htmlInput.blur();
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
      [`form-control-theme-${this.internalTheme}`]: !!this.internalTheme,
      [`form-control-layout-currency-${this.variant}`]: !!this.variant,
      'form-control-layout-horizontal': this.layoutDirection === 'horizontal',
    };
  }

  connectedCallback() {
    this.internalTheme = this.theme;
    this.internalValue = this.value;
  }

  componentDidLoad() {
    this.htmlInput.setAttribute('type', 'text');
    if (this.internalValue !== undefined && !Number.isNaN(this.internalValue)) {
      this.htmlInput.value = currency(this.internalValue, this.currencyOptions).format();
    } else {
      this.htmlInput.value = '';
    }
  }

  render() {
    return (
      <Host class={this.generateHostClasses()}>
        {this.label && (
          <label htmlFor={this.mId}>
            {this.label}
            <m-icon
              class="form-control-icon"
              icon={this.labelIcon}
              familyClass={this.labelIconFamilyClass}
              familyPrefix={this.labelIconFamilyPrefix}
            />
          </label>
        )}
        <div class="form-control-input">
          <div class={{
            'input-group': true,
            disabled: this.isDisabled || this.isLoading,
          }}
          >
            {this.iconStart && (
              <span
                class="input-group-text"
                id={`${this.mId}-start`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconStart}
                  familyClass={this.iconStartFamilyClass}
                  familyPrefix={this.iconStartFamilyPrefix}
                />
              </span>
            )}
            {this.selectOptions.length > 0 && (
              <select
                // eslint-disable-next-line no-return-assign
                ref={(el) => (this.htmlSelect = el as HTMLSelectElement)}
                class="form-select"
                disabled={this.isDisabled || this.isLoading}
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
              disabled={this.isDisabled || this.isLoading}
              min={this.minValue}
              max={this.maxValue}
              class="form-control"
              value={this.value}
              placeholder={
                this.placeholder
                  ? this.placeholder
                  : currency(0, this.currencyOptions).format()
              }
              aria-label={this.label}
              aria-describedby={`${this.mId}-add`}
              onInput={this.changeHandler}
              onBlur={this.onBlurEvent}
              onFocus={this.onFocusEvent}
              onWheel={this.onWheelEvent}
            />
            {this.iconMiddle && (
              <span
                class="input-group-text"
                id={`${this.mId}-middle`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconMiddle}
                  familyClass={this.iconMiddleFamilyClass}
                  familyPrefix={this.iconMiddleFamilyPrefix}
                />
              </span>
            )}
            {(this.iconEnd && !this.isLoading) && (
              <span
                class="input-group-text"
                id={`${this.mId}-end`}
              >
                <m-icon
                  class="form-control-icon"
                  icon={this.iconEnd}
                  familyClass={this.iconEndFamilyClass}
                  familyPrefix={this.iconEndFamilyPrefix}
                />
              </span>
            )}
            {this.isLoading && (
              <div class="form-control-icon">
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                >
                  <span class="visually-hidden">Loading...</span>
                </span>
              </div>
            )}
          </div>
          {this.hint && (
            <m-hint
              text={this.hint}
              {...(this.hintIconStart && ({
                iconStart: this.hintIconStart,
                iconStartFamilyClass: this.hintIconStartFamilyClass,
                iconStartFamilyPrefix: this.hintIconStartFamilyPrefix,
              }))}
              {...(this.hintIconEnd && ({
                iconEnd: this.hintIconEnd,
                iconEndFamilyClass: this.hintIconEndFamilyClass,
                iconEndFamilyPrefix: this.hintIconEndFamilyPrefix,
              }))}
            />
          )}
        </div>
      </Host>
    );
  }
}

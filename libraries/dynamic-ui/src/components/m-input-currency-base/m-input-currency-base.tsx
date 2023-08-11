import type { ComponentInterface, EventEmitter } from '@stencil/core';
import {
  Component,
  h,
  Prop,
  Event,
  Watch,
  State,
} from '@stencil/core';
import currency from 'currency.js';
import type { Options } from 'currency.js';

import { PREFIX_BS } from '../../utils';

@Component({ tag: 'm-input-currency-base' })
export class MInputCurrencyBase implements ComponentInterface {
  /**
   * The id of the input
   */
  @Prop() mId!: string;

  /**
   * The name of the input
   */
  @Prop() name?: string;

  /**
   * The label text
   */
  @Prop() label = '';

  /**
   * Icon for the label text
   */
  @Prop() labelIcon?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyClass?: string;

  /**
   * Icon label family class
   */
  @Prop() labelIconFamilyPrefix?: string;

  /**
   * Placeholder for the input
   */
  @Prop() placeholder?: string = '';

  /**
   * The value of the input
   */
  @Prop() value?: number;

  /**
   * The input is disabled
   */
  @Prop() isDisabled = false;

  /**
   * Flag to read only the input
   */
  @Prop() isReadOnly = false;

  /**
   * Flag for loading state.
   */
  @Prop() isLoading = false;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyClass?: string;

  /**
   * Right icon family class
   */
  @Prop() iconFamilyPrefix?: string;

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
   * Hint to display
   */
  @Prop() hint?: string;

  /**
   * Add is-invalid class
   */
  @Prop() isInvalid = false;

  /**
   * Add is-valid class
   */
  @Prop() isValid = false;

  /**
   * * The min value of the input
  */
  @Prop() minValue?: number;

  /**
   * * The max value of the input
  */
  @Prop() maxValue?: number;

  /**
   * Options for the m-input-currency-base
   */
  @Prop() currencyOptions!: Options;

  /**
   * Currency code
   */
  @Prop() currencyCode?: string;

  /**
   * Emitted when the inputs change
   */
  @Event({ eventName: 'mChange' }) mChange!: EventEmitter<number>;

  /**
   * Emitted when the inputs bur
   */
  @Event({ eventName: 'mBlur' }) mBlur!: EventEmitter<number>;

  /**
   * Emitted when the inputs focus
   */
  @Event({ eventName: 'mFocus' }) mFocus!: EventEmitter<number>;

  @State() internalValueAsNumber?: number;

  @State() internalValueAsFormat?: string;

  @State() internalType: 'text' | 'number' = 'text';

  @State() internalIsInvalid = false;

  @Watch('value')
  watchValueHandler(newValue: number) {
    this.internalIsInvalid = !this.isValidValue(newValue);
  }

  /**
   * HTML m-input element
   */
  private htmlMInputElement?: HTMLMInputElement;

  /**
   * Emit input and select values when the values change
   */
  private changeHandler = (event: CustomEvent<string | number>) => {
    event.stopPropagation();
    this.internalValueAsNumber = (event.detail !== '' && typeof event.detail === 'string')
      ? parseFloat(event.detail)
      : undefined;
    this.internalValueAsFormat = this.internalValueAsNumber !== undefined
      ? currency(this.internalValueAsNumber, this.currencyOptions).format()
      : '';
    this.mChange.emit(this.internalValueAsNumber);
  };

  private blurHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.internalType = 'text';

    this.internalValueAsFormat = this.internalValueAsNumber !== undefined
      ? currency(this.internalValueAsNumber, this.currencyOptions).format()
      : '';
    this.mBlur.emit(this.internalValueAsNumber);
  };

  private focusHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.internalType = 'number';
    this.internalValueAsFormat = this.internalValueAsNumber !== undefined
      ? currency(this.internalValueAsNumber, this.currencyOptions).format()
      : '';
    this.mFocus.emit(this.internalValueAsNumber);
  };

  private wheelHandler = (event: CustomEvent) => {
    event.stopPropagation();
    this.htmlMInputElement?.blurInput();
  };

  private isValidValue(value?: number): boolean {
    if (value === undefined) {
      return true;
    }

    if (this.internalType === 'number') {
      return (
        (this.minValue !== undefined ? value >= this.minValue : true)
        && (this.maxValue !== undefined ? value <= this.maxValue : true)
      );
    }

    return true;
  }

  private valueAsType() {
    if (this.internalType === 'number') {
      return this.internalValueAsNumber;
    }

    return this.internalValueAsFormat;
  }

  connectedCallback() {
    this.internalValueAsNumber = this.value;
  }

  componentDidLoad() {
    this.internalType = 'text';
    this.internalValueAsFormat = (this.internalValueAsNumber !== undefined)
      ? currency(this.internalValueAsNumber, this.currencyOptions).format()
      : '';
  }

  // eslint-disable-next-line class-methods-use-this
  private generateStyleVariables() {
    return {
      [`--${PREFIX_BS}m-input-currency-component-symbol-color`]: `var(--${PREFIX_BS}secondary)`,
      [`--${PREFIX_BS}m-input-currency-symbol-color`]: `var(--${PREFIX_BS}m-input-currency-component-symbol-color)`,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  private generateSymbolStyleVariables() {
    return { color: `var(--${PREFIX_BS}m-input-currency-symbol-color)` };
  }

  render() {
    return (
      <m-input// eslint-disable-next-line no-return-assign
        ref={(el) => (this.htmlMInputElement = el)}
        style={this.generateStyleVariables()}
        mId={this.mId}
        name={this.name}
        label={this.label}
        labelIcon={this.labelIcon}
        labelIconFamilyClass={this.labelIconFamilyClass}
        labelIconFamilyPrefix={this.labelIconFamilyPrefix}
        placeholder={this.placeholder}
        value={this.valueAsType()}
        iconStart={this.iconStart}
        iconStartFamilyClass={this.iconStartFamilyClass}
        iconStartFamilyPrefix={this.iconStartFamilyPrefix}
        iconEnd={this.iconEnd}
        iconEndFamilyClass={this.iconEndFamilyClass}
        iconEndFamilyPrefix={this.iconEndFamilyPrefix}
        isDisabled={this.isDisabled}
        isReadOnly={this.isReadOnly}
        isLoading={this.isLoading}
        hint={this.hint}
        isInvalid={this.isInvalid}
        isValid={this.isValid}
        type={this.internalType}
        mInputMode="decimal"
        pattern="^[0-9]"
        onMChange={this.changeHandler}
        onMBlur={this.blurHandler}
        onMFocus={this.focusHandler}
        onMWheel={this.wheelHandler}
      >
        <span
          slot="input-start"
          style={this.generateSymbolStyleVariables()}
        >
          {this.currencyCode || this.currencyOptions.symbol}
        </span>
      </m-input>
    );
  }
}

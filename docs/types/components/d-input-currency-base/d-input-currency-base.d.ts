import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Options } from 'currency.js';
export declare class DInputCurrencyBase implements ComponentInterface {
  /**
   * The id of the input
   */
  innerId: string;
  /**
   * The name of the input
   */
  name?: string;
  /**
   * The label text
   */
  label: string;
  /**
   * Icon for the label text
   */
  labelIcon?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyClass?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyPrefix?: string;
  /**
   * Placeholder for the input
   */
  placeholder?: string;
  /**
   * The value of the input
   */
  value?: number;
  /**
   * The input is disabled
   */
  isDisabled: boolean;
  /**
   * Flag to read only the input
   */
  isReadOnly: boolean;
  /**
   * Flag for loading state.
   */
  isLoading: boolean;
  /**
   * Right icon family class
   */
  iconFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconFamilyPrefix?: string;
  /**
   * Icon for the left
   * */
  iconStart?: string;
  /**
   * Left icon family class
   */
  iconStartFamilyClass?: string;
  /**
   * Left icon family class
   */
  iconStartFamilyPrefix?: string;
  /**
   * Icon for the end
   * */
  iconEnd?: string;
  /**
   * Right icon family class
   */
  iconEndFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconEndFamilyPrefix?: string;
  /**
   * Hint to display
   */
  hint?: string;
  /**
   * Add is-invalid class
   */
  isInvalid: boolean;
  /**
   * Add is-valid class
   */
  isValid: boolean;
  /**
   * * The min value of the input
  */
  minValue?: number;
  /**
   * * The max value of the input
  */
  maxValue?: number;
  /**
   * Options for the d-input-currency-base
   */
  currencyOptions: Options;
  /**
   * Currency code
   */
  currencyCode?: string;
  /**
   * Emitted when the inputs change
   */
  eventChange: EventEmitter<number>;
  /**
   * Emitted when the inputs bur
   */
  eventBlur: EventEmitter<number>;
  /**
   * Emitted when the inputs focus
   */
  eventFocus: EventEmitter<number>;
  internalValueAsNumber?: number;
  internalValueAsFormat?: string;
  internalType: 'text' | 'number';
  internalIsInvalid: boolean;
  watchValueHandler(newValue: number): void;
  /**
   * HTML d-input element
   */
  private htmlInput?;
  /**
   * Emit input and select values when the values change
   */
  private changeHandler;
  private blurHandler;
  private focusHandler;
  private wheelHandler;
  private isValidValue;
  private valueAsType;
  connectedCallback(): void;
  componentDidLoad(): void;
  private generateStyleVariables;
  private generateSymbolStyleVariables;
  render(): any;
}

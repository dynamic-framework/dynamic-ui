import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Options } from 'currency.js';
import type { FormControlLayoutDirection } from '../../utils/component-interface';
import type { CurrencyEvent, CurrencyVariant } from './m-currency-base-interface';
export declare class MCurrencyBase implements ComponentInterface {
  /**
   * Id for the input
   * */
  mId: string;
  /**
   * Label for the input
   * */
  label: string;
  /**
   * Icon for the label text
   * */
  labelIcon: string;
  /**
   * Icon label family class
   */
  labelIconFamilyClass?: string;
  /**
   * Icon label family class
   */
  labelIconFamilyPrefix?: string;
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
   * Icon for the middle
   * */
  iconMiddle?: string;
  /**
   * Middle icon family class
   */
  iconMiddleFamilyClass?: string;
  /**
   * Middle icon family class
   */
  iconMiddleFamilyPrefix?: string;
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
   * Select options
   */
  selectOptions: Array<any>;
  /**
   * Callback to extract the value from the option
   */
  valueExtractor: (item: any) => string | number;
  /**
   * Callback to extract the label from the option
   */
  labelExtractor: (item: any) => string;
  /**
   * Placeholder for the input
   * */
  placeholder?: string;
  /**
   * * The value of the input
  */
  value?: number;
  /**
   * * The min value of the input
  */
  minValue?: number;
  /**
   * * The max value of the input
  */
  maxValue?: number;
  /**
   * Hint text for the m-currency-base
   * */
  hint?: string;
  /**
   * Icon start for the hint text
   * */
  hintIconStart?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyClass?: string;
  /**
   * Hint left icon family class
   */
  hintIconStartFamilyPrefix?: string;
  /**
   * Icon end for the hint text
   * */
  hintIconEnd?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyClass?: string;
  /**
   * Hint right icon family class
   */
  hintIconEndFamilyPrefix?: string;
  /**
   * Theme for the m-currency-base
   * */
  theme?: string;
  /**
   * Variant for the m-currency-base
   * */
  variant?: CurrencyVariant;
  /**
   * Options for the m-currency-base
   * */
  currencyOptions: Options;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * The input is disabled
   */
  isDisabled: boolean;
  /**
   * Flag for loading state.
   */
  isLoading: boolean;
  /**
   * Emitted when the inputs change
   */
  mChange: EventEmitter<CurrencyEvent>;
  internalTheme?: string;
  internalValue?: number;
  watchValueHandler(newValue: number): void;
  watchThemeHandler(newValue: string): void;
  /**
   * HTML input element
   */
  private htmlInput;
  /**
   * HTML select element
   */
  private htmlSelect?;
  /**
   * Emit input and select values when the values change
   */
  private changeHandler;
  private onBlurEvent;
  private onFocusEvent;
  private onWheelEvent;
  private isValid;
  private generateHostClasses;
  connectedCallback(): void;
  componentDidLoad(): void;
  render(): any;
}

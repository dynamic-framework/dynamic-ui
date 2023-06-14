import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { PinInputMode, PinInputType } from './m-pin-interface';
export declare class MPin implements ComponentInterface {
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
   * Icon of the left
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
   * Icon of the end
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
   * Flag for loading state.
  */
  isLoading: boolean;
  /**
   * Number of characters of the pin
   */
  characters: number;
  /**
   * Hide the characters
   */
  isSecret: boolean;
  /**
   * Disable the inputs
   */
  isDisabled: boolean;
  /**
   * Keyboard style
   */
  mInputMode: PinInputMode;
  /**
   * Type of the inputs
   */
  type: PinInputType;
  /**
   * Placeholder of the inputs
   */
  placeholder?: string;
  /**
   * Theme for inputs
   * */
  theme?: string;
  /**
   * Hint for the m-coupon
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
   * Emitted when the inputs had changed
   */
  mChange: EventEmitter<string>;
  internalTheme?: string;
  pattern: string;
  watchThemeHandler(newValue: string): void;
  watchMTypeHandler(newValue: string): void;
  private nextInput;
  private prevInput;
  private focusInput;
  private wheelInput;
  private formChange;
  private preventDefaultEvents;
  private generateHostClasses;
  connectedCallback(): void;
  render(): any;
}

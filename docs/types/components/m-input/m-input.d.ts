import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { FormControlLayoutDirection } from '../../utils/component-interface';
export declare class MInput implements ComponentInterface {
  /**
   * The id of the input
   */
  mId: string;
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
   * The placeholder text
   */
  placeholder: string;
  /**
   * The type of the input
   */
  type: string;
  /**
   * The value of the input
   */
  value: string | number;
  /**
   * Flag to disable the input
   */
  isDisabled: boolean;
  /**
   * Flag for loading state.
  */
  isLoading: boolean;
  /**
   * Icon to display on input left
   */
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
   * Icon to display on input right
   */
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
   * Hint to display, also used to display validity feedback
   */
  hint?: string;
  /**
   * Icon to display on hint left
   */
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
   * Icon to display on hint right
   */
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
   * Change the layout direction to put the label on top or left of input
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * Add is-invalid class
   */
  isInvalid: boolean;
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<string | number>;
  /**
   * Emitted when blur the input
   */
  mBlur: EventEmitter;
  private changeHandler;
  private blurHandler;
  private generateHostClasses;
  render(): any;
}

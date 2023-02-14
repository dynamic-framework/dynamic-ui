import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { FormControlLayoutDirection } from '../../utils/component-interface';
export declare class MSearch implements ComponentInterface {
  /**
   * The id of the input
   */
  mId: string;
  /**
    * The label text
    */
  label: string;
  /**
    * Icon to display on label right
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
  value: string;
  /**
    * Flag to disable the input
    */
  isDisabled: boolean;
  /**
   * Flag for loading state.
  */
  isLoading: boolean;
  /**
    * Flag to read only the input
    */
  isReadOnly: boolean;
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
    * Theme to use for the search
    */
  theme?: string;
  /**
    * Variant to use for the search
    */
  variant?: string;
  /**
   * Change the layout direction to put the label on top or left of input
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<string>;
  /**
   * Emitted when the button is clicked
   */
  mClick: EventEmitter<string>;
  /**
   * HTML input elemet
   */
  private htmlInput?;
  private changeHandler;
  private clickHandler;
  private generateHostClasses;
  render(): any;
}

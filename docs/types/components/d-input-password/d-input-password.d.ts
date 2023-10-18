import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DInputPassword implements ComponentInterface {
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
    * The value of the input
    */
  value: string;
  /**
    * Flag to disable the input
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
    * Hint to display, also used to display validity feedback
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
   * Emitted when the input value has changed
   */
  eventChange: EventEmitter<string>;
  /**
   * State to show the icon in valid states
   */
  visible: boolean;
  /**
   * HTML input element
   */
  private htmlInput?;
  private changeHandler;
  private visibilityHandler;
  render(): any;
}

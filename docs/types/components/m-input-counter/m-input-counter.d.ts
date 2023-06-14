import { EventEmitter } from '../../stencil-public-runtime';
export declare class MInputCounter {
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
   * The value of the input
   */
  value: number;
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
  iconStart: string;
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
  iconEnd: string;
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
  minValue: number;
  /**
   * * The max value of the input
   */
  maxValue: number;
  /**
   * Event for input change
   */
  mChange: EventEmitter<number>;
  /**
   * Event for button pressed
   */
  mClick: EventEmitter<number>;
  internalIsInvalid: boolean;
  internalValue: number;
  private changeHandler;
  private clickHandler;
  watchValidValueHandler(): void;
  watchValueHandler(): void;
  connectedCallback(): void;
  private generateStyleVariables;
  render(): any;
}

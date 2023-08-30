import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DInput implements ComponentInterface {
  el: HTMLDInputElement;
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
   * Icon label family prefix
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
   * Input mode
   */
  innerInputMode?: string;
  /**
   * Pattern to validate
   */
  pattern?: string;
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
   * Right icon family class
   */
  iconFamilyClass?: string;
  /**
   * Right icon family class
   */
  iconFamilyPrefix?: string;
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
   * Set focus to internal input
   */
  innerFocus(): Promise<void>;
  /**
   * Set blur to internal input
   */
  innerBlur(): Promise<void>;
  /**
   * Emitted when the input value has changed
   */
  eventChange: EventEmitter<string | number>;
  /**
   * Emitted when blur the input
   */
  eventBlur: EventEmitter;
  /**
   * Emitted when blur the input
   */
  eventFocus: EventEmitter;
  /**
   * Emitted when blur the input
   */
  eventWheel: EventEmitter;
  /**
   * Emitted when click on the left icon
   */
  eventIconStartClick: EventEmitter<MouseEvent>;
  /**
   * Emitted when click on the right icon
   */
  eventIconEndClick: EventEmitter<MouseEvent>;
  /**
   * HTML d-input element
   */
  private htmlInputElement?;
  private changeHandler;
  private blurHandler;
  private focusHandler;
  private wheelHandler;
  private iconStartClickHandler;
  private iconEndClickHandler;
  private inputStart;
  private inputEnd;
  componentWillLoad(): void;
  render(): any;
}

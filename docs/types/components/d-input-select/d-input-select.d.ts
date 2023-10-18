import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DInputSelect implements ComponentInterface {
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
   * The select options
   */
  options: Array<Record<string, unknown>>;
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
   * Flag to disable the input
   */
  isDisabled: boolean;
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
   * The start icon for the select
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
   * The end icon for the select
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
   * The value selected of the component
   */
  selectedOption?: Record<string, unknown>;
  /**
   * Callback to extract the value from the option
   */
  valueExtractor: (item: any) => string | number;
  /**
   * Callback to extract the label from the option
   */
  labelExtractor: (item: any) => string;
  /**
   * Emitted when the select value has changed
   */
  eventChange: EventEmitter;
  /**
   * Emitted when blur the input
   */
  eventBlur: EventEmitter;
  /**
   * Emitted when click on the left icon
   */
  eventIconStartClick: EventEmitter<MouseEvent>;
  /**
   * Emitted when click on the right icon
   */
  eventIconEndClick: EventEmitter<MouseEvent>;
  private changeHandler;
  private blurHandler;
  private iconStartClickHandler;
  private iconEndClickHandler;
  render(): any;
}

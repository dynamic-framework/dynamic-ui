import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { FormControlLayoutDirection } from '../../utils/component-interface';
import type { SelectLayoutVariant } from './m-select-interface';
export declare class MSelect implements ComponentInterface {
  /**
   * Id of the select
   */
  mId: string;
  /**
   * The name of the input
   */
  name?: string;
  /**
   * The variant of the select
   */
  variant?: SelectLayoutVariant;
  /**
   * The select options
   */
  options: Array<Record<string, unknown>>;
  /**
   * The theme of the select
   */
  theme?: string;
  /**
   * The label of the select in full variant
   */
  label?: string;
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
   * The middle icon for the select
   */
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
   * The hint icon for the select in full variant
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
   * The hint icon for the select in full variant
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
   * The hint of the select in full variant
   */
  hint?: string;
  /**
   * The value selected of the component
   */
  selectedOption?: Record<string, unknown>;
  /**
   * Change the layout direction to put the label on top or left of select
   */
  layoutDirection: FormControlLayoutDirection;
  /**
   * The select is disabled
   */
  isDisabled: boolean;
  /**
   * Flag for loading state.
  */
  isLoading: boolean;
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
  mChange: EventEmitter;
  /**
   * Emitted when blur the input
   */
  mBlur: EventEmitter;
  private changeHandler;
  private blurHandler;
  private generateHostClasses;
  render(): any;
}

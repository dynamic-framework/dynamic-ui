import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { FormCheckType, FormCheckState } from './m-form-check-interface';
export declare class MFormCheck implements ComponentInterface {
  /**
   * Set whether is a checkbox input or a radio input
   */
  type: FormCheckType;
  /**
   * HTML Name to use within a form or JS reference
   */
  name?: string;
  /**
   * Text that will be displayed beside Check input or Radio input
   */
  label?: string;
  /**
   * Set checkbox or radio button marked as selected or not
   */
  isChecked: boolean;
  /**
   * Form control identifier
   */
  mId: string;
  /**
   * Set input as disabled
   */
  isDisabled: boolean;
  /**
   * State of checkbox or radio. The states could be:
   * Success state
   * Error state
   * Warning state
   * Loading state
   */
  state?: FormCheckState;
  /**
   * Set view of checkbox as indeterminated
   */
  isIndeterminate?: boolean;
  /**
   * A string representing the value of the checkbox or radio
   */
  value?: string;
  /**
   * Set checkbox as toggle button
   */
  isButton: boolean;
  /**
   * Emitted when the switch has changed
   */
  mChange: EventEmitter;
  private changeHandler;
  private generateClasses;
  render(): any;
}

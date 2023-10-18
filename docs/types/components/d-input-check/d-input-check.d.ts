import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { FormCheckType } from './d-input-check-interface';
export declare class DInputCheck implements ComponentInterface {
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
  innerId: string;
  /**
   * Set input as disabled
   */
  isDisabled: boolean;
  /**
   * Set view of checkbox as indeterminated
   */
  isIndeterminate?: boolean;
  /**
   * A string representing the value of the checkbox or radio
   */
  value?: string;
  /**
   * Emitted when the switch has changed
   */
  eventChange: EventEmitter;
  private changeHandler;
  render(): any;
}

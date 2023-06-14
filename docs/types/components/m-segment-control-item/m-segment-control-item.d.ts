import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { InputState } from '../../utils/component-interface';
export declare class MSegmentControlItem implements ComponentInterface {
  /**
   * Id of the radio
   */
  mId: string;
  /**
   * Name of the radio
   */
  name: string;
  /**
   * Label of the radio
   */
  label: string;
  /**
   * Value of the radio
   */
  value: string;
  /**
   * Is disabled
   */
  isDisabled?: boolean;
  /**
   * Is checked
   */
  isChecked?: boolean;
  /**
   * State of the input
   */
  state?: InputState;
  /**
   * Emitted when the input value has changed
   */
  mChange: EventEmitter<string>;
  private changeHandler;
  render(): any;
}

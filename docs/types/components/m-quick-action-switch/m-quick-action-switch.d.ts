import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class MQuickActionSwitch implements ComponentInterface {
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
   * Hint to display
   */
  hint: string;
  /**
   * Is checked
   */
  isChecked?: boolean;
  /**
   * Is disabled
   */
  isDisabled?: boolean;
  /**
   * Emitted when the select value has changed
   */
  mClick: EventEmitter<boolean>;
  private clickHandler;
  render(): any;
}

import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class MQuickActionSelect implements ComponentInterface {
  /**
   * The id of the input
   */
  mId: string;
  /**
   * Name of the input
   */
  name: string;
  /**
   * Input value
   */
  value: string;
  /**
   * Line 1 text
   */
  line1: string;
  /**
   * Line 2 text
   */
  line2: string;
  /**
   * Is selected
   */
  isSelected?: boolean;
  /**
   * Emitted when the select value has changed
   */
  mChange: EventEmitter<string>;
  private changeHandler;
  render(): any;
}

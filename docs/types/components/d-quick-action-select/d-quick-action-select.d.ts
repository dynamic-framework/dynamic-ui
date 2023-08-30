import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class DQuickActionSelect implements ComponentInterface {
  /**
   * The id of the input
   */
  innerId: string;
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
  eventChange: EventEmitter<string>;
  private changeHandler;
  render(): any;
}

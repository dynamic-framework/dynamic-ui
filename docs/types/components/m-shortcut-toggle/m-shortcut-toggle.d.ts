import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import { InputState } from '../../utils/component-interface';
export declare class MShortcutToggle implements ComponentInterface {
  /**
   * Id of the input
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
   * Shortcut label
   */
  label?: string;
  /**
   * Shortcut text
   */
  text?: string;
  /**
   * Shortcut text
   */
  subtext?: string;
  /**
   * Shortcut icon
   */
  icon?: string;
  /**
   * Icon family class
   */
  iconFamilyClass?: string;
  /**
   * Icon family class
   */
  iconFamilyPrefix?: string;
  /**
   * Is checked
   */
  isChecked?: boolean;
  /**
   * Input and shortcut state
   */
  state?: InputState;
  /**
   * Theme
   */
  white: boolean;
  /**
   * Emitted when the select value has changed
   */
  mChange: EventEmitter<string>;
  private changeHandler;
  render(): any;
}

import { EventEmitter } from '../../stencil-public-runtime';
import type { ComponentInterface } from '../../stencil-public-runtime';
export declare class DChip implements ComponentInterface {
  /**
   * The theme to use.
   */
  theme: string;
  /**
   * The text of chip
   */
  text?: string;
  /**
   * Name of icon to use (in kebab-case)
   */
  icon?: string;
  /**
   * Change the family class to use another icon suite
   */
  iconFamilyClass?: string;
  /**
   * Change the family prefix to use another icon suite
   */
  iconFamilyPrefix?: string;
  /**
   * Show close icon
   */
  showClose?: boolean;
  /**
   * Emitted when the close button has been clicked.
   */
  eventClose: EventEmitter;
  private closeHandler;
  generateClasses(): {
    [x: string]: boolean;
    'd-chip': boolean;
  };
  render(): any;
}
